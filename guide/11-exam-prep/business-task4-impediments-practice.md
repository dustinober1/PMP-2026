<script setup>
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# PMP Practice Exam: Business Task 4 (Remove Impediments and Manage Issues)

**Domain**: Business Environment (ECO Task 4) / People (ECO Task 7) / Process (ECO Task 12)  
*Note: While labeled "Business Task 4" in some 2026 drafts, this content heavily overlaps with Process (Managing Issues) and People (Removing Blockers).*

**Focus Areas**:
1. Evaluate the impact of impediments.
2. Prioritize and highlight impediments.
3. Determine and apply an intervention strategy to remove/minimize impediments.
4. Reassess continually to help ensure impediments, obstacles, and blockers for the team are being addressed.
5. Recognize when a risk becomes an issue.
6. Collaborate with relevant stakeholders on an approach to resolve the issues.

---

### Question 1

<strong>Enabler:</strong> 5. Recognize when a risk becomes an issue | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
You are managing a construction project with a strict deadline. During planning, you identified a risk that 'inclement weather could delay the foundation pour by 3 days,' and you established a contingency reserve of $5,000 for heaters. Today, the site foreman calls to report that a massive storm has flooded the site, making work impossible for at least a week. This event was unforeseen in severity and exceeds the parameters of the identified risk.

<strong>Question:</strong>
What is the **FIRST** action the project manager should take?

- <strong>Correct:</strong> Log the event in the Issue Log and assess the impact on the critical path.
- <strong>Distractor 1:</strong> Execute the risk response plan by releasing the $5,000 contingency reserve.
- <strong>Distractor 2:</strong> Submit a change request to the Change Control Board (CCB) for a schedule extension.
- <strong>Distractor 3:</strong> update the Risk Register to reflect the higher probability of weather delays.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The event has occurred, so it is no longer a risk; it is an issue. Since the severity exceeds the identified risk (flooding vs. 3-day delay), the planned response (heaters) is insufficient. The first step is to document the reality (Issue Log) and analyze the impact before taking action or requesting changes. |
| **PMI Mindset** | When a risk occurs or a new issue arises, first acknowledge and analyze (Input), then act (Process). Do not blindly apply a plan that doesn't fit the reality. |
| **The Trap** | **Distractor 1** is tempting because there was a risk plan, but the scenario states the event 'exceeds the parameters,' meaning the heaters won't fix a flood. **Distractor 2** is a valid later step but premature before analysis. |
| **Source Link** | `guide/08-execution/executing-work.md` (Risk vs. Issue vs. Change) |

</details>

---

### Question 2

<strong>Enabler:</strong> 1. Evaluate the impact of impediments | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
During the Daily Scrum, a developer reports that they cannot proceed with the payment gateway integration because the third-party API documentation is password-protected and they do not have credentials. The Scrum Master notes this is the first time this blocker has been raised.

<strong>Question:</strong>
What is the **MOST EFFECTIVE** immediate action for the Scrum Master?

- <strong>Correct:</strong> Facilitate resolution by contacting the vendor or product owner immediately after the standup to obtain access.
- <strong>Distractor 1:</strong> Direct the developer to work on the next highest priority item in the Sprint Backlog until access is granted.
- <strong>Distractor 2:</strong> Document the impediment in the Impediment Log and review it during the Sprint Retrospective.
- <strong>Distractor 3:</strong> Assign another team member who might have access to pair with the blocked developer.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The Scrum Master's primary role is to remove impediments. For a concrete, binary blocker like 'missing password,' the immediate action is to unblock the team member so flow can continue. Switching tasks is a secondary option only if the blocker cannot be resolved quickly. |
| **PMI Mindset** | Servant Leadership: Do not just log problems; solve them active and quickly. "Stop and fix" is better than "work around." |
| **The Trap** | **Distractor 1** helps utilization but ignores the flow of the committed item. **Distractor 2** is too passive handling; the sprint will fail if we wait for the Retro. |
| **Source Link** | `guide/08-execution/toolkit.md` (Impediment Triage) |

</details>

---

### Question 3

<strong>Enabler:</strong> 5. Recognize when a risk becomes an issue | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
You are leading a hybrid project where the hardware team uses predictive methods and the software team uses Scrum. A risk was identified that the hardware prototype might not fit the software chassis specs. During a hardware-software integration test, the prototype fails to fit, causing a physical obstruction.

<strong>Question:</strong>
What is the **BEST** course of action for the Project Manager?

- <strong>Correct:</strong> Record the failure in the Issue Log and facilitate a joint problem-solving session with both teams.
- <strong>Distractor 1:</strong> Update the Risk Register to mark the risk as 'Occurred' and deduct from the contingency reserve.
- <strong>Distractor 2:</strong> Direct the software team to refactor the code to accommodate the hardware constraint.
- <strong>Distractor 3:</strong> Escalate the design failure to the project sponsor for a decision on which team is at fault.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The risk has materialized into an issue. The PM needs to document it (Issue Log) and then bring the relevant technical experts together (Collaboration) to find a solution. Updating the Risk Register is administrative; solving the problem is leadership. |
| **PMI Mindset** | Issues require collaborative solutioning, especially in hybrid environments where 'us vs. them' friction can occur. Document first, then solve. |
| **The Trap** | **Distractor 1** is administrative but doesn't resolve the physical problem. **Distractor 2** dictates a technical solution without analysis. |
| **Source Link** | `guide/08-execution/executing-work.md` (Risk-to-Issue Conversion Process) |

</details>

---

### Question 4

<strong>Enabler:</strong> 2. Prioritize and highlight impediments | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is reviewing the Issue Log for a global rollout. There are three open issues: (1) A critical regulatory approval is delayed by 2 weeks (Critical Path), (2) The user training manual has formatting erors (Float: 4 weeks), and (3) A stakeholder is complaining about the color scheme (Float: 6 weeks). Resources are limited.

<strong>Question:</strong>
Which action demonstrates the **MOST** appropriate prioritization?

- <strong>Correct:</strong> Focus all available effort on the regulatory approval delay and deprioritize the manual and color scheme.
- <strong>Distractor 1:</strong> Assign equal resources to all three issues to ensure steady progress across the project.
- <strong>Distractor 2:</strong> Address the manual formatting first as it is the easiest task to complete quickly ('quick win').
- <strong>Distractor 3:</strong> Escalate the stakeholder complaint to the sponsor to maintain good relationships.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Issues affecting the Critical Path must always be prioritized over issues with Float. The regulatory delay threatens the project finish date. The others can wait. |
| **PMI Mindset** | Protect the Critical Path. Prioritize based on impact to project success constraints (Schedule/Scope/Quality), not just ease of resolution. |
| **The Trap** | **Distractor 2** (Quick Win) is a common productivity hack but dangerous in project management if it ignores the critical path. |
| **Source Link** | `guide/08-execution/executing-work.md` (Common Execution Challenges) |

</details>

---

### Question 5

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
A high-performing agile team is midway through a sprint when the organization mandates a mandatory rigorous compliance audit for all employees, requiring 3 days of unexpected effort this week. This effectively halts development work.

<strong>Question:</strong>
What should the Project Manager (acting as Scrum Master) do?

- <strong>Correct:</strong> Buffer the team by negotiating with management to postpone the audit or adjusting the Sprint Goal/backlog.
- <strong>Distractor 1:</strong> Instruct the team to work overtime / weekends to meet both the audit requirements and the Sprint commitment.
- <strong>Distractor 2:</strong> Cancel the Sprint immediately and start a new Sprint Planning session.
- <strong>Distractor 3:</strong> Ask the team to do the audit and simply carry over incomplete stories to the next sprint without discussion.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | This is a massive organizational impediment. The SM should first try to remove it (negotiate postpone). If that fails, transparency is key: adjust expectations (scope) rather than forcing sustainable pace violations (overtime). |
| **PMI Mindset** | Servant leaders protect the team from external distractions and uphold sustainable pace. |
| **The Trap** | **Distractor 2** (Cancel Sprint) is a 'nuclear option' reserved for when the Sprint Goal becomes obsolete, not just when capacity creates a pinch. |
| **Source Link** | `guide/08-execution/toolkit.md` (Servant Leadership Checklist) |

