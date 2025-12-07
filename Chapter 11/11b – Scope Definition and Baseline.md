# 11b – Scope Definition and Baseline

## Learning Objectives

By the end of this section, you will be able to:
- Distinguish between product scope and project scope
- Create a clear scope statement that defines what's included and excluded
- Develop and use a Work Breakdown Structure (WBS) for predictive projects
- Establish and manage scope baselines across different delivery approaches
- Prevent and manage scope creep using PMI-aligned techniques
- Explain how scope management differs radically across predictive, agile, and hybrid projects
- Apply requirements architecture concepts to organize requirements effectively
- Create requirements allocation matrices to trace requirements to deliverables

---

## What is Scope?

Scope defines the boundaries of the project: What's included, what's excluded, and what "done" looks like.

Without clear scope:
- Teams build features no one asked for (gold plating)
- Stakeholders expect deliverables that weren't planned (unmet expectations)
- Projects drift from original intent (mission creep)
- Budget and schedule become meaningless (no baseline to measure against)

But scope exists in a paradox:
- Defining scope too rigidly creates inflexibility and resistance to beneficial changes
- Leaving scope too vague creates uncertainty and uncontrolled growth
- Stakeholders often don't know what they want until they see something

The art of scope management is providing clarity while maintaining appropriate flexibility.

---

## Product Scope vs. Project Scope

These terms sound similar but mean different things.

### Product Scope

**Definition:** The features, functions, and characteristics of the product, service, or result the project will deliver.

**Focus:** WHAT you're building.

**Example (Office Renovation):**
Product scope includes:
- 15,000 square feet of renovated office space
- 7 collaboration zones with whiteboards and AV equipment
- Open floor plan with 120 workstations
- 4 conference rooms with video conferencing capability
- Energy-efficient HVAC and LED lighting
- Accessible restrooms on each floor

Product scope does NOT include:
- New furniture (stakeholders will purchase separately)
- Ongoing building maintenance (handled by facilities team)
- IT equipment like computers or phones (IT department responsibility)

### Project Scope

**Definition:** The work required to deliver the product with the specified features and functions.

**Focus:** HOW you'll build it (the work).

**Example (Office Renovation):**
Project scope includes:
- Architectural design and engineering
- Building permit acquisition
- Demolition of existing interior walls
- Construction of new floor plan
- HVAC, electrical, and network installation
- Inspection and final approval
- Project management, quality control, and stakeholder communication

Project scope does NOT include:
- Operating the building after handover
- Training facilities staff on new systems (separate training project)
- Marketing the new office space to recruits

**Key Distinction:**
- **Product scope** is verified through inspection and acceptance testing (Does the deliverable meet requirements?)
- **Project scope** is measured through completion of work (Did we do all the planned work?)

**Practical Implication:**
When stakeholders say "Can you add this feature?" they're requesting a change to **product scope**. That change typically requires additional **project scope** (more work), which impacts schedule and cost.

---

## The Scope Statement

The scope statement is a narrative description of the project's scope. It answers:
- What will the project deliver?
- What's explicitly excluded?
- What are the boundaries and constraints?
- What are the acceptance criteria?

A clear scope statement prevents misunderstandings and provides a reference point for scope decisions throughout the project.

### Components of a Scope Statement

**1. Product Scope Description:**
A clear, concise description of the product, service, or result.

**Example (Expense System):**
"A cloud-based employee expense management system that enables employees to submit expenses via web or mobile app, attaches digital receipt images, routes expenses to appropriate approvers based on amount and policy, integrates with payroll for reimbursement, and provides finance team with reporting and audit capabilities."

**2. Acceptance Criteria:**
The conditions that must be satisfied for deliverables to be accepted.

**Example (Expense System):**
- Employees can submit expenses in under 2 minutes
- System automatically flags policy violations before routing to approvers
- Finance team can generate audit reports showing complete transaction history
- System maintains 99.5% uptime during business hours
- User acceptance testing completed with 90%+ satisfaction score

**3. Deliverables:**
The tangible outputs the project will produce.

**Example (Expense System):**
- Web application (responsive design)
- Mobile apps (iOS and Android)
- Integration with payroll system
- Administrator training materials
- User documentation and help system
- Data migration from legacy expense system

**4. Exclusions:**
What the project will NOT deliver (explicit boundaries).

