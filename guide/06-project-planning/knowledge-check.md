
<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
import QuizComponent from '../../.vitepress/theme/components/QuizComponent.vue'
</script>

# Knowledge Check: Integrated Planning

Test your ability to weave together scope, schedule, cost, quality, risk, resource, and communications baselines for the 2026 PMP exam.

<QuizComponent
  title="Chapter 6: Planning"
  :questions="[
    {
      text: 'A Project Manager is leading a predictive project and the team is confused about the technical requirements of a work package. Which document should they refer to?',
      options: [
        'The Project Scope Statement',
        'The WBS Dictionary',
        'The Product Backlog',
        'The Quality Management Plan'
      ],
      correct: 1,
      explanation: 'The WBS Dictionary provides the detailed technical information, requirements, and acceptance criteria for every work package in the WBS.',
      reference: 'Section 6.1'
    },
    {
      text: 'The project is critical to the organization strategy and MUST finish by December 31st. The current schedule shows a January 15th finish. Budget is available. What should the PM do?',
      options: [
        'Fast track the project by performing tasks in parallel',
        'Crash the schedule by adding resources to critical path activities',
        'Inform the sponsor the date is impossible',
        'Use the management reserve to pay for a faster vendor'
      ],
      correct: 1,
      explanation: 'Crashing (adding resources) is the preferred method when budget is available and the end date is firm. Fast tracking is used when budget is NOT available.',
      reference: 'Section 6.2'
    },
    {
      text: 'Which part of the budget is NOT included in the Cost Baseline but is included in the Total Project Budget?',
      options: [
        'Activity Estimates',
        'Contingency Reserve',
        'Management Reserve',
        'Indirect Costs'
      ],
      correct: 2,
      explanation: 'Management Reserve is for Unknown Unknowns and is not part of the Cost Baseline used for performance measurement (EVM).',
      reference: 'Section 6.3'
    },
    {
      text: 'A project has BAC = $200,000. At month 6, PV = $100,000, EV = $80,000, and AC = $90,000. What is the CPI and what does it indicate?',
      options: [
        'CPI = 0.89, the project is over budget',
        'CPI = 1.11, the project is under budget',
        'CPI = 0.80, the project is behind schedule',
        'CPI = 0.90, the project is ahead of schedule'
      ],
      correct: 0,
      explanation: 'CPI = EV / AC = $80,000 / $90,000 = 0.89. CPI < 1.0 means the project is getting only 89 cents of value for every dollar spent (over budget).',
      reference: 'Section 6.3'
    },
    {
      text: 'A stakeholder requests a new feature after the scope baseline is approved. What should the PM do FIRST?',
      options: [
        'Add the feature to the WBS immediately',
        'Submit a change request and perform impact analysis',
        'Reject the request because baselines cannot change',
        'Ask the team to absorb the work without updating documents'
      ],
      correct: 1,
      explanation: 'Once baselined, changes require Integrated Change Control: document the change request, analyze impacts, seek approval, then update baselines if approved.',
      reference: 'Section 6.1'
    },
    {
      text: 'An agile team discovers a defect pattern and wants to identify the root cause. The PM suggests organizing potential causes into categories like People, Process, Technology, and Environment. Which tool should the team use?',
      options: [
        'Pareto Chart',
        'Control Chart',
        'Cause-and-Effect Diagram (Fishbone)',
        'Histogram'
      ],
      correct: 2,
      explanation: 'The Cause-and-Effect (Fishbone/Ishikawa) Diagram organizes potential root causes into categories like the 6 Ms: Man, Machine, Method, Material, Measurement, and Mother Nature.',
      reference: 'Section 6.4 (Quality)'
    },
    {
      text: 'The quality team has collected data on 8 different defect types. They want to determine which defects to address first based on frequency. Which tool should they use?',
      options: [
        'Cause-and-Effect Diagram',
        'Pareto Chart',
        'Scatter Diagram',
        'Control Chart'
      ],
      correct: 1,
      explanation: 'A Pareto Chart orders defects by frequency, showing which 20% of causes create 80% of problems, helping prioritize improvement efforts.',
      reference: 'Section 6.4 (Quality)'
    },
    {
      text: 'A risk has been identified with a 40% probability and a potential impact of $150,000. What is the Expected Monetary Value (EMV)?',
      options: [
        '$37,500',
        '$60,000',
        '$90,000',
        '$150,000'
      ],
      correct: 1,
      explanation: 'EMV = Probability × Impact = 0.40 × $150,000 = $60,000. This is used for decision analysis and calculating contingency reserves.',
      reference: 'Section 6.5 (Risk)'
    },
    {
      text: 'A major risk occurs that was NOT identified in the risk register. The PM needs funds to address it. What reserve should be used?',
      options: [
        'Contingency Reserve (PM authority)',
        'Management Reserve (Sponsor approval)',
        'Quality Budget',
        'Activity Estimates'
      ],
      correct: 1,
      explanation: 'Management Reserve is for Unknown Unknowns (unidentified risks). Using it requires a formal change request and Sponsor approval.',
      reference: 'Section 6.5 (Risk)'
    },
    {
      text: 'The PM wants to eliminate a high-impact threat entirely by removing the risky component from the project scope. What risk response strategy is this?',
      options: [
        'Mitigate',
        'Transfer',
        'Avoid',
        'Accept'
      ],
      correct: 2,
      explanation: 'Avoid means eliminating the threat entirely, often by changing scope, schedule, or approach to remove the risk source.',
      reference: 'Section 6.5 (Risk)'
    },
    {
      text: 'A project team of 8 members adds 2 new members. How many communication channels exist after the addition?',
      options: [
        '28 channels',
        '36 channels',
        '45 channels',
        '55 channels'
      ],
      correct: 2,
      explanation: 'Communication channels = n(n-1)/2 = 10(9)/2 = 45 channels. With 10 team members, there are 45 potential channels.',
      reference: 'Section 6.7 (Communications)'
    },
    {
      text: 'A vendor asks a private question after the bidder conference regarding the SOW. What should the PM do?',
      options: [
        'Answer the vendor privately to maintain the relationship',
        'Answer the question and share the answer with all bidders',
        'Ignore the question to avoid favoritism',
        'Disqualify the vendor for asking'
      ],
      correct: 1,
      explanation: 'Fairness in procurement requires that all vendors receive the same information. Any Q&A must be shared with all prospective bidders.',
      reference: 'Section 6.6 (Procurement)'
    },
    {
      text: 'A contract has Target Cost = $500,000, Target Fee = $50,000, and Share Ratio = 80/20 (Buyer/Seller). If the vendor completes for $450,000, what is the final fee?',
      options: [
        '$40,000',
        '$50,000',
        '$60,000',
        '$70,000'
      ],
      correct: 2,
      explanation: 'Savings = $500k - $450k = $50k. Seller share = $50k × 20% = $10k. Final Fee = $50k + $10k = $60,000.',
      reference: 'Section 6.6 (Procurement)'
    },
    {
      text: 'Using PERT estimation, an activity has O=6 days, M=10 days, P=20 days. What is the expected duration?',
      options: [
        '10 days',
        '11 days',
        '12 days',
        '14 days'
      ],
      correct: 1,
      explanation: 'PERT = (O + 4M + P) / 6 = (6 + 40 + 20) / 6 = 66 / 6 = 11 days.',
      reference: 'Section 6.2'
    },
    {
      text: 'For the same activity (O=6, M=10, P=20), what is the standard deviation?',
      options: [
        '1.67 days',
        '2.33 days',
        '3.0 days',
        '4.67 days'
      ],
      correct: 1,
      explanation: 'Standard Deviation = (P − O) / 6 = (20 − 6) / 6 = 14 / 6 = 2.33 days.',
      reference: 'Section 6.2'
    },
    {
      text: 'In a network diagram, Activity B depends on Activity A with a Finish-to-Start relationship and a 2-day lag. What does this mean?',
      options: [
        'Activity B starts 2 days before A finishes',
        'Activity B starts 2 days after A finishes',
        'Activity B finishes 2 days after A finishes',
        'Activity B and A finish at the same time'
      ],
      correct: 1,
      explanation: 'A lag is a mandatory waiting period. FS with +2 days lag means B cannot start until 2 days AFTER A finishes.',
      reference: 'Section 6.2'
    },
    {
      text: 'A control chart shows 8 consecutive data points above the center line but within control limits. What should the PM do?',
      options: [
        'Nothing, the process is in control',
        'Investigate for special cause variation',
        'Expand the control limits',
        'Stop production immediately'
      ],
      correct: 1,
      explanation: 'The Rule of Seven states that 7+ consecutive points on one side of the mean indicates non-random variation (special cause) requiring investigation.',
      reference: 'Section 6.4 (Quality)'
    },
    {
      text: 'The PM is deciding between building a component internally or outsourcing. The work is a core competency and will be reused on future projects. What should the PM recommend?',
      options: [
        'Buy (outsource) for faster delivery',
        'Make (internal) to build long-term capability',
        'T&M contract with a vendor',
        'Cost-plus contract with a vendor'
      ],
      correct: 1,
      explanation: 'When work is a core competency with long-term reuse potential, making internally builds organizational capability and is usually preferred.',
      reference: 'Section 6.6 (Procurement)'
    },
    {
      text: 'Which set of documents makes up the Scope Baseline?',
      options: [
        'Requirements Documentation, RTM, and Activity List',
        'Project Scope Statement, WBS, and WBS Dictionary',
        'Cost Baseline, Schedule Baseline, and Scope Statement',
        'Product Backlog, Sprint Backlog, and Definition of Done'
      ],
      correct: 1,
      explanation: 'The Scope Baseline consists of the approved Project Scope Statement, WBS, and WBS Dictionary.',
      reference: 'Section 6.1'
    },
    {
      text: 'A developer adds an unrequested feature to “delight the customer” without approval. What is this called?',
      options: [
        'Scope Creep',
        'Gold Plating',
        'Value Engineering',
        'Progressive Elaboration'
      ],
      correct: 1,
      explanation: 'Gold Plating is adding extra features or work not requested or approved. Even if “free,” it wastes resources and can introduce risk.',
      reference: 'Section 6.1'
    },
    {
      text: 'A PM needs to determine if there is a correlation between lines of code and number of defects. Which tool should be used?',
      options: [
        'Histogram',
        'Pareto Chart',
        'Scatter Diagram',
        'Control Chart'
      ],
      correct: 2,
      explanation: 'A Scatter Diagram shows the relationship between two variables, helping identify correlation (positive, negative, or none).',
      reference: 'Section 6.4 (Quality)'
    },
    {
      text: 'The project team is overallocated but the end date cannot change. Which technique should the PM use?',
      options: [
        'Resource Leveling',
        'Resource Smoothing',
        'Crashing',
        'Fast Tracking'
      ],
      correct: 1,
      explanation: 'Resource Smoothing adjusts activities within available float to balance resource usage WITHOUT changing the project end date.',
      reference: 'Section 6.6'
    },
    {
      text: 'A project has PV=$80,000, EV=$70,000, AC=$75,000. Which statement is correct?',
      options: [
        'The project is ahead of schedule and under budget',
        'The project is behind schedule and over budget',
        'The project is ahead of schedule and over budget',
        'The project is behind schedule and under budget'
      ],
      correct: 1,
      explanation: 'SV = EV-PV = -$10,000 (behind schedule). CV = EV-AC = -$5,000 (over budget). The project is behind schedule AND over budget.',
      reference: 'Section 6.3'
    },
    {
      text: 'In a RACI chart, how many people should be “Accountable” for a single deliverable?',
      options: [
        'At least one',
        'Exactly one',
        'One or more',
        'As many as needed'
      ],
      correct: 1,
      explanation: 'There should be exactly ONE Accountable person per deliverable to ensure clear ownership. Multiple “A”s create confusion about who has final authority.',
      reference: 'Section 6.6'
    },
    {
      text: 'The PM wants to shift cost risk to the vendor for a well-defined construction project. Which contract type is most appropriate?',
      options: [
        'Cost Plus Fixed Fee (CPFF)',
        'Time and Materials (T&M)',
        'Firm Fixed Price (FFP)',
        'Cost Plus Incentive Fee (CPIF)'
      ],
      correct: 2,
      explanation: 'Firm Fixed Price (FFP) contracts put cost risk on the seller when scope is well-defined. The vendor delivers for a set price regardless of actual costs.',
      reference: 'Section 6.6 (Procurement)'
    }
  ]"
