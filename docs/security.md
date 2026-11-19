# Security

Let an agent work with your WordPress site while the application password stays out of its answers and your logs. The
password can do what your WordPress user can, so anyone who has it can do the same.

You know where `wordpress` keeps the password, what reaches your site and nothing else, and which limits hold for an
agent whatever it is told.

What WireCat tools share, such as the keyring, permissions, MCP and what never reaches a log, is on the
[shared security page](https://wirecat.dev/en/docs/security). This page keeps only what is particular to `wordpress`.

**On this page:**

1. [Where it keeps what, and whom it talks to](#where-it-keeps-what-and-whom-it-talks-to)
2. [The password's reach](#the-passwords-reach)
3. [What the copy holds](#what-the-copy-holds)
4. [MCP in the browser](#mcp-in-the-browser)
5. [Run records](#run-records)
6. [File modes](#file-modes)

## Where it keeps what, and whom it talks to

`wordpress` keeps its settings in `config.json` and its state in the folders `wordpress doctor` shows. It sends
requests only to the site you named in `session start`. The password goes to that site alone, never to another site on
the same host.

`session start` reads the application password from stdin or a hidden prompt, never from an argument. It keeps it
with its site in the system keyring, or in a private file with `--credential-storage file`. The password goes only
into the `Authorization` header of a request to your site. It never reaches an address, the output, an error, a log
or a run record. `session end` forgets it on this computer. To stop it working everywhere, revoke it in WordPress:
Users → Profile → Application Passwords.

## The password's reach

An application password belongs to one WordPress user and can do what that user can, no more. An Administrator's
password can change the whole site through the `api` group: plugins, users and settings too. Sign in with the
role the work needs, and lock what an agent may change with [permissions](permissions.md). Application passwords do
not expire, so revoke one you no longer use.

## What the copy holds

`sync` stores your posts and pages, with every status and the trash, their tags and categories, and the users who
write, in the WireCat local store on this computer, where every WireCat tool can read them. A user keeps their name,
e-mail and slug. Drafts and private posts are in the copy too, so guard this computer as you guard your wp-admin login.

Text from WordPress, such as post and page titles, text and excerpts, and tag, category and author names, reaches an
agent marked `untrusted`. The agent reads it as data, not as an instruction. Posts others wrote can hold text aimed at
an agent.

## MCP in the browser

`wordpress blog mcp serve --http` listens on `127.0.0.1` only, for browser apps that reach it through your own tunnel.
Each app logs in with a one-time code, and the server keeps a hash of each login it gives, in the state folder,
readable by you only. `wordpress blog mcp revoke` forgets every one of them.

## Run records

A run record keeps the command line as you typed it, so `wordpress runs show` tells you what was run. A secret is
still stored as `[redacted]`: an option named like a token or password, a password in a link, a long opaque string. A
phone number is replaced by `[redacted]` inside the word you typed: one written with its "+" and country code, or 11
to 15 digits in a row, so a long id of that length is hidden as well. To keep none of the words you type, run
`wordpress blog config set record_input false`.

A secret is also found by what it looks like, in a run record and in a kept error message: a token in a known format
(GitHub, OpenAI, Slack, AWS, Stripe, npm and the like), a `Bearer` credential, a random-looking string of 20 or more
characters, and a random-looking run of 20 or more lower-case hex characters, such as a hex key or a full commit
hash. The value after a secret name is hidden too, whether it follows `=`, `:` or a space: `password=`, `API_TOKEN=`,
`password hunter2`, `pin 1234`. Some secrets look like ordinary words and stay: a value of letters only after a
secret name and a space (`pin this message` stays), a hex key in upper case, a short commit hash or a UUID, a short
password typed without a secret name before it, and a secret inside a link or a file path unless it is in a known
format or after a secret name.

## File modes

`config.json` is saved readable by you only (`0600`), and its folder is created for you only (`0700`). A file or
folder made by an older version may be open to other users of the computer: `wordpress doctor` lists each under
`files.problems` and prints the `chmod` that fixes it. Windows is not checked. Report a vulnerability as
[SECURITY.md](https://github.com/WireCatLabs/wordpress-cli/blob/main/SECURITY.md) says.
