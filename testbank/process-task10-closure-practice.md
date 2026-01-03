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

## 📊 Topic Summary Table

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

**Enabler:** Obtain project stakeholder approval | **Methodology:** Predictive

**Scenario:**
The project manager has completed all deliverables for a multi-year infrastructure project. During the final walkthrough, the primary stakeholder refuses to sign the formal acceptance document, citing a minor aesthetic misalignment in the lobby that was not specified in the original requirements or the quality management plan. The stakeholder insists this must be fixed before closure.

**Question:**
What is the BEST action for the project manager to take?

- **Correct:** Reference the documented acceptance criteria and explain that the current deliverables meet all agreed-upon requirements.
- **Distractor 1:** Instruct the team to perform the aesthetic fix immediately to ensure customer satisfaction and secure the sign-off.
- **Distractor 2:** Log the aesthetic issue as a defect in the issue log and delay the project closure until the steering committee reviews it.
- **Distractor 3:** Negotiate a partial payment with the stakeholder to compensate for the misalignment and close the project.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project is being closed after a successful deployment. The project manager discovers an outstanding claim from a vendor regarding extra work performed during an emergency system outage three months ago. The vendor and the procurement department have not yet reached an agreement on the final settlement amount.

**Question:**
How should the project manager handle this situation?

- **Correct:** Document the claim fully in the procurement records and formally transfer the responsibility for its resolution to the legal or finance department.
- **Distractor 1:** Use the remaining project contingency budget to pay the vendor's claim in full to avoid delaying the final project closure report.
- **Distractor 2:** Close the project administratively and mark the procurement as complete, assuming the finance department will handle it later.
- **Distractor 3:** Refuse to close the project or release the team until the vendor and procurement department sign a final settlement agreement.

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

**Enabler:** Validate readiness for transition | **Methodology:** Hybrid

**Scenario:**
A hybrid project is transitioning a new digital banking platform to the operations team. The software development followed an agile approach, while the infrastructure was predictive. The operations manager informs the project manager that their staff is not yet trained on the new cloud monitoring tools included in the release.

**Question:**
What should the project manager do FIRST?

- **Correct:** Review the transition plan to confirm the agreed-upon training requirements and delivery schedule for the operations staff.
- **Distractor 1:** Postpone the go-live date by two weeks to allow the project team to conduct emergency training sessions for the operations staff.
- **Distractor 2:** Update the final project report to indicate that the transition was successful despite the lack of operational readiness.
- **Distractor 3:** Transfer the project's remaining training budget to the operations department so they can hire an external trainer.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
The organization has decided to cancel an agile project mid-way through the fourth release because the market conditions have made the product obsolete. The product owner has instructed the team to stop all development work immediately.

**Question:**
What is the most important responsibility of the project manager (or Delivery Lead) at this point?

- **Correct:** Ensure the team conducts a final retrospective and archives the completed code and documentation for future reference.
- **Distractor 1:** Direct the team to immediately begin working on the next highest-priority project in the organization's portfolio.
- **Distractor 2:** Request the sponsor to reconsider the cancellation based on the "sunk cost" of the resources already invested.
- **Distractor 3:** Finalize the remaining items in the product backlog to ensure the product has at least some functional value.

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

**Enabler:** Determine criteria to successfully close | **Methodology:** Predictive

**Scenario:**
A project manager is defining the "Definition of Done" for a large construction project phase. One of the key stakeholders suggests that the project should only be considered closed after the first year of building occupancy to ensure all systems are functioning as expected.

**Question:**
How should the project manager respond to this suggestion?

- **Correct:** Explain that the project closure focuses on handoff and transition, and long-term performance monitoring is typically handled during the warranty or operations phase.
- **Distractor 1:** Agree to extend the project timeline by one year to accommodate the stakeholder's request for long-term monitoring.
- **Distractor 2:** Update the project charter to include "one-year post-occupancy performance" as a primary project success criterion.
- **Distractor 3:** Inform the stakeholder that project closure is strictly an administrative step that does not involve deliverable performance.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
During a lessons learned session for a recently completed project, the team identifies that the lack of clear requirements led to significant rework. Some team members are hesitant to document this, fearing it will reflect poorly on the project's performance evaluation.

**Question:**
How should the project manager facilitate this situation?

- **Correct:** Reiterate that the goal of the session is organizational improvement and ensure the lesson is recorded with actionable recommendations for future projects.
- **Distractor 1:** Allow the team to omit the negative finding from the official register to maintain a positive final report for the sponsor.
- **Distractor 2:** Document the finding in a private memo to the PMO instead of the public lessons learned register to protect the team's reputation.
- **Distractor 3:** Assign responsibility for the rework to specific team members in the register to ensure accountability for the failure.

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

