# Settings

Change how `wordpress` works for one site, or for every site on this computer, with one command, and see where each
value came from. You change only the few that matter to you, and the rest keep their defaults.

You decide, for example, what an agent may publish, how many items a list shows, or whether a run keeps the words you
typed. Only you can loosen a permission: an agent that tries is refused.

Settings live in one file, `config.json`, in the folder `wordpress doctor` shows. Each profile has its own part, and
`defaults` apply to every profile. `wordpress blog config` shows and changes them, where `blog` is the profile, a name
you chose.

**On this page:**

1. [See and change a setting](#see-and-change-a-setting)
2. [Permissions](#permissions)
3. [Variables](#variables)
4. [Run records](#run-records)

## See and change a setting

```sh
wordpress blog config show
wordpress blog config set limit 50
wordpress blog config unset limit
```

`config show` lists each setting with its value and where it came from: the file, a variable or the default. The
common ones:

| Setting | Default | What it does |
|---|---|---|
| `limit` | `20` | How many items a list of the `api` group shows at once. `posts list`, `tags list` and `users list` show 50; pass `--limit`. |
| `permissions` | none set | What each command may do. See [Permissions](#permissions). |
| `record` | `true` | Keep every run. `false` keeps failed runs only. |
| `record_input` | `true` | Keep the words you typed in a run. |
| `keep_runs_for_days` | `30` | How long a run is kept. |
| `keep_successful_runs_for_days` | `7` | How long a run that worked is kept. |
| `update_check` | `true` | Check once a day for a newer version. |

## Permissions

`permissions` decides what a command may do for this profile: `allow`, `ask`, `readonly` or `deny`, per permission
key. Every `posts` write is `ask` by default. Over MCP `ask` does not ask: the write goes ahead, publishing too. The
keys, their built-in levels and how to keep publishing yours are on [Permissions](permissions.md).

```sh
wordpress blog config set permissions.posts.publish deny
```

## Variables

| Variable | What it does |
|---|---|
| `WCWP_PROFILE` | The profile for this shell, in place of the first word. |
| `WCWP_READ_ONLY` | `1` refuses every write. |
| `WCWP_CONFIG_DIR`, `WCWP_STATE_DIR` | Move the settings or the state to another folder. |

`wordpress blog session status` says where the password came from: the keyring or a file, never the password itself.

## Run records

A command that fails is kept as a run, for `wordpress runs list` and `runs show`. A command that calls WordPress, such
as `sync`, a `posts` write, an `api` operation or `session status --check`, is kept when it succeeds too, unless
`record` is `false` (then only failures) or it ran with `--no-record`. `record_input` decides whether a run keeps the
words you typed. Secrets are masked either way. See [Security](security.md#run-records).
