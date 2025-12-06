# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a comprehensive **PMP Exam Study Guide for the 2026 Exam**. It is a structured, text-based educational resource designed to help candidates prepare for the new Project Management Professional (PMP) certification exam.

The guide is organized as a series of markdown files, progressing from exam orientation through three main domains (People, Process, Business Environment), with each chapter following a learning loop: concept introduction → practical examples → scenario-based practice questions → answer explanations.

## Repository Structure

As of December 2025, the repository uses a **chapter folder structure** for better organization and modularity:

```
PMP-2026/
├── README.md                           # Project intro
├── 00-Outline.md                       # Complete table of contents
├── CLAUDE.md                           # This file - guidance for Claude Code
│
├── Chapter 1/
│   └── 1 – Understanding the New PMP Exam.md
│
├── Chapter 2/
│   └── 2 – How To Use This Study Guide.md
│
├── Chapter 3/
│   └── 3 – Value Delivery and Outcomes.md
│
├── Chapter 4/
│   └── 4 – Ways of Working and Tailoring.md
│
├── Chapter 5/                          # Modular structure with sub-sections
│   ├── 5 – Core Project Management Concepts and Tools.md (TOC & Integration)
│   ├── 5a – Stakeholders and Communication.md
│   ├── 5b – Scope, Schedule, and Cost.md
│   ├── 5c – Quality.md
│   ├── 5d – Risk Management.md
│   ├── 5e – Data-Informed Decision-Making.md
│   ├── 5f – AI and Emerging Technologies.md
│   ├── 5g – Professional Responsibility and Ethics.md
│   └── 5-Knowledge Check.md
│
├── Chapter 6/ (to be created)
│   └── [Modular structure similar to Chapter 5]
│
└── [Chapters 7-21 to follow the same pattern]
```

### Content Organization

The guide is structured into 6 parts:

1. **Part 1 – Orientation and Exam Overview** (Chapters 1–2)
   - Exam structure, question types, domain overview
   - How to use this guide, study paths, and progress tracking

2. **Part 2 – Foundations** (Chapters 3–5)
   - Value delivery, project/program/portfolio concepts
   - Ways of working (predictive, agile, hybrid)
   - Core PM tools and concepts

3. **Part 3 – People Domain** (Chapters 6–9)
   - Team building and leadership
   - Stakeholder management and communication
   - Conflict resolution and decision-making
   - Coaching, mentoring, and servant leadership

4. **Part 4 – Process Domain** (Chapters 10–14)
   - Initiating and planning
   - Risk, issues, and change management
   - Executing and delivering work
   - Monitoring, controlling, and closing

5. **Part 5 – Business Environment Domain** (Chapters 15–18)
   - Strategy and portfolio alignment
   - Benefits, value, and sustainability
   - Compliance and governance
   - Organizational change and readiness

6. **Part 6 – Practice Exams and Strategy** (Chapters 19–21)
   - Exam strategy and test-taking skills
   - Full-length and targeted practice exams

## Chapter Structure Pattern

Each content chapter follows a consistent learning design:

1. **Introduction** – Ties the topic to real-world project situations
2. **Learning Objectives** – Clear outcomes for the chapter
3. **Core Concepts** – Practical explanations of theories and frameworks
4. **Examples/Case Studies** – Mini scenarios showing concepts in context
5. **Practice Questions** – Scenario-based questions aligned to exam style
6. **Answer Key with Explanations** – Why the best answer is best, tied back to concepts

## Development and Maintenance Tasks

### Folder and File Structure (Updated December 2025)

**Chapters 1-4**: Single file per chapter in its own folder
- Example: `Chapter 4/4 – Ways of Working and Tailoring.md`
- Narrative chapters where the story flows across multiple topics

**Chapters 5 and beyond**: Modular structure with sub-sections in each chapter folder
- Main file: `Chapter 5/5 – Core Project Management Concepts and Tools.md` (contains table of contents and integration sections)
- Sub-section files: `Chapter 5/5a – [Topic].md`, `Chapter 5/5b – [Topic].md`, etc.
- Knowledge check file: `Chapter 5/5-Knowledge Check.md` (contains all practice questions and answers)
- **Naming**: Use letters (a, b, c...) for sub-sections, not numbers

