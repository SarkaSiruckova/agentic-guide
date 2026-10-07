---
name: add-concept
description: Add a new concept to the Agentic AI Field Guide, or update an existing page. Use when the reader says things like "add a concept", "add this to the guide", "make a page about X", "update the page on X", or pastes notes or a chat excerpt about something they've learned.
---

# Add a concept to the guide

Read `CLAUDE.md` first if it isn't already in context. It holds the style rules, safety rules, folder map and housekeeping steps. This skill is the workflow; `CLAUDE.md` is the rulebook.

## 1. Understand what's being added

The reader might give you a term, a few notes, a pasted chat, or a link. Work out:

- What the concept is, in one line
- Which section and folder it belongs in (see the folder map in `CLAUDE.md`)

If the request is too vague to tell what concept is meant, ask one short question. Otherwise, proceed.

## 2. Check what already exists

Search `src/content/docs/` for the term and its synonyms (titles, headings and the glossary). Decide which of these it is:

- **Already covered on its own page:** this is an update, not a new page
- **Mentioned on another page but has no page of its own:** this is a new page; link it from where it's mentioned
- **Not covered anywhere:** a new page

Never create a second page for something that already has one.

## 3. Decide: small change or new content

The reader is the student and relies on you for accuracy. There is no approval step for either kind of change. You own the research, the fact-checking, the style and the safety, and you say plainly what you are unsure about.

**Small change:** a typo, a broken link, a short clarification, a link, a glossary line, a tag, or a `lastReviewed` update after checking a page is still accurate.

**New content:** a new page, a rewrite of more than a paragraph, a new or changed diagram, a new section or tag, or anything that changes what a page says. Research it more carefully, and check volatile claims against official sources.

## 4. Make the change

1. Research anything that depends on specific tools, providers or current facts. Concept explanations themselves should stay timeless.
2. Write the page using `templates/concept.md` (for concept pages) and the style rules in `CLAUDE.md`. Include a diagram if anything has moving parts.
3. Set `published` to today's date. Do the housekeeping steps from `CLAUDE.md`: glossary, recently added, sidebar position, related pages, confusables, and the bridges (this page's opening bridge and Next up, plus the Next up of the page before it). Check whether the page belongs to a journey stage or a place in `src/data/concept-map.ts` (see the housekeeping list in `CLAUDE.md`).
4. Run the safety check and `npm run build`.
5. Commit and push (or leave that to the publish-guide skill).
6. Tell the reader what changed, the live link `https://agentic-guide.vercel.app/<path>/`, and anything you are unsure about.

## 5. Safety check (every time)

Before any commit, review every changed file against the safety rules in `CLAUDE.md`. If something private slipped in, remove it, and tell the reader what you removed. This applies to small changes too.

## Adding several concepts at once

If the reader gives you a batch, handle them one page at a time: write, check, publish, then the next. Mention the queue at the start ("Three concepts here: I'll start with X").
