# Repository Guidelines

## Project Structure & Module Organization
- Top-level references: `00-Outline.md` (table of contents), `CLAUDE.md` (style and roadmap), `GEMINI.md` (quick conventions).
- Each chapter lives in its own `Chapter N/` folder. Chapters 1-4 are single files (for example, `Chapter 4/4 – Ways of Working and Tailoring.md`).
- Chapters 5+ are modular: main integration file `N – [Title].md`, sub-sections `Na – [Topic].md`, and a knowledge check at the next letter (e.g., `5h – Knowledge Check.md`).
- When adding or renaming sections, keep numbering/lettering sequential and update `00-Outline.md` immediately to stay in sync.

## Build, Test, and Development Commands
- No build pipeline; content is Markdown only.
- Quick navigation: `rg "<term>" Chapter*` to find topics; `ls "Chapter 10"` to view sub-sections.
- Manual verification: open the edited file in a Markdown viewer or `cat`/`bat` to spot heading, spacing, and list formatting issues.

## Writing Style & Naming Conventions
- Tone: professional, instructional, PMI-aligned; favor the Concept → Practical Example → Scenario pattern.
- Reuse the recurring narratives (predictive office renovation, agile expense system, hybrid transformation program) to ground examples.
- Headings use standard Markdown `#` hierarchy; keep chapter titles and file names in the existing `N – Title` pattern (en dash preserved).
- Use concise paragraphs and bullets; avoid repeating explanations across chapters—cross-reference instead.
- Reference the ECO when relevant and ensure knowledge-check explanations state why distractors are weaker.

## Testing & QA Expectations
- Proofread for clarity, tense consistency, and PMI alignment.
- Ensure practice questions follow the scenario stem + four options + explanation format outlined in `CLAUDE.md`.
- Validate cross-references (chapter numbers, section letters, outline entries) and refresh examples if timelines or terminology drift.

## Commit & Pull Request Guidelines
- Commit messages follow the short, imperative style in history (e.g., `Add Chapter 2 knowledge check`).
- PRs should summarize scope, list key files, note `00-Outline.md` updates, and call out any structural changes.
- When adding content, mention coverage (chapters/sections touched) and any open questions for reviewers.
