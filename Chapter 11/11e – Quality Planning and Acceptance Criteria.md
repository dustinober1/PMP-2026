# 11e – Quality Planning and Acceptance Criteria

## Learning Objectives

By the end of this section, you will be able to:
- Define quality in terms of fitness for use and conformance to requirements
- Distinguish between quality assurance (process) and quality control (deliverables)
- Create clear, measurable acceptance criteria for deliverables
- Explain how quality management differs across predictive, agile, and hybrid approaches
- Apply appropriate testing strategies based on project context
- Understand the cost of quality and the risks of quality shortcuts
- Use Definition of Done as a quality gate in agile projects

---

## What is Quality?

Quality means the deliverable meets requirements and is fit for its intended use.

**Two dimensions of quality:**

**1. Conformance to Requirements:**
Does the deliverable meet the specifications?

**Example (Office Renovation):**
- Specification: Conference room must accommodate 12 people with 48" round table and video conferencing equipment
- Quality: Conference room has 48" round table, 12 chairs, and functioning video conferencing

**2. Fitness for Use:**
Does the deliverable actually work for its intended purpose?

**Example (Office Renovation):**
- Intended use: Host video conferences with remote participants
- Quality problem: Conference room meets specifications, but camera placement doesn't capture all participants; audio echoes badly; users avoid the room
- Conformance: YES. Fitness for use: NO.

**Philip Crosby's definition:** "Quality is conformance to requirements."

**Joseph Juran's definition:** "Quality is fitness for use."

**PMI perspective:** Quality requires both. Meeting specifications isn't sufficient if the deliverable doesn't serve its purpose.

---

## Quality vs. Grade

Quality and grade are not the same.

**Quality:** The degree to which deliverables meet requirements.
**Grade:** The category or rank of deliverable (features, sophistication, functionality).

**Example:**
- **Low grade, high quality:** Basic economy car that meets all specifications and works reliably
- **High grade, low quality:** Luxury car with many features but frequent breakdowns and defects

**Project implication:**
Low grade may be acceptable (stakeholders agreed to basic features). Low quality is never acceptable (deliverables must meet requirements).

**Sarah's Expense System:**
Stakeholders decide the mobile app will be "basic grade"—simple UI, core features only, no advanced analytics. This is an acceptable trade-off (scope decision).

But the app must be "high quality"—it must work reliably, submit expenses correctly, and meet performance requirements. Quality is not negotiable.

---

## Cost of Quality (CoQ)

Quality has costs. Understanding these costs helps optimize quality investments.

### 1. Cost of Conformance (Prevention and Appraisal)

**Prevention Costs:** Investments to prevent defects from occurring.

**Examples:**
- Training team members on quality standards
- Process documentation and standardization
- Quality planning and design reviews
- Test automation infrastructure
- Code reviews and pair programming

**Sarah's Expense System:**
- Invest 2 days training developers on secure coding practices
- Set up automated testing framework
- Establish Definition of Done with quality criteria

**Appraisal Costs:** Investments to detect defects before delivery.

**Examples:**
- Testing (unit, integration, system, user acceptance)
- Inspections and peer reviews
- Audits and quality audits
- Prototype evaluation

**Sarah's Expense System:**
- Manual testing by QA team: 20% of sprint capacity
- User acceptance testing with 10 employees before launch
- Security audit by external firm

### 2. Cost of Non-Conformance (Internal and External Failure)

**Internal Failure Costs:** Costs of defects found before delivery to customer.

**Examples:**
- Rework to fix defects
- Scrap (work that must be discarded)
- Re-testing after fixes
- Delay costs

**Sarah's Expense System:**
Sprint 5: Testing reveals that expense approval email notifications aren't sent (defect). Team spends 3 days fixing the defect and re-testing (internal failure cost).

**External Failure Costs:** Costs of defects found after delivery to customer.

**Examples:**
- Customer support and troubleshooting
- Warranty claims
- Product recalls
- Reputation damage and lost business
- Legal liability

**Sarah's Expense System:**
If the team launches with defects, employees can't submit expenses reliably. Finance receives complaints. IT support is overwhelmed with tickets. Employee satisfaction drops. Trust in IT erodes.

