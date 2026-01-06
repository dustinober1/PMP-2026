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
- **`scripts/`**: Utility scripts (e.g., converting flashcards/testbanks to JSON).
- **`appendices/`**: Supplementary material like flashcards and glossary.
- **`legacy/`**: Archived content from previous versions.

## Development Conventions
- **Content:** Written in Markdown (`.md`).
- **Interactivity:** Custom Vue components are used within markdown files for things like quizzes and charts.
- **Navigation:** Sidebar and navigation structure are defined in `.vitepress/config.js` or separate files in `.vitepress/sidebar/`.
- **Assets:** Static assets should be placed in `.vitepress/public` (if it exists) or relative to the markdown files if they are specific to a page.

## Deployment
The site is deployed to GitHub Pages. The `deploy.yml` workflow in `.github/workflows/` handles automated deployment on push, or it can be triggered manually via `npm run deploy`.

## Recent Changes
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
