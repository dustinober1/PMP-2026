<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# 10.3 AI in the Project Lifecycle

**ECO Task**: Determine appropriate project methodology/methods and practices

AI is not just for "tech projects." It is a force multiplier that can be applied to every domain and process group in the PMP standard.

::: warning Always sanitize inputs
Use placeholders and remove sensitive data before prompting. If the scenario involves a public/unapproved tool, the correct PMP action is to **protect data first**.
:::

---

## The AI-Augmented Lifecycle
Here is how you apply AI tools practically across the 5 process groups:

<ConceptGrid>
  <ConceptCard title="Initiation">
    <ul>
      <li><strong>Business Case</strong>: Analyze market trends to validate ROI assumptions.</li>
      <li><strong>Charter</strong>: Draft the initial Project Charter from meeting transcripts.</li>
      <li><strong>Stakeholders</strong>: Identify potential stakeholders by scanning org charts and email threads.</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Planning">
    <ul>
      <li><strong>WBS</strong>: Suggest a breakdown of tasks based on similar past projects.</li>
      <li><strong>Risk</strong>: "Pre-mortem" brainstorming to identify 50 potential risks in seconds.</li>
      <li><strong>User Stories</strong>: Convert rough notes into formatted stories with Acceptance Criteria.</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Execution">
    <ul>
      <li><strong>Communication</strong>: Rewrite a technical update into an Executive Summary.</li>
      <li><strong>Meetings</strong>: Transcribe audio to action items automatically.</li>
      <li><strong>Knowledge</strong>: Search the entire project documentation instantly to answer team questions.</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Monitoring">
    <ul>
      <li><strong>Sentiment</strong>: Scan team chats/emails to detect burnout or frustration early.</li>
      <li><strong>Forecasting</strong>: Predict the "real" finish date based on team velocity trends, not just the plan.</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Closing">
    <ul>
      <li><strong>Lessons</strong>: Cluster 100s of retrospective notes into 3 key themes.</li>
      <li><strong>Report</strong>: Auto-generate the Final Report from status updates.</li>
    </ul>
  </ConceptCard>
</ConceptGrid>

---

## High-Value Artifacts (With Example Prompts)
Use these as “starter prompts” and tailor them to your environment and templates.

### Initiation: Charter + Stakeholders
<strong>Best uses:</strong> drafting the charter outline, clarifying objectives, and building an initial stakeholder list.

<ConceptCard title="📝 Charter Drafting Prompt">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 8px; padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.85em; line-height: 1.6;">
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Role:</span> <span style="color: #e2e8f0;">Act as a PMP-certified PM.</span></div>
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Task:</span> <span style="color: #e2e8f0;">Draft a Project Charter (1 page) using the following sanitized notes.</span></div>
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Include:</span> <span style="color: #e2e8f0;">purpose, measurable objectives, high-level scope, assumptions, constraints, risks, milestones, budget range, and approval requirements.</span></div>
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Constraints:</span> <span style="color: #e2e8f0;">Do not invent facts or stakeholders; list clarifying questions first.</span></div>
    <div><span style="color: #64ffda; font-weight: bold;">Input:</span> <span style="color: #ffd93d;">[PASTE SANITIZED NOTES]</span></div>
  </div>
</ConceptCard>

### Planning: WBS + Risk Register + Comms Plan
<strong>Best uses:</strong> breaking down work, identifying risks, and tailoring communications.

