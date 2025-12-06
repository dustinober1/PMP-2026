# 17e – Knowledge Check

## Instructions
Answer the following questions to test your understanding of Compliance, Risk, and Governance. Try to answer them before looking at the solutions.

---

### Question 1
**Scenario**: You are managing a software project for a financial institution. Midway through the project, a new banking regulation is passed that requires stricter encryption for all customer data. Implementing this will require a significant architectural change, adding $50,000 to the budget and 3 weeks to the timeline.
**Question**: What is the *best* next step?

A) Use the management reserve to cover the cost and update the schedule.
B) Submit a change request to the Change Control Board (CCB) detailing the regulatory requirement, cost, and schedule impact.
C) Inform the regulator that the project was started before the law was passed, so you are exempt.
D) Ask the team to work overtime to absorb the schedule impact.

**Solution**: **B**
*   **Explanation**: Regulatory changes are mandatory, but they are still changes to the project constraints (scope, schedule, cost). You must follow the formal change control process to get approval for the new baseline. You generally cannot simply "absorb" major scope changes without authorization.
*   **Why not A?**: Management reserve is for *unforeseen* risks, but you still usually need approval to move it into the cost baseline.
*   **Why not C?**: Laws rarely grandfather in-flight projects for data security.
*   **Why not D?**: Overtime is a crash cost and sustainability risk; it doesn't address the budget or approval need.

---

### Question 2
**Scenario**: A stakeholder requests a new feature that involves collecting user location data to offer localized deals. You check the project's Data Privacy Standard and realize this requires explicit user consent and a specific data retention policy.
**Question**: This is an example of what type of requirement?

A) Functional Requirement
B) Non-Functional Requirement (Quality/Compliance)
C) Transition Requirement
D) Business Requirement

**Solution**: **B** (or effectively A and B interwoven)
*   **Explanation**: While the "feature" is functional, the *compliance aspect* (consent, retention, security) functions as a Non-Functional Requirement (NFR) or a Quality Standard. It describes *how* the system must behave to be compliant, not just *what* it does. In Agile, this is often part of the "Definition of Done" or acceptance criteria.

---

### Question 3
**Scenario**: Your organization has a governance policy that all projects over $1M must undergo a "Phase Gate Review" before moving from Planning to Execution. Your project is $1.2M, but you are behind schedule. You have completed the plan but haven't had the review.
**Question**: Can you start execution?

A) Yes, as long as you schedule the review for later next week.
B) Yes, if the sponsor gives you verbal permission.
C) No, you must pass the governance gate before significant funds can be committed to execution.
D) No, unless you break the project into two smaller projects of $600k each.

**Solution**: **C**
*   **Explanation**: Governance gates (or Kill Points) exist to protect the organization's investment. Skipping them undermines the governance framework.
*   **Why not D?**: That is called "structure splitting" or "smurfing" to evade controls, which is an ethical violation.

---

### Question 4
**Scenario**: You are working in a Hybrid environment. The organization's PMO requires a detailed Risk Register updated monthly. Your Agile team feels this is "waste" and prefers to just discuss risks in the Daily Standup.
**Question**: How should you handle this?

A) Tell the PMO that Agile teams don't do Risk Registers.
B) Force the team to fill out the spreadsheet during the Retrospective.
C) Maintain the Risk Register yourself by listening to the Standups and translating their concerns into the PMO format.
D) Ignore the PMO requirement.

**Solution**: **C**
*   **Explanation**: This is a classic "Servant Leadership" and "Hybrid" adaptation. The PM protects the team from administrative burden while ensuring the organization gets the governance data it needs. You bridge the gap between the agile way of working (conversation) and the predictive governance requirement (documentation).

---

### Question 5
**Scenario**: During a procurement audit, it is discovered that a project manager accepted a gift of expensive concert tickets from a vendor just before awarding them a contract.
**Question**: Which document has primarily been violated?

A) The Project Charter
B) The Risk Register
C) The PMI Code of Ethics and Professional Conduct / Organizational Code of Conduct
D) The Stakeholder Engagement Plan

**Solution**: **C**
*   **Explanation**: Accepting substantial gifts from vendors during a bidding process is a conflict of interest and a violation of ethical codes regarding fairness and honesty.
