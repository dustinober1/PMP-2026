
<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 7.2 Quality Management

**ECO Task**: Plan and manage quality
**ECO Task**: Employ continuous process improvement

In the PMP exam context, **Quality** is defined as the *degree to which a set of inherent characteristics fulfills requirements*. Put simply: quality is **meeting requirements and acceptance criteria consistently** (and preventing defects before they escape).

### Two Critical Dimensions
1.  **Conformance to requirements**: Does the deliverable meet the technical specs? (e.g., "Does the bridge support 50 tons?")
2.  **Fitness for use**: Does the deliverable actually solve the customer's problem? (e.g., "Is the bridge located where people need to cross?")
    *   *Exam Note*: You need both. A product that meets specs but is unusable is a quality failure.

---

##  Quality vs. Grade
A common PMP trap is confusing these two concepts.

<ConceptGrid>
  <ConceptCard 
    title="Grade"
    subtitle="Category"
    variant="primary"
  >
    A rank assigned to items having the same functional use but different technical characteristics (e.g., "Economy" vs. "First Class").
  </ConceptCard>
  <ConceptCard 
    title="Quality"
    subtitle="Performance"
    variant="secondary"
  >
    How well the item follows the predefined specifications and requirements. (e.g., Does the economy seat actually recline?).
  </ConceptCard>
</ConceptGrid>

