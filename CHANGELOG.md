# Changelog

Notable changes to `@wirecat/wordpress-cli`. One section per version, newest first.

## 0.5.0 — 27.11.2026

### Changed — may break callers

- **cli-core 2.0.0 (store version 78).** Every WireCat CLI moves to cli-core 2.0 on the same day, because they share
  one store. Once a 2.0 build opens the store, a 1.x build of any WireCat CLI refuses it, so update all of them
  together. In JSON output an agent is now `"agent"` (`agent:<id>`) where it was `"bot"`, and a sender bot is
  `bot:<id>` where it was `sender-bot:<id>`. A copy of the store is made before the upgrade.

### Fixed

- **`session status` and `session list` are cli-core's own commands now**, so the MCP snapshot
  `contracts/mcp-catalogue.json` no longer lists them as this CLI's own. The first help screen points at
  `wordpress session list`.

## 0.4.0 — 26.11.2026

### Changed — may break callers

- **`sync --rescan` no longer lets a sync mark most of the copy deleted.** It only lists everything again; a sync that
  would mark most posts deleted is still held. The one way past it is the new owner-only `sync --allow-deletions
  <count>`, with the number the held message names. An MCP client is not offered the flag. See
  [usage](docs/usage.md#sync).
- **Built on cli-core 1.0.0 and cli-base 1.0.0.** The generated API files read their types from
  `@wirecat/cli-base/codegen/runtime`, and `scripts/spec-model.ts` uses `ModelOverride`. Store version 73 comes with
  cli-core 1.0: once a 1.0 tool opens the store, a 0.x tool refuses it, so upgrade every WireCat CLI together.

## 0.3.0 — 21.11.2026

### Added

- **WireCat Desktop signs in to WordPress in its own window, also for a tool added from its describe.**
  `--wcat-describe` now lists the application password sign-in with its `--site` and `--login` flags, so Desktop asks
  for the site, the user name and the password, and sends the password on stdin.

### Fixed

- **`posts publish` and `posts unpublish` ask one question**, not `posts.update` a second time.
- **`--help` names WordPress's own sign-in and spec**: the `session` group says application password, and `api` says
  its index at `/wp-json`.

## 0.2.0 — 21.11.2026

### Added

- **`posts create --type page` and every write to a page.** A page is now written through WordPress's pages routes:
  create, update, publish, schedule, unpublish, trash and delete for good. A page has no tags, so `--tags` on a page
  stops with `content.write-unsupported`. `--dry-run` names the pages keys a page write checks.

### Changed — may break callers

- **cli-core 0.716.0 and cli-base 0.125.3.** cli-base now marks a new application password in an answer as secret,
  so the `api` group no longer offers any call whose answer can hold one: `users-application-passwords-create`,
  `-list`, `-get`, `-update` and `-introspect-list`. The hand-written exclusion of that route is gone, and
  `api users-application-passwords-delete-all` is back, asking first like every delete.
- **`posts.delete: deny` also stops `api pages-delete`.** A page's delete route checked only `pages.delete`, so the
  content key did not reach it, as it already did for the posts route and for creating and updating a page.

### Fixed

- **The installation guide says what an Author or Contributor gets.** Their own posts and no pages, as in the
  [limits](docs/index.md#limits). It still said their posts sync stays partial, which 0.1.2 fixed.
- **An Editor or Author gets the authors.** WordPress lists the users with their e-mail to an Administrator only, and
  the sync got no authors at all for any other role. It now reads them the way WordPress answers every role: the
  authors with published posts, by name, without e-mail. The sync names this as a gap.
- **An Author or Contributor sync reads only the changes, and sees a post deleted for good.** Each sync read every post
  again, and a post deleted for good stayed in the copy. Later syncs now read only what changed. Once a day the sync
  reads each post that left the list once more: a post the site deleted for good is marked deleted, and one the role
  may no longer read stays as it was.
- **A post's text keeps its `-` list marker** instead of turning `- one` into `* one`.
- **`posts publish --at-time` with a past time names `--at-time`** in its error, not `--at`.

## 0.1.2 — 19.11.2026

### Fixed

- **An Author or Contributor sign-in syncs their own posts again.** WordPress refuses both roles the pages list, and
  that refusal stopped the whole sync of posts: after the first run, changes on the site no longer reached the copy.
  The sync now skips the pages for a role without the right to edit pages, says so in its gaps, and copies the posts.

## 0.1.1 — 19.11.2026

### Fixed

- **`posts delete --dry-run` names `api.posts-delete` too.** The delete sends through the `api` group's delete, whose
  own key the run checks. With `posts.delete` set to `allow`, the preview said `allow` while the run still asked.
- **The agent skill's header is valid YAML again.** `skills/wordpress-cli/SKILL.md` had `site: posts` in its
  unquoted `description`, which a YAML reader takes as a new key and refuses. Agents and wirecat.dev that read the
  skill's header now can.

## 0.1.0 — 19.11.2026

### Added

- Started from `@wirecat/cli-template` 0.32.0.
- Built from one file, `wirecat.config.ts`, with no hooks, plus one command name and the permission key form in
  `scripts/generate.ts`.
- **`wordpress <profile> session start --site <address> --login <user>` signs in with an application password**
  from stdin, checked against `GET /wp/v2/users/me`, and keeps it with its site. It goes to that site alone.
- **`wordpress <profile> sync` copies your posts and pages into WireCat's local store**, every status and the trash
  too, with their tags, categories and authors. The text is kept as Markdown. Later syncs read only what changed.
- **`wordpress <profile> posts list|show|search|stats`, `tags list`, `users list` and `channels list` read the
  copy**, offline too.
- **`wordpress <profile> posts create|update|publish|unpublish|delete` write to the site.** A new post is a draft.
  Publishing, now or with `--at-time`, has its own key. A delete goes to the trash, and `--allow-delete` deletes for
  good. Each asks by default. A post with blocks or embeds that Markdown cannot keep keeps its body unless
  `--replace-body`, and a post changed on the site since the last sync is not overwritten. Pages are read, not
  written: a write to a page stops with `content.write-unsupported`.
- **`wordpress <profile> api` runs every `wp/v2` route of WordPress 6.9.4**, each with its own flags, help and
  `--json`. Publishing and deleting for good need their own keys. Installing a plugin, changing a site setting,
  making or changing a user or a comment, and changing templates, widgets, menus or navigation ask by default.
  `api posts-create` and `api pages-create` check `posts.create` too, and their updates check `posts.update`.
  `batch/v1` and making an application password are never offered.
