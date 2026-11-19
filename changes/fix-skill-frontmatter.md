### Fixed

- **The agent skill's header is valid YAML again.** `skills/wordpress-cli/SKILL.md` had `site: posts` in its
  unquoted `description`, which a YAML reader takes as a new key and refuses. Agents and wirecat.dev that read the
  skill's header now can.
