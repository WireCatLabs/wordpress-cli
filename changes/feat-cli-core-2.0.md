### Changed — may break callers

- **cli-core 2.0.0 (store version 78).** Every WireCat CLI moves to cli-core 2.0 on the same day, because they share
  one store. Once a 2.0 build opens the store, a 1.x build of any WireCat CLI refuses it, so update all of them
  together. In JSON output an agent is now `"agent"` (`agent:<id>`) where it was `"bot"`, and a sender bot is
  `bot:<id>` where it was `sender-bot:<id>`. A copy of the store is made before the upgrade.

### Fixed

- **`session status` and `session list` are cli-core's own commands now**, so the MCP snapshot
  `contracts/mcp-catalogue.json` no longer lists them as this CLI's own. The first help screen points at
  `wordpress session list`.
