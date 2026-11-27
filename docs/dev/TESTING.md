# Testing

How the tests run, and what they never touch. The rules are the handbook's
[Testing page](../../node_modules/@wirecat/cli-base/docs/standards/testing.md).

- `pnpm test` runs vitest. `@wirecat/cli-base/testing/setup` gives each test file its own temporary home folder, a
  keyring that throws and no network, and points this CLI's config, state, cache and the shared store into that
  folder. `src/testing/sandbox.ts` names the config folder, which tests write into by name.
- `pnpm test:coverage` adds the coverage floor in `vitest.config.ts`.
- A script that starts the built bin runs it through `scripts/sandboxed.ts`, as `lint:commands` and the smoke tests
  do: a temporary home folder, its `XDG_*` folders, no `WCWP_*` overrides and the keyring out of reach. A run
  that sees your home can move your real folders.
- `pnpm test:slow` lists the 20 slowest tests and the 10 slowest files. No test waits for real time (`WC-TEST-5`):
  waits go through an injected sleep, and `fakeClock()` from `@wirecat/cli-base/testing` records them.
- Every test has 15 s (`testTimeout` in `vitest.config.ts`), and a test that builds big data runs within 3 s on your
  machine, since a slow CI runner takes up to five times as long (`WC-TEST-20`). Shrink the data; never raise one
  test's timeout. From cli-base 0.107.0, `pnpm test:slow` warns about each test over 3 s.
- Each run logs the command lines the tests drove (`coverage/argv.jsonl`). `pnpm test:matrix` turns that log into
  [test-matrix.md](test-matrix.md); a command or option no test drives needs a reason in
  `scripts/test-matrix-untested.ts`.
- `pnpm contracts:check` runs the built CLI against `contracts/plan.json`: help, discovery, errors and the MCP tool
  list. `pnpm exec cli-contract contracts/plan.json --update` rewrites the snapshots; review the diff.
- `src/mcp.test.ts` pins `contracts/mcp-catalogue.json`: this CLI's own commands an agent can find over MCP, each a
  read or a write, from cli-core's `ownCatalogue`. What cli-core mounts is left out, since cli-core pins it, so a
  cli-core release does not rewrite the file. Pin a shared command here only when this CLI changes it on purpose.
