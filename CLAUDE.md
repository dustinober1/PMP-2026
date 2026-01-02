# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a PMP Exam Prep study guide for the 2026 Examination Content Outline (ECO), built as a static documentation site using VitePress. The content is organized into 11 chapters covering People (33%), Process (41%), and Business Environment (26%) domains, plus appendices.

- **Live Site:** https://dustinober.github.io/PMP-2026/
- **Stack:** VitePress (Vue 3), Chart.js, gh-pages for deployment

## Commands

```bash
# Development
npm install              # Install dependencies
npm run dev              # Start dev server (localhost:5173)

# Build & Deploy
npm run build            # Build for production (.vitepress/dist/)
npm run preview          # Preview production build locally
npm run deploy           # Build and push to gh-pages branch
```

## Architecture

### Directory Structure

```
├── guide/                 # Main content (markdown chapters)
│   ├── 01-introduction/   # Chapter 1 (fundamentals, exam structure)
│   ├── 02-strategic/      # Business Environment domain
│   ├── 03-team-leadership/ # People domain
│   ├── 04-stakeholder/    # People domain
│   ├── 05-initiation/     # Process domain
│   ├── 06-project-planning/
│   ├── 07-risk-quality/
│   ├── 08-execution/
│   ├── 09-monitoring/
│   ├── 10-ai-pm/          # AI essentials (new for 2026)
│   ├── 11-exam-prep/      # Practice exams
│   └── appendices/        # ECO task map, formulas, artifacts
├── .vitepress/
│   ├── config.js          # VitePress site config
│   ├── sidebar/chapters.js # Navigation structure
│   └── theme/
│       ├── index.js       # Theme entry, registers global components
│       └── components/    # Custom Vue components
└── legacy/                # Archived source files (do not modify)
```

### Global Components

Registered in `.vitepress/theme/index.js` and available in any markdown file:

| Component | Purpose |
|-----------|---------|
| `QuizComponent` | Interactive knowledge checks with progress tracking (localStorage) |
| `ProgressBar` | Visual progress bars |
| `ConceptGrid` | Grid layout for concept cards |
| `ConceptCard` | Individual concept display cards |
| `PowerInterestGrid` | Stakeholder mapping visualization |
| `TriangleViz` | Triple constraint visualization |

### Content Conventions

1. **Quiz Format:** Knowledge checks use the `<QuizComponent>` with inline JSON arrays containing `text`, `options`, `correct` (index), `explanation`, and `reference` fields.

2. **Frontmatter:** Chapter index files (`guide/*/index.md`) provide overview and navigation for that chapter.

3. **VitePress Directives:** Use `::: tip`, `::: warning`, `::: danger` containers for callouts.

4. **ECO Alignment:** Content aligns to the 2026 ECO task map. See `guide/appendices/eco-2026-task-map.md` for the authoritative task breakdown.

5. **Links:** Use relative paths like `/guide/02-strategic/strategy-alignment` for internal navigation.

### Sidebar Navigation

The sidebar is defined in `.vitepress/sidebar/chapters.js`. When adding new content pages:
1. Create the markdown file under the appropriate `guide/*/` directory
2. Add the corresponding entry to the sidebar array in `chapters.js`
3. Update the chapter's `index.md` if it's a new section

### Styling

- Custom CSS variables defined in `.vitepress/theme/styles/vars.css`
- Global styles in `.vitepress/theme/styles/custom.css`
- Primary color: Purple (`#924dbf`)
- Dark mode supported via VitePress theme switching

### Deployment

The `deploy.yml` workflow pushes to the `gh-pages` branch. The site is configured with `base: '/PMP-2026/'` in `config.js` to match the GitHub Pages URL.

## Content Guidelines

- **PMP Mindset:** Emphasize the PMI-taught approach: analyze before acting, serve the team, communicate truthfully, focus on value delivery over process adherence.
- **2026 Changes:** Business Environment increased from 8% to 26%; AI and sustainability are now explicit exam topics.
- **Methodology Coverage:** Balance predictive (waterfall), agile (Scrum, Kanban), and hybrid approaches throughout.
- **Reference Sections:** Quiz questions should cite relevant sections (e.g., `reference: 'Section 1.1'`) for targeted review.