<ConceptGrid>
  <ConceptCard title="🗂️ WBS Prompt">
    <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 8px; padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.85em; line-height: 1.6;">
      <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Task:</span> <span style="color: #e2e8f0;">Propose a WBS (3 levels) and a milestone schedule for a [predictive/agile/hybrid] project.</span></div>
      <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Constraints:</span> <span style="color: #e2e8f0;">Highlight dependencies and assumptions; include a "missing info" section.</span></div>
      <div><span style="color: #64ffda; font-weight: bold;">Input:</span> <span style="color: #ffd93d;">[PASTE SCOPE SUMMARY]</span></div>
    </div>
  </ConceptCard>
  <ConceptCard title="⚠️ Risk Register Prompt">
    <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 8px; padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.85em; line-height: 1.6;">
      <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Task:</span> <span style="color: #e2e8f0;">Create 12 risk statements (cause → event → impact) and suggest responses, owners, triggers, contingency actions.</span></div>
      <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Constraints:</span> <span style="color: #e2e8f0;">Separate threats vs opportunities; do not invent regulations—ask if compliance applies.</span></div>
      <div><span style="color: #64ffda; font-weight: bold;">Input:</span> <span style="color: #ffd93d;">[PASTE PROJECT CONTEXT]</span></div>
    </div>
  </ConceptCard>
</ConceptGrid>

### Execution: Meetings + Stakeholder Communication
<strong>Best uses:</strong> turning messy conversations into actions and clear updates.

<ConceptCard title="🎤 Meeting Minutes Prompt">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 8px; padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.85em; line-height: 1.6;">
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Task:</span> <span style="color: #e2e8f0;">Convert this transcript into meeting minutes with: decisions, action items (owner + due date), risks/issues, and open questions.</span></div>
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Constraints:</span> <span style="color: #e2e8f0;">If owners/dates are missing, write "TBD" and list questions to confirm.</span></div>
    <div><span style="color: #64ffda; font-weight: bold;">Input:</span> <span style="color: #ffd93d;">[PASTE SANITIZED TRANSCRIPT]</span></div>
  </div>
</ConceptCard>

### Monitoring & Controlling: Status + Forecasting
<strong>Best uses:</strong> variance explanations, trend summaries, and leadership-ready status.

<ConceptCard title="📊 Status Report Prompt">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 8px; padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.85em; line-height: 1.6;">
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Task:</span> <span style="color: #e2e8f0;">Draft an executive weekly status report (RAG status + top 3 risks + key decisions needed).</span></div>
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Constraints:</span> <span style="color: #e2e8f0;">Explain variances and propose corrective actions; keep to 10 bullets max.</span></div>
    <div><span style="color: #64ffda; font-weight: bold;">Inputs:</span> <span style="color: #ffd93d;">Schedule variance: [SV], Cost variance: [CV], key milestones: [PASTE], risks/issues: [PASTE]</span></div>
  </div>
</ConceptCard>

### AI & Earned Value Management (EVM)
AI excels at the *calculation* and *forecasting* parts of EVM, allowing you to focus on the *corrective action*.

<ConceptGrid>
  <ConceptCard title="🔍 Pattern Recognition">
    <p style="color: var(--vp-c-text-2);">"Based on the last 3 months of SPI less than 1.0, the AI predicts a final delay of 2 weeks unless velocity increases by 15%."</p>
  </ConceptCard>
  <ConceptCard title="🔬 Root Cause Analysis">
    <p style="color: var(--vp-c-text-2);">Feed the AI your raw performance data and ask: "Why is CPI degrading? Correlate with recent resource changes."</p>
  </ConceptCard>
  <ConceptCard title="📈 EAC Generation">
    <p style="color: var(--vp-c-text-2);">"Calculate Independent EAC using 3 different formulas (optimistic, pessimistic, current trend) and explain the difference."</p>
  </ConceptCard>
</ConceptGrid>

::: tip The PM's Job
The AI calculates the **EAC** (Estimate at Completion). The PM decides if the **VAC** (Variance at Completion) is acceptable or if a Change Request is needed.
:::

### Closing: Lessons Learned + Final Report
<strong>Best uses:</strong> clustering feedback into themes and producing closure artifacts.

