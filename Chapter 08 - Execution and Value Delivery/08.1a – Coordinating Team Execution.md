# 13a – Coordinating Team Execution

## Learning Objectives

By the end of this section, you will be able to:

1. Coordinate team execution across predictive, agile, and hybrid delivery approaches
2. Implement effective daily coordination mechanisms (standups, huddles, status meetings)
3. Manage dependencies and handoffs between teams and workstreams
4. Maintain execution rhythm and momentum across different project phases
5. Adapt coordination approaches based on team maturity and project complexity
6. Integrate multiple concurrent workstreams in program environments

## Introduction: From Planning to Execution

Planning is about creating a roadmap. Execution is about navigating that roadmap in real-time, coordinating multiple people, teams, and vendors to deliver value. The transition from planning to execution is where many projects stumble—plans that looked perfect on paper encounter reality's friction: people get sick, vendors are late, requirements are misunderstood, and priorities shift.

Effective coordination is the glue that holds execution together. It ensures that:
- Everyone knows what they should be working on today
- Dependencies between teams are visible and managed
- Problems are surfaced quickly before they cascade
- Handoffs between teams or phases happen smoothly
- The project maintains forward momentum even when obstacles arise

But coordination looks very different across predictive, agile, and hybrid contexts. Understanding these differences is critical for the PMP exam and for real-world project success.

## Coordination in Predictive Projects

Predictive projects rely on detailed upfront planning with disciplined execution against that plan. Coordination focuses on ensuring that each team or individual completes their assigned work on schedule so that subsequent activities can begin.

### Key Coordination Mechanisms

**1. Work Authorization System**
A formal process for authorizing work to begin at the right time. This prevents teams from starting work prematurely (before dependencies are met) or late (causing schedule delays).

**Example – Office Renovation**: Sarah uses a work authorization system to coordinate the construction trades. The electrical contractor cannot begin rough-in work until the framing inspection is complete and approved. Sarah issues the work authorization only after receiving the signed inspection report. This prevents rework and ensures compliance with building codes.

**2. Scheduled Status Meetings**
Regular, formal meetings where progress is reported against the baseline plan. These meetings identify variances, address issues, and coordinate upcoming work.

**Example – Office Renovation**: Sarah holds a weekly coordination meeting every Monday morning with all contractors on-site. Each contractor reports:
- Work completed last week vs. planned
- Work planned for this week
- Any issues, delays, or risks
- Material or resource needs

This meeting surfaces coordination issues early. When the HVAC contractor reports they're ready to start but the electrical rough-in is delayed, Sarah immediately coordinates a solution: authorize overtime for the electrical crew or adjust the HVAC start date.

**3. Milestone Reviews**
Formal reviews at key project milestones where deliverables are validated before proceeding to the next phase. This ensures quality and completeness before downstream work begins.

**Example – Office Renovation**: Sarah schedules formal milestone reviews at:
- Foundation completion (before framing begins)
- Framing completion (before mechanical/electrical/plumbing rough-in)
- Rough-in completion (before drywall)
- Final inspection (before occupancy)

Each review involves inspections, approvals, and formal sign-offs. Work cannot proceed to the next phase without milestone approval.

**4. Progress Reporting**
Regular status reports that track actual progress against the baseline plan, highlighting variances and corrective actions.

**Example – Office Renovation**: Sarah produces a weekly progress report showing:
- Percentage complete by work package
- Schedule variance (ahead/behind schedule)
- Cost variance (over/under budget)
- Critical path status
- Upcoming milestones and dependencies

This report keeps stakeholders informed and provides early warning of problems.

### Predictive Coordination Challenges

**Challenge 1: Sequential Dependencies**
Predictive projects often have tightly coupled sequential dependencies where delays in one activity immediately impact downstream activities.

**Sarah's Response**: She maintains a detailed critical path analysis and monitors float carefully. When the electrical work is delayed, she immediately identifies which downstream activities are impacted (HVAC, drywall, painting) and develops a recovery plan (overtime, schedule compression, or formal schedule change).

**Challenge 2: Coordination Overhead**
Frequent status meetings can consume significant time, especially on large projects with many teams.

**Sarah's Response**: She uses a tiered approach:
- **Daily huddles** (15 minutes) with on-site supervisor only, focusing on immediate coordination needs
- **Weekly status meetings** (60 minutes) with all contractors, focusing on progress and upcoming week
- **Monthly stakeholder reviews** (90 minutes) with project sponsors, focusing on milestones and decisions

This balances the need for coordination with the cost of meetings.

## Coordination in Agile Projects

