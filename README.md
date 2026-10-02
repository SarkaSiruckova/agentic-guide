# Agentic AI Field Guide

A personal, plain-language guide to agentic AI. Built with Astro Starlight, hosted on Vercel.

## Run it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Where things live

| What | Where |
| --- | --- |
| Pages | `src/content/docs/` (one markdown file per page) |
| Sidebar sections | `astro.config.mjs` |
| Tags | `tags.yml` |
| Colours and fonts | `src/styles/custom.css` |
| Tags, review date and snapshot note under each title | `src/components/PageTitle.astro` |

## Page fields

Every page starts with a short block of settings (called frontmatter):

```yaml
---
title: Tokens and context windows
description: One-line summary used in search and link previews
tags: [foundations, cost]
lastReviewed: 2026-10-02
snapshot: false   # true for pages about specific models or prices
---
```

## Publishing

Every push to the `main` branch on GitHub triggers Vercel to rebuild and publish the site.