**Enabler:** Validate readiness for transition | **Methodology:** Predictive

**Scenario:**
A project to implement a new enterprise resource planning (ERP) system is in the closure phase. The project manager is preparing the handoff package for the IT support team. The support manager refuses to accept the system, stating they don't have the headcount to manage the additional support tickets.

**Question:**
What should the project manager do?

- **Correct:** Review the project charter and resource management plan to determine if operational support staffing was included in the project's scope.
- **Distractor 1:** Request the project sponsor to provide additional funding to hire permanent support staff for the IT department.
- **Distractor 2:** Delay the project closure until the IT department successfully hires and trains new support personnel.
- **Distractor 3:** Hand over the system documentation to the IT manager and proceed with administrative closure regardless of their refusal.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Hybrid

**Scenario:**
A project is closing, and the project manager needs to calculate the final fee for a vendor under a Cost Plus Incentive Fee (CPIF) contract. The target cost was $200,000, the target fee was $20,000, and the share ratio is 80/20 (buyer/seller). The actual cost incurred by the vendor was $180,000.

**Question:**
What is the final fee that should be paid to the vendor?

- **Correct:** $24,000
- **Distractor 1:** $20,000
- **Distractor 2:** $16,000
- **Distractor 3:** $22,000

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

**Enabler:** Obtain project stakeholder approval | **Methodology:** Agile

**Scenario:**
An agile team has finished the final sprint for a new mobile app. The Product Owner has accepted all user stories in the sprint review. However, the compliance department states that the project cannot be "closed" because the data privacy audit documentation is incomplete.

**Question:**
How should the project manager handle this?

- **Correct:** Work with the team to complete the required compliance documentation before finalizing the product's administrative closure.
- **Distractor 1:** Inform the compliance department that in agile, the Product Owner's acceptance of stories is the only requirement for closure.
- **Distractor 2:** Release the development team to their next project and personally complete the audit documentation to save time.
- **Distractor 3:** Archive the project as "complete" and list the missing documentation as a "risk" in the final project report.

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

**Enabler:** Validate readiness for transition | **Methodology:** Predictive

**Scenario:**
A project manager is handing over a new manufacturing line to the operations manager. The operations manager points out that while the machinery works, the user manuals are only available in a language that 40% of the factory workers do not speak. This requirement was not in the original scope.

**Question:**
What is the BEST way for the project manager to address this?

- **Correct:** Document the feedback and submit a change request to translate the manuals, or add it to the transition punch list if agreed by the sponsor.
- **Distractor 1:** Tell the operations manager that the project met the original scope and they are responsible for their own translations.
- **Distractor 2:** Use the project's management reserve to quickly hire a translation service to avoid a delay in sign-off.
- **Distractor 3:** Instruct the project's bilingual team members to spend their final week translating the manuals for the operations team.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project has reached its end date. The project manager has successfully handed over the deliverables, but two key team members have already left for a new assignment before the final retrospective could be held. The remaining team members feel the retrospective is now unnecessary.

**Question:**
What should the project manager do?

- **Correct:** Conduct the retrospective with the remaining team members and attempt to gather input from the departed members via email or short interviews.
- **Distractor 1:** Cancel the retrospective and use the notes from the previous phase-end retrospectives to create the final lessons learned report.
- **Distractor 2:** File a formal complaint with the functional managers of the departed team members for leaving before the project was administratively closed.
- **Distractor 3:** Skip the retrospective and focus on archiving the financial records, as these are more important for the final audit.

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

**Enabler:** Determine criteria to successfully close | **Methodology:** Hybrid

**Scenario:**
In a hybrid project, the "Definition of Done" for the final release includes a requirement for "No critical bugs and less than 10 minor bugs." Upon final testing, the team finds 1 critical bug and 15 minor bugs. The business owner wants to go live anyway to meet a marketing deadline.

**Question:**
What should the project manager do?

- **Correct:** Document the deviation from the acceptance criteria and seek formal approval from the project sponsor and governance board to proceed with the release.
- **Distractor 1:** Allow the go-live to proceed as requested by the business owner, as they have the ultimate authority over the product.
- **Distractor 2:** Update the "Definition of Done" to allow for 1 critical bug and 20 minor bugs so that the project can be closed without an exception.
- **Distractor 3:** Refuse to release the product until the team fixes the critical bug and at least 6 minor bugs to meet the original criteria.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
The project manager is preparing the final project report for a software implementation. The project was completed 10% over budget but 5% ahead of schedule. The sponsor is pleased with the result but asks why the variance occurred.

