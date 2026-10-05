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
        {
          label: '1. The basics',
          collapsed: false,
          items: [
            'start-here/glossary',
            'concepts/agents/chat-agent-workflow-automation',
            'concepts/how-models-work/what-an-llm-is',
            'concepts/how-models-work/tokens-and-context-windows',
            'concepts/talking-to-models/prompt-engineering',
            'concepts/talking-to-models/system-prompts',
            'concepts/how-models-work/hallucination-and-grounding',
          ],
        },
        {
          label: '2. How models work',
          collapsed: true,
          items: [
            'concepts/how-models-work/pre-training-and-post-training',
            'concepts/how-models-work/parameters-and-temperature',
            'concepts/how-models-work/inference',
            'concepts/how-models-work/embeddings',
            'concepts/how-models-work/reasoning-models',
            'concepts/how-models-work/llms-lrms-and-lqms',
            'concepts/how-models-work/multimodal-models',
            'concepts/how-models-work/open-vs-closed-weights',
            'concepts/how-models-work/quantisation',
            'concepts/how-models-work/benchmarks',
          ],
        },
        {
          label: '3. How agents work',
          collapsed: true,
          items: [
            'concepts/talking-to-models/structured-outputs',
            'concepts/agents/tool-use',
            'concepts/agents/the-agent-loop',
            'concepts/agents/agentic-harness',
            'concepts/agents/memory',
            'concepts/agents/skills-and-instruction-files',
            'concepts/agents/mcp',
            'concepts/agents/subagents-and-multi-agent-systems',
            'concepts/agents/human-in-the-loop',
            'concepts/talking-to-models/context-engineering',
          ],
        },
        {
          label: '4. Data and the context layer',
          collapsed: true,
          items: [
            'concepts/data/structured-vs-unstructured-data',
            'concepts/data/types-of-databases',
            'concepts/data/apis-oauth-and-api-keys',
            'concepts/data/how-llms-talk-to-databases',
            'concepts/data/rag-and-chunking',
            'concepts/how-models-work/fine-tuning-vs-prompting-vs-rag',
            'concepts/data/knowledge-graphs',
            'concepts/data/entity-resolution',
            'concepts/data/keeping-data-fresh',
            'concepts/data/permissions-and-access-control',
            'concepts/data/what-a-context-layer-is',
          ],
        },
        {
          label: '5. Running agents for real',
          collapsed: true,
          items: [
            'concepts/running-things/serverless-functions',
            'concepts/running-things/environment-variables-and-secrets',
            'concepts/running-things/triggers-and-scheduling',
            'concepts/running-things/orchestration-tools',
            'concepts/running-things/rate-limits-retries-and-failures',
            'concepts/agents/observability',
            'concepts/agents/evals',
          ],
        },
        {
          label: '6. Security and compliance',
          collapsed: true,
          items: [
            'concepts/security/prompt-injection',
            'concepts/security/data-exfiltration-through-tools',
            'concepts/security/least-privilege',
            'concepts/security/audit-trails',
            'concepts/security/gdpr-data-retention-and-dpas',
          ],
        },
        {
          label: '7. Cost',
          collapsed: true,
          items: [
            'concepts/cost/how-ai-pricing-works',
            'concepts/cost/prompt-caching-and-batch-processing',
            'concepts/cost/model-routing',
            'concepts/cost/estimating-cost-per-task',
          ],
        },
        { label: '8. The map', collapsed: true, items: [{ autogenerate: { directory: 'map' } }] },
        { label: '9. Model landscape', collapsed: true, items: [{ autogenerate: { directory: 'models' } }] },
        { label: '10. Setup and practice', collapsed: true, items: [{ autogenerate: { directory: 'setup' } }] },
        { label: '11. Comms channels', collapsed: true, items: [{ autogenerate: { directory: 'channels' } }] },
        {
          label: 'Reference',
          collapsed: true,
          items: [
            'start-here/confusables',
            { label: 'Browse by tag', link: '/tags/' },
            'start-here/recently-added',
          ],
        },
      ],
    }),
  ],
});
