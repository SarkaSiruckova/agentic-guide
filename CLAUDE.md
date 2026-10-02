# Agentic AI Field Guide: project instructions

Read this before changing anything in this repo.

## What this is

A personal, public guide to agentic AI, written for one reader who is building confidence with AI concepts and vocabulary. It grows over time: new concepts are added as the reader learns them.

The reader's practical goal is to build a lightweight context layer for a small VC firm and run agents on it: querying company and people data from a CRM, file storage and other sources, and taking actions through workflows, scheduled tasks and automations. Write with that goal in mind, but keep everything generic.

Live site: https://agentic-guide.vercel.app
Built with Astro Starlight. Hosted on Vercel. Every push to `main` publishes the site.

## The site is public: safety rules

Nothing private or firm-specific ever goes on this site. Before every commit, check the changed files for:

- Names of real VC firms, funds or their staff
- Names of real private people (public figures and well-known companies as tool providers are fine)
- Internal tool names, project names, list IDs, field IDs or architecture of any real firm
- Email addresses, phone numbers, API keys, tokens, passwords, private URLs
- Any real deal, portfolio, LP or investor data

If anything like this appears, remove it or replace it with the fictional example firm, and tell the reader what you changed. If the reader asks you to include something that breaks these rules, say why you won't and offer a generic version.

### The fictional example firm

Worked examples use **Sample Ventures**, an imaginary early-stage VC fund with a small team. It uses a CRM, Microsoft 365 with SharePoint, a database, and an automation tool. Invent details as needed, but keep them plausible and consistent with earlier pages.

## Writing style

The reader is smart but new to this. Plain language first, then the proper term.

- Explain every technical term the first time it appears on a page, in plain words. After that, use the proper term so the vocabulary sticks.
- Short paragraphs: two to four sentences. No walls of text.
- British English spelling (organise, colour, optimise).
- Sentence case for headings.
- No em dashes. Use a colon, a comma, brackets or a new sentence instead.
- Direct and warm. No hype, no filler, no corporate language.
- Avoid phrases that sound machine-written: "delve", "dive into", "it's worth noting", "in today's fast-paced world", "seamless", "robust", "game-changer", "unlock", "leverage" (as a verb), "harness the power", "navigate the landscape".
- Analogies are welcome when they make a mechanism click. One per idea, not three.
- When something is uncertain, contested or changing fast, say so plainly.
- Use `<mark>` around the one sentence on a page most worth remembering. At most one per page.

## Keep it timeless

- Concept pages describe ideas, not product versions. No model version numbers.
- No prices except on pages in `concepts/cost/` and pages marked `snapshot: true`. Elsewhere, describe cost in relative terms (cheap, expensive, "costs more as conversations get longer").
- When naming specific tools, name them as examples of a category ("vector databases such as Pinecone or pgvector"), so the page stays true if one product fades.
- Before stating a specific fact about a named tool or provider (a feature, a limit, a price), check it with a web search. If it's likely to change, mark the page `snapshot: true`.

## Where pages go

All pages are markdown files in `src/content/docs/`.

| Section | Folder |
| --- | --- |
| Start here | `start-here/` |
| Concepts: how models work | `concepts/how-models-work/` |
| Concepts: talking to models | `concepts/talking-to-models/` |
| Concepts: agents | `concepts/agents/` |
| Concepts: data and the context layer | `concepts/data/` |
| Concepts: running things | `concepts/running-things/` |
| Concepts: security and compliance | `concepts/security/` |
| Concepts: cost | `concepts/cost/` |
| The map | `map/` |
| Model landscape | `models/` |
| Setup and practice | `setup/` |
| Comms channels | `channels/` |

File names are short, lowercase, hyphenated: `tokens-and-context-windows.md`.

## Page settings (frontmatter)

```yaml
---
title: Tokens and context windows
description: One plain sentence, used in search results and link previews.
tags: [foundations, cost]
lastReviewed: 2026-10-02
snapshot: false
---
```

Tags must come from `tags.yml`. Add a new tag there (with label, description and a muted colour) only if no existing tag fits.

## Concept page template

Every page in `concepts/` follows `templates/concept.md`. Keep the section headings exactly as written there so every page reads the same way. Other sections (map, setup, channels) can adapt the template where a section doesn't fit, but keep the same voice.

## Diagrams

- Use Mermaid code blocks (```mermaid). They render automatically in the site's colours.
- Prefer `flowchart TD` (top to bottom) so diagrams stay readable on narrow screens.
- Keep labels to a few words and diagrams to around ten boxes. Split big ideas into two diagrams.
- Add a diagram whenever something has moving parts, a sequence, or connections. Diagrams are the most useful part of the guide for this reader.

## Linking

- Link to other pages with root-relative links: `[context window](/concepts/how-models-work/tokens-and-context-windows/)`.
- Link the first mention of any concept that has its own page.
- When adding a page, also add links to it from the pages it relates to.

## Housekeeping when a page is added

1. Add a one-line entry to `start-here/glossary.md`, in alphabetical order, linking to the page.
2. Add a row to the top of the table in `start-here/recently-added.md`.
3. If the topic is listed as plain text on a section overview page (such as `concepts/index.md`), turn it into a link.
4. If it pairs with a commonly confused term, add or update an entry in `start-here/confusables.md`.

## Before every commit

1. Run the safety check above.
2. Run `npm run build` and fix any errors.
3. Write a short, plain commit message ("Add page: tokens and context windows").
4. Push to `main`.
