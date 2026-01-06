# 1.4d – Risk Management: Threats and Opportunities

<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

**ECO Task**: Assess and manage risks

Managing projects is fundamentally about managing uncertainty. Some uncertainty is a **threat** (things that could go wrong); some is an **opportunity** (things that could go better than expected). The 2026 PMP exam tests both your ability to identify risks and your skill in responding appropriately.

---

## 1.4d.1 Understanding Risk

### What Is Risk?
**Risk** = Uncertainty that, if it occurs, has an effect (positive or negative) on project objectives.

<ConceptGrid>
  <ConceptCard title="Threat">
    **Negative Risk**<br>
    Something that could harm the project.
  </ConceptCard>
  <ConceptCard title="Opportunity">
    **Positive Risk**<br>
    Something that could benefit the project.
  </ConceptCard>
  <ConceptCard title="Issue">
    **Realized Risk**<br>
    A risk that has already occurred; now a reality to manage.
  </ConceptCard>
</ConceptGrid>

### Threats (Negative Risks) Examples
<ConceptGrid>
  <ConceptCard title="Resource">
    Team sickness, turnover, skill gaps, contractor unavailability.
  </ConceptCard>
  <ConceptCard title="Technical">
    Platform instability, integration failures, security vulnerabilities.
  </ConceptCard>
  <ConceptCard title="Schedule">
    Vendor delays, dependency issues, regulatory approval delays.
  </ConceptCard>
  <ConceptCard title="External">
    Regulatory changes, market shifts, natural disasters, supply chain.
  </ConceptCard>
</ConceptGrid>

### Opportunities (Positive Risks) Examples
<ConceptGrid>
  <ConceptCard title="Efficiency">
    New tool speeds up development, automation opportunity.
  </ConceptCard>
  <ConceptCard title="Technical">
    Breakthrough innovation, reusable component discovery.
  </ConceptCard>
  <ConceptCard title="Cost">
    Volume pricing, favorable exchange rates, early payment discounts.
  </ConceptCard>
  <ConceptCard title="Schedule">
    Early delivery by key vendor, parallel work opportunity.
  </ConceptCard>
</ConceptGrid>

---

## 1.4d.2 Risk Identification Techniques

Effective risk management starts with comprehensive identification.

| Technique | Description | When to Use |
|-----------|-------------|-------------|
| **Brainstorming** | Team generates risks freely; no criticism | Early planning, ongoing |
| **Expert Judgment** | Consult experienced practitioners | Complex/novel domains |
| **Checklists** | Standard risk categories from past projects | Routine projects |
| **SWOT Analysis** | Strengths, Weaknesses, Opportunities, Threats | Strategic planning |
| **Assumptions Analysis** | Challenge project assumptions | Requirements phase |
| **Document Review** | Analyze contracts, requirements, plans | Before execution |
| **Root Cause Analysis** | Identify sources that generate multiple risks | After incidents |
| **Prompt Lists** | Structured categories (PESTLE, TECOP) | Ensure coverage |

### PESTLE Framework for External Risks
| Factor | Risk Examples |
|--------|---------------|
| **P**olitical | Government changes, policy shifts, sanctions |
| **E**conomic | Inflation, recession, currency fluctuation |
| **S**ocial | Demographic changes, public perception, labor availability |
| **T**echnological | Obsolescence, disruptive technologies, cyber threats |
| **L**egal | Regulatory changes, compliance requirements, litigation |
| **E**nvironmental | Climate events, sustainability mandates, resource scarcity |

### TECOP Framework for Project Risks
| Category | Focus |
|----------|-------|
| **T**echnical | Technology, complexity, quality |
| **E**nvironmental | Sustainability, weather, location |
| **C**ommercial | Contracts, procurement, vendors |
| **O**perational | Execution, resources, facilities |
| **P**olitical | Stakeholders, governance, organizational |

---

## 1.4d.3 Risk Analysis: Qualitative vs. Quantitative

### Qualitative Analysis
Fast, subjective assessment using probability and impact scales.

**Probability Scale:**
| Level | Probability | Description |
|-------|-------------|-------------|
| Very Low | <10% | Unlikely to occur |
| Low | 10-30% | Possible but not likely |
| Medium | 30-50% | Could go either way |
| High | 50-70% | More likely than not |
| Very High | >70% | Almost certain |

**Impact Scale:**
| Level | Cost Impact | Schedule Impact | Description |
|-------|-------------|-----------------|-------------|
| Very Low | <1% | <1 week | Negligible |
| Low | 1-5% | 1-2 weeks | Minor adjustment |
| Medium | 5-10% | 2-4 weeks | Noticeable delay/cost |
| High | 10-20% | 1-2 months | Significant impact |
| Very High | >20% | >2 months | Severe; threatens objectives |

### Probability-Impact Matrix

