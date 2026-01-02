# 3.1a Team Formation & Resource Acquisition

**ECO Task**: Lead the project team

A high-performing team is more than just a group of talented individuals; it is a balanced ecosystem of skills, personalities, and shared goals. The project manager's task is to assemble and acquire the right mix of capabilities for the mission.

---

## 🏗️ Skills Matrix & Composition
Before the work begins, the Project Manager must ensure the team has the right mix of capabilities.

<div class="formation-grid">
  <div class="formation-card">
    <div class="formation-title">Technical Skills</div>
    <p>Create a <strong>Skills Matrix</strong> to identify gaps early and plan for targeted training.</p>
  </div>
  <div class="formation-card">
    <div class="formation-title">Diversity</div>
    <p>Ensure a mix of perspectives to avoid "Groupthink" and increase creative problem-solving.</p>
  </div>
  <div class="formation-card">
    <div class="formation-title">Availability</div>
    <p>Negotiate with functional managers for dedicated time vs. shared resource allocation.</p>
  </div>
  <div class="formation-card">
    <div class="formation-title">Experience</div>
    <p>Balance senior mentors with junior learners to ensure long-term project sustainability.</p>
  </div>
</div>

---

## 🧮 The Skills Matrix: A Deep Dive
The exam often describes a team that is "missing a skill" or "struggling with new technology." Your first move is to make the gap visible.

### Sample Skills Matrix Template
| Skill / Role | Dev A | Dev B | QA Lead | Analyst | Required Level |
| :----------- | :---: | :---: | :-----: | :-----: | :------------: |
| Domain knowledge | 2 | 1 | 1 | 3 | 3 |
| API integration | 3 | 2 | 1 | 1 | 3 |
| Test automation | 1 | 0 | 3 | 0 | 2 |
| Stakeholder facilitation | 1 | 1 | 0 | 3 | 2 |
| Cloud security | 0 | 0 | 1 | 0 | 3 ⚠️ |

**Rating Scale:**
- **0** = No capability
- **1** = Basic awareness, needs supervision
- **2** = Can work independently 
- **3** = Expert, can mentor others

### Gap Analysis Process
1. **Rate current capability** (0–3) for each team member and skill
2. **Identify the lowest-scoring skills** that are critical-path or high-risk
3. **Calculate the gap**: Required Level - Current Highest = Gap
4. **Choose a response**:
   - **Gap = 1**: Coach/pair with internal expert
   - **Gap = 2**: Formal training + supervised practice
   - **Gap = 3**: Acquire externally (hire, contract, or vendor)
   - **Alternative**: Adjust scope, schedule, or transfer risk to vendor

::: tip 💡 Exam Pattern: Make the Gap Visible First
The PMI-preferred sequence is: **Assess → Options → Decide → Execute**. Don't jump straight to hiring or escalating—first demonstrate you understand the need with data.
:::

---

## 📊 Resource Histograms & Staffing
A **Resource Histogram** is a bar chart showing planned resource usage over time. It answers: "When do we need people, and how much?"

### Key Uses
- **Identify overallocation**: If someone is scheduled for 150% capacity, you have a problem
- **Level resources**: Shift non-critical work to smooth out peaks and valleys
- **Plan acquisitions**: Know *when* you need the contractor, not just *if*

### The Resource Leveling vs. Resource Smoothing Trade-off
| Technique | What It Does | Schedule Impact | When to Use |
| :-------- | :----------- | :-------------- | :---------- |
| **Resource Leveling** | Delays tasks to resolve overallocation | **Can extend** the schedule | When resources are the constraint |
| **Resource Smoothing** | Adjusts within float only | **Does not extend** the schedule | When schedule is the constraint |

::: warning ⚠️ Exam Trap: Leveling Can Change the Critical Path
If you level resources, non-critical activities may become critical. Re-analyze the schedule after leveling.
:::

---

## 📋 The RACI Matrix: Clarity of Ownership
The gold standard for defining roles and responsibilities. RACI prevents the #1 cause of team dysfunction: confusion about who decides and who does.

*   **R (Responsible)**: The "doer." The person who actually performs the task.
*   **A (Accountable)**: The "owner." The one person who must sign off. **(Only one "A" per task!)**
*   **C (Consulted)**: Subject matter experts who provide input before the task is finalized.
*   **I (Informed)**: Stakeholders who are kept up-to-date on progress but don't perform work.

### Sample RACI for a Product Launch
| Activity | PM | Dev Lead | QA | Legal | Marketing | Sponsor |
| :------- | :--: | :------: | :--: | :---: | :-------: | :-----: |
| Define requirements | C | R | C | I | C | **A** |
| Build feature | I | **A** | C | I | I | I |
| Test feature | I | C | **A** | I | I | I |
| Legal review | I | I | C | **A** | I | I |
| Launch campaign | I | I | I | C | **A** | I |
| Final approval | **A** | I | I | C | I | C |

### RACI Rules & Anti-Patterns
| Pattern | Problem | Solution |
| :------ | :------ | :------- |
| **Multiple A's** | No clear ownership | Reduce to ONE Accountable |
| **No A** | Orphan task, no one owns it | Assign an Accountable |
| **Lots of C's** | Decision paralysis, too many cooks | Reduce to only essential consulted parties |
| **R without A** | Doer without decision authority | Clarify who has final say |

::: danger 🚦 Exam Trap: Multiple Accountables
If an exam scenario shows multiple people being "Accountable" for the same task, it's a recipe for confusion. There should only be **one** person ultimately responsible for the outcome.
:::

