# 12f – Knowledge Check

This section contains scenario-based practice questions testing your understanding of risk, issue, and change management across predictive, agile, and hybrid delivery approaches. These questions reflect the style and complexity of the actual PMP exam.

---

## Question 1: Risk Identification

**Scenario**: You're planning a software implementation project for a financial services organization. The organization has never implemented this type of technology before, but the business case is strong. You're in the planning phase and beginning risk identification.

Which of the following techniques would be MOST valuable for surfacing risks specific to this organization's lack of experience with this technology?

A) Reviewing the PMBOK risk checklist to ensure comprehensive coverage

B) Conducting interviews with technical leads from similar implementations at other organizations, then validating against your organization's context

C) Completing a quantitative analysis of schedule and cost variance from historical projects

D) Scheduling monthly risk review meetings to surface emerging risks as the project progresses

**Correct Answer: B**

**Explanation:**
Option B is correct because it combines two powerful identification techniques: **expert interviews from comparable contexts** (external perspective on what could go wrong) and **assumptions analysis against your organization's specific environment** (validating which risks actually apply to your situation).

- **Why A is insufficient**: Checklists are generic. They won't surface the specific organizational factors (lack of experience, cultural readiness, integration with existing systems) that are unique to this context.
- **Why C is incorrect**: Quantitative analysis is useful for analyzing identified risks, not for identifying them. You need to surface risks first, then analyze them.
- **Why D is incomplete**: Monthly reviews are necessary for ongoing identification, but they're too late for planning-phase identification. You'd miss the opportunity to plan proactively. This also assumes projects can only identify risks by waiting for them to emerge.

**Key concept**: Different identification techniques serve different purposes. Expert interviews help you learn from others' experiences. Assumption analysis helps you challenge your own planning. Checklists ensure comprehensive coverage. All should be used, but interviews + assumption validation is most powerful for novel situations.

---

## Question 2: Risk Analysis and Prioritization

**Scenario**: You've identified eight risks on your manufacturing facility upgrade project. Your sponsor asks you to focus the team's efforts on the top risks. Here's your current list:

| Risk | Probability | Impact | Priority Score |
|------|---|---|---|
| Vendor delivers components late | 60% | High (would delay project 2 months) | 9 |
| City permit could be delayed | 40% | High (would delay project 2 months) | 6 |
| Project team might exceed budget | 30% | Medium (would add 8% to costs) | 3 |
| Newer equipment might have learning curve | 70% | Low (manageable with training) | 2 |
| Key engineer might leave company | 20% | High (would disrupt design work) | 3 |
| New material supplier might have quality issues | 50% | Medium (would trigger rework) | 4 |
| Executive sponsor might shift priorities | 25% | High (would change scope) | 3 |
| Contractor might have safety incidents | 15% | High (would halt work; legal liability) | 3 |

Which risks should be prioritized for active management response?

A) The three risks with the highest probability (vendor, equipment learning curve, material quality)

B) The four risks with high impact (vendor, city permit, key engineer, executive priority shift)

C) The three risks with the highest priority scores (vendor, city permit, and the risk with the next highest score)

D) The risks with both high probability AND high impact; also the contractor safety risk due to severity of consequences if it occurs

**Correct Answer: D**

**Explanation:**
Option D is correct because risk prioritization should consider not just the mathematical product of probability × impact (priority score), but also the **severity of potential consequences** and **organizational exposure**.

- **Why A is wrong**: Probability alone doesn't justify response. The equipment learning curve is 70% likely, but low impact; training is cheaper than active management. The vendor risk (60% probability, high impact, score of 9) is legitimate, but this doesn't identify the next priorities well.
- **Why B is incomplete**: High impact alone doesn't justify response. Many high-impact risks are low-probability. The executive priority shift (25% probability, high impact) is less urgent than the vendor and permit risks.
- **Why C is incomplete**: This only captures risks by mathematical score and misses the contractor safety risk, which—while 15% probability and high impact (score of 3)—has severe legal and ethical implications that make it worth active management even if the score suggests monitoring.

The top priorities are:
1. **Vendor delivers late** (60% × High = Score 9; highest risk)
2. **City permit delay** (40% × High = Score 6; strategic impact on project start)
3. **Contractor safety incidents** (15% × High = Score 3, BUT severe legal/ethical/liability consequences justify active response despite low score)

Additional candidates:
4. **Key engineer leaves** (20% × High = Score 3; moderate priority)
5. **Material quality** (50% × Medium = Score 4; manageable but worth proactive supplier management)

**Key concept**: Risk prioritization uses probability × impact scoring, but also considers consequence severity (legal liability, safety, strategic impact). Don't blindly follow the math; apply judgment.

---

## Question 3: Risk Response Strategy Selection

