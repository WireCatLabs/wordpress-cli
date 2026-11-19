# Roadmap

See what `wordpress` does today and what comes next, before you build a workaround for something it lacks. It may
already be on the way.

You learn which parts of your WordPress site an agent can work with now, and which may come later. The order is
approximate and can change. To suggest something, open an
[issue on GitHub](https://github.com/WireCatLabs/wordpress-cli/issues).

**On this page:**

1. [What works today](#what-works-today)
2. [Next](#next)
3. [Later](#later)

## What works today

`wordpress` signs in to a self-hosted WordPress site with an application password. `sync` copies posts and pages with
every status, tags, categories and authors into the local WireCat store, with the text as Markdown, and later syncs
read only what changed. `posts list`, `posts search` and `posts show` read that copy, also offline. `posts create`
writes a draft, `posts update` changes it, and `posts publish`, `unpublish` and `delete` publish, schedule, take back
and trash a post, each with its own permission. `wordpress blog api` reaches every `wp/v2` operation of WordPress
6.9.4. Every command is in the [command reference](commands.md).

## Next

- **Sign in with the browser.** Approve the tool in wp-admin, in place of pasting an application password.
- **Plugin fields.** Read and set common plugin fields, such as an SEO title, without a raw `--body`.

## Later

- **WordPress.com sites.** Sign in with WordPress.com's OAuth.
- **View counts.** Read Jetpack or WordPress.com stats into `posts stats`.

What each released version changed is in the [changelog](../CHANGELOG.md).
