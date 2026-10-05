---
title: How AI pricing works
description: How AI providers charge for models, what makes up a bill, and how to compare pricing pages.
tags: [cost]
lastReviewed: 2026-10-02
snapshot: true
published: 2026-10-02
---

An agent that is safe and works well still has to be affordable. If the model is the engine and tokens are its fuel, this chapter is about the fuel bill, starting with how providers charge for what you use.

**In one line:** most AI use is billed by the token, with the text you send and the text you get back priced separately, and everything else (thinking, tools, subscriptions) is a variation on that.

## Why it matters

An agent can run hundreds of times a day without anyone watching. A cost that looks tiny per request can become a real line in the budget, and a cost that looks fine in a test can jump when the real data arrives.

Pricing pages are also hard to compare. One provider quotes per million tokens, another per seat per month, another in credits. Knowing the few moving parts lets you read any of them.

<mark>The price of one request is simply tokens in times the input rate, plus tokens out times the output rate, so you can estimate almost any bill on the back of an envelope.</mark>

## How it works

A **token** is a small chunk of text, roughly three quarters of an English word (see [tokens and context windows](/concepts/how-models-work/tokens-and-context-windows/)). Providers count tokens and charge per **million tokens**, often written MTok.

A bill is built from a few parts:

- **Input tokens.** Everything you send: the question, the [system prompt](/concepts/talking-to-models/system-prompts/), tool descriptions, retrieved documents and the conversation so far.
- **Output tokens.** What the model writes back. These almost always cost more per token than input, commonly several times more, because generating text is more work than reading it.
- **Thinking tokens.** [Reasoning models](/concepts/how-models-work/reasoning-models/) write out working before they answer. Providers usually bill those hidden tokens at the output rate, so a short answer can sit on top of a long, paid-for think.
- **Tool charges.** Built-in tools, such as web search, are often billed per use on top of the tokens.
- **Discounts.** Reused input can be cheaper (see [prompt caching and batch processing](/concepts/cost/prompt-caching-and-batch-processing/)), and non-urgent work can be sent in bulk at a lower rate.

```mermaid
flowchart TD
  A[Your prompt and context] --> B[Input tokens x input rate]
  C[Model writes the answer] --> D[Output tokens x output rate]
  E[Reasoning model] --> F[Thinking tokens, billed as output]
  G[Built-in tools] --> H[Per-use tool fees]
  B --> T[One request]
  D --> T
  F --> T
  H --> T
  T --> I[Minus caching or batch discounts]
  I --> J[Bill line]
```

**Tiers.** Providers sell families of models in sizes. A small model is cheap and fast and good for simple, repeated jobs. A mid model suits most work. A large model costs the most and is for hard problems. Choosing the right tier for each job is called [model routing](/concepts/cost/model-routing/).

**Long inputs.** Some providers charge a higher rate once a single prompt passes a certain size. Others charge the same rate throughout the context window. Check the page for any line about "long context".

**Three ways to pay.**

- **Pay as you go (the API).** You pay for the tokens you use, with no monthly minimum. This is how agents and automations are normally billed.
- **Subscriptions and seats.** A fixed monthly fee per person for a chat app or assistant, with usage limits that vary by plan. Heavy use can hit the limit, and the app may slow down or pause.
- **Credits.** You buy a pot of credits up front and each action draws it down, sometimes at an exchange rate that the vendor sets.

## In practice

When you read a pricing page, check these in order:

1. **Price per million input tokens and output tokens**, for the tier you would use.
2. **Context size**, meaning how much you can send in one request.
3. **Extra fees**: thinking, tools, search, storage for cached material, regional processing.
4. **Discounts** for cached input and batch use, and what you must do to get them.
5. **[Rate limits](/concepts/running-things/rate-limits-retries-and-failures/)**: how many requests or tokens per minute you may use. Cheap models with tight limits can be unusable at volume.
6. **Data terms**: whether prompts are kept or used for training, and whether you can get a data processing agreement (see [GDPR, data retention and DPAs](/concepts/security/gdpr-data-retention-and-dpas/)). The cheapest plan is sometimes the one with the weakest terms.

To estimate a job's cost before you build it, see [estimating cost per task](/concepts/cost/estimating-cost-per-task/).

**Snapshot, as of October 2026.** Everything in this section is a real figure that will go out of date. The official pricing pages of three providers were read on 2 October 2026: Anthropic, OpenAI and Google (Gemini API). Figures are US dollars per million tokens, rounded into ranges that cover the three. Each range spans the cheapest and dearest of the three providers' offerings in that tier.