**Scenario**: In your agile product development project, the team has identified a risk: "The new cloud platform we selected doesn't support a security feature our enterprise customers require." The team has 4 weeks before the pilot launch.

What is the BEST risk response strategy?

A) **Avoid**: Immediately switch to a different cloud platform that we know supports the security feature, even though this will delay launch by 6 weeks and increase cost

B) **Mitigate**: Contact the platform vendor immediately to understand if the missing feature can be added; if not, work with customers to see if an alternative approach meets their security needs

C) **Accept**: Proceed with launch as planned; handle the security feature in a Phase 2 release if customers request it

D) **Exploit**: Use this as an opportunity to differentiate from competitors by implementing a proprietary security solution on top of the platform

**Correct Answer: B**

**Explanation:**
Option B is correct because it's the most pragmatic response given the timeline and context.

- **Why A is wrong**: Avoidance (switching platforms) would eliminate the risk but at the cost of 6-week delay and budget overrun—potentially higher costs than the risk impact. Avoidance is appropriate when the cost of avoidance is less than the risk exposure, but that's not true here. Also, the 4-week timeline makes switching infeasible.
- **Why C is wrong**: Passive acceptance ignores a risk you might be able to mitigate with 4 weeks of effort. The risk is moderate-to-high (losing enterprise customers over security feature). A quick conversation with the vendor and customers costs little and might solve it.
- **Why D is wrong**: This confuses a threat with an opportunity. Building proprietary security adds cost and complexity, doesn't solve the underlying risk, and delays launch. This would be irresponsible.

**The right answer** involves **mitigation**:
1. **Probe the problem quickly**: Does the platform really not support it, or is it a different approach that could work?
2. **Contact the vendor**: Can they add the feature? Can they suggest a workaround?
3. **Talk to customers**: Would an alternative approach meet their security needs?
4. **Make a decision**: If the feature truly can't be delivered, negotiate with customers to either accept the platform's approach or delay the pilot.

**Key concept**: Risk response strategy choice depends on **cost-benefit analysis**. Avoidance is costly; it should only be used when avoidance cost < risk cost. Mitigation is often best because it reduces the risk without eliminating the benefit.

---

## Question 4: Risk Management in Agile vs. Predictive

**Scenario**: You're advising two projects with similar risk profiles. Project A is a 12-month traditional (predictive) system implementation for a bank. Project B is a 6-month agile digital product development for a startup. Both have similar technical risks, similar staffing, and similar budgets.

How should risk management DIFFER between these two projects?

A) Project A should develop a detailed risk register during planning and review it monthly; Project B should not maintain a risk register because agile embraces uncertainty

B) Project A should identify all risks during planning and develop contingency plans; Project B should identify risks continuously in standups and retrospectives

C) Both projects should maintain identical risk processes since they have similar risk profiles; the delivery approach shouldn't affect risk management

D) Project A should focus on threat management (avoid, mitigate, accept); Project B should focus on opportunity management (exploit, enhance)

**Correct Answer: B**

**Explanation:**
Option B correctly captures the fundamental difference in how risk management should be applied across delivery approaches.

- **Why A is wrong**: Project B should maintain risk awareness (though perhaps lighter than Project A), but the mechanism is different. Agile surfaces risks continuously through standups and retrospectives, not through a formal static register. Not maintaining risk awareness in agile is irresponsible.
- **Why C is wrong**: Similar risk profiles don't mean identical processes. Risk management should be tailored to the delivery approach. Predictive projects benefit from upfront comprehensive planning; agile projects benefit from continuous identification and adaptation.
- **Why D is wrong**: Both projects face threats and opportunities. The delivery approach doesn't determine which to manage; the project context does.

**Key differentiation**:
- **Project A (Predictive)**: Comprehensive risk identification during planning phase. Formal risk register. Monthly or quarterly formal risk reviews. Detailed contingency and fallback plans for high-priority risks. Change control board for scope changes. Risk is managed proactively through formal governance.
- **Project B (Agile)**: Continuous risk identification through user story definition ("what could prevent us from delivering this story?"), sprint planning ("what risks did we miss?"), daily standups (blockers are often risks), and retrospectives ("what surprised us? What changed?"). Risks are captured on a lightweight risk board and incorporated into sprint work. Risk response is adaptive rather than pre-planned.

Both approaches manage risk; they just do it differently aligned to how each delivery approach works.

**Key concept**: Risk management processes should be tailored to delivery approach. Predictive manages risk through formal planning and governance. Agile manages risk through continuous feedback and adaptation.

---

## Question 5: Risk as Strategy Input

**Scenario**: You're advising on the approach for a business transformation project. The organization has two options:

Option 1: Implement the new system in all locations simultaneously (big bang approach). This is faster (12 months total) but higher risk. If anything goes wrong, it affects everyone at once.

