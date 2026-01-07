<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 6.4 Quality Planning

**ECO Task**: Plan and manage quality

Quality management ensures that the project meets the requirements and delivers value. It is not just about finding defects—it is about **preventing them** and continuously improving.

---

##  Quality Concepts for PMP

The PMP exam tests your understanding of quality principles, not just tools. Master these core concepts:

<ConceptGrid>
  <ConceptCard 
    title="Prevention over Inspection"
    variant="primary"
  >
    Building quality in from the start is cheaper than finding defects later. <strong>Cost of prevention is less than Cost of failure</strong>.
  </ConceptCard>
  <ConceptCard 
    title="Continuous Improvement"
    variant="secondary"
  >
    Quality is never "done." Use <strong>Kaizen</strong> (small improvements) and retrospectives to keep improving.
  </ConceptCard>
  <ConceptCard 
    title="Customer Focus"
    variant="primary"
  >
    Quality is defined by the <strong>customer</strong>, not the team. Meet requirements, not just specs.
  </ConceptCard>
</ConceptGrid>

---

##  The Quality Planning Flow

### Step 1: Plan Quality Management
**Purpose**: Identify quality requirements and standards; document compliance approach
**Key Outputs**:
- Quality Management Plan
- Quality metrics (specific, measurable)
- Quality checklists
- Process improvement plan

### Quality Planning vs. Quality Assurance vs. Quality Control

| Process | When | Focus | Question Answered |
|:--------|:-----|:------|:------------------|
| **Plan Quality** | Planning | Define standards | "What quality do we need?" |
| **Manage Quality** (QA) | Executing | Process effectiveness | "Are we using the right processes?" |
| **Control Quality** (QC) | Monitoring | Product correctness | "Did we build it correctly?" |

::: tip  Key Distinction
- **Quality Assurance (QA)** = Process-focused (are we building it right way?)
- **Quality Control (QC)** = Product-focused (did we build it correctly?)
- **Plan Quality** = Standards and metrics definition
:::

---

##  Quality vs. Grade

The exam loves to test this distinction:

| Aspect | Quality | Grade |
|:-------|:--------|:------|
| **Definition** | Degree to which requirements are met | Category based on features/functions |
| **Example** | No defects, meets all specs | Economy vs. Premium product |
| **Low is...** | Always a problem | Not necessarily a problem |
| **PM Responsibility** | Meet quality requirements | Appropriate grade for context |