| Tier | Input | Output |
| --- | --- | --- |
| Small | about $0.10 to $1 | about $0.50 to $5 |
| Mid | about $0.75 to $2 | about $4 to $10 |
| Large | about $2 to $10 | about $12 to $50 |

Across these providers, output tokens cost roughly five times the input rate in the mid and large tiers. The batch discount was 50% on all three. Cached input read at about a tenth of the normal input price on the Anthropic and OpenAI pages. Anthropic listed web search at $10 per 1,000 searches, OpenAI also listed $10 per 1,000 calls, and Google gave a monthly free allowance and then $14 per 1,000 requests. Google said thinking tokens are included in its output price. One provider's mid-tier price was shown as a promotional rate that rises on 1 January 2027, which is a reminder that these numbers move.

Prices have fallen and changed shape many times in the last few years, with new tiers appearing and old ones being retired. Check the current page before you commit to a budget.

## Worked example

Sample Ventures, the fictional fund, wants an agent to read each introduction email and pull out the founder's name, the company, the sector and the ask. The operations lead estimates the cost of one email on a mid-tier model.

Assumptions (illustrative round numbers):

- Input: about 1,500 tokens (the email plus the instructions).
- Output: about 200 tokens (a short structured record).
- No thinking, no tools.

Using the mid-tier ranges from the snapshot:

| | Tokens | Low rate | High rate | Low cost | High cost |
| --- | --- | --- | --- | --- | --- |
| Input | 1,500 | $0.75 per million | $2 per million | $0.001125 | $0.003 |
| Output | 200 | $4 per million | $10 per million | $0.0008 | $0.002 |
| Total | | | | $0.001925 | $0.005 |

So one email costs roughly $0.002 to $0.005, or between a fifth of a US cent and half a US cent.

For 1,000 emails that is about $1.93 to $5. If the job is not urgent and runs as a batch at half price, it is about $0.96 to $2.50. The model is almost never the expensive part at this scale. People's time reviewing the results usually costs far more.

If the same job ran on a large-tier model, the range rises to about $5 to $25 per 1,000 emails, which is a good reason to check whether a smaller model does the job well enough.

## Costs and limits

- **Output and thinking cost more than they look.** A chatty prompt that asks for long explanations, or a reasoning model left on for a simple task, can multiply the bill.
- **Context grows.** In an [agent loop](/concepts/agents/the-agent-loop/) each step resends the earlier ones, so a long job pays for the same text many times unless caching helps.
- **Tool descriptions count as input.** Connecting many tools adds tokens to every request.
- **Mistakes multiply.** A loop that retries forever, or a script that runs on every record by accident, is the usual way a bill surprises someone. Set spending limits and alerts with the provider.
- **Seat prices hide usage.** A subscription feels cheap until someone wants to run it as an automation, which usually needs the API.
- **Prices are not capability.** A higher price does not mean a better answer for your task. Test on your own examples.

## Often confused with

**Subscription plan limits vs API billing.** A subscription gives a person a fixed monthly fee and a usage allowance in a chat app. The API charges per token with no allowance, and it is what agents and automations use. They are separate products, usually with separate terms, so a subscription does not pay for API use.

**Price per token vs cost per task.** The price per token is a rate. The cost per task is that rate times how many tokens the task needs, which depends on your prompt, your documents and how many steps the agent takes.

## Related

- [Tokens and context windows](/concepts/how-models-work/tokens-and-context-windows/): what a token is and how much fits in one request
- [Prompt caching and batch processing](/concepts/cost/prompt-caching-and-batch-processing/): the two main discounts
- [Model routing](/concepts/cost/model-routing/): sending easy jobs to cheap models and hard ones to strong models
- [Estimating cost per task](/concepts/cost/estimating-cost-per-task/): working out a budget before you build

## The proper terms

- **MTok:** one million tokens, the usual unit for pricing
- **Input tokens:** the tokens you send to the model
- **Output tokens:** the tokens the model writes back
- **Thinking tokens:** hidden working a reasoning model writes before answering
- **Pay as you go:** paying only for the usage you consume, with no fixed fee
- **Seat:** one person's licence for a subscription product
- **Credits:** prepaid units that are drawn down as you use a service

## Next up

Two discounts appear on almost every pricing page, and both reward planning ahead. [Prompt caching and batch processing](/concepts/cost/prompt-caching-and-batch-processing/) explains how they work.