Option 2: Implement in pilot locations first (3 locations, 6 months), then roll out to remaining locations (6 additional locations, another 6 months for total of 12 months). This is safer; problems are discovered in a small scope first.

How should risk analysis inform this decision?

A) Option 1 is better because it completes faster and reduces total project cost

B) Option 2 is better because it has lower risk; therefore it's always the better choice

C) Risk analysis should compare the probability and impact of failure for each approach, the cost of mitigation/contingency for each, and help leadership make the trade-off with full understanding of what's being gained and lost

D) The choice between options should be made purely on business factors (ROI, speed to value); risk is managed after the approach is selected, not as input to the decision

**Correct Answer: C**

**Explanation:**
Option C is correct because risk is a strategic input to delivery approach decisions. Leadership should understand what risks they're accepting with each choice.

- **Why A is insufficient**: Option 1 is faster but potentially much riskier. "Faster and cheaper" doesn't automatically mean "better" if it exposes the organization to catastrophic risk.
- **Why B is wrong**: Lower risk doesn't automatically make an option better if it sacrifices important business objectives (speed, ROI). The right choice depends on organizational risk appetite and business priorities.
- **Why D is wrong**: This separates strategy from risk, which is a mistake. Risk is a key factor in strategic choice. "How much risk are we willing to take to achieve this speed/cost?" is a strategic question.

**The right answer involves**:
1. **Analyze failure scenarios for each approach**:
   - **Option 1**: If something fails (data integrity, user adoption, performance), how many locations are affected? How long to recover?
   - **Option 2**: If something fails, how many locations are affected? What do we learn that helps with the broader rollout?

2. **Quantify the risk**:
   - **Option 1**: 40% probability of significant failure; $5M recovery cost if it occurs; 3-month schedule impact; operational disruption
   - **Option 2**: 15% probability of significant failure in pilot; learning reduces risk for broader rollout; longer timeline but lower peak risk

3. **Consider organizational risk appetite**:
   - Is this a strategic priority that justifies high risk? Or is reliability/stability more important?
   - Can the organization afford a catastrophic failure?

4. **Make the decision with full information**:
   - Maybe Option 2 is better (lower risk, learning benefits)
   - Maybe Option 1 is better (organizational risk appetite is high; speed is critical)
   - But the choice should be informed by risk, not made despite risks

**Key concept**: Risk analysis informs strategy decisions. Project managers should help leadership understand what risks they're accepting with each choice, not just recommend the "safest" option.

---

## Question 6: Issue vs. Risk

**Scenario**: During week 2 of your construction project, you discover that the existing building foundation is more compromised than the initial inspection suggested. Structural repair work that wasn't in the original plan is now necessary.

Which statement BEST describes what's happening?

A) This is a schedule risk. It was identified as a risk with "possibility of foundation issues" during planning. Now it's been realized.

B) This is an issue. A risk event has occurred, and the team now needs to decide how to resolve it.

C) This is a scope change. The building's foundation condition has changed from what was originally understood.

D) This is both a risk and an issue; it was a risk during planning, and now that it's occurred, it's also an issue requiring immediate attention.

**Correct Answer: D** (with nuance)

**Explanation:**
Option D best captures the full situation. The distinction between A, B, C, and D reveals important nuances:

- **Why A is incomplete**: Yes, this was a risk, but calling it "a risk that was realized" doesn't capture the current reality. Once the event has occurred and the team needs to act, it's no longer just a risk—it's an issue requiring immediate resolution.
- **Why B is accurate but incomplete**: Yes, this is definitely an issue. But describing it *only* as an issue misses that it emerged from a risk we should have anticipated.
- **Why C is partially true but shifts focus**: Yes, scope has changed (additional work was discovered), but framing it only as "scope change" might miss the risk management lesson. The question is: Should we have anticipated this in risk planning?
- **Why D is most complete**: This was a risk during planning ("foundation might have issues"). Now that the event has occurred, it's transformed into an issue requiring immediate resolution. Understanding both aspects is important: (1) it reveals whether our risk identification was adequate, and (2) it clarifies our immediate management approach (issue resolution, not risk prevention).

**The immediate management action**:
1. **Log the issue**: Foundation repair required; impacts schedule and budget
2. **Assess impact**: How much work is needed? What's the cost and schedule impact?
3. **Escalate**: This likely exceeds contingency reserves; needs approval to proceed
4. **Execute**: Begin foundation repair work; monitor progress and impacts
5. **Learn**: Should our risk identification have flagged this more prominently? Should we have budgeted more contingency?

**Key concept**: Once a risk event occurs and requires immediate action, it becomes an issue. But understanding that it emerged from a risk helps you learn and improve risk management for future projects.

---

## Question 7: Contingency Reserves

