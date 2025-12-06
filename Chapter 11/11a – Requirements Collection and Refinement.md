# 11a – Requirements Collection and Refinement

## Learning Objectives

By the end of this section, you will be able to:
- Distinguish between different types of requirements (functional, non-functional, business, stakeholder)
- Apply appropriate requirements collection techniques based on project context
- Explain how requirements management differs across predictive, agile, and hybrid approaches
- Manage requirements traceability and change throughout the project lifecycle
- Address stakeholder disagreement on requirements using PMI-aligned approaches

---

## Why Requirements Matter

Requirements are the foundation of project planning. They describe what stakeholders need and expect from the project.

Weak requirements create cascading problems:
- **Unclear scope**: Teams build the wrong thing
- **Budget overruns**: Rework costs 10-100x more than getting it right initially
- **Schedule delays**: Discovering missing requirements mid-execution disrupts the plan
- **Stakeholder conflict**: Unmanaged expectations lead to dissatisfaction
- **Quality issues**: Without clear requirements, quality standards are subjective

But requirements live in a paradox:
- Stakeholders often don't know what they want until they see something
- Detailed requirements gathered too early become obsolete
- Requirements change as the business environment evolves

The art of requirements management is balancing clarity with flexibility, matching your approach to your project context.

---

## Types of Requirements

Not all requirements are the same. Understanding the different types helps you collect and manage them effectively.

### 1. Business Requirements

**What they define:** The high-level business need or opportunity the project addresses. Why the project exists.

**Example (Office Renovation):**
- "Increase collaborative workspace by 40% to support cross-functional teams"
- "Reduce energy costs by 25% through efficient HVAC and lighting"
- "Comply with updated accessibility regulations by Q3"

**Example (Expense System):**
- "Reduce expense processing time from 10 days to 2 days"
- "Increase employee satisfaction with expense process from 3.2 to 4.5 (out of 5)"
- "Eliminate paper receipts to support sustainability goals"

Business requirements connect the project to organizational strategy. They're typically stable and high-level.

### 2. Stakeholder Requirements

**What they define:** What specific stakeholder groups need from the project to accomplish their goals.

**Example (Office Renovation):**
- Facilities Manager: "Minimize disruption to building operations during construction"
- IT Director: "Ensure network infrastructure supports 500 simultaneous users"
- Safety Officer: "All work areas must meet OSHA requirements before occupancy"

**Example (Expense System):**
- Employees: "Submit expenses from mobile device in under 2 minutes"
- Finance Team: "Automatically flag expenses exceeding policy limits"
- Auditors: "Provide complete audit trail for all expense transactions"

Stakeholder requirements translate business needs into specific expectations. They often conflict—that's where prioritization and trade-offs come in.

### 3. Functional Requirements

**What they define:** What the project deliverable must do. Specific capabilities, features, or behaviors.

**Example (Expense System):**
- "System shall allow users to photograph receipts and attach to expense reports"
- "System shall automatically convert foreign currency based on transaction date"
- "System shall route expense reports to appropriate approver based on amount and category"
- "System shall integrate with payroll system for reimbursement processing"

Functional requirements are testable and specific. In agile projects, they're often expressed as user stories: "As a [user], I want to [action] so that [benefit]."

### 4. Non-Functional Requirements

**What they define:** How well the deliverable must perform. Quality attributes like performance, security, usability, reliability.

**Example (Expense System):**
- **Performance**: "System shall process expense submission within 3 seconds"
- **Security**: "System shall encrypt all financial data using AES-256 standard"
- **Usability**: "New users shall complete expense submission without training"
- **Availability**: "System shall maintain 99.5% uptime during business hours"
- **Scalability**: "System shall support up to 10,000 users without performance degradation"

Non-functional requirements are often overlooked but critical. A system that has all the right features but performs poorly will fail.

### 5. Transition Requirements

**What they define:** Temporary capabilities needed to move from current state to future state.

**Example (Digital Transformation):**
- "Migrate 500,000 historical customer records with zero data loss"
- "Operate legacy and new systems in parallel for 30 days during transition"
- "Train 200 customer service representatives before regional go-live"
- "Provide hypercare support for 60 days post-implementation"

Transition requirements are easy to forget. They don't appear in the final product, but they're essential for successful delivery.

---

## Requirements Collection Techniques

