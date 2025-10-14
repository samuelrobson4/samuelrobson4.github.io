---
title: Spotipod
subtitle: 2024
images:
  - /images/projects/spotipod/hero.svg
  - /images/projects/spotipod/interface.svg
  - /images/projects/spotipod/mobile.svg
technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Spotify API", "Google Sheets API", "Vercel"]
---

[View on GitHub](https://github.com/samuelrobson4/spotipod) | [Live Demo](https://spotipod-zeta.vercel.app/)

## Overview

Spotipod is a mobile-first Spotify controller app designed to reimagine music browsing through a tactile, disc-inspired interface. The app turns playlist navigation into a physical, visual experience — like spinning a digital CD — while maintaining a seamless connection to your actual Spotify library.

## Key Features

- **CD-Style Interface**: A circular, touch-friendly design that lets users "spin" through playlists and tracks like flipping through a record collection
- **Mobile-First Design**: Optimized for touch interactions and smooth animations on phones and tablets
- **Google Sheets Backend**: Uses a connected Google Sheet as a simple, transparent database for playlists and track metadata
- **Real-Time Spotify Control**: Directly plays, pauses, and skips tracks via the Spotify Web API
- **One-Tap Deployment**: Fully hosted on Vercel with continuous deployment for rapid iteration

## Technical Details

Spotipod integrates Next.js, Tailwind CSS, and Framer Motion for a responsive and fluid UI. The app uses Google Sheets API as a lightweight CMS, fetching track data dynamically, and Spotify Web API for real-time playback control.

Performance and usability are enhanced through:

- Efficient client-side caching with SWR
- Optimized bundle size and lazy-loaded components
- Smooth motion design with GPU-accelerated animations

## Challenges & Solutions

The main challenge was achieving a natural-feeling "spin" mechanic that worked seamlessly across touch devices. This was solved using Framer Motion's gesture controls and velocity tracking to mimic real-world inertia.

Another hurdle was synchronizing Google Sheets data with live Spotify playback — handled through debounced API calls and structured data validation.

## Results

- Tangible, disc-based playlist navigation with intuitive touch controls
- Smooth touch gestures and animations optimized for mobile devices
- Simple creator workflow via Google Sheets for non-technical users
- Instant, mobile-ready deployment on Vercel with continuous integration
