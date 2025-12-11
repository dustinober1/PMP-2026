# 14c – Change Control and Configuration Management

## Learning Objectives

By the end of this section, you will be able to:
- Implement formal change control processes appropriate to project context
- Distinguish between changes requiring formal approval and those that don't
- Apply integrated change control to assess impacts across all project dimensions
- Maintain configuration management for version control and traceability
- Prevent and manage scope creep effectively
- Adapt change management approaches for predictive, agile, and hybrid environments

---

## Introduction

The email subject line read: "Quick Request—Just a Small Change."

Sarah had learned to fear those words. What sponsors called "small changes" often rippled through schedule, cost, quality, and risk in ways they didn't anticipate. Early in her career, she'd said yes to these requests to be helpful, only to watch projects spiral out of control as undocumented changes accumulated.

Now, she had a different response: "Let me run this through the change evaluation process."

For the Office Renovation, that meant a formal change control board meeting with documented impact analysis. For the Expense System, it meant discussing the change with the Product Owner during backlog refinement. For the Transformation Program, it meant tiered decision authority—program board for major changes, workstream leads for minor adjustments.

The common thread: every change was evaluated before being approved, and every approval was documented.

This section explores the processes and tools that prevent change from becoming chaos.

---

## Why Change Control Matters

Projects exist in dynamic environments. Change is inevitable:
- Stakeholders discover new needs
- Technology evolves
- Market conditions shift
- Regulatory requirements change
- Risks materialize
- Better solutions emerge

**Without change control**:
- Scope creeps gradually until projects are unrecognizable
- Budgets and schedules become meaningless
- Team morale suffers from constantly shifting targets
- Accountability disappears ("the requirements kept changing")
- Project value gets diluted by low-priority additions

**With effective change control**:
- Changes are evaluated for value and impact
- Stakeholders make informed trade-off decisions
- Baselines remain meaningful reference points
- Teams work from stable, prioritized requirements
- Projects adapt intelligently to new information

**Key Principle**: Change control doesn't prevent change—it ensures changes are intentional, evaluated, and coordinated.

---

## The Integrated Change Control Process

PMI's integrated change control process applies to all project changes, regardless of domain or delivery approach.

### Steps in Integrated Change Control

**1. Identify the Change**
- Change request submitted (formally or informally)
- Change can originate from any stakeholder, team member, or external event
- Document: what is being requested and why

**2. Evaluate the Impact**
- Assess effects on scope, schedule, cost, quality, risk, resources
- Identify dependencies and downstream effects
- Consider alternatives and options
- Document: analysis of impacts across all constraints

**3. Make a Decision**
- Approve, reject, or defer the change
- Decision authority varies by change magnitude and project governance
- Document: decision rationale and approvers

**4. Implement Approved Changes**
- Update project management plan and baselines as needed
- Communicate to all affected stakeholders
- Assign resources and update schedules
- Document: implementation plan and assignments

**5. Monitor and Verify**
- Confirm change was implemented correctly
- Assess whether change achieved intended outcome
- Capture lessons learned
- Document: verification and outcomes

### Example – Office Renovation Change Request

**Request**: Facilities Director wants to add a kitchenette to the renovated space ($15,000, 2 weeks).

**Impact Analysis**:
- **Scope**: Addition to original scope (baseline change required)
- **Schedule**: 2 weeks added to electrical and plumbing (critical path impact)
- **Cost**: $15,000 for cabinets, appliances, additional plumbing/electrical
- **Quality**: No impact if designed properly
- **Risk**: Increases complexity; potential for additional permit requirements
- **Resources**: Requires plumbing and electrical subcontractors for longer duration

**Decision**: Change Control Board approved with conditions:
- Facilities must fund the $15,000 from their budget (no project budget impact)
- Project deadline extends by 2 weeks (stakeholders accepted schedule impact)
- Sarah's team would manage the work (no additional PM cost)

**Implementation**:
- Updated scope baseline to include kitchenette
- Revised schedule baseline (new completion date)
- Added design and permit activities
- Communicated new deadline to all stakeholders

**Verification**: Kitchenette completed and inspected; Facilities Director satisfied with outcome.