</details>

---

### Question 6

<strong>Enabler:</strong> 6. Collaborate to resolve issues | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A technical issue has arisen that halts the manufacturing line. The engineering lead claims it is a software bug, while the software lead insists it is a hardware sensor failure. They are arguing in the hallway, and the schedule is slipping by the hour.

<strong>Question:</strong>
What is the **BEST** initial intervention for the Project Manager?

- <strong>Correct:</strong> Bring both leads into a room, facilitate a review of the data/logs, and guide them to a root cause analysis.
- <strong>Distractor 1:</strong> Issue a formal directive to the engineering lead to replace the sensor to see if that fixes it.
- <strong>Distractor 2:</strong> Log the conflict in the Issue Log and ask the Sponsor to make a technical decision.
- <strong>Distractor 3:</strong> Separate the two leads and ask them to submit written reports justifying their positions.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The conflict is substantive (technical). The PM needs to move them from 'positions' (your fault) to 'problems' (what does the data say?). Facilitated collaboration is the path to resolution. |
| **PMI Mindset** | Confronting/Problem Solving is the preferred conflict resolution technique. Use data, not authority, to break deadlocks. |
| **The Trap** | **Distractor 1** (Forcing) might be fast but guesses at the solution. **Distractor 3** (Withdrawal/Separation) prolongs the delay. |
| **Source Link** | `guide/03-team-leadership/conflict-management.md` (Collaboration Agenda) |

</details>

---

### Question 7

<strong>Enabler:</strong> 4. Reassess continually | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project is delivering a new mobile app (Agile) and a marketing launch campaign (Predictive). The marketing team has complained repeatedly that they don't know what features will be in the final release, making it impossible to print brochures. This issue has been 'Open' in the Issue Log for 2 months.

<strong>Question:</strong>
What is the **MOST** appropriate action to resolve this systemic impediment?

- <strong>Correct:</strong> Establish a recurring synchronization meeting where the Product Owner walks the marketing team through the roadmap and high-confidence backlog items.
- <strong>Distractor 1:</strong> Require the Agile team to freeze the scope 3 months in advance to support the printing schedule.
- <strong>Distractor 2:</strong> Tell the marketing team to switch to digital-only marketing to accommodate the agile changes.
- <strong>Distractor 3:</strong> Close the issue in the log as 'Accepted Risk' since agile scope is inherently variable.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The impediment is a lack of information flow between the two tracks. The solution is to create a bridge (cadence/process) that accounts for both needs: Marketing gets probability-based forecasts, Agile keeps flexibility. |
| **PMI Mindset** | In Hybrid, the PM acts as the bridge. ignoring the issue or forcing one method to break the other (Distractor 1 or 2) is poor integration. |
| **The Trap** | **Distractor 1** destroys agility. **Distractor 2** dictates business strategy, which is outside the PM's authority. |
| **Source Link** | `guide/08-execution/executing-work.md` (Hybrid Work Execution Flow) |

</details>

---

### Question 8

<strong>Enabler:</strong> 1. Evaluate impact | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The Product Owner has been missing from the last three Sprint Reviews and has not provided feedback on the increment. The team is frustrated and unsure if they are building the right thing.

<strong>Question:</strong>
What is the **PRIMARY** risk this impediment creates?

- <strong>Correct:</strong> The team may be building a product that does not deliver business value, resulting in waste.
- <strong>Distractor 1:</strong> The team's velocity numbers will be inaccurate in the reporting dashboard.
- <strong>Distractor 2:</strong> The project will fail the schedule baseline compliance check.
- <strong>Distractor 3:</strong> The Scrum Master will have to take over the role of key stakeholder.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The PO's role is Value Maximizer. Without feedback, the 'inspect and adapt' loop is broken. The biggest impact is 'building the wrong thing' (effectiveness), not velocity (efficiency). |
| **PMI Mindset** | Value Delivery > adherence to process. A missing PO strikes at the heart of agile value delivery. |
| **The Trap** | **Distractor 1** focuses on metrics. metrics don't matter if the product is useless. |
| **Source Link** | `guide/08-execution/executing-work.md` (Agile Ceremonies - Sprint Review) |

</details>

---

### Question 9

<strong>Enabler:</strong> 5. Risk became issue | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A key supplier for a satellite component sends a formal notice of Force Majeure due to a political uprising, stating they cannot deliver the component indefinitely. This risk was not on the Risk Register.

<strong>Question:</strong>
What is the **FIRST** step the Project Manager should take?

- <strong>Correct:</strong> Log the issue, analyze the impact on the project objectives, and evaluate alternative suppliers or workarounds.
- <strong>Distractor 1:</strong> Immediately terminate the contract and sue for damages for breach of contract.
- <strong>Distractor 2:</strong> Halt all project work until the political situation resolves.
- <strong>Distractor 3:</strong> Update the risk management plan to include political instability as a category.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Even though it wasn't a risk, it is now a major Issue. The PM must define the problem (Log) and understand the damage (Analyze) before making a move. finding an alternative (Workaround) is a likely next step. |
| **PMI Mindset** | Don't panic. Process the issue: Data -> Information -> Decision. |
| **The Trap** | **Distractor 1** is a legal response, not a project management response, and might be premature. **Distractor 3** is backward-looking (updating the plan) rather than fixing the current crisis. |
| **Source Link** | `guide/08-execution/toolkit.md` (Impediment Escalation Decision Tree) |

</details>

---

### Question 10

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The team complains that the enterprise CI/CD pipeline is slow, causing builds to take 4 hours. This delay means they can only run one test cycle per day. This impediment is outside the team's control.

<strong>Question:</strong>
What is the **MOST** effective intervention?

- <strong>Correct:</strong> The Scrum Master should escalate this as an organizational impediment to the engineering leadership or DevOps team for resolution.
- <strong>Distractor 1:</strong> The team should switch to manual testing to bypass the slow pipeline.
- <strong>Distractor 2:</strong> The Product Owner should purchase new servers for the team using the project budget.
- <strong>Distractor 3:</strong> The team should increase the story point estimates for all future stories to account for the wait time.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | When an impediment is systemic (organizational/tooling) and the team cannot fix it, the SM MUST escalate it. Padding estimates (Distractor 3) hides the waste. Bypassing automation (Distractor 1) hurts quality. |
| **PMI Mindset** | Make impediments visible and escalate them if they are beyond the team's authority. Do not optimize for local efficiency at the cost of global quality. |
| **The Trap** | **Distractor 3** (padding) is a common coping mechanism, but it accepts the inefficiency rather than removing it. |
| **Source Link** | `guide/08-execution/toolkit.md` (Impediment Escalation) |

</details>

---

### Question 11

<strong>Enabler:</strong> 2. Prioritize impediments | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
User Acceptance Testing (UAT) has generated 50 defect reports. The project is scheduled to go live in 5 days. The development team can only fix about 10 defects in that time.

<strong>Question:</strong>
How should the Project Manager proceed?

- <strong>Correct:</strong> Facilitate a triage meeting with the Sponsor and Key Stakeholders to prioritize the defects based on business severity and agree on a 'Must-Fix' list.
- <strong>Distractor 1:</strong> Instruct the team to fix the 10 easiest defects to maximize the number of closed tickets.
- <strong>Distractor 2:</strong> Automatically delay the go-live date by 2 weeks to ensure zero defects.
- <strong>Distractor 3:</strong> Ask the team to work 16-hour days to fix all 50 defects before the deadline.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | You have a resource constraint (5 days, 10 fixes). The scope (50 defects) must be prioritized. The stakeholders must decide which 10 are critical for launch (Must-Haves). |
| **PMI Mindset** | Constraints require trade-offs. The PM facilitates the decision, ensuring the most valuable/critical items are addressed. |
| **The Trap** | **Distractor 2** assumes schedule is flexible (it might not be). **Distractor 3** violates health/safety and sustainability. |
| **Source Link** | `guide/08-execution/toolkit.md` (Change Request Triage) |

