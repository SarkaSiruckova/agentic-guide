// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import starlightTags from 'starlight-tags';

export default defineConfig({
  site: 'https://agentic-guide.vercel.app',
  integrations: [
    // Mermaid must come before Starlight so diagrams render inside docs pages
    mermaid({ theme: 'neutral', autoTheme: true }),
    starlight({
      title: 'Agentic AI Field Guide',
      description: 'A plain-language, growing guide to agentic AI.',
      lastUpdated: true,
      plugins: [starlightTags()],
      customCss: [
        '@fontsource/literata/400.css',
        '@fontsource/literata/400-italic.css',
        '@fontsource/literata/600.css',
        '@fontsource/public-sans/400.css',
        '@fontsource/public-sans/600.css',
        '@fontsource/public-sans/700.css',
        './src/styles/custom.css',
      ],
      components: {
        PageTitle: './src/components/PageTitle.astro',
      },
      sidebar: [
        { label: 'Start here', items: [{ autogenerate: { directory: 'start-here' } }] },
        {
          label: '1. Concepts',
          items: [
            { label: 'Concepts overview', slug: 'concepts' },
            { label: 'How models work', collapsed: true, items: [{ autogenerate: { directory: 'concepts/how-models-work' } }] },
            { label: 'Talking to models', collapsed: true, items: [{ autogenerate: { directory: 'concepts/talking-to-models' } }] },
            { label: 'Agents', collapsed: true, items: [{ autogenerate: { directory: 'concepts/agents' } }] },
            { label: 'Data and the context layer', collapsed: true, items: [{ autogenerate: { directory: 'concepts/data' } }] },
            { label: 'Running things', collapsed: true, items: [{ autogenerate: { directory: 'concepts/running-things' } }] },
            { label: 'Security and compliance', collapsed: true, items: [{ autogenerate: { directory: 'concepts/security' } }] },
            { label: 'Cost', collapsed: true, items: [{ autogenerate: { directory: 'concepts/cost' } }] },
          ],
        },
        { label: '2. The map', items: [{ autogenerate: { directory: 'map' } }] },
        { label: '3. Model landscape', items: [{ autogenerate: { directory: 'models' } }] },
        { label: '4. Setup and practice', items: [{ autogenerate: { directory: 'setup' } }] },
        { label: '5. Comms channels', items: [{ autogenerate: { directory: 'channels' } }] },
        { label: 'Browse by tag', link: '/tags/' },
      ],
    }),
  ],
});
