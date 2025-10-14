---
title: Interpretable Chatbot
subtitle: 2024
images:
  - /images/projects/interpretable-chatbot/hero.svg
  - /images/projects/interpretable-chatbot/tooltip-demo.svg
  - /images/projects/interpretable-chatbot/confidence-viz.svg
technologies: ["Python", "Streamlit", "OpenAI API", "GPT-3.5", "Data Visualization"]
---

[View on GitHub](https://github.com/samuelrobson4/interpretable_chatbot)

## Overview

The Interpretable Chatbot with Confidence Tooltips is a Streamlit web app that visualizes the reasoning confidence of language models at the token level. It transforms typical chatbot interactions into transparent, interpretable experiences — revealing how sure the model is about each word it generates. Designed as both a research and design prototype, it blends interpretability, UI design, and real-time analysis to make AI more explainable.

## Key Features

- **Interactive Chat Interface**: Clean, minimalist chatbot layout for intuitive use
- **Token-Level Confidence Analysis**: Calculates and displays per-token confidence using OpenAI's logprobs output
- **Hover Tooltips**: Hover over any token to see its confidence percentage
- **Color-Coded Confidence Labels**: At-a-glance summary at the top of each response
- **Chat History**: Review past exchanges with preserved confidence visualization
- **Real-Time Analysis**: Powered by gpt-3.5-turbo-instruct for low-latency confidence evaluation

## Confidence Visualization System

- **High (≥90%)** — Strong certainty
- **Good (75–89%)** — Reliable response
- **Moderate (60–74%)** — Some uncertainty
- **Low (<60%)** — Needs review or rephrasing

## Technical Details

The app is built with Streamlit, OpenAI's Python SDK, and python-dotenv for secure API key management. Each generated token is processed with OpenAI's logprobs feature, then converted into a percentage confidence score using:

**confidence = e^(logprob) × 100**

These values are averaged to produce an overall confidence metric per message.

Performance and usability optimizations include:

- Dynamic token rendering with hover interactivity
- Stateless Streamlit session management for seamless chat history
- Configurable deployment through Streamlit Cloud, Heroku, Docker, or Railway

## Challenges & Solutions

The main challenge was creating a lightweight, interpretable UI that could visualize dense logprob data without overwhelming users. This was solved with a minimalist tooltip system and color-coded cues that communicate uncertainty intuitively.

Another challenge was aligning token segmentation between the API and display text — addressed through careful token-to-character mapping in preprocessing.

## Results

- Real-time interpretability for chatbot outputs
- Clear, color-coded confidence feedback for every token
- Framework for future research into model trust and explanation design
- Deployable across multiple platforms with minimal setup

## Why It Matters

This project bridges human-centered design and AI interpretability, making the inner workings of language models visible and understandable. It serves as a foundation for future tools that help users not only use AI but understand it — one token at a time.
