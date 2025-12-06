# 17c – Organizational Policies and Standards

## Learning Objectives
By the end of this section, you will be able to:
*   Distinguish between external regulations and internal organizational policies.
*   Utilize Organizational Process Assets (OPAs) to ensure compliance.
*   Manage non-functional requirements related to internal standards (coding standards, branding, procurement).

## Core Concepts

### Internal Governance: The "House Rules"
While 17a and 17b focused on external laws (Government), this section focuses on internal laws (The Company). Organizations establish policies to ensure consistency, quality, and brand protection.

*   **Policies**: High-level rules (e.g., "All vendors must sign a non-disclosure agreement," "All code must pass a static analysis scan").
*   **Standards**: Specific guidelines (e.g., "We use Java 17," "Project status reports are due on Fridays").
*   **Procedures**: Step-by-step instructions (e.g., "How to request a new server," "The employee onboarding checklist").

### OPAs: The Compliance Toolkit
Organizational Process Assets (OPAs) are your best friends for compliance. Instead of reinventing the wheel, you use:
*   **Templates**: Standard charters, risk registers, and status reports ensure you are collecting the data the organization cares about.
*   **Knowledge Bases**: Lessons learned from past projects (e.g., "Don't use Vendor X, they failed the security audit last time").

### Quality Assurance (QA) vs. Quality Control (QC)
Compliance with standards is largely a QA function.
*   **QA (Process focused)**: Are we following the standard *process*? (e.g., Did we do the code review? Did we fill out the risk log?)
*   **QC (Product focused)**: Does the *result* meet the standard? (e.g., Does the app crash? Is the wall painted the correct shade of blue?)

## Practical Examples

### Scenario 1: The Transformation Program (Hybrid)
**Context**: Sarah's program involves hiring 20 contractors to help with the rollout.
**Challenge**: The Engineering lead wants to hire a friend who is a "great coder" but doesn't have a registered business entity.
**Compliance Check**: Sarah checks the **Procurement Policy**. It states: "All vendors must be registered legal entities and carry professional liability insurance."
**Action**:
*   Sarah informs the Engineering lead that the hire cannot proceed directly.
*   **Solution**: She suggests the contractor go through an approved staffing agency (a "pass-through" arrangement) which satisfies the internal policy while still getting the talent needed.
*   **Lesson**: Policies are often there to protect against liability (co-employment risk). Finding a compliant path is part of the PM's job.

### Scenario 2: The Office Renovation (Predictive)
**Context**: The construction team is ready to paint the lobby.
**Challenge**: The interior designer chooses a trendy neon green.
**Compliance Check**: The **Corporate Branding Standard** requires specific Pantone colors for client-facing areas.
**Action**:
*   The Project Manager catches this during the "Plan Quality Management" process.
*   They reference the Branding Guidelines OPA.
*   **Correction**: The color is changed to "Corporate Blue" before paint is purchased.
*   **Lesson**: Internal standards protect the brand identity.

## Knowledge Check Scenario
**Scenario**: You are taking over a project midway through execution. You notice that the previous project manager did not save any of the project documents to the central SharePoint server, keeping them on their local laptop instead. The project is on schedule and budget.

**Question**: Why is this a problem?

A) It isn't a problem if the project is on schedule.
B) It violates the organization's document retention and business continuity policies.
C) SharePoint is expensive and should be used.
D) The local laptop might run out of storage space.

**Solution**: **B** is the correct answer.
*   **Why**: Internal policies usually require centralization for two reasons: **Business Continuity** (if the PM gets hit by a bus, the project data is lost) and **Auditability** (the organization needs a record of what happened). Even if the project is performing well, the process compliance failure introduces significant enterprise risk.
