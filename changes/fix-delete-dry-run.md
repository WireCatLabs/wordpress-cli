### Fixed

- **`posts delete --dry-run` names `api.posts-delete` too.** The delete sends through the `api` group's delete, whose
  own key the run checks. With `posts.delete` set to `allow`, the preview said `allow` while the run still asked.
