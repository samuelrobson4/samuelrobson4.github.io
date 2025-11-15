---
title: conversational metadata extraction — a lightweight interface for structured symptom logging
subtitle: 2023
images:
  - /assets/images/projects/intelligent-symptom-tracker/hero.svg
  - /assets/images/projects/intelligent-symptom-tracker/dashboard.svg
  - /assets/images/projects/intelligent-symptom-tracker/results.svg
technologies: ["Product Analytics", "AI", "User Research", "Cross-functional Leadership"]
---

## PROJECT IN PROGRESS

## inspiration
Most symptom trackers assume people will fill out structured forms in moments when they feel unwell. That assumption breaks down instantly in practice. The friction of choosing categories, navigating vocabularies, and describing symptoms in rigid formats leads to low adherence and low-quality metadata — the exact opposite of what clinicians need.

This project explores whether **conversational interfaces** can resolve this tension by extracting structured metadata from natural dialogue, turning symptom logging into something someone might actually use daily. While the prototype focuses on health (a domain I understand well), the underlying challenge — *capturing structured data from everyday language* — applies broadly to any user-generated metadata system.

## what i built
I designed and implemented a **client-side React app** that uses a conversational interface to collect structured metadata from free-form symptom descriptions. The system combines controlled vocabularies, schema design, and LLM-based extraction to keep the interaction lightweight while preserving metadata quality.

Key pieces include:
- A conversational UI that parses user text and proposes structured fields (location, duration, severity, etc.)
- Controlled vocabularies adapted from medical frameworks but expressed in accessible, non-expert language
- A two-tier questioning model (primary + conditionally triggered secondary questions)
- Local, privacy-preserving storage using `localStorage`
- A chronological table view that displays structured entries for review

The goal wasn’t to build a diagnosis tool — it was to prototype how **LLM-driven interfaces can capture structured data without exposing users to the underlying schema**.

## challenges & solutions
- **Designing a metadata schema users can actually complete**  
  Created a minimal core schema (symptom, location, duration, severity, timestamp) based on clinical relevance and user burden, refined through iterative testing.

- **Adapting controlled vocabularies for non-experts**  
  Translated clinical concepts (e.g., NRS scales, acute/chronic duration distinctions) into simple, predictable categories (“hours,” “days,” “ongoing”).

- **Balancing automation with accuracy**  
  Implemented an interactive validation step: the model proposes classifications, the user confirms or corrects them, reducing both form fatigue and misclassification risk.

## technical approach
- **Frontend:** React  
- **Model:** Claude API for extraction + follow-up generation  
- **Storage:** Client-side `localStorage` only  
- **Deployment:** Vercel  

## user flow
- User enters free text  
- LLM extracts metadata using controlled vocabularies  
- System checks completeness and asks natural follow-ups  
- Secondary questions trigger conditionally  
- Structured JSON entry is saved locally  
- Displayed in an ordered table view

The architecture is lightweight by design: fast to iterate on, private by default, and easy to extend into more advanced faceted browsing tools later.

## outcome / lessons learned
The prototype shows that conversational metadata extraction can meaningfully reduce friction while improving data structure — not by replacing users with automation, but by **hiding complexity behind natural dialogue**.

More broadly, the project clarified something about interface design for modern AI systems: good metadata isn't just a modeling problem; it’s a UX problem. The right interface can make structured data capture feel effortless, even in domains where the stakes and complexity are high.

This work forms a foundation for future experiments in conversational tagging, schema-guided dialogue, and real-time classification validation across domains beyond health.