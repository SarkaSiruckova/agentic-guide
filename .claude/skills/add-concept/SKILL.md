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

**Small change (publish directly, no approval needed):**
- Fixing a typo, a broken link or a factual slip
- Adding or clarifying up to a short paragraph on an existing page
- Adding a link, a related-page entry, a glossary line or a tag
- Updating `lastReviewed` after checking a page is still accurate

**New content (draft first, publish only after approval):**
- Any new page
- Rewriting more than a paragraph of an existing page
- Adding or significantly changing a diagram
- Adding a new section or tag
- Anything that changes the meaning of what a page says

If unsure, treat it as new content.

## 4a. Small change

1. Make the edit.
2. Run the safety check and `npm run build`.
3. Commit and push.
4. Tell the reader in one or two lines what changed and on which page.

## 4b. New content

1. Research anything that depends on specific tools, providers or current facts with a web search. Concept explanations themselves should stay timeless.
2. Write the page using `templates/concept.md` (for concept pages) and the style rules in `CLAUDE.md`. Include a diagram if anything has moving parts.
3. Save it in the right folder, but **do not commit yet**.
4. Show the reader the full draft in the chat, plus a short list of the other files you'll update (glossary, recently added, overview page, related pages, confusables).
5. Wait for approval. If the reader asks for changes, make them and show the draft again.
6. Once approved, do the housekeeping steps from `CLAUDE.md`, run the safety check and `npm run build`, then commit and push.
7. Give the reader the live link: `https://agentic-guide.vercel.app/<path>/` (live within a minute or two).

If the reader says "no" or abandons the draft, delete the uncommitted file so nothing half-finished is left behind.

## 5. Safety check (every time)

Before any commit, review every changed file against the safety rules in `CLAUDE.md`. If something private slipped in, remove it, and tell the reader what you removed. This applies to small changes too.

## Adding several concepts at once

If the reader gives you a batch, handle them one page at a time: draft, approve, publish, then the next. Mention the queue at the start ("Three concepts here: I'll start with X").