Different techniques yield different insights. Use multiple techniques to triangulate and validate what stakeholders really need.

### Interviews

**What it is:** One-on-one or small group conversations with stakeholders to explore their needs, pain points, and expectations.

**When to use:**
- Early in planning to understand diverse stakeholder perspectives
- For sensitive topics where stakeholders might not speak openly in groups
- When exploring complex or technical requirements with subject matter experts

**Sarah's Expense System Example:**
Sarah interviews the finance director, three employees from different departments, and an auditor. She asks:
- "Walk me through how you submit an expense today. What's frustrating about it?"
- "What would make this process easier or faster for you?"
- "What happens when something goes wrong? How is it resolved?"

She discovers that finance wants control and auditability, employees want speed and simplicity, and auditors need comprehensive tracking. These are potentially conflicting requirements that need prioritization.

**Strengths:** Deep understanding, builds relationships, uncovers unarticulated needs
**Limitations:** Time-intensive, may miss group dynamics, interviewer bias

### Workshops and Facilitated Sessions

**What it is:** Structured group sessions where stakeholders collaborate to define, prioritize, and refine requirements.

**When to use:**
- When stakeholders need to align on priorities
- To resolve conflicting requirements through discussion
- For user story mapping or product backlog refinement in agile projects

**Sarah's Office Renovation Example:**
Sarah facilitates a 4-hour workshop with department heads, facilities, IT, and safety. The agenda:
1. Review business drivers for the renovation
2. Brainstorm requirements (sticky notes on wall)
3. Group and categorize requirements
4. Dot-vote to prioritize must-haves vs. nice-to-haves
5. Identify dependencies and conflicts

The group identifies a conflict: IT wants server room on ground floor for maintenance access; facilities wants it on upper floor for security. Workshop conversation leads to a hybrid solution: Server room on second floor with dedicated access elevator.

**Strengths:** Builds consensus, surfaces conflicts early, leverages diverse perspectives
**Limitations:** Requires skilled facilitation, can be dominated by vocal stakeholders, time commitment

### Observations and Job Shadowing

**What it is:** Watching users in their actual work environment to understand current processes, pain points, and workarounds.

**When to use:**
- When users struggle to articulate their needs
- To identify gaps between what stakeholders say they do and what they actually do
- For process improvement or workflow optimization projects

**Sarah's Expense System Example:**
Sarah spends a day with the finance team processing expense reports. She observes:
- Analysts manually re-key data from paper forms into the accounting system (error-prone, time-consuming)
- Frequent phone calls to employees to clarify illegible handwriting or missing receipts
- A binder of "exception cases" handled outside the official process

These observations reveal requirements stakeholders didn't mention: "System shall validate required fields before submission" and "System shall provide employee notification of missing information before routing to finance."

**Strengths:** Reveals real behavior vs. reported behavior, identifies hidden requirements
**Limitations:** Observer effect (people change behavior when watched), time-intensive

### Prototypes and Mockups

**What it is:** Creating a simplified model or simulation of the solution to elicit feedback and refine requirements.

**When to use:**
- When requirements are uncertain or abstract
- To validate assumptions before committing to full development
- For user interface or user experience requirements

