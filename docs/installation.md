# Install

Connect your WordPress site once, and from then on your AI agent reads your posts and drafts new ones without you
opening wp-admin. WordPress lets a program in only through an application password that you make in your own
profile. Making the password, installing `wordpress` and signing in take about five minutes.

Once it is done, an agent on this computer reads your posts and pages when you ask, and writes drafts as far as your
permissions allow.

**On this page:**

1. [What you need](#what-you-need)
2. [In WireCat Desktop](#in-wirecat-desktop)
3. [Install the tool](#install-the-tool)
4. [Make an application password in WordPress](#make-an-application-password-in-wordpress)
5. [Sign in](#sign-in)
6. [Check it works](#check-it-works)
7. [Sign out or change the password](#sign-out-or-change-the-password)

## What you need

- A self-hosted WordPress site, version 5.7 or later, reached over https. WordPress makes application passwords only
  there. WordPress.com sites are not supported.
- A user on the site. For a full copy, the user should be an Administrator. An Editor gets every post and page, but
  WordPress gives every user and their e-mail to an Administrator only: an Editor gets the authors with published
  posts. An Author or Contributor gets only their own posts, and no pages: WordPress refuses them the pages list. A
  Contributor gets only their drafts and posts waiting for review.
- For the command line: Node.js 22.16 or a later 22.x, or Node.js 24 or later. Node 23 is not supported.

## In WireCat Desktop

1. Make an application password, as
   [make an application password in WordPress](#make-an-application-password-in-wordpress) shows.
2. On the **Tools** page, click **Install** on the WordPress row.
3. Click **Manage**, type an account name, such as `blog`, and click **Sign in here**.
4. Fill in **Site address**, **User name** and **Application password**. Desktop checks them with your site before it
   saves them.

Desktop also gives your AI agents the tool's skill, so the terminal steps are not needed.

## Install the tool

Install `wordpress` once on each computer where you or an agent use it.

```sh
npm install -g @wirecat/wordpress-cli
wordpress --version
wordpress skill install   # the agent skill, for Claude Code, Codex, Gemini CLI and OpenClaw
wordpress doctor
```

The command is `wordpress`, not `wp`: the official WP-CLI already uses `wp`, and both can live on one computer.

`doctor` needs no network and opens no keyring. It shows the version, where settings live, the profiles that exist,
and whether other users of the computer can read the settings.

An agent with no terminal, such as Claude Desktop or Cursor, uses `wordpress` over [MCP](mcp.md) instead of the skill.

## Make an application password in WordPress

WordPress describes these steps in its
[Application Passwords guide](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/).

1. Log in to your site's wp-admin.
2. Open **Users → Profile**, or **Profile** if you are not an Administrator.
3. Scroll to **Application Passwords**.
4. Type a name for the new password, such as `WireCat`, and click **Add Application Password**.
5. Copy the password WordPress shows. It shows it once only.

The password can do what your user can, no more. It works until you revoke it in the same place.

If the section is missing, the site is not on https, or a plugin or the host turned application passwords off. Ask
the site's admin.

## Sign in

A profile is a name you choose for one site and one user, such as `blog`. It is the first word of every command that
uses an account. No command picks one for you.

```sh
wordpress blog session start --site blog.example.com --login anna
```

`--site` is your site's address, with or without `https://`. `--login` is your WordPress user name. `wordpress` asks
for the application password without showing it, checks it with your site and keeps it, with the site, in the system
keyring. A password the site refuses is not kept. The password goes to that site alone, never to another site on the
same host.

On a computer with no keyring, add `--credential-storage file` to keep it in a private file instead. An agent or a
script can pipe the password in on stdin. The password is never taken as an argument, so it does not land in your
shell history.

## Check it works

```sh
wordpress blog session status --check   # asks your site whose password it is
wordpress blog sync                     # copies your posts, pages, tags and authors
wordpress blog posts list status:draft
```

The first sync reads every post and page, so a large site takes a while. Later syncs read only what changed. If
something fails, see [when something goes wrong](troubleshooting.md).

## Sign out or change the password

```sh
wordpress blog session end
```

`session end` forgets the password on this computer. The password itself still works on your site until you revoke
it: Users → Profile → Application Passwords, **Revoke**. To change it, run `session start` again with the new one.

Next: [use it](usage.md), or connect an app over [MCP](mcp.md).
