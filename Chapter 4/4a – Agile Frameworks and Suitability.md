# Chapter 4a – Agile Frameworks and Suitability Models

While Chapter 4 introduced the high-level concepts of Predictive, Agile, and Hybrid ways of working, the PMP exam requires a deeper familiarity with specific agile frameworks and tailoring tools. The *Agile Practice Guide* (a primary exam reference) introduces several specific models and frameworks that often appear in situational questions.

This section serves as your "Agile Vocabulary Guide" to ensure you recognize these terms and concepts when they appear on the exam.

---

## 1. The Agile Manifesto: Deep Dive

The **Manifesto for Agile Software Development** is the foundation of all agile approaches. You do not need to memorize it word-for-word, but you must understand the *values* well enough to apply them to tricky scenarios.

### 1.1 The 4 Values
Remember: "While there is value in the items on the right, we value the items on the left more."

1.  **Individuals and interactions** over processes and tools.
    *   *Exam application:* If a tool is broken or a process is slowing the team down, the team should interact to solve the problem rather than blindly following the process.
2.  **Working software** (or product) over comprehensive documentation.
    *   *Exam application:* Documentation is useful, but it is not a measure of progress. Only a finished, usable deliverable counts as progress.
3.  **Customer collaboration** over contract negotiation.
    *   *Exam application:* If the contract says "X" but the customer discovers they need "Y" to succeed, work with them to find a way to deliver "Y" (while managing the legal/business reality) rather than citing the contract to say "no."
4.  **Responding to change** over following a plan.
    *   *Exam application:* A plan is a baseline, not a prison. If the environment changes, the plan *must* change to remain relevant.

### 1.2 The 12 Principles (Grouped for Exam Recall)

*   **Customer Satisfaction:** Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
*   **Welcome Change:** Welcome changing requirements, even late in development.
*   **Frequent Delivery:** Deliver working software frequently (weeks rather than months).
*   **Collaboration:** Business people and developers must work together daily.
*   **Motivated Individuals:** Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
*   **Face-to-Face:** The most efficient and effective method of conveying information is face-to-face conversation.
*   **Working Software:** The primary measure of progress.
*   **Sustainable Pace:** Agile processes promote sustainable development. Sponsors, developers, and users should be able to maintain a constant pace indefinitely.
*   **Technical Excellence:** Continuous attention to technical excellence and good design enhances agility.
*   **Simplicity:** The art of maximizing the amount of work not done is essential.
*   **Self-Organization:** The best architectures, requirements, and designs emerge from self-organizing teams.
*   **Reflection:** At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

---

## 2. The Agile Suitability Filter

Not every project should be agile. The *Agile Practice Guide* presents a **Suitability Filter** model (often visualized as a **Radar Chart**) to help organizations decide which approach fits best.

### 2.1 The Radar Chart Dimensions
The model assesses three categories: **Culture**, **Team**, and **Project**.

1.  **Culture**:
    *   **Buy-in:** Is there senior sponsor support for agile?
    *   **Trust:** Do stakeholders trust the team to deliver?
    *   **Decision-making:** Is the team empowered to make local decisions?
2.  **Team**:
    *   **Size:** Is the team small enough (e.g., 3–9 members) to be agile? (Larger teams increase complexity).
    *   **Experience:** Does the team have experienced agile practitioners?
    *   **Access:** Does the team have daily access to the customer/business?
3.  **Project**:
    *   **Likelihood of Change:** Are requirements stable or volatile? (High change favors agile).
    *   **Criticality:** How catastrophic is failure? (High criticality—e.g., life-or-death systems—may require more rigor/predictive elements).
    *   **Incremental Delivery:** Can the product be delivered in parts? (If yes, agile is easier).

### 2.2 Interpreting the Chart
*   **Center Clusters:** If the assessment scores cluster near the center (low team size, high access, high change), an **Agile** approach is a strong fit.
*   **Outer Edges:** If scores push to the outside (large teams, no customer access, high criticality, low trust), a **Predictive** approach is likely better.
*   **Middle Ground:** Scores in the middle suggest a **Hybrid** approach.

---

## 3. Specific Agile Frameworks (Exam Vocabulary)

While the PMP exam focuses heavily on "agnostic" agile principles, you may see terms from specific frameworks.

### 3.1 Scrum
*   **Focus:** Managing complex work via timeboxed iterations.
*   **3 Roles:** Product Owner (value), Scrum Master (process/servant leader), Developers (delivery).
*   **5 Events:** Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective.
*   **3 Artifacts:** Product Backlog, Sprint Backlog, Increment.
*   *Key Exam Concept:* The team is self-organizing. The Scrum Master coaches and removes impediments but does not manage the team.