**Question:**
Where should the project manager find the objective explanation for these variances?

- **Correct:** In the project's change log and the variance analysis records maintained throughout the project.
- **Distractor 1:** By interviewing the team members to get their qualitative opinions on the project's performance.
- **Distractor 2:** In the original business case and the project charter developed during the initiation phase.
- **Distractor 3:** In the lessons learned register from the final retrospective session with the stakeholders.

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

**Enabler:** Validate readiness for transition | **Methodology:** Hybrid

**Scenario:**
A project manager is closing a project that developed a new AI-driven customer service bot. The bot is live, but the "Benefits Handoff" plan requires the Marketing Manager to track customer satisfaction for six months post-closure. The Marketing Manager claims they don't have the tools to perform this tracking.

**Question:**
What should the project manager's role be in this situation?

- **Correct:** Ensure the tools or data sources for benefits measurement are provided as part of the project's final deliverables before closure.
- **Distractor 1:** Agree to remain on the project for an additional six months to personally track the benefits for the Marketing Manager.
- **Distractor 2:** Inform the project sponsor that the benefits cannot be tracked and therefore the project should be considered a failure.
- **Distractor 3:** Hand over the project as is, as benefits tracking is an operational activity that the PM is not responsible for.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile project is being retired. The team has been working in two-week sprints for over a year. The Project Manager (or Delivery Lead) is now finalizing the "Administrative Closure."

**Question:**
Which action is MOST effective for this knowledge transfer?

- **Correct:** Create a final knowledge transfer matrix and conduct recorded walkthroughs of the system's architecture and configuration with the support team.
- **Distractor 1:** Require all team members to write a detailed, 50-page technical manual of every feature they developed during the year.
- **Distractor 2:** Host a celebratory party where the team can informally discuss their experiences with the incoming maintenance team.
- **Distractor 3:** Simply archive the product backlog and the sprint retrospective notes in the organization's central repository.

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

**Enabler:** Obtain project stakeholder approval | **Methodology:** Predictive

**Scenario:**
A project manager is seeking final sign-off for a government-funded social program. One of the key community leaders refuses to sign, stating that the program did not reach enough participants in a specific rural area, although the geographic reach was never specified as a success criterion in the charter.

**Question:**
What is the FIRST thing the project manager should do?

- **Correct:** Meet with the community leader to understand the impact of the participation gap and review the project's actual performance against the charter's objectives.
- **Distractor 1:** Ask the project sponsor to use their political influence to pressure the community leader into signing the document.
- **Distractor 2:** Immediately launch a small sub-project to address the participation gap in the rural area to secure the sign-off.
- **Distractor 3:** Document the refusal in the final report and proceed with closure, as the community leader's objection is technically out of scope.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project manager is conducting the final procurement audit for a project that used multiple vendors. They find that one vendor consistently delivered late, but their work was eventually accepted and paid for in full.

**Question:**
What should the project manager do with this information during closure?

- **Correct:** Include a detailed vendor performance evaluation in the procurement closure records to inform future vendor selection.
- **Distractor 1:** Request a partial refund from the vendor for the delays before formally closing the contract.
- **Distractor 2:** Keep this information confidential within the project team to avoid damaging the vendor's reputation in the industry.
- **Distractor 3:** Blacklist the vendor from all future project work in the organization's central procurement database.

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

**Enabler:** Determine criteria to successfully close | **Methodology:** Hybrid

**Scenario:**
A project manager is closing a phase of a hybrid project. The agile portion of the phase is "done" per the team's Definition of Done, but the predictive portion's quality audit found three minor non-conformances that do not affect the system's functionality.

**Question:**
What is the BEST way to handle these non-conformances during phase closure?

- **Correct:** Document the non-conformances as a "punch list" to be addressed in the next phase and obtain stakeholder agreement for conditional closure.
- **Distractor 1:** Delay the closure of the entire phase until the three non-conformances are fully remediated by the team.
- **Distractor 2:** Ignore the non-conformances since they don't affect functionality and close the phase as successful.
- **Distractor 3:** Re-classify the predictive work as agile so that the non-conformances can be treated as backlog items for the next sprint.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project manager is closing a project that was highly successful and finished under budget. The project manager wants to ensure the team members receive proper recognition before they return to their functional departments.

