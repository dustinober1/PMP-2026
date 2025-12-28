# Publication TODOs (PMP Exam Prep 2026)

## Publication Blockers (Fix Before Release)

- [x] **Align exam specs to the July 2026 ECO** (185 questions, 240 minutes, two 5-minute breaks) and remove legacy “180 questions / 230 minutes / 10-minute breaks” references:
  - [x] `legacy/chapters/Chapter 10 - Exam Preparation and Future Trends/10.1 – Exam Strategy and Test-Taking Skills.md` (e.g., lines 11, 177-186, 240-254)
  - [x] `legacy/chapters/Chapter 10 - Exam Preparation and Future Trends/10.3a – Practice Exam 1.md:7`
  - [x] `legacy/chapters/Chapter 10 - Exam Preparation and Future Trends/10.3c – Practice Exam 2.md:11`
  - [x] `legacy/chapters/Chapter 10 - Exam Preparation and Future Trends/10.3e – Practice Exam 3.md:11`
  - [x] `legacy/chapters/Chapter 10 - Exam Preparation and Future Trends/10.3i – Exam Scoring Template.md:37` (and any other “Target: 230 minutes” lines)
  - [x] `legacy/appendices/Progress-Tracking-Template.md:208`

- [x] **Fix missing/broken chapter navigation** (either create missing files or adjust links to match what exists):
  - [x] `Chapter 06 - Project Planning/06.1 – Planning for Value Delivery.md:6` links to non-existent `06.1a`–`06.1g` files
  - [x] `Chapter 06 - Project Planning/06.1 – Planning for Value Delivery.md:77` links to a non-existent `09.1a – Tracking Progress and Performance.md` (should point into `Chapter 09 - Monitoring and Closing/09.1 – Monitoring, Controlling, and Closing.md` or to a real file)

- [x] **Fix broken cross-references to non-existent “Chapter 98/15/18/23/…” paths** (update to real files/anchors or remove until those chapters exist):
  - [x] `legacy/chapters/Chapter 01 - Introduction and Fundamentals/01.4a – Stakeholders and Communication.md:7` and `:42` reference `../Chapter 98/...`
  - [x] `legacy/appendices/Appendix A.2 – The Planning Process Group.md:132` and `:196` reference `../Chapter 98/...`
  - [x] `legacy/appendices/Appendix A.6 – Knowledge Check.md:49` and `:50` reference non-existent chapters
  - [x] `legacy/appendices/Appendix B – Key Formulas and Definitions.md` contains multiple links to non-existent chapters (e.g., Chapter 4/10a/15/18)
  - [x] `legacy/appendices/Appendix D – Tools and Artifacts Index.md` contains many links to non-existent chapters (broken-link heavy; decide whether to update now or exclude from first release)
  - [x] `legacy/appendices/Concept-Map.md` contains many links to non-existent chapters (broken-link heavy; decide whether to update now or exclude from first release)

- [x] **Fix malformed Markdown links that use angle brackets in the link target** (these render as broken links in most Markdown parsers):
  - [x] `legacy/chapters/Chapter 10 - Exam Preparation and Future Trends/10.3c – Practice Exam 2.md:1550`
  - [x] `legacy/chapters/Chapter 10 - Exam Preparation and Future Trends/10.3d – Practice Exam 2 Answers.md:874`
  - [x] `legacy/chapters/Chapter 10 - Exam Preparation and Future Trends/10.3e – Practice Exam 3.md:1550` and `:1562`
  - [x] `legacy/chapters/Chapter 10 - Exam Preparation and Future Trends/10.3f – Practice Exam 3 Answers.md:987`

- [x] **Fix source path mismatch**:
  - [x] `legacy/appendices/Appendix C – Sources.md:9` references `Resources/New-PMP-Examination-Content-Outline-2026.pdf` but the file lives under `References/`

- [x] **Confirm redistribution rights for PDFs** in `References/` before publishing publicly (handled by not distributing PDFs in the repo; cite/link to official sources instead).

## 2026 Alignment & Modernization
- [x] **2026 PMP Exam Alignment Determination**: Confirmed 11-chapter structure is sufficient for PMBOK 8 and the July 2026 ECO.
- [x] **Update Legacy Terminology**: Modernized `legacy/appendices/Terminology-Master-List.md` and `Content-Quality-Checklist.md` for PMBOK 8.
- [ ] **Finalize Guide Glossary**: Finish migrating and stylizing the A-Z terminology into `guide/appendices/glossary.md`.
- [ ] **Fix ECO Task Map Links**: Update `guide/appendices/eco-2026-task-map.md` to point to existing files (currently has many placeholder links).
- [ ] **AI Scenario Review**: Ensure Chapter 10 has the "Case Study" sets mentioned in the 2026 ECO.

## Editorial / Consistency (High Value)

- [x] Normalize internal section numbering so headings match file numbering (example: `legacy/chapters/Chapter 01 - Introduction and Fundamentals/01.4a – Stakeholders and Communication.md` uses `5.1.x` headings).
- [x] Run a repo-wide internal link check and resolve remaining broken links (after deciding which appendices/chapters ship in v1).
- [ ] Do a spell/typo pass and style consistency pass (capitalization, acronym first-use, domain naming, etc.); use `legacy/appendices/Content-Quality-Checklist.md` as the standard.
- [ ] Add/verify publication front matter (disclaimer/trademark usage, edition/date, audience/prereqs, how-to-use).

## Quick Commands (Optional)

- Find legacy exam numbers: `rg -n "\\b180\\b|230 minutes|3 hours 50 minutes|10-minute breaks" -S .`
- Find malformed `<...>` link targets: `rg -n "\\]\\(<[^)]+\\)\\)" -S .`
- Find references to non-existent Chapter folders: `rg -n "\\.\\./Chapter%201[1-9]/|\\.\\./Chapter%202[0-9]/|\\.\\./Chapter%2098/" -S .`
