# Use it

Find a post, write a draft or schedule it with one short command, the same one your agent runs. WordPress's API speaks
in numeric ids, raw block markup and status codes, and `wordpress` gives you Markdown and plain status words instead.

You find last month's posts, a forgotten draft or a page's text in one line. An agent does the same from your request.

Every command starts with a profile, the name you gave one site's sign-in. `sync` copies your posts and pages into the
WireCat local store, where the read commands find them. You need a signed-in profile: [install](installation.md) sets
one up.

**On this page:**

1. [The profile comes first](#the-profile-comes-first)
2. [Sync](#sync)
3. [Read posts and pages](#read-posts-and-pages)
4. [Tags and authors](#tags-and-authors)
5. [Write a draft](#write-a-draft)
6. [Publish](#publish)
7. [When a write stops](#when-a-write-stops)
8. [The WordPress API](#the-wordpress-api)
9. [Output for scripts](#output-for-scripts)
10. [Agents](#agents)

## The profile comes first

A profile is a name you choose for one site and one user. It is the first word of every command that uses an account:

```sh
wordpress blog config show
```

`WCWP_PROFILE=blog` does the same for one shell session. No profile is ever assumed, not even the only one: a command
without one stops with exit code 2 and lists the profiles on this computer. Two sites are two profiles, each with its
own password.

## Sync

The read commands answer from the local WireCat store. `sync` brings it up to date:

```sh
wordpress blog sync              # what changed since the last sync
wordpress blog sync --rescan     # everything again, dropping a sync that stopped half way
```

`sync` copies posts and pages with every status (published, scheduled, draft, pending, private and in the trash),
tags and categories, and the users who write. A post's text is kept as Markdown. The first sync reads everything.
Later syncs ask WordPress only for posts changed since then. Once a day a sync also finds the posts the site deleted
for good. A post in the trash stays in the copy, with its status.

A sync can end partial and still succeed: it names each gap. With an Author or Contributor sign-in, WordPress
refuses the pages list, so the posts stay partial and changes on the site do not reach the copy. A Contributor also
sees only their own posts. Only an Administrator gets the users list, so an Editor's copy has every post and page but
no users. Sign in as an Administrator for a full copy.

`--max-pages` caps the requests in one run. The next sync goes on from where it stopped.

## Read posts and pages

```sh
wordpress blog posts list status:draft
wordpress blog posts list type:page
wordpress blog posts list status:published "published:[2026-10-01 TO 2026-10-31]"
wordpress blog posts list tag:12 author:3
wordpress blog posts search "pricing change"
wordpress blog posts show 41
```

`posts list` shows the newest change first. It filters by these fields:

| Field | Values | Example |
|---|---|---|
| `status` | `draft`, `pending`, `scheduled`, `published`, `private`, `trashed` | `status:scheduled` |
| `type` | `post` or `page` | `type:page` |
| `tag` | a tag or category id, as `tags list` shows it | `tag:12` |
| `author` | a user id, as `users list` shows it | `author:3` |
| `published` | a time, a range, or `>`, `>=`, `<`, `<=` a time | `published:>=2026-01-01` |

Terms are joined by AND. `--limit` and `--page` page through a long list.

`posts search` finds posts by the words of their title and text. Every word must match, and a start of three letters
or more matches too. `posts show` gives one post with its text as Markdown, its authors and tags by name, and its
earlier versions.

`posts stats` shows a post's numbers as each sync read them. WordPress itself keeps no view counts, so it has little
to show for a WordPress site.

`--offline` answers from the copy and never connects.

## Tags and authors

```sh
wordpress blog tags list       # tags and categories, with their ids
wordpress blog users list      # the users who write
wordpress blog channels list   # the site this profile copies
```

`posts create --tags` and the `tag:` filter take the ids that `tags list` shows. `users list` also names the person
the store knows by the same e-mail, from your other WireCat tools.

## Write a draft

```sh
wordpress blog posts create --title "Version 3" --text-file notes.md --description "What changed" --tags 12,14
cat notes.md | wordpress blog posts create --title "Version 3" --text-file -
wordpress blog posts update 63 --title "Version 3 is out"
wordpress blog posts update 63 --text-file notes-v2.md --slug version-3
```

`posts create` always makes a draft. Publishing is its own step. The text is Markdown, from a file or from stdin
with `--text-file -`. `--description` sets the excerpt, the short text that lists show. `--tags` takes tag and
category ids and replaces the ones the post had. `--slug` is the last part of the post's address.

`posts update` changes the fields you name. A change to a published or scheduled post is public, so it checks
`posts.publish` too.

## Publish

```sh
wordpress blog posts publish 63                                # now
wordpress blog posts publish 63 --at-time 2026-12-01T09:00:00Z  # at that time
wordpress blog posts publish 63 --at-time 3d                    # in three days
wordpress blog posts unpublish 63                              # back to a draft
wordpress blog posts delete 63                                 # to the trash
wordpress blog posts delete 63 --allow-delete                  # for good, past the trash
```

`--at-time` takes an ISO 8601 time, a day, or a span from now such as `3d`. It must be ahead. A post that is already
published cannot be scheduled: unpublish it first. A post moved to the trash comes back from the trash in wp-admin.
`--allow-delete` deletes it for good, and checks the key `posts.delete.force`.

Each write asks first at a terminal. See [permissions](permissions.md).

## When a write stops

- **The post changed on the site.** Before a write, `wordpress` compares the post's version with the copy. If someone
  changed it on the site since the last sync, the write stops with `content.conflict`. Run `sync`, look at the post
  again, then retry.
- **The post holds blocks Markdown cannot keep.** Galleries, columns, embeds and iframes do not survive a trip
  through Markdown. Such a post is marked lossy, and `posts update` refuses to write its body, with
  `content.lossy-body`. The title, the excerpt, the tags and the status can still change. To write the body anyway,
  flattening those blocks, add `--replace-body`.

## The WordPress API

`wordpress blog api` runs any operation of the WordPress REST API (`wp/v2`), one command each, with its own flags and
help. It reaches what has no command of its own: media, comments, menus, users, settings and more. It holds 150
operations, from a plain WordPress 6.9.4.

```sh
wordpress blog api list                               # every operation, without calling WordPress
wordpress blog api show postWpV2PostsById             # one operation's parameters and body
wordpress blog api media-list                         # the media library
wordpress blog api posts-update --id 63 --body '{"sticky":true}'
```

A write takes its request body as JSON in `--body`, or from a file with `--body-file`. Plugin fields, such as those of
SEO or custom field plugins, are not in the API description, so you send them in a raw `--body`. WordPress's batch
route is never offered. What each write needs is in [permissions](permissions.md).

## Output for scripts

Every command except `mcp serve` on stdin and stdout takes `--json`, and prints one JSON value on stdout.
`--json=external_id,title` keeps only those fields. Errors are JSON on stderr, with a code and a reason to branch on.
The [command reference](commands.md) lists the exit codes.

## Agents

`wordpress skill install` puts the tool's skill where Claude Code, Codex, Gemini CLI and OpenClaw look for it.
`wordpress skill install --for hermes` also adds that folder to Hermes Agent's own settings, so a bare `skill install`
leaves Hermes out.

An agent with a terminal then runs `wordpress` itself. Ask in plain words:

> *"Use wordpress. Which drafts have I not touched for a month?"*
> *"Use wordpress. Make a draft from notes.md, with the tag release."*
> *"Use wordpress. What does our About page say about pricing?"*

For Claude Desktop, Cursor, ChatGPT and other apps that cannot run commands, `wordpress blog mcp serve` serves the
same commands over MCP. Over MCP a write at `ask` goes ahead, publishing too. See [MCP](mcp.md).