**Question:**
Which action is MOST appropriate as part of the formal resource release process?

- **Correct:** Provide formal performance feedback to each team member's functional manager and organize a project celebration event.
- **Distractor 1:** Offer the team members a financial bonus from the remaining project budget as a token of appreciation.
- **Distractor 2:** Recommend all team members for immediate promotion within the organization based on the project's success.
- **Distractor 3:** Allow the team members to keep the project-purchased equipment (e.g., laptops) as a reward for their hard work.

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

**Enabler:** Validate readiness for transition | **Methodology:** Hybrid

**Scenario:**
A hybrid project is transitioning a new customer portal to the operations team. The project manager has provided the user guides and the technical architecture diagrams. The operations manager asks for the "Known Issues" log from the testing phase.

**Question:**
Why is this document critical for the transition?

- **Correct:** It allows the support team to troubleshoot common user problems and understand existing system limitations immediately after go-live.
- **Distractor 1:** It provides a list of team members who should be held accountable for any failures that occur after the handoff.
- **Distractor 2:** It serves as a justification for the operations team to request more budget for post-launch bug fixing.
- **Distractor 3:** It proves that the project manager met the quality standards by documenting every single error that occurred during development.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile project has reached the end of its funded lifecycle. The team has transitioned the product to a maintenance group. The Project Manager (or Delivery Lead) is now finalizing the "Administrative Closure."

**Question:**
Which of the following must be updated in the Organizational Process Assets (OPAs) for this agile project?

- **Correct:** The final lessons learned and the indexed repository of all sprint retrospective outcomes.
- **Distractor 1:** The original project management plan and the detailed WBS that were created during the initiation phase.
- **Distractor 2:** The final individual performance appraisals for every team member who participated in the sprints.
- **Distractor 3:** The list of all rejected user stories that the Product Owner decided were not valuable enough to implement.

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

**Enabler:** Determine criteria to successfully close | **Methodology:** Predictive

**Scenario:**
A project manager is working on the closure phase of a project with a very strict regulatory compliance requirement. The project manager realizes that one of the required environmental impact reports was signed by a junior engineer instead of the certified lead engineer, which is a violation of the local law.

**Question:**
What is the MOST appropriate action for the project manager to take before closing the project?

- **Correct:** Obtain the required signature from the certified lead engineer, even if it delays the formal closure of the project.
- **Distractor 1:** Document the oversight in the final report but proceed with closure to meet the project's scheduled end date.
- **Distractor 2:** Ask the junior engineer to backdate their certification status to cover the date the report was originally signed.
- **Distractor 3:** Assume that because the report was technically accurate, the signature discrepancy will not be noticed during an audit.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Hybrid

**Scenario:**
A project manager is closing a hybrid project. They are using the "Final Report" to summarize the project's success. The sponsor wants to know if the project was "worth the investment."

**Question:**
Which section of the Final Report directly addresses the sponsor's question?

- **Correct:** The Benefits Handoff section, which outlines the expected ROI and assigns ownership for post-closure measurement.
- **Distractor 1:** The Schedule Performance section, which shows that the project finished two weeks ahead of the baseline.
- **Distractor 2:** The Lessons Learned section, which describes how the team improved their velocity over time.
- **Distractor 3:** The Resource Release section, which lists the cost savings from releasing the team early.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project manager is closing a project and needs to archive all project artifacts. The organization uses a cloud-based Project Management Information System (PMIS).

**Question:**
What is the PRIMARY purpose of archiving these artifacts?

- **Correct:** To provide a searchable historical record for future project managers and to support organizational audits.
- **Distractor 1:** To ensure that the current project team members cannot access or change the data once the project is finished.
- **Distractor 2:** To satisfy the IT department's storage quota requirements by moving active files to a "read-only" status.
- **Distractor 3:** To prove to the project sponsor that the project manager followed every step of the project management plan.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
In an agile project, the "Definition of Done" was updated several times during the project's lifecycle to improve quality. During the final retrospective, the team discusses whether these changes were effective.

**Question:**
How should this discussion be captured in the project's closure documentation?

- **Correct:** Document the evolution of the Definition of Done and its impact on quality as a repeatable process improvement for other teams.
- **Distractor 1:** Only document the final version of the Definition of Done, as the previous versions are now irrelevant.
- **Distractor 2:** Record the names of the team members who suggested the changes to ensure they receive credit in their performance reviews.
- **Distractor 3:** Keep the discussion private to the team and only report the final project velocity to the PMO.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile project is closing after the final release. The Product Owner is satisfied, but the team is worried about "zombie" feature flags that are still present in the production code. They believe these could cause issues once the project team is disbanded.

