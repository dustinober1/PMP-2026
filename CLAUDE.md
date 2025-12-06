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
├── Chapter 6/                          # Modular structure with sub-sections
│   ├── 6 – Building and Leading Teams.md (TOC & Integration)
│   ├── 6a – Team Composition and Development.md
│   ├── 6b – Roles, Responsibilities, and Authority.md
│   ├── 6c – Influence, Power, and Decision-Making.md
│   ├── 6d – Conflict Resolution and Problem-Solving.md
│   ├── 6e – Motivation and Engagement.md
│   ├── 6f – Servant Leadership and Coaching.md
│   └── 6g – Knowledge Check.md
│
├── Chapter 7/                          # Modular structure with sub-sections
│   ├── 7 – Stakeholder and Communication Mastery.md (TOC & Integration)
│   ├── 7a – Identifying and Analyzing Stakeholders.md
│   ├── 7b – Planning Stakeholder Engagement.md
│   ├── 7c – Developing Communication Strategies.md
│   ├── 7d – Facilitating Difficult Conversations.md
│   ├── 7e – Building Influence and Trust.md
│   └── 7f – Knowledge Check.md
│
├── Chapter 8/                          # Modular structure with sub-sections
│   ├── 8 – Conflict, Negotiation, and Decision-Making.md (TOC & Integration)
│   ├── 8a – Understanding Conflict.md
│   ├── 8b – Conflict Resolution Techniques.md
│   ├── 8c – Negotiation Strategies.md
│   ├── 8d – Decision-Making Models.md
│   └── 8e – Knowledge Check.md
│
├── Chapter 9/                          # Modular structure with sub-sections [COMPLETE]
│   ├── 9 – Coaching, Mentoring, and Servant Leadership.md (TOC & Integration)
│   ├── 9a – Leadership Styles and Their Impact.md
│   ├── 9b – Servant Leadership in Practice.md
│   ├── 9c – Coaching and Developing Others.md
│   ├── 9d – Mentoring and Continuous Learning.md
│   └── 9e – Knowledge Check.md
│
├── Chapter 10/                         # Modular structure with sub-sections [COMPLETE]
│   ├── 10 – Initiating and Planning.md (TOC & Integration)
│   ├── 10a – Business Case and Project Justification.md
│   ├── 10b – Understanding Constraints, Assumptions, and Dependencies.md
│   ├── 10c – Developing the Project Charter.md
│   ├── 10d – Selecting the Delivery Approach.md
│   ├── 10e – Roadmapping and Release Planning.md
│   └── 10f – Knowledge Check.md
│
├── Chapter 11/                         # Modular structure with sub-sections [COMPLETE]
│   ├── 11 – Planning for Value Delivery.md (TOC & Integration)
│   ├── 11a – Requirements Collection and Refinement.md
│   ├── 11b – Scope Definition and Baseline.md
│   ├── 11c – Schedule Planning and Work Breakdown.md
│   ├── 11d – Cost Estimation and Budgeting.md
│   ├── 11e – Quality Planning and Acceptance Criteria.md
│   └── 11f – Resource and Procurement Planning.md
│
└── [Chapters 12-21 to follow the same pattern]
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
- Knowledge check file: `Chapter 5/5h – Knowledge Check.md` (contains all practice questions and answers, follows after final sub-section letter)
- **Naming**: Use letters (a, b, c...) for sub-sections, not numbers. Knowledge Check gets the next sequential letter after the last sub-section.

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
   - Knowledge check: `Chapter N/N[NextLetter] – Knowledge Check.md` (where NextLetter is the sequential letter after the final sub-section)
     - Example: Chapter 5 has sub-sections 5a-5g, so Knowledge Check is `5h – Knowledge Check.md`
     - Example: Chapter 6 has sub-sections 6a-6f, so Knowledge Check is `6g – Knowledge Check.md`
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

**Completed Chapters** (as of December 2025):
- **Part 1 – Orientation**: Chapters 1-2 (foundational chapters)
- **Part 2 – Foundations**: Chapters 3-5 (core concepts, ways of working)
- **Part 3 – People Domain**: Chapters 6-9 (team building, leadership, communication, conflict, coaching)
- **Part 4 – Process Domain**: Chapters 10-15 (initiating, planning, risk/issues/change management, executing, monitoring/controlling/closing, strategy/portfolio alignment)
- **Part 5 – Business Environment Domain**: Chapter 16 (benefits, value, and sustainability)

Recent significant commits:
- Chapter 16 – Benefits, Value, and Sustainability (completed) – modular structure with 6 sub-sections (16a-16f)
  - Emphasizes benefits realization, value delivery, long-term vs. short-term trade-offs, ESG/sustainability, and stakeholder value alignment
- Chapter 15 – Strategy and Portfolio Alignment (completed) – modular structure with 6 sub-sections (15a-15f)
- Chapters 13-14: Executing and Delivering Work; Monitoring, Controlling, and Closing (completed)
- Chapter 12 – Risk, Issues, and Change Management (completed) – modular structure with 5 sub-sections

