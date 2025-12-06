# 10b – Understanding Constraints, Assumptions, and Dependencies

## Learning Objectives

By the end of this section, you will be able to:
- Identify and document project constraints, assumptions, and dependencies
- Differentiate between constraints (boundaries), assumptions (beliefs), and dependencies (connections)
- Assess the risk implications of weak assumptions and unmanaged dependencies
- Manage constraint changes through appropriate governance processes
- Apply constraint, assumption, and dependency management across predictive, agile, and hybrid contexts

## Why Constraints, Assumptions, and Dependencies Matter

Every project operates within boundaries, relies on beliefs, and connects to other work. These three elements—constraints, assumptions, and dependencies—shape what's possible and what's risky.

**Constraints** are the firm limits within which the project must operate. They're non-negotiable boundaries set by external factors: regulatory requirements, budget caps, contractual deadlines, resource availability, technology standards, or physical limitations. Constraints aren't problems to solve; they're realities to plan within.

**Assumptions** are things believed to be true but not guaranteed. They're necessary for planning when complete information isn't available: stakeholder availability, vendor delivery timelines, resource skill levels, requirement stability, or approval processes. Assumptions enable planning to proceed, but each assumption carries risk if it proves false.

**Dependencies** are connections between work elements. They describe what must happen before something else can happen: technical dependencies (foundation before walls), resource dependencies (same specialist needed for multiple tasks), approval dependencies (funding release before procurement), or external dependencies (vendor delivery before integration). Dependencies create sequence constraints and coordination requirements.

Understanding these three elements is critical for realistic planning and effective risk management. Undocumented constraints become surprise roadblocks. Weak assumptions become project crises when invalidated. Unmanaged dependencies create schedule delays and coordination failures.

## Constraints: The Boundaries of Possibility

Constraints define what the project cannot change. They're the firm boundaries within which the project manager must deliver value. Trying to wish away constraints or ignore them in planning creates unrealistic plans that fail when reality intervenes.

### Types of Project Constraints

**1. Schedule Constraints**
Fixed dates driven by external factors: regulatory compliance deadlines, contractual commitments, market windows, seasonal requirements, or event-driven timing.

**Example – Office Renovation**: Current lease expires June 30. Move-in must be complete by June 15 to allow for transition. This is a hard constraint; the landlord cannot extend the lease.

**Example – Transformation Program**: Data privacy regulation effective date is January 1. All customer-facing systems must have consent management operational by this date. This is a regulatory constraint; non-compliance has legal consequences.

**2. Budget Constraints**
Financial limits driven by capital availability, funding approvals, contractual caps, or portfolio prioritization.

**Example – Expense System**: Project approved for $150K budget. Additional funds would require portfolio review and reallocation from other projects. This is a funding constraint; money isn't infinite.

**3. Resource Constraints**
Limits on people, equipment, materials, or expertise: available staff, specialized skills, equipment availability, or vendor capacity.

**Example – Office Renovation**: Only one construction firm in the region is certified for the required clean room specifications. Their availability dictates project scheduling. This is a specialized resource constraint.

**Example – Transformation Program**: Regional implementation teams have 40 hours/week capacity. They're also supporting operations. Project work competes with operational responsibilities for time.

**4. Regulatory and Compliance Constraints**
Requirements imposed by laws, industry standards, organizational policies, or contractual agreements.

**Example – Transformation Program**: Customer data must remain in region-specific data centers per data sovereignty regulations. Architecture must support regional data residency. This is a compliance constraint; violating it creates legal risk.

**5. Technology Constraints**
Limitations imposed by existing systems, architectural standards, vendor ecosystems, or technical capabilities.

**Example – Expense System**: Must integrate with existing SAP accounting system. Vendor selection is constrained to platforms with certified SAP connectors. This is a technology compatibility constraint.

**6. Scope Constraints**
Boundaries on what the project will and won't address, often driven by charters, contracts, or portfolio decisions.

**Example – Office Renovation**: Project includes workspace build-out but excludes IT infrastructure upgrades (separate project). This is a scope boundary constraint.

### Documenting and Managing Constraints

Constraints should be documented explicitly, with:
- **Description**: What is the constraint?
- **Source**: Who or what imposes it?
- **Impact**: How does it limit project options?
- **Flexibility**: Is there any negotiation possible, or is it absolute?

