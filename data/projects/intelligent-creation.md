---
title: Point and Create Assistant
subtitle: 2024
images:
  - /images/projects/point-and-create/hero.svg
  - /images/projects/point-and-create/gesture-detection.svg
  - /images/projects/point-and-create/interface.svg
technologies: ["Python", "Streamlit", "OpenCV", "MediaPipe", "GPT-4o", "OpenAI API"]
---

[View on GitHub](https://github.com/samuelrobson4/creative_assistant)

## Overview

Point and Create Assistant is an interactive Streamlit prototype that lets users point at regions in a live camera feed and receive intelligent, multimodal responses from GPT-4o based on what they're gesturing toward. It's a lightweight, spatially grounded experiment that merges gesture tracking, computer vision, and LLM interpretability — designed to explore the future of AI co-pilots for physical tasks.

## Key Features

- **Gesture Recognition**: Detects hand position and pointing direction using MediaPipe
- **Region Cropping**: Dynamically isolates the area being pointed to in the webcam feed
- **Multimodal Understanding**: Sends both the cropped region and a text prompt to GPT-4o for context-aware responses
- **Interactive Output**: Displays live model responses grounded in what the user physically points to
- **Streamlit Interface**: Clean, browser-based UI for easy experimentation with live video and model output

## Technical Details

The prototype is built entirely in Python with Streamlit for the interface, OpenCV for image capture and processing, MediaPipe for real-time gesture detection, and the OpenAI API for multimodal inference. Environment variables are handled securely with python-dotenv.

Performance and usability are supported through:

- Efficient frame handling to prevent camera lag
- Lightweight modular design for rapid iteration
- Simple environment setup for local experimentation

## Challenges & Solutions

A key challenge was ensuring reliable pointing detection across varying lighting conditions and hand orientations. This was addressed through adaptive thresholding in MediaPipe and bounding box smoothing to stabilize crops.

Another challenge was maintaining latency low enough for interactive use — optimized by processing frames only on gesture events rather than continuously.

## Results

- Real-time pointing and object focus detection with smooth tracking
- Seamless integration of vision and language models
- A sandbox for studying spatial grounding and interpretability
- Local prototype ready for extension to voice, attention overlays, or deployment on Streamlit Cloud

## Why It Matters

Point and Create Assistant explores how AI systems can become physically grounded collaborators, capable of reasoning about the real world through human gestures. It serves as a foundation for tangible AI interfaces — the kind that could power future home assistants, repair guides, or recipe helpers that understand what you're referring to.
