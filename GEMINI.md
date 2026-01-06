# PMP Exam Prep 2026 - GEMINI.md

## Project Overview
This project is a comprehensive, interactive study guide for the Project Management Professional (PMP)® exam, updated for the 2026 Examination Content Outline (ECO). It is a static documentation site built with **VitePress** and **Vue.js**.

## Key Technologies
- **VitePress**: Static site generator used for the documentation framework.
- **Vue.js**: Used for interactive components (quizzes, charts).
- **Node.js**: Runtime environment.
- **GitHub Pages**: Deployment target.

## Building and Running
The following NPM scripts are available in `package.json`:

- **Start Development Server:**
  ```bash
  npm run dev
  ```
  Runs the local development server (usually at `http://localhost:5173`).

- **Build for Production:**
  ```bash
  npm run build
  ```
  Builds the static site to `.vitepress/dist`.

- **Preview Production Build:**
  ```bash
  npm run preview
  ```
  Locally previews the built static site.

- **Deploy:**
  ```bash
  npm run deploy
  ```
  Builds the site and pushes the `.vitepress/dist` folder to the `gh-pages` branch.

## Project Structure
- **`guide/`**: Contains the main markdown content for the study guide, organized by chapter (e.g., `01-introduction`, `02-strategic`).
- **`.vitepress/`**: Contains VitePress configuration (`config.js`) and theme customization (`theme/`).
  - `config.js`: Site settings, sidebar navigation, and plugin configuration.
  - `theme/`: Custom Vue layout, styles, and components.
- **`testbank/`**: Contains practice exam questions in markdown or JSON format.
- **`flashcards/`**: Contains all flashcard files organized by ECO domain and task (People, Process, Business Environment).
- **`scripts/`**: Utility scripts (e.g., converting flashcards/testbanks to JSON).
- **`guide/appendices/`**: Supplementary material like glossary, formulas, ECO task map, and PMBOK process map.

## Development Conventions
- **Content:** Written in Markdown (`.md`).
- **Interactivity:** Custom Vue components are used within markdown files for things like quizzes and charts.
- **Navigation:** Sidebar and navigation structure are defined in `.vitepress/config.js` or separate files in `.vitepress/sidebar/`.
- **Assets:** Static assets should be placed in `.vitepress/public` (if it exists) or relative to the markdown files if they are specific to a page.

## Deployment
The site is deployed to GitHub Pages. The `deploy.yml` workflow in `.github/workflows/` handles automated deployment on push, or it can be triggered manually via `npm run deploy`.