**Example – Transformation Program Schedule Constraint**:
- **Description**: All customer consent management capabilities must be operational by January 1
- **Source**: Data Privacy Regulation (DPR) effective date, legally mandated
- **Impact**: Implementation, testing, and training must complete by December 15 to allow transition
- **Flexibility**: None; regulatory deadline is absolute

### Constraints Across Delivery Approaches

**Predictive projects** typically treat constraints as fixed and plan within them. Detailed planning aims to optimize within boundaries. Constraint changes trigger formal change control.

**Agile projects** often have flexible scope within fixed time and budget constraints. The constraint is the sprint cadence or release timeline; features adjust to fit. The philosophy is "time-box and prioritize" rather than "estimate and commit to scope."

**Hybrid projects** distinguish firm constraints (regulatory, architectural) from flexible constraints (feature priorities, implementation sequences). Program-level constraints are fixed; team-level constraints may be flexible.

**Sarah's Three Projects**:
- **Office Renovation (Predictive)**: Schedule constraint (lease expiration) and budget constraint ($12M capital) are both fixed. Project plans within these boundaries, optimizing scope and quality.
- **Expense System (Agile)**: Time constraint (six months) and budget constraint ($150K) are fixed. Feature scope is flexible, prioritized by value within capacity.
- **Transformation Program (Hybrid)**: Regulatory deadline (January 1) is fixed. Regional rollout sequence and feature prioritization are flexible within program architecture.

## Assumptions: Planning Under Uncertainty

Assumptions are necessary for planning. You can't wait until every uncertainty is resolved before creating a plan; projects would never start. But every assumption carries risk: if the assumption proves false, the plan needs adjustment.

### Types of Project Assumptions

**1. Stakeholder Availability Assumptions**
Beliefs about when stakeholders will be available for decisions, reviews, or approvals.

**Example – Expense System**: Assume finance leadership will be available for bi-weekly sprint demos. If they're unavailable, feature validation delays and priority decisions stall.

**2. Resource Capability Assumptions**
Beliefs about team member skills, experience, or productivity.

**Example – Office Renovation**: Assume construction firm has built similar clean rooms before and can deliver to specifications. If they lack experience, quality risks and rework increase.

**Example – Transformation Program**: Assume regional IT teams have API integration skills. If they lack these skills, training delays implementation or external consultants become necessary.

**3. Vendor Performance Assumptions**
Beliefs about vendor delivery timelines, quality, or capabilities.

**Example – Expense System**: Assume SaaS vendor delivers SAP integration connector as documented. If the connector is incomplete or buggy, integration delays.

**Example – Office Renovation**: Assume furniture vendor delivers by specified dates. If delivery delays, move-in postpones or temporary furniture becomes necessary.

**4. Requirement Stability Assumptions**
Beliefs about how much requirements will change during execution.

**Example – Expense System (Agile)**: Assume high-level workflow themes are stable even if detailed features evolve. If fundamental workflow changes mid-project, architecture may need rework.

**Example – Transformation Program**: Assume regulatory interpretation guidance doesn't change. If regulators issue clarifying guidance mid-project that changes requirements, scope expands.

**5. Technology Performance Assumptions**
Beliefs about how technology will perform, integrate, or scale.

**Example – Expense System**: Assume cloud platform handles 500 concurrent users without performance degradation. If performance is poor, infrastructure upgrades become necessary.

**6. Approval Process Assumptions**
Beliefs about how governance processes will operate and how long they'll take.

**Example – Transformation Program**: Assume regional compliance approvals take two weeks. If actual approval cycles are six weeks, regional rollout schedules slip.

### Documenting and Managing Assumptions

Assumptions should be documented explicitly in an assumption log, with:
- **Description**: What is assumed to be true?
- **Rationale**: Why is this assumption necessary?
- **Impact if false**: What happens if the assumption is invalidated?
- **Validation approach**: How and when will you verify the assumption?

**Example – Expense System Vendor Performance Assumption**:
- **Description**: SaaS vendor delivers SAP connector with full posting, approval, and reporting integration capabilities
- **Rationale**: Vendor documentation and reference customer interviews indicate the connector is production-ready
- **Impact if false**: Integration delays by 4-6 weeks while workarounds are developed; potential budget overrun for custom integration
- **Validation approach**: Technical proof-of-concept in Sprint 2 to verify connector capabilities before committing to vendor

