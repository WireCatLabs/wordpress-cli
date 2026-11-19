# When something goes wrong

Get `wordpress` working again from the symptom you see. Most failures come from the application password, your
WordPress role or the profile's permissions, and each has a check that names the cause.

You find your symptom in the table, run the check it gives, and retry the command. If it still fails, you have the
error code and the profile name ready for a support request.

**On this page:**

1. [First checks](#first-checks)
2. [Symptoms and what to do](#symptoms-and-what-to-do)
3. [Ask for help](#ask-for-help)

## First checks

`blog` below is the profile, a name you chose for one site.

```sh
wordpress doctor                         # the version, the settings, the profiles, without the network
wordpress blog session status --check    # asks your site whose password it is
```

## Symptoms and what to do

| Symptom | What to do |
| --- | --- |
| Not sure what is set up | Run `wordpress doctor`. It reads no keyring and uses no network. |
| `wordpress` is not found | Open a new terminal, and check that npm's global folder is on `PATH`. |
| You typed `wp` | That is the official WP-CLI. This tool is `wordpress`. |
| "name a profile" | Put the profile first, as in `wordpress blog config show`, or set `WCWP_PROFILE`. |
| "not signed in" | Run `wordpress blog session start --site <address> --login <user>`. See [sign in](installation.md#sign-in). |
| The password is refused | It was revoked, mistyped, or belongs to another user. Make a new one ([how](installation.md#make-an-application-password-in-wordpress)) and run `session start` again with the right `--login`. |
| No **Application Passwords** section in your profile | The site needs WordPress 5.6 or later over https, and a plugin or the host may turn the section off. Ask the site's admin. |
| A WordPress.com address | WordPress.com sites are not supported, only self-hosted WordPress. |
| `posts list` is empty | Run `wordpress blog sync` first. Posts are read from the copy it makes. |
| `sync` ends partial, or pages are missing | An Author or Contributor sign-in cannot list pages, and a Contributor sees only their own posts. Only an Administrator lists the users. Sign in as an Administrator for a full copy, or as an Editor for every post and page. |
| A change on the site is missing from the copy | Run `sync`. If it still ends partial, see the row above. |
| `content.conflict` | The post changed on the site since the last sync. Run `sync`, look at the post again, then retry. |
| `content.lossy-body` | The post has galleries, columns, embeds or iframes that Markdown cannot keep. Change only its title, excerpt, tags or status, or add `--replace-body` to write the body anyway and flatten them. See [when a write stops](usage.md#when-a-write-stops). |
| `content.schedule-past` | `--at-time` must be ahead of now. |
| `content.already-published` | A published post cannot be scheduled. Run `posts unpublish` first. |
| `content.empty` | The write names no field. Add `--title`, `--text-file` or another field. |
| `posts publish` fails with 403 | Your WordPress role may not publish. A Contributor cannot. Ask an Editor, or sign in as one. |
| `posts stats` shows no views | WordPress itself keeps no view counts, and Jetpack stats are not supported. |
| A plugin field, such as an SEO title, has no flag | Plugin fields are not in the API description. Send them in a raw `--body` through `wordpress blog api`. |
| The settings file does not read | `doctor` lists every problem in the file under `config.issues`. Run the `config unset` each one gives, or fix the file by hand. |
| `doctor` lists `files.problems` | Other users of the computer can read `config.json` or enter its folder. Run each `chmod` that `doctor` prints after "to make it private:". `doctor` never changes a file mode itself. |
| "the OS keyring did not answer" | The computer has no keyring running. Sign in with `--credential-storage file`. |
| A write is refused | The profile's permissions or `WCWP_READ_ONLY` stop it. See [permissions](permissions.md). |

## Ask for help

Ask on [Discord](https://discord.gg/DebENqbRrJ), or open an
[issue](https://github.com/WireCatLabs/wordpress-cli/issues) with the error code, the profile name and the command.
Never paste a password, a token or private content into a support request.
