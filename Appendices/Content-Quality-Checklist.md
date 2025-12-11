# Content Quality Checklist

## Overview

This checklist ensures consistency, accuracy, and quality across all PMP study guide content. Use this document before submitting new content or modifications to maintain the high standards readers expect.

## Pre-Submission Checklist

### Link Validation
- [ ] All internal Markdown links tested and resolve correctly
- [ ] Links use relative paths (e.g., `../Chapter 5/5a – Stakeholders and Communication.md`)
- [ ] Links to Appendix A formulas include anchor tags (e.g., `#cost-performance-index-cpi`)
- [ ] Links to Appendix C tools include anchor tags
- [ ] Cross-references are bidirectional where specified in design
- [ ] No broken links or references to non-existent files

### Terminology Consistency
- [ ] All key terms match the Terminology Master List
- [ ] PMI-standard terminology used throughout (not colloquial alternatives)
- [ ] Acronyms defined on first use in each chapter
- [ ] Consistent capitalization of key terms (e.g., "Project Manager" vs. "project manager")
- [ ] Domain names capitalized correctly (People, Process, Business Environment)
- [ ] Scenario names match exactly: "Office Renovation," "Expense System," "Transformation Program"

### Formula Accuracy
- [ ] All formulas verified with calculator or spreadsheet
- [ ] Variable definitions match standard PMI usage
- [ ] Worked examples use realistic values
- [ ] Calculations show intermediate steps where helpful
- [ ] Results rounded appropriately (typically 2 decimal places)
- [ ] Common mistakes section included for complex formulas

### Domain Weight Alignment
- [ ] Knowledge check questions distributed approximately: People 33%, Process 41%, Business Environment 26%
- [ ] Practice exam questions distributed exactly: 61 People, 76 Process, 48 Business Environment
- [ ] Study plans allocate time proportional to domain weights
- [ ] Domain tags present on all practice questions

### Content Structure
- [ ] Required sections present per document template
- [ ] Heading hierarchy follows Markdown conventions (single `#` for title, progressive depth)
- [ ] Consistent formatting within document type (all flashcards formatted identically, etc.)
- [ ] File naming follows numeric-prefix and en dash pattern
- [ ] Line wrapping preserved where reasonable

### Cross-References and Navigation
- [ ] "Related Topics" sections added where specified
- [ ] Chapter references included in answer explanations
- [ ] Glossary terms linked to definitions
- [ ] Scenario references link to Scenario Index
- [ ] Formula mentions link to Appendix A

### Examples and Scenarios
- [ ] Examples are exam-relevant and practical
- [ ] Scenarios align with PMP 2026 exam focus
- [ ] Concrete examples preferred over generic anecdotes
- [ ] Examples illustrate concepts clearly
- [ ] Scenario usage consistent with Scenario Index

## Peer Review Checklist

### Content Accuracy
- [ ] Content aligns with PMI standards and PMBOK 7th Edition
- [ ] Information reflects 2026 ECO requirements
- [ ] No contradictions with existing chapters
- [ ] Technical accuracy verified
- [ ] Best practices align with PMI philosophy

### Clarity and Helpfulness
- [ ] Explanations are clear and understandable
- [ ] Reasoning patterns explicitly stated
- [ ] "Why" explained, not just "what"
- [ ] Ambiguous questions clarified in explanations
- [ ] Tone is instructional, practical, and exam-focused

### Navigation and User Experience
- [ ] Cross-references enhance understanding
- [ ] Navigation between related topics is intuitive
- [ ] Study paths follow logical progression
- [ ] Quick reference materials are truly quick to scan
- [ ] Flashcards test recall effectively

### Completeness
- [ ] All required elements present per correctness properties
- [ ] No placeholder text or TODOs remaining
- [ ] Examples complete with full worked solutions
- [ ] Answer keys include all required explanations

## Document-Specific Validation

