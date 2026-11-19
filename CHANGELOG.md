# Changelog

Notable changes to `@wirecat/wordpress-cli`. One section per version, newest first.

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
