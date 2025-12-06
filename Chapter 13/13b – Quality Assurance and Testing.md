# 13b – Quality Assurance and Testing

## Learning Objectives

By the end of this section, you will be able to:

1. Distinguish between quality assurance (preventing defects) and quality control (detecting defects)
2. Implement continuous quality practices in agile contexts vs. end-phase testing in predictive contexts
3. Design effective quality gates and acceptance criteria for different ways of working
4. Manage defects proactively through prevention, detection, and correction
5. Apply appropriate testing strategies (unit, integration, system, acceptance) based on project context
6. Balance speed of delivery with quality standards
7. Create a culture where quality is everyone's responsibility, not just QA's job

## Introduction: Quality Cannot Be Inspected In

One of the most important lessons in project management is this: **Quality cannot be inspected in—it must be built in from the beginning.**

Traditional thinking treats quality as a separate phase: build first, test later. This approach is expensive, slow, and ineffective. Defects caught late in the project are exponentially more expensive to fix than defects caught early. A requirements defect caught during development costs 10x more to fix than if caught during requirements review. The same defect caught during production costs 100x more.

Modern quality management emphasizes **prevention over detection**:
- **Quality Assurance (QA)**: The process of preventing defects through good practices, standards, and process improvement
- **Quality Control (QC)**: The process of detecting defects through inspections, testing, and reviews

Both are important, but PMI's perspective (and the PMP exam's) prioritizes prevention. The best defect is the one that never occurs.

Different ways of working approach quality differently:
- **Predictive**: Quality gates at phase boundaries, formal inspections, end-phase testing
- **Agile**: Continuous quality, test-driven development, automated testing, "done" means tested
- **Hybrid**: Program-level quality standards with team-level continuous quality practices

Sarah's three projects illustrate these differences in practice.

## Quality in Predictive Projects: Gates, Inspections, and Validation

Predictive projects use structured quality gates to ensure that work meets standards before proceeding to the next phase. Quality is validated at defined checkpoints.

### Quality Gates

A quality gate is a formal review point where deliverables are evaluated against acceptance criteria. Work cannot proceed past the gate until quality standards are met.

**Example – Office Renovation**: Sarah's construction project has four major quality gates:

**Gate 1 – Foundation Inspection**
- **Criteria**: Foundation meets structural specifications, passed by city building inspector
- **Process**: Inspector visits site, reviews foundation, signs off
- **Decision**: If passed, framing can begin. If failed, foundation must be corrected and re-inspected.

**Gate 2 – Framing Inspection**
- **Criteria**: Wall framing is square, plumb, and meets structural code
- **Process**: Contractor self-inspects, then city inspector validates
- **Decision**: If passed, mechanical/electrical/plumbing rough-in can begin

**Gate 3 – Rough-In Inspection**
- **Criteria**: All mechanical, electrical, and plumbing systems are installed per code and plans
- **Process**: Each trade (HVAC, electrical, plumbing) is inspected separately, then a combined inspection
- **Decision**: If passed, drywall can be installed (covering the systems)

**Gate 4 – Final Inspection**
- **Criteria**: All work is complete, safe, and meets code
- **Process**: Comprehensive walkthrough by city inspector
- **Decision**: If passed, occupancy permit is issued

These gates are non-negotiable. Sarah cannot skip a gate or proceed without approval. This ensures quality standards are met at each phase.

### The Cost of Quality Gates: A Real Scenario

**Week 8 – Gate 2 (Framing Inspection)**: Sarah schedules the framing inspection for Friday, planning to start rough-in work on Monday. The inspector identifies a problem: several wall sections are not properly braced per seismic code. This is a critical structural issue.

**Sarah's options**:
1. **Fix it properly**: Contractor adds additional bracing. Cost: $3,000. Schedule impact: 3 days.
2. **Request a variance**: Ask the building department to approve a less stringent standard. Unlikely to be approved and damages relationship with inspector.
3. **Ignore it**: Proceed without approval. This is illegal and exposes the project to massive liability.

**Sarah's decision**: Fix it properly. The $3,000 cost and 3-day delay are painful, but far less than the cost of a structural failure or having to tear out drywall later to add bracing.

**Lesson**: Quality gates create short-term pain but prevent long-term disasters.

