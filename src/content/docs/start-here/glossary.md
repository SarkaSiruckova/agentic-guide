---
title: Glossary
description: Every term in one line, linked to its full page.
sidebar:
  order: 3
---

One line per term, in alphabetical order. Click through for the full explanation.

- [Agent](/concepts/agents/chat-agent-workflow-automation/): a system where the model itself chooses each next step to reach a goal
- [Agent loop](/concepts/agents/the-agent-loop/): the repeating cycle of deciding, acting and observing until the goal is met
- [Automation](/concepts/agents/chat-agent-workflow-automation/): a trigger joined to a workflow, so it runs without anyone starting it
- [Chain-of-thought](/concepts/talking-to-models/prompt-engineering/): asking a model to reason step by step before it answers
- [Chat](/concepts/agents/chat-agent-workflow-automation/): a back-and-forth with a model where you decide each next step
- [Citation](/concepts/how-models-work/hallucination-and-grounding/): a pointer from a claim back to the source it came from
- [Context engineering](/concepts/talking-to-models/context-engineering/): choosing and maintaining everything a model sees in its context window
- [Context layer](/concepts/talking-to-models/context-engineering/): the sources and logic that assemble the right information for each question
- [Context window](/concepts/how-models-work/tokens-and-context-windows/): the maximum number of tokens a model can handle at once; also called context length
- [Custom instructions](/concepts/talking-to-models/system-prompts/): a user-added layer on top of a product's own system prompt
- [Few-shot prompting](/concepts/talking-to-models/prompt-engineering/): including a few examples in the prompt
- [Function calling](/concepts/agents/tool-use/): another name for tool use, common in developer documentation
- [Grounding](/concepts/how-models-work/hallucination-and-grounding/): giving a model real source material to answer from, so its answers can be checked
- [Hallucination](/concepts/how-models-work/hallucination-and-grounding/): a confident statement from a model that is false or invented
- [Inference](/concepts/how-models-work/what-an-llm-is/): using a trained model to get a reply
- [Knowledge cutoff](/concepts/how-models-work/what-an-llm-is/): the point in time where a model's training text ends
- [Large language model (LLM)](/concepts/how-models-work/what-an-llm-is/): a model trained on huge amounts of text to predict what comes next
- [Observation](/concepts/agents/the-agent-loop/): the result of an action, added to the agent's running record
- Parameters: the inputs a tool needs, such as a company name ([tool use](/concepts/agents/tool-use/)), or the internal numbers a model learns in training, also called weights ([what an LLM is](/concepts/how-models-work/what-an-llm-is/))
- [Prompt](/concepts/talking-to-models/prompt-engineering/): the text you send to a model
- [Prompt engineering](/concepts/talking-to-models/prompt-engineering/): writing prompts so a model does what you intended
- [Prompt template](/concepts/talking-to-models/prompt-engineering/): a saved prompt with blanks to fill in
- [ReAct](/concepts/agents/the-agent-loop/): short for "reason and act", the name of the agent loop pattern
- [Retrieval](/concepts/how-models-work/tokens-and-context-windows/): fetching only the relevant passages into the model's context window
- [Role](/concepts/talking-to-models/system-prompts/): the label on each message in a conversation: system, user or assistant
- [Step limit](/concepts/agents/the-agent-loop/): a cap on the number of rounds before an agent's loop is stopped
- [System prompt](/concepts/talking-to-models/system-prompts/): standing instructions set by the builder, sent before every conversation
- [Token](/concepts/how-models-work/tokens-and-context-windows/): the small piece of text a model reads and writes, roughly three-quarters of an English word
- [Tool](/concepts/agents/tool-use/): an action a model is allowed to request, such as searching a database or sending a message
- [Tool call](/concepts/agents/tool-use/): the model's structured request to use a tool
- [Tool result](/concepts/agents/tool-use/): what a tool sends back, added to the conversation as text
- [Tool use](/concepts/agents/tool-use/): the way a model requests actions and the software around it carries them out
- [Training](/concepts/how-models-work/what-an-llm-is/): adjusting a model's internal numbers by showing it large amounts of text
- [Trigger](/concepts/agents/chat-agent-workflow-automation/): an event, such as a new email arriving, that starts something automatically
- [User prompt](/concepts/talking-to-models/system-prompts/): the message a person types in the conversation
- [Workflow](/concepts/agents/chat-agent-workflow-automation/): a fixed list of steps that runs the same way every time
- [Zero-shot prompting](/concepts/talking-to-models/prompt-engineering/): asking a model with no examples in the prompt