<ConceptCard title="📚 Lessons Learned Prompt">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 8px; padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.85em; line-height: 1.6;">
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Task:</span> <span style="color: #e2e8f0;">Cluster these retrospective notes into 5 themes and propose "do/avoid/continue" recommendations.</span></div>
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Constraints:</span> <span style="color: #e2e8f0;">Keep it constructive and specific; include 3 process improvements.</span></div>
    <div><span style="color: #64ffda; font-weight: bold;">Input:</span> <span style="color: #ffd93d;">[PASTE SANITIZED NOTES]</span></div>
  </div>
</ConceptCard>

---

## Agile & Hybrid Add-Ons (Where AI Helps a Lot)
*   **Backlog refinement**: convert rough ideas into user stories with acceptance criteria.
*   **Sprint planning**: identify dependencies, split oversized stories, and surface risks.
*   **Retrospectives**: cluster comments into themes and propose experiments.
*   **Definition of Done**: draft/update checklists to reduce escaped defects.

---

## Guardrails for Automation Agents (Tool-Using AI)
If an AI tool can take actions (create tickets, update schedules, send messages), treat it like a user with permissions:
*   **Least privilege**: only the access it needs, nothing more.
*   **Approval steps**: require human confirmation before external communication or baseline changes.
*   **Logging**: keep audit logs of actions taken and inputs used.
*   **Fallback**: define a manual process if the agent fails or behaves unexpectedly.

## Practical Prompt Engineering for PMs
To get value, you must know how to ask.
*   **The Persona**: "Act as a Senior Risk Manager..."
*   **The Context**: "This is a construction project in a rainy climate..."
*   **The Task**: "List 10 potential safety risks..."
*   **The Constraint**: "Format the output as a Markdown table."
*   **The Quality Bar**: "List assumptions, unknowns, and what needs human validation."

::: tip Start Small
Don't try to automate everything at once. Start with "Low Risk / High Value" tasks like **Meeting Summaries** or **Drafting Emails**. Gain confidence before moving to **Risk Analysis** or **Forecasting**.
:::

---

## AI & Quality Management

While quality management isn't explicitly named as a process group, it spans all phases. AI adds tremendous value here.

### Quality Planning & Standards
- **AI strength**: Draft quality standards aligned with industry best practices
- **Example prompt**: "Draft quality acceptance criteria for a web API (availability, latency, error rates). Base it on SLA best practices."
- **PM responsibility**: Validate criteria match business requirements; don't let AI invent regulations

### Quality Assurance (Prevention & Compliance)
- **AI strength**: Scan project artifacts for consistency against baselines
- **Example**: AI compares new scope changes against the approved project charter to flag conflicts
- **PM action**: Review flagged conflicts; decide if scope change or charter update is needed

### Quality Control (Inspection & Testing)
- **AI strength**: Analyze test results, defect patterns, and predict where bugs escape
- **Defect Escape Rate**: Calculate `(Defects Found in Production) / (Total Defects Found)`. If = 15%, that means 15% of bugs get past QA into production.
- **Example**: AI analyzes 6 months of defects and predicts: "Phase containment rate is dropping (65% → 55%). Critical path dependencies in new feature are escape risk factors."
- **PM action**: Add buffer to UAT; increase review rigor; consider additional test cycle

### Process Capability vs Control
- **Control Charts** (Predictive Analytics):
  - **In Control**: Variation is random (normal). Process is stable.
  - **Out of Control**: Variation shows trend or pattern. Something changed (staffing, requirements, tools).
  - **AI can monitor**: Automatically flag when process goes out of control
  - **PM acts**: Investigate root cause (staffing change? New tool? Complexity spike?)

**Worked Example: Defect Escape in Software Release**
- Month 1: 80 defects found in testing, 8 escape to production → Escape rate = 10%
- Month 2: 75 defects found in testing, 12 escape to production → Escape rate = 16%
- Month 3: 70 defects found in testing, 18 escape to production → Escape rate = 26%

AI detects trend: Escape rate is degrading (out of control). Root cause?
- Reduced test cycles? Rushed UAT? New developers? Scope creep increasing complexity?