**Scenario**: Your project has the following characteristics:
- Base project cost (no risk): $400,000
- Identified risks with response strategies:
  - Supplier delay: 40% probability, $75,000 cost impact = $30,000 EMV
  - Scope changes: 50% probability, $40,000 cost impact = $20,000 EMV
  - Technical rework: 30% probability, $50,000 cost impact = $15,000 EMV
- This is your organization's first project of this type; similar projects in the industry have experienced ~10% of base costs in unidentified risks

What contingency reserve should you recommend?

A) $50,000 (sum of the three identified risks' EMV)

B) $50,000 specific contingency + $40,000 general contingency (10% of base) = $90,000 total

C) $65,000 (sum of the three identified risks' EMV plus 20% of base for general contingency)

D) $100,000 (to be safe; covering all identified risks plus unknown unknowns)

**Correct Answer: B**

**Explanation:**
Option B correctly allocates both specific and general contingency reserves.

- **Why A is incomplete**: This only covers the identified risks (EMV of $65,000, not $50,000—I added correctly above). But it ignores unknown unknowns. The organization will face risks they haven't identified; those need a general contingency reserve.
- **Why C uses the right logic but wrong numbers**: The thinking is correct (identified + general contingency), but the calculation is off. EMV of identified risks is $65,000, not $50,000. General contingency should be based on organizational experience, not an arbitrary 20%.
- **Why D is overly conservative**: $100,000 might eventually prove adequate, but without justification. It's using fear rather than analysis. Contingency should be data-driven, not arbitrary.

**The right approach**:
1. **Specific contingency**: Sum of EMV for identified risks = $30,000 + $20,000 + $15,000 = **$65,000**
   - This is "authorized but not yet approved work" for identified risks
   - Included in the project baseline

2. **General contingency**: ~10% of (base + specific contingency) = 10% × ($400,000 + $65,000) = **$46,500** (round to $40,000-50,000)
   - This is for unknown unknowns
   - Held as management reserve
   - Requires management approval to use

3. **Total budget**: $400,000 + $65,000 + $46,500 = **$511,500**

**Key concept**: Contingency has two components:
- **Specific contingency** (EMV of identified risks): Included in the baseline; budget for known unknowns
- **General contingency** (% of total for unknown unknowns): Held as management reserve; requires approval to use
- Base your contingency on data (historical similar projects, EMV analysis), not on fear or arbitrary percentages

---

## Question 8: Change Management Across Groups

**Scenario**: Your organization is implementing new project management software company-wide. You're planning the change management strategy. The organization has three groups with very different readiness levels:

- **Group A (IT department)**: High readiness. They understand the technology; they're excited to use better tools. They'll adopt immediately.
- **Group B (Finance department)**: Moderate readiness. They see the value but are concerned about learning new tools and worry about operational disruption during the transition.
- **Group C (Operations)**: Low readiness. They're not convinced the new system is necessary; they're comfortable with the current way; they see change as additional work.

How should your change management strategy DIFFER across these groups?

A) Use the same communication and training for all groups; everyone should adopt the same software the same way

B) **Group A**: Empower them as coaches/champions; **Group B**: Provide strong training and evidence of success; **Group C**: Require adoption with clear consequences

C) **Group A**: Give them complex training; **Group B**: Basic training; **Group C**: Just expect them to figure it out

D) **Group A**: Focus marketing on innovation; **Group B**: Focus on operational benefits; **Group C**: Focus on compliance/requirements

**Correct Answer: B**

**Explanation:**
Option B correctly recognizes that different readiness levels require different strategies.

- **Why A is wrong**: One-size-fits-all approaches waste resources on groups that don't need as much support (Group A) and provide insufficient support to groups that need more (Group C).
- **Why C is backwards and ineffective**: Giving complex training to the least ready group is setting them up for failure. You'd see low adoption, user frustration, and resistance.
- **Why D is partially useful but incomplete**: Yes, messaging should be tailored by group, but that's not enough. You also need to adjust training, support, timelines, and engagement strategies.

**Tailored change strategies**:

| Group | Readiness | Strategy |
|---|---|---|
| **A: IT (High)** | Champions ready to adopt | Make them coaches/champions; give them early access; use them to help other groups; recognize their leadership role |
| **B: Finance (Moderate)** | See value but worried | Provide strong training; connect them with early adopters (Group A) to see it works; evidence of success builds confidence; peer mentors help; provide extra support during transition |
| **C: Operations (Low)** | Resistant; don't see value | **First**: Help them understand *why* (business case, competitive necessity, future state vision). **Then**: Involve them in designing how it will work (choice and control reduce resistance). **Then**: Extra training and support; patient coaching. **Finally**: Clear expectations about what adoption looks like and consequences if they don't adopt. |