## Recent Changes
- **2026-01-06**: Expanded flashcards in all 7 Chapter 6 (Project Planning) content pages to ensure at least 10 flashcards per page, covering scope (WBS, RTM, MoSCoW), schedule (CPM, PERT, dependencies), cost (EVM, reserves), quality (7 tools, CoQ), resources (RACI, contracts), risk (EMV, responses), and communications (channels, methods).
- **2026-01-06**: Expanded flashcards in all 3 Chapter 7 (Risk, Quality and Complexity) content pages to ensure at least 10 flashcards per page, covering quality tools (DMAIC, Kano, DoD), complexity (Cynefin, ADKAR, systems thinking), and risk management (EMV, Monte Carlo, RBS).
- **2026-01-06**: Expanded flashcards in all 6 Chapter 4 (Stakeholder and Communication) content pages to ensure at least 10 flashcards per page, covering key exam concepts like Power/Interest Grid, Salience Model, communication methods, negotiation (BATNA/ZOPA), and engagement strategies.
- **2026-01-06**: Removed checkbox markdown syntax (`[ ]`) from 12 guide files to clean up the content presentation, converting checklist items to standard bullet points and clearing table cells.
- **2026-01-06**: Expanded flashcards in all 8 Chapter 3 (Team Leadership) content pages to ensure at least 10 flashcards per page, covering key exam concepts like Tuckman stages, SLII leadership, motivation theories, conflict resolution (TKI), RACI, team charter, and virtual collaboration.
- **2026-01-06**: Expanded flashcards in all 12 Chapter 2 (Strategic) content pages to ensure at least 10 flashcards per page, covering key exam concepts like PESTLE, ADKAR, PMO types, portfolio governance, program management, benefits realization, compliance, governance, and sustainability.
- **2026-01-06**: Converted markdown bold labels (`**Label:**`) to HTML `<strong>` tags across all 26 testbank files and guide folder files for cleaner rendering without visible markdown syntax inside Vue component slots.
- **2026-01-06**: Removed "Take Practice Exams" step from homepage "How to Use This Guide" section since practice exams are not ready for launch.
- **2026-01-06**: Enhanced homepage by removing "Practice Exams" link (not ready for launch), adding emojis/icons to feature cards and "What's New in 2026" section, and improving card styling with better hover effects and visual distinction.
- **2026-01-06**: Converted all 53 flashcard sections site-wide from `FlashcardGrid` to `FlashcardCarousel` format, providing a consistent one-at-a-time learning experience with navigation controls across all study guide pages.
- **2026-01-06**: Created new `FlashcardCarousel.vue` component that displays flashcards one at a time with navigation controls (Previous/Next buttons), progress indicator, keyboard navigation support (arrow keys), and smooth transitions. Updated `compliance-governance.md` to demonstrate the new carousel functionality. Both `FlashcardGrid` (grid view) and `FlashcardCarousel` (one-at-a-time view) are now available for use throughout the site.
- **2026-01-06**: Removed `legacy/` folder containing archived source material and migration scripts, as all content has been successfully migrated to the current VitePress structure.
- **2026-01-06**: Reorganized flashcard files by moving all 28 flashcard files (26 markdown files and 2 JSON files) from `guide/appendices/` to a new dedicated `flashcards/` folder at the project root for better organization.
- **2026-01-06**: Completed comprehensive reformatting of all Chapter 7 (Risk, Quality and Complexity) pages, including 6 markdown files. Replaced legacy grids with interactive `ConceptGrid`, `ConceptCard`, `FlashcardGrid`, and updated the knowledge check with the `QuizComponent`. Verified successful build.
- **2026-01-06**: Completed comprehensive reformatting of all Chapter 6 (Project Planning) pages, including 9 markdown files. Replaced legacy grids with interactive `ConceptGrid`, `ConceptCard`, `FlashcardGrid`, and added an `EVMCalculator` to the cost planning section. Verified successful build.
- **2026-01-06**: Completed a comprehensive reformatting of all Chapter 5 (Project Initiation) pages, replacing legacy hardcoded HTML/CSS grids with standardized interactive Vue components (`ConceptGrid`, `ConceptCard`, `FlashcardGrid`, `Flashcard`).
- **2026-01-06**: Verified successful build for Chapter 5 modifications.
- **2026-01-06**: Completed a comprehensive reformatting of all Chapter 4 (Stakeholder & Communication) pages, replacing legacy hardcoded HTML/CSS grids and tables with standardized interactive Vue components (`ConceptGrid`, `ConceptCard`, `FlashcardGrid`, `Flashcard`).
- **2026-01-06**: Verified successful build and visual rendering for all Chapter 4 modifications.
- **2026-01-06**: Completed a comprehensive reformatting of all Chapter 3 (Team Leadership) pages, replacing legacy hardcoded HTML/CSS grids with standardized interactive Vue components (`ConceptGrid`, `ConceptCard`, `FlashcardGrid`, `Flashcard`).
- **2026-01-06**: Verified successful build for all Chapter 2 and 3 modifications.
- **2026-01-06**: Completed a comprehensive reformatting of all Chapter 2 (Strategic) pages, replacing legacy hardcoded HTML/CSS grids with standardized interactive Vue components (`ConceptGrid`, `ConceptCard`, `FlashcardGrid`, `Flashcard`).
- **2026-01-06**: Resolved persistent build and parsing errors by standardizing component attributes (replacing special characters like `&` and `/` with `and` and `or`), ensuring proper script setup imports, and removing all redundant `<style>` blocks.
- **2026-01-06**: Harmonized page headers and numbering across the strategic guide for better navigation and consistency.
- **2026-01-06**: Verified all 13 updated strategic pages via local development server and consolidated the build process.