**Example (Expense System):**
- Integration with external accounting systems (future phase)
- Expense policy enforcement (policy decisions remain with managers)
- Travel booking capabilities (separate travel management system)
- Offline mobile capability for areas without network coverage

**Why exclusions matter:** Explicitly stating what's out of scope prevents stakeholders from assuming it's included.

**5. Constraints:**
Limitations that restrict the project team's options.

**Example (Expense System):**
- Must use existing cloud infrastructure (AWS)
- Must comply with SOC 2 and GDPR requirements
- Must complete within 6-month timeline
- Budget limited to $500,000
- Must work with existing payroll system (no payroll system changes)

**6. Assumptions:**
Factors believed to be true but not yet confirmed.

**Example (Expense System):**
- Payroll system API documentation is accurate and complete
- 80% of employees have smartphones capable of running the mobile app
- Finance team will provide dedicated product owner 20 hours/week
- Current expense volume (5,000 reports/month) will not increase significantly

**Assumptions are risks.** If an assumption proves false, scope, schedule, or cost may be impacted.

---

## Work Breakdown Structure (WBS)

The WBS is a hierarchical decomposition of the project's work into smaller, more manageable components.

**Purpose:**
- Organizes and defines the total scope of the project
- Breaks complex work into work packages that can be estimated, assigned, and tracked
- Provides framework for cost estimation and scheduling
- Ensures nothing is overlooked

**Key principle:** The WBS is scope-driven, not activity-driven. It shows deliverables and work, not tasks or timeline.

### WBS Structure

The WBS uses a hierarchical tree structure:
- **Level 1:** Project (the whole scope)
- **Level 2:** Major deliverables or phases
- **Level 3:** Sub-deliverables or work packages
- **Level 4+:** Detailed work packages (as needed)

**Rule:** Each level represents 100% of the scope at the level above. Nothing is missing; nothing is extra.

### Sarah's Office Renovation WBS (Predictive)

```
1.0 Office Renovation Project
│
├── 1.1 Design and Planning
│   ├── 1.1.1 Architectural Design
│   ├── 1.1.2 Engineering (HVAC, Electrical, Structural)
│   ├── 1.1.3 Permit Applications
│   └── 1.1.4 Design Approvals
│
├── 1.2 Site Preparation
│   ├── 1.2.1 Space Clearance (furniture removal)
│   ├── 1.2.2 Demolition
│   └── 1.2.3 Hazardous Material Removal
│
├── 1.3 Construction
│   ├── 1.3.1 Structural Work (walls, ceilings, floors)
│   ├── 1.3.2 HVAC Installation
│   ├── 1.3.3 Electrical and Network Infrastructure
│   ├── 1.3.4 Plumbing
│   └── 1.3.5 Finishes (paint, flooring, fixtures)
│
├── 1.4 Systems and Equipment
│   ├── 1.4.1 AV Equipment Installation (conference rooms)
│   ├── 1.4.2 Security Systems
│   ├── 1.4.3 Fire Safety Systems
│   └── 1.4.4 Furniture Installation
│
├── 1.5 Inspection and Closeout
│   ├── 1.5.1 Building Inspections
│   ├── 1.5.2 Safety and Compliance Review
│   ├── 1.5.3 Punch List Completion
│   └── 1.5.4 Final Acceptance
│
└── 1.6 Project Management
    ├── 1.6.1 Project Planning
    ├── 1.6.2 Stakeholder Communication
    ├── 1.6.3 Risk and Issue Management
    └── 1.6.4 Quality Assurance
```

**Each work package** (lowest level) is:
- Clearly defined and bounded
- Assignable to a responsible party
- Estimable (cost and duration)
- Measurable (can track progress)

The WBS becomes the foundation for:
- **Cost estimates:** Estimating each work package and rolling up
- **Schedule:** Sequencing work packages and identifying dependencies
- **Resource planning:** Assigning resources to work packages
- **Risk identification:** Identifying risks for each work package

### WBS Dictionary

The WBS Dictionary provides detailed information for each WBS element:
- **WBS ID:** 1.3.2
- **Name:** HVAC Installation
- **Description:** Install new energy-efficient HVAC system including air handlers, ductwork, thermostats, and controls
- **Responsible Party:** Mechanical Contractor (ABC HVAC)
- **Acceptance Criteria:** System maintains temperature within 2°F of setpoint; passes inspection; operates within energy efficiency specifications
- **Dependencies:** Requires completion of 1.2.2 (Demolition) and 1.3.1 (Structural Work)
- **Estimated Cost:** $180,000
- **Estimated Duration:** 4 weeks

