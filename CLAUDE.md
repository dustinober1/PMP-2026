# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this non-code repository containing educational content.

## Project Overview

This is a **PMP Exam Study Guide** for the **July 2026** exam update, targeting the three new exam domains: **People (33%)**, **Process (41%)**, and **Business Environment (26%)**. The guide is a comprehensive Markdown-based educational resource designed to help project managers prepare for the updated PMP certification exam.

### Nature of This Repository
- **Type**: Educational content repository (no executable code)
- **Format**: Pure Markdown files with structured educational content
- **Purpose**: Study guide for PMP certification exam preparation
- **Audience**: Project managers preparing for PMP exam
- **Language**: English with PMI-standard terminology

### Content Characteristics
- **Long-form content**: Chapters typically 300-2000+ lines each
- **Modular structure**: Main chapters with sub-sections for detailed topics
- **Practice questions**: Knowledge checks with realistic scenarios
- **Cross-references**: Extensive linking between related topics
- **Narrative consistency**: Recurring case studies throughout

## Repository Structure

### Top-Level Files
- `00-Outline.md` (in Chapter 0/): Master table of contents - **must be updated** when adding or modifying chapters
- `GEMINI.md`: Quick reference for conventions and current status
- `AGENTS.md`: Repository guidelines for build, style, and commit practices
- `README.md`: Brief project overview

### Chapter Organization

The repository uses two distinct chapter structures:

1. **Single-File Chapters (1-4):**
   - Format: `Chapter N/N – [Chapter Title].md`
   - Used for foundational, introductory chapters
   - Example: `Chapter 1/1 – Understanding the New PMP Exam.md`

2. **Modular Chapters (5+):**
   - Main file: `Chapter N/N – [Chapter Title].md` (contains introduction and table of contents)
   - Sub-sections: `Chapter N/Na – [Topic].md`, `Chapter N/Nb – [Topic].md`, etc.
   - Knowledge Check: `Chapter N/Nx – Knowledge Check.md` (where x is the next sequential letter)
   - Example structure:
     ```
     Chapter 5/
     ├── 5 – Core Project Management Concepts and Tools.md
     ├── 5a – Stakeholders and Communication.md
     ├── 5b – Scope, Schedule, and Cost.md
     ├── 5c – Quality.md
     ├── 5d – Risk Management.md
     ├── 5e – Data-Informed Decision-Making.md
     ├── 5f – AI and Emerging Technologies.md
     ├── 5g – Professional Responsibility and Ethics.md
     └── 5h – Knowledge Check.md
     ```

### Special Chapters
- `Chapter 0/`: Contains `00-Outline.md` (master outline)
- `Chapter 20/`: AI Essentials for Project Professionals
- `Chapter 21/`: Practice Exam set (questions and answers)
- `Chapter 98/`: Appendices (formulas, definitions, sources)
- `Chapter 99/`: Resources and reference materials

## File Naming Conventions

**CRITICAL:** Use en dashes (–) not hyphens (-) in file names:
- Correct: `5a – Stakeholders and Communication.md`
- Incorrect: `5a - Stakeholders and Communication.md`

When adding sections:
- Use sequential lettering (a, b, c...) for sub-sections, not numbers
- Knowledge Checks always use the next letter after the last content section
- Update `Chapter 0/00-Outline.md` immediately to maintain synchronization

## Content Development

### Recurring Narratives

The guide uses **three consistent project scenarios** throughout to illustrate concepts across different delivery approaches:

1. **Predictive (Waterfall):** Office renovation project
   - 18-month timeline, fixed scope, regulatory requirements
   - Stakeholders: CEO, CFO, Facilities, Employees, Regulators

2. **Agile:** Expense reporting system
   - Iterative development, evolving requirements
   - Product owner, development team, end users

3. **Hybrid:** Global transformation program
   - Large-scale organizational change
   - Mix of predictive planning and agile execution

These narratives follow a character named **Sarah** through different project management scenarios.

### Writing Style

- **Tone:** Professional, instructional, encouraging, PMI-aligned
- **Structure:** Concept → Practical Example → Scenario Application
- **Alignment:** Strict adherence to PMI standards (PMBOK Guide, Agile Practice Guide, Process Groups: A Practice Guide)
- **Clarity:** Distinguish between "industry common practice" and "PMI best practice"
- **Cross-references:** Reference other chapters rather than repeating content

### Knowledge Check Format

Practice questions follow this structure:
- Scenario stem (realistic project situation)
- Four options (one correct, three distractors)
- Detailed explanation stating why the correct answer is best and why distractors are weaker
- Questions integrate multiple concepts and test application, not memorization

> **Note:** Part 6 now includes AI (Chapter 20) and practice exams (Chapter 21), with practice exams as the final chapter.

## Common Commands

### Finding Content
```bash
# Search for a topic across all chapters
rg "risk management" Chapter*/

# Find all files in a specific chapter
ls "Chapter 12"

# Count total lines in a chapter
wc -l "Chapter 5"/*.md
```

### Verification
```bash
# Check chapter structure
ls -1 "Chapter 5"

# View file to check formatting
cat "Chapter 5/5a – Stakeholders and Communication.md"

# Search for cross-references
rg "Chapter [0-9]+" --type md
```

### Git Workflow
```bash
# Check status
git status

# Stage and commit
git add .
git commit -m "Add [description]"

# View recent commits
git log --oneline -5
```

## Development Guidelines

### When Adding Content

1. **Read existing structure first:** Always check the main chapter file and existing sub-sections to understand the current organization
2. **Update 00-Outline.md:** Immediately update the master outline when adding/modifying chapters
3. **Maintain consistency:** Use the established recurring narratives (Sarah's projects)
4. **Follow the learning loop:** Concept → Practical Example → Scenario Application
5. **Cross-reference:** Link to related chapters rather than duplicating content

### When Editing Content

1. **Preserve en dashes:** Maintain the `–` character in file names
2. **Check heading hierarchy:** Ensure proper Markdown heading structure (#, ##, ###)
3. **Validate cross-references:** Ensure chapter and section references are accurate
4. **Maintain voice:** Keep professional, instructional tone aligned with PMI standards

### Quality Checks

- Proofread for clarity and tense consistency
- Ensure PMI alignment (not just industry best practice)
- Validate that Knowledge Check questions follow the established format
- Check that examples use the recurring project narratives
- Verify all cross-references point to correct chapters/sections

## Content Status

### Completed Parts
- Part 1: Orientation and Exam Overview (Chapters 1-2)
- Part 2: Foundations (Chapters 3-5)
- Part 3: People Domain (Chapters 6-9)
- Part 4: Process Domain (Chapters 10-18)
- Part 5: Business Environment Domain (Chapters 15-18)
- Part 6: Practice Exams (Chapter 19-20)

### Structure Notes
- No build process or compilation step (pure Markdown)
- Verification is manual: proofreading and Markdown viewing
- Git history shows iterative development with clear, imperative commit messages

## Important Reminders

1. **Always update Chapter 0/00-Outline.md** when modifying structure
2. **Use en dashes (–) not hyphens (-)** in file names
3. **Consult GEMINI.md and AGENTS.md** for detailed style guidelines
4. **Reference recurring narratives** for consistency across chapters
5. **Align with PMI standards**, not generic project management advice
