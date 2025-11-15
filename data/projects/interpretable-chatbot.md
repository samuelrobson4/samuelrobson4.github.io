---
title: interpretable chatbot — a transparent interface for token-level model confidence
subtitle: 2024
images:
  - /assets/images/projects/interpretable-chatbot/interpretablechatbot.png
  - /assets/images/projects/interpretable-chatbot/interpretablechatbot2.png
technologies: ["Python", "Streamlit", "OpenAI API", "GPT-3.5", "Data Visualization"]
---

[view on gitgub](https://github.com/samuelrobson4/interpretable_chatbot)

## inspiration
As language models get more capable, the interface hasn’t caught up. Most chatbots still feel like black boxes: you get an answer, but not the reasoning behind it or how certain the model is. I wanted to explore what a more transparent interaction could look like — something that helps users read AI output with the same nuance they bring to human conversation. This prototype grew out of that question: *what would a clearer, more interpretable chatbot UI feel like?*

## what i built
I designed and built a **Streamlit-based chatbot interface** that exposes the model’s token-level confidence in real time. The tool highlights how sure the model is about each word, blending interpretability techniques with a minimalist UI.  

key pieces include:
- A clean, distraction-free chat interface  
- Color-coded confidence bands at the top of each response  
- Token-level hover tooltips generated from logprobs  
- A stable chat history with preserved visualizations  
- A real-time analysis loop powered by OpenAI’s logprob API

The goal wasn’t to create another chatbot — it was to prototype what **interfaces for explainable AI** might look like as the underlying models get more complex.

## challenges & solutions
- **Making dense logprob data understandable**  
  Designed a lightweight visualization system (color bands + subtle tooltips) so users can scan uncertainty without being overloaded.

- **Accurate alignment between tokens and rendered text**  
  Solved via a custom token-to-character mapping step that preserves fidelity across different tokenization boundaries.

- **Balancing transparency with readability**  
  Iterated on UI treatments until the interpretability layer supported the conversation without visually dominating it.

## outcome / lessons learned
The result is a simple, expressive interface that makes a model’s confidence visible at a glance. It reinforced a broader insight: interpretability isn’t just a technical problem — it’s a **design problem**, and thoughtful UI can make model behavior feel intuitive without requiring users to understand logprobs.

This prototype now acts as a foundation for future experiments, including attention overlays, uncertainty summaries, and comparative model views — all aimed at shaping the next generation of transparent AI interfaces.