### Inspections and Reviews

Beyond formal gates, predictive projects use ongoing inspections to catch defects early.

**Example – Office Renovation**: Sarah schedules weekly quality walk-throughs with the general contractor. During one walk-through, she notices that some electrical outlet boxes are installed at inconsistent heights. This doesn't violate code, but it looks unprofessional.

Sarah brings this to the contractor's attention immediately. Because the drywall isn't installed yet, the contractor easily adjusts the outlet heights at minimal cost. If she had waited until final inspection, fixing this would require cutting into finished drywall—far more expensive.

**Proactive inspection prevents expensive rework.**

### Testing at Phase End

Predictive projects often concentrate testing at the end of development phases. This approach has advantages (comprehensive, formal) and disadvantages (late defect detection, expensive fixes).

**Example – Office Renovation**: The HVAC system is fully installed and commissioned in Week 12. The system testing process:

**1. Contractor Testing**: HVAC contractor tests the system internally—airflow, temperature balance, noise levels
**2. Third-Party Commissioning**: Independent commissioning agent tests the system against design specifications
**3. Performance Validation**: System runs for 72 hours under load to verify performance

This comprehensive testing catches issues, but the timing is late in the project. When the commissioning agent identifies that one zone is getting insufficient airflow, fixing it requires reopening ceiling tiles and rebalancing the entire system—expensive because finish work is already complete.

**Lesson**: Even in predictive projects, earlier testing (pre-drywall) would have caught this issue when it was cheaper to fix.

## Quality in Agile Projects: Continuous Assurance and Built-In Quality

Agile projects embed quality into every sprint. The definition of "Done" includes testing. Teams use automated testing, continuous integration, and rapid feedback to catch defects immediately.

### Definition of Done

The Definition of Done (DoD) is a shared understanding of what "complete" means. Work is not done until all DoD criteria are met, including quality checks.

**Example – Expense System**: The development team's Definition of Done includes:

1. **Code complete**: Feature is fully implemented per acceptance criteria
2. **Unit tests written and passing**: Each code module has automated tests covering key scenarios
3. **Integration tests passing**: The feature works with other system components
4. **Code reviewed**: Another team member has reviewed the code for quality and standards
5. **Acceptance criteria validated**: Product Owner confirms the feature works as expected
6. **No known defects**: Any bugs found during testing are fixed
7. **Documentation updated**: User documentation and technical docs reflect the new feature

**Sprint 7 Example**: A developer completes the mobile approval feature on Wednesday of a two-week sprint. But the code review identifies performance issues—the app is slow when loading large expense reports. The developer refactors the code for performance. By Friday, all DoD criteria are met. The feature is truly "Done."

If the team had skipped the code review or deferred the performance fix, the feature would have technical debt and potential production issues. The DoD prevents that.

### Test-Driven Development (TDD)

TDD is a practice where developers write automated tests *before* writing the code. This ensures that code is testable and meets requirements.

**TDD Process**:
1. Write a failing test that describes the desired behavior
2. Write the minimum code needed to make the test pass
3. Refactor the code to improve quality while keeping tests passing

**Example – Expense System**: A developer is implementing the expense approval workflow.

**Step 1 – Write the test**:
```
Test: When a manager approves an expense, the expense status should change to "Approved" and the employee should receive a notification.
```

**Step 2 – Write the code**:
The developer writes code that changes status and sends notification.

**Step 3 – Refactor**:
The developer refactors to improve code clarity and performance, running the test after each change to ensure it still passes.

This approach prevents defects before they occur. If the notification code breaks in the future, the automated test immediately catches it.

### Continuous Integration and Automated Testing

Continuous Integration (CI) is a practice where code changes are merged frequently (multiple times per day) and automatically tested. This catches integration defects immediately.

**Example – Expense System**: The team uses a CI pipeline:

1. **Developer commits code** to the shared repository
2. **Automated build** compiles the code and runs all unit tests (5 minutes)
3. **Automated integration tests** run against a test environment (15 minutes)
4. **Automated security scans** check for vulnerabilities (10 minutes)
5. **Results reported** to the team via Slack and dashboard

If any step fails, the team is notified immediately. The developer who committed the code fixes the issue within minutes.