**Key concept**: The change curve, adoption spectrum, and resistance drivers all suggest that people at different readiness levels need different strategies. Match your approach to their readiness, concerns, and role.

---

## Question 9: Resistance Root Causes and Responses

**Scenario**: You're implementing a new process that streamlines approval workflows. Team members who currently handle approvals are resisting the change. You investigate and find that their primary concern is: "If approvals are automated/streamlined, we won't be needed anymore. We're worried about our jobs."

Which response strategy BEST addresses the underlying resistance?

A) Explain the business case for the process change and why it's non-negotiable; set expectations that adoption is required

B) Understand their concern about job security; assure them that this is about efficiency, not elimination; show them how their role will evolve (less routine approvals, more strategic work); retrain them for the new role; involve them in designing the transition

C) Offer them a severance package if they choose to leave; hire new people who are more open to change

D) Implement the change only for new approvals; let current team members continue with the old process until they retire

**Correct Answer: B**

**Explanation:**
Option B directly addresses the root cause of resistance (fear of job elimination) with a comprehensive response.

- **Why A is wrong**: This ignores the underlying concern. Explaining the business case doesn't address "Am I going to have a job?" You need to answer that first.
- **Why C is wrong**: Offering severance might solve the immediate problem but it's destructive. You're eliminating experienced staff and sending a message that "if you resist, we get rid of you," which poisons organizational trust.
- **Why D is wrong**: This prevents the change from working. You can't have parallel processes; you either implement the change or you don't. Allowing exceptions undermines the new process.

**The right approach**:
1. **Acknowledge the concern**: "I understand your worry. This is a real concern, and I appreciate you raising it."
2. **Be honest**: "Some routine approval work will be eliminated. That's true."
3. **Show the bigger picture**: "But here's how your role will evolve:
   - 40% of time: Strategic approvals that require judgment (not routine)
   - 30% of time: Supporting the new system; identifying edge cases and exceptions
   - 20% of time: Coaching other departments on the new process
   - You're moving from execution to strategy and coaching."
4. **Invest in transition**: Retrain them; give them time to learn the new role; coach them through the change
5. **Involve them**: Include them in process design; their insights are valuable
6. **Follow through**: Ensure they're truly valued in the new role; don't ask them to accept change and then marginalize them

**Key concept**: Understanding resistance drivers (this case: job security) allows you to address the *real* concern, not just the surface objection. When you address the underlying fear, people move from resistant to supportive.

---

## Question 10: Scope Change vs. Organizational Change

**Scenario**: Your customer has requested a significant new feature for your software system. The feature will:
- Add 3 weeks to the schedule
- Cost an additional $80,000
- Require 2 new team members
- Impact existing functionality in 3 workflows

The customer insists the feature is critical and wants it in the initial release. Your project is already at risk for schedule overrun.

Which issues must you address to make a proper decision about this request?

A) Only the technical scope change decision: Does the feature fit in the release or should it be deferred?

B) The scope change decision AND the organizational change question: "Can our teams successfully implement this change AND adopt the modified workflows with the new functionality?"

C) Only the organizational change: Will the team be able to learn and use the new feature?

D) Get management approval and implement; scope changes are decided by formal governance, not by project managers

**Correct Answer: B**

**Explanation:**
Option B correctly identifies that scope change decisions must also consider organizational change implications.

- **Why A is incomplete**: Deciding "approve the feature" without considering how the organization will adopt the modified workflows is setting yourself up for problems. You deliver the feature on time, but users don't adopt it because you didn't manage the organizational change.
- **Why C is wrong**: Yes, organizational adoption is critical, but you also need to address the scope/technical decision. The two are interconnected.
- **Why D is partially right but misses the bigger picture**: Yes, governance approves/declines scope changes. But project managers should raise organizational change implications as part of the decision. "We can technically deliver this, but organizational adoption will be challenging because we'll need to retrain 50 people and redesign 3 workflows. Is that acceptable?"

**The complete decision framework**:

| Decision | Questions | Stakeholders |
|----------|-----------|---|
| **Scope change** | Can we build it? Cost, schedule, technical risk? | Project manager, technical team, sponsor |
| **Organizational change** | Can the organization adopt the change? Training needed? Workflow changes? Change readiness? | Change manager, department heads, users, HR |
| **Overall decision** | Is the feature worth the total cost (technical + organizational)? | Sponsor, steering committee, customer |

**In this scenario**, the proper response is:
1. "Technically, we can deliver this feature in an additional 3 weeks with 2 new team members and $80,000 additional cost."
2. "But delivering it will require retraining 50+ users and redesigning 3 workflows. We should invest X days in organizational readiness/change management."
3. "Total impact: Schedule +3 weeks, Cost +$80,000 + Change management costs, Risk to adoption if change management is insufficient."
4. "Here are our options:
   - Include the feature in the release AND invest in change management (highest schedule/cost impact but highest adoption probability)
   - Include the feature but defer the organizational change (ship on time but risk poor adoption)
   - Defer the feature to Phase 2 (current schedule/cost, but customer unhappy)