---

## Scope Baseline

The scope baseline is the approved version of the scope statement, WBS, and WBS dictionary. It defines what the project will deliver and becomes the reference for measuring scope changes.

**Components:**
1. **Scope Statement:** Narrative description, acceptance criteria, deliverables, exclusions
2. **WBS:** Hierarchical decomposition of work
3. **WBS Dictionary:** Detailed information for each WBS element

**In predictive projects:** The scope baseline is established during planning and formally approved. Changes to the baseline require formal change control.

**In agile projects:** There is no traditional scope baseline. Instead, the product vision and high-level roadmap provide direction, but detailed scope emerges iteratively.

**In hybrid projects:** Program-level scope is baselined; team-level scope is managed adaptively.

---

## Scope Management Across Delivery Approaches

How you define, manage, and control scope depends fundamentally on your delivery approach.

### Predictive: Detailed Scope, Controlled Changes

**Philosophy:** Define scope comprehensively upfront. Baseline it. Control changes through formal change control.

**Process:**
1. **Collect requirements:** Interviews, workshops, document analysis (Section 11a)
2. **Define scope:** Create scope statement with deliverables, acceptance criteria, exclusions
3. **Create WBS:** Decompose work into manageable work packages
4. **Validate scope:** Stakeholder review and approval
5. **Baseline scope:** Approved scope becomes the baseline
6. **Control scope:** Changes require formal change request and approval

**Sarah's Office Renovation Example:**
- **Scope statement:** 8 pages describing deliverables, acceptance criteria, constraints, assumptions
- **WBS:** 6 major deliverables, 25 work packages
- **Baseline approval:** Department heads, facilities, finance, and sponsor sign off
- **Change control:** Any scope change goes through change control board

**Month 4: Requested Change**
IT director requests adding "podcast recording studio" (new deliverable).

Sarah's process:
1. **Change request submitted:** Describes new deliverable and business justification
2. **Impact analysis:** Sarah works with architect and contractor to assess impact
   - Scope: Adds 400 sq ft studio with acoustic treatment, recording equipment
   - Cost: $95,000
   - Schedule: 3-week delay (design + construction)
   - Risk: May impact move-in date
3. **Change control board review:** Approves change but reduces scope elsewhere (eliminates one collaboration zone) to offset cost
4. **Baseline updated:** Scope statement, WBS, budget, and schedule revised and re-approved

**Key principle:** Changes aren't bad, but they must be conscious decisions with understood trade-offs.

**When predictive scope works:**
- Requirements are stable and well-understood
- Stakeholders need certainty about what will be delivered
- Regulatory or contractual requirements demand detailed scope documentation
- Solution approach is proven (low uncertainty)

**Risks of predictive scope:**
- **Rigidity:** Formal change control discourages beneficial changes
- **Premature commitment:** Locking in scope before fully understanding the problem
- **Gold plating:** Teams build features that meet requirements but don't deliver value
- **Stakeholder dissatisfaction:** Delivered scope meets baseline but doesn't meet current needs

---

### Agile: Flexible Scope, Fixed Time and Team

**Philosophy:** Fix time (sprints) and team capacity. Vary scope to fit. Prioritize ruthlessly. Deliver highest-value features first.

**Process:**
1. **Product vision:** High-level description of the product and value it delivers
2. **Product roadmap:** Sequence of releases showing major capabilities over time
3. **Product backlog:** Prioritized list of features, user stories, and enhancements
4. **Sprint planning:** Team pulls highest-priority stories into sprint (typically 2 weeks)
5. **Refinement:** Continuously refine and reprioritize backlog based on feedback
6. **Done:** Delivered working software each sprint; scope emerges incrementally

**Sarah's Expense System Example:**

**Product Vision:**
"Make expense submission effortless for employees while ensuring compliance and auditability for finance."

**Product Roadmap (6 months, 12 sprints):**
- **Release 1 (Sprints 1-4):** Basic expense submission, approval routing, receipt attachment
- **Release 2 (Sprints 5-8):** Mobile app, OCR receipt scanning, policy validation
- **Release 3 (Sprints 9-12):** Payroll integration, finance reporting, audit trail