**Scenario – Broken Build**: On Tuesday morning, Developer 1 commits code that breaks a unit test. Within 5 minutes, the CI system alerts the team. Developer 1 immediately fixes the issue. Total time lost: 10 minutes.

**Contrast with manual testing**: If the team tested manually at the end of the sprint (two weeks later), identifying which code change broke the test would be difficult and time-consuming.

**Continuous integration prevents integration defects from accumulating.**

### Acceptance Criteria and Sprint Reviews

Each user story has specific acceptance criteria—testable conditions that must be met for the story to be accepted.

**Example – Expense System**: User story for mobile approval feature:

**As a manager, I want to approve expenses on my mobile device so I can respond quickly even when I'm away from my desk.**

**Acceptance Criteria**:
1. Manager can view pending expense requests on mobile app
2. Manager can see expense details (amount, date, category, receipt image)
3. Manager can approve or reject with one tap
4. Manager can add comments when rejecting
5. Employee receives notification of approval/rejection within 1 minute
6. The approval is recorded in the system audit log

During the sprint review, the Product Owner validates each criterion. If any criterion isn't met, the story isn't accepted and returns to the backlog.

This rapid validation prevents defects from reaching production and ensures the team builds what stakeholders actually need.

### Quality Retrospectives

The retrospective (Chapter 13a) is a quality assurance tool. Teams reflect on quality issues and continuously improve processes to prevent future defects.

**Example – Expense System**: In the Sprint 6 retrospective, the team noticed that several bugs were caused by misunderstanding requirements. Root cause: The Product Owner's user stories lacked sufficient detail.

**Action**: Starting in Sprint 7, the Product Owner includes mockups and detailed examples in user stories. The result: 60% reduction in requirement-related defects in Sprint 7.

**Continuous improvement drives quality.**

## Quality in Hybrid Projects: Standards and Autonomy

Hybrid projects balance program-level quality standards with team-level flexibility in how those standards are met.

### Program-Level Quality Standards

The program defines non-negotiable quality standards that all workstreams must meet, regardless of their delivery approach.

**Example – Transformation Program**: Sarah establishes program-level quality standards:

1. **Security**: All systems must pass security review before production deployment
2. **Accessibility**: All user interfaces must meet WCAG 2.1 AA accessibility standards
3. **Data quality**: All data migrations must achieve 99.9% accuracy
4. **Documentation**: All process changes must have end-user documentation
5. **Training validation**: All training must be validated with pilot users before full rollout

These standards are mandatory. But *how* each workstream achieves them is flexible.

### Team-Level Quality Autonomy

Within the program standards, teams choose quality practices that fit their context.

**Example – Transformation Program**:

**Technology Workstream (Agile)**: Uses automated security scans in their CI pipeline, accessibility testing in each sprint, test-driven development.

**Process Workstream (Predictive)**: Uses formal process reviews at phase gates, documentation templates, structured validation sessions.

**Change Management Workstream (Hybrid)**: Uses agile iterations for communication material development but formal approval gates before materials are published.

All three approaches meet the program quality standards, but the *methods* differ based on context.

### Integration Quality Testing

In programs, the biggest quality risk is often integration—individual workstreams deliver quality work, but the pieces don't fit together.

**Example – Transformation Program**: Sarah schedules integration quality reviews:

**End of Phase 1 (Design)**: All workstreams present designs. Integration review asks:
- Do the process designs align with the system designs?
- Do the training materials accurately reflect the processes?
- Do the change communications explain the system features correctly?

**Gaps identified**:
- Training materials describe a workflow that the system doesn't support
- Change communications promise features that are planned for Phase 3, not Phase 2

**Action**: Process and Technology teams hold joint sessions to align. Training and Change teams update materials.

**Outcome**: Integration defects are caught during design, not during pilot testing, saving months of rework.

**Integration quality reviews prevent expensive downstream failures.**

## Testing Strategies Across Contexts

Different types of testing serve different purposes. The project context determines which testing strategies are most important.

### Unit Testing
Testing individual components or modules in isolation.

- **Best for**: Software development, engineering projects
- **When**: Continuously during development (especially in agile)
- **Example – Expense System**: Each code function has automated unit tests. Developer runs these tests before committing code.

### Integration Testing
Testing how components work together.

