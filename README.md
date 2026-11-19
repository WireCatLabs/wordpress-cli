# wordpress: WordPress CLI and MCP server for AI agents

<p align="center">
  Write and check your blog without opening wp-admin. Ask Claude, ChatGPT, Codex or any AI agent, and it answers from
  a copy of your WordPress posts and pages on your computer, and writes drafts for you to publish.
</p>

<p align="center">
  <a href="https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/index.md">Docs</a> ·
  <a href="https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/installation.md">Install</a> ·
  <a href="https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/usage.md">Usage</a> ·
  <a href="https://discord.gg/DebENqbRrJ">Discord</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@wirecat/wordpress-cli"><img src="https://img.shields.io/npm/v/@wirecat/wordpress-cli" alt="npm"></a>
  <a href="https://github.com/WireCatLabs/wordpress-cli/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue" alt="License: Apache 2.0"></a>
</p>

- **Ask instead of clicking.** "Which drafts did I start this month?" gets an answer in a second, in Claude Code,
  Codex, Claude Desktop or any app that speaks MCP.
- **Your site, offline.** Posts and pages with every status, the trash too, are kept on your computer as Markdown.
- **Drafts from your agent, publishing on your word.** The agent writes a draft. Publishing is a step of its own,
  with its own permission.

## What you get

- **The answer, not the search.** Ask about a post in your own words. The agent finds it by its title and text, with
  its status, tags and author.
- **Every draft and scheduled post in one list.** Filter by status, by tag, by author or by the day it went out.
- **Drafts written for you.** Hand the agent your notes, and it makes a draft with a title, an excerpt and tags.
- **Publish now or later.** Publish a draft at once, or schedule it for a time you name. Take a post back to a draft
  with one command.
- **The whole WordPress API too.** Media, comments, menus and the rest of the site, one command per operation.

```text
You:    Which drafts do I have about pricing?
Agent:  (runs wordpress blog posts search pricing, then posts list status:draft)
        · 41 "Why we changed our pricing", draft, last changed on Monday
        · 57 "Pricing FAQ", draft, tags: pricing, faq
You:    Turn my notes in pricing-notes.md into a third draft.
Agent:  (runs wordpress blog posts create --title "Pricing in 2027" --text-file pricing-notes.md)
        Draft 63 is ready. Publish it when you want.
```

*Invented posts, illustrative output.*

## Why wordpress

- **A copy of your site on your computer.** `sync` copies your posts and pages, tags, categories and authors into a
  local store. Lists and search answer from it with no request to your site, also offline.
- **A permission on every action.** Creating, changing, publishing and deleting each have their own key, and each
  asks first at a terminal. `WCWP_READ_ONLY=1` stops every write.
- **The password stays in your system keyring.** It never appears in output, errors or run records, and is never
  taken as an argument.
- **Your posts beside your other context.** They sit in the same local store as your messages, mail, notes and
  meetings from the other WireCat tools.
- **Safe edits.** A write checks that the post did not change on the site since the last sync. A post with
  galleries or embeds keeps its body unless you say to replace it.
- **Free and open source.** Apache 2.0.

## Quick start

```sh
npm install -g @wirecat/wordpress-cli
wordpress skill install          # the agent skill, for Claude Code, Codex, Gemini CLI and OpenClaw
wordpress blog session start --site blog.example.com --login anna   # paste your application password
wordpress blog sync              # copy your posts, pages, tags and authors
wordpress blog posts list status:draft
```

`blog` is a profile, a name you choose for one site and one WordPress user. It is the first word of every command
that uses an account, and none is ever assumed.

**The application password.** In WordPress, open Users → Profile, find Application Passwords, give the new password
a name and click Add. WordPress 5.6 or later makes it, and only over https. `session start` asks for it without
showing it, checks it with your site and keeps it with that site in the system keyring. The password goes to that
site alone, never to another site on the same host. For a full copy, sign in as an Administrator.

The command is `wordpress`, not `wp`: the official WP-CLI already uses `wp`. You need Node.js 22.16 or a later 22.x,
or Node.js 24 or later. `wordpress doctor` needs no network and shows what is set up.

More: [installation and sign-in, step by step](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/installation.md)

## Use it with your agent

Ask in plain words. The agent picks the commands.

> *"Use wordpress. What did I publish last month, and what is still a draft?"*
> *"Use wordpress. Write a draft from notes.md and tag it release."*
> *"Use wordpress. Schedule draft 63 for Monday 9:00."*

- **Claude Code, Codex, Gemini CLI** and other agents with a terminal run `wordpress` themselves.
  `wordpress skill install` teaches them how.
- **Claude Desktop, Cursor** and other MCP apps connect to the WordPress MCP server, `wordpress blog mcp serve`.
- **ChatGPT or Claude in the browser** reach it through your own tunnel, after a login with a one-time code.

```sh
wordpress blog config set permissions.posts.publish deny   # an agent writes drafts, you publish
wordpress blog mcp add claude-code --allow-writes          # or: codex
wordpress blog mcp config                                  # the entry for Claude Desktop, Cursor and others
```

Over MCP nobody is at a terminal to answer a question, so a write set to `ask` goes ahead. An agent over MCP can
publish a post. That is the owner's choice for this tool, and `wordpress blog runs list` keeps a record of every
publication. The first line above stops it.

More: [agents and MCP](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/mcp.md) ·
[permissions](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/permissions.md)

## What needs which key