Agile projects emphasize continuous collaboration, rapid feedback, and adaptive planning. Coordination is lightweight, frequent, and focused on removing impediments rather than enforcing a plan.

### Key Coordination Mechanisms

**1. Daily Standup**
A brief daily meeting (15 minutes or less) where the team synchronizes on progress, plans, and impediments. Each team member answers three questions:
- What did I complete yesterday?
- What will I work on today?
- What impediments are blocking me?

**Example – Expense System**: Sarah attends the daily standup as an observer (the Scrum Master facilitates). The team huddles around the Kanban board each morning at 9:00 AM.

Yesterday, Developer 1 completed the expense approval workflow. Today, she's working on email notifications. She's blocked because the email service API documentation is incomplete.

The Scrum Master notes the impediment and commits to getting the documentation from the vendor by end of day. The standup took 12 minutes. The team is synchronized and focused.

**2. Sprint Planning**
At the start of each sprint (usually 1-4 weeks), the team plans what they'll deliver. The Product Owner presents prioritized backlog items. The team estimates effort and commits to a sprint goal.

**Example – Expense System**: Sarah joins the sprint planning meeting at the start of Sprint 7. The Product Owner presents the top priority items:
- As a manager, I want to approve expenses on my mobile device
- As a finance user, I want to export expense reports to the accounting system
- As an employee, I want to attach receipts to expenses

The team discusses each item, asks clarifying questions, and estimates complexity. They commit to delivering the mobile approval feature and the accounting export. The receipt attachment feature is deferred to Sprint 8 because it requires vendor API integration that isn't ready yet.

**3. Sprint Review/Demo**
At the end of each sprint, the team demonstrates working functionality to stakeholders. This provides rapid feedback and ensures alignment.

**Example – Expense System**: At the end of Sprint 7, the team demonstrates the mobile approval feature to department managers. The managers love it, but request one change: add a "reject with comments" option in addition to "approve." The Product Owner adds this to the backlog for Sprint 8.

This rapid feedback prevents the team from building the wrong thing and ensures continuous stakeholder engagement.

**4. Retrospectives**
After each sprint, the team reflects on what went well, what didn't, and what to improve. This continuous improvement cycle is essential to agile coordination.

**Example – Expense System**: In the Sprint 7 retrospective, the team identifies:
- **What went well**: Collaboration with the Product Owner was excellent; clarifying questions were answered quickly
- **What didn't go well**: Technical debt in the notification module slowed down new feature development
- **Action**: Dedicate 20% of Sprint 8 capacity to refactoring the notification module

This retrospective directly improves the team's execution in the next sprint.

### Agile Coordination Challenges

**Challenge 1: Scope Creep**
Because agile welcomes change, there's a risk of constant scope expansion without corresponding timeline or budget adjustments.

**Sarah's Response**: She works with the Product Owner to ensure that new requests are added to the backlog but prioritized against existing items. The sprint commitment is protected. If a stakeholder wants something immediately, something else must be removed from the sprint.

**Challenge 2: Stakeholder Availability**
Agile requires frequent stakeholder engagement. If stakeholders aren't available for planning, reviews, or questions, the team can build the wrong thing.

**Sarah's Response**: She establishes a stakeholder engagement rhythm:
- Product Owner is available daily for questions (2-hour "office hours" each afternoon)
- Key stakeholders attend every sprint review (mandatory 1-hour meeting every two weeks)
- Escalation path for urgent decisions (Product Owner → Sarah → Sponsor)

This ensures stakeholders are engaged without being overwhelmed.

## Coordination in Hybrid Projects

Hybrid projects blend predictive and agile approaches, often using predictive planning at the program level with agile execution at the team level. Coordination must bridge both worlds.

### Key Coordination Mechanisms

**1. Program-Level Milestones with Team-Level Sprints**
The program defines major milestones and phase gates (predictive), but teams deliver value incrementally within each phase (agile).

**Example – Transformation Program**: Sarah's program has four phases:
- Phase 1: Assessment and Design (3 months)
- Phase 2: Pilot Implementation (4 months)
- Phase 3: Full Rollout (6 months)
- Phase 4: Transition and Closure (2 months)

Within each phase, teams work in two-week sprints. Phase gates require formal reviews and approvals, but sprint-level work is adaptive.

**2. Tiered Coordination Meetings**
Different coordination rhythms for different levels of the program.

**Example – Transformation Program**: Sarah coordinates across three levels:

**Team-level (Daily)**: Each workstream has daily standups (agile teams) or weekly status huddles (predictive teams)