5. "Which trade-off do you choose?"

**Key concept**: Scope changes and organizational change are interconnected. Complete decisions must address both; don't make scope decisions without considering adoption implications.

---

## Question 11: Risk Review Timing

**Scenario**: Your manufacturing project is 6 months into a 12-month predictive implementation. You're in the execution phase. A risk review was scheduled for month 6. The project manager's calendar is full, and they consider skipping this month's risk review because:
- "We've been executing well; no major surprises so far"
- "We'll do a review next month instead"
- "Monthly reviews feel like overhead when things are running smoothly"

Is this a good decision?

A) Yes, skip the review if the project is running well; reviews are only necessary when things are problematic

B) No, maintain the monthly review schedule; the fact that things are running well doesn't mean risks have gone away

C) No, reviews should be MORE frequent during execution, not less, because that's when risks are most likely to be realized

D) Yes, predictive projects only need risk reviews at gates, not throughout execution; monthly reviews are overkill

**Correct Answer: C** (with B as close second)

**Explanation:**
Option C is most correct, though B is also good. The key insight is that execution phase is when risks are most likely to materialize, so reviews should be *more* frequent and rigorous, not less.

- **Why A is wrong**: This is fatalistic thinking. "No problems so far" doesn't mean no problems will occur. Many risks haven't manifested yet. Early success can create false confidence.
- **Why B is correct**: Monthly reviews should absolutely continue. They're not "overhead"—they're where you surface emerging risks before they become crises.
- **Why C is the strongest answer**: Execution is when risk events actually *occur* (or don't). This is when your risk management matters most. Skipping reviews during the period when risks are most likely to happen is exactly backwards. If anything, reviews should be MORE frequent during high-risk periods.
- **Why D is wrong**: Predictive projects should maintain regular reviews throughout execution, not just at gates. Once you're executing, you need to stay on top of emerging risks.

**The risk review cadence**:
- **Planning phase**: Weekly or bi-weekly (risks are being identified and refined)
- **Execution phase**: Monthly (this is when risks are most likely to realize)
- **High-risk periods**: Weekly or as-needed (critical path work, vendor handoffs, integration points)
- **Gate reviews**: Always, regardless of cadence (each gate is an opportunity to review risks and make go/no-go decisions)

**Why risk reviews matter during smooth execution**:
1. **Emerging risks may not be visible yet**: The problem might be building beneath the surface
2. **Assumptions may be changing**: Vendor performance, resource availability, market conditions—these can shift
3. **Mitigation strategies need updating**: Plans made 2 months ago might need adjustment based on what you've learned
4. **New risks emerge**: As execution reveals details, new uncertainties surface
5. **Escalation may be needed**: If a risk's probability is increasing, you might need to escalate or adjust your response

**Key concept**: Risk reviews aren't just for crisis management. They're most valuable during normal execution to stay ahead of problems before they happen.

---

## Question 12: Organizational Change and Strategy

**Scenario**: Your organization is transitioning from waterfall to agile delivery across all projects. This is a significant organizational change affecting how 200+ employees work. You're designing the change management strategy.

What is the PRIMARY reason that executive sponsorship and visible commitment is critical for this change?

A) So executives can monitor team performance and ensure compliance with the new approach

B) So executives can decide when teams must stop using waterfall and switch to agile

C) Because change signals legitimacy; if executives visibly embrace the new approach, it signals to the organization that this is real, important, and worth the effort of changing

D) Because executives understand agile better than project managers and can explain it more clearly

**Correct Answer: C**

**Explanation:**
Option C correctly identifies why sponsorship matters: it signals organizational legitimacy and commitment.

- **Why A is wrong**: While monitoring is part of governance, it's not the *primary* reason sponsorship matters for change management. Sponsorship is about symbolism and commitment, not surveillance.
- **Why B is wrong**: The decision to transition to agile should be made strategically, but the *reason* sponsorship matters isn't about enforcement—it's about modeling.
- **Why C is correct**: Research on organizational change shows that people's willingness to embrace change correlates strongly with whether they believe leadership is genuinely committed. When executives visibly use new tools, talk about new approaches, reward people who embrace change, and themselves work in new ways, it signals "This is real. Leadership isn't asking us to change while they stay the same."
- **Why D is wrong**: Executives may not understand agile better than project managers; that's not the point. Sponsorship value is symbolic, not technical.