**Question:**
What is the BEST action for the project manager to take?

- **Correct:** Ensure the team identifies and removes or finalizes all temporary feature flags as part of the technical debt cleanup before closure.
- **Distractor 1:** Document the feature flags in the "Known Issues" log and hand them over to the maintenance team to handle later.
- **Distractor 2:** Release the team and inform the maintenance group that the feature flags are a permanent part of the system architecture.
- **Distractor 3:** Conduct an emergency sprint to convert all feature flags into permanent configuration settings in the database.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Hybrid

**Scenario:**
A project manager is closing a hybrid project. The final project report shows a high number of defects were found during the user acceptance testing (UAT) phase, which was predictive, compared to the development sprints, which were agile.

**Question:**
How should this be addressed in the final lessons learned session?

- **Correct:** Analyze the root cause of the defect escape rate from agile sprints to predictive UAT and document improvements for the "Definition of Done."
- **Distractor 1:** Blame the agile team for not testing enough during the sprints and recommend more predictive testing in future projects.
- **Distractor 2:** Conclude that hybrid methodologies are inherently flawed and recommend using only predictive methods for high-stakes projects.
- **Distractor 3:** Record the defect count as a successful metric since all defects were eventually found before the final project closure.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project is being closed early due to a strategic realignment. The project manager has started the administrative closure, but the project sponsor asks if they can skip the final procurement audit since the vendor was a long-time partner and the work was only 30% complete.

**Question:**
What is the project manager's MOST appropriate response?

- **Correct:** Explain that a final procurement audit is a mandatory closure activity to ensure all obligations are met and to document vendor performance.
- **Distractor 1:** Agree to skip the audit to save time and resources, provided the vendor signs a waiver of all future claims.
- **Distractor 2:** Conduct a "mini-audit" that only looks at the invoices and ignore the quality of the deliverables provided so far.
- **Distractor 3:** Delegate the audit to the procurement department and proceed with closing the project records immediately.

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

**Enabler:** Validate readiness for transition | **Methodology:** Hybrid

**Scenario:**
A project manager is handing over a new automated warehouse system. The operations team is ready, but the local government has not yet issued the final safety certificate required for full occupancy. The project's end date is tomorrow.

**Question:**
What should the project manager do?

- **Correct:** Delay the final project closure and transition until the required safety certificate is obtained from the government.
- **Distractor 1:** Hand over the system to the operations team with a warning not to use it until the certificate arrives.
- **Distractor 2:** Obtain a "temporary occupancy" permit and close the project, leaving the final certificate as a task for the operations manager.
- **Distractor 3:** Sign off on the project closure and document the missing certificate as a "high-priority risk" for the operations team.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile project is ending, and the team is conducting its final retrospective. One team member points out that many of the lessons learned during the project were already known from a similar project that finished last year, but the team didn't know about them.

**Question:**
What should the project manager (or Delivery Lead) do to prevent this in the future?

- **Correct:** Recommend that the PMO improve the accessibility and searchability of the organization's Lessons Learned repository (OPA).
- **Distractor 1:** Require all future project teams to read every single entry in the lessons learned database before starting work.
- **Distractor 2:** Blame the previous project manager for not personally presenting their lessons to the current team.
- **Distractor 3:** Suggest that lessons learned sessions be made optional since they are clearly not being used by the organization.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project manager is reconciling the final budget for a large international project. They find that there is a $50,000 surplus due to favorable exchange rate fluctuations during the last six months of the project.

**Question:**
What should the project manager do with the surplus funds?

- **Correct:** Return the surplus to the project's funding source or the organization's general fund per the financial closure procedures.
- **Distractor 1:** Use the surplus to purchase extra features or equipment for the customer that were originally out of scope.
- **Distractor 2:** Distribute the surplus as performance bonuses to the project team members for finishing under budget.
- **Distractor 3:** Keep the funds in the project account to cover any potential warranty claims that might arise in the next year.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile team is being disbanded as their product is transitioned to a "business as usual" maintenance mode. The team members are very close and are sad to be separating. The Project Manager wants to ensure a positive closure for the team.

**Question:**
Which activity BEST supports the "People" side of project closure in this agile context?

