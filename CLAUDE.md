# Agentic AI Field Guide: project instructions

Read this before changing anything in this repo.

## What this is

A public guide to agentic AI for smart beginners. It is read top to bottom as one numbered path, from the basic vocabulary to building real agents, so each page should only rely on pages above it in the reading order. It grows over time as new concepts are added.

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
| Glossary, confusables, recently added | `start-here/` |
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

## Reading order and the sidebar

Folders do not decide the reading order. The sidebar in `astro.config.mjs` lists chapters 1 to 7 page by page (1 The basics, 2 How models work, 3 How agents work, 4 Data and the context layer, 5 Running agents for real, 6 Security and compliance, 7 Cost). Chapters 8 to 11 (map, models, setup, channels) autogenerate from their folders using `sidebar: order`. A Reference group (confusables, tags, recently added) sits at the end.

When adding a page to chapters 1 to 7, add its slug to the right place in the sidebar list. Never move a file to change the order: that breaks its URL. The home page (`index.mdx`) lists the chapters as cards; update it only if a chapter is added.

## Bridges between pages

Every page leads into the next, so the guide reads as one story.

- **Opening bridge:** one or two sentences directly after the frontmatter, before "**In one line:**". Link the page to the one before it and say what this page adds. It must still make sense to someone arriving from search: never "as we covered".
- **Next up:** a final `## Next up` section after "The proper terms". One or two sentences on why the next page follows, ending with a link to it.
- **When inserting a page,** update the Next up of the page before it, and write this page's Next up to point at the page after it.
- **Later terms:** if a sentence depends on a term whose page comes later in the order, add a short plain gloss the first time, such as "tool use (letting the model call other software, covered in chapter 3)".
- **The car metaphor** runs through the guide. Use it only where it helps, and keep the mapping: model = engine, tokens = fuel, context window = what the driver can see, prompt = directions, system prompt = standing rules of the road, tools = controls, agent loop = driving, harness = the rest of the car, memory = logbook, MCP = a standard socket, data and the context layer = maps and road knowledge, permissions = keys, security = locks and alarm, cost = fuel bill, the map chapter = road network, model landscape = carmakers, setup = the garage.

## Page settings (frontmatter)

```yaml
---
title: Tokens and context windows
description: One plain sentence, used in search results and link previews.
tags: [foundations, cost]
published: 2026-10-05
lastReviewed: 2026-10-05
snapshot: false
---
```

`published` is the date the page first went live; set it once and never change it. `lastReviewed` is the date it was last checked for accuracy.

Tags must come from `tags.yml`. Add a new tag there (with label, description and a muted colour) only if no existing tag fits.

## Concept page template

Every page in `concepts/` follows `templates/concept.md`. Keep the section headings exactly as written there so every page reads the same way. Other sections (map, setup, channels) can adapt the template where a section doesn't fit, but keep the same voice.

## Diagrams

- Use Mermaid code blocks (```mermaid). They render automatically in the site's colours.
- Prefer `flowchart TD` (top to bottom) so diagrams stay readable on narrow screens.
- Keep labels to a few words and diagrams to around ten boxes. Split big ideas into two diagrams.
- Add a diagram whenever something has moving parts, a sequence, or connections. Diagrams are often the most useful part of a page.

## Linking

- Link to other pages with root-relative links: `[context window](/concepts/how-models-work/tokens-and-context-windows/)`.
- Link the first mention of any concept that has its own page.
- When adding a page, also add links to it from the pages it relates to.

## Housekeeping when a page is added

1. Add a one-line entry to `start-here/glossary.md`, in alphabetical order, linking to the page.
2. Add a row to the top of the table in `start-here/recently-added.md`.
3. Add the page to the sidebar (chapters 1 to 7) or give it a `sidebar: order` (chapters 8 to 11), and do the bridges described above.
4. If it pairs with a commonly confused term, add or update an entry in `start-here/confusables.md`.

## Before every commit

1. Run the safety check above.
2. Run `npm run build` and fix any errors.
3. Write a short, plain commit message ("Add page: tokens and context windows").
4. Push to `main`.
