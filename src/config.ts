import {
  type Configuration,
  commandPermissions,
  serviceApiOperations,
  serviceApiPermissions,
  settingsFor,
} from "@wirecat/cli-core/cli"
import { CONTENT_WRITE_DEFAULTS, CONTENT_WRITE_KEYS, contentAlsoChecks } from "@wirecat/cli-core/content"
import * as manifest from "./generated/manifest.js"
import { IDENTITY } from "./identity.js"

/**
 * The operations the api group cannot offer are left out: one that answers with a credential (the CLI signs in
 * through `session`) and a body it cannot send, such as a multipart form.
 */
/**
 * The content command each raw write does the same as, so `posts.create: deny` also stops `api posts-create` and
 * `api pages-create` (WC-PERM-22). A post's delete needs no entry: the generator gave it `posts.delete` already, and a
 * page's only `pages.delete`.
 */
const COMMAND_KEYS: Readonly<Record<string, string>> = {
  "posts-create": "posts.create",
  "posts-update": "posts.update",
  "pages-create": "posts.create",
  "pages-update": "posts.update",
  "pages-delete": "posts.delete",
}

const offered = serviceApiOperations(manifest).offered
export const API = {
  manifest: {
    ...manifest,
    operations: offered.map((operation) => {
      const key = COMMAND_KEYS[operation.command]
      return key ? { ...operation, permissions: [...(operation.permissions ?? []), { key }] } : operation
    }),
  },
  service: "WordPress",
  spec: "its index at /wp-json",
}

const api = serviceApiPermissions(API)

/** The content commands write through the api group's operations, whose own keys the run checks too. */
const NOT_PAGE = "the post is not a page"
const API_KEYS: Readonly<Record<string, { key: string; when: string }>> = {
  "posts.create": { key: "api.posts-create", when: NOT_PAGE },
  "posts.update": { key: "api.posts-update", when: NOT_PAGE },
  "posts.publish": { key: "api.posts-update", when: NOT_PAGE },
  "posts.unpublish": { key: "api.posts-update", when: NOT_PAGE },
  "posts.delete": { key: "api.posts-delete", when: NOT_PAGE },
}
const PAGE = "the post is a page"
/** A page goes through the pages routes, whose publish and delete keys are the pages' own. */
const PAGE_KEYS: Readonly<Record<string, readonly { key: string; when: string }[]>> = {
  "posts.create": [{ key: "api.pages-create", when: PAGE }],
  "posts.update": [
    { key: "api.pages-update", when: PAGE },
    { key: "pages.publish", when: "the post is a page that is published or scheduled" },
  ],
  "posts.publish": [
    { key: "api.pages-update", when: PAGE },
    { key: "pages.publish", when: PAGE },
  ],
  "posts.unpublish": [{ key: "api.pages-update", when: PAGE }],
  "posts.delete": [
    { key: "api.pages-delete", when: PAGE },
    { key: "pages.delete", when: PAGE },
    { key: "pages.delete.force", when: "the post is a page, with --allow-delete" },
  ],
}

// cli-core lets every api write but a delete run unasked. These install code, give a user a role, or change what
// every visitor sees, so they ask (WC-PERM-7: a CLI only tightens). A new comment is public at once.
const SITE_WIDE_WRITES = Object.fromEntries(
  [
    "plugins-create",
    "settings-create",
    "users-create",
    "users-update",
    "users-me-create",
    "comments-create",
    "comments-update",
    "templates-create",
    "template-parts-create",
    "sidebars-update",
    "widgets-create",
    "widgets-update",
    "menus-create",
    "menus-update",
    "menu-items-create",
    "menu-items-update",
    "navigation-create",
    "navigation-update",
  ].map((command) => [`api.${command}`, "ask" as const]),
)

export const permissions = commandPermissions({
  extra: [...new Set([...api.extra, ...CONTENT_WRITE_KEYS])],
  alsoChecks: (path) => {
    const own = API_KEYS[path.join(".")]
    const page = PAGE_KEYS[path.join(".")] ?? []
    return [...api.alsoChecks(path), ...contentAlsoChecks(path), ...(own ? [own] : []), ...page]
  },
  defaults: { ...api.defaults, ...SITE_WIDE_WRITES, ...CONTENT_WRITE_DEFAULTS },
})

export const configuration: Configuration = settingsFor(IDENTITY, { permissions })
