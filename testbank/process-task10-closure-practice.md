# Practice Exam: Process Task 10 - Manage Project Closure

<style>
  details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 0.5em 0.5em 0;
    margin-bottom: 1em;
    background-color: #f9f9f9;
  }
  summary {
    font-weight: bold;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
    cursor: pointer;
  }
  details[open] {
    padding: 0.5em;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
</style>

##  Topic Summary Table

| Question | Enabler | Methodology | Focus |
| :--- | :--- | :--- | :--- |
| 1-5 | Approval / Conclude / Transition / Conclude / Criteria | Pred / Pred / Hybrid / Agile / Pred | Stakeholder Sign-off, Open Claims, Ops Training, Cancellation, Done Definition |
| 6-10 | Conclude / Transition / Conclude / Approval / Transition | Pred / Pred / Hybrid / Agile / Pred | Lessons Learned, Support Staff, CPIF Calculation, Compliance, Manuals Translation |
| 11-15 | Conclude / Criteria / Conclude / Transition / Conclude | Pred / Hybrid / Pred / Hybrid / Agile | Missing Team Members, DoD Deviation, Variance Analysis, Benefits Handoff, Knowledge Transfer |
| 16-20 | Approval / Conclude / Criteria / Conclude / Transition | Pred / Pred / Hybrid / Pred / Hybrid | Community Approval, Vendor Performance, Punch Lists, Resource Release, Known Issues |
| 21-25 | Conclude / Criteria / Conclude / Conclude / Conclude | Agile / Pred / Hybrid / Pred / Agile | OPA Updates, Regulatory Signatures, ROI reporting, Archiving, DoD Evolution |
| 26-30 | Conclude / Conclude / Conclude / Transition / Conclude | Agile / Hybrid / Pred / Hybrid / Agile | Technical Debt, Methodology Gaps, Procurement Audit, Safety Certificates, OPA Searchability |
| 31-35 | Conclude / Conclude / Conclude / Conclude / Conclude | Pred / Agile / Hybrid / Agile / Pred | Surplus Funds, Professional Growth, CPAF Award, Unfinished Backlog, Data Curation |
| 36-40 | Conclude / Conclude / Conclude / Conclude / Conclude | Agile / Pred / Hybrid / Agile / Hybrid | Agile Variance, Audit Trails, Safety Reporting, Agile Quality Audit, Adversarial Vendors |
| 41-45 | Conclude / Conclude / Conclude / Conclude / Conclude | Agile / Pred / Agile / Hybrid / Agile | Video Lessons, Wet Signatures, Projected ROI, Recurring Costs, Final Report Value |
| 46-50 | Conclude / Conclude / Conclude / Conclude / Conclude | Pred / Agile / Hybrid / Agile / Pred | Closing Risks, Shadow IT, Transition Support, Project vs Ops, Handling Failure |

---

### Question 1

<strong>Enabler:</strong> Obtain project stakeholder approval | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
The project manager has completed all deliverables for a multi-year infrastructure project. During the final walkthrough, the primary stakeholder refuses to sign the formal acceptance document, citing a minor aesthetic misalignment in the lobby that was not specified in the original requirements or the quality management plan. The stakeholder insists this must be fixed before closure.

<strong>Question:</strong>
What is the BEST action for the project manager to take?

- <strong>Correct:</strong> Reference the documented acceptance criteria and explain that the current deliverables meet all agreed-upon requirements.
- <strong>Distractor 1:</strong> Instruct the team to perform the aesthetic fix immediately to ensure customer satisfaction and secure the sign-off.
- <strong>Distractor 2:</strong> Log the aesthetic issue as a defect in the issue log and delay the project closure until the steering committee reviews it.
- <strong>Distractor 3:</strong> Negotiate a partial payment with the stakeholder to compensate for the misalignment and close the project.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The project manager must protect the project scope by referencing the agreed-upon acceptance criteria. If the criteria are met, the customer is technically obligated to accept the deliverables. |
| **PMI Mindset** | Always refer back to the baseline and formal agreements when disputes over scope arise during closure. |
| **The Trap** | Fixing it immediately is a "reactive mistake" that leads to scope creep and sets a dangerous precedent for future phases or projects. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 2

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project is being closed after a successful deployment. The project manager discovers an outstanding claim from a vendor regarding extra work performed during an emergency system outage three months ago. The vendor and the procurement department have not yet reached an agreement on the final settlement amount.

<strong>Question:</strong>
How should the project manager handle this situation?

- <strong>Correct:</strong> Document the claim fully in the procurement records and formally transfer the responsibility for its resolution to the legal or finance department.
- <strong>Distractor 1:</strong> Use the remaining project contingency budget to pay the vendor's claim in full to avoid delaying the final project closure report.
- <strong>Distractor 2:</strong> Close the project administratively and mark the procurement as complete, assuming the finance department will handle it later.
- <strong>Distractor 3:</strong> Refuse to close the project or release the team until the vendor and procurement department sign a final settlement agreement.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | While projects shouldn't ideally close with open claims, if a resolution cannot be reached, the PM must formally transfer the ownership to a permanent department like Legal or Finance. |
| **PMI Mindset** | Governance requires that all open items are either resolved or formally handed off to a functional owner. |
| **The Trap** | Paying to avoid delay is a violation of financial governance and "Pay to avoid delay" is a red flag answer. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 3

<strong>Enabler:</strong> Validate readiness for transition | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A hybrid project is transitioning a new digital banking platform to the operations team. The software development followed an agile approach, while the infrastructure was predictive. The operations manager informs the project manager that their staff is not yet trained on the new cloud monitoring tools included in the release.

<strong>Question:</strong>
What should the project manager do FIRST?

- <strong>Correct:</strong> Review the transition plan to confirm the agreed-upon training requirements and delivery schedule for the operations staff.
- <strong>Distractor 1:</strong> Postpone the go-live date by two weeks to allow the project team to conduct emergency training sessions for the operations staff.
- <strong>Distractor 2:</strong> Update the final project report to indicate that the transition was successful despite the lack of operational readiness.
- <strong>Distractor 3:</strong> Transfer the project's remaining training budget to the operations department so they can hire an external trainer.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The PM must first assess the situation by looking at the documentation (Transition Plan) before taking any corrective actions. |
| **PMI Mindset** | Analysis comes before action. The PM needs to know if this was a missed requirement or a failure in execution. |
| **The Trap** | Postponing the go-live is a drastic step to take before understanding if the training was actually part of the project's transition scope. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 4

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
The organization has decided to cancel an agile project mid-way through the fourth release because the market conditions have made the product obsolete. The product owner has instructed the team to stop all development work immediately.

<strong>Question:</strong>
What is the most important responsibility of the project manager (or Delivery Lead) at this point?

- <strong>Correct:</strong> Ensure the team conducts a final retrospective and archives the completed code and documentation for future reference.
- <strong>Distractor 1:</strong> Direct the team to immediately begin working on the next highest-priority project in the organization's portfolio.
- <strong>Distractor 2:</strong> Request the sponsor to reconsider the cancellation based on the "sunk cost" of the resources already invested.
- <strong>Distractor 3:</strong> Finalize the remaining items in the product backlog to ensure the product has at least some functional value.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Even canceled projects require administrative closure, including harvesting lessons learned and archiving artifacts. |
| **PMI Mindset** | Administrative closure is mandatory for all projects, regardless of the reason for termination. |
| **The Trap** | The "sunk cost fallacy" is a classic trap; spending more because you already spent a lot is never the right answer. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 5

<strong>Enabler:</strong> Determine criteria to successfully close | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is defining the "Definition of Done" for a large construction project phase. One of the key stakeholders suggests that the project should only be considered closed after the first year of building occupancy to ensure all systems are functioning as expected.

<strong>Question:</strong>
How should the project manager respond to this suggestion?

- <strong>Correct:</strong> Explain that the project closure focuses on handoff and transition, and long-term performance monitoring is typically handled during the warranty or operations phase.
- <strong>Distractor 1:</strong> Agree to extend the project timeline by one year to accommodate the stakeholder's request for long-term monitoring.
- <strong>Distractor 2:</strong> Update the project charter to include "one-year post-occupancy performance" as a primary project success criterion.
- <strong>Distractor 3:</strong> Inform the stakeholder that project closure is strictly an administrative step that does not involve deliverable performance.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Project closure marks the end of the project's temporary nature. Long-term monitoring is an operational or warranty activity, not a project closure activity. |
| **PMI Mindset** | Projects have a definite beginning and end. Performance tracking post-handoff is the responsibility of operations. |
| **The Trap** | It's tempting to satisfy stakeholders by extending the PM's responsibility, but this ignores the fundamental definition of a project. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 6

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
During a lessons learned session for a recently completed project, the team identifies that the lack of clear requirements led to significant rework. Some team members are hesitant to document this, fearing it will reflect poorly on the project's performance evaluation.

<strong>Question:</strong>
How should the project manager facilitate this situation?

- <strong>Correct:</strong> Reiterate that the goal of the session is organizational improvement and ensure the lesson is recorded with actionable recommendations for future projects.
- <strong>Distractor 1:</strong> Allow the team to omit the negative finding from the official register to maintain a positive final report for the sponsor.
- <strong>Distractor 2:</strong> Document the finding in a private memo to the PMO instead of the public lessons learned register to protect the team's reputation.
- <strong>Distractor 3:</strong> Assign responsibility for the rework to specific team members in the register to ensure accountability for the failure.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Lessons learned must be blameless, objective, and focused on providing value to the organization's OPAs. |
| **PMI Mindset** | Transparency and continuous improvement are core values. Hiding failures prevents the organization from learning. |
| **The Trap** | Protecting the team's reputation at the expense of organizational learning is a failure of the PM's duty to the PMO. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 7

<strong>Enabler:</strong> Validate readiness for transition | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project to implement a new enterprise resource planning (ERP) system is in the closure phase. The project manager is preparing the handoff package for the IT support team. The support manager refuses to accept the system, stating they don't have the headcount to manage the additional support tickets.

<strong>Question:</strong>
What should the project manager do?

- <strong>Correct:</strong> Review the project charter and resource management plan to determine if operational support staffing was included in the project's scope.
- <strong>Distractor 1:</strong> Request the project sponsor to provide additional funding to hire permanent support staff for the IT department.
- <strong>Distractor 2:</strong> Delay the project closure until the IT department successfully hires and trains new support personnel.
- <strong>Distractor 3:</strong> Hand over the system documentation to the IT manager and proceed with administrative closure regardless of their refusal.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The PM must first verify if the "readiness" criteria defined in the project documents included the provisioning of operational staff. |
| **PMI Mindset** | Validate against the plan. The PM is responsible for the project's scope, which may or may not include operational staffing. |
| **The Trap** | Automatically requesting more money for the operations team is overstepping the PM's authority and scope. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 8

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project is closing, and the project manager needs to calculate the final fee for a vendor under a Cost Plus Incentive Fee (CPIF) contract. The target cost was $200,000, the target fee was $20,000, and the share ratio is 80/20 (buyer/seller). The actual cost incurred by the vendor was $180,000.

<strong>Question:</strong>
What is the final fee that should be paid to the vendor?

- <strong>Correct:</strong> $24,000
- <strong>Distractor 1:</strong> $20,000
- <strong>Distractor 2:</strong> $16,000
- <strong>Distractor 3:</strong> $22,000

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Under CPIF, the seller shares in the savings. Saving = $200k - $180k = $20k. Seller share = 20% of $20k = $4k. Final Fee = Target Fee ($20k) + Seller Share ($4k) = $24k. |
| **PMI Mindset** | Financial closure requires accurate calculation of incentives based on the contract terms. |
| **The Trap** | Choosing $16,000 assumes the seller pays for the underrun, which is the opposite of an incentive fee. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 9

<strong>Enabler:</strong> Obtain project stakeholder approval | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile team has finished the final sprint for a new mobile app. The Product Owner has accepted all user stories in the sprint review. However, the compliance department states that the project cannot be "closed" because the data privacy audit documentation is incomplete.

<strong>Question:</strong>
How should the project manager handle this?

- <strong>Correct:</strong> Work with the team to complete the required compliance documentation before finalizing the product's administrative closure.
- <strong>Distractor 1:</strong> Inform the compliance department that in agile, the Product Owner's acceptance of stories is the only requirement for closure.
- <strong>Distractor 2:</strong> Release the development team to their next project and personally complete the audit documentation to save time.
- <strong>Distractor 3:</strong> Archive the project as "complete" and list the missing documentation as a "risk" in the final project report.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Agile projects still operate within organizational and regulatory constraints. "Done" at the project level includes compliance requirements. |
| **PMI Mindset** | Compliance is a non-negotiable constraint that must be satisfied for formal project closure. |
| **The Trap** | Assuming agile methodologies bypass organizational compliance or "administrative" work. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 10

<strong>Enabler:</strong> Validate readiness for transition | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is handing over a new manufacturing line to the operations manager. The operations manager points out that while the machinery works, the user manuals are only available in a language that 40% of the factory workers do not speak. This requirement was not in the original scope.

<strong>Question:</strong>
What is the BEST way for the project manager to address this?

- <strong>Correct:</strong> Document the feedback and submit a change request to translate the manuals, or add it to the transition punch list if agreed by the sponsor.
- <strong>Distractor 1:</strong> Tell the operations manager that the project met the original scope and they are responsible for their own translations.
- <strong>Distractor 2:</strong> Use the project's management reserve to quickly hire a translation service to avoid a delay in sign-off.
- <strong>Distractor 3:</strong> Instruct the project's bilingual team members to spend their final week translating the manuals for the operations team.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | If a critical transition item is missing but wasn't in scope, the PM should follow the change control process or use the punch list method for minor follow-ups. |
| **PMI Mindset** | Manage expectations by following formal processes (Change Request) rather than "gold plating" or being dismissive. |
| **The Trap** | Being dismissive ("not my problem") damages stakeholder relationships and the value of the handoff. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 11

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project has reached its end date. The project manager has successfully handed over the deliverables, but two key team members have already left for a new assignment before the final retrospective could be held. The remaining team members feel the retrospective is now unnecessary.

<strong>Question:</strong>
What should the project manager do?

- <strong>Correct:</strong> Conduct the retrospective with the remaining team members and attempt to gather input from the departed members via email or short interviews.
- <strong>Distractor 1:</strong> Cancel the retrospective and use the notes from the previous phase-end retrospectives to create the final lessons learned report.
- <strong>Distractor 2:</strong> File a formal complaint with the functional managers of the departed team members for leaving before the project was administratively closed.
- <strong>Distractor 3:</strong> Skip the retrospective and focus on archiving the financial records, as these are more important for the final audit.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Harvesting lessons learned is a mandatory closure activity. The PM must make a best effort to include all relevant perspectives. |
| **PMI Mindset** | Continuous improvement (lessons learned) is a core responsibility. Even partial data is better than no data. |
| **The Trap** | Assuming that phase-end retros are "enough" for the final project-wide closure report. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 12

<strong>Enabler:</strong> Determine criteria to successfully close | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
In a hybrid project, the "Definition of Done" for the final release includes a requirement for "No critical bugs and less than 10 minor bugs." Upon final testing, the team finds 1 critical bug and 15 minor bugs. The business owner wants to go live anyway to meet a marketing deadline.

<strong>Question:</strong>
What should the project manager do?

- <strong>Correct:</strong> Document the deviation from the acceptance criteria and seek formal approval from the project sponsor and governance board to proceed with the release.
- <strong>Distractor 1:</strong> Allow the go-live to proceed as requested by the business owner, as they have the ultimate authority over the product.
- <strong>Distractor 2:</strong> Update the "Definition of Done" to allow for 1 critical bug and 20 minor bugs so that the project can be closed without an exception.
- <strong>Distractor 3:</strong> Refuse to release the product until the team fixes the critical bug and at least 6 minor bugs to meet the original criteria.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | When acceptance criteria are not met, the PM must not unilaterally change them. Instead, they must follow governance protocols to obtain a waiver or exception. |
| **PMI Mindset** | Adhere to quality standards and follow formal governance for exceptions. |
| **The Trap** | Simply following the business owner's request ignores the agreed-upon quality governance. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 13

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
The project manager is preparing the final project report for a software implementation. The project was completed 10% over budget but 5% ahead of schedule. The sponsor is pleased with the result but asks why the variance occurred.

<strong>Question:</strong>
Where should the project manager find the objective explanation for these variances?

- <strong>Correct:</strong> In the project's change log and the variance analysis records maintained throughout the project.
- <strong>Distractor 1:</strong> By interviewing the team members to get their qualitative opinions on the project's performance.
- <strong>Distractor 2:</strong> In the original business case and the project charter developed during the initiation phase.
- <strong>Distractor 3:</strong> In the lessons learned register from the final retrospective session with the stakeholders.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The Final Report should summarize variances based on the audit trail of approved changes and performance data (EVM). |
| **PMI Mindset** | Data-driven reporting. Use the PMIS and official logs to explain performance vs. the baseline. |
| **The Trap** | Lessons learned are for "how we worked," whereas the change log explains "what changed in the plan." |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 14

<strong>Enabler:</strong> Validate readiness for transition | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project manager is closing a project that developed a new AI-driven customer service bot. The bot is live, but the "Benefits Handoff" plan requires the Marketing Manager to track customer satisfaction for six months post-closure. The Marketing Manager claims they don't have the tools to perform this tracking.

<strong>Question:</strong>
What should the project manager's role be in this situation?

- <strong>Correct:</strong> Ensure the tools or data sources for benefits measurement are provided as part of the project's final deliverables before closure.
- <strong>Distractor 1:</strong> Agree to remain on the project for an additional six months to personally track the benefits for the Marketing Manager.
- <strong>Distractor 2:</strong> Inform the project sponsor that the benefits cannot be tracked and therefore the project should be considered a failure.
- <strong>Distractor 3:</strong> Hand over the project as is, as benefits tracking is an operational activity that the PM is not responsible for.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The PM is responsible for setting up the mechanism for benefits tracking and handing it off, even if they aren't the one doing the tracking. |
| **PMI Mindset** | Value transfer. The PM's role ends when they've enabled the organization to measure the value. |
| **The Trap** | Assuming the PM has no responsibility for benefits once the code is live. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 15

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile project is being retired. The team has been working in two-week sprints for over a year. The Project Manager (or Delivery Lead) is now finalizing the "Administrative Closure."

<strong>Question:</strong>
Which action is MOST effective for this knowledge transfer?

- <strong>Correct:</strong> Create a final knowledge transfer matrix and conduct recorded walkthroughs of the system's architecture and configuration with the support team.
- <strong>Distractor 1:</strong> Require all team members to write a detailed, 50-page technical manual of every feature they developed during the year.
- <strong>Distractor 2:</strong> Host a celebratory party where the team can informally discuss their experiences with the incoming maintenance team.
- <strong>Distractor 3:</strong> Simply archive the product backlog and the sprint retrospective notes in the organization's central repository.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Effective knowledge transfer requires active engagement (walkthroughs) and structured documentation (matrix), not just passive archiving. |
| **PMI Mindset** | Ensure continuity. Knowledge transfer is about making the information usable for the next person. |
| **The Trap** | Exhaustive documentation (50-page manual) is often wasteful and rarely read, especially in agile contexts. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 16

<strong>Enabler:</strong> Obtain project stakeholder approval | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is seeking final sign-off for a government-funded social program. One of the key community leaders refuses to sign, stating that the program did not reach enough participants in a specific rural area, although the geographic reach was never specified as a success criterion in the charter.

<strong>Question:</strong>
What is the FIRST thing the project manager should do?

- <strong>Correct:</strong> Meet with the community leader to understand the impact of the participation gap and review the project's actual performance against the charter's objectives.
- <strong>Distractor 1:</strong> Ask the project sponsor to use their political influence to pressure the community leader into signing the document.
- <strong>Distractor 2:</strong> Immediately launch a small sub-project to address the participation gap in the rural area to secure the sign-off.
- <strong>Distractor 3:</strong> Document the refusal in the final report and proceed with closure, as the community leader's objection is technically out of scope.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The first step is always to understand the stakeholder's concern and validate it against the project's formal objectives. |
| **PMI Mindset** | Active listening and stakeholder engagement. Don't dismiss concerns or escalate without first investigating. |
| **The Trap** | Proceeding with closure without trying to resolve the stakeholder's concern can lead to long-term reputational damage. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 17

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is conducting the final procurement audit for a project that used multiple vendors. They find that one vendor consistently delivered late, but their work was eventually accepted and paid for in full.

<strong>Question:</strong>
What should the project manager do with this information during closure?

- <strong>Correct:</strong> Include a detailed vendor performance evaluation in the procurement closure records to inform future vendor selection.
- <strong>Distractor 1:</strong> Request a partial refund from the vendor for the delays before formally closing the contract.
- <strong>Distractor 2:</strong> Keep this information confidential within the project team to avoid damaging the vendor's reputation in the industry.
- <strong>Distractor 3:</strong> Blacklist the vendor from all future project work in the organization's central procurement database.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Vendor performance evaluations are a key part of procurement closure and serve as valuable OPAs for future projects. |
| **PMI Mindset** | Contribute to the organization's knowledge base. Use objective data to improve future procurement decisions. |
| **The Trap** | Attempting to get a refund after the work was accepted and paid for is generally not contractually sound at the closure phase. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 18

<strong>Enabler:</strong> Determine criteria to successfully close | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project manager is closing a phase of a hybrid project. The agile portion of the phase is "done" per the team's Definition of Done, but the predictive portion's quality audit found three minor non-conformances that do not affect the system's functionality.

<strong>Question:</strong>
What is the BEST way to handle these non-conformances during phase closure?

- <strong>Correct:</strong> Document the non-conformances as a "punch list" to be addressed in the next phase and obtain stakeholder agreement for conditional closure.
- <strong>Distractor 1:</strong> Delay the closure of the entire phase until the three non-conformances are fully remediated by the team.
- <strong>Distractor 2:</strong> Ignore the non-conformances since they don't affect functionality and close the phase as successful.
- <strong>Distractor 3:</strong> Re-classify the predictive work as agile so that the non-conformances can be treated as backlog items for the next sprint.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Conditional closure with a punch list is a common and professional way to handle minor issues that don't block the transition of value. |
| **PMI Mindset** | Be pragmatic but transparent. Use the "punch list" approach for minor items. |
| **The Trap** | Delaying an entire project or phase for minor aesthetic or non-functional issues can be a waste of resources. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 19

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is closing a project that was highly successful and finished under budget. The project manager wants to ensure the team members receive proper recognition before they return to their functional departments.

<strong>Question:</strong>
Which action is MOST appropriate as part of the formal resource release process?

- <strong>Correct:</strong> Provide formal performance feedback to each team member's functional manager and organize a project celebration event.
- <strong>Distractor 1:</strong> Offer the team members a financial bonus from the remaining project budget as a token of appreciation.
- <strong>Distractor 2:</strong> Recommend all team members for immediate promotion within the organization based on the project's success.
- <strong>Distractor 3:</strong> Allow the team members to keep the project-purchased equipment (e.g., laptops) as a reward for their hard work.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Formal performance feedback and recognition (celebration) are key parts of the human resource side of project closure. |
| **PMI Mindset** | Respect the organization's HR policies. Recognition should be formal and documented. |
| **The Trap** | PMs usually don't have the authority to give financial bonuses or promotions; these are functional manager responsibilities. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 20

<strong>Enabler:</strong> Validate readiness for transition | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A hybrid project is transitioning a new customer portal to the operations team. The project manager has provided the user guides and the technical architecture diagrams. The operations manager asks for the "Known Issues" log from the testing phase.

<strong>Question:</strong>
Why is this document critical for the transition?

- <strong>Correct:</strong> It allows the support team to troubleshoot common user problems and understand existing system limitations immediately after go-live.
- <strong>Distractor 1:</strong> It provides a list of team members who should be held accountable for any failures that occur after the handoff.
- <strong>Distractor 2:</strong> It serves as a justification for the operations team to request more budget for post-launch bug fixing.
- <strong>Distractor 3:</strong> It proves that the project manager met the quality standards by documenting every single error that occurred during development.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Operational readiness requires understanding not just how the system works, but how it *doesn't* work (known issues). |
| **PMI Mindset** | Transparency in handoff. Give the next team everything they need to be successful, including the "ugly" parts. |
| **The Trap** | Seeing the "Known Issues" log as a sign of failure rather than a tool for support. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 21

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile project has reached the end of its funded lifecycle. The team has transitioned the product to a maintenance group. The Project Manager (or Delivery Lead) is now finalizing the "Administrative Closure."

<strong>Question:</strong>
Which of the following must be updated in the Organizational Process Assets (OPAs) for this agile project?

- <strong>Correct:</strong> The final lessons learned and the indexed repository of all sprint retrospective outcomes.
- <strong>Distractor 1:</strong> The original project management plan and the detailed WBS that were created during the initiation phase.
- <strong>Distractor 2:</strong> The final individual performance appraisals for every team member who participated in the sprints.
- <strong>Distractor 3:</strong> The list of all rejected user stories that the Product Owner decided were not valuable enough to implement.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Lessons learned (including those from retrospectives) are the primary OPA contribution of an agile project closure. |
| **PMI Mindset** | Continuous improvement is organization-wide. Share the team's process learnings with the rest of the company. |
| **The Trap** | Agile projects rarely have a detailed WBS or a predictive "project management plan" to update at closure. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 22

<strong>Enabler:</strong> Determine criteria to successfully close | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is working on the closure phase of a project with a very strict regulatory compliance requirement. The project manager realizes that one of the required environmental impact reports was signed by a junior engineer instead of the certified lead engineer, which is a violation of the local law.

<strong>Question:</strong>
What is the MOST appropriate action for the project manager to take before closing the project?

- <strong>Correct:</strong> Obtain the required signature from the certified lead engineer, even if it delays the formal closure of the project.
- <strong>Distractor 1:</strong> Document the oversight in the final report but proceed with closure to meet the project's scheduled end date.
- <strong>Distractor 2:</strong> Ask the junior engineer to backdate their certification status to cover the date the report was originally signed.
- <strong>Distractor 3:</strong> Assume that because the report was technically accurate, the signature discrepancy will not be noticed during an audit.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Compliance is a non-negotiable constraint. Closure cannot happen if legal or regulatory requirements are unmet. |
| **PMI Mindset** | Ethical responsibility and compliance. Do the right thing, even if it impacts the schedule. |
| **The Trap** | "Meeting the deadline" is never more important than following the law or safety regulations. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 23

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project manager is closing a hybrid project. They are using the "Final Report" to summarize the project's success. The sponsor wants to know if the project was "worth the investment."

<strong>Question:</strong>
Which section of the Final Report directly addresses the sponsor's question?

- <strong>Correct:</strong> The Benefits Handoff section, which outlines the expected ROI and assigns ownership for post-closure measurement.
- <strong>Distractor 1:</strong> The Schedule Performance section, which shows that the project finished two weeks ahead of the baseline.
- <strong>Distractor 2:</strong> The Lessons Learned section, which describes how the team improved their velocity over time.
- <strong>Distractor 3:</strong> The Resource Release section, which lists the cost savings from releasing the team early.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Value and ROI are the focus of the "Benefits" discussion. The PM ensures the organization can track the "worth" after closure. |
| **PMI Mindset** | Focus on value delivery. The project's success is ultimately measured by the benefits it provides to the business. |
| **The Trap** | Finishing "ahead of schedule" or "under budget" proves efficiency, but it doesn't prove the project was a good investment (value). |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 24

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is closing a project and needs to archive all project artifacts. The organization uses a cloud-based Project Management Information System (PMIS).

<strong>Question:</strong>
What is the PRIMARY purpose of archiving these artifacts?

- <strong>Correct:</strong> To provide a searchable historical record for future project managers and to support organizational audits.
- <strong>Distractor 1:</strong> To ensure that the current project team members cannot access or change the data once the project is finished.
- <strong>Distractor 2:</strong> To satisfy the IT department's storage quota requirements by moving active files to a "read-only" status.
- <strong>Distractor 3:</strong> To prove to the project sponsor that the project manager followed every step of the project management plan.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Archiving is for the benefit of the organization (future projects and audits), not just for "locking" files. |
| **PMI Mindset** | Thinking about the long-term value of project data as an Organizational Process Asset. |
| **The Trap** | Seeing archiving as a purely technical or "cleanup" task rather than a strategic knowledge management task. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 25

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
In an agile project, the "Definition of Done" was updated several times during the project's lifecycle to improve quality. During the final retrospective, the team discusses whether these changes were effective.

<strong>Question:</strong>
How should this discussion be captured in the project's closure documentation?

- <strong>Correct:</strong> Document the evolution of the Definition of Done and its impact on quality as a repeatable process improvement for other teams.
- <strong>Distractor 1:</strong> Only document the final version of the Definition of Done, as the previous versions are now irrelevant.
- <strong>Distractor 2:</strong> Record the names of the team members who suggested the changes to ensure they receive credit in their performance reviews.
- <strong>Distractor 3:</strong> Keep the discussion private to the team and only report the final project velocity to the PMO.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Capturing the "why" and "how" of process improvements (like DoD changes) provides high-value lessons for the organization. |
| **PMI Mindset** | Continuous improvement is the focus of agile retrospectives. Share these learnings broadly. |
| **The Trap** | Assuming that only the "final state" matters and the "journey of improvement" has no value to others. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 26

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile project is closing after the final release. The Product Owner is satisfied, but the team is worried about "zombie" feature flags that are still present in the production code. They believe these could cause issues once the project team is disbanded.

<strong>Question:</strong>
What is the BEST action for the project manager to take?

- <strong>Correct:</strong> Ensure the team identifies and removes or finalizes all temporary feature flags as part of the technical debt cleanup before closure.
- <strong>Distractor 1:</strong> Document the feature flags in the "Known Issues" log and hand them over to the maintenance team to handle later.
- <strong>Distractor 2:</strong> Release the team and inform the maintenance group that the feature flags are a permanent part of the system architecture.
- <strong>Distractor 3:</strong> Conduct an emergency sprint to convert all feature flags into permanent configuration settings in the database.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Technical closure in agile includes cleaning up "zombie code" and feature flags to ensure long-term system stability. |
| **PMI Mindset** | Technical excellence and sustainable delivery. Don't leave technical debt for the next team if it's within the project's scope to fix it. |
| **The Trap** | Simply documenting them as "Known Issues" is a reactive approach that increases operational risk. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 27

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project manager is closing a hybrid project. The final project report shows a high number of defects were found during the user acceptance testing (UAT) phase, which was predictive, compared to the development sprints, which were agile.

<strong>Question:</strong>
How should this be addressed in the final lessons learned session?

- <strong>Correct:</strong> Analyze the root cause of the defect escape rate from agile sprints to predictive UAT and document improvements for the "Definition of Done."
- <strong>Distractor 1:</strong> Blame the agile team for not testing enough during the sprints and recommend more predictive testing in future projects.
- <strong>Distractor 2:</strong> Conclude that hybrid methodologies are inherently flawed and recommend using only predictive methods for high-stakes projects.
- <strong>Distractor 3:</strong> Record the defect count as a successful metric since all defects were eventually found before the final project closure.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Lessons learned should focus on the "gap" between methodologies (e.g., why agile testing didn't catch UAT-level defects). |
| **PMI Mindset** | Continuous process improvement. Use data to refine the "Definition of Done" and testing strategies. |
| **The Trap** | Using the lessons learned session to "blame" one part of the methodology or the team. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 28

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project is being closed early due to a strategic realignment. The project manager has started the administrative closure, but the project sponsor asks if they can skip the final procurement audit since the vendor was a long-time partner and the work was only 30% complete.

<strong>Question:</strong>
What is the project manager's MOST appropriate response?

- <strong>Correct:</strong> Explain that a final procurement audit is a mandatory closure activity to ensure all obligations are met and to document vendor performance.
- <strong>Distractor 1:</strong> Agree to skip the audit to save time and resources, provided the vendor signs a waiver of all future claims.
- <strong>Distractor 2:</strong> Conduct a "mini-audit" that only looks at the invoices and ignore the quality of the deliverables provided so far.
- <strong>Distractor 3:</strong> Delegate the audit to the procurement department and proceed with closing the project records immediately.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Procurement audits are a required part of formal closure, especially for terminated projects, to protect the organization legally and financially. |
| **PMI Mindset** | Adhere to formal governance and procurement processes, regardless of the relationship with the vendor. |
| **The Trap** | Skipping mandatory steps due to "relationships" or "early termination" is a failure of governance. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 29

<strong>Enabler:</strong> Validate readiness for transition | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project manager is handing over a new automated warehouse system. The operations team is ready, but the local government has not yet issued the final safety certificate required for full occupancy. The project's end date is tomorrow.

<strong>Question:</strong>
What should the project manager do?

- <strong>Correct:</strong> Delay the final project closure and transition until the required safety certificate is obtained from the government.
- <strong>Distractor 1:</strong> Hand over the system to the operations team with a warning not to use it until the certificate arrives.
- <strong>Distractor 2:</strong> Obtain a "temporary occupancy" permit and close the project, leaving the final certificate as a task for the operations manager.
- <strong>Distractor 3:</strong> Sign off on the project closure and document the missing certificate as a "high-priority risk" for the operations team.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Transition and closure cannot be completed if critical, non-negotiable legal or safety requirements (like a certificate) are missing. |
| **PMI Mindset** | Safety and compliance come first. A project is not "done" if it cannot be legally or safely operated. |
| **The Trap** | Handing over a "risky" or "illegal" system to operations to meet a project deadline. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 30

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile project is ending, and the team is conducting its final retrospective. One team member points out that many of the lessons learned during the project were already known from a similar project that finished last year, but the team didn't know about them.

<strong>Question:</strong>
What should the project manager (or Delivery Lead) do to prevent this in the future?

- <strong>Correct:</strong> Recommend that the PMO improve the accessibility and searchability of the organization's Lessons Learned repository (OPA).
- <strong>Distractor 1:</strong> Require all future project teams to read every single entry in the lessons learned database before starting work.
- <strong>Distractor 2:</strong> Blame the previous project manager for not personally presenting their lessons to the current team.
- <strong>Distractor 3:</strong> Suggest that lessons learned sessions be made optional since they are clearly not being used by the organization.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The value of lessons learned depends on their "reusability" and "searchability." The PM should act as a champion for better knowledge management. |
| **PMI Mindset** | Think about the organization. If the system for sharing knowledge is broken, fix the system. |
| **The Trap** | Increasing the "burden" on teams (e.g., reading every entry) instead of making the information more accessible. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 31

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is reconciling the final budget for a large international project. They find that there is a $50,000 surplus due to favorable exchange rate fluctuations during the last six months of the project.

<strong>Question:</strong>
What should the project manager do with the surplus funds?

- <strong>Correct:</strong> Return the surplus to the project's funding source or the organization's general fund per the financial closure procedures.
- <strong>Distractor 1:</strong> Use the surplus to purchase extra features or equipment for the customer that were originally out of scope.
- <strong>Distractor 2:</strong> Distribute the surplus as performance bonuses to the project team members for finishing under budget.
- <strong>Distractor 3:</strong> Keep the funds in the project account to cover any potential warranty claims that might arise in the next year.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Financial closure requires returning all unspent funds to the appropriate organizational account. |
| **PMI Mindset** | Financial integrity and adherence to organizational policy. Don't use "found money" for unauthorized scope. |
| **The Trap** | Gold plating (adding extra features) just because there is extra money left in the budget. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 32

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile team is being disbanded as their product is transitioned to a "business as usual" maintenance mode. The team members are very close and are sad to be separating. The Project Manager wants to ensure a positive closure for the team.

<strong>Question:</strong>
Which activity BEST supports the "People" side of project closure in this agile context?

- <strong>Correct:</strong> Conduct a final "Future-Spective" where the team discusses how they will apply their new skills in their next assignments.
- <strong>Distractor 1:</strong> Ask the team members to stay in contact via a private messaging app to continue discussing the product's future.
- <strong>Distractor 2:</strong> Request the organization to keep the team together for another project, even if their skills are not a perfect match.
- <strong>Distractor 3:</strong> Give everyone a glowing performance review regardless of their actual contribution to maintain morale.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Closure is a transition for people too. Helping them see the value of their growth (Future-Spective) provides professional closure. |
| **PMI Mindset** | Leadership and emotional intelligence. Acknowledge the team's journey and prepare them for what's next. |
| **The Trap** | Trying to keep the team together against the organization's needs or giving dishonest feedback to avoid "hurt feelings." |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 33

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project manager is closing a project that used a Cost Plus Award Fee (CPAF) contract. The project objectives were met, but the customer's satisfaction with the team's communication was low.

<strong>Question:</strong>
How does this affect the procurement closure process?

- <strong>Correct:</strong> The buyer will conduct a subjective performance evaluation to determine the amount of the award fee to be paid.
- <strong>Distractor 1:</strong> The buyer will withhold the entire final payment until the team improves its communication documentation.
- <strong>Distractor 2:</strong> The project manager must negotiate a 10% reduction in the vendor's fixed fee to compensate for the poor communication.
- <strong>Distractor 3:</strong> The award fee must be paid in full since the primary project objectives were successfully met.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Award fees (CPAF) are subjective and based on the buyer's evaluation of performance areas like communication, not just objective delivery. |
| **PMI Mindset** | Understand the nuances of different contract types during closure. Award fees are at the buyer's discretion. |
| **The Trap** | Assuming that meeting "objectives" automatically guarantees a full award fee. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 34

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
At the end of an agile project, the Product Owner realizes that several valuable user stories were never started because the project ran out of time and budget.

<strong>Question:</strong>
How should these uncompleted stories be handled during project closure?

- <strong>Correct:</strong> Move the uncompleted stories back to the product backlog for consideration in future projects or maintenance releases.
- <strong>Distractor 1:</strong> Delete the uncompleted stories from the backlog to show that the project was 100% successful in its delivery.
- <strong>Distractor 2:</strong> Mark the stories as "Done" with a note that they were deferred, so the project's final velocity looks higher.
- <strong>Distractor 3:</strong> Ask the team to work overtime for one week without pay to finish the remaining stories before closure.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Unfinished agile work is not "lost"; it is returned to the backlog for the organization to prioritize later. |
| **PMI Mindset** | Transparency and value-based backlog management. Don't hide incomplete work. |
| **The Trap** | "Deleting" or "faking" the completion of work to improve the project's appearance. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 35

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is preparing the final project archive. They have 500 gigabytes of data, including every email, chat log, and draft document created during the three-year project.

<strong>Question:</strong>
What is the project manager's MOST important task regarding this data?

- <strong>Correct:</strong> Filter the data to include only the final versions of plans, baselines, key decisions, and approvals to ensure a usable archive.
- <strong>Distractor 1:</strong> Compress the entire 500 gigabytes into a single zip file and upload it to the organization's "Old Projects" folder.
- <strong>Distractor 2:</strong> Delete all emails and chat logs to protect the privacy of the project team members before archiving the technical documents.
- <strong>Distractor 3:</strong> Print out all critical documents and store them in physical binders in the organization's document warehouse.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Archiving is about "usable knowledge," not just "data dumping." The PM must curate the archive for future value. |
| **PMI Mindset** | Be a good steward of information. A 500GB dump of every draft is not helpful for future teams. |
| **The Trap** | Assuming that "archiving everything" is better than being selective and structured. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 36

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile project is being closed. The organization has a policy that all projects must submit a "Variance Analysis Report" as part of the closure package. The agile team has been using burndown charts instead of Earned Value Management (EVM).

<strong>Question:</strong>
How should the project manager fulfill the organization's requirement?

- <strong>Correct:</strong> Translate the team's velocity and burndown data into a summary of planned vs. actual value delivered for the final report.
- <strong>Distractor 1:</strong> Retroactively calculate EVM metrics (CPI, SPI) for every sprint to match the organization's standard report format.
- <strong>Distractor 2:</strong> Inform the PMO that agile projects are exempt from variance analysis because they don't have fixed baselines.
- <strong>Distractor 3:</strong> Create a fake "baseline" based on the final results so that the variance report shows a 0% deviation.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The PM must bridge the gap between agile team data and organizational governance by providing a meaningful translation of performance. |
| **PMI Mindset** | Adapt to organizational governance while respecting the team's "way of working" (agile). |
| **The Trap** | Refusing to provide variance analysis because "it's not agile" ignores the PM's duty to organizational governance. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 37

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
During the final project meeting, the project sponsor expresses disappointment that a specific feature was not included, even though it was formally descoped and signed off on six months ago via a change request.

<strong>Question:</strong>
How should the project manager handle the sponsor's disappointment?

- <strong>Correct:</strong> Politely refer to the approved change request and the final scope statement to show when and why the feature was removed.
- <strong>Distractor 1:</strong> Apologize for the omission and offer to start a new project immediately to add the feature for the sponsor.
- <strong>Distractor 2:</strong> Blame the steering committee for forcing the descope and suggest the sponsor speak with them.
- <strong>Distractor 3:</strong> Re-open the project closure and bring the team back for two weeks to quickly implement the missing feature.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The PM must use the audit trail (approved change requests) to manage stakeholder expectations during closure. |
| **PMI Mindset** | Professionalism and reliance on the formal change control process as the "source of truth." |
| **The Trap** | Re-opening closure or starting new work without following formal initiation/change processes. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 38

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project manager is closing a project that had a significant number of "Near Miss" safety incidents during the predictive construction phase. The hybrid software team had no incidents.

<strong>Question:</strong>
How should this be documented in the Final Project Report?

- <strong>Correct:</strong> Report the total incident rate and include a detailed analysis of the construction safety trends and the corrective actions taken.
- <strong>Distractor 1:</strong> Only report the software team's safety record to make the overall project performance look better for the organization.
- <strong>Distractor 2:</strong> Combine the safety records into a single "project average" to dilute the impact of the construction phase's near misses.
- <strong>Distractor 3:</strong> List the near misses as "Lessons Learned" but exclude them from the official final performance metrics to avoid an audit.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Honest and transparent reporting of all performance metrics, including safety, is a fundamental requirement of project closure. |
| **PMI Mindset** | Integrity and transparency. Hiding safety data is unethical and dangerous for future projects. |
| **The Trap** | "Averaging" or "selective reporting" to mask poor performance in one area of the project. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 39

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile project is being closed. The organization's PMO requires a "Final Quality Audit" report. The team has been using automated testing and peer code reviews for every user story.

<strong>Question:</strong>
What should be the primary content of the Final Quality Audit for this project?

- <strong>Correct:</strong> A summary of the automated test coverage, the final defect density, and the team's adherence to their "Definition of Done."
- <strong>Distractor 1:</strong> A manual re-testing of 10% of the user stories to verify that the automated tests were actually working.
- <strong>Distractor 2:</strong> A list of every single bug that was found and fixed during the entire project lifecycle.
- <strong>Distractor 3:</strong> A signed statement from the Product Owner that the quality of the product was "satisfactory."

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | In agile, quality audit evidence comes from the process (DoD) and the automated metrics (test coverage, defect density). |
| **PMI Mindset** | Use the most relevant data for the methodology. Don't force predictive audit methods onto agile processes. |
| **The Trap** | Trying to perform a manual audit (Distractor 1) when the methodology was based on automated quality gates. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 40

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project manager is closing a project where the relationship between the vendor and the project team became extremely adversarial during the final phase. The vendor's work was correct, but the cooperation was non-existent.

<strong>Question:</strong>
How should the project manager handle the vendor's final performance evaluation?

- <strong>Correct:</strong> Provide an objective evaluation that notes the technical quality was met but explicitly documents the failures in communication and collaboration.
- <strong>Distractor 1:</strong> Give the vendor a "fail" rating for everything to ensure they are never hired by the organization again.
- <strong>Distractor 2:</strong> Give the vendor a "perfect" rating to avoid a potential lawsuit or further conflict during the closure process.
- <strong>Distractor 3:</strong> Skip the vendor evaluation entirely to avoid having to interact with the vendor one last time.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Vendor evaluations must be objective and cover all aspects of performance, including both technical delivery and soft skills. |
| **PMI Mindset** | Objectivity and honesty. Provide the organization with an accurate picture of what it's like to work with the vendor. |
| **The Trap** | Letting personal feelings (adversarial relationship) bias the technical part of the evaluation. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 41

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile team is closing its project. The team members suggest that instead of a traditional lessons learned register, they should create a series of "Quick Start" videos for future teams.

<strong>Question:</strong>
How should the project manager (or Delivery Lead) respond to this?

- <strong>Correct:</strong> Support the idea as an innovative way to transfer knowledge, provided the videos are properly indexed and stored in the OPA library.
- <strong>Distractor 1:</strong> Reject the idea and insist on a standard written register, as videos are not an official project artifact in the PMBOK.
- <strong>Distractor 2:</strong> Allow the videos but tell the team they must also write a 200-page manual to satisfy the auditors.
- <strong>Distractor 3:</strong> Suggest that the team post the videos on a public social media platform to help the wider agile community.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Knowledge transfer can take many forms. The key is that the information is captured, accessible, and useful to the organization. |
| **PMI Mindset** | Flexibility and focus on value. If videos are more effective than a text document, use videos. |
| **The Trap** | Being rigid about "official artifacts" and missing an opportunity for more effective knowledge transfer. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 42

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is closing a project in a highly regulated industry. They find that some of the final signatures on the quality reports are electronic but the organization's current policy only officially recognizes "wet" (ink) signatures.

<strong>Question:</strong>
What should the project manager do?

- <strong>Correct:</strong> Follow the organization's current policy and obtain wet signatures, while simultaneously recommending a policy update for future projects.
- <strong>Distractor 1:</strong> Proceed with the electronic signatures, as "wet" signatures are obsolete in the modern business environment.
- <strong>Distractor 2:</strong> Ask the legal department to sign a waiver for this project only so the closure can be finished on time.
- <strong>Distractor 3:</strong> Use a digital image of a wet signature and paste it onto the documents to satisfy the policy requirement.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Governance and policy must be followed as they exist. The PM cannot unilaterally decide to ignore a compliance policy. |
| **PMI Mindset** | Compliance and continuous improvement. Follow the rule, but work to change the rule if it's outdated. |
| **The Trap** | Using "workarounds" (Distractor 3) that could be considered fraudulent or legally invalid during an audit. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 43

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile project is being closed, and the Project Manager needs to report the "Final Return on Investment (ROI)." The product is live, but it has only been generating revenue for two weeks.

<strong>Question:</strong>
How should the PM report the ROI at closure?

- <strong>Correct:</strong> Report the projected ROI based on the first two weeks of data and the business case assumptions, and hand off the tracking to the Product Owner.
- <strong>Distractor 1:</strong> Wait another six months to close the project so that the actual ROI can be calculated with more data.
- <strong>Distractor 2:</strong> State that the ROI is currently 100% since all the development costs have already been spent and the revenue is just starting.
- <strong>Distractor 3:</strong> Leave the ROI section blank because it's impossible to calculate accurately at the time of project closure.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Project closure usually happens before full ROI is realized. The PM reports the "projected" value and hands over the "actual" tracking. |
| **PMI Mindset** | Value delivery tracking. The PM starts the measurement process and hands the "baton" to operations. |
| **The Trap** | Delaying closure (Distractor 1) to wait for results that are naturally post-project. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 44

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project manager is closing a hybrid project. The agile team used a third-party software library that requires an annual subscription. The predictive infrastructure team used hardware that has a three-year maintenance contract.

<strong>Question:</strong>
What is the project manager's responsibility regarding these recurring costs during closure?

- <strong>Correct:</strong> Identify all recurring costs and formally transition the ownership and budget responsibility for these contracts to the operations department.
- <strong>Distractor 1:</strong> Use the remaining project budget to pay for the next five years of subscriptions and maintenance to save the operations team money.
- <strong>Distractor 2:</strong> Cancel the subscriptions and maintenance contracts to ensure the project finishes with a "clean" financial record.
- <strong>Distractor 3:</strong> Tell the operations manager that they should have planned for these costs in their own departmental budget.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Handoff includes "financial readiness." The operations team must know about and be prepared to pay for recurring costs. |
| **PMI Mindset** | Sustainable operations. Ensure the product can be supported and maintained long-term after the project is gone. |
| **The Trap** | Canceling necessary contracts (Distractor 2) just to "close" the project financials. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 45

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile project is closing, and the team is writing the final report. One team member suggests that the "Final Report" is a waste of time and that the "Product" speaks for itself.

<strong>Question:</strong>
How should the Project Manager explain the value of the Final Report?

- <strong>Correct:</strong> It provides a historical summary of the project's performance, objectives, and success for stakeholders who were not involved in the day-to-day sprints.
- <strong>Distractor 1:</strong> It is a mandatory requirement from the PMO that must be completed to get the project manager's final bonus.
- <strong>Distractor 2:</strong> It serves as a legal document that protects the team members from being sued if the product fails in the future.
- <strong>Distractor 3:</strong> It is the only place where the project's final velocity is officially recorded for the organization's records.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The Final Report is for the "outside" world and for "the future." It summarizes value and performance for the organization's leadership. |
| **PMI Mindset** | Communication and governance. Don't assume everyone knows what the team did; document it for the record. |
| **The Trap** | Seeing the final report as just "red tape" or a personal benefit for the PM. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 46

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is closing a project and finds that one of the risks identified in the risk register is still "Open" because the event never occurred.

<strong>Question:</strong>
What should the project manager do with this risk?

- <strong>Correct:</strong> Close the risk in the risk register and document in the final report that the risk was successfully mitigated or simply did not materialize.
- <strong>Distractor 1:</strong> Transfer the risk to the operations department so they can continue to monitor it for the next five years.
- <strong>Distractor 2:</strong> Delete the risk from the register to show that the project had a lower risk profile than originally thought.
- <strong>Distractor 3:</strong> Leave it open in the register so that future project managers can see that it was a real concern.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Project risks end when the project ends. If the risk hasn't happened, it is "closed." Only operational risks are transferred. |
| **PMI Mindset** | Risk management lifecycle. Risks are tied to project objectives; once objectives are met, project risks are retired. |
| **The Trap** | Transferring "project-specific" risks to operations when they are no longer relevant post-closure. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 47

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
An agile team is conducting a final retrospective. They realize that they used a new collaboration tool that significantly increased their productivity, but this tool is not on the organization's "Approved" list.

<strong>Question:</strong>
How should this be handled at closure?

- <strong>Correct:</strong> Document the productivity benefits of the tool in the lessons learned and recommend that the PMO evaluate it for organization-wide approval.
- <strong>Distractor 1:</strong> Hide the use of the tool from the final report to avoid getting the team in trouble for using unapproved software.
- <strong>Distractor 2:</strong> Uninstall the tool from all computers and pretend it was never used to ensure the final audit passes.
- <strong>Distractor 3:</strong> Demand that the PMO approve the tool immediately because the team's success proves it is better than the current standards.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Innovative "shadow IT" that provides value should be surfaced and moved into the formal governance process via lessons learned. |
| **PMI Mindset** | Honesty and organizational improvement. Use the team's "guerrilla" success to help the whole company improve. |
| **The Trap** | Hiding valuable process improvements out of fear of "breaking the rules." |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 48

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Hybrid

<strong>Scenario:</strong>
A project manager is closing a project that had a significant amount of "Knowledge Work" that is difficult to document. The team suggests that the best way to transfer knowledge is to have two team members stay with the operations team for a month.

<strong>Question:</strong>
How should the project manager handle this?

- <strong>Correct:</strong> Review the budget and resource plan to see if a "transitional support period" can be funded and authorized before closure.
- <strong>Distractor 1:</strong> Tell the team members they must volunteer their own time to help the operations team after their official project contract ends.
- <strong>Distractor 2:</strong> Reject the idea because "people transfer" is not a standard part of the project closure process in the organization's handbook.
- <strong>Distractor 3:</strong> Simply allow the team members to stay with operations and don't tell their new project managers where they are.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | "Shadowing" or "transitional support" is a valid knowledge transfer method, but it must be formally planned and funded. |
| **PMI Mindset** | Resource management and collaboration. Look for the formal way to make a good idea happen. |
| **The Trap** | Allowing "ghosting" or "volunteering" (Distractor 1 or 4) which violates labor laws and project accounting. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 49

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Agile

<strong>Scenario:</strong>
At the end of an agile project, the Product Owner wants to keep a small "core team" together to work on minor bug fixes and small enhancements for the next six months.

<strong>Question:</strong>
What should the Project Manager's response be?

- <strong>Correct:</strong> Explain that this work is "Maintenance" or "Business as Usual" and should be managed by a different organizational structure, not as a continuation of the project.
- <strong>Distractor 1:</strong> Agree to the request and keep the project "Open" for another six months to accommodate the small enhancements.
- <strong>Distractor 2:</strong> Tell the Product Owner that they should just hire the team members as personal consultants to bypass the project closure process.
- <strong>Distractor 3:</strong> Suggest that the team members continue working on the product in their spare time while they are assigned to other projects.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Projects are temporary. Ongoing work is operations. The PM must maintain the boundary between the two to ensure proper governance. |
| **PMI Mindset** | Definition of a project. Don't let projects "drift" into operations; close the project and transition the work. |
| **The Trap** | Allowing "project creep" into the operational phase to satisfy a Product Owner. |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

### Question 50

<strong>Enabler:</strong> Conclude activities to close the project | <strong>Methodology:</strong> Predictive

<strong>Scenario:</strong>
A project manager is holding the final project "Post-Mortem" or celebration. The project was technically a failure—it was canceled early and didn't deliver the main objective. The team is very demotivated.

<strong>Question:</strong>
What is the MOST professional way for the PM to conduct this final session?

- <strong>Correct:</strong> Focus the session on the value of the lessons learned and the professional growth the team members achieved, despite the project's cancellation.
- <strong>Distractor 1:</strong> Cancel the celebration and the session because there is nothing to celebrate and the team is too upset.
- <strong>Distractor 2:</strong> Use the session to identify the "failure points" and assign responsibility to the specific people or departments that caused the cancellation.
- <strong>Distractor 3:</strong> Tell the team that the failure was not their fault and that the organization's leadership is to blame for the poor strategy.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Even "failed" projects have value in the form of knowledge. The PM's job is to harvest that value and support the team's transition. |
| **PMI Mindset** | Leadership and resilience. Every project is a learning opportunity. Celebrate the effort and the learning, even if the objective wasn't met. |
| **The Trap** | Turning the final session into a "blame game" (Distractor 2) or being dismissive of the team's effort (Distractor 1). |
| **Source Link** | `guide/09-monitoring/project-closure.md` |

</details>

---

##  Database Stats

- <strong>Total Questions:</strong> 50
- <strong>Correct Answer Length Average:</strong> 18 words
- <strong>Distractor Length Average:</strong> 19 words
- <strong>Methodology Split:</strong>
  - <strong>Predictive:</strong> 40% (20 questions)
  - <strong>Agile:</strong> 36% (18 questions)
  - <strong>Hybrid:</strong> 24% (12 questions)
- <strong>Action Split:</strong>
  - **Analyze/Assess:** 52% (26 questions)
  - **Execute/Implement:** 48% (24 questions)

---

##  Key Takeaways: Closure Pro-Tips

1. <strong>Closure is Mandatory:</strong> Even if a project is canceled or terminated early, you must perform administrative closure (archive records, harvest lessons, close contracts).
2. <strong>Acceptance is Objective:</strong> Refer to the documented **Acceptance Criteria** and **Definition of Done** when stakeholders refuse sign-off. If the criteria are met, they are contractually obligated to accept.
3. <strong>Value Transfer:</strong> The Project Manager's role ends at handoff, but they must ensure **Benefits Handoff** is complete by assigning ownership of post-project metrics tracking to the business or operations.
4. <strong>No Open Claims:</strong> You cannot "cleanly" close procurements with open claims. They must be resolved or formally transferred to a permanent department (Legal/Finance).
5. <strong>OPAs are the Legacy:</strong> The most valuable output of closure for the organization is the **Lessons Learned Register**. Store it in a searchable, accessible repository (OPA library).
6. <strong>Release with Respect:</strong> Formal resource release includes providing performance feedback to functional managers and recognizing the team's effort, which reinforces organizational culture.