---

## Change Control Board (CCB)

### Purpose and Composition

**Purpose**: Formal body responsible for reviewing, evaluating, approving, or rejecting changes to the project.

**Typical Composition**:
- Project sponsor (often chair)
- Project manager (presents analysis)
- Key stakeholders (those impacted by changes)
- Subject matter experts (as needed for specific changes)
- Customer representative

**Decision Authority**: Defined in project charter or governance plan
- Minor changes: Project manager approval
- Moderate changes: CCB approval
- Major changes: Senior management or steering committee approval

### Example – Office Renovation CCB

**Members**:
- Sponsor: VP of Operations (chair)
- Project Manager: Sarah (presenter)
- Facilities Director (key stakeholder)
- CFO (budget authority)
- Safety Manager (for code/compliance changes)

**Meeting Cadence**: Bi-weekly, or ad-hoc for urgent changes

**Decision Thresholds**:
- Sarah's authority: Changes <$2,500 and <2 days with no baseline impact
- CCB authority: Changes between $2,500-$25,000 or 2 days-2 weeks
- Steering committee: Changes >$25,000 or >2 weeks

### CCB Meeting Best Practices

**Preparation**:
- Submit change requests 48 hours before meeting
- Include completed impact analysis
- Recommend approve/reject with rationale
- Prepare supporting documentation

**During Meeting**:
- Present concisely: what, why, impact, recommendation
- Answer questions objectively
- Capture decisions and rationale
- Document action items

**After Meeting**:
- Distribute meeting minutes within 24 hours
- Update change log
- Communicate decisions to affected parties
- Implement approved changes

---

## Change Request Documentation

### Essential Elements

Every change request should document:

1. **Change Description**
   - What is being requested
   - Why it's needed
   - Who requested it and when

2. **Impact Analysis**
   - Scope, schedule, cost impacts
   - Quality and risk implications
   - Resource requirements
   - Dependencies and constraints

3. **Alternatives Considered**
   - Other ways to achieve the objective
   - Do-nothing option
   - Pros/cons of each alternative

4. **Recommendation**
   - Project manager's recommendation
   - Rationale supporting the recommendation

5. **Decision**
   - Approved, rejected, or deferred
   - Decision-maker and date
   - Conditions or constraints on approval

6. **Implementation Plan** (if approved)
   - Specific actions required
   - Responsible parties
   - Timeline
   - Verification approach

### Example – Expense System Change Request

**CR-023: Add Multi-Currency Support**

**Description**: Product Owner requests adding multi-currency support to expense reporting to accommodate international travelers. Requested by Sales VP on March 15.

**Impact Analysis**:
- **Scope**: Adds 8 story points of work (database schema changes, UI updates, currency conversion API integration)
- **Schedule**: Would consume 25% of Sprint 9 capacity; may displace planned features
- **Cost**: $2,500 for currency conversion API license (annual)
- **Quality**: Requires additional testing for currency calculations and rounding
- **Risk**: Medium complexity; integration with external API introduces dependency

**Alternatives**:
1. **Full implementation** (requested): 8 story points, $2,500 cost
2. **Manual currency entry**: Users enter converted amounts; 2 story points, no API cost
3. **Defer to Release 2**: No immediate impact; addresses after core features shipped

**Recommendation**: Alternative 2 (manual entry) for Release 1, with Alternative 1 (full implementation) in Release 2. Rationale: Meets immediate need with minimal scope/cost impact while preserving capacity for higher-priority features.

**Decision**: Product Owner approved recommendation. Manual currency entry added to Sprint 9; full automation added to Release 2 backlog.

**Implementation**: Development team implemented manual entry; tested with international users; verified calculation accuracy.

---

## Configuration Management

Configuration management ensures that project deliverables, documentation, and code are properly version-controlled and traceable.

### Key Concepts

**Configuration Item (CI)**: Any component that must be formally controlled and tracked
- Examples: Requirements documents, design specifications, source code, test plans, contracts

**Configuration Baseline**: Approved version of a CI that can only be changed through formal change control
- Examples: Approved requirements baseline, tested and released software version

