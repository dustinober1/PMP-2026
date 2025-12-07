# Repository Guidelines

## Project Structure & Module Organization
- `Chapter 0`–`Chapter 21`, `Chapter 98`, and `Chapter 99` contain the book content as Markdown.
- Each chapter folder holds one or more `.md` files named with a numeric prefix and a descriptive title (for example, `6e – Motivation and Engagement.md`).
- Add new content to the appropriate chapter folder; only place repository-wide documents (like this file) in the root.

## Build, Test, and Development Commands
- This repository is plain Markdown; there is no required build or compile step.
- View and edit content directly in your Markdown editor. Use search to navigate concepts, for example: `rg "earned value" "Chapter 10"`.
- If you use local tools (e.g., `markdownlint`, grammar checkers), run them before opening a PR, but avoid committing tool-specific configs without prior discussion.

## Coding Style & Naming Conventions
- Follow existing heading structure and hierarchy; use `#` for the main title and progressively deeper levels within each file.
- Use clear, concise sentences, American English spelling, and PMP 2026 terminology consistent with existing chapters.
- Preserve existing line wrapping where reasonable; do not reflow large untouched sections just to change formatting.
- File names follow the existing numeric-prefix and en dash pattern; avoid renaming or reordering files without coordination.

## Testing Guidelines
- There are no automated tests; quality control is editorial.
- Before submitting, proofread for grammar, spelling, and consistency of terms, chapter references, and exam objectives.
- Ensure knowledge checks align with the chapter content and that question/answer numbering is correct.

## Commit & Pull Request Guidelines
- Use concise, present-tense commit messages (for example, `Refine Chapter 7 knowledge check`).
- Group related edits by chapter or topic; avoid mixing unrelated chapters in a single commit when possible.
- Pull requests should briefly describe the intent, list key chapters/files touched, and note any structural changes (new chapters, file moves, or renames).

## Content & Editorial Guidelines
- Keep the tone instructional, practical, and exam-focused, emphasizing how concepts apply to PMP 2026 scenarios.
- Prefer concrete, exam-relevant examples over generic anecdotes, and align new terminology with PMI standards used elsewhere in the book.
- When introducing a concept that appears in multiple chapters, check for existing definitions and cross-reference them for consistency.
