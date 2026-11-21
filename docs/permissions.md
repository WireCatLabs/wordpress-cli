# Permissions

Let an AI agent work with your WordPress site through `wordpress` and keep the say over what goes public. The
application password can do what your WordPress user can, so without your own limits an agent could do the same.

For each profile, the name you gave one site's sign-in, you decide what an agent may only read, what asks you first
and what goes ahead. You can keep publishing yours with one line, and you know which checks hold whatever the settings
say.

Each command has a permission key, its name such as `posts.publish` or `api.media-delete`, or a group such as `api`,
where the longer key wins. Each key has a level: `deny`, `readonly`, `ask` or `allow`. `wordpress blog config set`
sets them.

**On this page:**

1. [The levels](#the-levels)
2. [What is set before you change anything](#what-is-set-before-you-change-anything)
3. [The api group](#the-api-group)
4. [Keep publishing yours](#keep-publishing-yours)
5. [Agents and MCP](#agents-and-mcp)
6. [Checks that hold whatever the permissions say](#checks-that-hold-whatever-the-permissions-say)

## The levels

| Level | What happens |
|---|---|
| `deny` | The command is refused, a read too. |
| `readonly` | Reads work. A write is refused. |
| `ask` | A write asks first at a terminal. Without one it is refused unless `--yes` is given. **Over MCP it runs.** |
| `allow` | The command runs without a question. |

```sh
wordpress blog config set permissions.posts.publish deny   # nothing goes public from this profile
wordpress blog config set permissions.api readonly         # every api operation reads, none writes
wordpress blog config show                                 # each key with its level and where it came from
```

`blog` is the profile, a name you chose. A refusal is `permission_error` (exit code 5) and names the key. It does not
mean the sign-in is broken.

An agent cannot loosen a permission: a `config set` or `config unset` that would lift a limit is refused unless you
run it yourself in a terminal.

## What is set before you change anything

| Key | Built-in level | Checked by |
|---|---|---|
| `posts.create` | `ask` | `posts create`, which makes a draft. |
| `posts.update` | `ask` | `posts update`. On a published or scheduled post it checks `posts.publish` too. |
| `posts.publish` | `ask` | `posts publish`, now or with `--at-time`. |
| `posts.unpublish` | `ask` | `posts unpublish`. |
| `posts.delete` | `ask` | `posts delete`, which moves a post to the trash. |
| `posts.delete.force` | `ask` | `posts delete --allow-delete`, which deletes for good. |
| Every read | `allow` | `sync`, `posts list`, `posts show` and the other reads. |

A write to a page goes through the pages routes, so it also checks their keys: `pages.publish` when it publishes or
schedules the page, `pages.delete` when it moves the page to the trash, and `pages.delete.force` with
`--allow-delete`. Each asks by default. After a yes to the `posts` key, the same action on the page is not asked again.

## The api group

`wordpress blog api` reaches every WordPress operation, and checks the same publishing and deleting keys:

- **Publishing** needs `<route>.publish`, such as `posts.publish` or `pages.publish`. That is a write that sets
  `status` to `publish` or `future`, or that sets `date`, `date_gmt` or `password`, unless the same call sets
  `status` to `draft`, `pending` or `private`.
- **Deleting** needs `<route>.delete`. With `force=true`, which deletes for good, it needs `<route>.delete.force` too.
  Both ask by default.
- **Writes as `posts` commands do check their keys too.** `api posts-create` and `api pages-create` check
  `posts.create`, and `api posts-update` and `api pages-update` check `posts.update`. So `posts.create` at `deny`
  stops drafts on every path.
- **Site-wide writes ask.** Installing a plugin, changing the site's settings, making or changing a user (a role
  included), a new or changed comment, and changes to templates, template parts, widgets, sidebars, menus and
  navigation each ask by default: `api.plugins-create`, `api.comments-create` and so on. Other api writes, such as
  media, tags and categories, run without a question.
- Making an application password is never offered: WordPress answers with the new password in clear.
- WordPress's batch route (`batch/v1`) is never offered: one batch call would run other routes' writes past their
  keys.

`wordpress blog api show <operation>` lists the keys an operation checks.

## Keep publishing yours

Any of these keeps your site's public face in your hands:

- **No publishing.** `wordpress blog config set permissions.posts.publish deny`. Drafts still work. A change to a
  published post is refused too, as it would be public.
- **No deleting for good.** `wordpress blog config set permissions.posts.delete.force deny`. Posts still go to the
  trash, from where they come back.
- **Read only.** `wordpress blog config set permissions.posts readonly` and
  `wordpress blog config set permissions.api readonly`. Every read still works.

## Agents and MCP

Over MCP nobody is at a terminal to answer, and the server shows no form, so a write at `ask` goes ahead. With the
built-in levels an agent over MCP can publish and delete for good. The owner chose this: an agent should be able to
finish the job it was given. `wordpress blog runs list` shows each publication for 7 days
(`keep_successful_runs_for_days`).

If you want to publish yourself, set `posts.publish` to `deny` before you connect an app, as above. Or keep the levels
and turn on approval for the `wordpress_write` tool in your agent's client, so the client asks you before each write.

`mcp serve --permission posts.publish=deny` and `mcp add … --permission …` make a level stricter for that one
server. They never loosen the profile. See [MCP](mcp.md#publishing-over-mcp).

## Checks that hold whatever the permissions say

- **`WCWP_READ_ONLY=1`** refuses every write, for that shell or the app that sets it.
- **Your WordPress role.** WordPress refuses what your user may not do, whatever the profile says. A Contributor
  cannot publish, for one.
- **Text from WordPress is data.** Titles, text and names reach an agent marked `untrusted`, so an agent does not take
  them as instructions.

More: [settings](configuration.md), [security](security.md).