**Version Control**: System for tracking changes to configuration items over time
- Examples: Git for code, SharePoint with version history for documents

**Configuration Status Accounting**: Recording and reporting the status of configuration items and change requests

### Configuration Management Plan

Defines how configuration will be managed:

**1. Identification**
- What items will be controlled (requirements docs, code, test plans, etc.)
- Naming conventions and version numbering scheme
- Storage locations and access controls

**2. Control**
- How changes to configuration items will be requested and approved
- Who has authority to modify baselines
- Integration with change control process

**3. Status Accounting**
- How configuration status will be tracked and reported
- Audit trail requirements
- Reporting frequency and audiences

**4. Verification and Audit**
- How configuration compliance will be verified
- Configuration audit schedule
- Corrective action for non-compliance

### Example – Expense System Configuration Management

**Configuration Items**:
- Source code (Git repository)
- Database schema (versioned migration scripts)
- User stories and acceptance criteria (Jira)
- API documentation (Swagger/OpenAPI)
- Test cases (automated test suite)

**Baselines**:
- Sprint Review: Code that passed all tests and was accepted by Product Owner
- Release: Code deployed to production with version tag (v1.0, v1.1, etc.)

**Version Control**:
- Git branch strategy: main (production), develop (integration), feature branches
- Pull request required for all merges to develop or main
- Automated tests must pass before merge
- Two-person approval for production deployments

**Status Accounting**:
- Git tags track released versions
- Jira tracks feature status (backlog, in progress, done, released)
- Release notes auto-generated from Git commits and Jira tickets

**Audit**:
- Weekly: Verify all merged code has associated test coverage
- Monthly: Verify production version matches tagged release
- Per release: Verify all features in release notes were actually deployed

---

## Scope Creep vs. Scope Change

### Scope Creep

**Definition**: Uncontrolled expansion of scope without adjustments to time, cost, or resources. Often occurs gradually through small, unauthorized additions.

**Characteristics**:
- Changes implemented without formal approval
- No impact analysis performed
- Baseline not updated
- "While we're at it" additions
- Stakeholder assumptions not verified

**Example**: During Office Renovation, the general contractor started adding extra lighting fixtures "because it looks better" without change approval. Sarah caught it during a site inspection and had the contractor remove the unauthorized additions.

**Prevention**:
- Clear scope baseline and acceptance criteria
- Formal change control process
- Regular scope verification
- Stakeholder education about change process
- Assertiveness in saying "that's a change request"

### Scope Change

**Definition**: Authorized and controlled modification to project scope through the formal change control process.

**Characteristics**:
- Change request submitted and evaluated
- Impact analysis performed
- Decision made by appropriate authority
- Baseline updated if approved
- All stakeholders informed

**Example**: The kitchenette addition to Office Renovation (described earlier) was a proper scope change—formally requested, evaluated, approved, and baseline-updated.

### Gold Plating

**Definition**: Adding features or functionality beyond what was requested or approved, often by well-meaning team members.

**Why it's problematic**:
- Consumes time and budget for unvalidated value
- May not align with stakeholder priorities
- Can introduce quality or complexity issues
- Violates scope baseline

**Example**: Expense System developer added a dashboard visualization feature that wasn't in the user stories "because I thought users would like it." While well-intentioned, it consumed 3 story points that were needed for approved features and introduced a bug that delayed the sprint.

**Sarah's Response**: Praised the developer's initiative but reinforced that all features must be approved by the Product Owner. She suggested adding the dashboard to the backlog for future consideration.

**Prevention**:
- Clear acceptance criteria
- Definition of done
- Code reviews
- Regular demos to stakeholders
- Team education about value of scope discipline

---

## Change Control Across Different Delivery Approaches

### Predictive Projects: Formal Change Control

**Characteristics**:
- Rigid baseline protection
- Formal change control board
- Detailed impact analysis required
- Emphasis on preventing unauthorized changes
- Baseline updates only for approved changes

**Office Renovation Process**:
1. Change request submitted via form
2. Sarah analyzes impact (1-2 days)
3. CCB meets bi-weekly to review requests
4. Decision documented and communicated
5. Approved changes update baseline
6. Changes implemented and verified

