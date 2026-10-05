---
title: Skills and instruction files
description: Two ways to give an agent reusable know-how without retyping prompts every time.
tags: [agents, tools]
lastReviewed: 2026-10-02
snapshot: true
published: 2026-10-02
---

Saved memories are notes an agent picks up along the way. Instruction files and skills are the opposite: guidance a person writes on purpose, so the agent knows the rules of the road and the steps of a job before it starts.

**In one line:** instruction files and skills are saved written guidance that an agent reads, so you teach it how you work once instead of explaining it in every conversation.

## Why it matters

Agents do not remember you. Start a new session and the agent knows nothing about your conventions, your preferred format or the steps of a job you have explained ten times. Without a fix, you retype the same instructions again and again, and each version comes out slightly different.

The fix is to write the know-how down once, in a file the agent can read. There are two common forms, and they differ in when the agent reads them.

<mark>An instruction file is read every time; a skill is read only when the job needs it, which keeps the agent's working space free.</mark>

## How it works

**Instruction files** are plain text or markdown files that sit in a project or folder. The agent reads them at the start of its work. They hold things that are always true: project rules, writing style, naming conventions, what never to do. The proper term for the idea is persistent instructions, because they apply to every session.

Coding assistants popularised this. Examples are a file called AGENTS.md, which many tools read, and tool-specific ones such as CLAUDE.md. Each is a README written for the agent instead of for a human.

**Skills** are packaged, named instructions for a specific job. A skill is a folder with a main file (usually called SKILL.md) holding a short name, a description of when to use it, and the step-by-step instructions. It can also include extra reference files or small scripts.

The key idea is **load on demand**. The agent does not read every skill in full at the start. It reads only each skill's name and description, a line or two. When a request matches a description, it opens the full instructions. If the skill points to a long reference file, that is only opened if needed.

Why bother? The agent's working space, its [context window](/concepts/how-models-work/tokens-and-context-windows/), is limited, and everything in it costs money and attention. Twenty skills loaded in full would crowd out the actual task. Loading on demand lets an agent carry many skills while paying for only the ones in use. The proper term is **progressive disclosure**.

```mermaid
flowchart TD
  subgraph always["Loaded every time"]
    SP["System prompt"]
    IF["Instruction file"]
    SK["Skill names and descriptions"]
  end
  subgraph demand["Loaded only when needed"]
    FULL["Full skill instructions"]
    REF["Reference files"]
    SC["Scripts"]
  end
  REQ["A request arrives"] --> MATCH{"Matches a skill?"}
  always --> REQ
  MATCH -->|Yes| FULL
  FULL --> REF
  FULL --> SC
  MATCH -->|No| DONE["Agent works without it"]
```

**How they differ from neighbours:**

- **System prompt.** The [system prompt](/concepts/talking-to-models/system-prompts/) is set by whoever builds the application and is always sent. An instruction file is similar but lives with your project and is easy to edit.
- **Tools.** [Tools](/concepts/agents/tool-use/) let an agent do something it could not do before. A skill tells it how to do a job well using the tools it already has.
- **Memory.** [Memory](/concepts/agents/memory/) is what the agent learns or stores over time. Instruction files and skills are written deliberately by people.

## In practice

Instruction files have become a shared habit across coding assistants, and AGENTS.md is an open format kept by the Agentic AI Foundation. Some assistants also read their own named files.

Skills started at Anthropic and were published as an open format, now supported by many assistants and coding tools. A skill is just a folder, so it is easy to copy, share and keep in version control (a system that keeps every past version of a file, such as Git).

**Snapshot, as of October 2026.** The Agent Skills format is described at agentskills.io. A skill needs a SKILL.md file with a name (lowercase letters, numbers and hyphens) and a description saying what it does and when to use it, followed by instructions. Optional folders can hold scripts, references and assets. Support is wide but not universal, and details such as which extra fields work can differ between products. Check the documentation of the assistant you use.