### Converting Assumptions to Risks

Every assumption is a potential risk. Strong assumption management identifies high-impact assumptions and plans validation or mitigation.

**Process**:
1. Document the assumption
2. Assess impact if the assumption proves false (high/medium/low)
3. For high-impact assumptions, develop validation approach or mitigation plan
4. Track assumption status: validated, invalidated, or still unknown

**Example – Transformation Program Regional Skills Assumption**:
- **Assumption**: Regional IT teams have API integration skills
- **Impact if false**: High; implementation delays and cost overruns from hiring consultants
- **Validation approach**: Skills assessment survey in initiation phase; technical interview with regional leads
- **Result**: Assumption partially invalidated; two of five regions lack skills
- **Mitigation**: Include integration training in project plan; budget for consultant support in two regions

## Dependencies: Connections That Drive Sequence

Dependencies describe the relationships between work elements. They determine what can happen in parallel, what must happen in sequence, and where coordination is required.

### Types of Dependencies

**1. Mandatory Dependencies (Hard Logic)**
Inherent in the nature of the work; cannot be changed. Often driven by technical requirements or physical constraints.

**Example – Office Renovation**: Foundation must be poured before walls are erected. This is a construction sequencing dependency; walls cannot float.

**Example – Transformation Program**: Data migration must complete before regional systems can go live. This is a technical dependency; you can't use data that doesn't exist yet.

**2. Discretionary Dependencies (Soft Logic)**
Chosen by the project team based on best practices, preferences, or risk management, but could be done differently.

**Example – Expense System**: Choose to complete mobile app before web portal, believing mobile is higher user priority. Could be done in parallel or reverse sequence, but team chooses this order.

**Example – Transformation Program**: Choose to complete largest region first to learn lessons before smaller regions. Could roll out in any sequence, but this order reduces overall program risk.

**3. External Dependencies**
Dependencies on factors outside the project team's control: vendor deliveries, regulatory approvals, other projects, or organizational processes.

**Example – Office Renovation**: Building permit approval from city government. Project cannot start construction until permit is issued. Timeline depends on city's review process, which the project team doesn't control.

**Example – Expense System**: IT infrastructure team must provision cloud environment before platform installation. Provisioning timeline depends on IT's workload and priorities, which the project team doesn't control.

**Example – Transformation Program**: Enterprise architecture team must publish API standards before regional implementations begin. Regional teams are dependent on architecture team's delivery.

**4. Internal Dependencies**
Dependencies within the project team's control, typically between work packages or team members.

**Example – Expense System**: Backend API development must complete before frontend integration. Both are done by the project team, but sequence is required.

**Example – Transformation Program**: Training materials depend on finalized workflows. Both are project team deliverables, but workflow design must finish first.

### Documenting and Managing Dependencies

Dependencies should be documented in a dependency register or log, with:
- **Description**: What depends on what?
- **Type**: Mandatory, discretionary, external, or internal?
- **Impact**: What happens if the dependency is delayed or broken?
- **Owner**: Who manages each side of the dependency?
- **Status**: On track, at risk, or broken?

**Example – Transformation Program External Dependency**:
- **Description**: Regional go-live depends on enterprise architecture API standards publication
- **Type**: External (architecture team is outside regional project control)
- **Impact if delayed**: Regional implementation pauses waiting for standards; rollout schedule slips
- **Owners**: Architecture team (publish standards), regional teams (implement to standards)
- **Status**: At risk; architecture team is delayed by two weeks
- **Mitigation**: Regional teams begin implementation against draft standards with understanding that minor rework may be needed

### Dependencies Across Delivery Approaches

**Predictive projects** map dependencies exhaustively, often using network diagrams or Gantt charts showing critical paths and float. Dependency management focuses on sequence optimization and bottleneck identification.

**Agile projects** manage dependencies through frequent integration, cross-functional teams, and iteration planning. Dependencies within a sprint are managed by the team; dependencies across sprints or teams are managed through synchronized cadences (scrum of scrums, program increment planning).

**Hybrid projects** use predictive dependency management at the program level (milestones, architecture, compliance) and agile dependency management at the team level (features, stories, iterations).