</details>

---

### Question 12

<strong>Enabler:</strong> 5. Risk to Issue (Safety) | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
While touring the construction site, the Project Manager notices a worker operating heavy machinery without the required safety gear. This is a direct violation of the safety management plan.

<strong>Question:</strong>
What is the **IMMEDIATE** action?

- <strong>Correct:</strong> Stop the work immediately and correct the safety violation.
- <strong>Distractor 1:</strong> Log the issue in the Issue Log and discuss it at the next weekly safety meeting.
- <strong>Distractor 2:</strong> Report the worker to their functional manager for disciplinary action.
- <strong>Distractor 3:</strong> Check the Risk Register to see if 'Safety Violation' was a known risk.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Safety overrides all other constraints. When a safety breach is observed, the intervention must be immediate (Direct/Force). Documentation happens *after* safety is restored. |
| **PMI Mindset** | Safety First. Directing/Forcing is the correct conflict mode for safety emergencies. |
| **The Trap** | **Distractor 1** (Logging) is too slow; someone could get hurt while you type. |
| **Source Link** | `guide/03-team-leadership/conflict-management.md` (Conflict Mode Selection - Force) |

</details>

---

### Question 13

<strong>Enabler:</strong> 6. Collaborate | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
Two senior developers have a different opinion on the architecture for a new feature. They have been debating for 2 days, and no code has been written. The sprint goal is at risk.

<strong>Question:</strong>
What is the **BEST** way for the Scrum Master to resolve this?

- <strong>Correct:</strong> Facilitate a time-boxed 'spike' or experiment where they test both approaches and agree to follow the data.
- <strong>Distractor 1:</strong> Choose the architecture proposed by the developer with the most tenure.
- <strong>Distractor 2:</strong> Tell them to compromise and blend the two architectures together.
- <strong>Distractor 3:</strong> Ask the Product Owner to decide which architecture is better.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The debate is theoretical. The agile way to resolve it is empirical (try it). A time-boxed spike limits the waste and provides data for a decision. |
| **PMI Mindset** | Move from subjective debate to objective data. Facilitate the process, don't dictate the answer. |
| **The Trap** | **Distractor 3** is wrong because the PO focuses on 'What' (Value), not 'How' (Architecture). The team owns the 'How'. |
| **Source Link** | `guide/03-team-leadership/conflict-management.md` (Collaborate / Problem Solve) |

</details>

---

### Question 14

<strong>Enabler:</strong> 4. Reassess impediments | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
Your project uses a vendor to supply data. The vendor has missed the last three delivery milestones. Each time, you logged an issue, they apologized, and you updated the schedule. They have just missed the fourth milestone.

<strong>Question:</strong>
What does this pattern indicate, and what should you do?

- <strong>Correct:</strong> The previous issue management actions were ineffective; you must escalate to checking the contract for default/termination clauses or alternative dispute resolution.
- <strong>Distractor 1:</strong> Continue to log the issue and update the schedule as you have done previously.
- <strong>Distractor 2:</strong> Accept the delay as a constraint and reduce the project scope to match the vendor's pace.
- <strong>Distractor 3:</strong> Micromanage the vendor by calling them every hour until the data is delivered.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | 'Reassess' means recognizing when an intervention isn't working. Doing the same thing (logging/rescheduling) 4 times is failure. It is time to escalate to formal (contractual) remedies. |
| **PMI Mindset** | Insanity is doing the same thing and expecting different results. PMs must escalate ineffective responses. |
| **The Trap** | **Distractor 1** is passive. **Distractor 3** is unprofessional and likely ineffective. |
| **Source Link** | `guide/08-execution/toolkit.md` (Escalation Decision Tree) |

</details>

---

### Question 15

<strong>Enabler:</strong> 5. Risk to Issue | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
You are managing a software rollout. A risk was identified that "users may resist the new interface." You planned to provide training webinars. Upon launch, user feedback is extremely negative, and 40% of users are refusing to log in. The webinars were poorly attended.

<strong>Question:</strong>
What is the **BEST** next step?

- <strong>Correct:</strong> Acknowledge the issue, analyze the root cause of the resistance (e.g., poor UI vs. lack of training), and collaborate with stakeholders on a new adoption strategy.
- <strong>Distractor 1:</strong> Force the users to log in by disabling the old system immediately.
- <strong>Distractor 2:</strong> Resend the webinar invitations and insist that users attend.
- <strong>Distractor 3:</strong> Roll back the entire project and cancel the release.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The risk (resistance) occurred, and the plan (webinars) failed. You have a major issue. You must analyze *why* before acting. Forcing (Distractor 1) creates more resistance. Retrying the failed plan (Distractor 2) is futile. |
| **PMI Mindset** | Change Management requires active engagement and listening. When adoption fails, investigate and pivot. |
| **The Trap** | **Distractor 1** is a 'Hard' cutover tactic that often leads to revolt or business stoppage. |
| **Source Link** | `guide/08-execution/toolkit.md` (Stakeholder Engagement Assessment) |

</details>

---

### Question 16

<strong>Enabler:</strong> 1. Evaluate impact | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
During a Retrospective, the team identifies that the Product Owner is constantly changing the acceptance criteria for user stories *while* they are in progress. This causes rework and frustration.

<strong>Question:</strong>
How should the Scrum Master categorize and handle this?

- <strong>Correct:</strong> This is a process impediment (Scope Creep/instability); the Scrum Master should coach the Product Owner on the importance of locking scope within the Sprint.
- <strong>Distractor 1:</strong> This is a technical issue; the team should build more flexible code to handle the changes.
- <strong>Distractor 2:</strong> This is a team conflict; the team should just refuse to talk to the Product Owner during the sprint.
- <strong>Distractor 3:</strong> This is acceptable agile practice; the team should embrace change even late in development.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | While Agile welcomes change, it usually does so *between* sprints or by swapping items. Changing criteria *during* active work on a story invalidates the estimate and breaks flow. It is a behavior impeding the team. |
| **PMI Mindset** | The Scrum Master protects the team from chaos. Sprints provide stability. Coaching the PO is the intervention. |
| **The Trap** | **Distractor 3** misinterprets 'Welcome change.' We welcome change to the *backlog*, but we need stability to *execute* the work in the sprint. |
| **Source Link** | `guide/08-execution/executing-work.md` (Scrum Anti-Patterns) |

</details>

---

### Question 17

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project's budget has been cut by 15% due to a company-wide financial crisis. The project is 50% complete.

<strong>Question:</strong>
What is the **LEAST** effective way to handle this impediment?

- <strong>Correct:</strong> Cut quality assurance and testing activities to save money while maintaining the full scope.
- <strong>Distractor 1:</strong> Re-estimate the remaining work and identify low-value scope to de-scope.
- <strong>Distractor 2:</strong> Negotiate for a lower grade of materials where acceptable.
- <strong>Distractor 3:</strong> Reduce the project staff and extend the schedule (crash/fast-tracking reversal).

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The Triple Constraint says if Cost is cut, you must adjust Scope, Schedule, or Quality. However, PMI Ethics mandates that you **never compromise quality** invisibly or below standards. Reducing scope (D1) or Schedule (D3) are valid trade-offs. Cutting QA leads to technical debt and failure. |
| **PMI Mindset** | Quality is not a variable to be traded off lightly. Iron Triangle: Cost down -> Scope down OR Time up. |
| **The Trap** | **Correct Answer** is the 'Negative' one (Least Effective). Cutting QA is the trap most bad PMs fall into. |
| **Source Link** | `guide/08-execution/toolkit.md` (Quality Tools) |

</details>


---

### Question 18

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project sponsor repeatedly calls team members directly to ask for 'small tweaks' to the product design. Two team members have implemented these changes without logging them, causing a variance in the cost baseline.

<strong>Question:</strong>
What intervention is required?

