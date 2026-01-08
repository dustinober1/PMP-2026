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
- **2026-01-07**: Modernized `guide/10-ai-pm/ai-essentials.md` by replacing all code block prompt templates with styled `ConceptCard` components featuring gradient backgrounds and syntax highlighting. Converted the "PM Prompt Template" into a visually styled prompt card, transformed the four "Advanced Prompting Patterns" (Negative Prompting, Constraint Injection, Multi-Persona Debate, Output Format Control) into a `ConceptGrid` with styled cards, and replaced the "Complete Worked Example: Risk Brainstorm Prompt" with a structured prompt template card plus a styled HTML table showing sample output with color-coded probability/impact badges. Verified successful build.
- **2026-01-07**: Modernized `guide/10-ai-pm/ai-lifecycle.md` by replacing all code block prompt templates with styled `ConceptCard` components featuring gradient backgrounds and syntax highlighting. Converted the Charter, WBS, Risk Register, Meeting Minutes, Status Report, Lessons Learned, Risk Brainstorm, Scope Scan, and Vendor Selection prompts into visually appealing prompt cards. Modernized the Decision Tree from ASCII art to an HTML-based flowchart with gradient boxes and color-coded Yes/No paths. Also converted EVM AI applications (Pattern Recognition, Root Cause Analysis, EAC Generation) into a `ConceptGrid`. Verified successful build.
- **2026-01-07**: Fixed rendering issues in `guide/09-monitoring/toolkit.md` for EVM Worksheet, Monte Carlo Summary Template, and Closure Readiness Assessment sections by removing HTML comments that VitePress cannot parse within Vue components, fixing invalid CSS property naming (`paddingTop` to `padding-top`), and properly escaping `<` characters. Verified successful build.
- **2026-01-06**: Modernized `guide/09-monitoring/project-closure.md` by replacing code blocks and ASCII diagrams with styled `ConceptCard` components for "Benefits Handoff," "Benefits Realization Timeline," "CPIF Fee Calculation," and "Acceptance Documentation."
- **2026-01-06**: Modernized `guide/09-monitoring/toolkit.md` by replacing text-based checklists and tables with interactive `ConceptCard` and `ConceptGrid` components. Transformed the Monitoring Cadence, Status Report, EVM Worksheet, Sprint Health Indicators, Escalation Path, Monte Carlo Report, and Closure Checklists into visually appealing, structured layouts. Verified successful build.
- **2026-01-06**: Modernized `guide/08-execution/toolkit.md` by replacing all ASCII art decision trees and flowcharts with styled HTML-based `ConceptCard` visualizations: Benefit Realization Timeline, Impediment Escalation Decision Flow, Change Request Triage Flow, Value Delivery Risk Assessment, and Work Performance Data to Reports Flow. Verified successful build.
- **2026-01-06**: Modernized `guide/08-execution/value-delivery.md` by replacing code blocks with styled `ConceptCard` components: Value Stream Mapping example, BCR/ROI/Payback calculation, WSJF formula, NPV formula and calculation example, IRR decision examples, Opportunity Cost example, Sunk Cost decision analysis, E-commerce KPIs, Product Launch OKR, NPS formula with categories, Kaizen improvement example, two 5 Whys root cause analysis examples, and Predictive vs Adaptive comparison. Verified successful build.
- **2026-01-06**: Modernized `guide/08-execution/executing-work.md` by replacing all ASCII art process flows (Work Authorization Process Flow, Predictive Work Execution Flow, Agile Work Execution Flow, Hybrid Work Execution Flow, Data-to-Information-to-Reports Flow, and Risk-to-Issue Conversion Process) with visually appealing HTML-based diagrams using styled gradient cards, proper spacing, and clear visual hierarchy. Verified successful build.
- **2026-01-06**: Modernized `guide/08-execution/index.md` by replacing ASCII art diagrams with styled HTML-based `ConceptCard` visualizations for the Core Execution Sequence, Approved Change Requests process, and Executing/Monitoring and Controlling feedback loop. Verified successful build.
- **2026-01-06**: Modernized `guide/07-risk-quality/toolkit.md` by replacing text-based decision trees with responsive SVG visualizations for Risk Response Selection (threats and opportunities). Also converted the EMV calculator, Weekly Review Agenda, and Cynefin decision guide into interactive `ConceptCard` and `ConceptGrid` layouts. Verified successful build.
- **2026-01-06**: Modernized `guide/07-risk-quality/navigating-complexity.md` by replacing text-based feedback loops and system archetypes (Shifting the Burden, Limits to Growth, etc.) with responsive SVG visualizations and structured `ConceptGrid` layouts. Verified successful build.
- **2026-01-06**: Modernized the Risk Breakdown Structure (RBS), Budget Structure Hierarchy, and Decision Tree Analysis walkthroughs in `guide/07-risk-quality/risk-management.md`. Replaced all remaining monospace text blocks with structured `ConceptGrid` components and responsive SVG visualizations. Verified successful build and rendering.
- **2026-01-06**: Modernized `guide/06-project-planning/communications-planning.md` by replacing the ASCII Communication Model with an interactive SVG visualization in a `ConceptCard` (with high-contrast WCAG-compliant colors), converting tables for barriers and challenges into `ConceptGrid` layouts, and fixing build errors.
- **2026-01-06**: Modernized `guide/06-project-planning/resource-planning.md` by replacing plain text sections (Resource Optimization, Virtual Teams, Make-or-Buy, FPIF Scenarios, and PTA) into interactive `ConceptCard` and `ConceptGrid` components. Verified successful build.
- **2026-01-06**: Modernized "risk reserves" section in `guide/06-project-planning/risk-planning.md` by replacing text-based formulas for EMV and Monte Carlo with a clean `ConceptGrid` layout.
- **2026-01-06**: Modernized `guide/06-project-planning/risk-planning.md` by replacing the messy HTML/div-based Tornado Diagram with a crisp, interactive SVG visualization within a `ConceptCard`. Also fixed multiple potential build issues by escaping special characters in tables and correcting quote usage in `FlashcardCarousel`.
- **2026-01-06**: Modernized `guide/06-project-planning/quality-planning.md` by replacing ASCII art charts (Cost of Quality, Fishbone, Pareto, Histogram, Control Chart, Scatter Diagram) with interactive `ConceptCard` components containing responsive SVG visualizations. Fixed build errors by removing HTML comments from Vue templates and properly escaping special characters in tables. Verified successful build.
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
- **2026-01-07**: Modernized `guide/09-monitoring/monitoring-closing.md` by replacing ASCII art diagrams (Control Loop, S-Curve, Monte Carlo) with styled HTML-based `ConceptCard` visualizations. Resolved a persistent SVG build error ("Element is missing end tag") by creating a dedicated `SCurveViz.vue` component to handle the complex S-Curve logic outside of Markdown parsing. Verified successful build.
