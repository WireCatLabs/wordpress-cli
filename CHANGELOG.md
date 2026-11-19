# Changelog

Notable changes to `@wirecat/wordpress-cli`. One section per version, newest first.

## 0.1.0 — 19.11.2026

### Added

- Started from `@wirecat/cli-template` 0.32.0.
- Built from one file, `wirecat.config.ts`, with no hooks, plus two command names and the permission key form in
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
  `--json`. Publishing and deleting for good need their own keys. Installing a plugin, changing a site setting, and
  making or changing a user ask by default. `batch/v1` and making an application password are never offered.