**Appropriate for**: Projects where stability is critical, regulatory compliance required, or fixed-price contracts in place.

### Agile Projects: Adaptive Change Control

**Characteristics**:
- Scope flexibility is built-in
- Product Owner has authority to re-prioritize backlog
- Changes welcome if they increase value
- No formal CCB for backlog changes
- Focus on delivering highest value, not protecting baseline

**Expense System Process**:
1. Change discussed with Product Owner anytime
2. Product Owner evaluates value and priority
3. Product Owner adds to backlog or rejects
4. Team estimates during backlog refinement
5. Product Owner re-prioritizes based on value and estimates
6. Highest-priority items pulled into next sprint

**Appropriate for**: Projects where requirements discovery is ongoing, market conditions change rapidly, or customer feedback drives direction.

**Important Distinction**: While backlog changes are fluid, changes to sprint commitments are controlled. Once a sprint starts, the sprint backlog is typically locked to protect team focus.

**Example**: Mid-sprint, a stakeholder requested adding a feature to the current sprint. Sarah and the Product Owner explained that the sprint backlog was locked, but the feature could be prioritized for the next sprint. This protected the team's ability to deliver their sprint commitment.

### Hybrid Programs: Tiered Change Control

**Characteristics**:
- Program-level baseline with formal change control
- Team-level flexibility within constraints
- Tiered decision authority based on change magnitude
- Integration of predictive and agile change processes

**Transformation Program Process**:

**Tier 1 – Team-Level Changes** (Agile approach):
- Team members and Product Owners can adjust backlog priorities
- No program approval needed
- Authority: Product Owner
- Example: Re-prioritizing user stories within a sprint

**Tier 2 – Workstream-Level Changes** (Moderate governance):
- Changes affecting workstream schedule or budget
- Workstream lead approval required
- Program manager notified
- Authority: Workstream Lead
- Example: Shifting resources between teams within a workstream

**Tier 3 – Program-Level Changes** (Formal change control):
- Changes affecting program scope, budget, or timeline
- Formal CCB review required
- Impact analysis across all workstreams
- Authority: Program Steering Committee
- Example: Adding a new integration workstream, delaying a phase gate

**Example**: When one workstream wanted to change from vendor software to custom development:
- **Impact**: $50,000 cost increase, 4-week schedule delay, affects integration with other workstreams
- **Process**: Tier 3 change requiring program CCB approval
- **Decision**: CCB approved with conditions (workstream absorbed cost from their contingency, integration team adjusted their schedule)

---

## Managing Resistance to Change Control

### Common Objections

**"Change control slows us down"**
- **Response**: Uncontrolled change slows us down more through rework and confusion. Good change control actually enables faster, more confident decision-making.

**"We're agile; we embrace change"**
- **Response**: Agile embraces valuable change through disciplined processes like backlog prioritization. It doesn't mean accepting every change request indiscriminately.

**"This is just a small change"**
- **Response**: Small changes compound. And seemingly small changes often have hidden impacts. Let's evaluate it properly.

**"We don't have time for paperwork"**
- **Response**: Change evaluation doesn't have to be bureaucratic. We'll keep the process lightweight but still rigorous enough to make good decisions.

### Tailoring Change Control to Culture

**Command-and-Control Culture**:
- Emphasize governance and accountability
- Detailed documentation
- Formal approvals and sign-offs

**Collaborative Culture**:
- Emphasize transparency and shared decision-making
- Lightweight documentation
- Consensus-based approvals

**Fast-Paced/Startup Culture**:
- Emphasize speed and adaptability
- Minimal documentation
- Delegated decision authority

**Sarah's Approach**: She adapted her change control process to each project's culture while maintaining core principles of evaluation, decision, and documentation. For the Office Renovation (formal culture), she used detailed change request forms and CCB meetings. For the Expense System (collaborative culture), she used backlog refinement sessions and Jira tickets. Both achieved the same outcome: intentional, evaluated change.

---

## Change Control and Risk Management Integration

Change control and risk management are deeply interconnected (see Chapter 12).

### Changes Generate Risks