**Program-level (Weekly)**: Sarah leads a weekly program coordination meeting with all workstream leads. Each lead reports:
- Progress toward phase milestones
- Risks and issues requiring escalation
- Dependencies on other workstreams
- Resource or decision needs

**Governance-level (Monthly)**: Sarah presents to the steering committee (sponsor, executives). This meeting reviews:
- Phase gate status
- Business case assumptions and benefits realization
- Major risks and decisions
- Budget and schedule performance

**3. Dependency Management**
In programs, dependencies between workstreams are often the biggest coordination challenge. Hybrid programs need structured dependency tracking.

**Example – Transformation Program**: Sarah maintains a program-level dependency matrix showing:
- Which workstream depends on which other workstream
- What the dependency is (deliverable, decision, resource)
- When the dependency is needed
- Current status (on track, at risk, blocked)

In the weekly program coordination meeting, Sarah reviews critical dependencies. When she learns that the Technology workstream is behind schedule on the API integration, she immediately identifies that this will block the Process workstream's pilot testing in three weeks. She escalates this risk and coordinates a recovery plan: bring in a vendor consultant to accelerate API development.

**4. Integrated Progress Tracking**
The program uses a unified dashboard that shows both predictive metrics (earned value, milestone completion) and agile metrics (velocity, sprint burndown).

**Example – Transformation Program**: Sarah's program dashboard shows:
- **Predictive metrics**: Phase gate readiness, budget variance, schedule performance index
- **Agile metrics**: Team velocity trends, sprint goals achieved, backlog health
- **Integration metrics**: Cross-workstream dependencies status, benefits realization progress

This integrated view helps stakeholders understand progress regardless of their preferred frame of reference.

### Hybrid Coordination Challenges

**Challenge 1: Mixed Team Cultures**
Some teams are comfortable with agile's ambiguity and rapid change. Others prefer predictive's structure and stability. Coordinating across these cultures can create friction.

**Sarah's Response**: She tailors communication to the audience. When coordinating with the Finance workstream (predictive mindset), she emphasizes milestones, baselines, and change control. When coordinating with the Technology workstream (agile mindset), she emphasizes value delivery, stakeholder feedback, and iteration. She acts as a cultural translator.

**Challenge 2: Integration Points**
Even if individual teams execute well, integration between workstreams can fail if coordination is weak.

**Sarah's Response**: She identifies critical integration points early and assigns integration owners:
- Technology + Process integration: Joint working sessions every sprint to ensure software supports new processes
- Process + Change Management integration: Process team provides weekly updates to Change team so communication materials are accurate
- Change Management + Training integration: Training content is reviewed by Change team to ensure messaging consistency

These integration owners proactively coordinate rather than waiting for integration problems to emerge.

## Managing Dependencies: The Critical Coordination Challenge

Dependencies are the invisible threads that connect project activities. When dependencies are poorly managed, delays cascade across the project. Effective dependency management is essential for coordination.

### Types of Dependencies

**1. Finish-to-Start (FS)**: Activity B cannot start until Activity A finishes
**Example**: Drywall cannot start until electrical rough-in is complete

**2. Start-to-Start (SS)**: Activity B cannot start until Activity A starts
**Example**: Training development starts when process design starts (they run in parallel)

**3. Finish-to-Finish (FF)**: Activity B cannot finish until Activity A finishes
**Example**: The pilot testing cannot finish until all pilot sites complete their evaluations

**4. Start-to-Finish (SF)**: Activity B cannot finish until Activity A starts
**Example**: Rarely used in most projects

### Dependency Management in Practice

**Example – Transformation Program**: Sarah identifies a critical dependency: the Technology workstream's API development (Activity A) must finish before the Process workstream's pilot testing (Activity B) can start. This is a Finish-to-Start dependency.

**Sarah's dependency management approach**:

**1. Make it visible**: She adds this dependency to the program dependency matrix and highlights it on the program dashboard.

**2. Assign ownership**: The Technology workstream lead owns delivering the API on time. The Process workstream lead owns being ready to test when the API is delivered.

**3. Monitor proactively**: In weekly coordination meetings, Sarah checks status:
- "Technology team, is the API still on track for completion by March 15?"
- "Process team, are your test cases ready to execute on March 18?"

**4. Buffer critical dependencies**: Sarah built a one-week buffer between API completion (March 15) and pilot start (March 22) to absorb minor delays.

**5. Have a backup plan**: If the API is delayed significantly, Sarah has a backup plan: use a simplified manual process for the pilot, then replace it with the API in the full rollout.

