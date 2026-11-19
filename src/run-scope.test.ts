import { Readable } from "node:stream"
import { neverAnswers, runScopeCases } from "@wirecat/cli-core/testing"
import { describe, it } from "vitest"
import { API } from "./config.js"
import { definition } from "./program.js"
import { FAKE_SITE, FAKE_API_TOKEN as FAKE_TOKEN, fakeServiceApi } from "./testing/fake-api.js"

const [login, password] = FAKE_TOKEN.split(":") as [string, string]

import { signedIn } from "./testing/harness.js"

const stdin = () => Object.assign(Readable.from([password]), { isTTY: false })

// SAMPLE: give each of your remote commands the words that make it succeed against your fake.
describe("each remote command runs inside cli-core's run", () => {
  const cases = runScopeCases({
    definition: definition(),
    commands: {
      "session start": ["personal", "session", "start", "--site", FAKE_SITE, "--login", login],
      "session status": ["personal", "session", "status", "--check"],
    },
    skip: {
      ...Object.fromEntries(
        API.manifest.operations.map((operation) => [
          `api ${operation.command}`,
          "cli-core's serviceApiCommand runs it in its run; src/api.test.ts sends each one",
        ]),
      ),
      "mcp serve": "listens until stopped",
      sync: "cli-core's addContentCommands runs it in its run; src/content-contracts.test.ts syncs",
      "posts create": "cli-core's addContentCommands runs it in its run; src/content-contracts.test.ts writes",
      "posts update": "cli-core's addContentCommands runs it in its run; src/content-contracts.test.ts writes",
      "posts publish": "cli-core's addContentCommands runs it in its run; src/content-contracts.test.ts writes",
      "posts unpublish": "cli-core's addContentCommands runs it in its run; src/content-contracts.test.ts writes",
      "posts delete": "cli-core's addContentCommands runs it in its run; src/content-contracts.test.ts writes",
      doctor:
        "cli-core's appDoctorCommand answers --online outside a run of its own; drop this once core runs it inside",
    },
    answering: () => ({ keyring: signedIn(), fetch: fakeServiceApi().fetch, stdin: stdin() }),
    silent: () => ({ keyring: signedIn(), fetch: neverAnswers, stdin: stdin() }),
  })
  for (const one of cases) it(one.name, () => one.run())
})
