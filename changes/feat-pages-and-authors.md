### Added

- **`posts create --type page` and every write to a page.** A page is now written through WordPress's pages routes:
  create, update, publish, schedule, unpublish, trash and delete for good. A page has no tags, so `--tags` on a page
  stops with `content.write-unsupported`. `--dry-run` names the pages keys a page write checks.

### Fixed

- **An Editor or Author gets the authors.** WordPress lists the users with their e-mail to an Administrator only, and
  the sync got no authors at all for any other role. It now reads them the way WordPress answers every role: the
  authors with published posts, by name, without e-mail. The sync names this as a gap.
- **An Author or Contributor sync reads only the changes, and sees a post deleted for good.** Each sync read every post
  again, and a post deleted for good stayed in the copy. Later syncs now read only what changed. Once a day the sync
  reads each post that left the list once more: a post the site deleted for good is marked deleted, and one the role
  may no longer read stays as it was.
- **A post's text keeps its `-` list marker** instead of turning `- one` into `* one`.
- **`posts publish --at-time` with a past time names `--at-time`** in its error, not `--at`.
