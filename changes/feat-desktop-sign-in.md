### Added

- **WireCat Desktop signs in to WordPress in its own window, also for a tool added from its describe.**
  `--wcat-describe` now lists the application password sign-in with its `--site` and `--login` flags, so Desktop asks
  for the site, the user name and the password, and sends the password on stdin.

### Fixed

- **`posts publish` and `posts unpublish` ask one question**, not `posts.update` a second time.
- **`session --help` and `api --help` name WordPress's own sign-in and spec**: the application password, and its
  index at `/wp-json`.