When the Technology team reports a two-week delay in the API development, Sarah's proactive dependency management pays off:
- The buffer absorbs one week of the delay
- The backup plan (manual process) absorbs the remaining week
- The pilot testing starts on time, though with a less elegant solution
- The API integration happens during the rollout phase as planned

## Maintaining Execution Rhythm and Momentum

Execution is a marathon, not a sprint. Projects lose momentum when:
- Teams don't have clear near-term goals
- Coordination becomes inconsistent or infrequent
- Problems accumulate without resolution
- Stakeholders disengage

Effective coordination maintains rhythm and momentum.

### Creating Execution Rhythm

**1. Predictable Cadence**
Establish a predictable rhythm of coordination activities so teams know what to expect.

**Example – Office Renovation**: Sarah establishes a weekly rhythm:
- **Monday 8:00 AM**: On-site coordination meeting with all contractors
- **Wednesday 3:00 PM**: Sarah's site walk-through to observe progress and quality
- **Friday 2:00 PM**: Weekly status report sent to stakeholders

This predictability helps contractors plan their work and ensures coordination happens consistently.

**2. Short Feedback Loops**
The longer the time between coordination touchpoints, the bigger the problems that can develop unnoticed.

**Example – Expense System**: The team's two-week sprint cycle creates a rapid feedback loop:
- **Every two weeks**: Sprint review with stakeholders provides feedback
- **Every day**: Daily standup surfaces impediments
- **Every sprint**: Retrospective drives continuous improvement

This rapid cadence prevents small problems from becoming big disasters.

**3. Visible Progress**
Make progress visible so everyone can see momentum. This builds confidence and motivation.

**Example – Transformation Program**: Sarah creates a visual program dashboard displayed in the program team room:
- Phase milestones with completion status (green checkmarks for completed, yellow for in progress, gray for not started)
- Workstream progress (each workstream shows sprint goals achieved)
- Benefits realization tracker (showing early wins and value delivered)

When the steering committee visits, they immediately see progress. When team members walk by, they see their contributions adding up to meaningful change.

## Adapting Coordination to Team Maturity

Not all teams need the same level of coordination. The Tuckman model (Forming, Storming, Norming, Performing) from Chapter 6 applies here:

**Forming teams** need more structure and guidance:
- Frequent check-ins to ensure understanding
- Clear task assignments and expectations
- Explicit coordination of handoffs

**Performing teams** need less overhead:
- Can self-coordinate with minimal project manager involvement
- Escalate only exceptions and decisions
- Project manager focuses on removing impediments

**Example – Transformation Program**: Sarah adapts her coordination approach:

**Technology workstream** (Performing): This team is highly mature, self-organizing, and experienced with agile. Sarah attends their sprint planning and retrospectives but rarely intervenes. She trusts them to execute and escalate when needed.

**Finance workstream** (Forming): This team is new to project work and uncomfortable with ambiguity. Sarah meets with them twice weekly, provides detailed task assignments, and closely monitors dependencies.

This tailored approach is more effective than a one-size-fits-all coordination strategy.

## Common Coordination Pitfalls and How to Avoid Them

### Pitfall 1: Coordination Theater
Teams go through the motions of coordination meetings without actually coordinating. Status meetings become performances where everyone reports "green" status until problems are too big to hide.

**How to avoid**: Ask probing questions. Look for leading indicators of problems (declining velocity, increasing defects, missed commitments). Create psychological safety so teams feel comfortable surfacing issues early.

**Example**: In a program coordination meeting, one workstream lead reports "everything is green." But Sarah notices their velocity has dropped 20% over the last two sprints. She asks: "Your velocity is down. What's causing that?" The lead admits they're struggling with unclear requirements from a stakeholder. Sarah facilitates a requirements clarification session, addressing the root cause.

### Pitfall 2: Over-Coordination
Too many meetings, too much oversight, too much process. This creates bureaucracy that slows down execution rather than enabling it.

**How to avoid**: Apply the minimum viable coordination. Use agile principles even in predictive projects: value individuals and interactions over processes and tools. Coordinate only what's necessary.

**Example**: Sarah realizes that her weekly two-hour program coordination meeting is draining productivity. She changes the format: 30-minute standing meeting focused only on dependencies, risks, and decisions. Detailed status updates are shared asynchronously via a shared dashboard. Productivity improves.

### Pitfall 3: Ignoring Informal Coordination
Formal meetings and reports are important, but informal coordination—hallway conversations, quick Slack messages, impromptu whiteboard sessions—often gets more done.

**How to avoid**: Create space for informal coordination. Co-locate teams when possible. Use collaboration tools. Encourage ad-hoc problem-solving.