PM investigates and acts (add testing time, hire more QA, scope discipline).

---

## AI & Risk Management Throughout Project Lifecycle

Risk management is continuous. AI accelerates threat identification and monitoring.

### Initiation: Rapid Risk Brainstorm

<ConceptCard title="🎯 Risk Brainstorm Prompt">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 8px; padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.85em; line-height: 1.6;">
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Prompt:</span> <span style="color: #e2e8f0;">List 20 potential risks for a [project type] project in [domain/geography].</span></div>
    <div><span style="color: #64ffda; font-weight: bold;">Include:</span> <span style="color: #e2e8f0;">cause → event → impact statements. Separate threats vs opportunities.</span></div>
  </div>
</ConceptCard>

AI generates in seconds; PM filters/prioritizes with team.

### Planning: Risk Register + Automation
- AI can pre-populate a risk register based on historical projects
- PM reviews: "Are these relevant? Any missing?"
- Cost: 2-3 hours to refine instead of 8-10 hours from scratch

### Execution: Trigger Monitoring
- AI scans project dashboards, emails, meeting notes for **trigger keywords** ("delay", "conflict", "unavailable", "scope change")
- Alerts PM: "Found 3 new risk triggers this week—review the flagged items?"
- PM investigates escalates if needed

### Monitoring: Trend Analysis
- AI analyzes risk response effectiveness
- Example: "Mitigation response for Vendor Dependency—assigned 3 months ago. Has vendor capacity improved? Current probability = still 70%?"
- PM decides: Is the response working? Need new approach?

---

## Decision Tree: "Should I Use AI for This?"

<ConceptCard title="🤖 Decision Tree: Should I Use AI?">
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.75rem 1rem; border-radius: 8px; font-weight: 600; min-width: 280px;">1️⃣ Is data volume large (100+ records)?</div>
      <div style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.9em;">
        <span style="color: #ef4444;">❌ NO → Go manual / stay manual</span>
        <span style="color: #22c55e;">✅ YES → Continue...</span>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.75rem 1rem; border-radius: 8px; font-weight: 600; min-width: 280px;">2️⃣ Is AI error risk LOW or MEDIUM?</div>
      <div style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.9em;">
        <span style="color: #ef4444;">❌ NO (Safety-critical) → AI for analysis only</span>
        <span style="color: #22c55e;">✅ YES → Continue...</span>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.75rem 1rem; border-radius: 8px; font-weight: 600; min-width: 280px;">3️⃣ Can output be reviewed quickly?</div>
      <div style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.9em;">
        <span style="color: #ef4444;">❌ NO → Review overhead exceeds AI time savings</span>
        <span style="color: #22c55e;">✅ YES → Continue...</span>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.75rem 1rem; border-radius: 8px; font-weight: 600; min-width: 280px;">4️⃣ Is approved tooling available?</div>
      <div style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.9em;">
        <span style="color: #ef4444;">❌ NO → Stop; do not use public/unapproved AI</span>
        <span style="color: #22c55e;">✅ YES → Use AI + HITL review ✨</span>
      </div>
    </div>
  </div>
</ConceptCard>

---

## Predictive vs. Agile AI Workflows

AI applications differ based on your delivery approach. Match the tool to the methodology.

### Predictive (Waterfall) AI Applications

| Phase | AI Application | Value |
|---|---|---|
| **Initiation** | Draft Business Case from strategic docs | 2-3 hours → 20 minutes |
| **Planning** | Generate WBS from scope statement; Critical Path analysis | Pattern-match from historical projects |
| **Execution** | Status report generation from PM tools | Consistent, formatted outputs |
| **Monitoring** | EVM forecasting (EAC, TCPI calculations) | Real-time variance alerts |
| **Closing** | Lessons learned clustering; Final report draft | Theme extraction from retrospectives |

**Key Governance Pattern (Predictive):**
- AI drafts → PM reviews → CCB approves → Baseline locked
- No AI changes to baseline without change control

