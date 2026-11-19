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
 * `api pages-create` (WC-PERM-22). Deletes need no entry: the generator gave them `posts.delete` already.
 */
const COMMAND_KEYS: Readonly<Record<string, string>> = {
  "posts-create": "posts.create",
  "posts-update": "posts.update",
  "pages-create": "posts.create",
  "pages-update": "posts.update",
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
}

const api = serviceApiPermissions(API)

/** The content commands write through the api group's operations, whose own keys the run checks too. */
const API_KEYS: Readonly<Record<string, string>> = {
  "posts.create": "api.posts-create",
  "posts.update": "api.posts-update",
  "posts.publish": "api.posts-update",
  "posts.unpublish": "api.posts-update",
  "posts.delete": "api.posts-delete",
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
    return [...api.alsoChecks(path), ...contentAlsoChecks(path), ...(own ? [own] : [])]
  },
  defaults: { ...api.defaults, ...SITE_WIDE_WRITES, ...CONTENT_WRITE_DEFAULTS },
})

export const configuration: Configuration = settingsFor(IDENTITY, { permissions })
