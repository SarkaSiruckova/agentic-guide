---
title: OpenAI
description: A neutral snapshot of OpenAI, the company behind the GPT models and ChatGPT, covering its products, how to reach them, licensing and data terms.
tags: [foundations, tools]
lastReviewed: 2026-10-02
snapshot: true
sidebar:
  order: 3
published: 2026-10-05
---

This is one of a set of parallel provider snapshots, each with the same headings. It covers OpenAI, the company behind the GPT models and ChatGPT.

**In one line:** OpenAI is the AI company behind the GPT family of models and the ChatGPT app, and it sells closed models through its own apps and API as well as publishing a pair of open-weight models.

## Why it matters

OpenAI's API request format is widely copied, so many gateways and tools accept it as a common language (see [model access platforms](/map/model-access-platforms/)). ChatGPT is also the AI app that many colleagues will already be using.

OpenAI also co-founded the foundation that now hosts MCP (see below) and published AGENTS.md, an instruction-file convention for coding agents that sits alongside the ideas in [skills and instruction files](/agents/skills-and-instruction-files/).

<mark>ChatGPT's consumer plans and its business plans come with different data terms, so check which one you are actually using.</mark>

This page is a dated snapshot. Check OpenAI's own pages before relying on any detail.

## What it offers (as of October 2026)

**Models.** OpenAI's documentation lists flagship GPT tiers named Astra, Sol and Luna (see [model tiers](/models/model-tiers/)).

| Tier | How OpenAI's documentation describes it |
| --- | --- |
| Astra | Its most capable model for the most demanding work |
| Sol | Near-Astra performance for complex work at lower cost |
| Luna | Its most efficient model for focused, high-volume tasks |

Reasoning is handled as a setting. The documentation says these models support a range of reasoning effort levels, so the earlier separate reasoning-model line (the o-series) is no longer how the current flagships are presented. The o-series names still appear in Microsoft's catalogue of Azure OpenAI models.

OpenAI also lists specialised models for image generation, live voice, speech generation and transcription, plus models for cybersecurity (Daybreak) and life sciences (GPT-Rosalind) that are limited to approved organisations. Embeddings, moderation and fine-tuning have their own guides.

**ChatGPT.** The app is available on web, mobile and desktop. OpenAI lists plans called Free, Go, Plus, Pro, Business, Enterprise and Higher Education, plus one for K-12 teachers. Features include chat with web search, a work mode, deep research, voice, image creation, and connections to other apps. Feature availability varies by plan.

**Developer API.** The OpenAI API is the direct route for software, with a Responses API that the migration guidance points to for tool calling.

**Coding and agent products.**

- **Codex** is OpenAI's coding agent. Its documentation lists a desktop app, an editor extension, a command-line tool (one you run by typing commands in a terminal, covered in [terminal basics](/building/terminal-basics/)) and a web version, and says it is included with ChatGPT Plus, Pro, Business, Edu and Enterprise plans.
- **The Agents SDK** is an OpenAI library for building agents from agents, handoffs between them, and guardrails (see [subagents and multi-agent systems](/agents/subagents-and-multi-agent-systems/)). Its Python documentation says it can also be used with non-OpenAI models through adapters.

**Open-weight models.** In August 2025 OpenAI released gpt-oss, two open-weight models named gpt-oss-120b and gpt-oss-20b.

## How to reach it

- **OpenAI's own API and apps.** Account with OpenAI, either as a developer or through a ChatGPT plan.
- **Microsoft Foundry.** Microsoft's documentation says Azure OpenAI models are sold directly by Azure: hosted and operated by Azure, billed through an Azure subscription, covered by Azure's service agreements and supported by Microsoft. Its catalogue lists many GPT families, the o-series, embeddings, image and audio models. Which models appear differs from OpenAI's own list.
- **Gateways and other platforms.** Because the API format is widely supported, gateways can front it. The gpt-oss open-weight models are also listed as available on Azure, AWS, and local tools such as Ollama.

## Licence and openness

OpenAI's flagship GPT models are closed-weight. See [open vs closed weights](/under-the-hood/open-vs-closed-weights/).

The gpt-oss models are the exception. OpenAI's announcement and the model card on Hugging Face both state the Apache 2.0 licence, which is a permissive licence. The announcement gives gpt-oss-120b at 117 billion parameters and gpt-oss-20b at 21 billion in total, using a design where only part of the model is active per token. They can be downloaded and run on your own hardware (see [quantisation](/under-the-hood/quantisation/)).

## Data and compliance notes

Terms differ between consumer and business products and can change. Read the current pages and your own contract. See [GDPR, data retention and DPAs](/running/gdpr-data-retention-and-dpas/).

- **Business products (ChatGPT Business, Enterprise, Edu, and the API).** OpenAI's enterprise privacy page says it does not train its models on business data by default, and that you own your inputs and outputs where the law allows. It says it can sign a Data Processing Addendum for ChatGPT Business, Enterprise and the API, and that it has completed SOC 2 Type 2 audits.
- **API data controls.** OpenAI's documentation says data sent to the API is not used for training unless you opt in, and that abuse-monitoring logs are kept for 30 days by default. Eligible customers can apply for zero data retention. Regional data storage and processing is offered in several regions, including the US, EU and UK, and non-US regions need extra approval and an amended retention agreement.
- **Consumer ChatGPT (Free, Plus, Pro).** OpenAI's help page says content is used to train models by default, and you can switch this off in Data controls. Temporary chats are not used for training but may be kept for up to 30 days for safety.
- **Through Microsoft.** Azure OpenAI is governed by Microsoft's terms, so check those separately.

## Things to watch

- **Structure.** OpenAI's structure page says that since a recapitalisation announced in October 2025, the controlling entity is a non-profit called the OpenAI Foundation, and commercial operations run through OpenAI Group PBC, a public benefit corporation. If you sign a contract, check which entity you are contracting with.
- **Fast line-up changes.** The reasoning line, flagship names and specialised models have all changed in the past year.
- **Notice periods vary.** OpenAI's deprecation page says generally available models get at least six months' notice, specialised variants at least three months, and preview models as little as two weeks.
- **Restricted models.** Some specialised models are limited to approved organisations.
- **Different terms by door.** A model through Azure may differ from the same model through OpenAI's own API in features, regions and schedules.

## Related

- [Model tiers](/models/model-tiers/): how Astra, Sol and Luna fit the general idea
- [Anthropic](/models/anthropic/): the same snapshot for another major provider
- [Open-weight options](/models/open-weight-options/): where gpt-oss sits among other open models
- [Data terms at a glance](/models/data-terms-at-a-glance/): comparing training and retention terms across providers
- [MCP](/agents/mcp/): the standard OpenAI co-founded a foundation to host

## The proper terms

- **GPT:** OpenAI's family of language models
- **ChatGPT:** OpenAI's consumer and business chat app
- **Codex:** OpenAI's coding agent
- **Agents SDK:** OpenAI's library for building multi-agent programs
- **Responses API:** OpenAI's API for requests that use tools
- **gpt-oss:** OpenAI's open-weight model pair
- **Public benefit corporation:** a company legally required to weigh a stated public mission

## Next up

Next, a maker that also runs the cloud and the office apps its models sit inside. [Google](/models/google/) covers Gemini and the open-weight Gemma family.