**Next Chapters to Complete**:
- Chapter 17 – Compliance, Risk, and Governance (Part 5 – Business Environment)
- Chapter 18 – Organizational Change and Readiness (Part 5 – Business Environment)

## Guidance for Chapters 12-14 (Process Domain – Execution and Control)

### Chapter 12 – Risk, Issues, and Change Management

**Overview**: Risk is a constant in projects. This chapter teaches how to identify, analyze, respond to, and monitor risks—with different approaches for predictive vs. agile vs. hybrid contexts.

**Sub-Sections** (5-6 sections expected):
- 12a – Understanding Risk (definition, types, risk appetite, psychologically realistic framing)
- 12b – Risk Identification and Analysis (probability, impact, qualitative vs. quantitative analysis)
- 12c – Risk Response Strategies (avoid, mitigate, accept, exploit, enhance)
- 12d – Issue Management (issues vs. risks, escalation, resolution)
- 12e – Change Management (organizational change, resistant to change, governance)
- 12f – Knowledge Check

**Key Themes**:
- Risk is inevitable and should be actively managed, not ignored
- Different delivery approaches require different risk management approaches
- Predictive: Detailed risk planning upfront, change control board
- Agile: Continuous risk identification, adaptive responses, embrace change
- Hybrid: Program-level risk governance, team-level adaptive responses
- Issues are realized risks; need clear escalation and resolution processes
- Change management is both technical and organizational

**Narrative Continuity**:
- Sarah faces unexpected challenges across her three projects; she learns to anticipate, plan for, and respond to risks
- Her teams develop confidence and psychological safety by having clear risk and issue processes

### Chapter 13 – Executing and Delivering Work

**Overview**: This chapter covers the actual execution of project work—coordinating teams, delivering value incrementally, managing quality in real-time, and adjusting course when needed.

**Sub-Sections** (6-7 sections expected):
- 13a – Coordinating Team Execution (daily standup, work coordination, progress tracking)
- 13b – Quality Assurance and Testing (continuous quality, defect management, testing in agile vs. predictive)
- 13c – Managing Scope During Execution (scope validation, preventing scope creep, change requests)
- 13d – Vendor and Procurement Management (vendor performance, contract management, relationships)
- 13e – Team Performance and Accountability (motivating teams, accountability, recognition)
- 13f – Knowledge Check

**Key Themes**:
- Execution is where plans meet reality; adaptability is critical
- Continuous quality is better than end-phase testing
- Scope creep happens during execution; must be actively managed
- Vendor performance directly impacts project success
- Team morale and accountability drive execution success
- Different ways of working require different execution rhythms

**Narrative Continuity**:
- Sarah's teams are now executing; she faces real-time challenges and must balance control with autonomy
- Shows her leadership principles (from Chapter 9) in action during execution
- Demonstrates how planning (Chapter 11) becomes reality

### Chapter 14 – Monitoring, Controlling, and Closing

**Overview**: This chapter covers tracking progress, controlling changes and scope, managing stakeholder expectations throughout execution, and properly closing projects to capture lessons and transition value.

**Sub-Sections** (6-7 sections expected):
- 14a – Tracking Progress and Performance (metrics, status reporting, earned value)
- 14b – Schedule and Cost Control (variance analysis, forecasting, corrective actions)
- 14c – Change Control and Configuration Management (governance, formal control, impacts)
- 14d – Stakeholder Management During Execution (communication, expectation management, escalation)
- 14e – Project Closure and Transition (final deliverables, lessons learned, benefits realization)
- 14f – Knowledge Check

**Key Themes**:
- Visibility and transparency drive successful control
- Earned value and variance analysis inform decision-making
- Change control prevents chaos while enabling responsiveness
- Stakeholder communication continues throughout execution
- Proper closure captures organizational learning
- Different contexts require different control intensity
- Benefits realization is the ultimate measure of success

**Narrative Continuity**:
- Sarah and her teams have executed; now they monitor, report, and course-correct
- Demonstrates how servant leadership (Chapter 9) shows up in accountability
- Shows the value of the planning and initiation foundation
- Leads to lessons learned and organizational improvement

### Development Approach for Chapters 12-14

When assigning agents to write these chapters:

1. **Use the three-project narrative** consistently:
   - Office Renovation (Predictive): Long-lead risks, vendor delays, regulatory changes, end-phase issues
   - Expense System (Agile): Scope evolution, quality gates in sprints, team coordination, rapid feedback
   - Transformation Program (Hybrid): Program-level risk governance, team-level agility, organizational resistance, phased closure

2. **Emphasize Predictive/Agile/Hybrid contrasts**:
   - Risk management looks very different across approaches
   - Issue escalation processes differ by governance model
   - Change control is rigid in predictive, fluid in agile, balanced in hybrid

3. **Include scenario-based practice questions** that test real project dilemmas:
   - Not just definitions, but "what would you do" scenarios
   - Require trade-off thinking (schedule vs. quality, scope vs. cost)
   - Use integration questions that combine multiple concepts

4. **Maintain consistency**:
   - Each sub-section: 1,500-2,500 words
   - 3-4 examples per sub-section using Sarah's projects
   - Learning objectives at the start
   - Clear connections to previous chapters

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