- <strong>Correct:</strong> Meet with the sponsor to reinforce the formal Change Control workflow and explain the impact of unchecked scope creep.
- <strong>Distractor 1:</strong> Direct the team to implement all future requests from the sponsor immediately to keep them happy.
- <strong>Distractor 2:</strong> Remove the team members from the project for violating the process.
- <strong>Distractor 3:</strong> Adjust the cost baseline to absorb the variance and hide the issue.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The root cause is the Sponsor bypassing the process. The PM must intervene at the stakeholder level (manage expectations) and the team level (enforce process). |
| **PMI Mindset** | Protect the team and the baseline. 'Gold plating' or uncontrolled changes destroy project value. Educate stakeholders rather than blindly obeying. |
| **The Trap** | **Distractor 2** blames the team, but the power dynamic makes it hard for them to say no. The PM must handle the Sponsor. |
| **Source Link** | `guide/08-execution/toolkit.md` (Common Execution Challenges - Scope Creep) |

</details>

---

### Question 19

<strong>Enabler:</strong> 4. Reassess impediments | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
For the third sprint in a row, the team has failed to deliver the committed Sprint Goal. In the Retrospective, they blame 'too many interruptions.' You previously tried establishing 'core hours,' but the data shows interruptions haven't decreased.

<strong>Question:</strong>
What is the **NEXT** step?

- <strong>Correct:</strong> Reassess the root cause of the interruptions and escalate if they are external/organizational (e.g., support tickets, tap-on-the-shoulder requests).
- <strong>Distractor 1:</strong> Extend the sprint length to 3 weeks to give them more time.
- <strong>Distractor 2:</strong> Reduce the team's capacity by 50% for the next sprint planning to absorb the interruptions.
- <strong>Distractor 3:</strong> Tell the team they must work harder to honor their commitments.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The first intervention (core hours) failed. Reassessment is needed. Dealing with the symptom (capacity, D2) is okay, but removing the root cause (escalating external interruptions) is better. |
| **PMI Mindset** | If an impediment persists, changing the solution is required. Chronic failure to meet goals indicates a systemic issue, not a 'laziness' issue. |
| **The Trap** | **Distractor 1** (Extend Sprint) masks the problem and delays feedback. |
| **Source Link** | `guide/08-execution/executing-work.md` (Sprint Planning - Anti-Patterns) |

</details>

---

### Question 20

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
In a hybrid project, the Agile team uses Jira and the Predictive PMO uses MS Project. The PMO claims they have no visibility into the Agile team's progress and sends a weekly email asking for a manual status spreadsheet. The Agile team finds this duplicative and burdensome.

<strong>Question:</strong>
What is the **BEST** solution?

- <strong>Correct:</strong> Collaborate with the PMO to automate the data transfer or create a dashboard that pulls from Jira, eliminating the manual reporting work.
- <strong>Distractor 1:</strong> Tell the Agile team to just fill out the spreadsheet as it is a governance requirement.
- <strong>Distractor 2:</strong> Tell the PMO to log into Jira and figure it out themselves.
- <strong>Distractor 3:</strong> Migrate the Agile team to MS Project so everyone uses one tool.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The impediment is 'manual double reporting.' The intervention is to automate or integrate the tools (Information Radiator). |
| **PMI Mindset** | Don't force tool changes (D3) that hurt the team's workflow. Don't burden the team with admin work (D1). Automate visibility. |
| **The Trap** | **Distractor 2** is confrontational and ignores the stakeholder's need for information in a format they understand. |
| **Source Link** | `guide/08-execution/toolkit.md` (Work Performance Data -> Reports) |

</details>

---

### Question 21

<strong>Enabler:</strong> 4. Reassess impediments | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
The Quality Assurance team is rejecting 40% of the components delivered by the manufacturing team. You held a root cause workshop last month and implemented a checklist, but the rejection rate has not changed.

<strong>Question:</strong>
What should the Project Manager do?

- <strong>Correct:</strong> Acknowledge the checklist failed, halt the process, and perform a deeper process analysis (e.g., audit or inspection) to find the true root cause.
- <strong>Distractor 1:</strong> Fire the manufacturing lead for failing to improve quality.
- <strong>Distractor 2:</strong> Lower the quality acceptance criteria to allow more components to pass.
- <strong>Distractor 3:</strong> Add more inspections at the end of the line to catch defects.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The intervention (checklist) didn't work. You must reassess. 'More inspections' (D3) is detection, not prevention. You need to fix the process. |
| **PMI Mindset** | Quality is planned in, not inspected in. If a fix fails, dig deeper. Never lower standards (D2). |
| **The Trap** | **Distractor 3** adds cost (Cost of Quality) without fixing the problem. |
| **Source Link** | `guide/08-execution/toolkit.md` (Quality Tools) |

</details>

---

### Question 22

<strong>Enabler:</strong> 1. Evaluate impact (Burnout) | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The team velocity has increased for 4 sprints in a row, but team morale scores are dropping. During the standup, two developers snap at each other. You notice the team is working late every night.

<strong>Question:</strong>
What is the **Primary** impediment here?

- <strong>Correct:</strong> Unsustainable pace leading to burnout and relationship conflict.
- <strong>Distractor 1:</strong> Personality conflict between the two developers.
- <strong>Distractor 2:</strong> Lack of technical skill requiring extra hours to complete work.
- <strong>Distractor 3:</strong> A velocity that is too low and needs to be improved.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | High velocity + Low morale + High hours = Burnout. This is a classic violation of "Sustainable Pace." The conflict is a symptom, not the root cause. |
| **PMI Mindset** | People > Process. Burning out the team to hit high velocity is a failure of leadership. |
| **The Trap** | **Distractor 1** focuses on the symptom (fighting) rather than the disease (overwork). |
| **Source Link** | `guide/03-team-leadership/conflict-management.md` (Personality Trap) |

</details>

---

### Question 23

<strong>Enabler:</strong> 6. Collaborate | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
The Legal team (predictive) refuses to approve the release of a new feature built by the Agile team because "requirements were not documented in the standard template." The Agile team argues that the user stories and tests in the tool are sufficient documentation.

<strong>Question:</strong>
How should the PM resolve this deadlock?

- <strong>Correct:</strong> Facilitate a negotiation between Legal and the Agile team to agree on a "Minimum Viable Compliance" that satisfies legal needs without halting agile delivery.
- <strong>Distractor 1:</strong> Force the Agile team to complete the standard 50-page requirement template retroactively.
- <strong>Distractor 2:</strong> Tell Legal they must accept the user stories because the project is Agile.
- <strong>Distractor 3:</strong> Cancel the feature to avoid legal risk.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Both sides have valid needs (Compliance vs. Efficiency). The solution is a 'Collaborate/Compromise' approach—finding a middle ground format. |
| **PMI Mindset** | Tailoring is key. The PM bridges the gap between governance and execution. |
| **The Trap** | **Distractor 2** is arrogant and ignores organizational requirements. **Distractor 1** is waste. |
| **Source Link** | `guide/03-team-leadership/conflict-management.md` (Integrative Negotiation) |

</details>

---

### Question 24

<strong>Enabler:</strong> 5. Risk to Issue | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A critical vendor files for bankruptcy on Monday morning (Unplanned Issue). This halts the delivery of steel for the construction project.

<strong>Question:</strong>
What is the **FIRST** step in the response?

- <strong>Correct:</strong> Log the issue and immediately review the contract and procurement management plan for bankruptcy contingencies.
- <strong>Distractor 1:</strong> Immediately hire the second-lowest bidder from the original procurement phase.
- <strong>Distractor 2:</strong> Sue the vendor for liquid damages.
- <strong>Distractor 3:</strong> Instruct the team to stop all work and go home until further notice.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | When a vendor fails, the Contract is the first document to check (rights, IP, transition). Jumping to a new vendor (D1) might violate the old contract or procurement rules. Log -> Analyze (Review Docs) -> Act. |
| **PMI Mindset** | Procurement issues are legal issues. Read the contract first. |
| **The Trap** | **Distractor 1** is a 'Do' action that skips the 'Check' step. |
| **Source Link** | `guide/08-execution/toolkit.md` (Vendor Management Checklist) |

