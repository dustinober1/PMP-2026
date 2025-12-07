# 17d – Enterprise Risk and Governance Frameworks

## Learning Objectives
By the end of this section, you will be able to:
*   Align project risk management with Enterprise Risk Management (ERM).
*   Understand the concept of "Risk Appetite" and "Risk Tolerance" at an organizational level.
*   Work effectively with Governance Boards and Steering Committees.

## Core Concepts

### The Big Picture: ERM
Projects are investments. The organization manages a portfolio of these investments to achieve strategic goals while staying within safe limits. This is **Enterprise Risk Management (ERM)**.
Your project risk register feeds into the program risk register, which feeds into the enterprise risk profile.

### Risk Appetite vs. Risk Tolerance
*   **Risk Appetite**: How much risk is the organization *willing* to take to achieve a reward? (e.g., "We are an aggressive tech startup, we accept high failure rates for high growth.")
*   **Risk Tolerance**: The specific limit or threshold they *cannot* exceed. (e.g., "We will not tolerate any breach that exposes customer credit card data.")

### Governance Frameworks
 Governance is the framework of authority and accountability. Ideally, it defines:
*   **Who decides what?** (Decision rights)
*   **How are issues escalated?** (Escalation paths)
*   **How is performance monitored?** (Oversight)

Common Governance Bodies:
*   **Project Management Office (PMO)**: Provides standards, templates, and sometimes resources.
*   **Steering Committee / Project Board**: Senior stakeholders who authorize the project and handle critical issues.
*   **Change Control Board (CCB)**: Approves or rejects changes to baselines.

### Governance Considerations for AI and Emerging Technologies

When projects involve AI or other emerging technologies, the **governance questions stay the same**, but the stakes around data, ethics, and compliance are often higher.

Practical considerations:

*   **Tool approval and data protection**  
    * Who decides which AI tools are approved for use? (Often PMO, security, and procurement together)  
    * What data is allowed to be sent to external AI services? What must stay inside enterprise boundaries?

*   **Risk and ethics oversight**  
    * How are AI-related risks (bias, privacy, security, model failure) captured in the **risk register**?  
    * Which governance body (steering committee, ethics board, data governance council) reviews high-impact AI decisions?

*   **Alignment with enterprise frameworks**  
    * Many organizations rely on enterprise frameworks such as **COBIT, ITIL, TOGAF, NIST, ISO 27001**, or regional privacy laws (for example, GDPR) to structure controls.  
    * You do not need to memorize these for the PMP exam, but you should recognize that AI initiatives must still comply with **existing governance and security frameworks**, not operate as exceptions.

*   **Escalation paths for AI incidents**  
    * If an AI system produces harmful or incorrect decisions, what is the path to pause, roll back, or correct it?  
    * Who has authority to halt AI-enabled processes if they conflict with policy, ethics, or safety?

Exam angle: Good answers show the project manager **working within governance**—engaging the PMO, security, legal, and other governance bodies—rather than bypassing them “because AI is new” or “because the tool is external.”

## Practical Examples

### Scenario 1: The Transformation Program (Hybrid)
**Context**: The program is seeing resistance from regional managers. There is a risk that adoption will be 50% lower than planned.
**Escalation**: This risk exceeds the **Risk Tolerance** of the program (which requires 80% adoption to break even).
**Action**:
*   Sarah does not try to "fix" this alone.
*   She escalates the risk to the **Steering Committee**.
*   **Governance Decision**: The Steering Committee votes to pause the rollout in Asia (reducing scope) and double the training budget for Europe (mitigation strategy).
*   **Lesson**: Governance bodies exist to make decisions that are above the PM's pay grade.

### Scenario 2: The Expense System (Agile)
**Context**: The team wants to use a cutting-edge, open-source database that has no commercial support.
**Governance Check**: The Enterprise Architecture Board (EAB) reviews the technology stack.
**Decision**: The EAB rejects the database choice because it introduces "Operational Risk" (if it breaks, no one can fix it).
**Outcome**: The team must choose a database from the "Approved Technology Standard" list.
**Lesson**: Agile autonomy has limits. Teams can decide *how* to build it, but often Enterprise Governance decides *what* tools are safe to use.

## Knowledge Check Scenario
**Scenario**: Your organization has a "Zero Tolerance" policy for safety violations. During a site visit, you see a contractor working on a ladder without the required safety harness. The contractor is critical to the critical path and stopping them will delay the project by 2 days.

**Question**: What must you do?

A) Wait until they are finished, then issue a warning.
B) Stop the work immediately, ensuring the safety violation is corrected, even if it delays the project.
C) Document the violation in the issue log and discuss it at the next status meeting.
D) Ask the contractor if they feel safe.

**Solution**: **B** is the only acceptable answer.
*   **Why**: "Zero Tolerance" means exactly that. Governance policies regarding safety are absolute. The project manager's ethical and professional responsibility (and the organization's governance) requires immediate intervention to prevent harm. Schedule delays are secondary to human safety and regulatory adherence.
