#!/usr/bin/env bash
# The release's live check against the real service (WC-TEST-18, WC-REL-17). The owner runs bin/live, which prints
# the `# Needs:` lines below, passes the application password on stdin and records the pass. Every folder is a
# temporary one and the keyring is out of reach, so nothing touches the owner's store, keyring or settings. It only
# reads: it signs in, syncs into a temporary store, lists, and signs out.
#   scripts/live.sh --site <address> --login <user> < password-file
# Needs: a WordPress site you may test on (5.6 or later, over https), never a site that matters
# Needs: an application password of an Editor or Administrator on it, in the keyring entry bin/live names
# Needs: at least one post, one page and one tag or category on that site
set -euo pipefail
root=$(cd -- "$(dirname -- "$0")/.." && pwd)
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT

export WCWP_CONFIG_DIR="$work/config" WCWP_STATE_DIR="$work/state" WCWP_CACHE_DIR="$work/cache"
export MESSAGING_STORE="$work/wirecat.db"
export DBUS_SESSION_BUS_ADDRESS="disabled:"
unset WCWP_TOKEN
cli=(node "$root/dist/bin/wordpress.js")

pnpm --dir "$root" -s build >/dev/null
# Set after the build, which needs the owner's pnpm store: a CLI that moves its folders on start must not see the
# owner's home.
export HOME="$work/home" XDG_CONFIG_HOME="$work/xdg/config" XDG_DATA_HOME="$work/xdg/data"
export XDG_STATE_HOME="$work/xdg/state" XDG_CACHE_HOME="$work/xdg/cache"
mkdir -p "$HOME"

"${cli[@]}" --wcat-describe | node -e '
  const answer = JSON.parse(require("fs").readFileSync(0, "utf8"))
  if (answer.wcat_describe !== 2 || !/^[0-9a-f]{64}$/.test(answer.manifest_sha256)) throw new Error("not format 2")'

site="" login=""
while [ $# -gt 0 ]; do
  case "$1" in
    --site) site=$2; shift 2 ;;
    --login) login=$2; shift 2 ;;
    *) echo "usage: scripts/live.sh --site <address> --login <user> < password-file" >&2; exit 2 ;;
  esac
done
[ -n "$site" ] && [ -n "$login" ] || { echo "usage: scripts/live.sh --site <address> --login <user>" >&2; exit 2; }

"${cli[@]}" live session start --site "$site" --login "$login" --credential-storage file --json >/dev/null
trap '"${cli[@]}" live session end --json >/dev/null 2>&1 || true; rm -rf "$work"' EXIT

"${cli[@]}" live sync --json >"$work/sync.json"
"${cli[@]}" live posts list --json >"$work/posts.json"
"${cli[@]}" live tags list --json >"$work/tags.json"
"${cli[@]}" live channels list --json >"$work/channels.json"
node -e '
  const read = (name) => JSON.parse(require("fs").readFileSync(`${process.argv[1]}/${name}.json`, "utf8"))
  const sync = read("sync").item
  if (sync?.state !== "complete") throw new Error(`sync is ${sync?.state}: ${JSON.stringify(sync?.synced)}`)
  const posts = read("posts").items
  if (!posts?.some((one) => one.type === "post")) throw new Error("no post in the copy")
  if (!posts.some((one) => one.type === "page")) throw new Error("no page in the copy")
  if (!read("tags").items?.length) throw new Error("no tag or category in the copy")
  if (read("channels").items?.length !== 1) throw new Error("not one channel")
  console.log(`synced ${posts.length} posts and pages, ${read("tags").items.length} tags and categories`)' "$work"
"${cli[@]}" live doctor --json >/dev/null

"${cli[@]}" live session end --json >/dev/null
echo "live check passed: describe format 2, sign-in, sync, posts, tags, channels, doctor, sign-out"
