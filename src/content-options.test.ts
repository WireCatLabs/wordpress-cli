import { writeFileSync } from "node:fs"
import { join } from "node:path"
import { memoryKeyring } from "@wirecat/cli-base"
import { contentManifestFake } from "@wirecat/cli-core/content/testing"
import { expect, it } from "vitest"
import { API } from "./config.js"
import { SOURCE } from "./generated/wirecat-config.js"
import { FAKE_API_TOKEN, FAKE_SITE, fakeServiceApi } from "./testing/fake-api.js"
import { runCli } from "./testing/harness.js"

// Each write is checked on the fake's own rows, as WordPress would hold them after it.
it("every option of the content commands runs over a synced copy", async () => {
  const keyring = memoryKeyring()
  const [login, password] = FAKE_API_TOKEN.split(":") as [string, string]
  const started = await runCli(["options", "session", "start", "--site", FAKE_SITE, "--login", login, "--json"], {
    keyring,
    service: fakeServiceApi(),
    stdin: password,
  })
  expect(started.code, started.err).toBe(0)
  const service = contentManifestFake(SOURCE, { api: API.manifest })
  const ran = (argv: string[]) => runCli(["options", ...argv, "--json"], { keyring, service })
  const synced = await ran(["sync", "--rescan", "--max-pages", "50"])
  expect(synced.code, synced.err).toBe(0)
  const listed = (await ran(["posts", "list"])).json() as { items: { external_id: string; type: string }[] }
  const [first, second] = listed.items.filter((one) => one.type === "post").map((one) => one.external_id) as [
    string,
    string,
  ]
  const [tag] = service.ids("term") as [string]
  const text = join(process.env.WCWP_CONFIG_DIR ?? "", "..", "post.md")
  writeFileSync(text, "# Notes\n\nA short post.\n")
  const post = (id: string) =>
    service.rows.post?.[0]?.find((one) => String(one.id) === id) as
      | { status?: string; content?: { raw?: string } }
      | undefined
  const ok = async (argv: string[]) => {
    const answer = await ran(argv)
    expect(answer.code, `${argv.join(" ")}: ${answer.err}`).toBe(0)
    return answer
  }
  for (const argv of [
    ["channels", "list"],
    ["posts", "list", "--limit", "1", "--page", "1"],
    ["posts", "show", first],
    ["posts", "search", "post", "--limit", "1", "--page", "1"],
    ["posts", "stats", first],
    ["users", "list", "--limit", "1", "--page", "1"],
    ["tags", "list", "--limit", "1", "--page", "1"],
  ]) {
    await ok(argv)
  }

  const created = (
    await ok([
      "posts",
      "create",
      "--title",
      "Notes",
      "--text-file",
      text,
      "--description",
      "Short",
      "--slug",
      "notes",
      "--tags",
      tag,
      "--type",
      "post",
      "--yes",
    ])
  ).json() as { item: { post: { external_id: string } } }
  expect(post(created.item.post.external_id)).toMatchObject({
    status: "draft",
    title: { raw: "Notes" },
    excerpt: { raw: "Short" },
    slug: "notes",
    tags: [Number(tag)],
  })
  expect(String(post(created.item.post.external_id)?.content?.raw)).toContain("A short post.")

  await ok([
    "posts",
    "update",
    first,
    "--text-file",
    text,
    "--description",
    "New",
    "--slug",
    "new",
    "--tags",
    tag,
    "--yes",
  ])
  expect(post(first)).toMatchObject({ excerpt: { raw: "New" }, slug: "new", tags: [Number(tag)] })

  // An embed Markdown cannot hold: the body is kept unless --replace-body says to drop it.
  const embed = '<!-- wp:embed {"url":"https://example.com/v"} -->\n<figure>v</figure>\n<!-- /wp:embed -->'
  Object.assign(post(first) ?? {}, { content: { raw: embed } })
  await ok(["sync"])
  const kept = await ran(["posts", "update", first, "--text-file", text, "--yes"])
  expect(kept.err).toContain("content.lossy-body")
  expect(post(first)?.content).toEqual({ raw: embed })
  await ok(["posts", "update", first, "--text-file", text, "--replace-body", "--yes"])
  expect(String(post(first)?.content?.raw)).toContain("A short post.")

  await ok(["posts", "publish", first, "--yes"])
  expect(post(first)?.status).toBe("publish")
  await ok(["posts", "unpublish", first, "--yes"])
  expect(post(first)?.status).toBe("draft")
  await ok(["posts", "publish", first, "--at-time", "2030-01-01T10:00:00Z", "--yes"])
  expect(post(first)).toMatchObject({ status: "future", date_gmt: "2030-01-01T10:00:00Z" })

  await ok(["posts", "delete", second, "--yes"])
  expect(post(second)?.status).toBe("trash")
  await ok(["posts", "delete", second, "--allow-delete", "--yes"])
  expect(post(second)).toBeUndefined()
  expect(service.refusals).toEqual([])

  // --dry-run names what each write checks: the content key at its level, and the api key it sends through.
  type Preview = { item: { permission: { key: string; level: string; also?: { key: string }[] } } }
  const preview = async (argv: string[]) => ((await ran([...argv, "--dry-run"])).json() as Preview).item.permission
  const drafted = await preview(["posts", "create", "--title", "Notes"])
  expect(drafted).toMatchObject({ key: "posts.create", level: "ask" })
  expect(drafted.also?.map(({ key }) => key)).toContain("api.posts-create")
  const erased = await preview(["posts", "delete", first, "--allow-delete"])
  expect(erased).toMatchObject({ key: "posts.delete", level: "ask" })
  expect(erased.also?.map(({ key }) => key)).toEqual(expect.arrayContaining(["posts.delete.force", "api.posts-delete"]))
})