- **Publishing** needs `<route>.publish` (`posts.publish`, `pages.publish`): a write that sets `status` to
  `publish` or `future`, or that sets `date`, `date_gmt` or `password`, unless the same call sets `status` to
  `draft`, `pending` or `private`. WordPress publishes a scheduled post whose date moves into the past, and a
  password taken off a published post makes it public, with no status in the call. `private` is not public.
  Where a route's `status` starts at `publish` (menu items, for one), each create needs the key, as the
  write publishes unless it says otherwise.
- **Deleting** needs `<route>.delete`. With `force=true`, which deletes for good instead of moving to the trash,
  it needs `<route>.delete.force` too. Both ask by default.
- WordPress's batch route (`batch/v1`) is never offered: one batch call would run other routes' writes past
  their keys.

Known limit of the raw `api` group: WordPress publishes a scheduled post whose time has already passed (a
missed schedule) on any edit, a title change too. The CLI cannot see that without reading the post first.

## What it can do

### Read your posts

```sh
wordpress blog posts list status:published "published:>=2026-10-01"
wordpress blog posts list type:page
wordpress blog posts search "pricing change"
wordpress blog posts show 41                 # the text as Markdown, its tags and authors by name
wordpress blog tags list                     # tags and categories with their ids
wordpress blog users list                    # the authors
```

### Write and publish

```sh
wordpress blog posts create --title "Version 3" --text-file notes.md --tags 12,14
wordpress blog posts update 63 --description "What changed in version 3"
wordpress blog posts publish 63                              # now
wordpress blog posts publish 63 --at-time 2026-12-01T09:00:00Z  # later
wordpress blog posts unpublish 63                            # back to a draft
wordpress blog posts delete 63                               # to the trash
```

### Any WordPress API operation

```sh
wordpress blog api list                      # every operation, without calling WordPress
wordpress blog api media-list                # the media library
```

More: [using wordpress](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/usage.md) ·
[every command](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/commands.md)

## How it works

- **An application password.** You make it in your WordPress profile. It can do what your user can, no more. It is
  kept in the system keyring, or in a private file with `--credential-storage file`.
- **A local copy.** `sync` copies posts and pages with every status, the trash included, with their tags,
  categories and authors, into the WireCat local store. Text is kept as Markdown. Later syncs read only what changed.
- **Writes go to your site.** `posts create` makes a draft, and the other writes change the post on your site, then
  the copy.
- **Made for scripts.** `--json` prints one JSON value for every command, and an error comes as JSON with a code to
  branch on.

## Settings and permissions

Each profile has a level for every command and every WordPress API operation: `allow`, `ask`, `readonly` or `deny`.
Every `posts` write asks first at a terminal.

```sh
wordpress blog config set permissions.posts.publish deny   # nothing goes public from this profile
wordpress blog config show                                 # each setting and where it came from
```

More: [permissions](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/permissions.md) ·
[settings](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/configuration.md)

## Limits

- Only self-hosted WordPress with application passwords. WordPress.com sites, which sign in with OAuth, are not
  supported. Sign-in through the browser is not there yet: you paste the password.
- An Author or Contributor gets only part of the site. WordPress refuses the pages list to both, so the posts sync
  stays partial and changes on the site do not reach the copy. A Contributor also sees only their own posts. Only an
  Administrator gets the users list. Sign in as an Administrator for a full copy.
- No view counts. WordPress itself keeps none, and Jetpack stats are not supported.
- A post with galleries, columns, embeds or iframes keeps its body: `posts update` changes its title, excerpt, tags
  and status only, unless you add `--replace-body`.
- Plugin fields, such as those of SEO or custom field plugins, are not in the API description. The `api` group sends
  them only in a raw `--body`.
- Before 1.0, a minor version may change commands, `--json` fields and MCP tools. The changelog lists each such
  change under "may break callers".

## Security

The application password can do what your WordPress user can, so `wordpress` keeps it in the system keyring and
never prints it, in output, errors or run records. It talks only to the site you signed in to. Text from WordPress is
marked as untrusted, so an agent reads a post as data, not as an instruction.

More: [security](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/security.md) · Report a vulnerability:
[SECURITY.md](https://github.com/WireCatLabs/wordpress-cli/blob/main/SECURITY.md)

## When something goes wrong

```sh
wordpress doctor                         # what is set up, without connecting
wordpress blog session status --check    # asks your site whose password it is
```

More: [troubleshooting](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/troubleshooting.md) · Ask on
[Discord](https://discord.gg/DebENqbRrJ) · Bugs go to this repository's
[issues](https://github.com/WireCatLabs/wordpress-cli/issues).

## Documentation

Everything is in [docs/](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/index.md): installation, usage,
MCP, permissions, settings, the command reference and the roadmap.

## Development

You need Node.js 22.16 or a later 22.x, or Node.js 24 or later, and pnpm.

```sh
pnpm install && pnpm test
```

Tests use a fake WordPress built from the API description of WordPress 6.9.4, with invented posts, and nothing
reaches a real site. The CLI is described in one file, `wirecat.config.ts`, and started from
[cli-template](https://github.com/WireCatLabs/cli-template).

More: [design](https://github.com/WireCatLabs/wordpress-cli/blob/main/docs/dev/DESIGN.md) ·
[working rules](https://github.com/WireCatLabs/wordpress-cli/blob/main/AGENTS.md)

Pull requests, bug reports and ideas go to [issues](https://github.com/WireCatLabs/wordpress-cli/issues).

## Part of WireCat

`wordpress` is one of the [WireCat](https://wirecat.dev) tools: open-source, local-first command-line tools that give
AI agents your context from messengers, mail, calendars, CRMs and documents. Each one works on its own.

## License

[Apache 2.0](https://github.com/WireCatLabs/wordpress-cli/blob/main/LICENSE)
