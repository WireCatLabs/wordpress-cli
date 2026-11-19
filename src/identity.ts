import type { ManifestIdentity } from "@wirecat/cli-base/wcat/manifest"
import type { AppIdentity } from "@wirecat/cli-core/cli"
import { VERSION } from "./version.js"

export const SERVICE = "WordPress"

export const PACKAGE = "@wirecat/wordpress-cli"

export const IDENTITY: AppIdentity = {
  command: "wordpress",
  appName: "wordpress-cli",
  envPrefix: "WCWP",
  description: "a new WireCat CLI, started from cli-template",
  version: VERSION,
  issues: "https://github.com/WireCatLabs/wordpress-cli/issues/new",
  messenger: false,
  contentLanguages: ["en"],
}

// What `wcat` and WireCat Desktop show before the tool is installed: rewrite the tagline and the sign-in texts for
// yours. The bin passes it to wcatStart before anything else loads; src/wcat.ts adds the permission keys.
export const DESKTOP = {
  ...IDENTITY,
  docs: "https://github.com/WireCatLabs/wordpress-cli#readme",
  hosts: [],
  tagline: "A new WireCat CLI, started from cli-template",
  syncs: "your authors, terms and posts",
  signIn: {
    gives: "Lets your agent read and change your account through wordpress.",
    asks: "An API token or key from the service.",
  },
} satisfies ManifestIdentity

export const SKILL = new URL("../skills/wordpress-cli/SKILL.md", import.meta.url)