// FIND-2816: a page was read but not written; the config's writes.page names the pages routes.
it("writes a page through the pages routes, and refuses tags on it", async () => {
  const keyring = memoryKeyring()
  const [login, password] = FAKE_API_TOKEN.split(":") as [string, string]
  const started = await runCli(["pages", "session", "start", "--site", FAKE_SITE, "--login", login, "--json"], {
    keyring,
    service: fakeServiceApi(),
    stdin: password,
  })
  expect(started.code, started.err).toBe(0)
  const service = contentManifestFake(SOURCE, { api: API.manifest })
  const ran = (argv: string[]) => runCli(["pages", ...argv, "--json"], { keyring, service })
  expect((await ran(["sync"])).code).toBe(0)
  const page = (id: string) =>
    service.rows.post?.[1]?.find((one) => String(one.id) === id) as Record<string, unknown> | undefined
  const ok = async (argv: string[]) => {
    const answer = await ran(argv)
    expect(answer.code, `${argv.join(" ")}: ${answer.err}`).toBe(0)
    return answer.json() as { item: { post: { external_id: string; type: string } } }
  }
  const made = await ok(["posts", "create", "--type", "page", "--title", "Contact", "--yes"])
  const id = made.item.post.external_id
  expect(made.item.post.type).toBe("page")
  expect(page(id)).toMatchObject({ status: "draft", title: { raw: "Contact" } })
  await ok(["posts", "update", id, "--title", "Contact us", "--yes"])
  expect(page(id)).toMatchObject({ title: { raw: "Contact us" } })
  await ok(["posts", "publish", id, "--yes"])
  expect(page(id)?.status).toBe("publish")
  await ok(["posts", "unpublish", id, "--yes"])
  expect(page(id)?.status).toBe("draft")
  await ok(["posts", "publish", id, "--at-time", "2030-01-01T10:00:00Z", "--yes"])
  expect(page(id)).toMatchObject({ status: "future", date_gmt: "2030-01-01T10:00:00Z" })
  const tagged = await ran(["posts", "update", id, "--tags", service.ids("term")[0] as string, "--yes"])
  expect(tagged.err).toContain("content.write-unsupported")
  await ok(["posts", "delete", id, "--yes"])
  expect(page(id)?.status).toBe("trash")
  await ok(["posts", "delete", id, "--allow-delete", "--yes"])
  expect(page(id)).toBeUndefined()
  expect(service.writes).toEqual([
    "postWpV2Pages",
    "postWpV2PagesById",
    "postWpV2PagesById",
    "postWpV2PagesById",
    "postWpV2PagesById",
    "deleteWpV2PagesById",
    "deleteWpV2PagesById",
  ])
  expect(service.refusals).toEqual([])

  type Preview = { item: { permission: { also?: { key: string }[] } } }
  const preview = (await ran(["posts", "publish", id, "--dry-run"])).json() as Preview
  expect(preview.item.permission.also?.map(({ key }) => key)).toEqual(
    expect.arrayContaining(["api.pages-update", "pages.publish"]),
  )
})

// FIND-2815: an Editor is refused the users with context=edit; the config's fallback reads them with context=view.
it("lists the authors to a sign-in refused the users list, and names the gap", async () => {
  const keyring = memoryKeyring()
  const [login, password] = FAKE_API_TOKEN.split(":") as [string, string]
  const started = await runCli(["editor", "session", "start", "--site", FAKE_SITE, "--login", login, "--json"], {
    keyring,
    service: fakeServiceApi(),
    stdin: password,
  })
  expect(started.code, started.err).toBe(0)
  const service = contentManifestFake(SOURCE, { api: API.manifest, denied: ["getWpV2Users"] })
  const ran = (argv: string[]) => runCli(["editor", ...argv, "--json"], { keyring, service })
  const synced = (await ran(["sync"])).json() as { item: { gaps: { kind: string; scope?: string }[] } }
  expect(synced.item.gaps).toContainEqual(expect.objectContaining({ kind: "author", scope: "list_users" }))
  const users = (await ran(["users", "list"])).json() as { items: { external_id: string }[] }
  expect(users.items.map((one) => one.external_id).sort()).toEqual(service.ids("author").sort())
  expect(service.refusals).toEqual([])
})
