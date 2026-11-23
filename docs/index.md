# WordPress

Write and check your blog without opening wp-admin. `wordpress` gives the AI agent you already use, such as Claude
Code, Codex or Claude Desktop, a copy of your WordPress posts and pages on your computer, so it answers from that copy,
even offline. It writes drafts on your site, and publishes them when you allow it.

Ask what you published last month, which drafts wait, or what a page says today. Hand the agent your notes, and it
makes a draft with a title, an excerpt and tags. You need a self-hosted WordPress site, 5.7 or later over https, and
a user on it.

**On this page:**

1. [What you get](#what-you-get)
2. [Things a newcomer would not guess](#things-a-newcomer-would-not-guess)
3. [How it looks](#how-it-looks)
4. [Why wordpress](#why-wordpress)
5. [What it can do](#what-it-can-do)
6. [How it works](#how-it-works)
7. [Start in a few minutes](#start-in-a-few-minutes)
8. [Limits](#limits)
9. [Find a guide for your task](#find-a-guide-for-your-task)

## What you get

- **The answer, not the search.** Ask about a post in your own words. The agent finds it by its title and text, with
  its status, tags and author, read from your computer.
- **Every draft and scheduled post in one list.** Filter by status, tag, author or the day a post went out.
- **Drafts from your notes.** A Markdown file becomes a draft on your site, with a title, an excerpt and tags.
- **Publish now or later.** Publish a draft at once, schedule it, or take a post back to a draft.
- **The trash too.** Posts in the trash stay in the copy with their status, so nothing you threw away is lost from
  view.
- **Your posts beside your chats.** They sit in the same local store as the messages, mail and meetings that the
  other WireCat tools keep on your computer.

## Things a newcomer would not guess

- **An application password is your key.** WordPress lets a program in with a password you make in your profile,
  apart from the one you log in with. It can do what your user can, no more. [Install](installation.md) shows where
  to click.
- **`blog` is a name you choose.** It names one site and one user, and it is the first word of every command. No
  command picks a site for you.
- **Reads use a copy, writes go to the site.** `sync` copies your posts and pages. `posts list`, `posts search` and
  `posts show` answer from that copy. `posts create`, `update`, `publish`, `unpublish` and `delete` change your site.
- **Your role decides what you see.** An Administrator gets the whole site. An Editor gets every post and page, but
  not the users list. An Author or Contributor gets only part of it: see [limits](#limits).
- **Over MCP, "ask" goes ahead.** MCP is the way apps such as Claude Desktop call a tool, and nobody sits at a terminal
  there to answer a question. So an agent over MCP can publish. Set `posts.publish` to `deny` if you want to publish
  yourself: [permissions](permissions.md).

## How it looks

```text
You:    What did I publish in October?
Agent:  (runs wordpress blog posts list status:published "published:[2026-10-01 TO 2026-10-31]")
        · 38 "Release notes for version 2", published on 3 October
        · 40 "How we test with a fake WordPress", published on 17 October
You:    Schedule draft 63 for Monday 9:00.
Agent:  (runs wordpress blog posts publish 63 --at-time 2026-11-23T09:00:00Z)
        Draft 63 is scheduled for Monday, 23 November, 09:00 UTC.
```

*Invented posts, illustrative output.*

## Why wordpress

- **A copy of your site on your computer.** Lists and search answer from it with no request to your site, also
  offline.
- **Safe to hand to an agent.** Creating, changing, publishing and deleting each have their own permission, and each
  asks first at a terminal. One line keeps publishing yours.
- **Safe edits.** A write stops if the post changed on the site since the last sync. A post with galleries or embeds
  keeps its body unless you say to replace it.
- **The password stays in your system keyring.** It never shows in output, errors or logs.
- **Ready for any agent.** A skill for agents with a terminal, an MCP server for Claude Desktop and Cursor, and a
  secure link for ChatGPT and Claude in the browser.
- **Free and open source.** Apache 2.0.

## What it can do

- **Posts and pages:** list them by status, type, tag, author or date, search their words, show one with its text as
  Markdown. [Use it](usage.md#read-posts-and-pages)
- **Tags, categories and authors:** list them with the ids the other commands take. [Use it](usage.md#tags-and-authors)
- **Drafts:** write a new draft from a Markdown file, change its title, excerpt, tags or text.
  [Use it](usage.md#write-a-draft)
- **Publishing:** publish now, schedule, take back to a draft, move to the trash. [Use it](usage.md#publish)
- **Any WordPress API operation** from a terminal, with the same permission checks.
  [Use it](usage.md#the-wordpress-api)

## How it works

- **A copy on your computer.** `sync` puts your posts and pages, with every status, and their tags, categories and
  authors into the WireCat local store, the one file on your computer that every WireCat tool shares. Text is kept as
  Markdown. Later syncs read only what changed.
- **Sign-in with an application password.** It is kept with its site in the system keyring, or in a private file on a
  computer without one.
- **Made for scripts and agents.** `--json` gives a JSON answer, and an error comes with a code to branch on.
  [MCP](mcp.md)
- **What is stored and what goes over the network.** [Security](security.md)

## Start in a few minutes

In WireCat Desktop, install WordPress on the **Tools** page and sign in under **Manage**, as
[install](./installation.md#in-wirecat-desktop) shows. Or paste this into your agent:

```text prompt
Install wordpress with npm install -g @wirecat/wordpress-cli. Help me make a WordPress application password and run wordpress blog session start --site blog.example.com --login anna to connect my site, then sync and show my drafts.
```

Or in a terminal:

```sh
npm install -g @wirecat/wordpress-cli
wordpress skill install          # teaches Claude Code, Codex and Gemini CLI to use wordpress
wordpress blog session start --site blog.example.com --login anna   # paste the application password
wordpress blog sync              # copy your posts, pages, tags and authors
wordpress blog posts list status:draft
```

You need Node.js 22.16 or a later 22.x, or Node.js 24 or later. [Install](installation.md) shows how to make the
password.

## Limits

- Only self-hosted WordPress with application passwords. WordPress.com sites are not supported.
- You paste the application password. Sign-in through the browser is on the [roadmap](roadmap.md).
- An Author or Contributor gets only their own posts, and no pages: WordPress refuses the pages list to both. A
  Contributor gets only their drafts and posts waiting for review. A post that leaves their view and that they may no
  longer read stays in the copy as it was, such as a Contributor's post an editor published. Only an Administrator
  gets every user with their e-mail; other roles get the authors with published posts. Sync reports each of these as
  a gap.
- No view counts. WordPress itself keeps none, and Jetpack stats are not supported. `posts stats` shows only what the
  copy has.
- Plugin fields, such as those of SEO or custom field plugins, have no flags. The `api` group sends them in a raw
  `--body`.
- The writes work on posts. Comments and menus are reached through the `api` group. The `api` group sends JSON only,
  so it cannot upload a file to the media library.

## Find a guide for your task

| Task | Guide |
|---|---|
| Install and connect a site | [Install](installation.md) |
| Read, write and publish posts | [Use it](usage.md) |
| Connect an app that uses MCP | [MCP](mcp.md) |
| Decide what an agent may change | [Permissions](permissions.md) |
| An exact command or option | [Commands](commands.md) |
| Change a setting | [Settings](configuration.md) |
| Something does not work | [When something goes wrong](troubleshooting.md) |
| What is stored and sent | [Security](security.md) |
| What comes next | [Roadmap](roadmap.md) |
