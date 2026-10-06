---
title: The map
description: How every piece of AI infrastructure fits together.
tags: [infrastructure]
lastReviewed: 2026-10-06
snapshot: false
sidebar:
  order: 0
  label: Map overview
published: 2026-10-02
---

Electives start here. Whether you have just finished the seven parts of the guide or arrived from a search, this is the road network: the kinds of infrastructure that exist, what each one does, and how they connect to make an agent work. If a word is new, the [glossary](/reference/glossary/) helps.

Think of it as a stack. A person talks to an interface. Behind it, software runs an agent, which asks a model for decisions and uses connectors to reach your systems. Everything sits on rented computers, and every step needs a safe way to prove who is allowed to do what.

```mermaid
flowchart TD
  P["Person"] --> I["Interfaces"]
  I --> A["Agent frameworks"]
  A --> M["Model access platforms"]
  M --> C["Compute and cloud"]
  M --> O["Open-model hosting"]
  O --> C
  A --> K["Connectors and integrations"]
  K --> D["Databases and storage"]
  A --> S["Specialised models"]
  A --> W["App hosting"]
  W --> C
  A --> V["Observability and evals"]
  X["Auth and secrets"] -.-> I
  X -.-> K
  X -.-> M
```

Solid arrows show who calls whom. Dotted lines show the sign-in and key handling that every call depends on.

## The layers

| Layer | The question it answers |
| --- | --- |
| [Compute and cloud](/map/compute-and-cloud/) | Whose computers run all of this, and where? |
| [Model access platforms](/map/model-access-platforms/) | How does a program reach a model? |
| [Open-model hosting](/map/open-model-hosting/) | If the model is open, who runs it? |
| [Specialised models](/map/specialised-models/) | Which small models handle the narrow jobs around the main one? |
| [App hosting](/map/app-hosting/) | Where does your own code live and run? |
| [Databases and storage](/map/databases-and-storage/) | Where does the data sit? |
| [Connectors and integrations](/map/connectors-and-integrations/) | How does the agent reach your other systems? |
| [Agent frameworks](/map/agent-frameworks/) | What runs the loop so you do not write it yourself? |
| [Auth and secrets](/map/auth-and-secrets/) | Who is allowed in, and where are the keys kept? |
| [Observability and evals](/map/observability-and-evals/) | How do you see what happened and test it? |
| [Interfaces](/map/interfaces/) | How does a person reach the agent? |

Every layer page has a short, dated list of example providers. Those lists change quickly, so treat them as examples of a category and not as a shortlist.

## Putting it together

[One question through every layer](/map/one-question-through-every-layer/) traces a single request across all of these, and ends with the smallest honest version to build first.

## Next up

The map starts at the bottom of the stack. [Compute and cloud](/map/compute-and-cloud/) covers the chips and data centres everything else runs on.
