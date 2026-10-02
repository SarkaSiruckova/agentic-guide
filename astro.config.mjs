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
        { label: '1. Concepts', items: [{ autogenerate: { directory: 'concepts' } }] },
        { label: '2. The map', items: [{ autogenerate: { directory: 'map' } }] },
        { label: '3. Model landscape', items: [{ autogenerate: { directory: 'models' } }] },
        { label: '4. Setup and practice', items: [{ autogenerate: { directory: 'setup' } }] },
        { label: '5. Comms channels', items: [{ autogenerate: { directory: 'channels' } }] },
        { label: 'Browse by tag', link: '/tags/' },
      ],
    }),
  ],
});
