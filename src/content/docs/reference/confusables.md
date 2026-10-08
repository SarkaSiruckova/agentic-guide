---
title: Confusables
description: Things that are easy to mix up, side by side.
tags: [foundations]
lastReviewed: 2026-10-05
snapshot: false
published: 2026-10-02
sidebar:
  order: 2
---

Pairs and groups of terms that sound similar or overlap, with the difference spelled out.

## Chat vs agent vs workflow vs automation

Four words people use interchangeably. What separates them is who decides the next step.

| Term | Who decides the next step |
| --- | --- |
| Chat | You, one message at a time |
| Workflow | A fixed script of steps |
| Automation | The same script, started by a trigger instead of a person |
| Agent | The model itself |

[Read the full page](/start/chat-agent-workflow-automation/).

## RAG vs fine-tuning vs prompting

Three ways to change how a model responds. They change different things.

| | What it changes | Use it when |
| --- | --- | --- |
| Prompting | The instructions and examples in the request | You want a different task, format or tone |
| RAG | The facts the model sees at question time | The answer lives in many documents, or changes often |
| Fine-tuning | The model itself, through extra training | You need a consistent style or specialist behaviour |

Prompting tells the model what to do, RAG gives it what to read, and fine-tuning changes how it behaves.

[Read the full page](/data/rag-and-chunking/).

## MCP vs API

| | API | MCP |
| --- | --- | --- |
| What it is | A service's own interface for software | A standard wrapper so AI assistants can use capabilities in one consistent way |
| Relationship | Many MCP servers call an API underneath | MCP sits on top of APIs and does not replace them |

[Read the full page](/agents/mcp/).

## Database vs knowledge graph

A database is the broad category: software that stores data and answers queries. A knowledge graph is a way of organising data as things and labelled links, and it can live in a graph database or in ordinary tables. Counting and listing suit tables. Following connections suits a graph.

[Read the full page](/data/knowledge-graphs/).

## Skill vs tool vs MCP

| Term | What it is |
| --- | --- |
| Tool | An action the agent can take, such as searching the CRM |
| Skill | Know-how about how and when to do a job well |
| MCP | A standard way to connect the agent to systems and their tools |

[Skills](/agents/skills-and-instruction-files/), [tool use](/agents/tool-use/) and [MCP](/agents/mcp/) each have their own page.

## Evals vs benchmarks

A benchmark is a public test used to compare models in general. An eval is a test you build around your own tasks and data. A model that tops a benchmark can still fail on your work, so your own evals decide.

[Read the full page](/running/evals/).

## Observability vs monitoring vs audit trail

| Term | What it does |
| --- | --- |
| Monitoring | Watches a few numbers and warns you when something is off |
| Observability | Gives you the detail to find out why |
| Audit trail | A lasting record of who did what, kept for accountability |

[Read the full page](/running/observability/).

## Authentication vs authorisation

Authentication is proving who you are. Authorisation is deciding what you are allowed to do. An agent needs both: it signs in as someone, and what it can then do depends on that identity's permissions.

[Read the full page](/agents/apis-oauth-and-api-keys/).

## Machine learning vs AI vs deep learning

Three terms often used as if they mean the same thing. Each one sits inside the one before it.

| Term | What it covers |
| --- | --- |
| AI | Any machine doing a task that seems intelligent, by any method |
| Machine learning | Software that learns its own rules from examples, one way of building AI |
| Deep learning | Machine learning with many-layered neural networks, including large language models |

[Read the full page](/under-the-hood/machine-learning-and-neural-networks/).

## LLM vs LRM vs LQM

Three labels that overlap. An LRM is a kind of LLM, and "LQM" is an informal term whose meaning varies by who uses it.

| | LLM | LRM | LQM |
| --- | --- | --- | --- |
| Stands for | Large language model | Large reasoning model | Large quantitative model |
| Built around | Text | Text, plus extended step-by-step thinking | Numbers, physics or simulation data (meaning varies) |
| Status of the term | Widely used | Widely used, informal | Informal, partly vendor branding |
| Check it by | Comparing to sources | Checking the answer and the working | Testing against known results or recalculating |

[Read the full page](/under-the-hood/llms-lrms-and-lqms/).

## Structured data vs structured outputs

Structured data is data that already lives in an organised form, such as database rows. Structured outputs are a way of making a model answer in that form. You usually use structured outputs to turn unstructured data into structured data.

[Read the full page](/building/structured-outputs/).

## Open source vs open weights

Open source, strictly, means the whole system can be inspected, changed and shared, including training code and data information. Open weights means only the trained numbers are available. Neither means free or private by itself.

[Read the full page](/under-the-hood/open-vs-closed-weights/).

## Prompt injection vs jailbreaking

Jailbreaking is a user trying to make a model break its own built-in rules. Prompt injection is instructions slipped in through content the agent reads, usually to hijack what it does with its tools.

[Read the full page](/running/prompt-injection/).

## GDPR vs UK GDPR, and the two meanings of DPA

The EU GDPR and the UK GDPR are separate legal texts with very similar rules, and a UK firm can fall under both. A DPA can be a data processing agreement (a contract with a vendor) or the Data Protection Act 2018 (UK law). This is general information, not legal advice.

[Read the full page](/running/gdpr-data-retention-and-dpas/).

## Cost per token vs cost per task

A price per token is what the vendor charges. The cost per task is what a finished job really costs, once you count every call, the growing record an agent rereads each round, retries and tools.

[Read the full page](/running/estimating-cost-per-task/).

## Claude.ai vs Claude Code vs the Claude API

Three ways to use the same family of models, built for different jobs.

| | What it is | Use it when |
| --- | --- | --- |
| Claude.ai | The chat apps on web, desktop and mobile | You want to think, write, research or plan with a person in the loop |
| Claude Code | A coding agent that works in a folder on your computer | You are building or changing files and want the agent to run commands |
| The Claude API | A way for your own software to call the models | You are building your own product or agent |

[Read the full page](/building/claude-code-and-the-api/).

## Next up

To find pages by topic instead of by reading order, [Browse by tag](/tags/) groups every page under its tags.