**Sarah's Three Projects**:
- **Office Renovation (Predictive)**: Dependencies are mapped in detail using critical path analysis. Permit approval, construction sequencing, vendor deliveries, and inspection dependencies are all explicitly scheduled with float calculations.
- **Expense System (Agile)**: Dependencies are managed through sprint planning and daily standups. Backend-frontend dependencies are managed through API contracts established early. External dependency on IT infrastructure is managed through explicit sprint commitments from IT team.
- **Transformation Program (Hybrid)**: Program-level dependencies (architecture standards, compliance approvals, data migration milestones) are managed predictively with Gantt charts and milestone reviews. Team-level dependencies (feature development, integration) are managed through agile ceremonies and synchronized release planning.

## The Risk Connection: How Constraints, Assumptions, and Dependencies Create Risk

Constraints, assumptions, and dependencies aren't just planning inputs; they're risk sources.

### Constraint-Driven Risks

Tight constraints create limited margins for error. The tighter the constraint, the higher the risk that variance will cause failure.

**Example – Office Renovation**: The June 15 move-in date is a hard constraint. Any construction delay creates crisis because there's no schedule buffer. Risk: Construction delays from permit issues, weather, or material availability could make the deadline unreachable.

**Mitigation**: Build schedule buffer into construction phases, maintain permit approval as highest priority, pre-order long-lead materials, establish contingency plan for temporary space.

### Assumption-Driven Risks

Weak assumptions create risk of plan invalidation. The weaker the foundation for the assumption, the higher the risk it proves false.

**Example – Transformation Program**: Assumption that regional teams have API skills was based on limited information. Risk: Teams lack skills, causing implementation delays and cost overruns.

**Mitigation**: Validate assumptions early through skills assessments; include training and consultant budget as contingency.

### Dependency-Driven Risks

Complex dependency chains create risk of cascading delays. The longer the dependency chain and the less control you have over dependencies, the higher the risk of delays.

**Example – Expense System**: External dependency on IT infrastructure provisioning creates risk. If IT delays, platform installation delays, testing delays, go-live delays. Single dependency creates cascade effect.

**Mitigation**: Engage IT early with explicit commitments, include infrastructure provisioning in project schedule with tracking, develop contingency timeline if infrastructure delays.

## Practical Example: Constraint, Assumption, and Dependency Management in Action

Let's follow Sarah's transformation program through constraint, assumption, and dependency identification and management.

### Initiation: Identifying Constraints, Assumptions, and Dependencies

**Constraints Identified**:
1. **Schedule**: Regulatory go-live deadline January 1 (hard constraint, regulatory)
2. **Budget**: $2M program budget (constraint, but can request additional funds through governance if business case supports it)
3. **Compliance**: Data must remain in regional data centers (hard constraint, regulatory)
4. **Architecture**: Must use enterprise API standards (hard constraint, organizational policy)

**Assumptions Documented**:
1. Regional IT teams have API integration skills (medium confidence, based on job descriptions)
2. Regulatory guidance is stable (high confidence, regulation is published)
3. Customer consent data migration completes in 8 weeks (medium confidence, based on vendor estimates)
4. Regional compliance approvals take 2 weeks (low confidence, based on informal conversations)

**Dependencies Identified**:
1. Regional implementations depend on enterprise architecture API standards publication (external, mandatory)
2. Regional go-live depends on data migration completion (internal, mandatory)
3. Training depends on finalized workflows (internal, mandatory)
4. Each regional rollout depends on previous region's lessons learned (discretionary, chosen to reduce risk)

### Planning: Assessing Risk Implications

**Constraint Risk Assessment**:
- **Schedule constraint (January 1)**: High risk; tight timeline with regulatory consequences for missing deadline. **Mitigation**: Build two-week buffer before deadline; prioritize regulatory-required features; develop minimum viable compliance scope.

**Assumption Risk Assessment**:
- **Regional skills assumption**: High impact if false. **Validation**: Conduct skills assessment in first month. **Mitigation**: Budget for training and consultant support.
- **Compliance approval assumption**: High impact if false; delays rollout. **Validation**: Engage compliance teams immediately to confirm process. **Mitigation**: Start compliance documentation early; include extra time in regional schedules.

**Dependency Risk Assessment**:
- **Architecture standards dependency**: High impact; blocks all regional work. **Mitigation**: Get commitment from architecture team with specific delivery date; begin regional planning against draft standards with acceptance of minor rework.
- **Sequential rollout dependency**: Medium impact; lessons from first region could delay subsequent regions if major issues found. **Mitigation**: Choose stable, well-resourced region first to minimize risk.