- **Best for**: Projects with multiple interacting systems or teams
- **When**: After individual components are complete (predictive) or continuously as components are integrated (agile)
- **Example – Transformation Program**: Testing how the new expense system integrates with the accounting system. Data flows from Expense to Accounting without errors.

### System Testing
Testing the complete system end-to-end.

- **Best for**: Complex systems with many components
- **When**: After full system is assembled (predictive) or at sprint/release boundaries (agile)
- **Example – Expense System**: Testing the complete workflow: employee submits expense → manager approves → finance processes → accounting system records → employee is reimbursed.

### Acceptance Testing
Testing whether the solution meets stakeholder requirements and is ready for deployment.

- **Best for**: All projects, particularly those with specific regulatory or business requirements
- **When**: Before production deployment
- **Example – Office Renovation**: Final walkthrough with stakeholders to confirm the space meets requirements before occupancy.
- **Example – Expense System**: Product Owner validates features against acceptance criteria during sprint review.

### User Acceptance Testing (UAT)
End users test the solution in realistic scenarios to validate usability and fitness for purpose.

- **Best for**: Systems that require user adoption, process changes
- **When**: Before full deployment, often during pilot/beta phases
- **Example – Transformation Program**: 20 pilot users test the new expense system for two weeks. They find several usability issues: unclear error messages, confusing navigation, missing search functionality. These issues are fixed before full rollout.

**UAT prevents user rejection and drives adoption.**

### Regression Testing
Re-testing previously working functionality to ensure new changes didn't break anything.

- **Best for**: Iterative development, systems with frequent changes
- **When**: After every change or release
- **Example – Expense System**: The team maintains an automated regression test suite covering all previously delivered features. Every sprint, these tests run to ensure new features didn't break old functionality.

**Without regression testing, new features break old features—users lose trust.**

## Defect Management: Prevention, Detection, and Correction

Defects are inevitable. The question is how quickly and effectively you manage them.

### Defect Prevention

The best defect is the one that never occurs. Prevention strategies:

**1. Clear Requirements**
Ambiguous requirements cause defects. Invest time in clarifying requirements upfront.

**Example – Expense System**: Initially, the requirement said "Managers should be able to approve expenses." This is ambiguous. How? On what devices? With what information? The team refined this to detailed acceptance criteria with examples and mockups. Result: 70% fewer defects related to the approval feature.

**2. Standards and Templates**
Consistent approaches reduce errors.

**Example – Office Renovation**: Using standard electrical outlet heights and spacing reduces installation errors and creates a professional appearance.

**3. Peer Reviews**
A second pair of eyes catches mistakes the author missed.

**Example – Expense System**: Code reviews catch 80% of defects before code is even committed. The cost of fixing a defect during code review: 15 minutes. The cost of fixing the same defect after it reaches production: 4 hours (including investigation, fix, testing, deployment).

**4. Training**
Teams that understand quality practices produce higher quality work.

**Example – Transformation Program**: Sarah provides training to all workstream teams on the program quality standards. Result: 40% fewer quality standard violations in Phase 2 compared to Phase 1.

### Defect Detection

When defects occur, detect them as early as possible.

**1. Automated Testing**
Computers can run thousands of tests in minutes, catching defects immediately.

**Example – Expense System**: Automated tests catch 90% of defects within minutes of code commit.

**2. Continuous Integration**
Integrate frequently to catch integration defects when they're fresh.

**Example – Expense System**: Integrating code multiple times per day catches integration issues within hours. Contrast with integrating once per month—defects accumulate and root cause analysis becomes nearly impossible.

**3. Inspections and Walkthroughs**
Human review catches defects that automated tools miss.

**Example – Office Renovation**: Sarah's weekly walkthroughs catch aesthetic issues (misaligned tiles, inconsistent paint coverage) that wouldn't violate code but impact quality.

### Defect Correction

When defects are found, fix them systematically.

**1. Prioritize by Impact**
Not all defects are equal. Critical defects (safety, security, data loss) must be fixed immediately. Minor cosmetic issues can be deferred.

**Example – Expense System**: The team maintains a defect backlog prioritized:
- **Critical**: System crashes, data corruption, security vulnerabilities → Fix immediately
- **High**: Feature doesn't work as designed → Fix in current sprint
- **Medium**: Usability issues, minor bugs → Fix in next sprint
- **Low**: Cosmetic issues, nice-to-have improvements → Fix when capacity allows