### Agile AI Applications

| Practice | AI Application | Value |
|---|---|---|
| **Product Backlog** | Convert epic descriptions to user stories with acceptance criteria | Backlog grooming speed 3x |
| **Sprint Planning** | Identify dependencies; flag over-committed sprints | Risk surfacing before commitment |
| **Daily Scrum** | Summarize async standup messages into blockers/progress | Virtual team alignment |
| **Sprint Review** | Draft demo notes; generate stakeholder summary | Communication efficiency |
| **Retrospective** | Cluster feedback into themes; suggest experiments | Actionable insights from noise |

**Key Governance Pattern (Agile):**
- AI suggests → Team decides → Backlog reflects team consensus
- Product Owner has final say on backlog priority, not AI

### Comparison Table

| Factor | Predictive AI Use | Agile AI Use |
|---|---|---|
| **Change frequency** | Low (baseline-driven) | High (backlog-driven) |
| **Approval gate** | CCB / Formal Change Control | Product Owner / Team consensus |
| **Primary value** | Forecasting, compliance documentation | Speed, communication, refinement |
| **Risk focus** | Variance from plan | Sprint commitment feasibility |

---

## AI in Hybrid Projects

Hybrid methodologies combine predictive and agile elements. AI must be applied context-appropriately.

### Common Hybrid Patterns

| Pattern | Predictive Component | Agile Component | AI Application |
|---|---|---|---|
| **Water-Scrum-Fall** | Initiation/Closing | Development sprints | AI for governance docs (predictive) + sprint support (agile) |
| **Agile with Predictive Governance** | Milestone reporting, budget | Feature delivery | AI forecasting for milestones; AI grooming for features |
| **Phase-Gated Agile** | Stage gates, compliance | Within-phase agile | AI compliance checklists; AI sprint planning |

### Worked Example: Hybrid ERP Implementation

<strong>Project Structure:</strong>
- Phase 1 (Predictive): Requirements, vendor selection, contract
- Phase 2 (Agile): Configuration sprints, customization
- Phase 3 (Predictive): UAT, deployment, training, cutover

<strong>AI Application by Phase:</strong>

| Phase | AI Tool | Governance |
|---|---|---|
| Phase 1 | Draft RFP, analyze vendor proposals, compare bids | Formal CCB review before vendor selection |
| Phase 2 | Generate user stories from requirements, retrospective themes | Product Owner approves stories; team owns estimates |
| Phase 3 | Training material draft, deployment checklist, cutover communications | PM reviews; sponsor approves external comms |

---

## Monte Carlo Simulation with AI

Monte Carlo simulation runs thousands of scenarios to predict project outcomes. AI accelerates setup and interpretation.

### Traditional Monte Carlo Process
1. Define task duration ranges (optimistic, most likely, pessimistic)
2. Run 1,000-10,000 simulations
3. Generate probability distribution of project completion
4. Identify confidence levels (e.g., "80% confident finish by June 15")

### AI-Enhanced Monte Carlo

| Enhancement | How AI Helps | PM Value |
|---|---|---|
| **Data Preparation** | Extract historical duration data from past projects | Minutes vs. hours of data gathering |
| **Range Estimation** | Suggest O-M-P ranges based on similar tasks | Reduces estimation bias |
| **Correlation Detection** | Identify task dependencies that affect outcomes together | More realistic simulations |
| **Result Interpretation** | Explain simulation results in plain language | Stakeholder-ready insights |
| **What-If Analysis** | Quickly re-run with changed assumptions | Faster decision support |

### Practical Example: Schedule Risk Analysis

<strong>Scenario:</strong> You have a 6-month project with 50 tasks. Need to determine probability of on-time delivery.