**Product Backlog (top priorities):**
1. As an employee, I want to create an expense report with multiple line items
2. As an employee, I want to attach receipt images to expense line items
3. As a manager, I want to review and approve/reject expense reports
4. As a finance analyst, I want to see all pending expense reports
5. As an employee, I want to see status of my expense reports
6. [80 more stories in prioritized order]

**Sprint 1 Planning:**
Team reviews top stories, discusses acceptance criteria, estimates effort. Team velocity is ~20 story points per sprint. Team pulls stories 1-5 (totaling 18 points) into Sprint 1.

**Sprint 1 Review (2 weeks later):**
Team demonstrates working software: Employees can create expense reports, attach receipts, submit for approval. Managers can review and approve.

Finance director feedback: "This is great, but we also need managers to see expense trends for their team."

Product owner adds new story to backlog: "As a manager, I want to see expense trends for my team." Prioritizes it for Sprint 3.

**Key principle:** Scope is flexible. Team delivers highest-value features first. Lower-priority features may never be built if time runs out, and that's okay—the most valuable work is done.

**When agile scope works:**
- Requirements are uncertain or evolving
- Stakeholder feedback will improve the solution
- Time-to-market is critical (deliver value early)
- The team can learn and adapt incrementally

**Risks of agile scope:**
- **Scope creep:** Without a baseline, scope can grow indefinitely
- **No finish line:** Stakeholders keep adding features; team never reaches "done"
- **Inconsistency:** Incremental decisions create architectural or UX inconsistency
- **Stakeholder confusion:** Traditional stakeholders expect detailed scope upfront

**Preventing scope creep in agile:**
1. **Fixed timebox:** Sprint length is fixed; scope varies to fit
2. **Backlog limit:** Cap backlog size (e.g., no more than 100 stories)
3. **One in, one out:** For every new story added, remove or defer a lower-priority story
4. **Definition of Done:** Clear criteria for what "done" means; prevents endless refinement
5. **Release planning:** Commit to release date; scope is what fits by that date

---

### Hybrid: Baselined Program Scope, Adaptive Team Scope

**Philosophy:** Define program-level scope with baselines and governance. Allow teams to manage their scope adaptively within program boundaries.

**Process:**
1. **Program scope:** Define high-level deliverables, milestones, and outcomes
2. **Baseline program scope:** Approve and baseline program roadmap
3. **Team scope:** Teams manage their detailed scope using backlog and sprints
4. **Integration:** Ensure team deliverables align with program scope
5. **Governance:** Program-level changes require change control; team-level changes are managed adaptively

**Sarah's Digital Transformation Example:**

**Program Scope (Baselined):**
- **Deliverable 1:** Cloud-based customer service platform (Months 1-12)
- **Deliverable 2:** Regional implementation (15 regions, 3 per quarter, Months 6-18)
- **Deliverable 3:** Training and adoption programs (ongoing)
- **Outcome:** Reduce customer response time from 24 hours to 2 hours; increase satisfaction by 30%

**Program Baseline Approval:**
Executive sponsor, finance, and regional directors approve the program scope, budget ($5M), and 18-month timeline.

**Platform Team Scope (Agile):**
Platform team uses product backlog and 2-week sprints to develop core capabilities:
- Sprint 1-6: User authentication, case management, knowledge base
- Sprint 7-12: Mobile app, real-time notifications, analytics
- Sprint 13-18: Integration with billing and CRM systems

Platform team has flexibility to adapt their scope based on feedback, as long as they deliver capabilities needed for regional rollouts.

**Regional Team Scope (Predictive):**
Each regional implementation team uses a predictive approach:
- Detailed requirements for regional configuration
- Baseline scope for data migration, training, and go-live
- Formal change control for regional scope changes

**Integration:**
- Monthly program steering committee reviews platform progress and regional readiness
- Platform team delivers features needed for next regional rollout
- Regional teams provide feedback that influences platform backlog priorities

**Change Example:**

**Team-level change (No program impact):**
Platform team receives feedback that users want "bulk case assignment" feature. Product owner adds it to backlog, prioritizes for next sprint. No change control needed—within team scope.

**Program-level change (Requires change control):**
Executive sponsor requests adding 2 additional regions to rollout (17 regions instead of 15).

