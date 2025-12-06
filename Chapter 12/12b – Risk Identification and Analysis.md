# 12b – Risk Identification and Analysis

## Learning Objectives

- Use multiple techniques to identify project risks
- Distinguish between qualitative and quantitative risk analysis
- Construct and interpret probability-impact matrices
- Score and prioritize risks
- Apply assumptions analysis to surface hidden risks
- Understand how identification and analysis differ across delivery approaches

---

## Risk Identification: Surfacing the Uncertainties

Risk identification is the process of systematically uncovering what could go wrong (or unexpectedly right) in a project. It's not a one-time activity—risks emerge continuously as the project progresses and the environment changes.

The key to effective identification is using multiple techniques. No single method surfaces all risks; different approaches reveal different uncertainties.

### Technique 1: Expert Interviews and Brainstorming

Talking to people who understand the domain, similar past projects, or the execution environment is one of the richest sources of risk identification.

**How to do it**:
1. Identify experts: people with relevant experience—team members, vendors, stakeholders, people from similar past projects
2. Ask open-ended questions: "What could go wrong?" "What keeps you up at night about this project?" "What surprised you in the last similar project?"
3. Document what you hear: list specific risks, not just general concerns
4. Look for patterns: if multiple people mention a similar concern, it's likely a significant risk

**Example from Sarah's office renovation**:
Sarah holds a brainstorming session with the construction contractor, facilities manager, and department heads. The contractor mentions that the building's mechanical systems are older and less documented than typical modern buildings—there could be surprises during construction. The facilities manager notes that the organization has had bad experiences with one particular permitting officer who's slow to respond. The department heads worry about loss of workspace disrupting their operations. These become specific risks to track.

**Strengths**:
- Surfaces risks people have actually experienced
- Engages stakeholders early
- Builds shared understanding

**Limitations**:
- Can be biased toward recent experiences
- Group dynamics can suppress some voices
- Requires skilled facilitation

### Technique 2: Assumptions Analysis

Every project plan contains assumptions—things we're taking for granted. Many risks hide in assumptions that turn out to be false.

**How to do it**:
1. List the project assumptions from the business case, charter, and plans (e.g., "Key staff will remain available," "Requirements are stable," "Vendor will meet quality standards")
2. For each assumption, ask: "What if this isn't true?" and "How likely is it to be false?"
3. Turn questionable assumptions into risks
4. Where possible, validate assumptions early

**Example from Sarah's expense system**:
An assumption: "Users will adopt the new system without major resistance because they've been asking for a better solution." Sarah recognizes this as risky. Not all users want change; some prefer the current system; adoption will vary by user group. She identifies organizational adoption risk and plans early change management work (interviews, training, pilot groups).

**Strengths**:
- Surfaces risks hidden in planning
- Encourages critical thinking about plans
- Often inexpensive

**Limitations**:
- Requires people to think counterintuitively (questioning their own assumptions)
- Some assumptions are hard to articulate or question

### Technique 3: Checklists and Historical Data

Checklists based on past projects, industry benchmarks, or frameworks (like the PMBOK or PMBOK) help ensure you don't overlook common categories of risk.

**Sample risk categories**:
- Technical risks (technology, integration, architecture)
- Schedule risks (dependencies, resource availability, estimation)
- Cost risks (inflation, vendor performance, scope changes)
- Organizational risks (turnover, misalignment, resistance)
- External risks (regulatory, market, vendor)
- Quality risks (defects, testing coverage, acceptance criteria)

**Example from Sarah's transformation program**:
Sarah reviews checklists from past transformation projects in the industry. Common risks for this type of initiative include executive misalignment, change fatigue (multiple initiatives at once), resource conflicts across teams, and benefits realization challenges. She uses these to prompt her identification session and ensures the risk register addresses these categories.

**Strengths**:
- Systematic coverage of risk categories
- Leverages organizational learning
- Quick to apply

**Limitations**:
- Can be generic; may miss project-specific risks
- Checklist fatigue if too comprehensive

### Technique 4: Risk Reviews and Status Meetings

As the project progresses, regular risk reviews (predictive) or retrospectives (agile) surface emerging risks.