</details>

---

### Question 25

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The team keeps pulling User Stories into the sprint that lack clear acceptance criteria. As a result, they get stuck mid-sprint and fail to finish.

<strong>Question:</strong>
What is the **MOST** effective structural intervention?

- <strong>Correct:</strong> Enforce a "Definition of Ready" policy where stories cannot be pulled into a sprint unless they meet specific clarity criteria.
- <strong>Distractor 1:</strong> Criticize the Product Owner during the Standup for writing bad stories.
- <strong>Distractor 2:</strong> Allow the team to write the acceptance criteria themselves during the sprint.
- <strong>Distractor 3:</strong> Extend the Sprint Planning meeting to 8 hours to allow time to write criteria.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The impediment is "Garbage In, Halted Flow." The fix is a gate: Definition of Ready. It prevents vague work from entering the sprint. |
| **PMI Mindset** | Process discipline enables agility. DoR protects the team from ambiguity. |
| **The Trap** | **Distractor 2** is risky; if the team writes critera without the PO, they might build the wrong thing. |
| **Source Link** | `guide/08-execution/executing-work.md` (Sprint Planning - Anti-Patterns) |

</details>

---

### Question 26

<strong>Enabler:</strong> 6. Collaborate | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A key stakeholder is required to approve the design documents by Friday to keep the schedule. They have not responded to 3 emails. It is Thursday morning.

<strong>Question:</strong>
What is the **BEST** communication approach?

- <strong>Correct:</strong> Switch communication channels: Pick up the phone or visit their office to convey urgency and resolve any blockers personally.
- <strong>Distractor 1:</strong> Send a fourth email marked "High Importance" and copy their boss.
- <strong>Distractor 2:</strong> Wait until Friday at 5 PM, then log an issue that the deadline was missed.
- <strong>Distractor 3:</strong> Proceed with the design without approval and hope they agree later.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Emails (Push communication) are failing. You need Interactive communication (Phone/Face-to-Face) to resolve the impasse. |
| **PMI Mindset** | If one channel fails, try another. Be proactive, not passive-aggressive (logging the failure later). |
| **The Trap** | **Distractor 3** is extremely risky (rework). **Distractor 1** is likely to annoy without getting results. |
| **Source Link** | `guide/08-execution/toolkit.md` (Escalation Message / Communication Methods) |

</details>

---

### Question 27

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
The software team needs a test environment to validate their code. The infrastructure team (predictive) says the environment won't be ready for 6 weeks. The software team is blocked *now*.

<strong>Question:</strong>
What is a creative intervention strategy?

- <strong>Correct:</strong> Investigate checking out a cloud-based temporary environment (virtualization) to unblock the team while waiting for the physical infrastructure.
- <strong>Distractor 1:</strong> Tell the software team to write code without testing it for 6 weeks.
- <strong>Distractor 2:</strong> Demand the infrastructure team work weekends to finish in 3 weeks.
- <strong>Distractor 3:</strong> Pause the software project for 6 weeks.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | A blocker requires a workaround. Modern tech (cloud/virtual) often provides alternatives to physical impediments. |
| **PMI Mindset** | Problem Solving. Don't accept the 'No.' Find a 'How.' |
| **The Trap** | **Distractor 1** creates massive technical debt. **Distractor 3** is Project Management failure. |
| **Source Link** | `guide/08-execution/toolkit.md` (Impediment Decision Tree) |

</details>

---

### Question 28

<strong>Enabler:</strong> 1. Evaluate impact | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The Scrum Master is observed assigning tasks to developers during the Daily Standup to ensure everyone stays busy.

<strong>Question:</strong>
Why is this an impediment to agile performance?

- <strong>Correct:</strong> It violates the principle of self-organization and prevents the team from taking ownership of their work.
- <strong>Distractor 1:</strong> It makes the standup take longer than 15 minutes.
- <strong>Distractor 2:</strong> It relieves the burden on the team, which is actually helpful.
- <strong>Distractor 3:</strong> It confuses the role of the Product Owner.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The SM is a Servant Leader, not a Command-and-Control manager. Assigning tasks destroys the team's ability to self-manage and creates a bottleneck. |
| **PMI Mindset** | Empower the team. Trust them to pull work. |
| **The Trap** | **Distractor 2** sounds nice but cripples the team's growth (learned helplessness). |
| **Source Link** | `guide/08-execution/executing-work.md` (Daily Scrum Anti-Patterns) |

</details>

---

### Question 29

<strong>Enabler:</strong> 4. Reassess impediments | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
The Change Control Board (CCB) meets only once a month. The project is generating 5-6 necessary change requests per week, leading to a massive backlog and work stoppages while waiting for approval.

<strong>Question:</strong>
What should the Project Manager propose?

- <strong>Correct:</strong> Propose a tiered governance model where low-impact changes can be approved by the PM/Sponsor, while only high-impact changes go to the monthly CCB.
- <strong>Distractor 1:</strong> Ask the team to implement changes without approval and document them later.
- <strong>Distractor 2:</strong> Stop submitting change requests and handle everything as 'maintenance.'
- <strong>Distractor 3:</strong> Request the CCB meets every single day.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The governance process itself is the impediment (too slow). The solution is to tailor the governance (tiers/delegation) to match the project's velocity. |
| **PMI Mindset** | Tailor the process to the project. Governance should enable work, not block it. |
| **The Trap** | **Distractor 3** is likely unrealistic for executives. **Distractor 1** is a compliance violation. |
| **Source Link** | `guide/08-execution/toolkit.md` (Change Request Triage) |

</details>

---

### Question 30

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The team's Kanban board is cluttered. There are 50 items in "In Progress" for a team of 5 people. Cycle time is increasing.

<strong>Question:</strong>
What intervention should the PM/Agile Coach apply?