Every approved change introduces new risks:
- **Schedule risk**: Change may take longer than estimated
- **Cost risk**: Change may cost more than budgeted
- **Quality risk**: Change may introduce defects
- **Integration risk**: Change may conflict with other components

**Best Practice**: Include risk assessment in change impact analysis. Approved changes should trigger risk register updates.

### Risks Generate Changes

When risks materialize, they often require changes:
- **Workarounds**: Unplanned responses to emergent risks may require scope changes
- **Contingency Plans**: Executing risk responses may trigger changes to schedule or budget
- **Risk Re-Assessment**: New information about risks may require re-planning

**Example**: Office Renovation asbestos discovery (materialized risk) triggered a scope change request for remediation work.

---

## Tools and Techniques

### Change Log

Centralized record of all change requests and their status.

**Essential Fields**:
- Change ID
- Requestor and date
- Description
- Status (submitted, under review, approved, rejected, implemented)
- Impact summary (cost, schedule)
- Decision date and approver
- Implementation date

**Example**:

| ID | Date | Requestor | Description | Cost Impact | Schedule Impact | Status | Decision Date |
|----|------|-----------|-------------|-------------|-----------------|---------|---------------|
| CR-001 | 2/1 | Facilities | Add kitchenette | +$15K | +2 weeks | Approved | 2/5 |
| CR-002 | 2/10 | Safety | Upgrade fire suppression | +$8K | No impact | Approved | 2/12 |
| CR-003 | 2/15 | Finance | Add floor safes | +$12K | +1 week | Rejected | 2/19 |

### Version Control Systems

**For Documents**:
- SharePoint with version history
- Google Docs with version tracking
- Document management systems (e.g., Documentum)

**For Code**:
- Git (most common)
- Subversion (SVN)
- Mercurial

**Best Practices**:
- Meaningful commit messages describing what and why
- Branching strategy appropriate to project (e.g., GitFlow)
- Protected main/production branches requiring approval
- Tags for releases and baselines

### Change Control Software

**Integrated Project Management Tools**:
- Jira (change tracking, backlog management)
- Azure DevOps (work items, change tracking)
- Microsoft Project (change requests, baseline management)

**Benefits**:
- Automated workflows
- Audit trails
- Integration with other project processes
- Reporting and dashboards

---

## Common Pitfalls

### Bypassing Change Control for "Urgent" Requests
**Problem**: Urgency is used to justify skipping evaluation.
**Solution**: Create expedited change process for genuine emergencies, but still require approval.

### Analysis Paralysis
**Problem**: Change evaluation takes so long that opportunities are missed.
**Solution**: Tailor analysis depth to change magnitude. Small changes get lightweight analysis.

### Rubber-Stamp Approval
**Problem**: CCB approves everything without real evaluation.
**Solution**: Reinforce that CCB's role is stewardship, not just endorsement. Empower them to say no.

### Poor Communication of Decisions
**Problem**: Changes approved/rejected but stakeholders not informed.
**Solution**: Standard communication protocol for all change decisions, including rationale.

### Baseline Drift
**Problem**: Approved changes not reflected in updated baselines.
**Solution**: Baseline update is mandatory step in change implementation process.

---

## Summary

Effective change and configuration management:

- **Provides structure without stifling adaptability**: Change control enables intelligent response to change
- **Integrates across all project constraints**: Evaluate scope, schedule, cost, quality, and risk holistically
- **Adapts to context**: Predictive projects use formal CCB; agile projects use backlog prioritization; hybrid programs use tiered authority
- **Prevents scope creep**: Clear processes and assertive project managers keep scope under control
- **Maintains traceability**: Configuration management ensures you know what's in each version and baseline
- **Balances governance with speed**: Tailor process rigor to change magnitude and organizational culture

Sarah's transformation from saying "yes" to small changes to confidently saying "let me evaluate that" represents maturity in project management. She learned that change control isn't about being rigid—it's about being intentional. Every change is an opportunity to create value or waste resources. Good change control ensures you do the former.

In the next section, we'll explore stakeholder management during execution—keeping stakeholders engaged, informed, and supportive as projects progress and change.