- **Correct:** Conduct a final "Future-Spective" where the team discusses how they will apply their new skills in their next assignments.
- **Distractor 1:** Ask the team members to stay in contact via a private messaging app to continue discussing the product's future.
- **Distractor 2:** Request the organization to keep the team together for another project, even if their skills are not a perfect match.
- **Distractor 3:** Give everyone a glowing performance review regardless of their actual contribution to maintain morale.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Hybrid

**Scenario:**
A project manager is closing a project that used a Cost Plus Award Fee (CPAF) contract. The project objectives were met, but the customer's satisfaction with the team's communication was low.

**Question:**
How does this affect the procurement closure process?

- **Correct:** The buyer will conduct a subjective performance evaluation to determine the amount of the award fee to be paid.
- **Distractor 1:** The buyer will withhold the entire final payment until the team improves its communication documentation.
- **Distractor 2:** The project manager must negotiate a 10% reduction in the vendor's fixed fee to compensate for the poor communication.
- **Distractor 3:** The award fee must be paid in full since the primary project objectives were successfully met.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
At the end of an agile project, the Product Owner realizes that several valuable user stories were never started because the project ran out of time and budget.

**Question:**
How should these uncompleted stories be handled during project closure?

- **Correct:** Move the uncompleted stories back to the product backlog for consideration in future projects or maintenance releases.
- **Distractor 1:** Delete the uncompleted stories from the backlog to show that the project was 100% successful in its delivery.
- **Distractor 2:** Mark the stories as "Done" with a note that they were deferred, so the project's final velocity looks higher.
- **Distractor 3:** Ask the team to work overtime for one week without pay to finish the remaining stories before closure.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project manager is preparing the final project archive. They have 500 gigabytes of data, including every email, chat log, and draft document created during the three-year project.

**Question:**
What is the project manager's MOST important task regarding this data?

- **Correct:** Filter the data to include only the final versions of plans, baselines, key decisions, and approvals to ensure a usable archive.
- **Distractor 1:** Compress the entire 500 gigabytes into a single zip file and upload it to the organization's "Old Projects" folder.
- **Distractor 2:** Delete all emails and chat logs to protect the privacy of the project team members before archiving the technical documents.
- **Distractor 3:** Print out all critical documents and store them in physical binders in the organization's document warehouse.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile project is being closed. The organization has a policy that all projects must submit a "Variance Analysis Report" as part of the closure package. The agile team has been using burndown charts instead of Earned Value Management (EVM).

**Question:**
How should the project manager fulfill the organization's requirement?

- **Correct:** Translate the team's velocity and burndown data into a summary of planned vs. actual value delivered for the final report.
- **Distractor 1:** Retroactively calculate EVM metrics (CPI, SPI) for every sprint to match the organization's standard report format.
- **Distractor 2:** Inform the PMO that agile projects are exempt from variance analysis because they don't have fixed baselines.
- **Distractor 3:** Create a fake "baseline" based on the final results so that the variance report shows a 0% deviation.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
During the final project meeting, the project sponsor expresses disappointment that a specific feature was not included, even though it was formally descoped and signed off on six months ago via a change request.

**Question:**
How should the project manager handle the sponsor's disappointment?

- **Correct:** Politely refer to the approved change request and the final scope statement to show when and why the feature was removed.
- **Distractor 1:** Apologize for the omission and offer to start a new project immediately to add the feature for the sponsor.
- **Distractor 2:** Blame the steering committee for forcing the descope and suggest the sponsor speak with them.
- **Distractor 3:** Re-open the project closure and bring the team back for two weeks to quickly implement the missing feature.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Hybrid

**Scenario:**
A project manager is closing a project that had a significant number of "Near Miss" safety incidents during the predictive construction phase. The hybrid software team had no incidents.

**Question:**
How should this be documented in the Final Project Report?

- **Correct:** Report the total incident rate and include a detailed analysis of the construction safety trends and the corrective actions taken.
- **Distractor 1:** Only report the software team's safety record to make the overall project performance look better for the organization.
- **Distractor 2:** Combine the safety records into a single "project average" to dilute the impact of the construction phase's near misses.
- **Distractor 3:** List the near misses as "Lessons Learned" but exclude them from the official final performance metrics to avoid an audit.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile project is being closed. The organization's PMO requires a "Final Quality Audit" report. The team has been using automated testing and peer code reviews for every user story.

**Question:**
What should be the primary content of the Final Quality Audit for this project?

- **Correct:** A summary of the automated test coverage, the final defect density, and the team's adherence to their "Definition of Done."
- **Distractor 1:** A manual re-testing of 10% of the user stories to verify that the automated tests were actually working.
- **Distractor 2:** A list of every single bug that was found and fixed during the entire project lifecycle.
- **Distractor 3:** A signed statement from the Product Owner that the quality of the product was "satisfactory."

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