- `pnpm contracts:upgrade` does not exist yet, and `.github/workflows/ci.yml` skips the step. It needs both local
  state of the CLI's own (a store, a sync cursor, any other file its code writes and reads back) and a published
  version to upgrade from; the skeleton has neither, and the config file and run records are cli-core's
  ([WC-TEST-14](../../node_modules/@wirecat/cli-base/docs/standards/testing.md)). Once the CLI keeps such state and its
  first version is on npm, add `contracts/upgrade.json` with `"previous": {}`: `cli-contract` then installs the newest
  published version at or below this one by itself
  ([cli-testing's contracts guide](https://github.com/WireCatLabs/cli-testing/blob/main/docs/ci/CONTRACTS.md)), so no
  version is kept by hand. Seed the state with the previous version's public commands only, never by importing its
  internal modules, which move from one release to the next. Then add the script, which runs
  `cli-contract contracts/upgrade.json`, and remove the skip.
- `pnpm smoke` installs the packed package into a temporary folder and runs it offline.
- `pnpm audit:commands` audits the command tree beside the latest published WireCat CLIs.

## The bundle a user installs

`pnpm build` compiles `src/` with `tsc`, then cli-base's `cli-dev bundle`
([WC-LAY-10](https://github.com/WireCatLabs/cli-base/blob/main/docs/standards/layout.md))
bundles `dist/bin/wordpress.js` into `dist/bundle/` and makes the bin a loader. The vitest suite runs
against `src/`, so `scripts/smoke-bundle.ts` is the proof the bundle works: `pnpm smoke:node` runs it
under Node and `pnpm smoke:bun` under Bun, both in CI.

## The live check on a throwaway WordPress

`bin/release` publishes only code that passed `scripts/live.sh` (`bin/live`). The check needs a WordPress over https
with an Editor's application password. A local [WordPress Playground](https://wordpress.github.io/wordpress-playground/)
is enough: it holds no real data, so an agent may start it and run the check without the owner. The keyring entry
`wordpress-cli-live` / `wc-local` only ever holds this throwaway password.

1. Pick an empty folder outside the repository, `D` below, and install the Playground CLI there (about 0.8 GB):

   ```sh
   mkdir -p $D/pg/home $D/pg/tmp $D/out $D/tls && chmod 700 $D/out && cd $D/pg && echo '{"private":true}' > package.json
   HOME=$D/pg/home npm_config_cache=$D/pg/.npm-cache npm install --no-audit --no-fund @wp-playground/cli@3.1.64
   ```

2. Make a test certificate for `localhost`. The CLI speaks https only, and the Playground serves http:

   ```sh
   cd $D/tls
   openssl req -x509 -newkey rsa:2048 -nodes -days 7 -subj "/CN=wc-live test CA" -keyout ca.key -out ca.crt \
     -addext "basicConstraints=critical,CA:TRUE" -addext "keyUsage=critical,keyCertSign"
   openssl req -newkey rsa:2048 -nodes -subj "/CN=localhost" -keyout site.key -out site.csr
   printf "subjectAltName=DNS:localhost,IP:127.0.0.1\nbasicConstraints=CA:FALSE\nextendedKeyUsage=serverAuth\n" > ext.cnf
   openssl x509 -req -in site.csr -CA ca.crt -CAkey ca.key -CAcreateserial -days 7 -extfile ext.cnf -out site.crt
   ```

3. Write `$D/proxy.mjs`, which serves `https://localhost:18443` from the Playground on port 19400. Put the real
   path of `$D/tls` in `DIR`:

   ```js
   import { request } from "node:http"
   import { createServer } from "node:https"
   import { readFileSync } from "node:fs"

   const DIR = "/path/to/D/tls"
   const tls = { key: readFileSync(`${DIR}/site.key`), cert: readFileSync(`${DIR}/site.crt`) }

   createServer(tls, (req, res) => {
     const upstream = request(
       { host: "127.0.0.1", port: 19400, method: req.method, path: req.url,
         headers: { ...req.headers, "x-forwarded-proto": "https" } },
       (answer) => {
         res.writeHead(answer.statusCode, answer.headers)
         answer.pipe(res)
       },
     )
     upstream.on("error", () => res.writeHead(502).end())
     req.pipe(upstream)
   }).listen(18443, "127.0.0.1")
   ```

4. Write `$D/blueprint.json`. It makes the Editor, a tag, and the Editor's application password, which it writes to
   `/out/app-password` (mode 600) and never prints:

   ```json
   {
     "steps": [
       { "step": "defineWpConfigConsts", "consts": { "WP_ENVIRONMENT_TYPE": "local" } },
       { "step": "wp-cli", "command": "wp user create editor editor@example.com --role=editor --user_pass=throwaway-not-used-1" },
       { "step": "wp-cli", "command": "wp term create post_tag live-check" },
       { "step": "runPHP", "code": "<?php require '/wordpress/wp-load.php'; $u = get_user_by('login', 'editor'); $made = WP_Application_Passwords::create_new_application_password($u->ID, ['name' => 'wirecat-live']); file_put_contents('/out/app-password', $made[0]); chmod('/out/app-password', 0600);" }
     ]
   }
   ```

5. Start both in the background and keep their process ids. Wait for `Ready!` in `$D/playground.log`:

   ```sh
   cd $D && HOME=$D/pg/home TMPDIR=$D/pg/tmp nohup pg/node_modules/.bin/wp-playground-cli server --port=19400 \
     --site-url=https://localhost:18443 --workers=2 --blueprint=$D/blueprint.json --mount=$D/out:/out \
     > $D/playground.log 2>&1 & echo $! > $D/playground.pid
   nohup node $D/proxy.mjs > $D/proxy.log 2>&1 & echo $! > $D/proxy.pid
   ```

6. Store the password in the keyring straight from the file, then run the check on the pull request's branch:

   ```sh
   secret-tool store --label="wordpress live check (local playground)" service wordpress-cli-live account wc-local \
     < $D/out/app-password
   NODE_EXTRA_CA_CERTS=$D/tls/ca.crt bin/live wc-local --site https://localhost:18443 --login editor
   ```

   `bin/live` asks `Run it? [y/N]` only in a terminal. An agent runs it as
   `script -qec "bin/live wc-local --site https://localhost:18443 --login editor" /dev/null` and answers `y`.

7. Stop both by their process ids: `kill $(cat $D/playground.pid) $(cat $D/proxy.pid)`. The site and its data are
   gone with the process. The next check starts from step 5 with a new password.
