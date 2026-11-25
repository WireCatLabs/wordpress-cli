### Changed — may break callers

- **`sync --rescan` no longer lets a sync mark most of the copy deleted.** It only lists everything again; a sync that
  would mark most posts deleted is still held. The one way past it is the new owner-only `sync --allow-deletions
  <count>`, with the number the held message names. An MCP client is not offered the flag. See
  [usage](../docs/usage.md#sync).
- **Built on cli-core 1.0.0 and cli-base 1.0.0.** The generated API files read their types from
  `@wirecat/cli-base/codegen/runtime`, and `scripts/spec-model.ts` uses `ModelOverride`. Store version 73 comes with
  cli-core 1.0: once a 1.0 tool opens the store, a 0.x tool refuses it, so upgrade every WireCat CLI together.