**Enabler:** Conclude activities to close the project | **Methodology:** Hybrid

**Scenario:**
A project manager is closing a project where the relationship between the vendor and the project team became extremely adversarial during the final phase. The vendor's work was correct, but the cooperation was non-existent.

**Question:**
How should the project manager handle the vendor's final performance evaluation?

- **Correct:** Provide an objective evaluation that notes the technical quality was met but explicitly documents the failures in communication and collaboration.
- **Distractor 1:** Give the vendor a "fail" rating for everything to ensure they are never hired by the organization again.
- **Distractor 2:** Give the vendor a "perfect" rating to avoid a potential lawsuit or further conflict during the closure process.
- **Distractor 3:** Skip the vendor evaluation entirely to avoid having to interact with the vendor one last time.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile team is closing its project. The team members suggest that instead of a traditional lessons learned register, they should create a series of "Quick Start" videos for future teams.

**Question:**
How should the project manager (or Delivery Lead) respond to this?

- **Correct:** Support the idea as an innovative way to transfer knowledge, provided the videos are properly indexed and stored in the OPA library.
- **Distractor 1:** Reject the idea and insist on a standard written register, as videos are not an official project artifact in the PMBOK.
- **Distractor 2:** Allow the videos but tell the team they must also write a 200-page manual to satisfy the auditors.
- **Distractor 3:** Suggest that the team post the videos on a public social media platform to help the wider agile community.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project manager is closing a project in a highly regulated industry. They find that some of the final signatures on the quality reports are electronic but the organization's current policy only officially recognizes "wet" (ink) signatures.

**Question:**
What should the project manager do?

- **Correct:** Follow the organization's current policy and obtain wet signatures, while simultaneously recommending a policy update for future projects.
- **Distractor 1:** Proceed with the electronic signatures, as "wet" signatures are obsolete in the modern business environment.
- **Distractor 2:** Ask the legal department to sign a waiver for this project only so the closure can be finished on time.
- **Distractor 3:** Use a digital image of a wet signature and paste it onto the documents to satisfy the policy requirement.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile project is being closed, and the Project Manager needs to report the "Final Return on Investment (ROI)." The product is live, but it has only been generating revenue for two weeks.

**Question:**
How should the PM report the ROI at closure?

- **Correct:** Report the projected ROI based on the first two weeks of data and the business case assumptions, and hand off the tracking to the Product Owner.
- **Distractor 1:** Wait another six months to close the project so that the actual ROI can be calculated with more data.
- **Distractor 2:** State that the ROI is currently 100% since all the development costs have already been spent and the revenue is just starting.
- **Distractor 3:** Leave the ROI section blank because it's impossible to calculate accurately at the time of project closure.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Hybrid

**Scenario:**
A project manager is closing a hybrid project. The agile team used a third-party software library that requires an annual subscription. The predictive infrastructure team used hardware that has a three-year maintenance contract.

**Question:**
What is the project manager's responsibility regarding these recurring costs during closure?

- **Correct:** Identify all recurring costs and formally transition the ownership and budget responsibility for these contracts to the operations department.
- **Distractor 1:** Use the remaining project budget to pay for the next five years of subscriptions and maintenance to save the operations team money.
- **Distractor 2:** Cancel the subscriptions and maintenance contracts to ensure the project finishes with a "clean" financial record.
- **Distractor 3:** Tell the operations manager that they should have planned for these costs in their own departmental budget.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile project is closing, and the team is writing the final report. One team member suggests that the "Final Report" is a waste of time and that the "Product" speaks for itself.

**Question:**
How should the Project Manager explain the value of the Final Report?

- **Correct:** It provides a historical summary of the project's performance, objectives, and success for stakeholders who were not involved in the day-to-day sprints.
- **Distractor 1:** It is a mandatory requirement from the PMO that must be completed to get the project manager's final bonus.
- **Distractor 2:** It serves as a legal document that protects the team members from being sued if the product fails in the future.
- **Distractor 3:** It is the only place where the project's final velocity is officially recorded for the organization's records.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project manager is closing a project and finds that one of the risks identified in the risk register is still "Open" because the event never occurred.

**Question:**
What should the project manager do with this risk?

