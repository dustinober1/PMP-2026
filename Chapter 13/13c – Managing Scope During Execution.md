# 13c – Managing Scope During Execution

## Learning Objectives

By the end of this section, you will be able to:

1. Distinguish between scope validation and scope verification during execution
2. Identify and prevent scope creep while remaining responsive to legitimate changes
3. Evaluate change requests effectively, balancing stakeholder needs with project constraints
4. Implement appropriate change control processes for predictive, agile, and hybrid contexts
5. Manage stakeholder expectations when scope changes are requested or denied
6. Understand the relationship between scope, schedule, cost, and quality trade-offs
7. Apply PMI's philosophy of value-driven scope management

## Introduction: The Moving Target Problem

Scope is what the project will deliver—the features, functions, deliverables, and outcomes. In a perfect world, scope would be defined upfront and remain stable throughout execution. In reality, scope is a moving target:

- Stakeholders realize they forgot to include critical requirements
- Business conditions change, making original requirements obsolete
- Users interact with early deliverables and request improvements
- Technology evolves, creating new possibilities
- Competitors launch features that stakeholders now want
- Regulatory requirements change, forcing scope additions

The project manager's challenge is balancing two competing needs:
1. **Control scope** to prevent endless expansion that blows the budget and schedule
2. **Remain responsive** to legitimate changes that increase value or are necessary

Different ways of working handle this balance differently:
- **Predictive**: Scope is baselined early; changes go through formal change control
- **Agile**: Scope evolves continuously within a fixed time/budget; prioritization determines what gets built
- **Hybrid**: Program scope is baselined; team-level scope is adaptive within boundaries

Understanding when and how to manage scope changes is critical for PMP exam success and project delivery.

## Scope Validation vs. Scope Verification

Before diving into scope change management, it's important to distinguish two related but different concepts:

### Scope Verification
**Definition**: Ensuring that deliverables are completed correctly according to specifications and quality standards.
**Question**: Did we build it right?
**Process**: Inspections, testing, quality reviews
**Timing**: Throughout execution
**Responsibility**: Project team, QA

**Example – Office Renovation**: Verifying that the HVAC system meets the technical specifications in the contract. Measurements show proper airflow, temperature control, and noise levels. The system is built *correctly*.

### Scope Validation
**Definition**: Formal acceptance of completed deliverables by stakeholders.
**Question**: Did we build the right thing?
**Process**: Stakeholder review and formal acceptance
**Timing**: At deliverable completion or phase gates
**Responsibility**: Stakeholders, sponsor, customer

**Example – Office Renovation**: The stakeholder (office manager) walks through the completed space and formally accepts it. Even though the HVAC system meets specifications (verified), the stakeholder decides the conference room is too cold. This is a scope validation issue—the stakeholder's expectations don't match the deliverable.

