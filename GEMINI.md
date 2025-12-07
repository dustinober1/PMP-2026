# GEMINI.md

This file provides context and guidance for Gemini when working with the PMP-2026 repository.

## Recent Updates

### December 7, 2024 - EVM Compliance Enhancement
Updated content to comply with the Standard for Earned Value Management:
- **Chapter 14a**: Added EVM organization structure, Control Account Manager roles, IBR process, and measurement techniques
- **Chapter 14b**: Enhanced with EVM variance analysis, VAR reporting, reserve analysis, and integrated change control
- **Chapter 11**: Added Performance Measurement Baseline (PMB) development process and EVM planning requirements
- **Appendix A**: Added TCPI, SV(t), SPI(t), Management Reserve, and variance threshold formulas
- **Chapter 14f**: Created comprehensive knowledge check with EVM-focused practice questions
- **Cross-references**: Added links between planning, tracking, and control sections for integrated EVM coverage

## Project Overview

This is a **PMP Exam Study Guide** for the **July 2026** exam update. The guide is a comprehensive Markdown-based educational resource designed to help project managers prepare for the PMP certification exam, covering the three domains: **People (33%)**, **Process (41%)**, and **Business Environment (26%)**.

## Repository Structure

The content is organized into chapters, residing in `Chapter N` or `Chapter NN` directories.

### Chapter Types

1.  **Single-File Chapters (e.g., Chapters 1-4):**
    *   Foundational content.
    *   Format: `Chapter N/N – [Title].md`

2.  **Modular Chapters (e.g., Chapters 5+):**
    *   **Main File:** `Chapter N/N – [Title].md` (Introduction/TOC)
    *   **Sub-sections:** `Chapter N/Na – [Topic].md`, `Chapter N/Nb – [Topic].md`, etc.
    *   **Knowledge Check:** `Chapter N/Nx – Knowledge Check.md` (where `x` is the sequential letter following the last section).

### Special Directories
*   `Chapter 0/`: Contains `00-Outline.md` (Master Table of Contents). **Must be kept in sync.**
*   `Chapter 20/`: AI Essentials for Project Professionals.
*   `Chapter 21/`: Practice Exam set (questions and answers).
*   `Chapter 98/`: Appendices.
*   `Chapter 99/`: Resources.

## Critical Conventions

### File Naming
*   **En Dashes:** File names MUST use en dashes (`–`), NOT hyphens (`-`).
    *   ✅ `5a – Stakeholders and Communication.md`
    *   ❌ `5a - Stakeholders and Communication.md`
*   **Numbering:** Sub-sections use sequential letters (a, b, c...).

### Content & Style
*   **Recurring Narratives:** The guide uses three consistent scenarios involving a project manager named **Sarah**:
    1.  **Predictive (Waterfall):** Office renovation.
    2.  **Agile:** Expense reporting system.
    3.  **Hybrid:** Global transformation program.
*   **Tone:** Professional, instructional, encouraging, and strictly **PMI-aligned** (PMBOK Guide, Agile Practice Guide, Process Groups: A Practice Guide).
*   **Structure:** Concept → Practical Example → Scenario Application.

### Knowledge Checks
*   Located at the end of modular chapters (e.g., `12f – Knowledge Check.md`).
*   **Format:** Scenario stem → 4 options → Detailed explanation (why correct is best, why distractors are weak).

## Workflow

1.  **Editing:** When modifying content, ensure the tone matches the instructional style.
2.  **Adding Chapters/Sections:**
    *   Create the file following the naming convention (En dash!).
    *   **IMMEDIATELY** update `Chapter 0/00-Outline.md`.
3.  **Verification:**
    *   No build step (pure Markdown).
    *   Use `rg` (ripgrep) to search for terms or check consistency.
    *   Example: `rg "risk management" "Chapter 12"`
4.  **Index Maintenance:**
    *   **Chapter 98/Appendix C:** This file serves as an index of Tools and Artifacts. When adding new chapters or covering new tools/artifacts, update this index to include the new item or link to the new coverage location.

## Key Commands

*   **List files in a chapter:** `ls "Chapter 10"`
*   **Search content:** `rg "search term" .`
*   **Check outline:** `cat "Chapter 0/00-Outline.md"`

## Context for AI

*   **Role:** You are acting as an expert technical editor and instructional designer.
*   **Goal:** Create high-quality, exam-focused study material.
*   **Constraint:** Do not deviate from the established directory structure or naming conventions without explicit user instruction.