- <strong>Correct:</strong> Work with the team to establish and enforce WIP (Work In Progress) Limits to force finishing before starting.
- <strong>Distractor 1:</strong> Add more columns to the board to spread the cards out.
- <strong>Distractor 2:</strong> Hire more people to work on the 50 items.
- <strong>Distractor 3:</strong> Remove the "In Progress" column and just have To Do and Done.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | High WIP = Context Switching = Slow Delivery. The specific agile tool for this is WIP Limits. "Stop Starting, Start Finishing." |
| **PMI Mindset** | Process improvement. Visualize the flow and limit WIP to improve throughput/cycle time. |
| **The Trap** | **Distractor 2** (Adding people) to a chaotic process usually makes it slower (Brooks' Law). |
| **Source Link** | `guide/08-execution/executing-work.md` (Visual Management) |

</details>

---

### Question 31

<strong>Enabler:</strong> 6. Collaborate | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A Functional Manager keeps pulling a critical resource from your project to work on operational "fires." This has happened 3 times this month, causing schedule slippage.

<strong>Question:</strong>
What is the **BEST** way to resolve this?

- <strong>Correct:</strong> Meet with the Functional Manager to negotiate a resource agreement (e.g., dedicated hours) or agree on a formal backup plan for when fires occur.
- <strong>Distractor 1:</strong> Complain to the resource that they need to learn to say no.
- <strong>Distractor 2:</strong> Hiding the resource in a conference room so they can't be found.
- <strong>Distractor 3:</strong> Immediately escalate to the CEO to punish the Functional Manager.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | This is a resource negotiation issue. The Functional Manager has a valid need (fires), but so do you. Collaborative negotiation (Win-Win) is needed to find coverage that works for both. |
| **PMI Mindset** | Engage with the person who has the authority (Functional Manager). Don't blame the resource (D1). |
| **The Trap** | **Distractor 3** is a "nuclear" escalation that destroys relationships. |
| **Source Link** | `guide/08-execution/toolkit.md` (Escalation Decision Tree) |

</details>

---

### Question 32

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
You discover that a junior engineer is adding detailed ornamentation to a housing project that was not in the specs, thinking it will "delight the customer." This is consuming time and materials.

<strong>Question:</strong>
What action must be taken?

- <strong>Correct:</strong> Stop the unauthorized work immediately (Gold Plating), explain the issue to the engineer, and inspect the work to ensure it meets requirements.
- <strong>Distractor 1:</strong> Allow the work to continue since it adds value and customer satisfaction.
- <strong>Distractor 2:</strong> submit a change request to retroactively approve the ornamentation.
- <strong>Distractor 3:</strong> Charge the engineer for the wasted materials.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Gold Plating is a waste and a scope violation. It must be stopped. Value is defined by the customer/requirements, not the engineer's opinion. |
| **PMI Mindset** | Deliver what was promised. No more, no less. |
| **The Trap** | **Distractor 1** sounds "customer centric" but is actually "project failure centric" (budget/schedule overrun). |
| **Source Link** | `guide/08-execution/toolkit.md` (Common Execution Challenges - Scope Creep) |

</details>

---

### Question 33

<strong>Enabler:</strong> 1. Evaluate impact | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
During a Sprint Review, stakeholders seem disengaged and don't ask questions. They simple nod and say "looks good."

<strong>Question:</strong>
Why is this an impediment?

- <strong>Correct:</strong> Lack of active feedback creates the risk of the "Illusion of Agreement," where the team builds the wrong product that will be rejected later.
- <strong>Distractor 1:</strong> It hurts the team's feelings and lowers morale.
- <strong>Distractor 2:</strong> It makes the meeting end too early.
- <strong>Distractor 3:</strong> It prevents the Scrum Master from calculating velocity.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Agile relies on feedback loops. comprehensive silence is a danger signal (Zombie Stakeholders). It implies checking a box, not validating value. |
| **PMI Mindset** | Engagement is crucial. Silence != Success. |
| **The Trap** | **Distractor 1** matters, but the *business* risk (building the wrong thing) is the primary concern. |
| **Source Link** | `guide/08-execution/toolkit.md` (Stakeholder Engagement Assessment) |

</details>

---

### Question 34

<strong>Enabler:</strong> 4. Reassess impediments | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
An audit reveals that the project team has been skipping the required data privacy steps to save time. This is a severe compliance breach.

<strong>Question:</strong>
What is the project manager's obligation?

- <strong>Correct:</strong> Immediately halt the affected processes, log the compliance issue, and initiate a root cause analysis and remediation plan.
- <strong>Distractor 1:</strong> Note the issue and ask the team to try better next month.
- <strong>Distractor 2:</strong> Cover it up to avoid fines for the organization.
- <strong>Distractor 3:</strong> Ask the legal department to waive the requirement.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Compliance is mandatory. "Skipping steps" indicates a process failure. You must Stop, Fix, and Comply. |
| **PMI Mindset** | Ethics and Responsibility. Never hide violations (D2). Never ignore them (D1). |
| **The Trap** | **Distractor 2** violates the PMI Code of Ethics. |
| **Source Link** | `guide/08-execution/executing-work.md` (Organizational Culture - Process Oriented) |

</details>


---

### Question 35

<strong>Enabler:</strong> 5. Recognize risk becomes issue | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A key architect, who was identified as a 'critical resource risk,' suddenly resigns to join a competitor. The risk response plan called for 'job shadowing,' but this was never implemented due to time constraints.

<strong>Question:</strong>
What is the **FIRST** action the PM must take?

- <strong>Correct:</strong> Log the resignation in the Issue Log, assess the impact on the schedule, and immediately escalate the need for a replacement.
- <strong>Distractor 1:</strong> Update the risk register to show that the mitigation strategy failed.
- <strong>Distractor 2:</strong> Ask the architect to stay for 2 more months.
- <strong>Distractor 3:</strong> Implement the job shadowing plan now during the architect's notice period.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The risk has occurred (Issue). The planned response wasn't done. The new reality requires immediate Issue Management (Log -> Analyze -> Act). Attempting the failed mitigation (Shadowing) might be part of the solution, but logging and assessing impact comes first to understand the gap. |
| **PMI Mindset** | Manage reality. If you missed the mitigation, you are in issue management mode. Assess the damage first. |
| **The Trap** | **Distractor 3** is good, but might not be possible (2 weeks notice vs complex job?). **Distractor 1** is admin. |
| **Source Link** | `guide/08-execution/toolkit.md` (Risk Response Execution Checklist) |

</details>

---

### Question 36

<strong>Enabler:</strong> 1. Evaluate impact | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The team reports that the codebase has become "spaghetti code," making every new feature take twice as long to build.

<strong>Question:</strong>
How should this impediment be handled?

- <strong>Correct:</strong> Acknowledge this as Technical Debt and work with the Product Owner to allocate capacity in the next Sprint to refactor the code.
- <strong>Distractor 1:</strong> Tell the team to just work harder to overcome the complexity.
- <strong>Distractor 2:</strong> Create a separate "Refactoring Project" run by a different team.
- <strong>Distractor 3:</strong> Ignore the issue as it doesn't deliver direct customer value.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Technical Debt is a massive impediment to speed (Velocity). It must be paid down. The mechanism is to treat refactoring as work (PBI) and prioritize it. |
| **PMI Mindset** | Sustainable agility requires high quality. Ignoring debt freezes progress. |
| **The Trap** | **Distractor 3** focuses only on short-term features, leading to long-term failure. |
| **Source Link** | `guide/08-execution/executing-work.md` (Quality Execution Practices) |

</details>

---

### Question 37

<strong>Enabler:</strong> 6. Collaborate | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
Your project has a hardware team (Waterfall) and a software team (Agile). The hardware team is frustrated because the software team "won't commit to a fixed date" for the firmware. The software team is frustrated that hardware "won't allow iteration."

<strong>Question:</strong>
What is the **BEST** conflict resolution step?

- <strong>Correct:</strong> Facilitate a joint workshop to map the dependencies and agree on "Interface Milestones" where the two methodologies connect.
- <strong>Distractor 1:</strong> Force the software team to adopt waterfall to match the hardware team.
- <strong>Distractor 2:</strong> Force the hardware team to adopt agile sprints.
- <strong>Distractor 3:</strong> Keep the teams separated and act as the sole messenger between them.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | This is a "Methodology Clash." Neither side is wrong. They need a "Bridge." Interface Milestones allow Waterfall to have its dates and Agile to have its flexibility in between. |
| **PMI Mindset** | Hybrid requires integration points. Facilitate agreement on *how* to interact (Working Agreement). |
| **The Trap** | **Distractor 1 & 2** assume one way is right. **Distractor 3** creates a bottleneck (PM). |
| **Source Link** | `guide/03-team-leadership/conflict-management.md` (Structural Solutions) |

</details>

---

### Question 38

<strong>Enabler:</strong> 5. Risk to Issue | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project relies on imported steel. The exchange rate fluctuates wildly, causing the cost to spike by 20% today. This exceeds the cost baseline but is within the management reserve.

<strong>Question:</strong>
What is the process to handle this?

- <strong>Correct:</strong> This is an Issue; submit a change request to use the Management Reserve to cover the unforeseen cost spike.
- <strong>Distractor 1:</strong> Use the Contingency Reserve since this is a project risk.
- <strong>Distractor 2:</strong> Cut scope immediately to save the money.
- <strong>Distractor 3:</strong> Ask the vendor for a discount.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Contingency Reserve is for *Identified* risks. Management Reserve is for *Unidentified* risks (Unknown Unknowns). Since the scenario implies this was not a specific risk with a plan, Management Reserve is the source, requiring a Change Request. |
| **PMI Mindset** | Follow the money rules. Management Reserve = Change Request. |
| **The Trap** | **Distractor 1** is for *known* risks. |
| **Source Link** | `guide/08-execution/toolkit.md` (Change Request Triage) |

</details>

---

### Question 39

<strong>Enabler:</strong> 6. Collaborate | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
A new agile team is in the "Storming" phase. Team members are arguing about how long the standup should be and who should update the board.

<strong>Question:</strong>
How should the Scrum Master intervene?

- <strong>Correct:</strong> Facilitate a team session to create a "Team Charter" or "Working Agreement" where the team decides their own ground rules.
- <strong>Distractor 1:</strong> Decide the rules for them to stop the arguing.
- <strong>Distractor 2:</strong> Report the behavior to the functional managers.
- <strong>Distractor 3:</strong> Cancel the standups until they can behave professionally.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Storming is normal. The exit from Storming is Norming. Norming requires agreed-upon rules (Charter). The team must create them to own them. |
| **PMI Mindset** | Facilitate self-organization. Don't dictate (D1). |
| **The Trap** | **Distractor 1** fixes the immediate noise but prevents the team from maturing. |
| **Source Link** | `guide/03-team-leadership/conflict-management.md` (Team Charter) |

</details>

---

### Question 40

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
Half the team is in New York, and half is in London. The London team complains that they are always excluded from ad-hoc decisions made by the NY team in the hallway.

<strong>Question:</strong>
What is the **MOST** effective intervention?

- <strong>Correct:</strong> Establish a "Remote-First" communication policy: All decisions must be documented in the chat/project tool, even if people are co-located.
- <strong>Distractor 1:</strong> Move everyone to London.
- <strong>Distractor 2:</strong> Tell the London team to wake up earlier to be on the calls.
- <strong>Distractor 3:</strong> Assign a "London Ambassador" in NY to take notes.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The impediment is "Proximity Bias." The intervention is to level the playing field. If one person is remote, the whole meeting/decision process should be treated as remote. |
| **PMI Mindset** | Inclusion. Policies that protect the distributed team members. |
| **The Trap** | **Distractor 3** creates a bottleneck. **Distractor 2** puts the burden on the victim. |
| **Source Link** | `guide/08-execution/toolkit.md` (Virtual Team Management) |

</details>

---

### Question 41

<strong>Enabler:</strong> 6. Collaborate | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A vendor claims a deliverable is complete. The project team claims it is incomplete. The contract is ambiguous on this specific point.

<strong>Question:</strong>
What is the **preferred** resolution method?

- <strong>Correct:</strong> Negotiate a solution with the vendor (e.g., a small change order or compromise) to avoid litigation and keep the project moving.
- <strong>Distractor 1:</strong> Immediately stop payment and sue the vendor.
- <strong>Distractor 2:</strong> Accept the incomplete deliverable to avoid conflict.
- <strong>Distractor 3:</strong> Require the vendor to finish it for free or be blacklisted.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | When contracts are ambiguous, Negotiation (ADR) is preferred over Litigation (which kills the project schedule/budget). Collaboration/Compromise is needed. |
| **PMI Mindset** | Litigation is a failure. Negotiate first. |
| **The Trap** | **Distractor 1** is the "Nuclear" option. **Distractor 2** is "Smoothing" (Lose-Win). |
| **Source Link** | `guide/03-team-leadership/conflict-management.md` (Negotiation) |

</details>

---

### Question 42

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The Product Owner is attending the Daily Standup and constantly interrupting developers to ask for detailed status updates and ETA.

<strong>Question:</strong>
What should the Scrum Master do?

- <strong>Correct:</strong> Talk to the Product Owner privately and explain that the Standup is for the team's synchronization, not for status reporting.
- <strong>Distractor 1:</strong> Publicly silence the Product Owner during the meeting.
- <strong>Distractor 2:</strong> Cancel the standup since it is not productive.
- <strong>Distractor 3:</strong> Change the meeting format to a status report to satisfy the Product Owner.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | This is an Anti-Pattern. The SM acts as a shield/coach. Correcting the PO validates the team's self-organization. Doing it privately is respectful (Conflict Management). |
| **PMI Mindset** | Protect the team's process. Coach stakeholders. |
| **The Trap** | **Distractor 1** humiliates the PO (relationship damage). **Distractor 3** capitulates. |
| **Source Link** | `guide/08-execution/executing-work.md` (Daily Scrum Anti-Patterns) |

</details>

---

### Question 43

<strong>Enabler:</strong> 4. Reassess impediments | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
The Scope Baseline has been changed 15 times in 2 months via formal Change Requests. The team is confused about what the current requirements are.

<strong>Question:</strong>
What should the Project Manager do?

- <strong>Correct:</strong> Pause to re-baseline the project documents and hold a "Re-Kickoff" meeting to align everyone on the current state (v15).
- <strong>Distractor 1:</strong> Freeze the scope and reject all future changes.
- <strong>Distractor 2:</strong> Tell the team to check the change log if they are confused.
- <strong>Distractor 3:</strong> Ask the Sponsor to stop approving changes.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Excessive change creates "Configuration Management" chaos. The reassessment needed is a cleanup/realignment (Re-baseline/Re-kickoff). |
| **PMI Mindset** | Confusion is a risk. Clarity is the PM's job. When the dust settles, ensure everyone looks at the same map. |
| **The Trap** | **Distractor 1** is not realistic if business needs change. **Distractor 2** is lazy management. |
| **Source Link** | `guide/08-execution/toolkit.md` (Change Implementation Steps) |

</details>

---

### Question 44

<strong>Enabler:</strong> 5. Risk to Issue | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
During integration, it is discovered that the Agile software component uses a data format incompatible with the Predictive legacy system. This risk was missed during planning.

<strong>Question:</strong>
What is the action?

- <strong>Correct:</strong> Log the issue, analyze the cost/time to build an adapter (workaround), and submit a change request.
- <strong>Distractor 1:</strong> Update the Risk Register.
- <strong>Distractor 2:</strong> Blame the Agile team for not checking the legacy specs.
- <strong>Distractor 3:</strong> Force the legacy team to change their database.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Missed risk = Issue. You need a technical solution (Adapter) and a management solution (Change Request for time/money). |
| **PMI Mindset** | Focus on the solution (Adapter) and the governance (CR). |
| **The Trap** | **Distractor 1** is too late. **Distractor 2** is non-productive. |
| **Source Link** | `guide/08-execution/executing-work.md` (Risk to Issue) |

</details>

---

### Question 45

<strong>Enabler:</strong> 6. Collaborate | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
In the Retrospective, the team enters a "blame cycle," pointing fingers at the tester for missing bugs. The atmosphere is hostile.

<strong>Question:</strong>
How should the facilitator intervene?

- <strong>Correct:</strong> Intervene to enforce the "Prime Directive" (Retrospectives are blameless) and shift the focus to "System/Process" failures rather than person failures.
- <strong>Distractor 1:</strong> Agree that the tester needs more training.
- <strong>Distractor 2:</strong> End the meeting to cool down.
- <strong>Distractor 3:</strong> Remove the tester from the room.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Psychological Safety is the foundation of Agile. Blaming destroys it. The facilitator must pivot the conversation: "What in our process allowed the bug to escape?" not "Why did YOU miss it?" |
| **PMI Mindset** | Failures are system failures. Protect the team's safety. |
| **The Trap** | **Distractor 1** validates the blame. |
| **Source Link** | `guide/03-team-leadership/conflict-management.md` (De-escalation) |

</details>

---

### Question 46

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A stakeholder demands to see the prototype immediately. It is only 80% done and looks "ugly" (unfinished UI), though the logic works.

<strong>Question:</strong>
What is the risk of showing it now, and what should the PM do?

- <strong>Correct:</strong> Risk: The stakeholder may lose confidence due to the rough appearance. Action: Set expectations clearly ("This is a wireframe, ignore the colors") before showing it.
- <strong>Distractor 1:</strong> Refuse to show it until it is 100% perfect.
- <strong>Distractor 2:</strong> Show it without comment and hope they understand.
- <strong>Distractor 3:</strong> Spend 2 weeks polishing the UI before showing it (delaying feedback).

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Managing expectations is the intervention. Hiding it (D1) builds mistrust. Showing it without context (D2) risks "The demo effect" (they hate the color and ignore the logic). |
| **PMI Mindset** | Transparency + Context. "It's a draft." |
| **The Trap** | **Distractor 3** is Gold Plating/Delay. |
| **Source Link** | `guide/08-execution/toolkit.md` (Demo Best Practices) |

</details>

---

### Question 47

<strong>Enabler:</strong> 4. Reassess impediments | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The team consistently fails to finish User Stories because "Testing takes too long at the end of the sprint."

<strong>Question:</strong>
What should be reassessed?

- <strong>Correct:</strong> Reassess the "Definition of Done." It might be too ambitious for the sprint length, or the team needs TDD/Automation to shift testing left.
- <strong>Distractor 1:</strong> Make the sprint longer.
- <strong>Distractor 2:</strong> Remove testing from the Definition of Done.
- <strong>Distractor 3:</strong> Hire a manager to test for them.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Consistently failing DoD means the process is broken. You need to Shift Left (Test earlier) or automate. reassessing the workflow is key. |
| **PMI Mindset** | Build quality in. Detect problems early. |
| **The Trap** | **Distractor 2** kills quality. **Distractor 1** hides inefficiency. |
| **Source Link** | `guide/08-execution/toolkit.md` (Quality Tools - TDD/CI) |

</details>

---

### Question 48

<strong>Enabler:</strong> 6. Collaborate | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
The PMO requires a "Green/Yellow/Red" status report. The Agile team refuses, saying "We don't use traffic lights, we use velocity."

<strong>Question:</strong>
What is the PM's role?

- <strong>Correct:</strong> Translation. The PM must map the Agile metrics (Burnup/Velocity) to the PMO's language (RAG status) to satisfy governance without disrupting the team.
- <strong>Distractor 1:</strong> Force the team to use Traffic Lights.
- <strong>Distractor 2:</strong> Tell the PMO they are outdated.
- <strong>Distractor 3:</strong> Ignore the PMO request.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The PM is the bilingual translator in Hybrid. You translate "Velocity Trend" into "Schedule Status (Green/Red)." |
| **PMI Mindset** | Protect the team from admin, but satisfy governance. Bridge the gap. |
| **The Trap** | **Distractor 2** is career suicide. |
| **Source Link** | `guide/08-execution/toolkit.md` (Work Performance Reports) |

</details>

---

### Question 49

<strong>Enabler:</strong> 5. Risk to Issue | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A concrete pour was identified as a risk ("Rain could ruin the finish"). It didn't rain, but the concrete cracked due to extreme heat (Unidentified Risk).

<strong>Question:</strong>
What is the action?

- <strong>Correct:</strong> Log the issue, execute the workaround (remove/pour again), and submit a change request for the cost (Management Reserve).
- <strong>Distractor 1:</strong> Use the Contingency Reserve.
- <strong>Distractor 2:</strong> Blame the contractor.
- <strong>Distractor 3:</strong> Leave the crack since it's cosmetic.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Unidentified risk = Management Reserve. It is an Issue now. Quality cannot be compromised (D3). |
| **PMI Mindset** | Fix it. Follow the change process for the funding. |
| **The Trap** | **Distractor 1** is for *identified* risks (rain). This was heat. |
| **Source Link** | `guide/08-execution/executing-work.md` (EVM - Management Reserve) |

</details>

---

### Question 50

<strong>Enabler:</strong> 3. Intervention strategy | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The Design team works one sprint ahead of the Dev team. The Dev team complains that by the time they code the designs, the designs are outdated or missing details, and the designers are busy with the "next" sprint.

<strong>Question:</strong>
What is the intervention?

- <strong>Correct:</strong> Integrate the designers into the Cross-Functional Team so they design and code in the *same* sprint (Collaborative design).
- <strong>Distractor 1:</strong> Increase the lead time to 2 sprints.
- <strong>Distractor 2:</strong> Document the designs more thoroughly.
- <strong>Distractor 3:</strong> Tell the developers to just guess.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | "Silos" (Design vs Dev) create handoff waste. Agile promotes Cross-Functional Teams. Moving from "waterfall in sprints" (staggered) to "swarming" (same sprint) removes the impediment. |
| **PMI Mindset** | Break down silos. One Team. |
| **The Trap** | **Distractor 1** increases the lag and the problem. |
| **Source Link** | `guide/08-execution/executing-work.md` (Agile Execution) |

</details>

---

## Topic Summary

| Question # | Enablers Covered | Methodology |
| :--- | :--- | :--- |
| 1, 3, 9, 12, 15, 24, 35, 38, 44, 49 | **Recognize Risk -> Issue** | Mix |
| 2, 8, 16, 22, 28, 33, 36 | **Evaluate Impact** | Mostly Agile |
| 4, 11 | **Prioritize Impediments** | Predictive |
| 5, 10, 17, 18, 20, 25, 27, 30, 32, 40, 42, 46, 50 | **Intervention Strategy** | Mix |
| 7, 14, 19, 21, 29, 34, 43, 47 | **Reassess Continually** | Mix |
| 6, 13, 23, 26, 31, 37, 39, 41, 45, 48 | **Collaborate / Resolve** | Mix |

## Database Stats

- **Total Questions**: 50
- **Methodology Split**:
  - Predictive: 20 (40%)
  - Agile: 18 (36%)
  - Hybrid: 12 (24%)
- **Difficulty**: Level 4/5 (Analysis/Execution)

## Key Takeaways: Governance of Impediments

1.  **Impediment vs. Issue vs. Risk**: Know the difference. **Risks** are future (Plan). **Issues** are present (Act). **Impediments** are blockers to flow (Remove).
2.  **Servant Leadership**: In all methodologies, the PM/SM's job is to clear the path. Don't just log problems—solve them.
3.  **Escalate Responsibly**: Try to solve it at the team level first. If it requires authority/resources you don't have, escalate immediately with data and options.
4.  **Psychological Safety**: You cannot fix issues you don't know about. Create an environment where bad news travels fast and is welcomed (Blameless Retros).
5.  **Tailor the Intervention**: A safety issue requires **Forcing**. A technical debate requires **Collaborating**. A minor stakeholder gripe might require **Smoothing**. Match the tool to the problem.
6.  **Protect the Flow**: Whether it's the Critical Path (Predictive) or the Sprint Goal (Agile), your primary duty during execution is to keep value moving.

<style>
details {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

summary {
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

th, td {
  border: 1px solid var(--vp-c-border);
  padding: 0.5rem;
  text-align: left;
}

th {
  background: var(--vp-c-bg-mute);
}
</style>

<FlashcardCarousel :cards="[
  { front: `What is a business task on the PMP exam?`, back: `Scenario presenting a business problem requiring PM thinking across multiple knowledge areas.` },
  { front: `What does the Impediments task test?`, back: `Ability to identify obstacles, analyze impact, and recommend solutions proactively.` },
  { front: `How should you approach an impediment blocking your team?`, back: `Understand root cause, develop mitigation, escalate if needed, and document for organizational learning.` },
  { front: `What are common project impediments?`, back: `Unclear scope, resource constraints, stakeholder misalignment, technical risks, and organizational barriers.` },
  { front: `How do you distinguish between risk and impediment?`, back: `Risk: uncertain event that may occur. Impediment: current obstacle blocking progress.` },
  { front: `What is the PM's role in removing impediments?`, back: `Remove within authority, escalate beyond authority, communicate status, and prevent recurrence.` },
  { front: `How should you communicate impediments to leadership?`, back: `Clearly state impact on project, propose solutions with trade-offs, and recommend course of action.` },
  { front: `What if an impediment affects multiple projects?`, back: `Escalate to PMO or executive sponsor who can make portfolio-level decisions.` },
  { front: `How do impediments relate to risk management?`, back: `Some impediments may trigger risk responses; tracking impediments helps identify systemic issues.` },
  { front: `Should you wait for impediments to be resolved or work around them?`, back: `Do both: work around while escalating - don't let impediments become excuses for inaction.` }
]" />
