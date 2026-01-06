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
- **2026-01-06**: Fixed page scroll behavior by adding router configuration in `.vitepress/theme/index.js` to ensure pages scroll to top on navigation instead of starting at the bottom.
- **2026-01-06**: Removed all interactive checkboxes from `guide/01-introduction/using-guide.md` (not functional in static site) and updated chapter outline from 10 to 11 chapters, separating AI in Project Management (Chapter 10) from Exam Preparation (Chapter 11) to match actual directory structure.
- **2026-01-06**: Added visual spacing between sample questions and their answer explanations in `guide/01-introduction/understanding-exam.md` to improve readability.
- **2026-01-06**: Reformatted domain task breakdown table in `guide/01-introduction/understanding-exam.md` to display all tasks in bullet format with line breaks for improved readability, aligned with the official 2026 PMP ECO.
- **2026-01-06**: Added comprehensive domain task breakdown table to homepage (`index.md`) listing all key tasks tested in each of the three domains (People, Process, Business Environment) in bullet format, aligned with the official 2026 PMP ECO.