Sarah's process:
1. **Impact analysis:** Additional regions require 4 more months, $800K additional cost
2. **Change control board review:** Approves change with additional budget and timeline extension
3. **Program baseline updated:** Roadmap, budget, and resource plan revised

**When hybrid scope works:**
- Different parts of the project have different levels of uncertainty
- Program-level governance requires predictability and control
- Team-level execution benefits from agility and adaptation
- Integration points require coordination across teams

**Risks of hybrid scope:**
- **Misalignment:** Team decisions conflict with program scope
- **Governance overhead:** Excessive control stifles team agility
- **Confusion:** Stakeholders unclear on what's baselined vs. adaptive

---

## Requirements Architecture: Organizing Requirements for Success

Requirements architecture provides a framework for organizing, structuring, and relating requirements. Just as buildings need architectural blueprints, complex projects need requirements architecture to ensure coherence, completeness, and alignment.

### What is Requirements Architecture?

**Definition:** The structure and organization of requirements that shows how they relate to each other and to business objectives.

**Purpose:**
- Ensure complete coverage of business needs
- Identify gaps and overlaps in requirements
- Facilitate traceability and impact analysis
- Support communication and understanding
- Enable effective prioritization and decision-making

### Requirements Architecture Components

#### 1. Requirements Levels
Requirements exist at different levels of detail and abstraction:

**Business Requirements (Level 1):**
- High-level organizational needs and objectives
- Answer "Why" the project exists
- Example: "Reduce operational costs by 20%"

**Stakeholder Requirements (Level 2):**
- Needs of specific stakeholder groups
- Translate business needs into stakeholder terms
- Example: "Finance team needs automated expense processing"

**Solution Requirements (Level 3):**
What the solution must do:
- **Functional:** Capabilities and features
- **Non-functional:** Quality attributes (performance, security, usability)

**Transition Requirements (Level 4):**
- Temporary capabilities needed for implementation
- Example: "Data migration from legacy system"

#### 2. Requirements Categories
Group requirements by type or domain:

**Functional Categories:**
- User management
- Data processing
- Reporting
- Integration
- Security

**Non-functional Categories:**
- Performance
- Availability
- Security
- Usability
- Maintainability
- Scalability

**Business Categories:**
- Regulatory compliance
- User experience
- Operational efficiency
- Cost reduction

#### 3. Requirements Relationships
Requirements rarely exist in isolation. Key relationship types:

**Decomposition:**
- Parent-child relationships (epic to features to stories)
- Example: Expense management → Submit expense → Photograph receipt

**Dependency:**
- Prerequisite relationships
- Example: User authentication required before expense submission

**Conflict:**
- Mutually exclusive requirements
- Example: Maximum security vs. maximum usability

**Derivation:**
- How requirements derive from higher-level requirements
- Trace business requirement down to implementation details

**Association:**
- Related but not dependent requirements
- Example: User interface and reporting requirements

### Sarah's Requirements Architecture Example

**Office Renovation Requirements Architecture:**

```
Business Requirements (Level 1)
├── BR-001: Increase collaborative space by 40%
├── BR-002: Reduce energy costs by 25%
├── BR-003: Comply with accessibility regulations
└── BR-004: Support hybrid work model

Stakeholder Requirements (Level 2)
├── Facilities: FM-001: Maintain building systems
├── IT: IT-001: Support 500 concurrent users
├── HR: HR-001: Provide diverse workspace types
├── Safety: SF-001: Exceed safety code requirements
└── Finance: FN-001: Minimize operational disruption

Solution Requirements (Level 3)
├── Functional
│   ├── FS-001: 10 collaboration zones
│   ├── FS-002: 120 workstations
│   ├── FS-003: 4 conference rooms
│   ├── FS-004: Energy-efficient systems
│   └── FS-005: Accessibility features
└── Non-functional
    ├── NFS-001: Energy performance (LEED Silver)
    ├── NFS-002: Acoustic performance (<45dB)
    ├── NFS-003: Air quality (ASHRAE standards)
    └── NFS-004: Network uptime (99.9%)

Transition Requirements (Level 4)
├── TR-001: Phased occupancy plan
├── TR-002: Temporary office space
├── TR-003: Systems migration
└── TR-004: Staff training
```

### Requirements Allocation