- **Correct:** Close the risk in the risk register and document in the final report that the risk was successfully mitigated or simply did not materialize.
- **Distractor 1:** Transfer the risk to the operations department so they can continue to monitor it for the next five years.
- **Distractor 2:** Delete the risk from the register to show that the project had a lower risk profile than originally thought.
- **Distractor 3:** Leave it open in the register so that future project managers can see that it was a real concern.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
An agile team is conducting a final retrospective. They realize that they used a new collaboration tool that significantly increased their productivity, but this tool is not on the organization's "Approved" list.

**Question:**
How should this be handled at closure?

- **Correct:** Document the productivity benefits of the tool in the lessons learned and recommend that the PMO evaluate it for organization-wide approval.
- **Distractor 1:** Hide the use of the tool from the final report to avoid getting the team in trouble for using unapproved software.
- **Distractor 2:** Uninstall the tool from all computers and pretend it was never used to ensure the final audit passes.
- **Distractor 3:** Demand that the PMO approve the tool immediately because the team's success proves it is better than the current standards.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Hybrid

**Scenario:**
A project manager is closing a project that had a significant amount of "Knowledge Work" that is difficult to document. The team suggests that the best way to transfer knowledge is to have two team members stay with the operations team for a month.

**Question:**
How should the project manager handle this?

- **Correct:** Review the budget and resource plan to see if a "transitional support period" can be funded and authorized before closure.
- **Distractor 1:** Tell the team members they must volunteer their own time to help the operations team after their official project contract ends.
- **Distractor 2:** Reject the idea because "people transfer" is not a standard part of the project closure process in the organization's handbook.
- **Distractor 3:** Simply allow the team members to stay with operations and don't tell their new project managers where they are.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Agile

**Scenario:**
At the end of an agile project, the Product Owner wants to keep a small "core team" together to work on minor bug fixes and small enhancements for the next six months.

**Question:**
What should the Project Manager's response be?

- **Correct:** Explain that this work is "Maintenance" or "Business as Usual" and should be managed by a different organizational structure, not as a continuation of the project.
- **Distractor 1:** Agree to the request and keep the project "Open" for another six months to accommodate the small enhancements.
- **Distractor 2:** Tell the Product Owner that they should just hire the team members as personal consultants to bypass the project closure process.
- **Distractor 3:** Suggest that the team members continue working on the product in their spare time while they are assigned to other projects.

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

**Enabler:** Conclude activities to close the project | **Methodology:** Predictive

**Scenario:**
A project manager is holding the final project "Post-Mortem" or celebration. The project was technically a failure—it was canceled early and didn't deliver the main objective. The team is very demotivated.

**Question:**
What is the MOST professional way for the PM to conduct this final session?

- **Correct:** Focus the session on the value of the lessons learned and the professional growth the team members achieved, despite the project's cancellation.
- **Distractor 1:** Cancel the celebration and the session because there is nothing to celebrate and the team is too upset.
- **Distractor 2:** Use the session to identify the "failure points" and assign responsibility to the specific people or departments that caused the cancellation.
- **Distractor 3:** Tell the team that the failure was not their fault and that the organization's leadership is to blame for the poor strategy.

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

## 📈 Database Stats

- **Total Questions:** 50
- **Correct Answer Length Average:** 18 words
- **Distractor Length Average:** 19 words
- **Methodology Split:**
  - **Predictive:** 40% (20 questions)
  - **Agile:** 36% (18 questions)
  - **Hybrid:** 24% (12 questions)
- **Action Split:**
  - **Analyze/Assess:** 52% (26 questions)
  - **Execute/Implement:** 48% (24 questions)

---

## 💡 Key Takeaways: Closure Pro-Tips

1. **Closure is Mandatory:** Even if a project is canceled or terminated early, you must perform administrative closure (archive records, harvest lessons, close contracts).
2. **Acceptance is Objective:** Refer to the documented **Acceptance Criteria** and **Definition of Done** when stakeholders refuse sign-off. If the criteria are met, they are contractually obligated to accept.
3. **Value Transfer:** The Project Manager's role ends at handoff, but they must ensure **Benefits Handoff** is complete by assigning ownership of post-project metrics tracking to the business or operations.
4. **No Open Claims:** You cannot "cleanly" close procurements with open claims. They must be resolved or formally transferred to a permanent department (Legal/Finance).
5. **OPAs are the Legacy:** The most valuable output of closure for the organization is the **Lessons Learned Register**. Store it in a searchable, accessible repository (OPA library).
6. **Release with Respect:** Formal resource release includes providing performance feedback to functional managers and recognizing the team's effort, which reinforces organizational culture.