**Key Insight**: You can verify scope perfectly (build it right) but still fail scope validation if stakeholders' expectations don't match the deliverable (didn't build the right thing). Both are necessary for project success.

## Scope Creep: The Silent Project Killer

**Scope creep** is the uncontrolled expansion of project scope without corresponding adjustments to time, cost, or resources. It's one of the most common causes of project failure.

### How Scope Creep Happens

**1. Gold Plating**
Team members add features or functionality that weren't requested because they think it's a good idea.

**Example – Expense System**: A developer adds a "favorite expenses" feature that allows users to save common expenses for quick resubmission. Nobody asked for this feature. It sounds useful, but it consumes three days of development time that was supposed to be spent on approved features.

**Problem**: The team is delivering features stakeholders didn't prioritize, while delaying features they did prioritize.

**2. Undocumented Changes**
Small changes are approved informally without updating the scope baseline or assessing impacts.

**Example – Office Renovation**: A stakeholder asks the contractor to "just add one more outlet in the conference room." The contractor says "sure, no problem" without telling Sarah. This seems minor, but:
- The outlet requires additional electrical wire run
- The circuit may be at capacity, requiring a new circuit
- Adds two hours of labor
- Delays completion by half a day

Over the course of the project, dozens of these "small" changes add up to significant scope, cost, and schedule impacts.

**3. Assumption Gaps**
What the project team thinks is in scope differs from what stakeholders think is in scope.

**Example – Expense System**: The project charter states "develop an expense reporting system." The team assumes this means employees enter expenses and managers approve them. Stakeholders assume it also includes automatic mileage calculation, receipt OCR scanning, corporate card integration, and travel booking.

When stakeholders see the first demo, they're disappointed: "Where's the mileage calculator?" The team responds: "That wasn't in the requirements." The stakeholder responds: "Of course it was—it's an expense system!"

**Problem**: Scope was never clearly defined, leading to expectation mismatches.

**4. Requirement Evolution**
Stakeholders see early deliverables and realize what they really need is different from what they originally requested.

**Example – Transformation Program**: The Process workstream develops new approval workflows based on stakeholder interviews in Phase 1. In Phase 2 pilot testing, users interact with the workflows and realize they're too complex—approvals require too many steps.

Stakeholders request simplification: "Can we reduce this from five approval steps to two?" This is legitimate feedback, but it requires rework of already-completed deliverables.

### Preventing Scope Creep

**1. Clear Scope Definition**
Invest time upfront (or at the start of each iteration) to clearly define what is and isn't in scope.

**Example – Expense System**: The Product Owner creates a detailed product backlog with acceptance criteria for each feature. Features not on the backlog are explicitly out of scope until prioritized. This creates a shared understanding.

**2. Formal Change Control**
All scope changes go through a defined process (covered in detail below).

**3. Regular Scope Validation**
Validate deliverables with stakeholders frequently to catch expectation gaps early.

**Example – Transformation Program**: Sarah schedules bi-weekly stakeholder demos for each workstream. Stakeholders see work-in-progress and provide feedback before deliverables are 100% complete. This allows mid-course corrections before major rework is needed.

**4. Manage Stakeholder Expectations**
Communicate clearly about scope constraints and trade-offs.

**Example – Expense System**: When a stakeholder requests a new feature, the Product Owner explains: "We can add this feature, but it will delay the release by two weeks, or we can remove another feature to make room. Which would you prefer?"

This forces stakeholders to consider trade-offs rather than assuming everything can be added.

## Change Control in Predictive Projects

Predictive projects use formal change control processes to manage scope changes. The process is structured and deliberate.

### The Change Control Process

**Step 1: Change Request Submission**
Anyone can submit a change request, but it must be documented in a standard format.

**Example – Office Renovation**: A stakeholder requests adding a small kitchenette to the break room. The change request form captures:
- Description of the change
- Justification (why it's needed)
- Requestor and date

**Step 2: Impact Analysis**
The project manager and team assess the impacts of the change on scope, schedule, cost, quality, and risk.

**Example – Office Renovation**: Sarah analyzes the kitchenette change:

**Scope Impact**:
- Add: Sink, countertop, cabinets, small refrigerator
- Requires: Plumbing rough-in, electrical for refrigerator, cabinet installation

**Schedule Impact**:
- Plumbing rough-in must happen before drywall (already complete in break room)
- Must remove drywall, add plumbing, re-drywall
- Estimated delay: 5 days

**Cost Impact**:
- Materials: $3,500
- Labor (including drywall removal/replacement): $4,200
- Total: $7,700

**Quality Impact**:
- Patching drywall may result in visible seams or texture mismatch
- Risk of water damage if plumbing is not properly installed

**Risk Impact**:
- Delays the critical path by 5 days
- May impact the planned move-in date
- Introduces new inspection requirements (plumbing)

Sarah documents these impacts in the change request.

**Step 3: Change Review and Decision**
A designated authority (project manager, sponsor, change control board) reviews the change request and decides: approve, reject, or defer.

**Example – Office Renovation**: Sarah presents the change request to the project sponsor:

**Option 1 – Approve**: Add the kitchenette. Accept the $7,700 cost increase and 5-day delay. Move-in date shifts from May 1 to May 6.

**Option 2 – Reject**: Don't add the kitchenette. Keep the project on schedule and budget.

**Option 3 – Defer**: Approve the kitchenette but implement it *after* the initial move-in as a follow-on project. This avoids the current project delay but still delivers the requested functionality.

The sponsor chooses Option 3: defer. The original project completes on time, and the kitchenette is added in a small follow-on project in June.

**Step 4: Implement the Change (if approved)**
If approved, the change is incorporated into the project plan, scope baseline is updated, and work proceeds.

**Step 5: Communicate the Decision**
All stakeholders are informed of the decision and the rationale.

**Example – Office Renovation**: Sarah communicates to the requestor: "Your kitchenette request is approved, but implementation is deferred to June to avoid delaying the move-in date. We'll start the kitchenette project immediately after occupancy."

This manages expectations and maintains stakeholder trust.

### Change Control Board (CCB)

For large, complex projects, a Change Control Board (CCB) reviews and approves changes. The CCB typically includes:
- Project sponsor
- Key stakeholders
- Project manager
- Technical experts
- Finance representative

**Example – Transformation Program**: Sarah establishes a CCB for the transformation program:
- **Sponsor**: Executive VP
- **Business Stakeholders**: Directors from Finance, HR, Operations
- **Project Manager**: Sarah
- **Technical Lead**: Technology workstream lead
- **Finance**: Budget analyst

The CCB meets bi-weekly to review change requests. This ensures that changes are evaluated holistically and decisions consider business, technical, and financial impacts.

### When to Use Formal Change Control

Not every change requires formal change control. Minor changes within the project manager's authority can be approved quickly. Major changes affecting scope, schedule, or budget require formal review.

**Example – Office Renovation**:
- **Minor change (PM approval)**: Changing paint color from "eggshell white" to "warm white" (same cost, no schedule impact)
- **Major change (CCB approval)**: Adding a kitchenette ($7,700 cost, 5-day delay)

Sarah uses judgment to determine which changes require escalation and which she can approve directly.

## Scope Management in Agile Projects

Agile projects embrace change as a source of competitive advantage. But this doesn't mean uncontrolled scope expansion—it means disciplined prioritization within fixed time and budget constraints.

### Fixed Time/Budget, Variable Scope

Agile projects typically fix time and budget (e.g., six two-week sprints with a five-person team) and vary scope based on priorities and learning.

**Example – Expense System**: The project has a fixed budget ($250,000) and timeline (6 months, 12 sprints). The Product Owner has a backlog of 150 potential features. The team won't build all 150—they'll build the highest-priority features that fit within the time and budget.

This approach allows scope to evolve based on stakeholder feedback and value delivery without blowing the budget or timeline.

### The Product Backlog: Dynamic Scope

The product backlog is a prioritized list of features and requirements. It's the agile equivalent of the scope baseline, but it's dynamic—constantly reprioritized based on value and learning.

**Example – Expense System**: The initial backlog for Sprint 1 includes:
1. User authentication
2. Create expense report
3. Attach receipts
4. Submit for approval
5. Manager approval workflow
...
50. Advanced analytics dashboard

By Sprint 5, the backlog has evolved:
- New items added based on user feedback (e.g., mobile support—now priority #2)
- Items removed because they're no longer valuable (e.g., fax integration—dropped entirely)
- Items reprioritized based on business needs (e.g., corporate card integration moved from #30 to #5 due to a new vendor contract)

**The backlog evolves, but the team's capacity doesn't**. The Product Owner continuously prioritizes: what delivers the most value now?

### Sprint Commitment: Scope Stability Within Iterations

While the overall backlog is dynamic, the scope within a single sprint is stable. Once the team commits to a sprint goal, scope changes are discouraged to protect focus and flow.

**Example – Expense System**: During Sprint 7 planning, the team commits to delivering mobile approval functionality. On Day 3 of the sprint, a stakeholder requests adding a "bulk approve" feature.

The Product Owner responds: "Great idea! I'll add it to the backlog for Sprint 8. We're protecting the Sprint 7 commitment to deliver mobile approval."

This balances responsiveness (the feature is captured and prioritized) with stability (the team isn't disrupted mid-sprint).

**Exception**: If a critical change emerges (regulatory requirement, security vulnerability), the Product Owner can cancel the sprint, re-plan, and restart. This is rare but necessary for true emergencies.

### Managing Scope Creep in Agile: Prioritization, Not Change Control

Agile doesn't use formal change requests. Instead, all requests go into the backlog and are prioritized against existing work.

**Example – Expense System**: A stakeholder requests integrating with a new travel booking system. The Product Owner evaluates:

**Value**: High—this would streamline the travel expense process
**Effort**: Large—estimated at 5 sprints of work
**Priority**: Compared to other backlog items, this is less urgent than mobile support and accounting integration

**Decision**: Add to backlog at priority #15. It will be built eventually, but not immediately.

The stakeholder is informed: "We've captured your request. Based on current priorities, we estimate building this in Sprints 10-14. We'll keep you updated as priorities evolve."

This is transparent, value-driven, and prevents scope creep while remaining responsive.

### Scope Trade-Offs: The Iron Triangle in Agile

The iron triangle (scope, time, cost) still applies in agile, but the variables shift:
- **Time**: Fixed (sprint length, release timeline)
- **Cost**: Fixed (team size, budget)
- **Scope**: Variable (what gets built within time/cost constraints)

**Example – Expense System**: The sponsor wants to accelerate the release from 6 months to 4 months.

**Options**:
1. **Reduce scope**: Release with fewer features (MVP first, enhancements later)
2. **Increase cost**: Add more team members to increase velocity (though this has limits due to Brooks's Law—adding people to a late project makes it later)
3. **Accept quality trade-offs**: Cut corners on testing or documentation (risky—creates technical debt)

The Product Owner chooses Option 1: Release an MVP (minimum viable product) in 4 months with core features (create expense, submit, approve, reimburse). Advanced features (analytics, mobile, integrations) are deferred to a second release.

**This is a scope trade-off decision**, transparently communicated and aligned with business priorities.

## Scope Management in Hybrid Projects

Hybrid projects use predictive scope management at the program level and agile scope management at the team level.

### Program-Level Scope Baseline

The program defines high-level scope that's relatively stable and controlled through formal change control.

**Example – Transformation Program**: The program scope baseline includes:
- **Phase 1**: Assess current state and design future state
- **Phase 2**: Pilot new processes and systems in 3 locations
- **Phase 3**: Roll out to all 25 locations
- **Phase 4**: Transition to operations

This high-level scope is baselined. Changes require CCB approval.

**Example Change Request**: A stakeholder requests adding a fourth pilot location in Phase 2.

**Impact Analysis**:
- Additional pilot location requires +$50,000 and +4 weeks
- Increases risk (more complexity) but also increases learning (more data points)

**CCB Decision**: Approved. The business case justifies the additional investment to de-risk the full rollout.

The program scope baseline is updated to reflect four pilot locations.

### Team-Level Adaptive Scope

Within the program's baselined scope, individual teams manage scope adaptively using agile practices.

**Example – Transformation Program, Technology Workstream**: The Technology team is building the new expense system within Phase 2. Their scope is adaptive:

**Sprint 1**: User authentication and basic expense entry
**Sprint 2**: Receipt upload and manager approval workflow
**Sprint 3**: Accounting system integration (originally Sprint 5, but reprioritized based on pilot feedback)

The specific features and their sequencing evolve based on pilot user feedback, but the overall deliverable (expense system) remains within the program's baselined scope.

### Integration Scope Management

One of the biggest hybrid challenges is managing scope changes that cross workstream boundaries.

**Example – Transformation Program**: The Process workstream designs a new approval workflow requiring three approval levels. The Technology workstream builds the system to support three levels.

During pilot testing, users complain that three levels is too slow. The Process workstream wants to simplify to two levels.

**Impact**:
- **Process workstream**: Minor change—update process documentation
- **Technology workstream**: Moderate change—reconfigure approval routing logic (1 sprint of work)
- **Training workstream**: Moderate change—update training materials
- **Change Management workstream**: Minor change—update communication materials

Sarah facilitates an integration change review:
1. Process team presents the change rationale
2. Each affected workstream estimates impact
3. Sarah assesses program-level impacts (schedule, budget, risk)
4. CCB approves the change
5. All workstreams update their plans accordingly

This coordinated change management prevents workstreams from getting out of sync.

## Evaluating Change Requests: A Decision Framework

Whether using predictive change control or agile prioritization, the project manager must evaluate change requests systematically. Here's a decision framework:

### 1. Is this change necessary or discretionary?

**Necessary changes**: Required by regulation, law, safety, or contractual obligation. These must be implemented regardless of cost or schedule impact.

**Example – Office Renovation**: Mid-project, the city updates the fire code requiring additional emergency lighting. This is non-negotiable—Sarah must implement it to pass final inspection and obtain occupancy permit.

**Discretionary changes**: Nice-to-have improvements or stakeholder preferences. These are evaluated based on value vs. impact.

**Example – Expense System**: A stakeholder requests adding a "dark mode" UI theme. This is discretionary—users can work without it.

### 2. What value does this change deliver?

**High-value changes**: Significantly improve outcomes, user satisfaction, or business results.
**Low-value changes**: Minor improvements or convenience features.

**Example – Transformation Program**: Two change requests:
1. Add change champion support toolkit (training materials, FAQs, talking points)
2. Add custom report formatting with organizational logos

The first delivers high value—it directly supports adoption and change management. The second is low value—a cosmetic improvement.

Sarah prioritizes the change champion toolkit.

### 3. What is the cost (time, money, resources) of implementing this change?

**Low-cost changes**: Minimal effort, no schedule impact.
**High-cost changes**: Significant resources, schedule delays, budget overruns.

### 4. What is the cost of NOT implementing this change?

Sometimes rejecting a change has hidden costs.

**Example – Expense System**: A stakeholder requests adding email notifications for expense status changes. The Product Owner initially considers this low priority.

But further analysis reveals: without notifications, users will constantly log in to check status, generating help desk calls and user frustration. The cost of NOT implementing is high.

The Product Owner reprioritizes email notifications to Sprint 6.

### 5. Value vs. Impact Matrix

Plot changes on a 2x2 matrix:

| | Low Impact | High Impact |
|---|---|---|
| **High Value** | **Approve Immediately** (quick wins) | **Approve with Planning** (strategic changes) |
| **Low Value** | **Defer or Reject** (not worth effort) | **Reject** (high cost, low return) |

**Example – Office Renovation**:

**High Value, Low Impact**: Change paint color before painting starts (no cost, no delay) → Approve immediately

**High Value, High Impact**: Add kitchenette ($7,700, 5-day delay) → Approve with planning (defer to Phase 2)

**Low Value, Low Impact**: Change light switch brands (minimal cost difference) → Reject (not worth administrative overhead)

**Low Value, High Impact**: Add a second conference room (major scope, cost, schedule impact) → Reject

## Managing Stakeholder Expectations When Saying "No"

Not all change requests can be approved. How you communicate rejection impacts stakeholder relationships.

### The "Yes, And" Technique

Instead of a flat "No," explain the trade-offs and offer alternatives.

**Example – Expense System**: A stakeholder requests integrating with a travel booking system.

**Bad response**: "No, that's out of scope."

**Good response**: "I understand why that integration would be valuable. Here's the situation: implementing it would require 5 sprints of effort, which would delay our planned release by 10 weeks. We have three options:
1. Delay the release and include the travel integration
2. Release on schedule without the travel integration, and add it in Release 2
3. Release on schedule with a simplified manual workaround for travel expenses, then automate it in Release 2

Which option aligns best with your business priorities?"

This approach:
- Acknowledges the value of the request
- Explains the trade-offs transparently
- Offers options rather than a flat rejection
- Puts the decision in the stakeholder's hands

### Document Rejected Changes

Even rejected changes should be documented. This creates a trail showing that stakeholder input was considered, and it prevents the same request from being submitted repeatedly.

**Example – Transformation Program**: Sarah maintains a "change request log" showing all requests, decisions, and rationale. When a stakeholder re-submits a previously rejected request, Sarah can reference the log: "We reviewed this request in September and deferred it because [rationale]. Has the business context changed in a way that makes this higher priority now?"

This prevents re-litigating old decisions.

## Scope Validation: Formal Acceptance

Scope validation is the process of gaining formal acceptance of deliverables from stakeholders. This is critical to prevent scope disputes later.

### Validation in Predictive Projects

Predictive projects use formal acceptance gates at phase boundaries or deliverable completion.

**Example – Office Renovation**: Sarah schedules a formal walkthrough with stakeholders before final payment to the contractor:

**Walkthrough agenda**:
1. Review each room against specifications
2. Test all systems (lights, HVAC, plumbing)
3. Identify punch list items (minor issues to fix)
4. Formal acceptance sign-off

The stakeholder identifies several punch list items:
- One light fixture isn't working
- Paint touch-up needed in two locations
- One door doesn't close smoothly

Sarah documents these items. The contractor fixes them within two days. The stakeholder signs the formal acceptance document.

**Formal acceptance**:
- Protects the project from future scope disputes
- Triggers final payment
- Signals project completion

### Validation in Agile Projects

Agile projects validate scope continuously at sprint reviews.

**Example – Expense System**: At the end of Sprint 7, the team demonstrates the mobile approval feature to stakeholders.

**Sprint review**:
1. Team demonstrates working functionality
2. Stakeholders interact with the feature
3. Stakeholders ask questions
4. Product Owner decides: Accept or Not Accept

The stakeholders accept the mobile approval feature with one minor request: add a "mark all as reviewed" button. This request goes into the backlog for Sprint 8.

**Acceptance criteria**:
- Feature works as defined in user story
- Acceptance criteria are met
- Product Owner is satisfied

Because validation happens every sprint, there are no big surprises at project end.

### Handling Validation Failures

Sometimes stakeholders reject deliverables during validation. How should you respond?

**Example – Transformation Program**: The Process workstream presents new approval workflows to stakeholders for validation. The stakeholders reject them: "These workflows are too complex. We can't get approval this fast in reality."

**Sarah's response**:
1. **Understand the root cause**: Why are the workflows too complex? What's driving the approval delays?
2. **Assess responsibility**: Is this a deliverable quality issue (team didn't follow requirements) or an expectation gap (stakeholders' requirements were unclear)?
3. **Develop options**: Can the workflows be simplified? Is the complexity necessary for compliance? What trade-offs exist?
4. **Communicate transparently**: Explain the situation to the sponsor and steering committee
5. **Plan rework**: If rework is needed, update the schedule and communicate impacts

In this case, the root cause is that the Process team followed compliance requirements too literally without considering practical usability. Sarah facilitates sessions between the Process team, compliance stakeholders, and end users to redesign workflows that balance compliance with usability.

**Lesson**: Validation failures are learning opportunities that improve the final deliverable.

## Key Takeaways: Scope Management Principles

1. **Scope validation and verification are both essential**: Build deliverables correctly (verification) and ensure stakeholders accept them (validation).

2. **Scope creep is death by a thousand cuts**: Small, undocumented changes accumulate into major scope, cost, and schedule impacts. Prevent creep through clear scope definition and formal change control.

3. **Change is inevitable and often valuable**: The goal isn't to prevent all change, but to manage it deliberately through impact analysis and decision-making.

4. **Different contexts require different approaches**: Predictive uses formal change control. Agile uses prioritization and backlog management. Hybrid uses both at different levels.

5. **Every change is a trade-off**: Adding scope impacts time, cost, quality, or risk. Make trade-offs explicit and transparent.

6. **Saying "No" with empathy maintains relationships**: Explain why, offer alternatives, and involve stakeholders in trade-off decisions.

7. **Validate scope frequently**: Continuous validation (agile sprint reviews, predictive phase gates) prevents big surprises at project end.

Sarah's scope management across three projects demonstrates mastery:
- The Office Renovation's formal change control prevents budget overruns
- The Expense System's prioritized backlog delivers maximum value within constraints
- The Transformation Program's hybrid approach balances program stability with team adaptability

Scope management is about discipline and responsiveness—controlling scope when necessary, adapting scope when valuable, and always keeping stakeholders informed and engaged.

---

**Next**: [13d – Vendor and Procurement Management](13d%20–%20Vendor%20and%20Procurement%20Management.md)
**Previous**: [13b – Quality Assurance and Testing](13b%20–%20Quality%20Assurance%20and%20Testing.md)
