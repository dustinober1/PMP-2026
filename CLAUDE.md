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
6. **Use proper citations:** Reference PMI sources (PMBOK Guide, Agile Practice Guide, etc.)
7. **Include realistic scenarios:** Base examples on practical project management situations

### When Editing Content

1. **Preserve en dashes:** Maintain the `–` character in file names
2. **Check heading hierarchy:** Ensure proper Markdown heading structure (#, ##, ###)
3. **Validate cross-references:** Ensure chapter and section references are accurate
4. **Maintain voice:** Keep professional, instructional tone aligned with PMI standards
5. **Use consistent terminology:** Adhere to PMI lexicon (see Appendix A)
6. **Check tense consistency:** Use present tense for concepts, past tense for examples
7. **Maintain readability:** Use short paragraphs, bullet points, and clear transitions
8. **Preserve formatting**: Keep bold for key terms, italics for emphasis, code blocks for processes

### Content Requirements

#### Educational Structure
Each section should follow this pattern:
1. **Concept Introduction**: Clear definition and explanation
2. **PMI Alignment**: How PMI views this topic
3. **Practical Example**: Real-world application
4. **Scenario Integration**: Apply to Sarah's projects
5. **Key Takeaways**: Summary of main points

#### Knowledge Check Standards
- **Scenario-based**: Present realistic project situations
- **Four options**: One correct, three plausible distractors
- **Detailed explanations**: Why correct answer is best and others are not
- **Integration**: Test multiple concepts, not just memorization
- **Difficulty**: Mix of straightforward and complex scenarios

#### Cross-Reference Guidelines
- **Primary references**: Link to foundational chapters first
- **Domain connections**: Show how topics relate across People/Process/Business Environment
- **Forward references**: Mention where topics will be expanded
- **Backward references**: Refer to previously covered prerequisites
- **Avoid duplication**: Link instead of repeating content

### Quality Checks

#### Content Validation
- **PMI Alignment**: Ensure content matches PMI standards, not just industry practice
- **Accuracy**: Double-check statistics, process names, and terminology
- **Completeness**: Cover all aspects mentioned in chapter objectives
- **Clarity**: Define all technical terms on first use
- **Relevance**: Ensure all content directly supports PMP exam preparation

#### Format Validation
- **Markdown syntax**: Verify all links, headers, and formatting work
- **File structure**: Ensure modular chapters follow naming conventions
- **Navigation**: Check TOC links work properly
- **Consistency**: Validate formatting patterns across chapters
- **File size**: Keep files manageable (consider splitting very long sections)

#### Educational Effectiveness
- **Learning objectives**: Verify each section meets stated objectives
- **Progression**: Ensure logical flow from simple to complex concepts
- **Examples**: Check that examples illustrate concepts clearly
- **Practice questions**: Validate questions test understanding, not recall
- **Retention aids**: Include summaries, key points, and memory aids

## Content Status

### Completed Parts
- Part 1: Orientation and Exam Overview (Chapters 1-2)
- Part 2: Foundations (Chapters 3-5)
- Part 3: People Domain (Chapters 6-9)
- Part 4: Process Domain (Chapters 10-14)
- Part 5: Business Environment Domain (Chapters 15-18)
- Part 6: AI Essentials and Practice Exams (Chapters 20-21)

### Domain Coverage
- **People Domain (33%)**: Chapters 6-9 cover team leadership, stakeholder engagement, communication, and conflict resolution
- **Process Domain (41%)**: Chapters 10-14 cover scope, schedule, cost, quality, risk, procurement, and change management
- **Business Environment Domain (26%)**: Chapters 15-18 cover organizational structure, compliance, value delivery, and strategic alignment
- **AI Integration**: Chapter 5f and Chapter 20 provide dedicated AI project management content

### Special Content
- **AI Project Management**: Comprehensive coverage in Chapter 5f (basics) and Chapter 20 (advanced)
- **Professional Ethics**: Integrated throughout, with dedicated sections in Chapter 5g
- **Practice Exams**: Full exam simulation in Chapter 21 with detailed answer explanations
- **Appendices**: Reference materials in Chapter 98, resources in Chapter 99

### Structure Notes
- **No build process**: Pure Markdown content - no compilation needed
- **Manual verification**: Content validation through proofreading and Markdown viewing
- **Git history**: Clear, imperative commit messages tracking iterative development
- **Cross-platform**: Works on any system with Markdown support
- **Version control**: Git tracks all content changes for transparency

## Working with This Repository

### Best Practices for Educational Content
- **Read before writing**: Always survey existing content to avoid duplication
- **Maintain voice**: Keep consistent PMI-aligned, professional tone throughout
- **Use narratives**: Leverage Sarah's three project scenarios for examples
- **Link extensively**: Create web of knowledge, not isolated content blocks
- **Test learning**: Validate practice questions actually test understanding

### Common Workflows

#### Adding a New Section
```bash
# 1. Read the chapter introduction to understand scope
cat "Chapter 5/5 – Core Project Management Concepts and Tools.md"

# 2. Check existing sections to avoid overlap
ls -1 "Chapter 5"

# 3. Create new section with proper naming
touch "Chapter 5/5i – New Topic.md"

# 4. Update the master outline immediately
vim "Chapter 0/00-Outline.md"

# 5. Add content following educational structure
# (concept → PMI view → example → scenario → takeaways)

# 6. Add cross-references to related sections
rg "related topic" Chapter*/

# 7. Update chapter introduction TOC
vim "Chapter 5/5 – Core Project Management Concepts and Tools.md"

# 8. Commit with clear message
git add .
git commit -m "Add 5i – New Topic section with examples and cross-references"
```

#### Updating Existing Content
```bash
# 1. Search for content locations
rg "stakeholder analysis" Chapter*/

# 2. Read affected sections
cat "Chapter 5a/5a – Stakeholders and Communication.md"

# 3. Make targeted edits
vim "Chapter 5a/5a – Stakeholders and Communication.md"

# 4. Update cross-references if needed
rg "Chapter 5a" Chapter*/

# 5. Validate formatting
cat "Chapter 5a/5a – Stakeholders and Communication.md" | head -20

# 6. Commit changes
git add .
git commit -m "Update stakeholder analysis section with new PMI guidance"
```

### Content Validation Checklist
- [ ] PMI terminology is correct and consistent
- [ ] All chapter references are accurate
- [ ] Examples use Sarah's projects appropriately
- [ ] Learning objectives are met
- [ ] Cross-references add value without duplication
- [ ] Markdown formatting is clean and consistent
- [ ] File naming follows en dash convention
- [ ] Knowledge checks follow established format

## Important Reminders

1. **This is NOT a code repository** - no compilation, testing, or deployment
2. **Always update Chapter 0/00-Outline.md** when modifying structure
3. **Use en dashes (–) not hyphens (-)** in file names
4. **Consult GEMINI.md and AGENTS.md** for detailed style guidelines
5. **Reference recurring narratives** for consistency across chapters
6. **Align with PMI standards**, not generic project management advice
7. **Think educationally** - every addition should help someone pass the PMP exam
8. **Maintain quality** - this is a professional study guide, not casual content