**Predictive approach**: Monthly or quarterly formal risk reviews. Examine how risks are trending, review assumptions, discuss new risks, and validate response strategies.

**Agile approach**: Risk discussion in sprint planning, daily standups (if relevant), and retrospectives. "Did anything new emerge as a risk? Did any risk event occur?"

**Example from Sarah's office renovation**:
At the monthly risk review, Sarah's team discusses permits that are still pending. They check in with the permitting office and learn there's a backlog—approval will likely be delayed by 2 weeks. This emerging schedule risk wasn't identified during initial planning; it surfaces through ongoing monitoring.

**Strengths**:
- Catches emerging risks early
- Normalizes risk discussion
- Keeps risk management fresh

**Limitations**:
- Requires consistent meeting discipline
- Effectiveness depends on team candor

---

## Risk Analysis: Understanding Probability and Impact

Once risks are identified, analysis helps prioritize them. Which risks should you invest response effort in? Which can you monitor but not actively manage? Analysis guides these decisions.

### Qualitative Analysis

Qualitative analysis asks: "What's the likelihood this risk will occur? How big is the impact if it does?" You don't need precise numbers; relative comparison is enough.

**Probability Scale**:
- **High**: Likely to occur (>50% chance)
- **Medium**: Could occur (25-50% chance)
- **Low**: Unlikely (<25% chance)

**Impact Scale** (choose the dimension most relevant to your project—usually schedule, cost, or quality):
- **High**: Major impact on objectives (would significantly delay schedule, exceed budget by >10%, or compromise critical quality)
- **Medium**: Moderate impact (would cause noticeable delays, cost overruns around 5-10%, or affect important quality)
- **Low**: Minor impact (manageable within current reserves, acceptable schedule variance, non-critical quality effects)

**The Probability-Impact Matrix**:

|  | **Low Impact** | **Medium Impact** | **High Impact** |
|---|---|---|---|
| **High Probability** | Monitor | Actively Manage | Actively Manage + Plan Contingency |
| **Medium Probability** | Monitor | Monitor or Manage | Actively Manage |
| **Low Probability** | Accept | Monitor | Manage or Contingency Plan |

**How to use it**:

1. Plot each identified risk on the matrix
2. Risks in the upper right (high probability, high impact) demand active response
3. Risks in the lower left (low probability, low impact) can be accepted or simply monitored
4. Risks in the middle require judgment

**Example from Sarah's office renovation**:

| Risk | Probability | Impact | Response Level |
|------|-------------|---------|---|
| Permitting delay | High | High | Actively Manage |
| Construction surprises (hidden systems) | Medium | Medium | Manage + Contingency |
| Scope creep from stakeholders | High | Medium | Actively Manage |
| Contractor quality issues | Low | High | Manage + Contingency |
| Vendor price inflation | Medium | Medium | Monitor + Mitigation Plan |

**Strengths**:
- Quick and intuitive
- Engages non-technical stakeholders
- Good for prioritization
- Works at any project stage

**Limitations**:
- Subjective; different people may rate risks differently
- Doesn't calculate actual expected value
- Risk interactions aren't captured

### Quantitative Analysis

Quantitative analysis assigns numerical values to probability and impact, then calculates expected monetary value (EMV) or other metrics. This is most useful when the project has significant financial stakes or when decisions hinge on precise cost/schedule estimates.

**Expected Monetary Value (EMV)**:

EMV = Probability × Impact (in dollars)

For example:
- Vendor delay risk: 40% probability, $50,000 schedule impact = $20,000 EMV
- Technical rework: 25% probability, $100,000 cost impact = $25,000 EMV

You then allocate contingency reserves proportional to EMV, or use EMV to compare alternative approaches.

**Example from Sarah's expense system**:
Sarah is deciding between custom development and buying a platform. The custom approach has lower upfront cost but higher technical risk. The platform approach has higher upfront cost but lower execution risk.

- **Custom development**:
  - Technical risk: 30% probability, $75,000 cost if rework needed = $22,500 EMV
  - Requirement risk: 40% probability, $50,000 cost if re-scoping needed = $20,000 EMV
  - Total risk-adjusted cost: Base cost + $42,500 contingency