**Sarah's Expense System Example:**
Sarah's team creates a clickable prototype of the expense submission flow using a design tool. They show it to 10 employees and observe:
- Users expect to see all required fields on one screen (the prototype had multi-step wizard)
- Users want to see approval status in real-time (prototype didn't include status tracking)
- Users are confused by "expense category" dropdown with 47 options (too many choices)

Based on feedback, requirements are refined: "System shall display all required expense fields on a single screen" and "System shall limit expense categories to 10 most common, with 'other' option."

**Strengths:** Makes abstract concrete, reveals usability issues, validates assumptions early
**Limitations:** Risk of stakeholders fixating on prototype details, time to create

### Questionnaires and Surveys

**What it is:** Structured questions distributed to a large audience to gather requirements, preferences, or priorities.

**When to use:**
- Large, geographically dispersed stakeholder groups
- To validate requirements with a broader audience after initial collection
- For quantitative prioritization (e.g., ranking features)

**Sarah's Digital Transformation Example:**
Sarah sends a survey to 200 customer service representatives across 15 regions asking:
- What are your top 3 frustrations with the current system?
- Which new capabilities would most improve your productivity? (rank order)
- What concerns do you have about transitioning to a new system?

The survey reveals regional differences: Urban offices prioritize speed and automation; rural offices prioritize offline capability and simplicity. This insight shapes requirements: "System shall support offline mode with synchronization when connectivity restored."

**Strengths:** Reaches large audience efficiently, quantitative data for prioritization
**Limitations:** Low response rates, limited depth, no opportunity for follow-up questions

### Document Analysis

**What it is:** Reviewing existing documentation (current process flows, system specifications, policies, regulations) to understand current state and constraints.

**When to use:**
- Regulatory or compliance-driven projects
- Replacement or upgrade projects where current system is documented
- To understand organizational standards and constraints

**Sarah's Office Renovation Example:**
Sarah reviews building codes, accessibility regulations, lease agreements, and the existing facility's blueprints. She identifies requirements that stakeholders didn't mention:
- Building code requires two emergency exits per floor (constrains floor plan)
- Lease prohibits structural modifications to exterior walls (constrains office layout)
- Accessibility regulations require specific door widths and restroom configurations

**Strengths:** Identifies non-negotiable requirements, provides factual baseline
**Limitations:** May be outdated, doesn't capture stakeholder needs

---

## Requirements Management Across Delivery Approaches

How you collect, document, and manage requirements depends fundamentally on your delivery approach.

### Predictive Approach: Comprehensive Upfront Requirements

**Philosophy:** Invest time upfront to gather and document requirements in detail. Requirements are baselined and changes are controlled.

**Process:**
1. **Collect**: Use interviews, workshops, document analysis to gather comprehensive requirements
2. **Document**: Create detailed requirements specification with traceability matrix
3. **Validate**: Stakeholder review and sign-off on requirements document
4. **Baseline**: Approved requirements become the scope baseline
5. **Control**: Changes to requirements go through formal change control process

**Sarah's Office Renovation Example:**
- Months 1-2: Requirements collection (interviews, workshops, document analysis)
- Requirements document: 60 pages with 200+ individual requirements
- Traceability matrix: Links each requirement to business objective, stakeholder, and design element
- Sign-off: Department heads, facilities, IT, safety officer approve requirements
- Change control: Any new requirement or change goes through change control board

**When predictive works:**
- Requirements are knowable upfront
- Stakeholders need cost/schedule certainty before committing
- Regulatory or contractual obligations require comprehensive documentation
- Solution approach is proven and well-understood

**Risks of predictive requirements:**
- **Analysis paralysis**: Spending months documenting requirements that change
- **Premature commitment**: Locking in requirements before you understand the problem deeply
- **Stakeholder fatigue**: Stakeholders lose engagement during lengthy requirements phase
- **Change resistance**: Formal change control discourages beneficial changes

---

### Agile Approach: Just-in-Time Requirements Refinement

**Philosophy:** Start with a lightweight product vision. Detail requirements incrementally, just before implementation. Refine based on feedback.

**Process:**
1. **Vision**: Create product vision and high-level roadmap
2. **Backlog**: Capture requirements as user stories in prioritized backlog
3. **Refinement**: Detail requirements for upcoming sprint during backlog refinement
4. **Implementation**: Develop and test in sprint; demonstrate to stakeholders
5. **Adapt**: Adjust backlog based on feedback and learning

**Sarah's Expense System Example:**
- Week 1: Product vision workshop → "Make expense submission effortless for employees while ensuring compliance for finance"
- Week 2: User story mapping → High-level user journeys identified
- Backlog: 80 user stories, prioritized by business value
- Sprint planning: Every 2 weeks, team pulls top-priority stories and details acceptance criteria
- Sprint review: Demo working software to stakeholders; gather feedback; adjust backlog

**Example User Story:**
```
As an employee
I want to photograph my receipt and have expense details auto-populated
So that I can submit expenses in under 2 minutes

Acceptance Criteria:
- User can access camera from expense screen
- System extracts date, vendor, amount from receipt image
- User can edit auto-populated fields before submitting
- Receipt image is attached to expense record
```

**When agile works:**
- Requirements are uncertain or evolving
- Stakeholder feedback will improve the solution
- Time-to-value is critical
- Learning and experimentation are needed

**Risks of agile requirements:**
- **Scope creep**: Without a baseline, scope can grow indefinitely
- **Inconsistency**: Incremental decisions may create architectural inconsistency
- **Stakeholder confusion**: Stakeholders expect detailed upfront requirements
- **Dependency blindness**: Emergent requirements may conflict with dependencies

---

### Hybrid Approach: Layered Requirements

**Philosophy:** Define high-level requirements upfront for program governance. Detail requirements iteratively at the implementation level.

**Process:**
1. **Program requirements**: Define business requirements, constraints, and high-level scope
2. **Architecture and standards**: Establish technical architecture and integration requirements
3. **Iterative detailing**: Teams refine detailed requirements for their scope
4. **Integration management**: Ensure team-level requirements align with program requirements

**Sarah's Digital Transformation Example:**

**Program-level requirements (defined upfront):**
- Service level agreements: Customer response time under 2 hours
- Technology standards: Cloud-based, mobile-first, API-driven architecture
- Compliance: SOC 2 certification, GDPR compliance
- Integration: Must integrate with CRM, billing, and knowledge base systems

**Team-level requirements (refined iteratively):**
- Platform team: Uses backlog and sprints to develop core capabilities
- Regional implementation teams: Gather region-specific requirements just-in-time before rollout

**Integration mechanism:**
- Monthly steering committee reviews program roadmap and adjusts priorities
- Architecture review board ensures team decisions align with program standards
- Integration testing validates team deliverables work together

**When hybrid works:**
- Different parts of the project have different levels of uncertainty
- Program-level governance requires predictability
- Team-level execution benefits from agility
- Integration and dependencies require coordination

**Risks of hybrid requirements:**
- **Misalignment**: Team-level decisions conflict with program-level requirements
- **Governance overhead**: Too much control stifles team agility
- **Communication gaps**: Teams don't know what other teams are building

---

## Managing Requirements Traceability

Requirements traceability links requirements from their origin through design, development, testing, and validation.

**Why traceability matters:**
- Ensures every requirement is addressed in the solution
- Identifies impact when requirements change
- Supports compliance and audit requirements
- Validates that testing covers all requirements

### Traceability Matrix (Predictive)

| Requirement ID | Requirement Description | Business Objective | Design Element | Test Case | Status |
|---------------|------------------------|-------------------|---------------|-----------|---------|
| REQ-001 | Emergency exit: 2 per floor | Safety compliance | Floor plan v3, Drawing A-12 | Safety inspection checklist | Approved |
| REQ-002 | Accessible restrooms per floor | ADA compliance | Architectural spec, Section 4.2 | ADA compliance audit | Approved |
| REQ-003 | Network capacity: 500 users | Support remote work | IT infrastructure plan, Item 7 | Load testing | In progress |

Sarah uses this matrix to track the renovation requirements from stakeholder need through design and validation.

### Story Mapping and Backlog Linking (Agile)

In agile projects, traceability is maintained through:
- **User story hierarchy**: Epics → Features → User stories → Tasks
- **Acceptance criteria**: Each story has testable acceptance criteria
- **Definition of Done**: Includes criteria like "acceptance criteria met" and "automated tests pass"

Sarah's expense system uses a tool (like Jira) that links:
- Epic: "Expense Submission" → Stories: "Photograph receipt," "Auto-populate fields," "Attach receipt to report"
- Each story → Acceptance criteria → Test cases

### Bi-Directional Traceability

Traceability works in both directions:
- **Forward traceability**: From requirement → design → code → test (ensures all requirements are implemented)
- **Backward traceability**: From test → code → design → requirement (validates that implemented features trace to actual requirements)

This prevents "gold plating" (building features no one asked for) and ensures test coverage.

---

## Managing Requirements Changes

Requirements will change. The question is how you manage change to minimize disruption and maintain stakeholder alignment.

### Change in Predictive Projects

**Process:**
1. Stakeholder submits change request
2. Project manager assesses impact on scope, schedule, cost, quality, risk
3. Change control board reviews and approves/rejects
4. If approved, baselines are updated and stakeholders notified

**Sarah's Office Renovation Example:**
Three months into construction, the IT director requests adding a video conference room (new requirement).

Sarah's impact analysis:
- **Scope**: Requires dedicated space, AV equipment, acoustic treatment
- **Schedule**: 3-week delay to design and install AV infrastructure
- **Cost**: $75,000 (space modifications + equipment)
- **Risk**: Delay impacts move-in date; may trigger lease penalty

Change control board decision: Approve, but remove lower-priority lounge area to offset cost and schedule impact.

**Key principle:** Changes aren't inherently bad, but they must be conscious decisions with understood trade-offs.

### Change in Agile Projects

**Process:**
1. New requirement added to backlog
2. Product owner prioritizes against existing backlog
3. Lower-priority items may be deferred or removed
4. Team pulls highest-priority work into sprint planning

**Sarah's Expense System Example:**
After Sprint 3, finance requests adding "manager dashboard showing team expense trends."

Sarah's response:
- Add "Manager dashboard" as new epic in backlog
- Prioritize against existing backlog with stakeholders
- Defer lower-priority stories like "Expense analytics" to accommodate dashboard

**Key principle:** Scope is flexible; time and team capacity are fixed. Adding scope means deferring other scope.

### Change in Hybrid Projects

**Process:**
- **Program-level changes**: Follow predictive change control (impact program roadmap, budget, governance)
- **Team-level changes**: Follow agile backlog management (prioritize and adapt within team scope)
- **Integration:** Program governance ensures team changes don't conflict with program requirements

**Sarah's Digital Transformation Example:**
- **Team-level change:** Platform team adds "bulk upload" feature based on user feedback → Added to backlog, no program impact
- **Program-level change:** Executive sponsor requests adding 2 additional regions to rollout → Requires change control; impacts budget and roadmap

**Key principle:** Empower teams to adapt within their scope; control changes that affect program commitments.

---

## Handling Requirements Conflicts

Stakeholders often have conflicting requirements. Your role is to surface conflicts early and facilitate resolution.

### Common Conflicts

**Security vs. Usability:**
- Security team: "Require 12-character password with special characters, changed every 30 days"
- Users: "I can't remember complex passwords; I'll just write them down"

**Resolution:** Implement multi-factor authentication with simpler passwords (balances security and usability).

**Speed vs. Quality:**
- Business: "Launch in 3 months to beat competitor"
- Development: "Thorough testing requires 5 months"

**Resolution:** Launch minimum viable product in 3 months; continue enhancing quality in subsequent releases.

**Cost vs. Scope:**
- Stakeholder A: "We need all 50 features"
- Finance: "Budget only supports 30 features"

**Resolution:** Prioritize based on business value; deliver top 30 features in budget.

### Techniques for Resolving Conflicts

**1. Prioritization Workshops:**
Use techniques like MoSCoW (Must have, Should have, Could have, Won't have) or weighted scoring to help stakeholders prioritize.

**2. Trade-Off Analysis:**
Show impact of different options: "Option A delivers all features but 2 months late. Option B delivers 80% of features on time. Which creates more value?"

**3. Prototyping:**
Build lightweight prototypes of competing options; let stakeholders experience the difference and choose.

**4. Escalation:**
When stakeholders can't agree, escalate to sponsor or steering committee for decision.

**PMI Perspective:** The project manager facilitates stakeholder alignment but doesn't unilaterally decide requirements. Stakeholders own the requirements; the PM ensures they understand trade-offs and make informed decisions.

---

## Requirements and Risk

Poor requirements management is a leading cause of project failure.

### Requirements-Related Risks

**Unclear requirements:**
- **Risk:** Teams build the wrong solution; extensive rework needed
- **Mitigation:** Use prototypes and frequent feedback to validate understanding

**Requirements creep:**
- **Risk:** Uncontrolled scope growth leads to budget/schedule overruns
- **Mitigation:** Baseline requirements (predictive) or fixed timebox with flexible scope (agile)

**Conflicting requirements:**
- **Risk:** Different stakeholders have incompatible expectations
- **Mitigation:** Surface conflicts early; facilitate prioritization and trade-offs

**Missing stakeholders:**
- **Risk:** Late-arriving stakeholders introduce new requirements mid-project
- **Mitigation:** Comprehensive stakeholder identification (Chapter 7); validate completeness

**Unstated assumptions:**
- **Risk:** Teams assume stakeholders want X; stakeholders assumed Y
- **Mitigation:** Make assumptions explicit; validate with stakeholders

**Overly detailed premature requirements:**
- **Risk:** Commitment to details before understanding the problem; plans become obsolete
- **Mitigation:** Match level of detail to level of certainty; defer details when uncertainty is high

---

## Practical Examples

### Example 1: Eliciting Non-Functional Requirements

**Situation:** Sarah's team is building the expense system. Functional requirements are well-defined, but no one has mentioned non-functional requirements like performance, security, or usability.

**Sarah's approach:**
She asks targeted questions to elicit non-functional requirements:
- **Performance:** "How many employees will use the system simultaneously? How fast should expense submission respond?"
- **Security:** "What data sensitivity level do expense records have? What regulatory requirements apply?"
- **Usability:** "Should employees be able to submit expenses without training? What accessibility standards must we meet?"
- **Availability:** "What hours must the system be available? What downtime is acceptable?"

These questions surface requirements like:
- "System shall process expense submission in under 3 seconds"
- "System shall comply with PCI DSS for credit card data"
- "System shall meet WCAG 2.1 Level AA accessibility standards"

**Lesson:** Stakeholders often focus on functional requirements (what the system does). The PM must proactively elicit non-functional requirements (how well it performs).

---

### Example 2: Managing Requirements Churn in Agile

**Situation:** Sarah's expense system backlog keeps growing. Stakeholders keep adding new stories, but the team's velocity is constant. The backlog has grown from 80 stories to 150 stories.

**Problem:** The backlog is becoming unmanageable. The team feels like they'll never finish.

**Sarah's approach:**
She facilitates a backlog refinement session:
1. **Group stories by business value:** High, Medium, Low
2. **Identify stories that are no longer relevant:** Remove 20 stories that are obsolete or superseded
3. **Defer low-value stories:** Move 40 low-value stories to a "future considerations" backlog
4. **Focus on high-value stories:** 90 stories remain in active backlog

She also institutes a "one in, one out" rule: For every new story added, the product owner must remove or defer a lower-priority story.

**Lesson:** In agile, the backlog is not a commitment. It's a prioritized list of options. Regularly prune and refine to keep it manageable.

---

### Example 3: Tracing Requirements Through Design

**Situation:** Sarah's office renovation has a requirement: "Provide collaborative workspace for cross-functional teams."

**Traceability:**
- **Business requirement:** "Increase collaborative workspace by 40%"
- **Stakeholder requirement (Dept heads):** "Provide spaces where 6-8 people can work together for extended periods"
- **Functional requirement:** "Include 10 collaboration zones with whiteboards, power, and network access"
- **Design element:** Architectural floor plan showing 10 zones, each 300 sq ft, with specified equipment
- **Test case:** Final walk-through validates each collaboration zone meets specifications

During design review, Sarah notices that only 7 collaboration zones fit in the floor plan (not 10).

She traces back: The business requirement was 40% increase. Current state has 5 collaboration zones. 40% increase = 7 zones (not 10).

Requirement corrected: "Include 7 collaboration zones" (meets business requirement).

**Lesson:** Traceability helps catch errors and ensures design aligns with actual business need, not arbitrary numbers.

---

## Summary

Requirements are the foundation of planning. They define what stakeholders need and expect from the project.

**Key Takeaways:**

1. **Types of requirements:** Business, stakeholder, functional, non-functional, transition—each serves a different purpose

2. **Collection techniques:** Interviews, workshops, observations, prototypes, surveys, document analysis—use multiple techniques to triangulate

3. **Predictive requirements:** Comprehensive upfront collection, detailed documentation, baselined, formally controlled

4. **Agile requirements:** Lightweight vision upfront, just-in-time detailing, backlog refinement, feedback-driven

5. **Hybrid requirements:** Program-level requirements defined upfront; team-level requirements refined iteratively

6. **Traceability:** Links requirements from origin through design, development, testing—ensures completeness and enables impact analysis

7. **Change management:** Predictive uses formal change control; agile uses backlog prioritization; both require conscious trade-off decisions

8. **Conflict resolution:** Facilitate stakeholder alignment; use prioritization, trade-off analysis, and prototyping

9. **Requirements and risk:** Unclear, conflicting, or missing requirements are leading causes of project failure

**PMI Perspective:**
- Requirements management is continuous, not a phase
- Stakeholders own requirements; the PM facilitates alignment
- Level of requirements detail should match level of certainty
- Trade-offs are inevitable; make them conscious and transparent

---

**Up Next:** Section 11b explores scope definition and baseline—translating requirements into a clear definition of what the project will deliver.
