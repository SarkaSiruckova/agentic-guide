---
title: Confusables
description: Things that are easy to mix up, side by side.
sidebar:
  order: 4
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

[Read the full page](/concepts/agents/chat-agent-workflow-automation/).

## RAG vs fine-tuning vs prompting

Three ways to change how a model responds. They change different things.

| | What it changes | Use it when |
| --- | --- | --- |
| Prompting | The instructions and examples in the request | You want a different task, format or tone |
| RAG | The facts the model sees at question time | The answer lives in many documents, or changes often |
| Fine-tuning | The model itself, through extra training | You need a consistent style or specialist behaviour |

Prompting tells the model what to do, RAG gives it what to read, and fine-tuning changes how it behaves.

[Read the full page](/concepts/data/rag-and-chunking/).

## MCP vs API

| | API | MCP |
| --- | --- | --- |
| What it is | A service's own interface for software | A standard wrapper so AI assistants can use capabilities in one consistent way |
| Relationship | Many MCP servers call an API underneath | MCP sits on top of APIs and does not replace them |

[Read the full page](/concepts/agents/mcp/).

## Database vs knowledge graph

A database is the broad category: software that stores data and answers queries. A knowledge graph is a way of organising data as things and labelled links, and it can live in a graph database or in ordinary tables. Counting and listing suit tables. Following connections suits a graph.

[Read the full page](/concepts/data/knowledge-graphs/).

## Skill vs tool vs MCP

| Term | What it is |
| --- | --- |
| Tool | An action the agent can take, such as searching the CRM |
| Skill | Know-how about how and when to do a job well |
| MCP | A standard way to connect the agent to systems and their tools |

[Skills](/concepts/agents/skills-and-instruction-files/), [tool use](/concepts/agents/tool-use/) and [MCP](/concepts/agents/mcp/) each have their own page.

## Evals vs benchmarks

A benchmark is a public test used to compare models in general. An eval is a test you build around your own tasks and data. A model that tops a benchmark can still fail on your work, so your own evals decide.

[Read the full page](/concepts/agents/evals/).

## Observability vs monitoring vs audit trail

| Term | What it does |
| --- | --- |
| Monitoring | Watches a few numbers and warns you when something is off |
| Observability | Gives you the detail to find out why |
| Audit trail | A lasting record of who did what, kept for accountability |

[Read the full page](/concepts/agents/observability/).

## Authentication vs authorisation

Authentication is proving who you are. Authorisation is deciding what you are allowed to do. An agent needs both: it signs in as someone, and what it can then do depends on that identity's permissions.

[Read the full page](/concepts/data/apis-oauth-and-api-keys/).

## Planned so far

- LLM vs LRM vs LQM
- Claude.ai vs Claude Code vs the Claude API