|  | **Very Low Impact** | **Low Impact** | **Medium Impact** | **High Impact** | **Very High Impact** |
|--|:---:|:---:|:---:|:---:|:---:|
| **Very High Probability** | Medium | Medium | High | Very High | Very High |
| **High Probability** | Low | Medium | High | High | Very High |
| **Medium Probability** | Low | Low | Medium | High | High |
| **Low Probability** | Very Low | Low | Low | Medium | Medium |
| **Very Low Probability** | Very Low | Very Low | Low | Low | Medium |

**Action by Priority:**
- **Very High (Red)**: Immediate mitigation required
- **High (Orange)**: Active management and response plan
- **Medium (Yellow)**: Monitor closely; contingency plan
- **Low (Green)**: Accept or monitor
- **Very Low (Grey)**: Document and accept

### Quantitative Analysis
Uses numerical techniques for more precise analysis. Used for high-priority risks or when data is available.

#### Expected Monetary Value (EMV)
**EMV = Probability × Impact**

| Risk | Probability | Impact | EMV |
|------|-------------|--------|-----|
| Server failure | 20% | -$50,000 | -$10,000 |
| Vendor delay | 40% | -$25,000 | -$10,000 |
| Early delivery bonus | 30% | +$20,000 | +$6,000 |
| **Total Risk Exposure** | | | **-$14,000** |

::: info Decision Tree Use
EMV is used in **decision trees** to compare options. Choose the path with the best expected value (highest for opportunities, least negative for threats).
:::

#### Monte Carlo Simulation
A computer-based technique that runs thousands of simulations to model possible outcomes.

**How It Works:**
1. Define probability distributions for uncertain variables (duration, cost)
2. Run 1,000-10,000+ simulations with random sampling
3. Analyze the distribution of results
4. Determine confidence levels (e.g., 80% confidence of finishing by X date)

**Key Outputs:**
- **S-Curve**: Cumulative probability of completing by a given date/cost
- **Tornado Diagram**: Shows which variables have the most impact
- **Confidence Levels**: "There is an 85% probability of completing by June 30"

::: warning On the Exam
You won't perform Monte Carlo calculations, but you should understand:
- It's used for complex schedule and cost risk analysis
- It provides confidence-based estimates, not single-point estimates
- It requires software (not manual calculation)
:::

---

## 1.4d.4 Risk Response Strategies

### For Threats (Negative Risks)

<ConceptGrid>
  <ConceptCard title="Avoid">
    **Action:** Eliminate the risk entirely.<br>
    <em>Example: Use proven technology instead of new.</em>
  </ConceptCard>
  <ConceptCard title="Mitigate">
    **Action:** Reduce probability and/or impact.<br>
    <em>Example: Extra testing, backup servers.</em>
  </ConceptCard>
  <ConceptCard title="Transfer">
    **Action:** Shift risk to third party.<br>
    <em>Example: Insurance, warranties.</em>
  </ConceptCard>
  <ConceptCard title="Accept">
    **Action:** Acknowledge it.<br>
    <em>Example: Reserve budget (Active) or just document it (Passive).</em>
  </ConceptCard>
</ConceptGrid>

### For Opportunities (Positive Risks)

<ConceptGrid>
  <ConceptCard title="Exploit">
    **Action:** Ensure the opportunity happens (100% probability).<br>
    <em>Example: Assign best resources.</em>
  </ConceptCard>
  <ConceptCard title="Enhance">
    **Action:** Increase probability and/or impact.<br>
    <em>Example: Early preparation.</em>
  </ConceptCard>
  <ConceptCard title="Share">
    **Action:** Partner with others to capture benefit.<br>
    <em>Example: Joint ventures.</em>
  </ConceptCard>
  <ConceptCard title="Accept">
    **Action:** Take the benefit if it comes.<br>
    <em>Example: No proactive action.</em>
  </ConceptCard>
</ConceptGrid>

### Residual vs. Secondary Risks
- **Residual Risk**: Risk remaining after response actions
- **Secondary Risk**: New risk created by a risk response
- **Fallback Plan**: Backup plan if primary response fails
- **Contingency Reserve**: Budget/time for identified risks
- **Management Reserve**: Budget/time for unknown-unknowns

---

## 1.4d.5 The Risk Register

Sarah maintains a **Risk Register**, a living document tracking all identified risks.

| Field | Description |
|-------|-------------|
| **Risk ID** | Unique identifier (R-001, R-002) |
| **Risk Description** | Clear statement: "If [cause], then [effect]" |
| **Category** | Technical, External, Organizational, etc. |
| **Probability** | Likelihood (High/Medium/Low or %) |
| **Impact** | Consequence (High/Medium/Low or $) |
| **Risk Score** | Probability × Impact |
| **Response Strategy** | Avoid, Mitigate, Transfer, Accept, etc. |
| **Response Actions** | Specific steps to implement strategy |
| **Owner** | Person responsible for monitoring/response |
| **Trigger** | Event that indicates risk is occurring |
| **Status** | Open, In Progress, Mitigated, Closed |
| **Last Updated** | Date of most recent review |

