# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PMP-2026 is a static documentation site built with VitePress and Vue.js, serving as a comprehensive interactive study guide for the Project Management Professional (PMP) exam, updated for the 2026 Examination Content Outline (ECO).

## Build Commands

```bash
npm install              # Install dependencies
npm run dev              # Start local dev server (http://localhost:5173)
npm run build            # Build static site to .vitepress/dist
npm run preview          # Preview production build locally
npm run deploy           # Build and push to gh-pages for GitHub Pages
```

## Architecture

### Content Structure (guide/)
The study guide is organized into 11 chapters plus appendices:
- `01-introduction/` - Exam fundamentals
- `02-strategic/` - Strategic alignment (Domain 2)
- `03-team-leadership/` - People domain (Domain 1)
- `04-stakeholder/` - Stakeholder engagement
- `05-initiation/` - Project initiation
- `06-project-planning/` - Planning (Domain 3)
- `07-risk-quality/` - Risk & quality
- `08-execution/` - Execution
- `09-monitoring/` - Monitoring & closing
- `10-ai-pm/` - AI for Project Management
- `11-exam-prep/` - Practice exams
- `appendices/` - Glossary, formulas, ECO task map

### VitePress Configuration (`.vitepress/`)
- `config.js` - Site settings, sidebar navigation, plugins
- `sidebar/chapters.js` - Navigation structure
- `theme/` - Custom theme
  - `index.js` - Theme entry, registers Vue components
  - `styles/custom.css` - Custom styling (earth tone theme)
  - `components/` - Custom Vue components

### Custom Vue Components
Used within markdown files for interactivity:
- `<QuizComponent>` - Interactive quizzes with feedback and scoring
- `<FlashcardCarousel>` - One-at-a-time flashcard view with keyboard navigation
- `<FlashcardGrid>` - Grid display of flashcards
- `<ConceptGrid>` / `<ConceptCard>` - Concept layout components
- `<EVMCalculator>` - Earned Value Management calculator
- `<PowerInterestGrid>` - Stakeholder mapping visualization
- `<TriangleViz>` - Triple constraint visualization

### Data Files
- `flashcards/` - Flashcard data organized by ECO domain
- `testbank/` - Practice exam questions
- `scripts/` - Conversion utilities (convert-flashcards.js, convert-testbank-to-json.js)

## Key Conventions

- **Emojis**: Allowed on interactive cards/components, not in prose text
- **Markdown**: Content written in `.md` files with Vue components embedded
- **Component props**: Must use proper attribute quoting (e.g., `:front="'text'"` not `:front="text"`)
- **Bold text in components**: Use `<strong>` tags instead of `**bold**` inside Vue component slots

## Deployment

GitHub Pages deployment via `gh-pages` branch. Auto-deploys on push to main via `.github/workflows/deploy.yml`.
