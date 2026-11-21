import { describeProgram } from "@wirecat/cli-base/commands"
import { buildManifest, manifestSchema } from "@wirecat/cli-base/wcat/manifest"
import * as v from "valibot"
import { describe, expect, it } from "vitest"
import { createProgram } from "./program.js"
import { WCAT } from "./wcat.js"

describe("WCAT", () => {
  it("builds a manifest WireCat Desktop accepts", () => {
    const manifest = buildManifest({
      identity: WCAT,
      commands: describeProgram(createProgram()),
      pkg: { name: "@wirecat/wordpress-cli", bin: { "wcat-wordpress": "dist/bin/wordpress.js" } },
      skills: true,
    })

    expect(v.safeParse(manifestSchema, manifest).issues).toBeUndefined()
    expect(manifest.desktop.tagline).toBe(WCAT.tagline)
  })

  // WireCat Desktop's catalog entry signs in with these words and flags (wirecat-desktop #459); a tool added from its
  // describe gets the same window sign-in only when the manifest says so.
  it("offers Desktop the sign-in with the site, the user name and the password on stdin", () => {
    const manifest = buildManifest({
      identity: WCAT,
      commands: describeProgram(createProgram()),
      pkg: { name: "@wirecat/wordpress-cli", bin: { "wcat-wordpress": "dist/bin/wordpress.js" } },
      skills: true,
    })
    expect(manifest.desktop.signIn?.methods).toEqual([
      {
        id: "app-password",
        label: "WordPress application password",
        words: ["{profile}", "session", "start", "--json"],
        stdin: true,
        site: "--site",
        login: "--login",
      },
    ])
  })
})