Requirements allocation assigns requirements to solution components, releases, or teams.

**Allocation Dimensions:**

**By Component:**
- Which system/module implements each requirement
- Helps identify system boundaries and interfaces
- Example: User authentication allocated to identity management system

**By Release/Phase:**
- Which requirements in which release
- Supports incremental delivery
- Example: Basic reporting in Phase 1, advanced analytics in Phase 2

**By Team:**
- Which team implements which requirements
- Important for large projects with multiple teams
- Example: Frontend team handles UI requirements, backend team handles API requirements

**By Priority:**
- Must/should/could/won't allocation
- Guides implementation sequencing
- Example: Must-haves allocated to MVP, should-haves to later releases

### Requirements Allocation Matrix

A requirements allocation matrix tracks where each requirement is implemented:

| Requirement ID | Description | Component | Release | Team | Priority |
|----------------|-------------|-----------|---------|------|----------|
| BR-001 | Increase collaborative space | Floor Plan | Phase 1 | Architecture | Must |
| BR-002 | Reduce energy costs | HVAC/Lighting | Phase 1 | MEP | Must |
| IT-001 | Support 500 users | Network Infrastructure | Phase 1 | IT | Must |
| FS-006 | Video conferencing | AV Systems | Phase 2 | AV Team | Should |
| NFS-002 | Acoustic performance | Interior Design | Phase 2 | Interior | Should |

### Benefits of Requirements Architecture

**1. Completeness:**
- Systematic approach ensures all aspects covered
- Identifies gaps in requirements coverage
- Reduces risk of missing requirements

**2. Consistency:**
- Ensures requirements don't contradict
- Maintains alignment across levels
- Supports coherent solution design

**3. Traceability:**
- Clear links from business to implementation
- Facilitates impact analysis
- Supports compliance and audit

**4. Communication:**
- Visual representation aids understanding
- Provides common language for stakeholders
- Supports discussion and decision-making

**5. Management:**
- Supports requirements prioritization
- Facilitates scope management
- Enables progress tracking

### Creating Requirements Architecture

**Step 1: Gather and Categorize**
- Collect all requirements from elicitation activities
- Categorize by type, level, and domain
- Remove duplicates and consolidate similar items

**Step 2: Define Hierarchy**
- Establish requirement levels
- Create decomposition structure
- Define parent-child relationships

**Step 3: Identify Relationships**
- Map dependencies between requirements
- Identify conflicts and constraints
- Document derivation links

**Step 4: Allocate Requirements**
- Assign to components/releases/teams
- Create allocation matrix
- Validate allocation completeness

**Step 5: Review and Refine**
- Validate with stakeholders
- Check for gaps and overlaps
- Ensure alignment with business objectives

### Tools for Requirements Architecture

**Visualization Tools:**
- Hierarchy charts (shows levels and relationships)
- Mind maps (explore requirement connections)
- Matrix diagrams (show allocations and dependencies)
- Flowcharts (show process relationships)

**Management Tools:**
- Requirements management software (Jira, Azure DevOps)
- Modeling tools (Enterprise Architect, Visio)
- Spreadsheets (for smaller projects)
- Wikis (for collaborative documentation)

**Agile Approaches:**
- Story maps (visualize user journey)
- Impact mapping (connect features to goals)
- Feature trees (hierarchical feature breakdown)
- Roadmap mapping (plan releases)

---

## Scope Validation

Scope validation is the process of obtaining stakeholder acceptance of completed deliverables.

**Difference from quality control:**
- **Quality control:** Checking if deliverables are correct (meet specifications)
- **Scope validation:** Checking if deliverables are acceptable (meet stakeholder needs)