**AI-Assisted Process:**
1. **Prompt AI**: "Extract duration estimates from attached project plan. For each task, suggest optimistic and pessimistic ranges based on historical variance patterns."
2. **AI Output**: Table with O-M-P estimates for each task
3. **Run Simulation**: Use PM tool (Monte Carlo feature) or specialized software
4. **AI Interpretation Prompt**: "Explain these Monte Carlo results to my sponsor. Focus on: probability of meeting deadline, top 5 risk-driving tasks, recommendation."

<strong>AI Interpretation Output Example:</strong>
> "Based on 10,000 simulations, there is a **62% probability** of completing by the target date. The **top risk drivers** are: (1) Integration Testing (high variance), (2) Vendor Delivery (external dependency), (3) UAT (scope uncertainty). **Recommendation**: Add 2-week buffer to integration; confirm vendor SLA in writing; freeze scope for UAT phase."

::: tip Exam Insight
Monte Carlo questions typically ask about **confidence levels** and **risk mitigation**. If simulation shows <80% confidence, the PM should investigate the highest-variance tasks and apply targeted mitigation.
:::

---

## Scope Creep Detection via AI (NLP Analysis)

AI can analyze project communications to detect early signs of scope creep before formal change requests.

### How It Works

1. **Input Sources**: Emails, meeting transcripts, chat logs, ticket comments (sanitized)
2. **NLP Analysis**: AI scans for keywords/patterns indicating scope expansion
3. **Flagging**: AI surfaces concerning phrases for PM review
4. **Action**: PM investigates, decides if change control is needed

### Scope Creep Indicator Keywords

| Category | Keywords/Phrases | Risk Level |
|---|---|---|
| **Feature Expansion** | "wouldn't it be nice if...", "while we're at it...", "can we also add..." | Medium |
| **Unplanned Work** | "this wasn't in the original plan but...", "the client mentioned...", "we should probably..." | High |
| **Assumption Changes** | "I thought we agreed...", "that's not what I meant...", "we need to revisit..." | Medium |
| **Scope Confusion** | "is this in scope?", "I'm not sure if we're supposed to...", "who's responsible for..." | Low (early warning) |

### Practical Implementation

<ConceptCard title="🔍 Scope Scan Prompt">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 8px; padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.85em; line-height: 1.6;">
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Role:</span> <span style="color: #e2e8f0;">Act as a scope management analyst.</span></div>
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Task:</span> <span style="color: #e2e8f0;">Scan these meeting notes for scope creep indicators.</span></div>
    <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Flag:</span> <span style="color: #e2e8f0;">(1) new features not in approved scope, (2) changed assumptions, (3) unplanned work.</span></div>
    <div><span style="color: #64ffda; font-weight: bold;">Output:</span> <span style="color: #ffd93d;">Table with quote, page reference, risk level (L/M/H), and recommended action.</span></div>
  </div>
</ConceptCard>

<strong>Sample AI Output:</strong>

| Quote | Source | Risk | Recommended Action |
|---|---|---|---|
| "While we're building the dashboard, can we add a mobile view?" | Week 3 standup | M | Confirm if mobile is in scope; if not, route to change control |
| "The vendor said they can also provide the analytics module" | Sponsor email | H | Verify contract scope; potential scope change or upsell |
| "I thought the integration was bidirectional" | Dev team chat | M | Clarify requirements; may indicate misaligned expectations |

---

## Vendor/Procurement AI Applications

AI accelerates procurement processes while maintaining governance.

### AI Use Cases in Procurement

| Activity | AI Application | Governance Control |
|---|---|---|
| **RFP Drafting** | Generate RFP sections from requirements docs | PM + Procurement review before release |
| **Proposal Analysis** | Compare vendor proposals against evaluation criteria | Human scoring committee makes final decision |
| **Contract Review** | Flag unusual clauses, missing SLAs, risky terms | Legal review required for all flagged items |
| **Supplier Risk Scoring** | Analyze supplier financial/reputation data | HITL validation; no auto-disqualification |
| **Bid Comparison** | Create side-by-side comparison matrices | Procurement team validates accuracy |

