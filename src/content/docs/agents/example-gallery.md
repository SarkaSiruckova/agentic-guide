---
title: Example gallery
description: Six everyday AI setups, from a simple chat to a scheduled agent, with the pieces each one uses and where a person stays in charge.
tags: [agents, automation]
published: 2026-10-06
lastReviewed: 2026-10-06
snapshot: false
sidebar:
  order: 13
---

Tools, connectors, skills, memory, approvals and [subagents](/agents/subagents-and-multi-agent-systems/) are easier to understand once you see them put together. This page shows six small, realistic setups, so you can spot one close to your own needs and see which pieces it takes.

**In one line:** most useful AI setups are a few familiar pieces joined together, and the label (chat, workflow, automation or agent) depends on who decides the next step.

## Why it matters

Reading about parts one at a time can leave you unsure where to start. Seeing whole setups shows which pieces tend to go together, how much effort each takes, and where a person still needs to look before anything happens.

The labels follow the [chat vs agent vs workflow vs automation](/start/chat-agent-workflow-automation/) page: in a **chat** you decide each step, in a **workflow** a fixed list decides, an **automation** is a workflow started by a trigger, and in an **agent** the model decides.

| Setup | Who | Label | Main pieces | Effort to set up |
| --- | --- | --- | --- | --- |
| Inbox triage | Bramley's | Chat | Claude app, email connector | Easy |
| Meeting prep brief | Sample Ventures | Workflow | Project, CRM connector, skill | Medium |
| Weekly pipeline report | Sample Ventures | Automation | n8n, CRM, a model step | Medium to hard |
| Research agent | Jo | Agent | Claude app with web search, Project | Easy |
| Order follow-up | Bramley's | Automation with a model step | n8n, online shop, email | Medium to hard |
| Reading tracker | Jo | Agent on a schedule | Cowork, scheduled task, local folder | Medium |

All six businesses and people are fictional.

## The six setups

### 1. Inbox triage for Bramley's

Sam, who runs Bramley's bakery, gets a mix of customer questions, supplier invoices and wholesale enquiries. Each morning Sam opens the [Claude app](/using-ai/claude-apps/), with an email [connector](/agents/connectors-in-claude/) switched on, and asks: "What came in overnight, and what needs a reply today?" Claude reads the inbox, sorts the messages and drafts replies to the simple ones.

- **Label:** chat. Claude uses a tool to read the mail, but Sam decides every next step.
- **Pieces:** Claude app, email connector, read access to one inbox.
- **Person in the loop:** Sam reads each draft and sends it from the mail app. Nothing goes out on its own.
- **Effort:** easy. Connect the inbox and start asking.

### 2. Meeting prep brief for Sample Ventures

Before every first meeting with a founder, an associate at Sample Ventures wants a one-page brief: who they are, what the company does, any past contact. They keep a [Project](/using-ai/projects-and-memory/) with the fund's investment notes, connect the CRM, and write a [skill](/agents/skills-in-claude/) that lists the steps: check the calendar entry, look up the company in the CRM, read past notes, write the brief in the house format.

- **Label:** workflow, run by hand. The skill fixes the steps and the order; the model fills them in.
- **Pieces:** Claude app, Project, CRM and calendar connectors (see [MCP](/agents/mcp/)), one skill.
- **Person in the loop:** the associate reads the brief before the meeting and corrects anything wrong. It is read-only, so nothing in the CRM changes.
- **Effort:** medium. Writing a good skill takes a few rounds of trying it on real meetings.

### 3. Weekly pipeline report for Sample Ventures

Every Monday at 8am, the partners want a short summary of new deals, deals that moved stage and anything stuck. An automation tool such as [n8n](/building/n8n/) runs on a [schedule](/building/triggers-and-scheduling/), pulls last week's changes from the CRM, sends them to a model to write the summary, and posts it in the team channel.

- **Label:** automation. The trigger is the clock, and the steps are fixed.
- **Pieces:** n8n (or a similar [orchestration tool](/building/orchestration-tools/)), a CRM API key with read-only access, a model call, a chat tool.
- **Person in the loop:** the summary only goes to the team channel, and a partner reads it there. Anything for outside investors is written by a person.
- **Effort:** medium to hard. Connecting the CRM and checking the numbers match takes a technical afternoon or two.

