import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { starlightTagsExtension } from 'starlight-tags/schema';

// Extra fields every page can use, on top of Starlight's defaults and tags
const guideFields = starlightTagsExtension.extend({
  /** Date this page was last checked for accuracy, e.g. 2026-10-02 */
  lastReviewed: z
    .union([z.string(), z.date()])
    .transform((v) => (typeof v === 'string' ? v : v.toISOString().slice(0, 10)))
    .optional(),
  /** Date this page was first published, e.g. 2026-10-05 */
  published: z
    .union([z.string(), z.date()])
    .transform((v) => (typeof v === 'string' ? v : v.toISOString().slice(0, 10)))
    .optional(),
  /** True for pages that describe a moment in time (models, pricing) */
  snapshot: z.boolean().default(false),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: guideFields }),
  }),
};