**2. Root Cause Analysis**
Fix the symptom *and* the root cause to prevent recurrence.

**Example – Office Renovation**: A section of drywall cracks within a week of installation. The contractor could simply patch it (symptom) or investigate why it cracked (root cause).

Investigation reveals that the framing lumber had high moisture content and shrank as it dried, causing the drywall to crack. Root cause fix: Use properly dried lumber, allow framing to stabilize before drywall installation. This prevents future cracks across the entire project.

**3. Track and Trend**
Monitor defect patterns to identify systemic quality issues.

**Example – Expense System**: Sarah tracks defects by category:
- 40% are requirement misunderstandings
- 30% are integration issues with the accounting system
- 20% are UI/UX issues
- 10% are logic errors

This pattern reveals that requirements and integration are the biggest quality risks. Sarah addresses these:
- **Requirements**: Product Owner starts including detailed examples and mockups
- **Integration**: Team schedules regular integration testing sessions with the accounting team

Result: Defects decrease 50% over the next three sprints.

## Balancing Speed and Quality

One of the most common tensions in project execution is speed vs. quality. Stakeholders want results fast. But rushing creates defects. How do you balance?

### The Cost of Poor Quality

Poor quality is expensive:
- **Rework**: Fixing defects costs 5-10x more than preventing them
- **Delays**: Quality issues discovered late cause schedule delays
- **Reputation**: Quality problems damage stakeholder trust and team morale
- **Opportunity cost**: Time spent fixing defects is time not spent delivering value

**Example – Office Renovation**: The framing quality issue (Section 1) cost $3,000 and 3 days. But if Sarah had skipped the inspection and the issue was discovered during final inspection (after drywall, electrical, and finishes were complete), the cost would have been $25,000 and 3 weeks—tearing out finished work to fix framing, then redoing all the downstream work.

**Investing in quality upfront saves time and money overall.**

### Quality as an Enabler of Speed

Counter-intuitively, investing in quality actually increases long-term speed:

**Example – Expense System**: In Sprint 3, the team debated whether to invest time in automated testing infrastructure. It would "slow down" feature delivery in Sprint 3 and 4.

Sarah encouraged the investment. In Sprints 3-4, velocity was lower because the team was building test automation. But starting in Sprint 5, velocity *increased* because:
- Automated tests caught defects immediately, reducing debugging time
- Regression testing was fast, enabling confident changes
- Less time spent on manual testing freed up time for development

By Sprint 10, the cumulative value delivered with automated testing far exceeded what would have been delivered without it.

**Quality infrastructure is an investment that pays dividends.**

### Agile's "Sustainable Pace"

Agile emphasizes sustainable pace—teams should work at a pace they can maintain indefinitely without burning out. Rushing creates technical debt and quality issues that eventually slow the team down.

**Example – Expense System**: In Sprint 5, stakeholders pressured the team to deliver more features. The team took shortcuts—skipped code reviews, deferred automated tests, rushed implementation.

Result:
- Sprint 5: High velocity (lots of features delivered)
- Sprint 6: Low velocity (team spent most of Sprint 6 fixing Sprint 5 defects)
- Sprint 7: Low morale (team felt demoralized by the quality issues)

Lesson learned: Sustainable pace with consistent quality delivers more value over time than sprinting and crashing.

## Creating a Quality Culture

Quality isn't just the QA team's responsibility—it's everyone's responsibility. Creating a quality culture requires leadership, accountability, and psychological safety.

### Leadership Sets the Tone

Leaders communicate priorities through what they measure and reward.

**Example – Transformation Program**: In Phase 1, Sarah noticed that workstream leads were rewarded for meeting schedule milestones, even if quality was compromised. This incentivized rushing.

Sarah changed the incentives:
- Milestone completion *with quality standards met* was celebrated
- Quality issues were treated as learning opportunities, not failures
- Teams that proactively identified and prevented quality risks were recognized

Result: Workstream leads started prioritizing quality because that's what was valued.

### Psychological Safety Enables Quality

Teams need psychological safety to surface quality issues without fear of blame.