::: warning  The Golden Rule
Low **Grade** is acceptable (if that's what was paid for). Low **Quality** is *never* acceptable.
:::

---

## The PMP Mental Model (Continuous Quality Loop)
Quality management is not “test at the end.” It’s a loop:

1. **Plan quality** (standards, metrics, checklists, acceptance criteria)
2. **Build quality in** (process discipline, reviews, automation, training)
3. **Verify** (inspection/testing against requirements)
4. **Fix causes, not symptoms** (root cause + continuous improvement)

---

##  Plan vs. Manage vs. Control (Know the Exam Wording)
| Concept | When | Focus | The exam is asking… |
|---|---|---|---|
| **Plan Quality** | Planning | Standards + metrics | “What quality do we need?” |
| **Manage Quality (QA)** | Executing | Process effectiveness | “Are we using the right process?” |
| **Control Quality (QC)** | Monitoring | Deliverable correctness | “Did we build it correctly?” |

::: tip  Shortcut
If you see words like **audit, process analysis, ensure procedures** → think **QA (Manage Quality)**.  
If you see **inspect, test, verify deliverable** → think **QC (Control Quality)**.
:::

---

##  QA vs. QC (Process vs. Product)
Modern project management moves from checking for errors (reactive) to preventing them (proactive).

<ConceptGrid>
  <ConceptCard 
    title="Quality Assurance (QA)"
    subtitle="The Process"
    variant="primary"
  >
    Proactive activities aimed at <strong>preventing defects</strong> by ensuring the team follows the right procedures.
    <ul>
      <li>Quality audits</li>
      <li>Process analysis and improvement</li>
      <li>Peer reviews (process-focused)</li>
    </ul>
  </ConceptCard>
  <ConceptCard 
    title="Quality Control (QC)"
    subtitle="The Result"
    variant="secondary"
  >
    Reactive activities aimed at <strong>identifying defects</strong> in the final deliverables before they reach the customer.
    <ul>
      <li>Testing</li>
      <li>Inspections</li>
      <li>Verification against acceptance criteria</li>
    </ul>
  </ConceptCard>
</ConceptGrid>

---

##  Cost of Quality (CoQ) (High-Yield Exam Topic)
CoQ = cost of **conformance** + cost of **nonconformance**.

| Category | Type | Examples | Exam takeaway |
|---|---|---|---|
| **Prevention** | Conformance | Training, standards, design reviews, automation | Cheapest way to reduce defects |
| **Appraisal** | Conformance | Testing, inspections, audits | Detects defects before release |
| **Internal failure** | Nonconformance | Rework, scrap, retest | Expensive but contained |
| **External failure** | Nonconformance | Warranty, recalls, lawsuits, reputation loss | Most expensive (customer impact) |

::: warning  PMP pattern
When options include “train/improve process now” vs “test more at the end,” prevention usually wins unless the question explicitly says the defect is already in production/customer hands.
:::

---

##  Quality Trade-offs
You cannot always have everything. The PM must make conscious choices:

*   **Schedule vs. Quality**: "Rushing" often leads to technical debt. *Exam Rule*: If you must rush, you usually have to cut scope to maintain quality. Cutting quality to save time is rarely the "correct" PMP answer unless clearly justified as a strategic "time-to-market" play with a plan to fix it later.
*   **Scope vs. Quality**: Better to deliver fewer features that work perfectly (High Quality) than many features that are buggy.
*   **Cost vs. Quality**: Cutting prevention costs (e.g., training) often increases failure costs (e.g., rework).

---

##  Quality Planning (Setting the Foundation)

Quality planning happens during the **Planning Process Group** and defines:
1. **Quality standards** (industry standards, regulations, internal policies)
2. **Quality metrics** (measurable targets like defect density, test pass rate)
3. **Quality checklists** (verification steps)
4. **Acceptance criteria** (how we know it's done)
5. **Quality control measurements** (inspection/test approach)

### Key Quality Planning Outputs
| Output | Purpose | Example |
|---|---|---|
| **Quality Management Plan** | How quality will be managed (standards, tools, roles) | "All code requires peer review; automated tests must pass before merge" |
| **Quality Metrics** | Measurable quality targets | "Defect density <0.5 per KLOC; 95% test pass rate" |
| **Test Strategy** | Approach to verification/validation | "Unit tests + integration tests + UAT" |
| **Acceptance Criteria** | Definition of "acceptable" deliverable | "Passes all security scans; <2s page load; zero critical bugs" |

::: tip  Exam Insight
If the question asks "How should the PM ensure quality requirements are clear?", the answer often involves **defining acceptance criteria** and **quality metrics** during planning (not waiting until execution).
:::

---

##  Statistical Process Control (SPC) Deep Dive

SPC uses statistics to determine if your process is stable and performing as expected. This is high-yield material for the PMP exam.

### Sigma Levels and Defect Rates

The sigma level (σ) indicates how many standard deviations fit between the process mean and specification limits.

| Sigma Level | Defects Per Million Opportunities (DPMO) | Yield (% Good) | Industry Context |
|---|---|---|---|
| **1σ** | 691,462 | 30.85% | Very poor |
| **2σ** | 308,538 | 69.15% | Poor |
| **3σ** | 66,807 | 93.32% | Acceptable for some industries |
| **4σ** | 6,210 | 99.38% | Good |
| **5σ** | 233 | 99.977% | Excellent |
| **6σ** | 3.4 | 99.99966% | World-class (Six Sigma goal) |

**Exam Context**: Most organizations aim for **3σ to 4σ** as a baseline. Six Sigma (6σ) is the aspirational target for critical processes.

### Process Capability Indices (Cp and Cpk)

These indices measure whether your process can consistently meet specification requirements.

#### Cp (Process Capability)
$$C_p = \frac{USL - LSL}{6\sigma}$$

- **USL** = Upper Specification Limit
- **LSL** = Lower Specification Limit
- **σ** = Process standard deviation

**Interpretation**:
- Cp < 1.0 → Process is NOT capable (too much variation)
- Cp = 1.0 → Process barely fits within specs
- Cp > 1.33 → Process is capable (good margin)
- Cp > 2.0 → Excellent capability

#### Cpk (Process Capability Index - Centered)
$$C_{pk} = \min\left(\frac{USL - \bar{x}}{3\sigma}, \frac{\bar{x} - LSL}{3\sigma}\right)$$

Cpk accounts for process centering:
- **Cpk = Cp** → Process is perfectly centered
- **Cpk < Cp** → Process is off-center (drifting toward one spec limit)

::: warning  Exam Trap
A process can have high Cp but low Cpk if it's centered far from the middle of the specification range. The exam loves this distinction!
:::

### Worked Example: Process Capability

**Scenario**: A machining process produces parts with a target diameter of 10.0mm.
- Specification limits: 10.0 ± 0.3mm (LSL = 9.7mm, USL = 10.3mm)
- Process mean: 10.1mm
- Process σ: 0.08mm

**Calculate Cp**:
$$C_p = \frac{10.3 - 9.7}{6 × 0.08} = \frac{0.6}{0.48} = 1.25$$

**Calculate Cpk**:
$$C_{pk} = \min\left(\frac{10.3 - 10.1}{3 × 0.08}, \frac{10.1 - 9.7}{3 × 0.08}\right) = \min\left(\frac{0.2}{0.24}, \frac{0.4}{0.24}\right) = \min(0.83, 1.67) = 0.83$$

**Interpretation**: 
- Cp = 1.25 suggests the process could be capable
- Cpk = 0.83 shows the process is off-center (too high) and is NOT capable
- **Action**: Re-center the process toward 10.0mm

---

##  Cost of Quality (CoQ): Detailed Calculation

Understanding CoQ helps justify prevention investments to stakeholders.

### CoQ Categories Expanded

| Category | Type | Examples | Typical % of Total CoQ |
|---|---|---|---|
| **Prevention** | Conformance | Training, process design, quality planning, tools/automation, design reviews | 10-15% |
| **Appraisal** | Conformance | Testing, inspections, audits, verification, calibration | 20-25% |
| **Internal Failure** | Nonconformance | Rework, scrap, retest, failure analysis, downtime | 25-40% |
| **External Failure** | Nonconformance | Warranty, recalls, legal fees, reputation loss, customer support | 25-40% |

### Worked Example: CoQ Analysis

**Scenario**: A software development project has the following quality costs:

| Cost Item | Category | Amount |
|---|---|---|
| Developer training on secure coding | Prevention | $15,000 |
| Code review tooling | Prevention | $5,000 |
| Automated testing infrastructure | Appraisal | $20,000 |
| QA team salaries (testing phase) | Appraisal | $45,000 |
| Bugs found in development | Internal Failure | $30,000 |
| Rework from failed UAT | Internal Failure | $25,000 |
| Customer-reported defects (support) | External Failure | $40,000 |
| Emergency patch deployment | External Failure | $15,000 |

**CoQ Calculation**:
- Prevention: $15k + $5k = **$20,000** (10%)
- Appraisal: $20k + $45k = **$65,000** (33%)
- Internal Failure: $30k + $25k = **$55,000** (28%)
- External Failure: $40k + $15k = **$55,000** (28%)
- **Total CoQ: $195,000**

**Insight**: External failures equal internal failures, indicating quality escapes. **Recommendation**: Invest more in prevention (training, reviews) to shift costs left.

::: tip  The Quality Investment Principle
Every $1 spent on **prevention** can save $10 in **appraisal** and $100 in **failure costs**. This is why "build quality in" is more cost-effective than "test quality in."
:::

---

##  Voice of the Customer (VOC) Tools

Quality starts with understanding what customers truly value.

### Kano Model (Customer Satisfaction Analysis)

The Kano Model categorizes requirements by their impact on customer satisfaction:

| Category | Description | Customer Response | Example |
|---|---|---|---|
| **Basic (Must-Have)** | Expected features—absence causes dissatisfaction | "Of course it should have this" | Car has brakes |
| **Performance (Linear)** | "More is better"—satisfaction scales with delivery | "The faster, the better" | Car acceleration |
| **Delighters (Excitement)** | Unexpected features—create wow factor | "I didn't expect this!" | Car seat warmers |
| **Indifferent** | Features customers don't care about | "Doesn't matter to me" | Engine color |
| **Reverse** | Features that some customers actively dislike | "I hate this feature" | Automatic pop-up ads |

**Exam Context**: 
- **Basic features** must be delivered to avoid failure
- **Delighters** differentiate your product but don't compensate for missing basics
- Focus on **Performance features** for competitive advantage

### Quality Function Deployment (QFD) - House of Quality

QFD translates customer needs into technical specifications. The "House of Quality" matrix connects:

1. **Customer Requirements** (WHATs) - left side
2. **Technical Requirements** (HOWs) - top
3. **Relationship Matrix** - center (how HOWs affect WHATs)
4. **Competitive Analysis** - right side
5. **Correlation Matrix** - roof (how HOWs affect each other)
6. **Targets** - bottom

**Simplified Example**:
| Customer Need (WHAT) | Fast Load Time | Mobile Responsive | Easy Navigation |
|---|---|---|---|
| Quick access to information | ●●● Strong | ●● Medium | ● Weak |
| Works on my phone | ● Weak | ●●● Strong | ●● Medium |
| Find what I need easily | ● Weak | ● Weak | ●●● Strong |

**Priority (weight × relationship)**: Fast Load Time gets highest priority for "quick access."

---

##  Design of Experiments (DoE)

DoE is used when you need to optimize a process by testing multiple variables simultaneously.

### When to Use DoE
- Multiple factors may affect quality outcomes
- Testing all combinations individually is too expensive
- You need to find optimal settings

### Types of Designs

| Design | Description | When to Use |
|---|---|---|
| **Full Factorial** | Test all combinations of all factors | Small number of factors (2-3) |
| **Fractional Factorial** | Test subset of combinations | Many factors; need efficiency |
| **Taguchi Method** | Focus on reducing variation (robust design) | Manufacturing; reducing defects |
| **Response Surface** | Find optimal settings for continuous factors | Fine-tuning process parameters |

### DoE Example

**Scenario**: A manufacturing process has 3 factors that might affect quality:
- Temperature (Low/High)
- Pressure (Low/High)
- Speed (Low/High)

**Full Factorial Design**: 2³ = 8 test runs covering all combinations

| Run | Temp | Pressure | Speed | Quality Score |
|---|---|---|---|---|
| 1 | Low | Low | Low | 85 |
| 2 | Low | Low | High | 78 |
| 3 | Low | High | Low | 90 |
| 4 | Low | High | High | 82 |
| 5 | High | Low | Low | 88 |
| 6 | High | Low | High | 75 |
| 7 | High | High | Low | 95 |
| 8 | High | High | High | 87 |

**Analysis**: High Pressure + Low Speed yields highest quality (Run 7: 95)

::: tip  Exam Insight
DoE appears when the scenario describes "multiple variables" and "need to find optimal settings." It's more efficient than testing one variable at a time.
:::

---

##  Continuous Improvement Frameworks

### Plan-Do-Check-Act (PDCA / Deming Cycle)
The foundational continuous improvement loop:
1. **Plan**: Identify the problem and plan the change
2. **Do**: Implement the change on a small scale (test)
3. **Check**: Measure results and compare to expectations
4. **Act**: If successful, standardize; if not, learn and adjust

**Exam Context**: PDCA is the basis for Agile retrospectives and Kaizen.

### Six Sigma & DMAIC
Six Sigma aims for near-perfect quality (3.4 defects per million opportunities). The DMAIC methodology is used for process improvement:

| Phase | What it means | Key Activities |
|---|---|---|
| **Define** | Define the problem and project goals | Project charter, VOC (Voice of Customer), SIPOC diagram |
| **Measure** | Measure current performance | Collect baseline data, define metrics |
| **Analyze** | Identify root causes | Fishbone, Pareto, statistical analysis |
| **Improve** | Implement solutions | Test solutions, pilot changes |
| **Control** | Sustain improvements | Control charts, updated procedures, training |

**Exam Tip**: If the scenario describes **recurring defects** and asks for a **structured improvement approach**, DMAIC or root cause analysis (Fishbone + 5 Whys) are strong choices.

### Kaizen (Continuous Improvement)
Japanese philosophy of continuous, incremental improvement involving everyone. In Agile, this is embodied in **retrospectives**.

---

##  The Quality Toolbox (7 Basic Tools)
You must know **when** to use each tool:

| Tool | Best used when you need to… |
|---|---|
| **Cause-and-effect (Fishbone/Ishikawa)** | Find **root causes** (structured brainstorming) |
| **Pareto chart** | Prioritize the “vital few” causes (80/20) |
| **Control chart** | Determine whether a process is **stable/in control** |
| **Flowchart** | Visualize process steps and find bottlenecks/hand-off errors |
| **Scatter diagram** | See correlation between variables (possible relationship) |
| **Histogram** | See distribution/spread of results (shape, variance) |
| **Checksheet** | Collect frequency data in real time (defect counts) |

### Control Chart Essentials (What the Exam Tests)
A control chart tracks process performance over time to detect variation.

#### Key Components
- **Center line (mean)**: The process average
- **Upper Control Limit (UCL)**: +3 sigma from mean (statistical limit)
- **Lower Control Limit (LCL)**: -3 sigma from mean (statistical limit)
- **Specification limits**: Customer/contract requirements (different from control limits!)

#### Rule of Seven (Special Cause Detection)
If you see **7 or more consecutive points** on one side of the mean (even if all are within control limits), investigate for **special cause variation**.

#### Control vs. Specification (Critical Distinction)
| Scenario | In Control? | Meets Spec? | Action |
|---|---|---|---|
| All points within UCL/LCL, centered on mean | Yes | Depends | Check if mean aligns with spec limits |
| All points within UCL/LCL, but many outside spec limits | Yes | No | **Process is stable but not capable** → Improve process |
| Points outside UCL/LCL | No | N/A | **Investigate special cause** → Fix the outlier |

::: warning  Exam Trap
A process can be "in control" (stable) but still produce defects (not capable). The exam loves this scenario!
:::

### Statistical Sampling
When inspecting 100% of deliverables is impractical, use sampling:

| Sampling Method | When to Use | Example |
|---|---|---|
| **Attribute Sampling** | Pass/fail inspection (conforming vs non-conforming) | "20 out of 100 units inspected are defective" |
| **Variable Sampling** | Continuous measurement (degree of conformance) | "Average weight of sampled units is 10.2 oz ± 0.3 oz" |

**Sample Size Principle**: Larger samples give more confidence but cost more. Use statistical methods (confidence level, margin of error) to determine appropriate sample size.

### Marginal Analysis
Used to determine the optimal quality level:
- **Marginal Cost**: cost of one more unit of quality (e.g., additional testing)
- **Marginal Benefit**: benefit of one more unit of quality (e.g., fewer defects)

**Optimal Quality Point**: Where marginal cost = marginal benefit (spending more on prevention/appraisal yields no additional value).

**Exam Context**: "Continuing to test yields diminishing returns" → suggests you've reached the marginal analysis threshold.

---

##  Root Cause Analysis (Fix Causes, Not Symptoms)
If defects repeat, you need to find *why*.

- **5 Whys**: ask “why?” until you reach a controllable process cause
- **Fishbone**: categorize causes (People/Process/Tools/Environment, etc.)
- **Corrective action**: change the process so the defect doesn’t recur

---

##  Agile Quality: DoD & TDD
In Agile, quality isn't an "end-of-sprint" activity; it's continuous.
- **Definition of Done (DoD)**: The non-negotiable quality checklist for every user story.
- **Acceptance Criteria**: what “done” means for the customer (story-level)
- **Test-Driven Development (TDD)**: write the test *before* the code to clarify requirements
- **Continuous Integration (CI)**: integrate and test frequently to reduce “late surprise” defects

### User Feedback as Quality Signal
In Agile, "fitness for use" is validated through:
*   **Sprint Reviews**: Demonstrating working software to get direct feedback.
*   **Retrospectives**: The team discusses "process quality" (how we work) and improves it for the next sprint.


::: tip  Templates
Use [7.4 Tools & Templates](./toolkit) for a starter DoD checklist and quick “which tool do I use?” reference.
:::


## Quick Review

<FlashcardCarousel :cards="[
  { front: `QA vs. QC?`, back: `QA is process-focused and proactive (prevention). QC is product-focused and reactive (inspection).` },
  { front: `Quality vs. Grade?`, back: `Quality is how well it meets specs (must be high). Grade is the rank/category (can be low).` },
  { front: `Cost of Quality (CoQ) components?`, back: `Conformance (Prevention + Appraisal) and Nonconformance (Internal + External Failure).` },
  { front: `What is the Rule of Seven in Control Charts?`, back: `7 consecutive points on one side of the mean indicates a non-random shift requiring investigation.` },
  { front: `Variable vs. Attribute Sampling?`, back: `Variable = continuous (measurement). Attribute = discrete (pass/fail).` },
  { front: `What are the 7 Basic Quality Tools?`, back: `Cause-Effect, Flowchart, Checksheet, Pareto, Histogram, Control Chart, Scatter Diagram.` },
  { front: `What is DMAIC?`, back: `Six Sigma methodology: Define, Measure, Analyze, Improve, Control - for process improvement.` },
  { front: `What is the Kano Model?`, back: `Categorizes requirements by customer satisfaction impact: Basic (must-have), Performance (linear), Delighters (excitement).` },
  { front: `What is the Definition of Done (DoD)?`, back: `A team-level quality checklist that applies to ALL stories - ensures consistent completeness standards.` },
  { front: `What is marginal analysis in quality?`, back: `Finding the optimal quality level where marginal cost equals marginal benefit - more investment yields no additional value.` }
]" />

::: tip  Exam Insight
If defects are recurring, the FIRST step is <strong>Root Cause Analysis</strong> (often <strong>Fishbone + 5 Whys</strong>). Fixing symptoms (e.g., “test more”) without fixing causes leads to rework and higher Cost of Quality.
:::

---

##  Exam Scenarios: “First Action” Clues
| If the question says… | Best first move is usually… |
|---|---|
| “Audit / ensure the process is followed” | **QA (Manage Quality)** |
| “Test/inspect the deliverable” | **QC (Control Quality)** |
| “Recurring defects / defect trend” | **Root cause analysis** |
| “Process instability / inconsistent results” | **Control chart investigation** |
| “Most frequent defect types” | **Pareto chart** |