- **Platform approach**:
  - Vendor lock-in risk: 20% probability, $30,000 cost if limitations discovered = $6,000 EMV
  - Integration risk: 25% probability, $40,000 cost if customization needed = $10,000 EMV
  - Total risk-adjusted cost: Base cost + $16,000 contingency

The quantitative comparison shows the platform approach is less risky on an EMV basis, supporting the recommendation.

**When to use quantitative analysis**:
- Large, high-stakes projects
- Projects with significant financial exposure
- When comparing alternatives
- When stakeholders need precise cost/schedule confidence

**Strengths**:
- Precise, data-driven
- Enables meaningful comparison of alternatives
- Provides clear basis for contingency allocation

**Limitations**:
- Requires historical data and some precision in estimates
- Can create false sense of precision
- Time-consuming
- Most useful for financial or schedule risks; less useful for organizational risks

---

## Risk Scoring and Prioritization

After analysis, risks need to be prioritized. Not all risks warrant equal management effort.

**Risk Priority Score** (simple approach):
Priority = Probability × Impact

On a scale where Low=1, Medium=2, High=3:
- Score 9 = High priority (High prob × High impact)
- Score 6 = Medium priority
- Score 1 = Low priority (Low prob × Low impact)

Once scored, focus response efforts on the top 5-10 risks (depending on project size). Risks below a certain threshold are monitored but not actively managed.

**Example from Sarah's transformation program**:

| Risk | Prob | Impact | Score | Priority | Response |
|------|------|--------|-------|----------|----------|
| Executive team misalignment on vision | High | High | 9 | Critical | Active Management |
| Change fatigue across organization | High | High | 9 | Critical | Active Management |
| Benefits realization challenges | Medium | High | 6 | High | Active Management |
| Resource conflicts across initiatives | High | Medium | 6 | High | Active Management |
| Technology vendor performance | Medium | Medium | 4 | Medium | Monitor |
| Team member turnover | Low | Medium | 2 | Low | Monitor |

The top 4 risks get response plans. The others are monitored but don't require proactive response.

---

## Risk Identification and Analysis Across Delivery Approaches

### Predictive
- **Timing**: Comprehensive risk identification during planning phase
- **Techniques**: Expert interviews, assumptions analysis, historical data, risk checklists
- **Analysis**: Often both qualitative and quantitative; detailed probability and impact assessment
- **Documentation**: Risk register with detailed descriptions, owners, and response plans
- **Frequency**: Reviews at gates; quarterly or monthly reviews throughout execution

*Example: Sarah's office renovation team develops a comprehensive 2-page risk register during the planning phase, identifying 15-20 risks, analyzing each with probability and impact, and assigning response strategies. This register is reviewed formally monthly.*

### Agile
- **Timing**: Continuous throughout project
- **Techniques**: Backlog grooming (what could prevent story completion?), retrospectives ("what went wrong and why?"), daily standups (emerging blockers)
- **Analysis**: Primarily qualitative; focus on severity and urgency rather than probability
- **Documentation**: Risk tracking board or backlog items; lightweight documentation
- **Frequency**: Every sprint cycle; continuous in standup discussions

*Example: In sprint planning for the expense system, the team asks "What could prevent us from completing this story?" Technical unknowns become investigation work. In the retrospective, the team discusses what surprised them and what adjustments to make. There's no formal risk register, but risks are surfaced continuously.*

### Hybrid
- **Program level**: Predictive approach for strategic risks (business case assumptions, organizational readiness, benefits realization)
- **Team level**: Agile approach for delivery risks (technical unknowns, scope clarification, dependency issues)
- **Integration**: Risk escalation from team to program when it crosses thresholds or affects other initiatives

*Example: Sarah's transformation program maintains a strategic risk register for organizational and benefits risks (identified during program planning, reviewed at governance gates). Each initiative team manages delivery risks adaptively in sprints. If a delivery risk threatens the program schedule or benefits, the team escalates.*

---

## Assumption Analysis: A Deeper Look

Assumptions are so important that they deserve special attention. Every project plan is built on assumptions, many of which are invisible.

**Process for assumption analysis**:

1. **Articulate assumptions**: List everything the plan takes for granted
   - "Vendor will meet agreed delivery dates"
   - "Key team members will remain available throughout project"
   - "Current technical infrastructure is adequate"
   - "Requirements are stable"
   - "Executive sponsor will remain engaged"