**Example – Expense System**: In Sprint 4, a developer discovered a critical security vulnerability in code written two sprints earlier. The developer was afraid to report it because it would delay the sprint and potentially blame the original developer.

Sarah created safety by responding positively:
- Thanked the developer for finding the issue
- Facilitated a blameless retrospective to understand how the vulnerability was missed
- Implemented additional security review processes to prevent future issues
- Reinforced: "We celebrate finding problems early, not hiding them"

Result: In future sprints, the team proactively surfaced quality concerns, preventing several production issues.

**Blame-free culture drives quality transparency.**

### Quality Metrics Should Drive Improvement, Not Punishment

Metrics are tools for improvement, not weapons for punishment.

**Example – Transformation Program**: Sarah tracks quality metrics for each workstream:
- Defect density (defects per deliverable)
- Defect resolution time
- Rework percentage
- Stakeholder satisfaction with quality

She uses these metrics to identify trends and improvement opportunities, not to rank or punish teams.

When the Process workstream has high defect density, Sarah doesn't criticize. Instead, she asks: "What support do you need to improve quality?" The team requests training on process modeling standards. Sarah provides the training. Defect density drops 40%.

**Metrics that drive improvement build quality culture.**

## Practical Quality Tools and Techniques

### 1. Quality Checklists

Simple checklists prevent errors and ensure consistency.

**Example – Office Renovation**: The electrical contractor uses a pre-drywall checklist:
- All outlet boxes are properly secured
- All wire connections are tight and properly wire-nutted
- All circuits are labeled in the panel
- All GFCI outlets are tested
- All work is photographed for record

This checklist catches 95% of quality issues before drywall installation.

### 2. Pair Programming / Pairing

Two people working together on the same task catch more errors than working separately.

**Example – Expense System**: For complex features, developers pair program—one writes code, the other reviews in real-time. This catches defects immediately and spreads knowledge across the team.

### 3. Quality Dashboards

Visual dashboards make quality visible and drive accountability.

**Example – Transformation Program**: Sarah creates a program quality dashboard showing:
- Open defects by severity
- Defect aging (how long defects have been open)
- Quality gate pass/fail status
- Rework hours by workstream

This dashboard is reviewed weekly in program coordination meetings, keeping quality top-of-mind.

### 4. Definition of Ready

In addition to Definition of Done, agile teams use Definition of Ready—criteria that work must meet before the team commits to it.

**Example – Expense System**: User stories must meet Definition of Ready before sprint planning:
- Acceptance criteria are clear and testable
- Dependencies are identified
- UI mockups are provided (if applicable)
- Product Owner is available to answer questions during the sprint

This prevents the team from committing to work that isn't ready, which would cause quality issues and rework.

## Key Takeaways: Quality Principles

1. **Quality must be built in, not inspected in**: Prevention is more effective and less expensive than detection.

2. **Different contexts require different quality approaches**: Predictive uses phase gates and end-phase testing. Agile uses continuous quality and automated testing. Hybrid balances program standards with team autonomy.

3. **Early defect detection is exponentially cheaper than late detection**: Invest in practices that catch defects immediately (automated testing, code reviews, inspections).

4. **Quality is everyone's responsibility**: Create a culture where quality is valued, not just the QA team's job.

5. **Balance speed and quality**: Rushing creates technical debt that eventually slows you down. Sustainable pace with consistent quality delivers more value long-term.

6. **Use the right testing strategy for the context**: Unit, integration, system, acceptance, and regression testing each serve different purposes.

7. **Metrics drive improvement**: Use quality metrics to identify trends and improvement opportunities, not to punish teams.

Sarah's quality management across three projects demonstrates these principles:
- The Office Renovation's formal inspections catch structural issues early
- The Expense System's automated testing and continuous integration prevent defects from reaching production
- The Transformation Program's integration quality reviews prevent workstream misalignment

Quality is not a phase or a role—it's a mindset embedded in every aspect of execution. Master these quality principles, and your projects will deliver value that stakeholders trust and users love.

---

**Next**: [13c – Managing Scope During Execution](13c%20–%20Managing%20Scope%20During%20Execution.md)
**Previous**: [13a – Coordinating Team Execution](13a%20–%20Coordinating%20Team%20Execution.md)