### Execution: Managing Changes

**Month 2: Assumption Invalidated**
Skills assessment reveals two of five regions lack API integration skills.

**Response**:
- Update assumption log: Assumption invalidated
- Create risk: "Regional skill gaps may delay implementation"
- Develop mitigation: Include integration training in project plan; allocate consultant budget for two regions
- Update schedule: Add two weeks to affected regional implementations for training
- Communicate to sponsor: Assumption invalidated, mitigation plan in place, schedule impact minimal

**Month 4: External Dependency Delayed**
Architecture team delays API standards publication by two weeks.

**Response**:
- Update dependency status: At risk
- Assess impact: Regional implementations planned against draft standards may need minor rework
- Coordinate with architecture team: Get commitment to final publication date; understand scope of changes from draft
- Communicate to regional teams: Proceed with draft standards; expect minor updates when final standards publish
- Update schedule: Add one-week buffer to first regional implementation for standards alignment

**Month 6: Constraint Change Requested**
Regional compliance teams report actual approval process takes six weeks, not two weeks as assumed.

**Response**:
- Recognize this changes both an assumption (approval timeline) and creates a new constraint (longer approval process)
- Assess impact: Six-week approvals put regional rollouts at risk for January 1 deadline
- Develop options:
  - **Option A**: Compress implementation timelines to accommodate longer approvals (increases quality risk)
  - **Option B**: Start compliance approvals earlier by completing documentation ahead of implementation (requires team capacity)
  - **Option C**: Request regulatory deadline extension (low probability of success)
- Recommendation: Option B; shift documentation earlier in project schedule
- Update project schedule: Move compliance documentation milestones earlier
- Communicate to sponsor: Approval timeline assumption was incorrect; mitigation in place; deadline still achievable

## Common Mistakes in Constraint, Assumption, and Dependency Management

**Mistake 1: Undocumented Constraints**
Assuming everyone knows the constraints without explicitly documenting them. When constraints aren't documented, they're often forgotten in planning or discovered too late.

**Prevention**: Create a constraint log during initiation. Review with stakeholders to ensure nothing is missed.

**Mistake 2: Weak Assumptions Treated as Facts**
Planning as if assumptions are certainties. When assumptions prove false, the plan fails and the team is surprised.

**Prevention**: Document assumptions explicitly with confidence levels. Validate high-impact assumptions early. Convert assumptions to risks.

**Mistake 3: Unmanaged External Dependencies**
Assuming external parties will deliver on time without explicit commitments or tracking. External dependencies often cause delays because they're outside project control.

**Prevention**: Get explicit commitments from external parties. Track external dependencies with same rigor as internal work. Escalate delays early.

**Mistake 4: Ignoring Discretionary Dependencies**
Treating all dependencies as mandatory when some are chosen. This creates unnecessarily rigid schedules.

**Prevention**: Distinguish mandatory from discretionary dependencies. Challenge whether discretionary dependencies could be resequenced to reduce schedule constraints.

**Mistake 5: Static Documentation**
Creating constraint, assumption, and dependency logs during initiation and never updating them. These elements change during execution; static documentation becomes inaccurate.

**Prevention**: Review and update logs regularly (monthly for predictive projects, sprint reviews for agile projects). Track status changes and validate assumptions as new information emerges.

## Key Takeaways

- Constraints are firm boundaries (schedule, budget, regulatory, technical) that projects must operate within
- Assumptions are beliefs necessary for planning but carry risk if they prove false
- Dependencies are connections between work elements that drive sequencing and coordination requirements
- Strong constraint management means planning within boundaries and managing constraint changes through governance
- Strong assumption management means documenting assumptions, assessing impact, validating high-risk assumptions early, and converting them to risks
- Strong dependency management means identifying all dependencies, tracking external dependencies rigorously, and managing dependency changes
- Constraints, assumptions, and dependencies are primary sources of project risk
- These elements should be documented during initiation and actively managed throughout execution

## Reflection Questions

1. What constraints on your current project have the least flexibility? How are you planning within those boundaries?

2. Which assumptions underlying your current project have the highest impact if they prove false? How could you validate them sooner?

3. What external dependencies does your project have? Do you have explicit commitments from those external parties, or are you assuming they'll deliver?

---

**Next**: 10c – Developing the Project Charter

