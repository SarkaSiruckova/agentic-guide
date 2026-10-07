/**
 * Hand-curated parts of the concept map. Everything else on the map
 * (pages, reading order, Related links, jargon terms) is read from the
 * pages themselves at build time by src/pages/concept-map.astro.
 *
 * When you add a page that teaches a journey stage or clearly runs in one
 * of the places below, add its URL here. Unknown URLs are skipped with a
 * warning in the build log.
 */

/** Columns on the map, left to right. Folder name = Part. */
export const parts = [
  { dir: 'start', kicker: 'Part 1', title: 'Start here', colour: '--p1' },
  { dir: 'using-ai', kicker: 'Part 2', title: 'Using AI well', colour: '--p2' },
  { dir: 'agents', kicker: 'Part 3', title: 'How agents work', colour: '--p3' },
  { dir: 'building', kicker: 'Part 4', title: 'Building your own', colour: '--p4' },
  { dir: 'data', kicker: 'Part 5', title: 'Data and the context layer', colour: '--p5' },
  { dir: 'running', kicker: 'Part 6', title: 'Running it for real', colour: '--p6' },
  { dir: 'under-the-hood', kicker: 'Part 7', title: 'Under the hood (optional)', colour: '--p7' },
  { dir: 'models', kicker: 'Side trip', title: 'Model landscape', colour: '--el', side: true },
  { dir: 'map', kicker: 'Side trip', title: 'Infrastructure map', colour: '--el', side: true },
  { dir: 'channels', kicker: 'Side trip', title: 'Comms channels', colour: '--el', side: true },
];

/** The journey across the top of the map, in order. */
export const stages = [
  {
    id: 'chat',
    label: 'Chat',
    text: 'Typing to a model in an app, one message at a time.',
    pages: ['/start/chat-agent-workflow-automation/', '/start/what-an-llm-is/', '/using-ai/claude-apps/', '/using-ai/prompt-engineering/'],
  },
  {
    id: 'skills',
    label: 'Skills',
    text: 'Saved instructions the AI loads when it needs them, so you stop retyping yourself.',
    pages: ['/using-ai/system-prompts/', '/agents/skills-and-instruction-files/', '/agents/skills-in-claude/'],
  },
  {
    id: 'connectors',
    label: 'Connectors',
    text: 'Permissioned links to your other tools, so you stop copying and pasting.',
    pages: ['/agents/apis-oauth-and-api-keys/', '/agents/mcp/', '/agents/connectors-in-claude/', '/building/connecting-business-tools-through-mcp/'],
  },
  {
    id: 'agents',
    label: 'Agents',
    text: 'A model in a loop that picks its own next step and uses tools.',
    pages: ['/agents/tool-use/', '/agents/the-agent-loop/', '/agents/agentic-harness/', '/agents/subagents-and-multi-agent-systems/', '/building/your-first-agent/'],
  },
  {
    id: 'automations',
    label: 'Automations',
    text: 'Things that run on a trigger, without you starting them.',
    pages: ['/building/serverless-functions/', '/building/triggers-and-scheduling/', '/building/n8n/'],
  },
  {
    id: 'workflows',
    label: 'Workflows',
    text: 'A fixed chain of steps, in an order you decided in advance.',
    pages: ['/start/chat-agent-workflow-automation/', '/building/structured-outputs/', '/building/orchestration-tools/'],
  },
  {
    id: 'team',
    label: 'Team scale',
    text: 'The same setup shared by many people, with rules about who sees what.',
    pages: ['/data/from-me-to-us/', '/data/permissions-and-access-control/', '/data/what-a-context-layer-is/', '/running/writing-an-ai-policy/'],
  },
];

/** "Where it runs": the places a page's ideas live. */
export const places = [
  {
    id: 'app',
    label: 'Inside the AI app',
    pages: ['/using-ai/claude-apps/', '/using-ai/system-prompts/', '/using-ai/projects-and-memory/', '/using-ai/recommended-settings/', '/agents/skills-in-claude/', '/agents/connectors-in-claude/'],
  },
  {
    id: 'laptop',
    label: 'On your laptop',
    pages: ['/building/claude-code-and-the-api/', '/building/terminal-basics/', '/building/git-and-github/', '/building/claude-code-in-depth/', '/building/cursor-and-app-builders/', '/building/local-vs-cloud/', '/map/open-model-hosting/'],
  },
  {
    id: 'cloud',
    label: 'In the cloud',
    pages: ['/building/serverless-functions/', '/building/sandboxes-and-code-execution/', '/building/environment-variables-and-secrets/', '/building/vercel/', '/building/supabase/', '/building/triggers-and-scheduling/', '/building/orchestration-tools/', '/building/n8n/', '/map/app-hosting/', '/map/compute-and-cloud/'],
  },
  {
    id: 'team',
    label: 'Shared by a team',
    pages: ['/data/from-me-to-us/', '/data/permissions-and-access-control/', '/data/memory-layers/', '/data/what-a-context-layer-is/', '/running/least-privilege/', '/running/audit-trails/', '/running/writing-an-ai-policy/'],
  },
  {
    id: 'channels',
    label: 'In chat channels',
    pages: ['/channels/', '/channels/how-channels-connect/', '/channels/slack/', '/channels/microsoft-teams/', '/channels/whatsapp/', '/channels/telegram/', '/channels/email/', '/channels/voice-and-phone-agents/', '/channels/xai-grok/', '/channels/querying-vs-adding-safely/'],
  },
];

/**
 * Example tools shown on the pages that name them most (top 3 pages each).
 * Examples only, never recommendations. Matched case-insensitively.
 */
export const examples = ['Claude', 'ChatGPT', 'Gemini', 'Cursor', 'Lovable', 'n8n', 'Zapier', 'Vercel', 'Supabase', 'GitHub', 'Slack', 'Ollama', 'Okta', 'Stripe', 'Twilio'];