**Benefits of this structure**:
- Shorter, more manageable files that are easier to edit and review
- Clear modularity for future expansion and reorganization
- Consistent naming convention across chapters
- Easy navigation for readers studying individual topics
- Maintains cross-chapter narrative continuity (especially for foundational chapters 1-4)

### When Adding New Chapters

1. **For Chapters 1-4**: Use single-file-per-folder structure (already established)
   - File naming: `N – [Chapter Title].md` (no leading zeros needed)
   - Location: `Chapter N/` folder

2. **For Chapters 5 and beyond**: Use modular structure with sub-sections
   - Main file: `Chapter N/N – [Chapter Title].md` (TOC and integration sections only)
   - Sub-section files: `Chapter N/Na – [Topic].md`, `Chapter N/Nb – [Topic].md`, etc.
   - Knowledge check: `Chapter N/N-Knowledge Check.md`
   - Include cross-references between sub-section files in the main TOC

3. **Maintain the section structure** outlined above; consistency aids learning

4. **Update 00-Outline.md** immediately to reflect the new chapter

5. **Cross-reference to the ECO** (Exam Content Outline) where applicable using format: `ECO: [Domain] – Task [number]`

6. **Include scenario-based questions**, not just true/false or fill-in-the-blank

7. **Write answer explanations** that explain not just the correct answer, but also why other options are less aligned with PMI's approach

### When Editing Existing Chapters

1. **Maintain the learning loop structure** (concept → example → practice → reflection)
2. **Keep explanations practical and tied to real project situations**, not purely theoretical
3. **Update related cross-references** if you change section titles or learning objectives
4. **Refresh examples if they become outdated** relative to current PMI guidance
5. **Review practice questions for accuracy** against the latest exam content outline

### Progress Tracking

The guide's completeness is tracked through the git history. Check `git log` to see:
- Which chapters have been completed and merged
- Recent updates to existing chapters
- The overall progress toward a complete study guide

Recent significant commits:
- `ad8b38f`: Chapter 3 complete
- `9fb03d2`: Initial commit

## Common Development Patterns

### Scenario-Based Questions

The exam uses real-world project scenarios. When writing practice questions, follow this pattern:

```
[Scenario context about a specific project situation]

[Question asking for the best action/response]

A) [Plausible but incorrect option]
B) [Plausible but incorrect option]
C) [Best answer aligned with PMI guidance]
D) [Plausible but incorrect option]

**Explanation:**
[Why C is correct, tied to specific PMI concepts]
[Why other options, while understandable, don't align with PMI best practices]
```

### Answer Explanation Structure

Good explanations should:
- State the PMI concept or principle being tested
- Explain why the correct answer aligns with that concept
- Briefly explain why other options fall short
- Optionally reference which domain/task this relates to

## Study Guide Philosophy

This guide is built on several educational principles that should guide any updates:

1. **Bridging Theory and Practice** – Concepts should always connect to how project managers actually work
2. **Scenario-Driven Learning** – The exam tests application of concepts, not just memorization
3. **Domain Balance** – Content should reflect the exam's three-domain structure (People, Process, Business Environment)
4. **Progressive Complexity** – Foundation chapters (Part 2) should prepare readers for more complex domain-specific chapters
5. **Self-Assessment** – Include progress tracking guidance so learners can identify their weak spots
6. **Flexibility** – Recognize different learning styles and study timelines (fast-track vs. standard plans)

## Key Resources for Contributors

- **Exam Content Outline (ECO)** – The official PMI document defining what's on the exam. Reference it when mapping chapters to exam tasks.
- **PMBOK Guide** – The foundational PMI reference. Use when explaining core concepts or when adding depth to chapters.
- **Chapter 2 (How to Use This Study Guide)** – Contains study strategies, study paths, and progress tracking advice. Reference when discussing how learners should approach the material.

## Notes for Future Contributors

- **Avoid redundancy** – Each chapter should have a distinct focus. If a concept is covered in a foundation chapter, you can reference it rather than re-explain it in detail.
- **Scenario authenticity** – Use realistic project situations. Avoid overly simplified or unrealistic scenarios that don't prepare learners for actual exam questions.
- **PMI perspective** – The guide teaches PMI's frameworks and preferences. When there's a gap between "best practice in industry" and "what PMI expects," teach PMI's approach.
- **Keep the learning loop in mind** – Even if you're updating just one section of a chapter, maintain the overall flow from concept → example → practice.
