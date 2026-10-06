---
title: Anthropic
description: A neutral snapshot of Anthropic, the company behind the Claude models, covering its products, how to reach them, licensing and data terms.
tags: [foundations, tools]
lastReviewed: 2026-10-06
snapshot: true
sidebar:
  order: 2
published: 2026-10-05
---

The provider pages in this section are parallel snapshots of individual carmakers, listed in no order of merit. This one covers Anthropic, the maker of the Claude models and the creator of MCP.

**In one line:** Anthropic is the AI company that makes the Claude family of closed-weight models, sold through its own apps and API, through big clouds, and through coding and agent tools.

## The jargon: concepts covered on this page

- **Claude:** Anthropic's family of language models and its assistant
- **Agent SDK:** a library for building your own agents on Claude Code's engine
- **Managed agents:** an agent loop that the provider hosts for you
- **Zero data retention:** a contract setting where inputs and outputs are not stored
- **Trusted access programme:** limited release of a model to vetted organisations
- **Linux Foundation:** a non-profit that hosts shared open technology projects

## Why it matters

Anthropic is one of the main providers a small firm will meet when building agents. Its Claude models, its coding tool (Claude Code) and its agent library (the Agent SDK) are used directly, and are also built into other products.

It also created MCP, the open standard for connecting assistants to tools and data (see [MCP](/agents/mcp/)). Even if you use a different model provider, you are likely to meet MCP.

<mark>Anthropic's consumer apps and its commercial products come with different data terms, so check which one you are actually using.</mark>

This page is a dated snapshot. Product names and model line-ups change often, so treat it as a starting point and check Anthropic's own pages before deciding.

## What it offers (as of October 2026)

**Models.** The Claude family is sold in tiers (see [model tiers](/models/model-tiers/)). Anthropic's documentation lists four generally available tiers with these descriptions:

| Tier | How Anthropic's documentation describes it |
| --- | --- |
| Fable | For demanding reasoning and long-horizon agentic work |
| Opus | For long-running agentic coding and knowledge work |
| Sonnet | A balance of speed and intelligence |
| Haiku | Its fastest model |

Anthropic also describes a further tier, Mythos, as available only to vetted organisations through trusted access programmes. It is not something a small firm can simply sign up for.

**Apps.** Claude is available as a chat and work assistant on web, desktop and mobile. Anthropic's product pages also list Claude Code, a Chrome extension, a Slack integration, and an integration inside Microsoft 365 apps. Which plan includes which feature varies, so check the current plan page.

**Developer API.** The Claude API (on the Claude Platform) is the direct route for software. It supports tool use, so a model can request actions (see [tool use](/agents/tool-use/)).

**Agent and coding products.**

- **Claude Code** is an agentic coding tool. Anthropic's documentation says it runs in the terminal (the text window where you type commands, covered in [terminal basics](/building/terminal-basics/)), in code editors, in a desktop app and in the browser.
- **The Agent SDK** is a library, in Python and TypeScript, that gives your own program the same agent loop and tools that power Claude Code (see [the agent loop](/agents/the-agent-loop/) and [agentic harness](/agents/agentic-harness/)).
- **Managed Agents** is a hosted option where Anthropic runs the agent loop for you in a managed sandbox, configured through the API.

**MCP.** Anthropic created MCP. In December 2025 it announced that it was donating MCP to the Agentic AI Foundation, a new fund under the Linux Foundation, co-founded with Block and OpenAI. Anthropic says MCP stays a neutral, open standard.

## How to reach it

- **Anthropic's own API and apps.** The Claude Platform and the Claude apps. New features usually appear here first, though that is a general pattern to check, not a promise.
- **Amazon Web Services.** Claude is available in Amazon Bedrock, and Anthropic's documentation also describes Claude Platform on AWS, an Anthropic-operated option billed through AWS Marketplace.
- **Google Cloud.** Anthropic's documentation says Claude is available through Google Cloud's agent platform, which is part of what was previously called Vertex AI.
- **Microsoft Foundry.** Anthropic's documentation says Claude is available in Microsoft Foundry as an Anthropic-operated service, hosted either on Azure infrastructure or on Anthropic's own.

Model availability differs by door. See [model access platforms](/map/model-access-platforms/) for how to compare them.

## Licence and openness

Claude models are closed-weight: you cannot download them and can only use them through a service. See [open vs closed weights](/under-the-hood/open-vs-closed-weights/).

Use of the Agent SDK is governed by Anthropic's Commercial Terms of Service, according to its documentation, except where a component carries a different licence. MCP itself is an open standard.

Anthropic's deprecation page also states a commitment to preserve the weights of publicly released models for the long term, with a view to making past models available again at some point. It is a stated intention, not a service you can use today.

## Data and compliance notes

Terms differ between consumer plans and commercial products, and they change. Read the current pages and your own contract. See [GDPR, data retention and DPAs](/running/gdpr-data-retention-and-dpas/) for the questions to ask.

- **Commercial products (API, Team, Enterprise).** Anthropic's Commercial Terms say that Anthropic may not train models on Customer Content from the services, and that a Data Processing Addendum is incorporated by reference.
- **Retention for the API.** Anthropic's privacy page says inputs and outputs are deleted from its backend within 30 days, with exceptions for longer-retention services, custom agreements such as zero data retention, policy enforcement and legal requirements. It states that content flagged for policy violations can be kept longer.
- **Consumer plans (Free, Pro, Max).** Anthropic's page says chats and coding sessions are used to improve Claude only if you choose to allow it, if they are flagged for safety review, or if you join a special programme. Incognito chats are excluded. Check the setting on your account.
- **Through other clouds.** For Claude in Microsoft Foundry, Anthropic's documentation says Azure-hosted deployments keep prompts and completions within Azure, with usage metadata and safety-flagged content going to Anthropic. A US-only data zone option is listed. Other clouds have their own terms.

## Things to watch

- **Fast line-up changes.** Tiers have been added and refreshed in recent months, so check which are current.
- **Different retirement dates by door.** Anthropic's deprecation page says its dates apply to platforms it operates, and partner-operated clouds such as Amazon Bedrock and Google Cloud set their own schedules. It gives at least 60 days' notice for publicly released models.
- **Restricted tier.** Mythos is not generally available.
- **Safeguards on sensitive topics.** Anthropic says Fable's access in areas such as cybersecurity and biology is deliberately limited by safeguards that route flagged requests to less capable models. Requests in those areas may behave differently.
- **Sign-in rules for tools built on the SDK.** Anthropic's documentation says third parties may not offer claude.ai login for products built on the Agent SDK unless previously approved. Use API keys instead.

## Related

- [Model tiers](/models/model-tiers/): how Fable, Opus, Sonnet and Haiku fit the general idea
- [OpenAI](/models/openai/): the same snapshot for another major provider
- [Data terms at a glance](/models/data-terms-at-a-glance/): comparing training and retention terms across providers
- [MCP](/agents/mcp/): the standard Anthropic created
- [Model access platforms](/map/model-access-platforms/): the three routes to reach a model

## Next up

Next, another major provider of closed models, which also publishes a pair of open-weight ones. [OpenAI](/models/openai/) uses the same headings, so the two pages compare line by line.
