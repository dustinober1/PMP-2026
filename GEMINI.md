# PMP-2026 Study Guide

## Project Overview
This repository contains the source content for a comprehensive **PMP Exam Study Guide** designed for the **July 2026** exam update. The guide is a text-based educational resource organized into chapters, targeting the three new exam domains: **People (33%)**, **Process (41%)**, and **Business Environment (26%)**.

## Directory Structure & File Conventions
The project uses a specific folder and file naming convention that **must** be strictly followed.

### Top Level
*   `00-Outline.md`: The master Table of Contents. **Always update this** when adding/changing chapters or sections.
*   `CLAUDE.md`: Contains detailed stylistic guidelines, narrative arcs, and project status. **Consult this file** for deep context on writing style and character backstories.
*   `Chapter N/`: Each chapter has its own directory.

### Chapter Structure
There are two distinct patterns for chapters:

1.  **Single-File Chapters (Chapters 1-4):**
    *   Format: `Chapter N/N – [Chapter Title].md`
    *   Used for foundational, narrative-heavy introductory chapters.

2.  **Modular Chapters (Chapter 5+):**
    *   **Main Integration File:** `Chapter N/N – [Chapter Title].md` (Contains TOC and intro).
    *   **Sub-sections:** `Chapter N/Na – [Topic Title].md`, `Chapter N/Nb – [Topic Title].md`, etc.
    *   **Knowledge Check:** `Chapter N/Nx – Knowledge Check.md` (where `x` is the next letter after the last sub-section).
    *   **Note:** Use letters (a, b, c...) for sub-sections, not numbers.

## Writing Guidelines
*   **Tone:** Professional, instructional, and encouraging.
*   **Perspective:** Align strictly with **PMI standards** (PMBOK Guide, Process Groups: A Practice Guide, Agile Practice Guide). Distinguish between "industry common practice" and "PMI best practice."
*   **Learning Loop:** Every major section should follow: **Concept → Practical Example → Scenario Application**.
*   **Recurring Scenarios:** Use the established project narratives (detailed in `CLAUDE.md`) to illustrate concepts:
    *   *Predictive:* Office Renovation
    *   *Agile:* Expense Reporting System
    *   *Hybrid:* Global Transformation Program

## Current Status & Priorities
*   **Completed:** Parts 1 (Orientation, including knowledge checks for Chapters 1-2), 2 (Foundations), 3 (People Domain), and Chapters 10-12 of Part 4 (Process Domain).
*   **In Progress/Next Up:**
    *   **Chapter 13:** Executing and Delivering Work
    *   **Chapter 14:** Monitoring, Controlling, and Closing
*   **Goal:** Complete the Process Domain chapters emphasizing the differences between predictive, agile, and hybrid execution.

## Usage
*   **Reading:** Open `00-Outline.md` to navigate the book.
*   **Editing:** specific chapter files directly. Ensure `00-Outline.md` remains in sync.
*   **Verification:** No build step exists (it's Markdown). "Verification" means proofreading for PMI alignment and narrative consistency.
