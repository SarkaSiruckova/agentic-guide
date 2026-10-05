---
name: publish-guide
description: Publish uncommitted changes to the Agentic AI Field Guide. Use when the reader says "publish", "push everything", "ship it" or similar. Runs safety, style, tag, build and link checks, then commits, pushes to main and confirms the Vercel site is live.
---

# Publish the guide

Use this when the reader says "publish", "push everything", "ship it" or similar. It publishes all uncommitted work in this repo to the live site at https://agentic-guide.vercel.app.

Run the checks in order. If a check fails, fix it when the fix is small and obvious (for example a broken link or a missing tag), tell the reader what you changed, and continue. If the fix is not small and obvious, stop and explain what you found. Never push anything that fails the safety check.

## 1. Review what changed

- Run `git status` and list every changed and new file.
- Flag anything unexpected: stray files (for example `.write_test`), a leftover `.git/index.lock`, files outside `src/`, `tags.yml` or the usual config, or anything that looks like a secret or an export of real data.
- Do not commit `dist/`, `node_modules/` or `.astro/` (they should be git-ignored).

## 2. Safety check

The site is public. Review every changed file against the safety rules in `CLAUDE.md`:

- No real VC firms, funds or their staff.
- No real private people.
- No internal tool names, project names, list IDs, field IDs or architecture of a real firm.
- No email addresses, phone numbers, API keys, tokens, passwords or private URLs.
- No real deal, portfolio, LP or investor data.
- Only the fictional Sample Ventures (and fictional companies such as Acme Payments) in examples.

If anything private appears, remove it or replace it with the fictional equivalent, and tell the reader.

## 3. Style scan

On the changed files, check:

- No em dashes anywhere.
- None of the banned phrases listed in `CLAUDE.md`.
- No model version numbers.
- No prices except on pages in `concepts/cost/` or pages marked `snapshot: true`.
- British spelling and sentence-case headings.

## 4. Frontmatter and tags

- Every new or changed page has `title`, `description`, `tags`, `lastReviewed` and `snapshot`.
- Every tag used exists in `tags.yml`.
- Concept pages follow the section order in `templates/concept.md`.
- The glossary, `recently-added.md` and the sidebar include any new pages, and each new page has an opening bridge, a Next up section and a `published` date.

## 5. Build and links

- Run `npm run build`. It must finish with no errors. These warnings are known and fine: chunk size over 500 kB, the `i18n` collection missing, and `docs -> 404` not found.
- Check the built site: no internal link points to a page that does not exist.

## 6. Commit and push

- Write a short, plain commit message that names what was added, for example "Add pages: tool use, the agent loop". For many pages, summarise (for example "Add six concept pages: model basics").
- Commit and push to `main`.

## 7. Confirm it is live

- Wait for the Vercel deployment (usually under a minute or two).
- Check that the main new page URLs and `/start-here/glossary/` return 200 on https://agentic-guide.vercel.app.
- If the deployment fails or a page returns 404, say so plainly and look at the build log.

## 8. Report back

Give the reader a short summary: what was committed, the result of each check, anything you fixed along the way, and the live links. Keep it to a few lines in plain language.