A deliverable can pass quality control (meets specs) but fail scope validation (stakeholders don't accept it).

### Validation in Predictive Projects

**Process:**
1. **Deliverable completed:** Team completes work package
2. **Quality control:** Team verifies deliverable meets specifications
3. **Validation:** Stakeholders inspect deliverable and formally accept or reject
4. **Documentation:** Acceptance documented; deliverable transitioned to next phase or operations

**Sarah's Office Renovation Example:**
Work package: "1.4.1 AV Equipment Installation"

1. **Completion:** Contractor installs video conferencing equipment in 4 conference rooms
2. **Quality control:** Sarah's team tests each system (video quality, audio clarity, screen sharing, recording)
3. **Validation:** IT director and department heads inspect systems, test functionality, confirm it meets requirements
4. **Acceptance:** IT director signs acceptance form; equipment transitioned to IT support team

**Rejection scenario:** During validation, stakeholders discover that one conference room's camera doesn't capture participants at the far end of the table (doesn't meet "all participants visible" requirement). Deliverable rejected; contractor must adjust camera placement.

### Validation in Agile Projects

**Process:**
1. **Sprint work completed:** Team completes user stories
2. **Definition of Done:** Team verifies stories meet Definition of Done (including automated tests, code review, documentation)
3. **Sprint review:** Team demonstrates working software to stakeholders
4. **Feedback:** Stakeholders provide feedback; product owner adjusts backlog
5. **Acceptance:** Product owner accepts completed stories; software potentially shippable

**Sarah's Expense System Example:**
Sprint 3 deliverable: "Receipt OCR scanning"

1. **Completion:** Team implements OCR feature
2. **Definition of Done:** Automated tests pass, code reviewed, integrated into main branch
3. **Sprint review:** Team demonstrates: User photographs receipt, system extracts vendor, date, amount
4. **Stakeholder feedback:** Finance team impressed but notes system doesn't handle foreign currency receipts well
5. **Acceptance:** Product owner accepts story (meets acceptance criteria). Adds new story to backlog: "As an employee, I want OCR to recognize foreign currency and convert to home currency"

**Key difference:** In agile, validation happens incrementally every sprint, not at the end of a long phase. Feedback is incorporated into future sprints.

### Validation in Hybrid Projects

**Program-level validation:** Formal acceptance of major deliverables and milestones (predictive approach)

**Team-level validation:** Sprint reviews and continuous feedback (agile approach)

**Sarah's Digital Transformation Example:**
- **Platform team:** Sprint reviews every 2 weeks with product owner and key stakeholders
- **Regional team:** Formal acceptance of regional go-live (user acceptance testing, sign-off by regional director)
- **Program level:** Quarterly steering committee reviews progress against program milestones

---

## Preventing and Managing Scope Creep

Scope creep is the uncontrolled expansion of scope without corresponding increases in time, cost, or resources.

**Causes of scope creep:**
- Unclear requirements or scope statement
- Lack of formal change control process
- Stakeholders treating every request as "small" or "quick"
- Poor stakeholder communication leading to misunderstood expectations
- Team saying "yes" to every request without assessing impact

**Preventing scope creep:**

**1. Clear scope baseline (Predictive):**
Document and approve scope statement, WBS, acceptance criteria. Everyone knows what's in and what's out.

**2. Formal change control (Predictive):**
All scope changes go through change request process with impact analysis and approval.

**3. Fixed timebox (Agile):**
Sprint length is fixed; scope varies to fit. New requests go into backlog, not current sprint.

**4. Backlog prioritization (Agile):**
Product owner ruthlessly prioritizes. New features replace lower-priority features, not add to scope indefinitely.

**5. Stakeholder communication:**
Regular updates showing scope, progress, and trade-offs. When stakeholders request new features, show impact on schedule/cost/existing scope.

**6. Definition of Done:**
Clear criteria for what "done" means prevents endless refinement and gold plating.

**Example: Managing a Scope Creep Request**

**Situation:** Three months into Sarah's office renovation, the facilities manager requests adding "bike storage room" (not in original scope).

**Poor response:** "Sure, we can squeeze that in." (Result: Schedule delay, cost overrun, team resentment)

**PMI-aligned response:**

Sarah says: "Let me assess the impact and present options to the change control board."

**Impact analysis:**
- **Scope:** 200 sq ft bike storage room with security locks
- **Cost:** $25,000 (construction + security system)
- **Schedule:** 2-week delay (design + construction)
- **Risk:** Delay impacts planned move-in date

**Options presented to change control board:**
1. **Add bike storage, extend timeline 2 weeks, add $25,000 to budget**
2. **Add bike storage, remove one collaboration zone to offset cost and schedule**
3. **Defer bike storage to separate future project**

**Change control board decision:** Option 3 (defer). Bike storage is valuable but not critical for move-in; will be handled in a separate project next quarter.

**Key principle:** Sarah didn't say "no" automatically. She assessed impact, presented options, and facilitated a conscious decision.

---

## Practical Examples

### Example 1: Defining "What's Out" to Prevent Misunderstanding

**Situation:** Sarah's expense system scope statement includes deliverables but doesn't explicitly state exclusions.

Three months into development, the CFO asks, "When will the system include corporate credit card integration?"

Sarah: "That's not in scope for this project."

CFO: "What? I assumed it was included. How can we have an expense system without credit card integration?"

**Problem:** Scope statement didn't explicitly exclude credit card integration. CFO assumed it was included.

**Lesson Learned:**
Sarah revises the scope statement to include explicit exclusions:

**Exclusions:**
- Corporate credit card integration (future phase)
- Travel booking capabilities (separate system)
- Expense policy enforcement (policy decisions remain with managers)
- Integration with external accounting systems beyond payroll

Now stakeholders know what's NOT included, preventing misunderstandings.

**PMI Principle:** Scope statements should explicitly state what's excluded, not just what's included.

---

### Example 2: Using WBS to Identify Missing Work

**Situation:** Sarah is creating the WBS for the office renovation. Her initial WBS includes:
- Design and Planning
- Construction
- Systems and Equipment
- Inspection and Closeout

During WBS review, the contractor asks: "What about demolition? We can't start construction until existing walls are removed."

Sarah realizes she's missing a major deliverable: Site Preparation (including demolition, furniture removal, hazardous material removal).

She adds it to the WBS:
- 1.2 Site Preparation
  - 1.2.1 Space Clearance
  - 1.2.2 Demolition
  - 1.2.3 Hazardous Material Removal

**Lesson:** The WBS helps identify missing scope. If it's not in the WBS, it's not in the project.

**PMI Principle:** 100% rule—the WBS must represent 100% of the work required to complete the project.

---

### Example 3: Agile Backlog Grooming to Prevent Bloat

**Situation:** Sarah's expense system backlog has grown from 80 stories to 200 stories over 4 sprints. The team feels overwhelmed; the backlog is unmanageable.

**Sarah's intervention:**
She facilitates a backlog refinement session:

1. **Review each story:** Is it still relevant? Does it align with product vision?
2. **Remove obsolete stories:** 30 stories are no longer relevant (duplicate or superseded by completed work)
3. **Defer low-value stories:** 80 stories are moved to "future considerations" backlog (not actively planned)
4. **Focus on high-value stories:** 90 stories remain in active backlog

She institutes a "one in, one out" rule: For every new story added, the product owner must remove or defer a story of equal size.

**Result:** Backlog is manageable; team has clarity on what's important.

**PMI Principle:** In agile, the backlog is not a commitment. It's a prioritized list of options. Regularly prune to keep it focused.

---

## Summary

Scope defines the boundaries of the project: What's included, what's excluded, and what "done" looks like.

**Key Takeaways:**

1. **Product scope vs. project scope:** Product scope is WHAT you're building; project scope is the WORK required to build it

2. **Scope statement:** Describes deliverables, acceptance criteria, exclusions, constraints, and assumptions; provides clarity and prevents misunderstandings

3. **Work Breakdown Structure (WBS):** Hierarchical decomposition of work into manageable work packages; foundation for estimating, scheduling, and tracking

4. **Scope baseline:** Approved scope statement, WBS, and WBS dictionary; serves as reference for measuring scope changes (predictive projects)

5. **Predictive scope:** Defined comprehensively upfront, baselined, changes controlled through formal change control

6. **Agile scope:** Product vision and roadmap provide direction; detailed scope emerges through backlog refinement; scope is flexible, time is fixed

7. **Hybrid scope:** Program-level scope baselined; team-level scope managed adaptively

8. **Scope validation:** Obtaining stakeholder acceptance of deliverables; happens at phase gates (predictive) or sprint reviews (agile)

9. **Scope creep:** Uncontrolled scope expansion; prevented through clear baselines, change control, fixed timeboxes, and prioritization

**PMI Perspective:**
- Scope clarity is essential, but the level of detail should match the level of certainty
- In predictive projects, detailed scope upfront reduces risk and provides control
- In agile projects, emergent scope enables adaptation and learning
- Changes to scope are inevitable; manage them consciously with understood trade-offs

---

**Up Next:** Section 11c explores schedule planning and work breakdown—translating scope into a sequenced plan with dependencies, critical path, and buffers.