/>

---

##  Planning Mastery Matrix

<ConceptGrid>
  <ConceptCard title="Scope" variant="primary">
    <ul>
      <li>Identify baselines (approved targets)</li>
      <li>Trace requirements via RTM</li>
      <li>Prioritize with MoSCoW</li>
      <li>WBS decomposition (100% rule)</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Schedule" variant="secondary">
    <ul>
      <li>Calculate Critical Path (Forward/Backward)</li>
      <li>Manage Float (Total vs. Free)</li>
      <li>PERT Estimation [(O+4M+P)/6]</li>
      <li>Schedule Compression (Crash/Fast)</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Cost" variant="primary">
    <ul>
      <li>Master EVM Formulas (CPI, SPI, EAC)</li>
      <li>Cost Types (Direct/Indirect, Fixed/Var)</li>
      <li>Estimation (Analogous, Parametric, Bottom-up)</li>
      <li>Manage Reserves (Contingency vs. Management)</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Quality" variant="secondary">
    <ul>
      <li>Cost of Quality (Conformance vs. Failure)</li>
      <li>7 Basic Tools (Pareto, Fishbone, etc.)</li>
      <li>Control Chart Rules (Rule of Seven)</li>
      <li>Prevention over Inspection mindset</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Risk" variant="primary">
    <ul>
      <li>Risk Score and EMV (P x I)</li>
      <li>Threat vs. Opportunity Strategies</li>
      <li>Qualitative vs. Quantitative Analysis</li>
      <li>Risk Triggers and Response Planning</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Resources" variant="secondary">
    <ul>
      <li>RACI clarity (1 Accountable owner)</li>
      <li>Contract Types (FFP, Cost-Plus, T&M)</li>
      <li>Make-or-Buy Analysis</li>
      <li>Resource Optimization (Level vs. Smooth)</li>
    </ul>
  </ConceptCard>
</ConceptGrid>

---

## Quick Reference Flashcards

<FlashcardGrid>
  <Flashcard front="SV and CV Formulas" back="SV = EV - PV; CV = EV - AC" />
  <Flashcard front="SPI and CPI Formulas" back="SPI = EV / PV; CPI = EV / AC" />
  <Flashcard front="PERT and Std Deviation" back="PERT = (O+4M+P)/6; σ = (P-O)/6" />
  <Flashcard front="Communication Channels" back="n(n-1)/2" />
  <Flashcard front="EMV Formula" back="Probability x Impact ($)" />
  <Flashcard front="TCPI Formula" back="(BAC-EV) / (BAC-AC)" />
</FlashcardGrid>

::: tip  Exam Insight
Planning questions often integrate multiple knowledge areas. A "scope change" question might require you to think about schedule impact, cost variance, risk implications, and stakeholder communication. Practice answering with the full project context in mind.
:::