2. **Assess assumption validity**: For each, ask:
   - How confident are we in this assumption?
   - What evidence supports it?
   - What would happen if it proved false?

3. **Test critical assumptions**: For assumptions you're uncertain about, add work to validate them early
   - Run proof-of-concept on technical assumptions
   - Conduct stakeholder interviews on organizational assumptions
   - Get vendor commitments in writing on vendor assumptions

4. **Convert invalid assumptions to risks**: If an assumption is questionable, it's a risk
   - Example: Assumption "Requirements are stable" → Risk "Requirements may evolve mid-project"

5. **Track assumptions throughout the project**: As you learn more, assumptions may prove true or false
   - True assumptions can be retired (no longer a risk)
   - False assumptions trigger contingency plans

**Example from Sarah's expense system**:

Initial assumption: "Users will migrate to the new system within 2 weeks of launch because they've wanted a solution for so long."

As Sarah learns more through user research and interviews, she discovers:
- Some users prefer the current system (it's familiar)
- Training and support are critical to adoption
- Peer influence matters (if power users adopt, others follow)

She converts this into three related risks:
- User resistance risk (some users won't adopt)
- Training inadequacy risk (insufficient training slows adoption)
- Organizational readiness risk (lack of executive communication about importance)

These risks inform her change management planning (Chapter 12e).

---

## Creating a Risk Register

A risk register is the central document for tracking identified risks, their analysis, and their responses. Even agile projects benefit from simplified risk registers.

**Minimal risk register content**:

| Risk ID | Description | Probability | Impact | Priority | Owner | Response | Status |
|---------|-------------|-------------|--------|----------|-------|----------|--------|
| R01 | Permitting delay | High | High | Critical | Facilities Manager | Engage permit office early; plan schedule buffer | Active |
| R02 | Scope creep | High | Medium | High | Project Manager | Formal change control; stakeholder education | Active |
| R03 | Vendor quality | Low | High | Medium | Procurement | Quality assurance inspections; contracts with penalties | Monitor |

**Enhanced register content** (for larger projects):

- Risk ID, description, category
- Probability, impact, priority score
- Root cause analysis (why might this risk occur?)
- Owner (who is responsible for managing this risk?)
- Response strategy (what will we do about it?)
- Contingency plan (if risk occurs, what's our fallback?)
- Status (open, mitigated, realized, closed)
- Owner updates (how's the risk trending?)

The register is a living document. Update it as you learn new information, risks are realized or retire, and responses are executed.

---

## Key Takeaways

- **Multiple identification techniques surface different risks**: Brainstorming, assumptions analysis, checklists, and ongoing reviews each contribute.
- **Qualitative analysis is usually sufficient**: Probability-impact matrices quickly prioritize risks without needing precise numbers.
- **Quantitative analysis helps with high-stakes decisions**: When financial impact is significant, EMV helps choose between alternatives.
- **Assumptions hide risks**: Make assumptions visible; test critical ones; convert questionable assumptions into risks.
- **Risk identification is continuous**: As the project progresses, new risks emerge and others retire.
- **Prioritization focuses effort**: Manage the top 5-10 risks actively; monitor others.
- **Different delivery approaches use different timing**: Predictive does comprehensive upfront analysis; agile identifies risks continuously.

---

## Reflection Questions

1. **Your current risks**: Pick a current or recent project. Use one of the identification techniques above to surface 5-10 risks. Create a simple probability-impact matrix and prioritize them.

2. **Hidden assumptions**: What assumptions are you making about that project? What would happen if each proved false?

3. **Risk culture**: How comfortable is your team with discussing risks? What barriers exist to raising concerns? How could you strengthen psychological safety around risk conversations?

4. **Delivery approach**: Does your organization do qualitative or quantitative analysis? Is the approach aligned with project risk exposure?

---

*← [Back to Chapter 12](./12%20–%20Risk,%20Issues,%20and%20Change%20Management.md#table-of-contents) • [12a – Understanding Risk](./12a%20–%20Understanding%20Risk.md) • Next: [12c – Risk Response Strategies](./12c%20–%20Risk%20Response%20Strategies.md) →*