**Example**:
- A **low-quality** car has defects, rattles, and doesn't meet specs (problem)
- A **low-grade** car is a basic model without luxury features (acceptable if that's what was ordered)

---

##  Quality Planning Tools & Techniques

### Cost of Quality (CoQ)

The **Cost of Quality** represents the total cost of conformance and non-conformance.

| Category | Type | Examples | When Incurred |
|:---------|:-----|:---------|:--------------|
| **Prevention Costs** | Conformance | Training, documentation, design reviews, prototyping | Before defects occur |
| **Appraisal Costs** | Conformance | Testing, inspections, audits, quality metrics | During production |
| **Internal Failure** | Non-Conformance | Rework, scrap, retesting | Before delivery |
| **External Failure** | Non-Conformance | Warranty, returns, lawsuits, reputation damage | After delivery |

### Cost of Quality Relationship

<ConceptCard title="Cost of Quality Trade-off" variant="secondary">
  <div style="padding: 20px; background: var(--vp-c-bg-soft); border-radius: 8px; text-align: center;">
    <div style="height: 250px; width: 100%; position: relative;">
      <svg viewBox="0 0 400 250" style="width: 100%; height: 100%; overflow: visible;" preserveAspectRatio="none">
        <line x1="40" y1="210" x2="380" y2="210" stroke="var(--vp-c-text-1)" stroke-width="2" />
        <line x1="40" y1="210" x2="40" y2="20" stroke="var(--vp-c-text-1)" stroke-width="2" />
        <text x="50" y="20" fill="var(--vp-c-text-1)" font-size="12">Cost</text>
        <text x="340" y="225" fill="var(--vp-c-text-1)" font-size="12">Quality Level</text>
        <path d="M 40 20 Q 150 180, 380 200" fill="none" stroke="var(--vp-c-danger)" stroke-width="3" />
        <text x="60" y="60" fill="var(--vp-c-danger)" font-size="12">Failure Costs</text>
        <path d="M 40 200 Q 250 180, 380 20" fill="none" stroke="var(--vp-c-brand)" stroke-width="3" />
        <text x="260" y="50" fill="var(--vp-c-brand)" font-size="12">Prevention + Appraisal</text>
        <path d="M 40 120 Q 180 250, 380 120" fill="none" stroke="var(--vp-c-warning)" stroke-width="4" stroke-dasharray="5,5" />
        <text x="180" y="50" fill="var(--vp-c-warning)" font-size="12" font-weight="bold">Total CoQ</text>
        <line x1="210" y1="180" x2="210" y2="210" stroke="var(--vp-c-text-2)" stroke-dasharray="2,2" />
        <text x="200" y="225" fill="var(--vp-c-text-2)" font-size="10">Optimal Quality</text>
      </svg>
    </div>
  </div>
</ConceptCard>

**Key Insight**: Investing in prevention and appraisal reduces total CoQ by preventing expensive failures.

---

### Quality Management Tools (The Seven Basic Tools)

The exam expects you to know when to use each quality tool:

#### 1. Cause-and-Effect Diagram (Fishbone/Ishikawa)

**Purpose**: Identify root causes of a problem

**Categories (6 Ms)**:
- **Man** (People)
- **Machine** (Equipment)
- **Method** (Process)
- **Material** (Inputs)
- **Measurement** (Metrics)
- **Mother Nature** (Environment)

**Example**:
<ConceptCard title="Fishbone (Ishikawa) Diagram" variant="secondary">
  <div style="padding: 10px; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <svg viewBox="0 0 500 250" style="width: 100%; height: auto;">
      <line x1="50" y1="125" x2="400" y2="125" stroke="var(--vp-c-text-1)" stroke-width="4" />
      <polygon points="400,115 400,135 440,125" fill="var(--vp-c-text-1)" />
      <rect x="420" y="95" width="80" height="60" rx="5" fill="var(--vp-c-warning-dimm)" stroke="var(--vp-c-warning)" stroke-width="2" />
      <text x="460" y="120" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" text-anchor="middle">DEFECTS</text>
      <text x="460" y="135" fill="var(--vp-c-text-2)" font-size="10" text-anchor="middle">(Problem)</text>
      <line x1="100" y1="50" x2="150" y2="125" stroke="var(--vp-c-brand)" stroke-width="2" />
      <text x="100" y="40" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" text-anchor="middle">People</text>
      <line x1="200" y1="50" x2="250" y2="125" stroke="var(--vp-c-brand)" stroke-width="2" />
      <text x="200" y="40" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" text-anchor="middle">Machine</text>
      <line x1="300" y1="50" x2="350" y2="125" stroke="var(--vp-c-brand)" stroke-width="2" />
      <text x="300" y="40" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" text-anchor="middle">Method</text>
      <line x1="100" y1="200" x2="150" y2="125" stroke="var(--vp-c-brand)" stroke-width="2" />
      <text x="100" y="215" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" text-anchor="middle">Material</text>
      <line x1="200" y1="200" x2="250" y2="125" stroke="var(--vp-c-brand)" stroke-width="2" />
      <text x="200" y="215" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" text-anchor="middle">Measure</text>
      <line x1="300" y1="200" x2="350" y2="125" stroke="var(--vp-c-brand)" stroke-width="2" />
      <text x="300" y="215" fill="var(--vp-c-text-1)" font-size="12" font-weight="bold" text-anchor="middle">Environment</text>
    </svg>
  </div>
</ConceptCard>

**When to Use**: Brainstorming root causes, quality improvement teams

---

#### 2. Flowchart (Process Map)

**Purpose**: Visualize process steps to identify inefficiencies or error points

**Symbols**:
- Oval = Start/End
- Rectangle = Process step
- Diamond = Decision point
- Arrow = Flow direction

**When to Use**: Understanding workflows, identifying bottlenecks, process improvement

---

#### 3. Checksheet (Tally Sheet)

**Purpose**: Collect data in a structured format during real-time observations

**Example**:
| Defect Type | Mon | Tue | Wed | Thu | Fri | Total |
|:------------|:----|:----|:----|:----|:----|:------|
| Missing data | III | II | IIII | I | II | 12 |
| Format error | II | III | II | III | I | 11 |
| Logic error | I | I | II | I | II | 7 |

**When to Use**: Systematic data collection, frequency tracking

---

#### 4. Pareto Chart (80/20 Rule)

**Purpose**: Prioritize issues by frequency or impact

**Principle**: 80% of problems come from 20% of causes

**Example**:
<ConceptCard title="Pareto Chart Example" variant="secondary">
  <div style="padding: 15px; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <div style="display: flex; align-items: flex-end; justify-content: space-around; height: 180px; padding-bottom: 20px; border-bottom: 2px solid var(--vp-c-divider); position: relative;">
      <div style="position: absolute; left: -10px; top: 50%; transform: rotate(-90deg) translateX(-50%); font-size: 0.8em; color: var(--vp-c-text-2);">Defect Count</div>
      <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
        <div style="background: var(--vp-c-brand); width: 100%; height: 120px; border-radius: 4px 4px 0 0; position: relative;">
          <div style="position: absolute; top: -20px; width: 100%; text-align: center; font-weight: bold;">45%</div>
        </div>
        <div style="margin-top: 5px; font-size: 0.8em; text-align: center;">Missing<br/>Data</div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
        <div style="background: var(--vp-c-brand-dimm); width: 100%; height: 80px; border-radius: 4px 4px 0 0; position: relative;">
           <div style="position: absolute; top: -20px; width: 100%; text-align: center; font-size: 0.9em;">30%</div>
        </div>
        <div style="margin-top: 5px; font-size: 0.8em; text-align: center;">Format<br/>Error</div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
        <div style="background: var(--vp-c-brand-light); width: 100%; height: 35px; border-radius: 4px 4px 0 0; position: relative;">
          <div style="position: absolute; top: -20px; width: 100%; text-align: center; font-size: 0.9em;">13%</div>
        </div>
        <div style="margin-top: 5px; font-size: 0.8em; text-align: center;">Logic<br/>Error</div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
        <div style="background: var(--vp-c-text-3); width: 100%; height: 15px; border-radius: 4px 4px 0 0; position: relative;">
          <div style="position: absolute; top: -20px; width: 100%; text-align: center; font-size: 0.9em;">12%</div>
        </div>
        <div style="margin-top: 5px; font-size: 0.8em; text-align: center;">Other</div>
      </div>
      <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none;">
        <polyline points="50,60 150,30 250,15 350,10" fill="none" stroke="var(--vp-c-warning)" stroke-width="3" />
        <circle cx="50" cy="60" r="4" fill="var(--vp-c-warning)" />
        <circle cx="150" cy="30" r="4" fill="var(--vp-c-warning)" />
        <circle cx="250" cy="15" r="4" fill="var(--vp-c-warning)" />
        <circle cx="350" cy="10" r="4" fill="var(--vp-c-warning)" />
      </svg>
    </div>
    <div style="margin-top: 10px; font-size: 0.8em; text-align: center; color: var(--vp-c-text-2);">
      Bars = Frequency (Left Axis) | Line = Cumulative % (Right Axis)
    </div>
  </div>
</ConceptCard>

**When to Use**: Focusing improvement efforts on highest-impact issues

---

#### 5. Histogram

**Purpose**: Show frequency distribution of data

**Example**: Distribution of defects per module
<ConceptCard title="Histogram" variant="secondary">
  <div style="padding: 15px; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <div style="display: flex; align-items: flex-end; justify-content: space-evenly; height: 150px; padding-bottom: 20px; border-bottom: 2px solid var(--vp-c-divider);">
      <div style="width: 15%; height: 20%; background: var(--vp-c-brand); border-radius: 3px 3px 0 0; position: relative;">
        <span style="position: absolute; bottom: -25px; width: 100%; text-align: center; font-size: 0.8em;">0-2</span>
      </div>
      <div style="width: 15%; height: 50%; background: var(--vp-c-brand); border-radius: 3px 3px 0 0; position: relative;">
        <span style="position: absolute; bottom: -25px; width: 100%; text-align: center; font-size: 0.8em;">3-5</span>
      </div>
      <div style="width: 15%; height: 80%; background: var(--vp-c-brand); border-radius: 3px 3px 0 0; position: relative;">
        <span style="position: absolute; bottom: -25px; width: 100%; text-align: center; font-size: 0.8em;">6-8</span>
      </div>
      <div style="width: 15%; height: 30%; background: var(--vp-c-brand); border-radius: 3px 3px 0 0; position: relative;">
        <span style="position: absolute; bottom: -25px; width: 100%; text-align: center; font-size: 0.8em;">9+</span>
      </div>
    </div>
    <div style="text-align: center; margin-top: 5px; font-weight: bold; font-size: 0.9em;">Defects per Module</div>
    <div style="text-align: center; font-size: 0.8em; color: var(--vp-c-text-2);">Shows distribution and central tendency</div>
  </div>
</ConceptCard>

**When to Use**: Understanding data distribution, identifying patterns

---

#### 6. Control Chart

**Purpose**: Monitor process stability over time

**Components**:
- **UCL** (Upper Control Limit)
- **LCL** (Lower Control Limit)
- **CL** (Center Line / Mean)
- Data points over time

**Example**:
<ConceptCard title="Control Chart Example" variant="secondary">
  <div style="padding: 15px; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <svg viewBox="0 0 400 200" style="width: 100%; height: auto;">
      <line x1="40" y1="40" x2="380" y2="40" stroke="var(--vp-c-danger)" stroke-dasharray="4" stroke-width="2" />
      <text x="5" y="45" fill="var(--vp-c-danger)" font-size="10" font-weight="bold">UCL</text>
      <line x1="40" y1="100" x2="380" y2="100" stroke="var(--vp-c-text-1)" stroke-width="1" />
      <text x="5" y="105" fill="var(--vp-c-text-1)" font-size="10" font-weight="bold">Mean</text>
      <line x1="40" y1="160" x2="380" y2="160" stroke="var(--vp-c-danger)" stroke-dasharray="4" stroke-width="2" />
      <text x="5" y="165" fill="var(--vp-c-danger)" font-size="10" font-weight="bold">LCL</text>
      <polyline points="50,90 90,110 130,80 170,105 210,95 250,50 290,120 330,150 370,110" fill="none" stroke="var(--vp-c-brand)" stroke-width="2" />
      <g fill="var(--vp-c-brand)">
        <circle cx="50" cy="90" r="3" />
        <circle cx="90" cy="110" r="3" />
        <circle cx="130" cy="80" r="3" />
        <circle cx="170" cy="105" r="3" />
        <circle cx="210" cy="95" r="3" />
        <circle cx="250" cy="50" r="3" />
        <circle cx="290" cy="120" r="3" />
        <circle cx="330" cy="150" r="3" />
        <circle cx="370" cy="110" r="3" />
      </g>
    </svg>
    <div style="text-align: center; font-size: 0.85em; margin-top: 5px;">
      Points within dotted red lines = <strong>In Control</strong>
    </div>
  </div>
</ConceptCard>

**Interpretation**:
- Points within limits = In control (common cause variation)
- Points outside limits = Out of control (special cause - investigate!)
- Rule of Seven: 7+ consecutive points on one side of mean = investigate

**When to Use**: Monitoring ongoing processes, identifying when intervention needed

---

#### 7. Scatter Diagram

**Purpose**: Show correlation between two variables

**Interpretation**:
- **Positive correlation**: Variables increase together
- **Negative correlation**: One increases as other decreases
- **No correlation**: No relationship

**Example**:
<ConceptCard title="Scatter Diagram" variant="secondary">
  <div style="padding: 15px; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <svg viewBox="0 0 300 200" style="width: 100%; height: auto;">
      <line x1="40" y1="180" x2="280" y2="180" stroke="var(--vp-c-text-1)" stroke-width="2" />
      <line x1="40" y1="180" x2="40" y2="20" stroke="var(--vp-c-text-1)" stroke-width="2" />
      <text x="10" y="100" fill="var(--vp-c-text-1)" font-size="10" transform="rotate(-90 10,100)">Defects</text>
      <text x="130" y="195" fill="var(--vp-c-text-1)" font-size="10">Complexity (LOC)</text>
      <g fill="var(--vp-c-brand)" opacity="0.8">
        <circle cx="50" cy="170" r="3" />
        <circle cx="60" cy="160" r="3" />
        <circle cx="80" cy="155" r="3" />
        <circle cx="90" cy="140" r="3" />
        <circle cx="110" cy="130" r="3" />
        <circle cx="130" cy="125" r="3" />
        <circle cx="150" cy="110" r="3" />
        <circle cx="170" cy="90" r="3" />
        <circle cx="200" cy="80" r="3" />
        <circle cx="220" cy="65" r="3" />
        <circle cx="250" cy="50" r="3" />
      </g>
      <line x1="50" y1="170" x2="250" y2="50" stroke="var(--vp-c-warning)" stroke-width="2" stroke-dasharray="4" />
    </svg>
    <div style="text-align: center; font-size: 0.85em; margin-top: 5px;">
      Shows <strong>Positive Correlation</strong>: As complexity increases, defects increase.
    </div>
  </div>
</ConceptCard>

**When to Use**: Understanding relationships between variables

---

### Additional Quality Tools

#### Design of Experiments (DoE)

**Purpose**: Statistical method to identify optimal combination of factors

**Example**: Testing 3 factors (temperature, pressure, time) at 2 levels each = 8 experiments (2³)

**When to Use**: Optimizing processes, identifying critical factors

---

#### Statistical Sampling

**Purpose**: Inspect a subset to draw conclusions about the whole

| Sampling Type | Description | When to Use |
|:--------------|:------------|:------------|
| **Attribute Sampling** | Binary (pass/fail) | Go/no-go decisions |
| **Variable Sampling** | Continuous measurement | Degree of conformance |

**Key Terms**:
- **Population**: Entire set
- **Sample**: Subset inspected
- **Confidence Level**: Probability sample represents population
- **Tolerance**: Acceptable variation

---

#### Benchmarking

**Purpose**: Compare your processes/practices against organizational best practices or industry standards

**Types**:
- **Internal**: Against other projects in your organization
- **Competitive**: Against direct competitors
- **Functional**: Against similar function in different industry

---

### Quality Metrics Examples

Quality metrics must be **specific**, **measurable**, and tied to requirements:

| Metric | Definition | Target Example |
|:-------|:-----------|:---------------|
| **Defect Density** | Defects per 1000 LOC | &lt; 0.5 |
| **Test Coverage** | % of code tested | &gt; 80% |
| **Mean Time Between Failures (MTBF)** | Average time between failures | &gt; 720 hours |
| **Customer Satisfaction Score** | Survey rating | &gt; 4.5/5.0 |
| **First Pass Yield** | % passing first inspection | &gt; 95% |
| **Cycle Time** | Time to complete process | &lt; 2 hours |
| **On-Time Delivery** | % delivered on schedule | &gt; 98% |

---

##  Quality in Agile

Agile integrates quality throughout the development cycle:

### Agile Quality Practices

| Practice | Description | Quality Impact |
|:---------|:------------|:---------------|
| **Definition of Done (DoD)** | Shared checklist for completeness | Consistent quality standards |
| **Test-Driven Development (TDD)** | Write tests before code | Prevents defects |
| **Continuous Integration (CI)** | Frequent code integration + testing | Early defect detection |
| **Pair Programming** | Two developers work together | Real-time code review |
| **Sprint Retrospective** | Team reflects on improvement | Continuous improvement |
| **Refactoring** | Improve code without changing behavior | Technical debt reduction |

### Definition of Done (DoD) Example

A comprehensive DoD for a software team:

- Code complete and compiles
- Unit tests written and passing (>80% coverage)
- Integration tests passing
- Code reviewed by peer
- Security scan completed (no critical issues)
- Documentation updated
- Performance criteria met
- Deployed to staging environment
- Product Owner demo completed
- Acceptance criteria verified

---

##  Quality Management Plan Components

A comprehensive Quality Management Plan includes:

| Component | Description |
|:----------|:------------|
| **Quality Standards** | Applicable standards (ISO, IEEE, organizational) |
| **Quality Objectives** | Measurable quality goals |
| **Quality Roles** | Who is responsible for quality |
| **Quality Metrics** | How quality will be measured |
| **Quality Tools** | Which tools will be used |
| **Quality Control Activities** | Testing, inspection procedures |
| **Quality Assurance Activities** | Process audits, reviews |
| **Process Improvement** | How lessons will improve future work |

---

##  Quality Planning Scenarios (Exam Practice)

### Scenario 1: Root Cause Analysis
**Situation**: Defects are increasing but the team doesn't know why.
**Answer**: Use a **Cause-and-Effect (Fishbone) Diagram** to brainstorm and categorize potential root causes.

### Scenario 2: Prioritizing Improvement
**Situation**: There are many types of defects. Which ones should the team address first?
**Answer**: Create a **Pareto Chart** to identify the 20% of causes creating 80% of defects.

### Scenario 3: Process Monitoring
**Situation**: The PM wants to know if the build process is stable.
**Answer**: Use a **Control Chart** to monitor process variation over time.

### Scenario 4: Variable Relationship
**Situation**: The PM suspects that code complexity causes more defects.
**Answer**: Create a **Scatter Diagram** to visualize the correlation between complexity and defects.

### Scenario 5: Prevention vs. Detection
**Situation**: Should the PM invest in code reviews (prevention) or more testing (detection)?
**Answer**: **Prevention is preferred**. Cost of Quality shows that prevention costs less than finding/fixing defects later.

### Scenario 6: Out of Control Process
**Situation**: A control chart shows 8 consecutive points below the mean.
**Answer**: Investigate for **special cause variation** (Rule of Seven violated). The process is out of control.

---

##  Key Quality Principles (Exam Must-Know)

1. **Quality is planned in, not inspected in**
2. **Prevention costs less than inspection/failure**
3. **Continuous improvement (Kaizen) is expected**
4. **Customer defines quality, not the team**
5. **Everyone is responsible for quality**
6. **Management must support quality initiatives**
7. **Quality and grade are different concepts**

---

##  Key Terms & Quick Reference

### Quality Terminology

| Term | Definition |
|:-----|:-----------|
| **Quality** | Degree to which requirements are fulfilled |
| **Grade** | Category based on features/functions |
| **Precision** | Consistency of measurements |
| **Accuracy** | Correctness of measurements |
| **Tolerance** | Acceptable variation from target |
| **Control Limits** | Statistical boundaries of normal variation |
| **Specification Limits** | Customer-defined boundaries |

### Quality Tools Quick Reference

| Tool | Primary Use |
|:-----|:------------|
| **Cause-and-Effect** | Find root causes |
| **Flowchart** | Visualize processes |
| **Checksheet** | Collect data systematically |
| **Pareto Chart** | Prioritize by impact |
| **Histogram** | Show data distribution |
| **Control Chart** | Monitor process stability |
| **Scatter Diagram** | Show variable correlation |


## Quick Review

<FlashcardCarousel :cards="[
  { front: 'QA vs. QC?', back: 'QA (Manage Quality) is process-focused (preventing defects). QC (Control Quality) is product-focused (finding defects).' },
  { front: 'What is the Rule of Seven in a Control Chart?', back: 'Seven consecutive points on one side of the mean indicates the process is \'out of control\' and needs investigation.' },
  { front: 'What is a Pareto Chart used for?', back: 'To prioritize problems by frequency or impact, based on the 80/20 rule (80% of problems come from 20% of causes).' },
  { front: 'Quality vs. Grade?', back: 'High Quality = meets requirements (defects are low). High Grade = extra features. Low grade is okay, low quality is NOT.' },
  { front: 'What is the goal of a Fishbone Diagram?', back: 'To identify the root cause of a specific problem or defect.' },
  { front: 'What are the four categories of Cost of Quality?', back: 'Prevention costs, Appraisal costs, Internal failure costs, and External failure costs.' },
  { front: 'What is a Control Chart used to monitor?', back: 'Process stability over time - it shows whether variation is within normal limits (common cause) or abnormal (special cause).' },
  { front: 'What is a Histogram used for?', back: 'To show the frequency distribution of data and identify patterns like normal distribution or skewness.' },
  { front: 'Prevention vs. Appraisal costs?', back: 'Prevention = training, design reviews (before defects). Appraisal = testing, inspections (finding defects).' },
  { front: 'What is the key quality principle for PMP?', back: 'Prevention over Inspection - build quality in from the start, as prevention costs less than finding/fixing defects later.' }
]" />

::: tip  Exam Insight
When a question mentions finding the "root cause" of defects, think **Cause-and-Effect Diagram**. When it mentions "prioritizing which defects to fix first," think **Pareto Chart**. When it mentions "monitoring process stability," think **Control Chart**. Prevention is always preferred over inspection!
:::

