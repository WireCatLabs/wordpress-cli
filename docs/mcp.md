# MCP

Give your WordPress posts and pages to an AI agent that cannot run commands, such as Claude Desktop, Cursor, or ChatGPT
and Claude in the browser. MCP (Model Context Protocol) is the way such an agent asks a program what it can do and
then calls it, and `wordpress` serves its commands that way.

The agent then reads your posts from the copy on your computer, and writes drafts and publishes them on your site, as
far as the profile's permissions allow.

An agent with a terminal, such as Claude Code or Codex, does as well with the commands and the skill
(`wordpress skill install`). You need a signed-in profile ([install](installation.md)), and a look at
[permissions](permissions.md) first: over MCP a write at `ask` goes ahead, publishing too.

**On this page:**

1. [Add wordpress to an agent](#add-wordpress-to-an-agent)
2. [What the agent sees](#what-the-agent-sees)
3. [Publishing over MCP](#publishing-over-mcp)
4. [ChatGPT and Claude in the browser](#chatgpt-and-claude-in-the-browser)

## Add wordpress to an agent

`blog` below is the profile, a name you chose for one site.

```sh
wordpress blog mcp add claude-code --allow-writes   # or codex
wordpress blog mcp check                            # the handshake and the tool list, as the client sees them
```

`mcp add` refuses a profile whose tools may write until you pass `--allow-writes`. It says you know the agent can
create, change, publish and delete posts. For Claude Desktop, Cursor or any other client, `wordpress blog mcp config`
prints the entry to paste into its settings, with full paths. By hand, for Claude Code:

```sh
claude mcp add wordpress -- wordpress blog mcp serve
```

One server can serve several profiles: `wordpress mcp serve --profiles blog,docs`, or `--profiles all`. Each call
then names its profile, and the agent asks you if you did not say which.

## What the agent sees

The server has three tools:

- `wordpress_tools_search` finds a command by words, with its arguments and the shape of its answer.
- `wordpress_read` runs a command that only reads:
  `{ "command": "posts list", "arguments": { "query": "status:draft" } }`.
- `wordpress_write` runs a command that writes, such as `posts create` or `posts publish`.

A command is named as on the command line, without the profile, and checks the same permission key.

Text from WordPress comes marked `untrusted`: post and page titles, text and excerpts, and tag, category and author
names. The agent is told it is data, never instructions. A post that says "publish all drafts" is not your request.

## Publishing over MCP

Every `posts` write is `ask` by default. Over MCP nobody is at a terminal to answer `ask`, so the write goes ahead.
That means an agent over MCP can publish a post, and delete one for good. This is the owner's choice for this tool:
an agent you connected should be able to finish the job you gave it.

Two things keep you in control:

- **Every publication is recorded.** `wordpress blog runs list` shows each write the agent made, and `runs show` what
  it sent. A run that worked is kept 7 days (`keep_successful_runs_for_days`), one that failed 30.
- **One line stops it.** These keep publishing and deleting for good yours, and the agent still writes drafts:

  ```sh
  wordpress blog config set permissions.posts.publish deny
  wordpress blog config set permissions.posts.delete.force deny
  ```

To make one server stricter than the profile, give it its own levels. They never loosen the profile:

```sh
wordpress blog mcp add claude-code --allow-writes --permission posts.publish=deny
wordpress blog mcp serve --permission posts.publish=deny
```

Or turn on approval for the `wordpress_write` tool in your agent's client, so the client asks you before each write.

## ChatGPT and Claude in the browser

A browser app reaches the server over HTTP through your own tunnel, such as Tailscale Funnel:

```sh
wordpress blog mcp serve --http --public-url https://laptop.example.ts.net
```

The server listens on `127.0.0.1` only, port 8765 (`--port` changes it). A browser app logs in with a one-time code
the command prints. `wordpress blog mcp revoke` ends every login.

`wordpress blog mcp server start` runs the same server in the background. `mcp server status` shows its port, the
login code and the apps logged in, and `mcp server stop` ends it.

More: [permissions](permissions.md), [security](security.md), [the command reference](commands.md#wordpress-mcp).