**External failure costs are 10-100x higher than internal failure costs.** Finding and fixing defects early is far cheaper than fixing them after delivery.

---

## Quality Planning: Prevention Over Inspection

**Deming's principle:** "Quality must be built in, not inspected in."

Inspection catches defects; prevention stops them from occurring.

### Quality Management Plan

The quality management plan describes how the project will ensure deliverables meet requirements.

**Components:**

**1. Quality Standards:**
What standards, regulations, or guidelines apply?

**Example (Office Renovation):**
- Building codes (International Building Code)
- Accessibility standards (ADA)
- OSHA safety requirements
- Energy efficiency standards (LEED certification target)
- Organizational facilities standards

**Example (Expense System):**
- Security standards (OWASP Top 10, SOC 2)
- Privacy regulations (GDPR, CCPA)
- Coding standards (organization's style guide)
- Performance standards (response time, uptime)

**2. Quality Objectives:**
Specific, measurable quality goals.

**Example (Expense System):**
- Zero critical security vulnerabilities at launch
- System response time under 3 seconds (95th percentile)
- 99.5% uptime during business hours
- User satisfaction score 4.0+ out of 5.0
- Defect density under 2 defects per 1,000 lines of code

**3. Quality Roles and Responsibilities:**
Who is responsible for quality activities?

**Example (Expense System):**
- **Developers:** Write automated unit tests, perform peer code reviews
- **QA team:** Execute integration and system testing, track defects
- **Product owner:** Define acceptance criteria, conduct user acceptance testing
- **Security team:** Conduct security audit before launch
- **Scrum master:** Ensure Definition of Done is met before marking stories complete

**4. Quality Tools and Techniques:**
What methods will be used to ensure quality?

**Testing:**
- Unit testing (developer-written, automated)
- Integration testing (validate components work together)
- System testing (validate entire system meets requirements)
- User acceptance testing (validate with real users)
- Performance testing (load, stress, scalability)
- Security testing (penetration testing, vulnerability scanning)

**Reviews and Inspections:**
- Peer code reviews (before merging code)
- Design reviews (architecture, database schema)
- Backlog refinement (ensure acceptance criteria are clear)

**Audits:**
- Process audits (are we following our quality processes?)
- Product audits (does the deliverable meet standards?)

**5. Acceptance Criteria:**
Specific conditions that must be met for deliverables to be accepted.

Covered in detail below.

---

## Acceptance Criteria

Acceptance criteria define the conditions that must be satisfied for a deliverable to be considered complete and acceptable.

### Characteristics of Good Acceptance Criteria

**1. Specific and Unambiguous:**
No room for interpretation.

**Poor:** "Conference room should have good video quality."
**Good:** "Conference room video system shall support 1080p resolution at 30 fps with all participants visible in frame."

**2. Measurable and Testable:**
You can objectively verify whether the criterion is met.

**Poor:** "System should be fast."
**Good:** "System shall process expense submission in under 3 seconds (95th percentile)."

**3. Achievable and Realistic:**
The team can actually deliver it with available resources and constraints.

**Unrealistic:** "System shall have zero bugs." (No software is defect-free)
**Realistic:** "System shall have zero critical or high-severity defects at launch."

**4. Relevant:**
Criteria align with stakeholder needs and project objectives.

**Irrelevant:** "Expense system shall support 10 simultaneous languages." (If organization only operates in English)
**Relevant:** "Expense system shall comply with GDPR for EU employees."

**5. Time-Bound (when applicable):**
Specifies when the criterion applies.

**Example:** "System shall maintain 99.5% uptime during business hours (6 AM - 8 PM local time)."

### Acceptance Criteria Examples

**Office Renovation (Conference Room):**
- Room accommodates 12 people with minimum 25 sq ft per person
- 48" round table installed with 12 ergonomic chairs
- Video conferencing system supports 1080p resolution, dual monitors, wireless screen sharing
- Audio system captures all participants clearly with minimal background noise
- Network connection supports 50 Mbps upload/download (tested)
- Lighting adjustable from 300 to 800 lux
- Temperature control maintains 68-74°F
- Accessible entry and furniture arrangement complies with ADA standards
- Final inspection by IT and facilities confirms all criteria met

**Expense System (Receipt OCR Feature):**
- User can photograph receipt using mobile device camera
- System extracts date, vendor name, and amount from receipt with 90%+ accuracy
- User can review and edit extracted fields before submission
- Receipt image attached to expense line item (accessible in web and mobile)
- System handles receipts in English, with date formats MM/DD/YYYY and DD/MM/YYYY
- Extraction completes within 5 seconds
- User can manually enter details if OCR fails
- Acceptance: Product owner validates feature with 20 sample receipts from various vendors

---

## Quality in Predictive Projects

In predictive projects, quality is planned comprehensively upfront. Testing is a distinct phase, typically after development is complete.

### Predictive Quality Process

**1. Plan Quality (During Planning):**
- Define quality standards and metrics
- Identify applicable regulations and compliance requirements
- Create quality management plan
- Define acceptance criteria for deliverables

**Sarah's Office Renovation:**
Quality plan includes building codes, accessibility standards, energy efficiency targets, organizational standards. Acceptance criteria defined for each WBS deliverable.

**2. Perform Quality Assurance (During Execution):**
- Audit processes to ensure quality procedures are followed
- Process improvement based on lessons learned
- Training and coaching on quality practices

**Sarah's Office Renovation:**
- Weekly safety inspections (OSHA compliance)
- Monthly quality audits with contractor (following specifications?)
- Design reviews before construction begins

**3. Control Quality (During Execution and Monitoring):**
- Inspect deliverables to detect defects
- Testing to validate deliverables meet requirements
- Measure quality metrics and compare to targets

**Sarah's Office Renovation:**
- Daily inspections during construction (workmanship, materials)
- Testing HVAC system (temperature control, energy efficiency)
- Final building inspection by city inspector
- Walk-through with stakeholders before acceptance

**4. Validate Scope (At Phase Gates or Milestones):**
- Stakeholders formally accept completed deliverables
- Documented acceptance transitions deliverable to operations

**Sarah's Office Renovation:**
After final inspection, facilities manager, IT director, and department heads conduct walk-through. They validate that all acceptance criteria are met. Facilities manager signs acceptance document.

### Defect Management in Predictive Projects

**Defect lifecycle:**
1. **Detect:** Defect identified during inspection or testing
2. **Log:** Defect documented in tracking system (description, severity, priority)
3. **Analyze:** Root cause identified
4. **Fix:** Corrective action implemented
5. **Verify:** Re-test to confirm defect is resolved
6. **Close:** Defect closed when verified

**Defect severity:**
- **Critical:** Prevents core functionality; system unusable
- **High:** Major feature doesn't work; workaround exists but difficult
- **Medium:** Feature partially works; minor impact
- **Low:** Cosmetic issue; no functional impact

**Sarah's Office Renovation:**
Inspection reveals HVAC system doesn't maintain temperature within ±2°F of setpoint (defect). Severity: High (major requirement not met). Contractor investigates, discovers control calibration issue, recalibrates, re-tests. Defect resolved.

---

## Quality in Agile Projects

In agile projects, quality is built in continuously. Testing happens within each sprint, not as a separate phase.

### Definition of Done (DoD)

The Definition of Done is a checklist of quality criteria that must be met before a user story is considered complete.

**Sarah's Expense System Definition of Done:**

**Code Quality:**
- Code follows team's style guide
- Code reviewed by at least one other developer
- Automated unit tests written and passing (minimum 80% code coverage)
- No critical or high-severity static analysis warnings

**Functional Quality:**
- Acceptance criteria for user story are met
- Feature demonstrated to product owner
- Product owner accepts the story

**Integration Quality:**
- Code merged to main branch
- Automated integration tests passing
- No breaking changes to existing functionality
- Feature deployed to test environment

**Documentation:**
- User-facing features documented in help system
- Technical documentation updated (API docs, architecture diagrams)

**Performance and Security:**
- Performance tested (meets response time requirements)
- Security review completed (no known vulnerabilities)

**Release Readiness:**
- Feature toggles configured (if applicable)
- Monitoring and logging in place

**If any criterion is not met, the story is not "Done."** It returns to the backlog for additional work.

### Testing in Agile: Continuous and Integrated

**Test-Driven Development (TDD):**
1. Write automated test for new feature (test fails initially)
2. Write code to make test pass
3. Refactor code for quality
4. Repeat

**Benefit:** Automated tests ensure new code works and prevent regressions (breaking existing functionality).

**Continuous Integration (CI):**
Every code commit triggers automated build and test pipeline.

**Sarah's Expense System CI Pipeline:**
1. Developer commits code to repository
2. CI server automatically runs:
   - Build (compile code)
   - Unit tests (developer tests)
   - Integration tests (component interactions)
   - Static code analysis (security, quality checks)
   - Code coverage analysis (% of code tested)
3. If any step fails, developer is notified immediately
4. If all steps pass, code is ready for review and merge

**Result:** Defects are caught within minutes, not weeks. Quality is maintained continuously.

### Sprint Testing

**Within each sprint:**
- **Day 1-7:** Development and unit testing (developers)
- **Day 8-9:** Integration testing (QA team)
- **Day 10:** Sprint review and demo (product owner and stakeholders)

**User acceptance testing:** Product owner validates feature meets acceptance criteria during sprint review.

**No separate testing phase:** Testing is integrated into each sprint. Every sprint delivers potentially shippable software.

---

## Quality in Hybrid Projects

Hybrid projects combine program-level quality standards (predictive) with team-level quality practices (agile).

### Sarah's Digital Transformation Program

**Program-Level Quality Standards (Predictive):**
- SOC 2 compliance required for platform (annual audit)
- WCAG 2.1 Level AA accessibility required
- 99.9% uptime SLA for platform
- Comprehensive disaster recovery and business continuity plan
- Security penetration testing before each major release

**Platform Team Quality (Agile):**
- Definition of Done (similar to expense system example)
- Automated testing with 85% code coverage minimum
- Continuous integration and deployment pipeline
- Sprint reviews with product owner and stakeholders
- Security and accessibility testing within each sprint

**Regional Implementation Quality (Predictive):**
- Detailed test plans for each regional rollout
- User acceptance testing with regional users
- Data migration validation (100% accuracy required)
- Training completion and competency assessment
- Go/no-go checklist before regional launch

**Integration:**
- Program quality audits quarterly (process compliance)
- Platform releases undergo security and performance testing before regional deployment
- Regional teams provide feedback to platform team on quality issues

---

## Testing Strategies

Different types of testing serve different purposes.

### 1. Unit Testing

**What it tests:** Individual components or functions in isolation.

**Who performs it:** Developers

**When:** During development (continuously)

**Example (Expense System):**
Test that the "calculate total expense amount" function correctly sums line items and applies tax.

**Sarah's Expense System:**
Automated unit tests run with every code commit. 1,200+ unit tests ensure individual functions work correctly.

### 2. Integration Testing

**What it tests:** Interactions between components or systems.

**Who performs it:** Developers or QA team

**When:** After unit testing, before system testing

**Example (Expense System):**
Test that expense submission triggers approval workflow, which sends email notification to manager, who can approve via web or mobile app, which updates expense status and triggers payroll integration.

**Sarah's Expense System:**
Integration tests validate database transactions, API calls, and interactions between front-end and back-end.

### 3. System Testing

**What it tests:** The entire system as a whole against requirements.

**Who performs it:** QA team

**When:** After integration testing, before user acceptance testing

**Example (Expense System):**
Test complete end-to-end scenarios: Employee submits expense with receipt → Manager approves → Finance reviews → Payroll processes reimbursement.

**Sarah's Expense System:**
QA team uses test cases derived from requirements and user stories. Verify functional and non-functional requirements.

### 4. User Acceptance Testing (UAT)

**What it tests:** Whether the system meets user needs and is ready for production use.

**Who performs it:** End users and product owner

**When:** Before launch or release

**Example (Expense System):**
10 employees from different departments use the system for 2 weeks to submit real expenses. Feedback collected on usability, functionality, and issues.

**Sarah's Expense System:**
UAT reveals that employees find the "expense category" dropdown confusing (too many options, unclear labels). Product owner adds story to backlog: "Simplify expense category selection."

### 5. Regression Testing

**What it tests:** Whether new changes break existing functionality.

**Who performs it:** QA team (often automated)

**When:** After any code change or bug fix

**Example (Expense System):**
After fixing receipt OCR bug, regression tests verify that basic expense submission, approval routing, and payroll integration still work correctly.

**Sarah's Expense System:**
Automated regression test suite (500+ tests) runs nightly. Catches unintended side effects from code changes.

### 6. Performance Testing

**What it tests:** System performance under expected and peak loads.

**Types:**
- **Load testing:** Normal expected load (100 concurrent users)
- **Stress testing:** Beyond normal load to find breaking point (500 concurrent users)
- **Scalability testing:** How system scales as load increases

**Example (Expense System):**
Load test simulates 200 employees submitting expenses simultaneously. Verify system response time stays under 3 seconds.

**Sarah's Expense System:**
Performance testing reveals database query bottleneck. Team optimizes query; response time improves from 6 seconds to 2 seconds.

### 7. Security Testing

**What it tests:** System vulnerabilities and security controls.

**Types:**
- **Vulnerability scanning:** Automated tools scan for known vulnerabilities
- **Penetration testing:** Ethical hackers attempt to exploit weaknesses
- **Code review:** Manual review of code for security flaws (SQL injection, XSS, etc.)

**Example (Expense System):**
External security firm conducts penetration test. Identifies vulnerability in file upload feature (potential for malicious file upload). Team fixes vulnerability before launch.

---

## The Risk of Quality Shortcuts

Cutting quality to save time or cost is a false economy.

### Scenario: Pressure to Cut Testing

**Situation:** Sarah's expense system is 2 weeks from planned launch. Sprint 11 testing reveals 15 medium-severity defects and 3 high-severity defects.

Stakeholder pressure: "We need to launch on time. These bugs aren't critical—let's launch and fix them later."

**Sarah's analysis:**

**Option 1: Launch on schedule with known defects**
- **Pros:** Meet deadline, stakeholders happy (short-term)
- **Cons:**
  - Employees encounter bugs, lose trust in system
  - Finance team spends extra time troubleshooting issues
  - IT support overwhelmed with tickets
  - Defects in production are 10x more expensive to fix
  - Reputation damage: "IT can't deliver quality"

**Option 2: Delay launch 2 weeks, fix defects**
- **Pros:**
  - Launch with quality product
  - Employees have positive first experience
  - Lower support costs
  - Maintain reputation for quality
- **Cons:**
  - Miss deadline (short-term dissatisfaction)
  - Delay benefits realization by 2 weeks

**Option 3: Fix high-severity defects, document and defer medium-severity defects**
- **Pros:**
  - Launch with core functionality working
  - Stakeholders aware of known limitations
  - Critical quality maintained
- **Cons:**
  - Some user frustration with medium-severity issues
  - Communication challenge (educating users on workarounds)

**Product owner decision:** Option 3 (fix high-severity, defer medium with communication).

**Rationale:** High-severity defects would significantly degrade user experience. Medium-severity defects are annoying but have workarounds. Communicate known issues transparently; users appreciate honesty.

**Sprint 12 plan:** Fix high-severity defects, complete final UAT, launch. Medium-severity defects addressed in post-launch Sprint 13.

**Lesson:** Cutting quality creates technical debt and damages trust. Invest in quality upfront to avoid much higher costs later.

---

## Practical Examples

### Example 1: Defining Testable Acceptance Criteria

**Situation:** Sarah's expense system has a user story with vague acceptance criteria:

**User Story:**
"As an employee, I want to submit expenses easily so that I get reimbursed quickly."

**Original Acceptance Criteria (Vague):**
- Expense submission is easy
- System is fast
- Employees are happy

**Problem:** These criteria are subjective and not testable. What does "easy" mean? How fast is "fast"?

**Revised Acceptance Criteria (Testable):**
- Employee can create new expense report in 3 clicks or fewer
- Employee can add line item (date, vendor, amount, category) in under 30 seconds
- Employee can attach receipt image via camera or file upload
- System validates required fields and displays clear error messages if missing
- System submits expense and displays confirmation within 3 seconds
- User acceptance test: 5 employees (new to system) complete expense submission in under 2 minutes without assistance

**Result:** Clear, measurable criteria that can be objectively verified.

---

### Example 2: Definition of Done Prevents Incomplete Work

**Situation:** Sarah's team completes a user story in Sprint 6: "Manager expense dashboard."

**Developer perspective:** "The dashboard displays expense data. It works. Story is done."

**Scrum master checks Definition of Done:**
- Code reviewed? ✓ Yes
- Unit tests written? ✗ No (developer skipped tests due to time pressure)
- Acceptance criteria met? ✓ Yes (functionality works)
- Deployed to test environment? ✗ No (deployment failed, not investigated)
- Documentation updated? ✗ No

**Decision:** Story is NOT done. Returns to backlog.

**Sprint 7:** Developer writes unit tests, fixes deployment issue, updates documentation. Now story meets Definition of Done. Story is complete.

**Lesson:** Definition of Done prevents "technical debt" from accumulating. Incomplete work is not accepted, even if functionality appears to work.

---

### Example 3: Root Cause Analysis for Quality Issues

**Situation:** Sarah's office renovation final inspection identifies 12 defects in electrical work (outlets in wrong locations, incorrect wire gauge, missing ground fault circuit interrupters).

**Surface response:** "Electrician made mistakes. Fix them and move on."

**Root cause analysis (5 Whys):**
1. **Why were there defects?** Electrician didn't follow architectural drawings.
2. **Why didn't electrician follow drawings?** Electrician didn't have latest version of drawings (revision 3).
3. **Why didn't electrician have latest drawings?** Project manager distributed revision 3 to general contractor but not directly to subcontractors.
4. **Why weren't subcontractors included?** Communication plan specified general contractor would distribute to subs.
5. **Why didn't general contractor distribute?** General contractor assumed subs had access to shared document repository (they didn't).

