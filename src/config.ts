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
export const API = {
  manifest: { ...manifest, operations: serviceApiOperations(manifest).offered },
  service: "WordPress",
}

const api = serviceApiPermissions(API)

// cli-core lets every api write but a delete run unasked. These install code, give a user a role, or change the
// whole site, so they ask (WC-PERM-7: a CLI only tightens).
const SITE_WIDE_WRITES = {
  "api.plugins-create": "ask",
  "api.settings-create": "ask",
  "api.users-create": "ask",
  "api.users-update": "ask",
  "api.users-me-create": "ask",
} as const

export const permissions = commandPermissions({
  extra: [...new Set([...api.extra, ...CONTENT_WRITE_KEYS])],
  alsoChecks: (path) => [...api.alsoChecks(path), ...contentAlsoChecks(path)],
  defaults: { ...api.defaults, ...SITE_WIDE_WRITES, ...CONTENT_WRITE_DEFAULTS },
})

export const configuration: Configuration = settingsFor(IDENTITY, { permissions })