**Example**: Sarah notices that coordination problems between the Technology and Process teams keep surfacing in the weekly meeting. She co-locates a Process team member with the Technology team for two sprints. The informal daily conversations prevent dozens of small coordination failures.

## Practical Coordination Tools and Techniques

### 1. Kanban Boards
Visual workflow management tool showing work in progress. Useful for both agile and predictive projects.

**Example – Expense System**: The team uses a digital Kanban board with columns: Backlog → In Progress → Code Review → Testing → Done. During daily standup, team members move cards across the board, making progress visible.

### 2. Dependency Matrix
A table showing dependencies between activities, teams, or workstreams.

**Example – Transformation Program**: Sarah maintains a dependency matrix:

| Dependent Activity | Depends On | Type | Needed By | Status | Owner |
|--------------------|------------|------|-----------|--------|-------|
| Pilot Testing | API Complete | FS | Mar 22 | At Risk | Process Lead |
| Training Delivery | Content Approved | FS | Apr 1 | On Track | Training Lead |
| Rollout Phase | Pilot Success | FS | May 1 | On Track | Program Manager |

### 3. Integration Events
Planned events where multiple teams come together to integrate their work, identify gaps, and coordinate.

**Example – Transformation Program**: Sarah schedules a two-day integration workshop at the end of Phase 1 where all workstreams present their deliverables and identify integration gaps. This prevents surprises later.

### 4. RACI Matrix
Clarifies who is Responsible, Accountable, Consulted, and Informed for each activity. Reduces coordination confusion.

**Example – Office Renovation**: Sarah creates a RACI matrix for quality inspections:
- **Responsible**: Contractor performs the work
- **Accountable**: Sarah ensures inspection happens
- **Consulted**: Architect reviews inspection results
- **Informed**: Stakeholders receive inspection reports

## Coordination Across Virtual and Distributed Teams

Many modern projects involve distributed teams, adding complexity to coordination.

### Virtual Coordination Challenges
- **Time zones**: Synchronous coordination is difficult when teams are 8+ hours apart
- **Communication barriers**: Video calls lack the richness of in-person interaction
- **Relationship building**: Trust develops more slowly in virtual environments

### Virtual Coordination Best Practices

**1. Overlap Hours**
Identify core hours when all teams are online and schedule coordination meetings during that window.

**2. Asynchronous Coordination**
Use tools that enable coordination without real-time meetings: shared dashboards, collaborative documents, recorded video updates.

**3. Over-Communicate**
What would be obvious in-person needs to be explicitly communicated virtually. Assume positive intent and clarify rather than assume.

**Example – Transformation Program**: One workstream is in India (12.5 hours ahead of Sarah's US location). Sarah uses:
- **Overlap hours**: 8:00-10:00 AM Sarah's time = 8:30-10:30 PM India time. Critical coordination meetings happen then.
- **Asynchronous updates**: The India team records a 5-minute video update each day showing progress. Sarah reviews and responds asynchronously.
- **Shared documentation**: All decisions and action items are documented in a shared wiki, reducing the need for synchronous meetings.

## Key Takeaways: Coordination Principles

1. **Coordination must match the way of working**: Predictive uses structured status meetings and work authorization. Agile uses daily standups and sprint ceremonies. Hybrid uses tiered coordination across program and team levels.

2. **Dependencies are the enemy of speed**: Proactively identify, monitor, and manage dependencies. Build buffers. Have backup plans.

3. **Rhythm matters**: Establish predictable coordination cadences so teams know what to expect and can plan accordingly.

4. **Visibility drives accountability**: Make progress, dependencies, and problems visible. Transparency prevents surprises.

5. **Adapt to team maturity**: High-performing teams need less coordination overhead. Forming teams need more structure.

6. **Informal coordination is as important as formal**: Create space for ad-hoc problem-solving and collaboration.

7. **Minimum viable coordination**: Coordinate what's necessary, not what's comprehensive. Avoid coordination theater.

Sarah's ability to coordinate execution across three simultaneous projects—each with different delivery approaches—demonstrates her mastery of these principles. The Office Renovation's structured weekly meetings, the Expense System's daily standups, and the Transformation Program's tiered coordination all work because Sarah tailors the approach to context.

Effective coordination is the foundation of successful execution. Without it, even the best plans fail. With it, teams can navigate complexity, manage dependencies, and deliver value.

---

**Next**: [13b – Quality Assurance and Testing](13b%20–%20Quality%20Assurance%20and%20Testing.md)
**Previous**: [Chapter 13 – Executing and Delivering Work](13%20–%20Executing%20and%20Delivering%20Work.md)