**How sponsorship signals legitimacy**:
1. **Visible modeling**: Executives use the new approach in their work; they speak the agile language
2. **Explicit prioritization**: "Agile transformation is a priority for this organization; we're investing in it"
3. **Resource commitment**: Budget, time, training—showing commitment through resource allocation
4. **Accountability**: Evaluating managers partly on how well they're supporting the transition
5. **Consequences**: Addressing people who actively resist the change (within reasonable bounds)
6. **Celebration**: Recognizing teams and people who exemplify the new approach

Without visible sponsorship, people assume: "Leadership is asking us to change, but they don't really believe in it. They'll revert to old ways when pressure mounts. Why should we invest in this change?"

**Key concept**: Change management is 50% technical (training, process design) and 50% psychological (trust, belief, commitment). Sponsorship creates the psychological foundation for change.

---

## Question 13: Predictive vs. Agile Risk Management

**Scenario**: You're advising two project managers who each have a question:

*PM A (Predictive 18-month hardware project)*: "I've completed a comprehensive risk register with 15 identified risks. Should I continue to do full analysis and add contingency reserves, or should I move away from formal risk management and embrace emerging risks?"

*PM B (Agile 8-month software project)*: "My team manages risks in sprints through standups and retrospectives. Should I also create a formal risk register to ensure we're systematic?"

What advice would you give?

A) **PM A**: Do less formal planning; embrace uncertainty. **PM B**: Yes, create a formal register; you need to be more systematic.

B) **PM A**: Continue with formal risk management; it's essential for predictive projects. **PM B**: Your approach is appropriate; lightweight risk tracking is sufficient for agile.

C) **PM A**: Don't add contingency reserves; accept the risks instead. **PM B**: Formal registers are just paperwork; focus on team discussions.

D) **PM A**: Formal risk registers are too detailed; use a simplified matrix. **PM B**: Agile projects shouldn't worry about risks; focus on velocity instead.

**Correct Answer: B**

**Explanation:**
Option B correctly recommends approaches tailored to each delivery method.

- **Why A is wrong**: It inverts the recommendation. Predictive projects benefit from formal planning; agile projects benefit from lightweight, continuous approach. A is backwards.
- **Why C is wrong**: Contingency reserves are essential in predictive projects; you can't just "accept" all risks without budget for potential impacts.
- **Why D is wrong**: Risk registers can be simple or detailed—what matters is that they're proportional to the project and delivery approach. And agile projects absolutely should worry about risks; they just manage them differently.

**Tailored risk management by delivery approach**:

**Predictive (PM A)**:
- ✓ Maintain comprehensive risk register
- ✓ Do qualitative and/or quantitative analysis
- ✓ Develop contingency and fallback plans for significant risks
- ✓ Allocate contingency reserves
- ✓ Conduct formal risk reviews (monthly, at gates)
- ✓ Formal escalation process for risk issues

*Reasoning*: Predictive projects have upfront planning; comprehensive risk analysis at the start informs the plan. Contingency reserves are part of the baseline. Formal governance ensures risks are tracked.

**Agile (PM B)**:
- ✓ Identify risks continuously (user story definition, sprint planning, standups)
- ✓ Track risks on a lightweight board (backlog, risk board, or simple list)
- ✓ Discuss risks in retrospectives
- ✓ Qualitative analysis (this is risky, high priority) rather than detailed scoring
- ✓ Risk response embedded in Definition of Done (testing, code review, etc.)
- ✓ Quick escalation in standup if blockers arise
- ✗ Detailed risk register not necessary
- ✗ Formal contingency reserves not typical; velocity buffers absorb risk

*Reasoning*: Agile projects surface risks continuously through short feedback cycles. Formal registers create overhead; lightweight tracking is sufficient. Risk response is embedded in agile practices rather than formal contingency plans.

**Key concept**: Risk management approaches should fit the delivery model. Predictive = formal, upfront, planned. Agile = continuous, lightweight, embedded in workflow.

---

## Question 14: Issue Escalation and Authority

**Scenario**: During daily standup, a developer mentions that they've discovered a significant data compatibility issue between the new system and legacy data. The issue affects how customer information will be migrated. The team has 3 weeks until go-live.

The developer asks: "Who makes the decision on how to fix this? Do we fix it in the new system, do we spend effort cleaning up legacy data, or do we delay the migration to a later phase?"

Which response BEST demonstrates appropriate escalation and decision-making?

A) The project manager decides immediately; this is their job

B) The development team decides; they understand the technical implications best

C) The issue is escalated to the steering committee; they make the decision

D) The project manager ensures the issue is understood, the trade-offs are clear, and the appropriate decision-maker (likely the sponsor or steering committee) is engaged to make the decision with full information

**Correct Answer: D**

**Explanation:**
Option D correctly balances the project manager's role (understand the issue, present options, manage the escalation) with the appropriate decision-maker's role (make the strategic choice).

