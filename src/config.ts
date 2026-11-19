import {
  type Configuration,
  commandPermissions,
  serviceApiOperations,
  serviceApiPermissions,
  settingsFor,
} from "@wirecat/cli-core/cli"
import * as manifest from "./generated/manifest.js"
import { IDENTITY } from "./identity.js"

/** Each command is checked against its own path (`notes.list`); add the keys a command checks inside itself. */
// SAMPLE: your service's name. The keys a delete or a share checks come from `permissions` in
// scripts/generate.ts. The operations the api group cannot offer are left out: one that answers with a
// credential (the CLI signs in through `session`) and a body it cannot send, such as a multipart form.
export const API = {
  manifest: { ...manifest, operations: serviceApiOperations(manifest).offered },
  service: "WordPress",
}

export const permissions = commandPermissions(serviceApiPermissions(API))

export const configuration: Configuration = settingsFor(IDENTITY, { permissions })
