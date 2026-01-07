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
- **2026-01-06**: Modernized `guide/06-project-planning/cost-planning.md` by converting EVM formulas, cost estimation techniques, budget architecture, and scenarios into interactive `ConceptCard` and `ConceptGrid` components. Fixed build errors by escaping `>` and `<` characters, correcting `FlashcardCarousel` quote syntax, and removing problematic SVG elements. Verified successful build.
- **2026-01-06**: Modernized `guide/06-project-planning/schedule-planning.md` by replacing all markdown code blocks with interactive `ConceptCard` and `ConceptGrid` components. Converted PERT formulas, crashing examples, velocity forecasting, and situational scenarios into styled cards to improve readability and visual aesthetics. Verified successful build.
- **2026-01-06**: Expanded flashcards in all 7 Chapter 6 (Project Planning) content pages to ensure at least 10 flashcards per page, covering scope (WBS, RTM, MoSCoW), schedule (CPM, PERT, dependencies), cost (EVM, reserves), quality (7 tools, CoQ), resources (RACI, contracts), risk (EMV, responses), and communications (channels, methods).
- **2026-01-06**: Corrected a flashcard in `guide/01-introduction/understanding-exam.md` that incorrectly stated all PMP questions are multiple choice; updated it to reflect the variety of question formats (multiple response, matching, hotspot, etc.).
- **2026-01-06**: Expanded flashcards in all 3 Chapter 7 (Risk, Quality and Complexity) content pages to ensure at least 10 flashcards per page, covering quality tools (DMAIC, Kano, DoD), complexity (Cynefin, ADKAR, systems thinking), and risk management (EMV, Monte Carlo, RBS).
- **2026-01-06**: Verified successful build after fixing all `FlashcardCarousel` prop quoting issues across the guide.
- **2026-01-06**: Expanded flashcards in Chapters 8, 9, 10, and 11 to ensure at least 10 flashcards per page in all content sections, adding `FlashcardCarousel` for Quick Reviews. Fixed multiple build errors related to attribute quoting in Vue components.
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
- **2026-01-06**: Replaced generic markdown code blocks for "User Story Format" and "Example" in `guide/06-project-planning/scope-planning.md` with styled `ConceptCard` components within a `ConceptGrid` to improve visual presentation and alignment with design aesthetics.
- **2026-01-06**: Transformed the "WBS Decomposition Example" in `guide/06-project-planning/scope-planning.md` from a raw code block into a styled `ConceptCard` with a pre-formatted text tree, improving readability and visual integration while maintaining the hierarchical structure.
- **2026-01-06**: Fixed markdown rendering issues in Chapter 5 (Initiation) by converting `**Bold**` syntax to `<strong>` tags within `ConceptCard` slots in `delivery-strategy.md`, `constraints-assumptions.md`, and `project-charter.md`, specifically addressing the "Stable" rendering issue reported.
- **2026-01-06**: Fixed a build error in `guide/07-risk-quality/risk-management.md` caused by unescaped `<` symbol in a table and potential HTML referencing issues in the Risk Burndown chart component. Build is now successful.
- **2026-01-06**: Replaced unreadable code block for "Important Sequence" in `guide/06-project-planning/scope-planning.md` with a styled `ConceptCard` to improve visibility and accessibility.
- **2026-01-06**: Replaced unreadable code block for "Step-by-Step CPM Example" in `guide/06-project-planning/schedule-planning.md` with a visual `ConceptCard` diagram. Corrected an issue where HTML indentation caused code block rendering issues.
- **2026-01-06**: Replaced ASCII network diagram for "CPM Practice Problem" and ASCII resource histogram in `guide/06-project-planning/schedule-planning.md` with structured `ConceptCard` components containing CSS-based visual representations for better readability.