### Worked Example: AI-Assisted Vendor Selection

<strong>Scenario:</strong> 5 vendors responded to your RFP. Need to shortlist to 3 for demos.

<ConceptGrid>
  <ConceptCard title="📋 Step 1: AI Extraction">
    <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 8px; padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.85em; line-height: 1.6;">
      <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Task:</span> <span style="color: #e2e8f0;">Extract key data points from each vendor proposal attached.</span></div>
      <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Data:</span> <span style="color: #e2e8f0;">Price (implementation + annual), timeline, team size, experience, SLA terms, contract flexibility.</span></div>
      <div><span style="color: #64ffda; font-weight: bold;">Output:</span> <span style="color: #ffd93d;">Comparison table with citations to source page numbers.</span></div>
    </div>
  </ConceptCard>
  <ConceptCard title="📊 Step 2: AI Scoring (Draft)">
    <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 8px; padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.85em; line-height: 1.6;">
      <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Task:</span> <span style="color: #e2e8f0;">Score each vendor against evaluation criteria:</span></div>
      <div style="margin-left: 1rem; margin-bottom: 0.5rem; color: #e2e8f0;">Cost (25%) | Timeline (20%) | Experience (25%) | SLA (15%) | Contract (15%)</div>
      <div style="margin-bottom: 0.5rem;"><span style="color: #64ffda; font-weight: bold;">Scoring:</span> <span style="color: #e2e8f0;">1-5 scale per criterion. Calculate weighted total.</span></div>
      <div><span style="color: #64ffda; font-weight: bold;">Constraints:</span> <span style="color: #ffd93d;">Flag any criteria where data was incomplete or unclear.</span></div>
    </div>
  </ConceptCard>
</ConceptGrid>

**Step 3: Human Validation**
- Procurement committee reviews AI-generated scores
- Validates cost interpretations (hidden fees, assumptions)
- Checks reference quality (not just quantity)
- Makes final shortlist decision

**Step 4: Document Decision**
- Record AI inputs and human adjustments
- Note any criteria where human judgment overrode AI scoring
- Maintain audit trail for procurement compliance

---

<ConceptCard type="study-tip">
  <strong> Exam Insight:</strong> AI is an <strong>Accelerator</strong>, not a defined <strong>Methodology</strong>. You don't "switch to AI project management." You use AI tools *inside* your Predictive or Agile methodology to remove friction.
</ConceptCard>

---

## Quick Review

<FlashcardCarousel :cards="[
  { front: `AI in Initiation?`, back: `Drafting Project Charter from notes, analyzing market trends for Business Case.` },
  { front: `AI in Planning (WBS)?`, back: `Suggesting task breakdowns based on historical projects or standard templates.` },
  { front: `AI for Risk Identification?`, back: `Rapid brainstorming of potential threats/opportunities using \\'Pre-mortem\\' prompts.` },
  { front: `AI in Execution (Meetings)?`, back: `Transcribing audio and auto-generating action items and decisions.` },
  { front: `AI in Monitoring (Sentiment)?`, back: `Scanning communication channels to detect team burnout or frustration trends early.` },
  { front: `AI in Closing (Lessons Learned)?`, back: `Clustering hundreds of retrospective comments into key themes and actionable recommendations.` },
  { front: `Predictive vs. Agile AI Use?`, back: `Predictive = Forecasting/Compliance docs. Agile = Backlog refinement/Sprint planning support.` },
  { front: `How does AI help with Scope Creep?`, back: `NLP analysis of emails/chats can flag phrases like \\'wouldn\\'t it be nice\\' or \\'add this feature\\'.` },
  { front: `AI-Enhanced Monte Carlo?`, back: `Accelerates data prep and range estimation (O-M-P) based on historicals, then interprets results.` },
  { front: `Least Privilege for AI Agents?`, back: `Granting AI automation tools only the minimum access needed (e.g., read-only) and requiring approval gates.` }
]" />

