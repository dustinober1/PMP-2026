# GEMINI Context: PMP Exam Prep 2026

This repository contains a comprehensive, interactive study guide for the Project Management Professional (PMP)® exam, specifically updated for the **July 2026 Examination Content Outline (ECO)** and **PMBOK 8 Principles**.

**Current Version:** 1.22.0
**Live Site:** [https://dustinober.github.io/PMP-2026/](https://dustinober.github.io/PMP-2026/)

## Project Overview

The project is a static documentation site built using **VitePress** (powered by Vue 3). It serves as an educational resource covering the three PMP domains: People (33%), Process (41%), and Business Environment (26%).

- **Architecture:** Static Site Generation (SSG).
- **Core Stack:** VitePress, Vue.js, Chart.js, Vue-ChartJS.
- **Deployment:** GitHub Pages via `gh-pages` and GitHub Actions.

## Directory Structure

- `guide/`: **The Source of Truth.** Contains 11 chapters of markdown content aligned with the 2026 ECO.
- `legacy/`: Archive of older content and draft files. Do not modify these for 2026 updates.
- `testbank/`: Collection of practice questions, task-specific exams, and "Hard-Mode" variants.
- `.vitepress/`: Site configuration, custom Vue components (quizzes, charts), and theme logic.
- `scripts/`: Utility scripts (e.g., flashcard conversion).
- `.github/`: AI automation workflows (Gemini) and command configurations.

## Development Workflows

### Setup & Execution
```bash
# Initial Setup
npm install

# Local Development (with Hot Reload)
npm run dev

# Build Production Site
npm run build

# Preview Build Locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### Content Conventions
1. **PMP Mindset:** All content must reflect the "PMI Mindset"—analyze before acting, serve the team (servant leadership), communicate truthfully, and prioritize value over process.
2. **Methodology Balance:** Maintain a mix of Predictive (~40%), Agile (~60% split with Hybrid), and Hybrid methodologies.
3. **Interactive Quizzes:** Use the `<QuizComponent>` with inline JSON for knowledge checks.
4. **Visualizations:** Use global components like `PowerInterestGrid`, `TriangleViz`, and `ProgressBar` to enhance learning.
5. **Referencing:** All practice questions should include a `reference` field pointing to specific guide sections.

### AI Integration
This project is optimized for AI-assisted development.
- **Gemini Workflows:** GitHub Actions (`.github/workflows/gemini-*`) use Gemini for issue triage, PR reviews, and repository maintenance.
- **Instructional Context:** Refer to `CLAUDE.md` for specific guidance on coding patterns and content structure.

## Core Mandates
- **2026 Alignment:** Ensure all exam metrics reflect the 2026 specs: **185 questions, 240 minutes, two 5-minute breaks**.
- **Cross-Links:** Maintain relative markdown links for internal navigation (e.g., `[Link](/guide/chapter/page)`).
- **Styling:** Adhere to the purple brand color (`#924dbf`) and responsive design principles.
- **Commitment:** Always commit and push after each task and subtask completion.
