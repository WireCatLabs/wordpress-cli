### Fixed

- **An Author or Contributor sign-in syncs their own posts again.** WordPress refuses both roles the pages list, and
  that refusal stopped the whole sync of posts: after the first run, changes on the site no longer reached the copy.
  The sync now skips the pages for a role without the right to edit pages, says so in its gaps, and copies the posts.