**Root cause:** Communication breakdown in document distribution process.

**Corrective action (Fix defects):** Electrician corrects 12 defects.

**Preventive action (Prevent recurrence):**
- Update communication plan: Project manager sends drawing revisions directly to all contractors and subcontractors
- Add verification step: Contractors confirm receipt and version of drawings before starting work

**Lesson:** Quality issues are often symptoms of process problems. Root cause analysis identifies systemic issues and prevents recurrence.

---

## Summary

Quality planning ensures deliverables meet requirements and are fit for their intended use.

**Key Takeaways:**

1. **Quality definition:** Conformance to requirements + fitness for use; both are necessary

2. **Quality vs. grade:** Low grade may be acceptable (scope decision); low quality is never acceptable

3. **Cost of quality:** Prevention and appraisal (cost of conformance) vs. internal and external failure (cost of non-conformance); prevention is far cheaper than failure

4. **Acceptance criteria:** Specific, measurable, testable, relevant conditions for deliverable acceptance

5. **Predictive quality:** Planned upfront, testing as separate phase, formal inspections and acceptance

6. **Agile quality:** Built in continuously, Definition of Done, testing within sprints, automated testing and CI

7. **Hybrid quality:** Program standards (predictive), team practices (agile), layered quality control

8. **Testing strategies:** Unit, integration, system, UAT, regression, performance, security—each serves a purpose

9. **Quality shortcuts:** Cutting quality creates technical debt, damages trust, costs 10-100x more to fix later

**PMI Perspective:**
- Quality must be planned, not inspected in
- Prevention over detection
- Quality is everyone's responsibility
- Cutting quality to save time or cost is a false economy
- Definition of Done (agile) or acceptance criteria (predictive) are essential quality gates

---

**Up Next:** Section 11f explores resource and procurement planning—ensuring the right people, skills, equipment, and external resources are available when needed.
