<instruction>You are an expert software engineer. You are working on a WIP branch. Please run `git status` and `git diff` to understand the changes and the current state of the code. Analyze the workspace context and complete the mission brief.</instruction>
<workspace_context>
<artifacts>
--- CURRENT TASK CHECKLIST ---
# Task Checklist: Reformatting Guide Pages

- [x] Analyze and plan reformatting for Chapters 5-10 <!-- id: 0 -->
    - [x] List files in `guide/05-initiation` <!-- id: 1 -->
    - [x] List files in `guide/06-project-planning` <!-- id: 2 -->
    - [x] List files in `guide/07-risk-quality` <!-- id: 3 -->
    - [x] List files in `guide/08-execution` <!-- id: 4 -->
    - [x] List files in `guide/09-monitoring` <!-- id: 5 -->
    - [x] List files in `guide/10-ai-pm` <!-- id: 6 -->
- [x] Reformat Chapter 5: Initiation <!-- id: 7 -->
- [x] Reformat Chapter 6: Project Planning <!-- id: 8 -->
- [x] Reformat Chapter 7: Risk, Quality and Complexity <!-- id: 9 -->
- [ ] Reformat Chapter 8: Project Execution <!-- id: 10 -->
- [ ] Reformat Chapter 9: Monitoring and Controlling <!-- id: 11 -->
- [ ] Reformat Chapter 10: AI in Project Management <!-- id: 12 -->
- [ ] Verify build and functionality <!-- id: 13 -->
- [ ] Finalize documentation and commit <!-- id: 14 -->

--- IMPLEMENTATION PLAN ---
# Implementation Plan - Reformat Chapter 7: Risk, Quality & Complexity

Modernize all pages in Chapter 7 by replacing legacy hardcoded HTML/CSS with standardized interactive Vue components (`ConceptGrid`, `ConceptCard`, `FlashcardGrid`, `Flashcard`).

## Proposed Changes

### [Chapter 7: Risk, Quality & Complexity](file:///Users/dustinober/PMP-2026/guide/07-risk-quality/)

#### [MODIFY] [index.md](file:///Users/dustinober/PMP-2026/guide/07-risk-quality/index.md)
- Add `<script setup>` with `ConceptGrid` and `ConceptCard`.
- Replace `section-grid` and `section-card` with `<ConceptGrid>` and `<ConceptCard>`.
- Remove legacy `<style>` block.

#### [MODIFY] [risk-management.md](file:///Users/dustinober/PMP-2026/guide/07-risk-quality/risk-management.md)
- Add `<script setup>` with `ConceptGrid`, `ConceptCard`, `FlashcardGrid`, and `Flashcard`.
- Replace existing custom grids/cards with Vue components.
- Add "Quick Review" flashcards.

#### [MODIFY] [quality-management.md](file:///Users/dustinober/PMP-2026/guide/07-risk-quality/quality-management.md)
- Add `<script setup>` with `ConceptGrid`, `ConceptCard`, `FlashcardGrid`, and `Flashcard`.
- Replace existing custom grids/cards with Vue components.
- Add "Quick Review" flashcards.

#### [MODIFY] [navigating-complexity.md](file:///Users/dustinober/PMP-2026/guide/07-risk-quality/navigating-complexity.md)
- Add `<script setup>` with `ConceptGrid`, `ConceptCard`, `FlashcardGrid`, and `Flashcard`.
- Replace existing custom grids/cards with Vue components.
- Add "Quick Review" flashcards.

#### [MODIFY] [toolkit.md](file:///Users/dustinober/PMP-2026/guide/07-risk-quality/toolkit.md)
- Add `<script setup>` with components.
- Standardize tool display using `ConceptGrid`.

#### [MODIFY] [knowledge-check.md](file:///Users/dustinober/PMP-2026/guide/07-risk-quality/knowledge-check.md)
- Add `<script setup>` with `ConceptGrid`, `FlashcardGrid`, and `QuizComponent`.
- Standardize layout.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no errors.

### Manual Verification
- Visual inspection via `npm run dev`.
</artifacts>
</workspace_context>
<mission_brief>[Describe your task here...]</mission_brief>