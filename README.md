# wordpress: WordPress CLI for AI agents

A new WireCat CLI, started from cli-template. One tool for you and for Claude Code, Codex or any agent that speaks MCP.

<p align="center">
  <a href="https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/index.md">Docs</a> ·
  <a href="https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/installation.md">Install</a> ·
  <a href="https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/usage.md">Usage</a>
</p>

- **Every operation of the WordPress API is a command.** `wordpress api list` shows them, each with its own
  flags, help and `--json`.
- **Your agent gets the same commands as tools.** An MCP server and an agent skill come with it, no second codebase.
- **You decide what it may change.** Each profile allows, asks or denies each command, and a delete needs a key of
  its own.

## What you get

Ask your agent about WordPress. It finds the right command with `wordpress commands --json`, runs it, and answers
from the result. A command it may not run stops with a clear refusal before anything reaches WordPress.

## Why wordpress

- The token stays in the system keyring, and every command names the profile it uses.
- Every operation is tested against a strict fake built from the API description, in `src/api.test.ts`.
- `--dry-run` shows what a write would send, and sends nothing.

## Quick start

```sh
pnpm install
pnpm build
node dist/bin/wordpress.js doctor
```

Once it is on npm: `npm install -g @wirecat/wordpress-cli`, then `wordpress doctor`. Every command that uses an account
starts with a profile, a name you choose: `wordpress personal config show`.

Sign in once with `wordpress personal session start --site blog.example.com --login <user>`. It asks for an
application password, made in your WordPress profile, checks it on that site, and keeps both together (in the
keyring, unless `--credential-storage` says otherwise).
The password goes to that site alone, never to another site on the same host.

## Use it with your agent

```sh
wordpress personal mcp add claude-code
wordpress skill install
```

`wordpress personal mcp check` shows the tools your agent gets. `mcp add` refuses a profile whose tools may write
until you review its permissions and pass `--allow-writes`. `wordpress personal mcp config` prints the setup for
any other MCP client.

Over MCP nobody is there to answer `ask`, so the agent runs the API's writes and deletes without asking. Each
one is kept as a run in `wordpress personal runs list`. To stop that, make the profile read-only with
`wordpress personal config set permissions.api readonly`, or refuse one operation with
`wordpress personal config set permissions.api.<operation> deny`. `wordpress api list` names the operations.

## What needs which key

- **Publishing** needs `<route>.publish` (`posts.publish`, `pages.publish`): a write that sets `status` to
  `publish` or `future`, or that sets `date`, `date_gmt` or `password`, unless the same call sets `status` to
  `draft`, `pending` or `private`. WordPress publishes a scheduled post whose date moves into the past, and a
  password taken off a published post makes it public, with no status in the call. `private` is not public.
  Where a route's `status` starts at `publish` (menu items, for one), each create needs the key, as the
  write publishes unless it says otherwise.
- **Deleting** needs `<route>.delete`; with `force=true`, which deletes for good instead of moving to the trash,
  it needs `<route>.delete.force` too. Both ask by default.
- WordPress's batch route (`batch/v1`) is never offered: one batch call would run other routes' writes past
  their keys.

Known limit of the raw `api` group: WordPress publishes a scheduled post whose time has already passed (a
missed schedule) on any edit, a title change too. The CLI cannot see that without reading the post first.

## What it can do

[docs/commands.md](docs/commands.md) lists every command, and `--help` after any of them shows its flags.

## Settings and permissions

`wordpress personal config show` prints the profile's settings. See [docs/configuration.md](docs/configuration.md).

## Security

See [docs/security.md](docs/security.md), and [SECURITY.md](SECURITY.md) to report a problem.

## When something goes wrong

Run `wordpress doctor` and see [docs/troubleshooting.md](docs/troubleshooting.md). Report a bug on
[GitHub](https://github.com/WireCatLabs/wordpress-cli/issues).

## Development

Started from [cli-template](https://github.com/WireCatLabs/cli-template). Its design is in
[docs/dev/DESIGN.md](docs/dev/DESIGN.md), and the working rules are in [AGENTS.md](AGENTS.md). Published as
[@wirecat/wordpress-cli](https://www.npmjs.com/package/@wirecat/wordpress-cli).
