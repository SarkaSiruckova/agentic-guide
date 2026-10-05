---
title: Human-in-the-loop
description: Placing a person at chosen points in an agent's work so that risky actions need approval.
tags: [agents, security]
lastReviewed: 2026-10-02
snapshot: false
published: 2026-10-02
---

An agent with tools, memory and helpers can act largely on its own. That is the point, and also the reason some of its actions should wait for a person's approval.

**In one line:** human-in-the-loop means a person is built into an agent's process at chosen points, to approve an action, review a result or step in when the agent is unsure.

## Why it matters

An agent makes its own decisions about what to do next, and it will sometimes get them wrong. It might misread a request, pick the wrong record or act on a bad instruction hidden in a document. Most of the time that is a minor irritation. For some actions it is a real problem.

You cannot un-send an email to an investor. You cannot easily undo a message to a founder, a payment or a deleted record. The point of a checkpoint is to put a person in front of those actions, at the moment they can still be stopped.

It is also how you can trust an agent with more over time. Starting with approvals and relaxing them as you see how it behaves is far safer than starting with none.

<mark>Let the agent do the reading and drafting freely, and put a person in front of anything that cannot be undone.</mark>

## How it works

Think of a junior colleague who can research and prepare anything, but who needs a signature before a letter goes out. They are not slowed down on the preparation. The signature only applies where it counts.

Setting this up means answering two questions: where do the checkpoints go, and how much oversight at each one?

**Where to put checkpoints.** The usual candidates are:

- **Irreversible actions.** Deleting, overwriting, anything with no undo.
- **Anything leaving the building.** Emails, messages to investors or founders, posts, shared documents.
- **Spending money.** Payments, purchases, paid services.
- **Writing to important records.** Changes to the CRM or other systems of record that others rely on.

These line up with the difference between read and write [tools](/concepts/agents/tool-use/). Reading is low risk, so it can usually run freely. Writing changes something, so it is where checkpoints belong.

**How much oversight.** There is a scale:

- **Approve every step.** Nothing runs without a person saying yes. Safest, slowest, and tiring.
- **Approve risky steps only.** Low-risk actions run on their own; risky ones stop and ask. This is the usual middle ground.
- **Review afterwards.** The agent acts, and a person checks a log or sample later. Only suitable where mistakes are cheap and reversible.

A related option is letting the agent ask for help when it is unsure, for example when it finds two records that might both be the right company.

```mermaid
flowchart TD
  P[Agent proposes an action] --> R{Risk check}
  R -->|Low risk, allowed| X[Runs automatically]
  R -->|Risky or unclear| H[Asks a person]
  H -->|Approves| X
  H -->|Edits| X
  H -->|Rejects| N[Does not run]
  X --> L[Log the decision and result]
  N --> L
  L --> B[Back to the agent loop]
```

The risk check is a set of rules written in advance, for example "any tool that sends a message needs approval". It is better for the rule to sit in the surrounding software than in the model's instructions, because a model can be talked out of an instruction but not out of a rule it cannot see.

## In practice

Most agent products and frameworks let you mark certain tools as "ask first". The agent's [loop](/concepts/agents/the-agent-loop/) pauses at that point, shows the proposed action, and carries on once the person responds. Approvals can come through a chat window, an email, or a message in a team chat tool.

Good approvals share some features:

- **Show exactly what will happen.** Not "send email?" but the recipients, subject and full text, exactly as they will be sent.
- **Make approving easy, but not automatic.** One click is fine. A default that approves after a few seconds, or a wall of text that nobody reads, is not.
- **Allow editing.** The person should be able to fix a sentence, not just accept or reject.
- **Log every decision.** Record what was proposed, who decided, when and what happened. See [observability](/concepts/agents/observability/).

Checkpoints work alongside [permissions and access control](/concepts/data/permissions-and-access-control/). Permissions limit what the agent can touch at all. Approvals add a person's judgement for what it is allowed to touch. You want both.

## Worked example

Sample Ventures, the fictional fund, uses an agent to draft a quarterly update email to its investors. The agent has four tools: read the CRM, read the shared files, create a draft in the mail system, and send an email.

- **Reading is free.** The agent pulls portfolio updates from the CRM and the latest numbers from a spreadsheet in the shared files, including a note that Acme Payments, a seed-stage payments startup, closed a funding round.
- **Drafting is free.** It writes the email and saves it as a draft. A draft reaches no one.
- **Sending is gated.** The send tool is marked "ask first". The agent stops and posts a message to the partner: the full email text, the recipient list (all 40 investors), and the attachments.
- **The person reads.** The partner notices the draft calls the Acme Payments round "closed" when the term sheet is still being finalised. She edits one sentence and approves.
- **It sends and logs.** The email goes out. The log records the original draft, the edit, who approved and the time.

If the agent had misread the numbers, the checkpoint would have caught it before 40 people saw it.

Notice the permission side as well. The agent has no tool to send from any account other than the fund's investor-updates address, and it cannot edit CRM records at all.

## Costs and limits

- **Approvals slow things down.** Each checkpoint adds waiting time, and the agent is stuck until someone answers.
- **Rubber-stamping.** If a person is asked to approve dozens of things a day, they stop reading and click yes. At that point the checkpoint gives false comfort. Fewer, better-placed approvals beat many.
- **Poor previews.** If the person cannot see what will actually happen, they are approving blind.
- **Approving the wrong level.** Approving a plan ("send the update") is not the same as approving the content ("this exact email"). Make sure the person sees the real thing.
- **The agent can still be wrong before the checkpoint.** A person can only catch what they notice, and subtle errors in a long draft slip through.

Common mistakes are putting checkpoints on everything, so people tune out, and on nothing, because it seemed fine in testing. Start with approval on every write action, watch how the agent behaves, and relax only where mistakes are cheap and undoable.

## Often confused with

**Human-in-the-loop vs a workflow with a manual step.** In a workflow, a person's step is fixed in advance: "after step three, someone reviews". With human-in-the-loop, the agent works out what it wants to do, and the checkpoint applies to whatever it proposes, so it can differ every time.

## Related

- [Tool use](/concepts/agents/tool-use/): read tools versus write tools, and why write tools need checkpoints
- [Permissions and access control](/concepts/data/permissions-and-access-control/): limits what the agent can reach, before any approval is needed
- [The agent loop](/concepts/agents/the-agent-loop/): where the pause happens, and how the loop carries on afterwards
- [Prompt injection](/concepts/security/prompt-injection/): why approvals on risky actions matter
- [Audit trails](/concepts/security/audit-trails/): the lasting record of approvals given and refused

## The proper terms

- **Approval gate:** a point where the agent must wait for a person's yes
- **Audit log:** a record of what was proposed, who decided and what happened
- **Human-in-the-loop:** a person is built into the agent's process at chosen points
- **Review afterwards:** letting the agent act, then checking a log or sample later
- **Rubber-stamping:** approving without reading, usually because there are too many requests

## Next up

Every part of this chapter, from tools and memory to skills and subagents, ends up as text in the model's window. [Context engineering](/concepts/talking-to-models/context-engineering/) pulls them together: deciding what the model actually sees at each step.