- **Why A is wrong**: Some decisions are above the project manager's authority. A decision affecting data integrity, go-live timeline, and customer experience should be made by someone with broader authority.
- **Why B is wrong**: While the technical team's input is essential, the decision also has business implications (cost, schedule, customer impact). The team shouldn't make this decision unilaterally.
- **Why C is incomplete**: The steering committee should decide, but only with clear information. The project manager's job is to present the options with impact analysis, not just hand the problem up.

**The complete escalation process**:

1. **Understand the issue**: What exactly is the data compatibility problem? How does it affect migration? (Dev team input)
2. **Analyze options**:
   - **Option 1**: Fix the new system to accept legacy data format ($15K, 2 weeks)
   - **Option 2**: Clean up legacy data before migration ($8K, 2 weeks)
   - **Option 3**: Delay customer data migration to Phase 2, migrate with workarounds initially ($5K, no schedule delay but customer unhappy)
3. **Impact analysis**: For each option, what's the cost, schedule, risk, and customer impact?
4. **Recommendation**: "Option 2 has the best balance: moderate cost, manageable schedule, cleanest long-term approach."
5. **Escalate**: Present the options, impacts, and recommendation to the sponsor or steering committee
6. **Decide**: The decision-maker chooses an option
7. **Communicate**: Back to the team; update the plan; monitor execution

**Key concept**: The project manager's job in escalation is to (1) understand the issue, (2) present clear options with impacts, (3) recommend a path, and (4) escalate to the right decision-maker. Don't escalate issues that could be resolved at the team level; don't make decisions that should be escalated.

---

## Question 15: Risk Culture and Continuous Improvement

**Scenario**: Your organization has implemented formal risk management on projects. After completing 5 projects with risk registers and monthly reviews, you notice a pattern:
- Projects consistently identify similar types of risks
- Many identified risks either don't occur or occur differently than expected
- Lessons from one project don't seem to transfer to the next project

What does this pattern suggest, and what should change?

A) Risk management is working well; this pattern is normal and expected

B) Risk identification is too generic; the organization needs more detailed risk registers to catch specific risks

C) The organization needs to invest more in **root cause analysis** of why risks occur (or don't occur) and use that learning to improve identification and response strategies

D) The organization should move away from predictive risk management and adopt agile approaches where risk emerges naturally

**Correct Answer: C**

**Explanation:**
Option C identifies the core issue: the organization is going through the motions of risk management but not extracting learning from experience.

- **Why A is wrong**: This pattern suggests a missed opportunity for learning, not successful risk management. Good risk management should improve over time as you learn what risks actually occur and why.
- **Why B is wrong**: More detailed registers won't solve the problem if you're not analyzing why your previous predictions were inaccurate. Detail without learning is just more paperwork.
- **Why C is correct**: The pattern indicates:
  - Risks are recurring but not being addressed at the root cause level
  - Your identification and response strategies aren't improving
  - Lessons aren't transferring between projects

  **The solution**: Invest in root cause analysis and organizational learning:
  - After projects complete, analyze: "Which risks actually occurred? Which didn't? Why?"
  - For risks that didn't occur: Did your mitigation work, or was your probability estimate wrong?
  - For risks that occurred differently: What did you miss? What changed?
  - For recurring risks: What's the underlying cause? How can we address it?
  - Capture lessons; make them available to new projects
  - Update risk checklists and identification processes based on learning

- **Why D is wrong**: Agile projects also need to manage risk; they just do it differently. The issue isn't the approach (predictive vs. agile); it's lack of learning.

**Building a learning organization**:

1. **Create feedback loops**: Lessons learned reviews at project end; capture what you learned about risks
2. **Make learning visible**: Share lessons in communities of practice, on intranet, in project manager forums
3. **Update processes**: If a risk recurs, change how you identify or respond to it
4. **Update checklists**: If you discover new risk categories or patterns, add them to your risk checklist
5. **Track trends**: Are risks decreasing in frequency? Are response strategies improving in effectiveness?
6. **Celebrate learning**: When a project team surfaces a pattern or develops a better response strategy, recognize it

**Key concept**: Risk management matures over time through continuous learning. Don't just manage risks on each project; learn from them and improve your risk management practices continuously.

---

## Reflection and Application

As you review these questions, reflect on:

1. **Which scenarios felt familiar?** Which reflect challenges you've actually faced?

2. **Which concepts challenged your thinking?** Which prompted you to reconsider your approach to risk management?

3. **Application to your work**: Pick one concept from this chapter and think about how you'd apply it to a project you're involved in or planning.

4. **Organizational readiness**: What's your organization's risk management maturity? Where could you improve?

---

*← [Back to Chapter 12](./12%20–%20Risk,%20Issues,%20and%20Change%20Management.md#table-of-contents) • [12e – Change Management](./12e%20–%20Change%20Management.md)*
