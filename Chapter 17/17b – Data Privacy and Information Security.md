# 17b – Data Privacy and Information Security

## Learning Objectives
By the end of this section, you will be able to:
*   Understand the impact of data privacy regulations (GDPR, CCPA, etc.) on project scope and execution.
*   Integrate "Privacy by Design" and "Security by Design" principles.
*   Manage security audits and data classification within project artifacts.

## Core Concepts

### The Evolving Landscape of Data Privacy
In today's digital-first environment, data is a liability as much as an asset. Project managers must be aware of regulations that dictate how data is collected, stored, processed, and deleted.

*   **GDPR (General Data Protection Regulation)**: EU regulation protecting personal data. Key rights include the "Right to be Forgotten" and "Data Portability."
*   **CCPA/CPRA (California)**: Similar protections for California residents.
*   **PII (Personally Identifiable Information)**: Any data that can identify an individual (name, SSN, email, IP address).

### Security/Privacy by Design
PMI and modern industry standards advocate for shifting security "left" (dealing with it earlier).
*   **Reactive**: Building the software, then hiring a penetration tester to hack it at the end.
*   **Proactive (By Design)**: Defining security requirements (encryption, access control) during the requirements gathering phase and building them into the architecture.

### Classification of Data
Not all data is equal. Projects should classify data to apply appropriate controls:
*   **Public**: Marketing info (Low risk).
*   **Internal**: Org charts, phone directories (Medium risk).
*   **Confidential**: Trade secrets, strategy (High risk).
*   **Restricted/PII**: Customer financial data, health records (Critical risk).

## Practical Examples

### Scenario 1: The Expense System (Agile)
**Context**: The team is developing the user profile module.
**Challenge**: The Product Owner wants to collect users' birth dates to send them birthday coupons. The Scrum Master notes that storing birth dates increases the data classification level and triggers GDPR requirements.
**Action**:
*   **Discussion**: The team facilitates a risk/value discussion. Is the value of birthday coupons worth the cost of increased security compliance?
*   **Decision**: The PO decides to drop the birth date requirement.
*   **Outcome**: "Data Minimization." By collecting less data, the project reduces its risk profile and compliance burden. This is effective risk avoidance.

### Scenario 2: The Transformation Program (Hybrid)
**Context**: A global HR system rollout involves migrating employee data from local servers in Germany to a cloud server in the USA.
**Challenge**: Germany has strict data residency laws preventing certain data from leaving the country.
**Action**:
*   **Planning**: During the "Initiating" phase, the PM identifies "Data Sovereignty" as a critical constraint.
*   **Execution**: The project architecture is adjusted to use a "Hybrid Cloud" approach where sensitive German data stays on local servers, while anonymized metadata is sent to the US cloud.
*   **Validation**: A third-party security audit is scheduled as a milestone *before* the "Go-Live" decision.

## Knowledge Check Scenario
**Scenario**: Your project team is using a new AI tool to summarize meeting notes. A team member suggests uploading recordings of client strategy meetings to the tool to generate minutes automatically. You review the tool's terms of service and see that it uses uploaded data to train its public model.

**Question**: What should you do?

A) Allow it, as it increases team efficiency and velocity.
B) Prohibit the use of the tool for client meetings and update the team's working agreement regarding data security.
C) Ask the client for permission to share their data with the public AI model.
D) Purchase the premium version of the tool immediately without further review.

**Solution**: **B** is the best answer.
*   **Why**: Project managers are responsible for protecting stakeholder information. Uploading confidential client data to a public model is a security breach and a violation of confidentiality. Updating the working agreement (B) reinforces the governance standard.
*   **Why not others?**: (A) prioritizes speed over security (reckless). (C) is unprofessional and unlikely to be granted. (D) might be a solution eventually, but requires a security review first, not an impulse purchase.