### 4. Research agent for Jo

Jo, a freelance researcher, gets questions such as "what are the main rules on selling baked goods online in the UK?". She keeps a Project per client with the brief and her notes, and asks Claude with web search switched on. Claude decides what to search, reads the results, searches again where something is unclear, and writes a summary with links.

- **Label:** agent, inside a chat window. Jo sets the goal, and the model chooses each search.
- **Pieces:** Claude app, web search, a Project per client.
- **Person in the loop:** Jo opens and checks every source before anything reaches a client, because a model can still get facts wrong (see [hallucination and grounding](/start/hallucination-and-grounding/)).
- **Effort:** easy. The care goes into checking, not setting up.

### 5. Order follow-up for Bramley's

When an online order arrives, Bramley's wants the customer to get a confirmation with the collection time, and any special requests ("nut-free?", "can you write a name on it?") answered properly. An n8n automation starts on each new order. Plain orders get a standard template email with no AI involved. Orders with a note go to a model, which drafts a reply.

- **Label:** automation with a model step. The model writes one part, but the route is fixed in advance.
- **Pieces:** online shop, n8n, a model call, email.
- **Person in the loop:** every AI-drafted reply waits for Sam to approve it on the phone before it sends. Allergy questions are always answered by Sam. See [human-in-the-loop](/agents/human-in-the-loop/).
- **Effort:** medium to hard. The shop, the automation tool and the email account all need connecting.

### 6. Reading tracker for Jo

Jo is also taking a part-time course. She keeps the reading list, her notes and the course handbook in one folder on her computer. A [scheduled task](/building/triggers-and-scheduling/) in Cowork (Claude's desktop agent) runs every Sunday evening: it looks through the folder, updates a reading tracker spreadsheet, and writes a short "this week" note with what is due.

- **Label:** agent on a schedule. The clock starts it, and the model decides what to read and update.
- **Pieces:** Claude desktop app with Cowork, a scheduled task, access to one folder.
- **Person in the loop:** Jo reads the weekly note. The task can only touch that one folder, and it has no way to send anything out.
- **Effort:** medium. Getting the instructions right takes a couple of weeks of tweaks.

## How to pick your first

Start with the setup closest to a task you already do by hand every week. Chats and Projects are the gentlest start, because nothing happens without you.

Move to a workflow or automation when the steps are the same every time. Reach for an agent only when each case really is different. In every case, start read-only, and add sending or editing later, behind an approval (see [safety basics](/agents/safety-basics/)).

<mark>A good first setup is small, read-only, and saves you the same chore every week.</mark>

## Costs and limits

Chats and Projects cost only your subscription and your time. Automations add an automation tool and per-use model charges, which grow with how often they run. Agents vary most from run to run, because they choose how many steps to take.

Claude features change often. Scheduled tasks in Cowork are described on Anthropic's help pages as a feature of paid plans and still rolling out, as of October 2026, so check the current help page before relying on one.

For the bigger picture of how these pieces sit together, follow a single request through every part in [one question through every layer](/map/one-question-through-every-layer/).

## Related

- [Chat vs agent vs workflow vs automation](/start/chat-agent-workflow-automation/): the labels used on this page
- [Connectors in Claude](/agents/connectors-in-claude/): linking your accounts
- [Skills in Claude](/agents/skills-in-claude/): saving a set of steps Claude can reuse
- [Triggers and scheduling](/building/triggers-and-scheduling/): starting work without pressing a button
- [Safety basics](/agents/safety-basics/): what to check before connecting anything

## The proper terms

- **Connector:** a link that lets Claude read from or act in another app
- **Scheduled task:** a saved instruction that runs on a timetable without you starting it
- **Model step:** one step in a workflow where a model does the work, such as writing a reply
- **Read-only access:** permission to look at data but not change or send it

## Next up

The setups above use apps and automation tools you configure by clicking. Part 4 opens the garage: [Claude Code and the API](/building/claude-code-and-the-api/) shows the ways to build your own.