### 3.2 Kanban
*   **Focus:** Improving flow and reducing waste (Lean origins).
*   **Key Practices:**
    *   **Visualize the work:** (Kanban board).
    *   **Limit Work in Progress (WIP):** Stop starting, start finishing.
    *   **Manage Flow:** Measure lead time and cycle time.
    *   **Make Process Explicit:** Clear policies for how work moves.
*   *Key Exam Concept:* Kanban does not require timeboxed sprints (though you can use them). It is about continuous flow and "pulling" work when capacity is available.

### 3.3 Extreme Programming (XP)
*   **Focus:** Software engineering excellence.
*   **Key Practices:**
    *   **Pair Programming:** Two developers, one computer. Increases quality and knowledge sharing.
    *   **Test-Driven Development (TDD):** Write the test *before* the code.
    *   **Continuous Integration (CI):** Merge code multiple times a day.
    *   **Refactoring:** Improving design without changing behavior.
    *   **Small Releases:** Frequent, small updates.
*   *Key Exam Concept:* XP explains *how* to build high-quality software in an agile way.

### 3.4 Crystal
*   **Focus:** Tailoring the methodology based on project characteristics.
*   **Key Concept:** Uses color codes (Crystal Clear, Crystal Yellow, Crystal Orange) to denote "weight" or rigor.
*   **Drivers:** Methodology weight is determined by **Team Size** and **Criticality** (potential for loss). A small team building a game needs less rigor (Crystal Clear) than a large team building life-support software (Crystal Diamond/Sapphire).

### 3.5 Feature-Driven Development (FDD)
*   **Focus:** Meeting specific client needs on larger projects.
*   **Key Roles:** Chief Programmer, Class Owners.
*   **Process:** Develop an overall model -> Build a feature list -> Plan by feature -> Design by feature -> Build by feature.
*   *Key Exam Concept:* FDD is strictly feature-centric and architecture-centric.

### 3.6 DSDM (Dynamic Systems Development Method)
*   **Focus:** Constraint-driven delivery (often used in corporate/government settings).
*   **Key Concept:** Fixes Cost, Quality, and Time at the start; **Scope** is variable. (Inverts the traditional iron triangle).
*   **Prioritization:** Uses **MoSCoW** (Must have, Should have, Could have, Won't have this time).

### 3.7 Scaling Frameworks
When one team isn't enough, organizations scale.
*   **Scrum of Scrums (SoS):** A technique where representatives from multiple Scrum teams meet (usually daily or weekly) to coordinate dependencies and impediments. *This is the most tested scaling concept.*
*   **SAFe (Scaled Agile Framework):** Highly structured, uses "Release Trains" and "Program Increments."
*   **LeSS (Large-Scale Scrum):** Applies Scrum principles to multiple teams working on a single product backlog.
*   **DA (Disciplined Agile):** A toolkit (acquired by PMI) that helps teams choose their way of working (WoW) based on context.

---

## 4. Tailoring and Mastery Models

How do teams evolve?

### 4.1 Shu-Ha-Ri
A martial arts concept applied to agile learning:
1.  **Shu (Obey):** Follow the rules. The team is new; they follow the process (e.g., Scrum) exactly to learn the basics.
2.  **Ha (Detach):** Break the rules. The team understands the "why" and begins to tailor/adapt the rules to their context.
3.  **Ri (Transcend):** Be the rules. The team is so fluent that they act intuitively without thinking about the rules.

### 4.2 Dreyfus Model of Skill Acquisition
Similar to Shu-Ha-Ri, describing the journey from Novice -> Advanced Beginner -> Competent -> Proficient -> Expert.

---

## 5. Summary Table: When to Use What

| Framework | Best For... | Key Keywords |
| :--- | :--- | :--- |
| **Scrum** | Complex product work; teams need structure | Sprints, Roles, Backlog, 3-5-3 |
| **Kanban** | Service/support teams; steady flow of work | Flow, WIP Limits, Pull System, Board |
| **XP** | Software teams needing high quality | Pair Programming, TDD, Refactoring |
| **Crystal** | Tailoring rigor to team size/criticality | Colors, Criticality, Weight |
| **FDD** | Large projects needing specific feature focus | Chief Programmer, Architecture-centric |
| **DSDM** | Projects with fixed time/cost constraints | MoSCoW, Fixed Time/Cost, Variable Scope |