### Example Risk Register Entry

| Field | Content |
|-------|---------|
| **Risk ID** | R-007 |
| **Description** | If the primary cloud vendor experiences an outage during go-live, then the launch will be delayed and customer trust damaged |
| **Category** | Technical |
| **Probability** | Medium (30%) |
| **Impact** | High ($100,000) |
| **Risk Score** | $30,000 EMV |
| **Response** | Mitigate |
| **Actions** | Deploy secondary failover region; test disaster recovery monthly |
| **Owner** | IT Lead (Alex) |
| **Trigger** | Vendor status page shows degradation |
| **Status** | Open |

---

## 1.4d.6 Risk Monitoring and Control

Risk management is not a one-time activity—it's continuous.

### Risk Review Activities
| Activity | Frequency | Purpose |
|----------|-----------|---------|
| **Risk Audit** | Phase gates, milestones | Verify risk processes are effective |
| **Risk Reassessment** | Weekly/Biweekly | Update probability/impact ratings |
| **Risk Review Meeting** | Sprint/iteration | Discuss top risks, share updates |
| **Variance Analysis** | Per reporting period | Check if actual aligns with forecast |
| **Trend Analysis** | Ongoing | Are risks increasing or decreasing? |

### Risk Burndown Chart
Tracks total risk exposure over time:
- **Y-axis**: Total EMV or risk score
- **X-axis**: Time (sprints, phases)
- **Trend**: Should generally decrease as risks are mitigated or resolved

---

## 1.4d.7 Risk and Ways of Working

| Approach | Risk Management Style |
|----------|----------------------|
| **Predictive** | Extensive upfront identification; formal risk register; detailed contingency plans; periodic reviews |
| **Agile** | Continuous identification (every sprint); risks addressed as impediments; "spikes" for technical uncertainty; fast feedback reduces risk |
| **Hybrid** | Program-level risks managed predictively; team-level risks managed agilely; tiered governance |

---

## 1.4d.8 On the Exam: Risk Scenarios

### Good Answers:
- Identify and assess the risk before acting
- Choose a strategy that fits the risk's score
- Assign clear owners
- Monitor trends (are risks increasing or decreasing?)
- Use data to support decisions

### Red Flags (Wrong Answers):
- Ignoring a risk and hoping for the best
- Reacting only after a risk occurs (no plan)
- Treating all risks with the same level of urgency
- Failing to involve stakeholders in risk discussions
- Not updating the risk register after changes

### Common Exam Scenarios

| Scenario | Best Action |
|----------|-------------|
| New risk identified mid-project | Add to register, analyze, assign owner, plan response |
| Risk probability has increased | Reassess impact, escalate if needed, strengthen response |
| Risk has occurred (is now an issue) | Implement contingency plan, document lessons learned |
| Team unaware of project risks | Improve communication, include risks in status meetings |
| Stakeholder concerned about a risk | Listen, explain response plan, engage them in monitoring |

---

::: info Key Concept
Risk management is not about *eliminating* risk (which is impossible); it's about being **prepared** so uncertainty doesn't derail your project. The best PMs are not risk-averse—they are risk-aware.
:::

## 1.4d.9 Quick Review

<FlashcardGrid>
  <Flashcard 
    front="What is the difference between an Issue and a Risk?" 
    back="A Risk is an uncertain future event. An Issue is a risk that has ALREADY happened." 
  />
  <Flashcard 
    front="What is the difference between a Threat and an Opportunity?" 
    back="Threat = Negative risk (harmful). Opportunity = Positive risk (beneficial)." 
  />
  <Flashcard 
    front="Which strategy involves shifting the negative impact of a threat to a third party?" 
    back="Transfer (e.g., insurance, warranty)." 
  />
  <Flashcard 
    front="Which strategy involves doing everything possible to ensure a positive opportunity happens?" 
    back="Exploit." 
  />
  <Flashcard 
    front="What is a Residual Risk?" 
    back="A risk that remains after a risk response has been implemented." 
  />
  <Flashcard 
    front="What is a Secondary Risk?" 
    back="A new risk that arises as a direct result of implementing a risk response." 
  />
  <Flashcard 
    front="In Qualitative Risk Analysis, what are the two main factors assessed?" 
    back="Probability (Likelihood) and Impact (Consequence)." 
  />
  <Flashcard 
    front="Calculate the Expected Monetary Value (EMV) if a risk has a 20% probability and $10,000 impact." 
    back="$2,000 (0.20 * $10,000)." 
  />
  <Flashcard 
    front="What does a Monte Carlo analysis provide that a single-point estimate does not?" 
    back="A range of possible outcomes and the probability (confidence level) of achieving them." 
  />
  <Flashcard 
    front="What is the purpose of a Risk Register?" 
    back="To track all identified risks, their analysis, responses, and owners throughout the project." 
  />
</FlashcardGrid>