### Study Plans
- [ ] Weekly breakdown with specific chapter assignments
- [ ] Time estimates included for each chapter/section
- [ ] Checkpoint milestones at reasonable intervals
- [ ] Domain balance reflects exam weights
- [ ] Practice question targets specified

### Practice Exams
- [ ] Exactly 185 questions
- [ ] Domain distribution: 61 People, 76 Process, 48 Business Environment
- [ ] Variety of question types (scenario-based, definition, application)
- [ ] Realistic difficulty level
- [ ] Answer key with detailed explanations for all questions
- [ ] Chapter references in all answer explanations

### Knowledge Checks
- [ ] Domain tags on every question
- [ ] ECO task references where applicable
- [ ] Detailed explanations with reasoning patterns
- [ ] Chapter cross-references in explanations
- [ ] Domain distribution summary table included

### Flashcards
- [ ] Question/answer format consistent
- [ ] Domain tags present
- [ ] Chapter references included
- [ ] Organized by domain and chapter
- [ ] Exportable format (simple Q/A structure)

### Formula Entries (Appendix A)
- [ ] Formula name and equation
- [ ] All variables defined
- [ ] At least one worked example
- [ ] "When to Use" guidance
- [ ] Common mistakes section
- [ ] Related formulas linked
- [ ] Chapter references included
- [ ] Categorized by knowledge area

### Tools Index Entries (Appendix C)
- [ ] Tool name and brief description
- [ ] All chapter locations listed
- [ ] Context labels (predictive/agile/hybrid/all)
- [ ] Cross-references for alternate names
- [ ] Organized by category

### Concept Map
- [ ] Mermaid diagrams render correctly
- [ ] Relationships accurately depicted
- [ ] Links to chapters included
- [ ] Domain organization clear
- [ ] Context annotations for delivery approaches

### Quick Reference Guide
- [ ] 1-2 page summaries per chapter
- [ ] Bullet points, tables, visual aids used
- [ ] High-frequency exam topics emphasized
- [ ] "Must remember" sections included
- [ ] Comparison tables for confused concepts

## Issues Log Process

When quality issues are identified:

1. **Document the Issue**
   - File: [filename]
   - Issue type: [link validation / terminology / formula / structure / other]
   - Description: [clear description of the problem]
   - Severity: [critical / major / minor]

2. **Assign Responsibility**
   - Owner: [who will fix it]
   - Target date: [when it should be resolved]

3. **Track Resolution**
   - Status: [open / in progress / resolved]
   - Resolution notes: [what was done to fix it]
   - Verification: [how it was verified as fixed]

4. **Prevent Recurrence**
   - Add to checklist if it's a common issue
   - Update templates if structural
   - Update Terminology Master List if terminology-related

## Validation Steps by Document Type

### New Chapter Content
1. Run through Pre-Submission Checklist
2. Verify terminology against master list
3. Test all links
4. Check cross-references are bidirectional
5. Peer review for accuracy and clarity

### Enhanced Existing Content
1. Verify changes don't break existing links
2. Ensure terminology remains consistent
3. Check that additions match existing tone and style
4. Verify cross-references updated in both directions
5. Test navigation from and to modified sections

### New Study Aid Documents
1. Verify against document template
2. Check completeness per correctness properties
3. Test all chapter references
4. Verify formatting consistency
5. Peer review for usability

### Practice Questions
1. Verify domain distribution
2. Check answer key completeness
3. Verify chapter references in explanations
4. Test for clarity and realistic difficulty
5. Ensure no ambiguous questions without clarification

## Final Quality Gate

Before considering any enhancement complete:

- [ ] All items in Pre-Submission Checklist passed
- [ ] Peer review completed with no major issues
- [ ] All correctness properties satisfied
- [ ] No open critical or major issues in issues log
- [ ] README.md updated if new documents added
- [ ] CHANGELOG.md updated with changes

## Notes

- This checklist evolves as we identify new quality patterns
- Suggest improvements via pull request
- When in doubt, prioritize clarity and accuracy over brevity
- Remember: readers are preparing for a high-stakes exam—quality matters