This guide is a real example. It is maintained with a rulebook file that sets the safety, style and structure rules every page must follow, and a skill for adding new pages. The rules are written once, and any session picks them up.

Good habits:

- **One job per skill.** "Log an introduction email" is a skill. "Do all our admin" is not.
- **Write the description for the agent.** It decides whether the skill is used, so say what the skill does and when to reach for it.
- **Keep them in version control.** Then changes are tracked and can be undone.
- **Review changes.** Treat an edit to a skill like an edit to a procedure: someone checks it.
- **Keep secrets out.** Never put passwords, keys or private data in these files. Anyone who can read the file can read the secret.
- **Keep them short.** Link to reference files for detail.

## Worked example

Sample Ventures, the fictional fund, wants every introduction email logged in the CRM the same way. An associate used to do it by hand and kept forgetting fields.

1. **Draft the job.** The operations lead writes down the steps: find the company, find both people, create an interaction record, attach a one-line summary, tag it "introduction".
2. **Write the skill.** She creates a folder called `log-introduction` with a SKILL.md. The description reads: "Logs an introduction email in the CRM. Use when the user pastes or forwards an introduction email." The body holds the steps and the field names to fill.
3. **Add a reference file.** A short file lists the allowed tags, so the main instructions stay small.
4. **Set the limits.** The skill says to create the interaction record but to ask before creating a new person or company, because duplicates are hard to clean up.
5. **Try it.** An associate pastes an email about Acme Payments being introduced to an angel. The agent sees the match, opens the skill, searches the CRM and logs the interaction.
6. **Review.** The associate checks the record. The lead notes one missing step, edits the file, and everyone benefits from the next run.

Nothing changes for requests that have nothing to do with introductions: the skill stays closed.

## Costs and limits

- **Cheap to write, easy to neglect.** A skill is just a document. The cost is keeping it correct.
- **Stale instructions.** A rule written last year may no longer be true. The agent will follow it faithfully anyway. Review on a schedule.
- **Conflicts.** If the instruction file says "be brief" and a skill says "write full detail", the agent has to guess. Keep one source for each rule.
- **Not a lock.** These are guidance the model usually follows, not enforcement. Anything that must hold belongs in permissions and limits in the [harness](/concepts/agents/agentic-harness/).
- **Skills may not trigger.** A vague description means the agent may not notice the skill applies. Test with real requests.
- **Untrusted skills are risky.** A skill from outside can steer the agent with hidden instructions, and one with scripts can run code on your machine. Read a skill fully before installing it, and prefer ones from sources you trust.
- **Size.** An instruction file that grows to pages is read every time, which costs attention. Move rarely used detail into a skill.

## Often confused with

**Skill vs tool.** A tool is an action the agent can take, such as searching the CRM. A skill is know-how about when and how to take actions. A skill often tells the agent how to use several tools well.

**Skill vs MCP.** [MCP](/concepts/agents/mcp/) connects the agent to systems. A skill teaches it a procedure. You often need both: MCP to reach the CRM, a skill to log things the way the fund likes.

## Related

- [System prompts](/concepts/talking-to-models/system-prompts/): the always-on instructions that skills and instruction files sit beside
- [Tool use](/concepts/agents/tool-use/): the actions skills teach the agent to use well
- [Memory](/concepts/agents/memory/): what an agent keeps over time, compared with what you write deliberately
- [MCP](/concepts/agents/mcp/): the connection layer that skills often rely on

## The proper terms

- **Instruction file:** a text file the agent reads at the start of work
- **Skill:** a packaged, named set of instructions loaded when relevant
- **SKILL.md:** the main file of a skill, holding its description and steps
- **AGENTS.md:** an open-format instruction file read by many coding assistants
- **Progressive disclosure:** loading detail only when a task needs it
- **Load on demand:** reading a skill's full content only when a request matches it

## Next up

A skill teaches an agent how to do a job, but it still needs a way to reach the systems where the work happens. [MCP](/concepts/agents/mcp/) is the standard way of plugging those systems in.