---

## 🤝 Negotiating for Resources in Matrix Organizations
In matrix organizations, the PM has responsibility but often lacks direct authority over team members. Success depends on influence, not power.

### The Negotiation Framework
1. **Alignment**: Show the functional manager how the project supports **their** department's goals
2. **Strategic Value**: Present the project's high-level business case and impact on organizational objectives
3. **Options & Trade-offs**: Propose alternatives (part-time, phased, cross-training) rather than demands
4. **Escalation (Last Resort)**: Only involve the Sponsor if a critical resource gap threatens project viability

### Influence Tactics That Work
| Tactic | Description | Example |
| :----- | :---------- | :------ |
| **Coalition Building** | Align with others who support your need | "Marketing and Sales both confirmed this feature is critical for Q3 revenue." |
| **Rational Persuasion** | Use data and logical arguments | "The skills gap analysis shows we'll miss the deadline without a senior cloud architect." |
| **Consultation** | Involve the other party in the solution | "How would you suggest we cover the gap given your team's current load?" |
| **Exchange** | Offer something in return | "If you lend me Alex for 3 sprints, I can free up training budget for your certification program." |

::: tip ✅ Exam Pattern: Present choices, not complaints
The strongest PM answer is usually: identify the gap with data (skills/capacity), propose options (tradeoffs), then escalate only if needed.
:::

---

## 🧭 Team Acquisition Options (How You Actually Staff a Project)
When a scenario says you "need a specialist" or "cannot get a key resource," think through these options in order:

| Method | Description | Pros | Cons |
| :----- | :---------- | :--- | :--- |
| **Pre-assigned** | Named resources already committed in the charter or contract | Guaranteed availability | May not be best fit |
| **Negotiate** | Work with functional managers to secure time and clarify priorities | Maintains relationships | Time-consuming; may get partial allocation |
| **Acquire externally** | Contractors, vendors, or a shared services group | Fast; specialized skills | Expensive; may need onboarding |
| **Upskill** | Training, mentoring, or pairing to close the gap | Builds team capability | Takes time; may not be fast enough for deadline |

### Decision Criteria for Make vs. Buy
| Factor | Build Internal Capability | Acquire External |
| :----- | :------------------------ | :--------------- |
| **Urgency** | Low/Medium | High |
| **Duration of need** | Long-term | Short-term |
| **Strategic importance** | Core competency | Commodity skill |
| **Budget** | Training is cheaper long-term | Contractor is faster |

---

## 🚀 Onboarding: Turning "Names on a Roster" Into a Team
If you want to avoid a long Storming phase, do an intentional kickoff:

### The First Week Checklist
- [ ] **Set the mission**: what success looks like and why the project matters
- [ ] **Clarify roles**: RACI for key deliverables and decision points
- [ ] **Establish working agreements**: team charter, tools, communication norms, and conflict path
- [ ] **Create an early win**: a small deliverable that builds confidence and trust quickly
- [ ] **Meet 1-on-1**: understand each person's goals, constraints, and working style
- [ ] **Make work visible**: shared task board accessible from day 1

### Virtual Onboarding Additions
- [ ] Set up communication tools with proper access
- [ ] Schedule "virtual coffee" with key team members
- [ ] Document time zone and availability expectations
- [ ] Provide a "who to ask for what" guide

---

## 🌐 Organizational Structures and PM Authority
The type of organization significantly impacts your power as a PM.

| Structure | PM Authority | Resource Control | Team Allocation |
| :-------- | :----------- | :--------------- | :-------------- |
| **Functional** | Little to None | Functional Mgr controls | Part-time, borrowed |
| **Weak Matrix** | Low | Shared with Func Mgr | Part-time |
| **Balanced Matrix** | Moderate | Shared equally | Dedicated possible |
| **Strong Matrix** | Moderate to High | PM has more say | Dedicated likely |
| **Projectized** | High to Total | PM controls | Fully dedicated |

::: info 💡 Pro Tip: Know Your Context
Many PMP questions ask what to do when "the PM has limited authority." The answer usually involves **negotiation**, **influence**, and **collaboration**—not demanding or escalating immediately.
:::

---

## 🧬 Diversity, Equity & Inclusion (DEI) in Teams
High-performing teams are diverse by design.

### Why Diversity Matters for Projects
- **Cognitive diversity**: Different problem-solving approaches reduce blind spots
- **Representation**: Team composition reflects end-user population for better solutions
- **Innovation**: Diverse perspectives lead to more creative outcomes

### Anti-Groupthink Practices
- **Devil's advocate**: Assign someone to challenge consensus
- **Anonymous input**: Use silent brainstorming before discussion
- **Invite outsiders**: Bring in fresh perspectives during planning
- **Retrospective safety**: Create space for minority opinions to surface

<style>
.formation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.formation-card {
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.formation-title {
  font-weight: 700;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.formation-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If the team is confused about who does what, the first step is to create or review the <strong>RACI Matrix</strong>. If the team is missing a critical skill, the first step is to perform a <strong>Gap Analysis</strong>. If the PM lacks authority, the answer is <strong>negotiate and influence</strong>, not escalate.
</div>

<style>
.study-tip {
  background: var(--vp-c-brand-soft);
  border-left: 4px solid var(--vp-c-brand);
  padding: 1rem;
  border-radius: 8px;
  margin: 2rem 0;
}
</style>
