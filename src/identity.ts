import type { ManifestIdentity } from "@wirecat/cli-base/wcat/manifest"
import type { AppIdentity } from "@wirecat/cli-core/cli"
import { VERSION } from "./version.js"

export const SERVICE = "WordPress"

export const PACKAGE = "@wirecat/wordpress-cli"

export const IDENTITY: AppIdentity = {
  command: "wordpress",
  appName: "wordpress-cli",
  envPrefix: "WCWP",
  description: "WordPress posts and pages, searchable with your other WireCat data",
  version: VERSION,
  issues: "https://github.com/WireCatLabs/wordpress-cli/issues/new",
  messenger: false,
  contentLanguages: ["en"],
}

// What `wcat` and WireCat Desktop show before the tool is installed. The bin passes it to wcatStart before anything else loads; src/wcat.ts adds the permission keys.
export const DESKTOP = {
  ...IDENTITY,
  docs: "https://github.com/WireCatLabs/wordpress-cli#readme",
  hosts: [],
  tagline: "Your WordPress posts and pages for your agent",
  syncs: "your posts, pages and tags",
  signIn: {
    gives: "Lets your agent read your WordPress posts and pages, write drafts, and publish when you allow it.",
    asks:
      "Your site's address, your user name and an application password: in WordPress, Users → Profile → " +
      "Application Passwords. WordPress 5.7 or later, over https.",
  },
} satisfies ManifestIdentity

export const SKILL = new URL("../skills/wordpress-cli/SKILL.md", import.meta.url)
