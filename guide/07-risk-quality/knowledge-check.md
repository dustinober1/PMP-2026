# Knowledge Check: Risk, Quality & Complexity

Test your ability to manage uncertainty, ensure quality, and navigate project messiness in the 2026 PMP context.

<QuizComponent
  title="Chapter 7: Risk & Quality"
  :questions="[
    {
      text: 'A high-impact risk has just occurred. The project manager identifies it as a risk that was already in the Risk Register with a pre-planned response. What is the First action?',
      options: [
        'Update the Risk Register status to: Occurred',
        'Inform the Sponsor and wait for approval to spend the contingency',
        'Implement the planned Risk Response and update the Issue Log',
        'Pause the project to update the risk probability of other items'
      ],
      correct: 2,
      explanation: 'Once a risk occurs, it is an issue. The PM should immediately execute the response they planned during the risk planning phase and document the event in the Issue Log.',
      reference: 'Section 7.1'
    },
    {
      text: 'A team member is auditing the software development workflow to ensure the team is following the mandated security protocols. What is this activity considered?',
      options: [
        'Quality Control',
        'Quality Assurance',
        'Risk Mitigation',
        'Stakeholder Engagement'
      ],
      correct: 1,
      explanation: 'Auditing processes to ensure they are being followed correctly is a proactive Quality Assurance (QA) activity. Quality Control (QC) would be testing the software itself.',
      reference: 'Section 7.2'
    },
    {
      text: 'Your project is seeing a high number of defects. You want to identify which specific 20% of causes are creating 80% of the defects so you can prioritize fixes. Which tool should you use?',
      options: [
        'Fishbone Diagram',
        'Pareto Chart',
        'Control Chart',
        'Scatter Diagram'
      ],
      correct: 1,
      explanation: 'A Pareto Chart ranks causes by frequency. It is based on the Pareto Principle (80/20 rule) to help PMs focus on the vital few problems.',
      reference: 'Section 7.2'
    },
    {
      text: 'You are working on a high-tech R&D project. Stakeholders agree on the goal, but the technical path is unpredictable and experts disagree on the method. According to Cynefin, how should you manage this?',
      options: [
        'Use Best Practices (Sense-Categorize-Respond)',
        'Hire more experts (Sense-Analyze-Respond)',
        'Run Safe-to-Fail Experiments (Probe-Sense-Respond)',
        'Take immediate action to stabilize (Act-Sense-Respond)'
      ],
      correct: 2,
      explanation: 'In a Complex environment (unclear cause and effect), the best approach is to Probe (experiment), Sense the result, and Respond (adapt).',
      reference: 'Section 7.3'
    },
    {
      text: 'What is the most expensive category of the Cost of Quality (COQ)?',
      options: [
        'Prevention (Training/Planning)',
        'Appraisal (Testing/Inspections)',
        'Internal Failure (Rework/Scrap)',
        'External Failure (Lawsuits/Loss of Reputation)'
      ],
      correct: 3,
      explanation: 'External Failure costs are the highest because they occur after the customer receives the product, leading to loss of brand equity, lawsuits, and warranty claims.',
      reference: 'Section 7.2'
    },
    {
      text: 'A major problem occurs that was NOT identified in the risk register. The team needs additional funds to respond. What should the PM use?',
      options: [
        'Contingency reserve (PM authority)',
        'Management reserve via change control (sponsor/management approval)',
        'Schedule float only',
        'Quality budget'
      ],
      correct: 1,
      explanation: 'Management reserve is for unknown-unknowns (unidentified risks). Access typically requires approval through the change control process.',
      reference: 'Section 7.1'
    },
    {
      text: 'The PM identifies a threat that is outside the project authority and could impact multiple projects. What response strategy is BEST?',
      options: [
        'Transfer',
        'Mitigate',
        'Escalate',
        'Accept'
      ],
      correct: 2,
      explanation: 'Escalate is used when a risk is outside the project scope/authority and must be handled at a higher level (program/portfolio/management).',
      reference: 'Section 7.1'
    },
    {
      text: 'Your team can capture a business opportunity only if you partner with another organization to share the upside. Which response strategy is this?',
      options: [
        'Exploit',
        'Enhance',
        'Share',
        'Accept'
      ],
      correct: 2,
      explanation: 'Sharing is an opportunity strategy where two parties partner to realize benefits that neither could capture alone.',
      reference: 'Section 7.1'
    },
    {
      text: 'Which option is the BEST example of a risk statement written in cause → event → impact format?',
      options: [
        'Risk: schedule delay',
        'The vendor may be late',
        'Because the supplier has a single manufacturing site, a shutdown could delay delivery and cause a 3-week schedule slip',
        'Integration is complex'
      ],
      correct: 2,
      explanation: 'A strong risk statement clearly states the cause, the uncertain event, and the measurable impact on objectives.',
      reference: 'Section 7.1'
    },
    {
      text: 'Which risk register field ensures a single person is accountable for driving response actions?',
      options: [
        'Probability rating',
        'Risk owner',
        'Risk category',
        'Trigger'
      ],
      correct: 1,
      explanation: 'Assigning a risk owner creates accountability. Without an owner, responses tend to remain “paper plans.”',
      reference: 'Section 7.1'
    },
    {
      text: 'A risk has NOT occurred yet, but a defined trigger has been observed. What should the PM do NEXT?',
      options: [
        'Move the risk to the Issue Log immediately',
        'Implement the planned response actions and update the Risk Register',
        'Wait until the risk occurs before taking action',
        'Re-baseline the schedule'
      ],
      correct: 1,
      explanation: 'A trigger is an early warning sign. If the trigger is observed, you proactively start executing the planned response and update the risk’s status and actions in the Risk Register.',
      reference: 'Section 7.1'
    },
    {
      text: 'A problem occurs with no preplanned response, and the team creates an unplanned fix to address it. What is this called?',
      options: [
        'Workaround',
        'Fallback plan',
        'Contingency plan',
        'Risk transfer'
      ],
      correct: 0,
      explanation: 'A workaround is an unplanned response to an unanticipated issue. Contingency and fallback plans are planned responses for identified risks.',
      reference: 'Section 7.1'
    },
    {
      text: 'A risk has a 40% probability and a potential impact of $50,000. What is the Expected Monetary Value (EMV)?',
      options: [
        '$5,000',
        '$20,000',
        '$40,000',
        '$50,000'
      ],
      correct: 1,
      explanation: 'EMV = Probability × Impact = 0.40 × $50,000 = $20,000.',
      reference: 'Section 7.1'
    },
    {
      text: 'After implementing a risk response, some uncertainty still remains. What is this called?',
      options: [
        'Residual risk',
        'Secondary risk',
        'Issue',
        'Trigger'
      ],
      correct: 0,
      explanation: 'Residual risk is what remains after the response is implemented.',
      reference: 'Section 7.1'
    },
    {
      text: 'A new risk is introduced as a result of a response action (for example, switching to a backup vendor creates new quality uncertainty). What is this called?',
      options: [
        'Residual risk',
        'Secondary risk',
        'Assumption',
        'Workaround'
      ],
      correct: 1,
      explanation: 'Secondary risks are created by implementing a risk response.',
      reference: 'Section 7.1'
    },
    {
      text: 'A team imagines the project has failed and works backward to identify the hidden risks that caused the failure. What technique is this?',
      options: [
        'Pre-mortem',
        'Delphi technique',
        'Monte Carlo simulation',
        'Fishbone diagram'
      ],
      correct: 0,
      explanation: 'A pre-mortem is a structured way to surface hidden risks by imagining failure and identifying likely causes.',
      reference: 'Section 7.1'
    },
    {
      text: 'A customer ordered an economy version of a product. It lacks premium features, but it meets all documented requirements with no defects. How should this be described?',
      options: [
        'High quality, low grade',
        'Low quality, high grade',
        'Low quality, low grade',
        'High grade, high quality'
      ],
      correct: 0,
      explanation: 'Grade is the category (economy vs premium). Quality is conformance to requirements AND fitness for use. A low-grade product can still be high quality if it meets requirements and is fit for purpose.',
      reference: 'Section 7.2'
    },
    {
      text: 'Stakeholders ask: “What is the probability we finish by the target date?” Which analysis technique BEST answers this?',
      options: [
        'Probability/impact matrix',
        'Monte Carlo simulation',
        'Checksheet',
        'Pareto chart'
      ],
      correct: 1,
      explanation: 'Monte Carlo simulation runs many iterations to produce a probability distribution of possible finish dates and confidence levels.',
      reference: 'Section 7.1'
    },
    {
      text: 'The team wants to collect real-time counts of defect types found during inspection. Which tool should they use?',
      options: [
        'Histogram',
        'Checksheet',
        'Scatter diagram',
        'Control chart'
      ],
      correct: 1,
      explanation: 'A checksheet (tally sheet) is designed to collect frequency data during real-time observation or inspection.',
      reference: 'Section 7.2'
    },
    {
      text: 'Which quality tool is BEST for showing the frequency distribution of results (for example, defect size or cycle time)?',
      options: [
        'Histogram',
        'Flowchart',
        'Pareto chart',
        'Fishbone diagram'
      ],
      correct: 0,
      explanation: 'A histogram visualizes the distribution of data and helps you see spread and patterns.',
      reference: 'Section 7.2'
    },
    {
      text: 'A process has all measurements within control limits, but many results are outside the customer specification limits. What does this indicate?',
      options: [
        'The process is unstable and out of control',
        'The process is stable but not meeting requirements (not capable)',
        'Nothing is wrong; control limits are all that matter',
        'Control limits should be expanded'
      ],
      correct: 1,
      explanation: 'Control limits indicate process stability. Specification limits come from requirements. A process can be stable but still produce unacceptable outputs, meaning it needs improvement or recalibration.',
      reference: 'Section 7.2'
    },
    {
      text: 'A control chart shows 8 consecutive points above the center line (all within control limits). What should the PM do?',
      options: [
        'Nothing; the process is in control',
        'Investigate for special cause variation',
        'Immediately stop production',
        'Change the specification limits'
      ],
      correct: 1,
      explanation: 'A sustained run on one side of the mean suggests non-random variation that should be investigated (special cause).',
      reference: 'Section 7.2'
    },
    {
      text: 'In Agile, what defines the non-negotiable quality checklist a story must meet to be considered complete?',
      options: [
        'Risk Register',
        'Definition of Done (DoD)',
        'Project Charter',
        'Control chart'
      ],
      correct: 1,
      explanation: 'The Definition of Done (DoD) is the team’s quality baseline for completed work (tests passed, review complete, acceptance criteria met, etc.).',
      reference: 'Section 7.2'
    },
    {
      text: 'A production system is down, customers are impacted, and there is no time for analysis. According to Cynefin, what is the BEST approach?',
      options: [
        'Sense–Analyze–Respond',
        'Probe–Sense–Respond',
        'Act–Sense–Respond',
        'Sense–Categorize–Respond'
      ],
      correct: 2,
      explanation: 'In a chaotic environment, you act immediately to stabilize, then sense outcomes and respond with adjustments.',
      reference: 'Section 7.3'
    },
    {
      text: 'Requirements are unclear and changing, and cause/effect relationships are unpredictable. According to Cynefin, how should you manage this environment?',
      options: [
        'Use best practices with strict standardization',
        'Probe with experiments, sense outcomes, and adapt',
        'Do detailed upfront planning to eliminate uncertainty',
        'Stop work until requirements are fully defined'
      ],
      correct: 1,
      explanation: 'This describes a complex domain, where the best approach is experimentation and iterative learning (probe–sense–respond).',
      reference: 'Section 7.3'
    },
    {
      text: 'During a risk identification workshop, the team only identifies risks that happened on their last project, ignoring new potential threats. What cognitive bias is this?',
      options: [
        'Confirmation Bias',
        'Availability Bias',
        'Sunk Cost Fallacy',
        'Optimism Bias'
      ],
      correct: 1,
      explanation: 'Availability Bias occurs when people rely on immediate examples that come to mind (like a recent project) rather than looking at the broader picture.',
      reference: 'Section 7.1'
    },
    {
      text: 'The team uses the same words (e.g., "Done") but means different things, leading to confusion. What type of ambiguity is this?',
      options: [
        'Situational Ambiguity',
        'Conceptual Ambiguity',
        'Technical Risk',
        'Scope Creep'
      ],
      correct: 1,
      explanation: 'Conceptual Ambiguity arises when terms or ideas are ill-defined or understood differently. It is fixed by clarifying definitions and glossaries.',
      reference: 'Section 7.3'
    }
  ]"
/>

## Additional Study Topics

For full Chapter 7 proficiency, ensure you can:

1.  **Write risk statements well**: Cause → event → impact.
2.  **Pick the best response**: Avoid/Mitigate/Transfer/Accept/Escalate (and the opportunity matches).
3.  **Know reserves**: Contingency vs management reserve, and when change control is needed.
4.  **Use the right quality tool**: Pareto vs fishbone vs control chart vs histogram vs checksheet.
5.  **Interpret control charts**: In-control vs in-spec, and run rules (special cause).
6.  **Explain CoQ**: Prevention/appraisal/internal failure/external failure.
7.  **Apply Cynefin**: Clear vs complicated vs complex vs chaotic (and what to do first).
8.  **Connect the dots**: How complexity increases risk and quality defects without fast feedback loops.

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> “Audit/process compliance” usually points to <strong>QA</strong>; “inspect/test deliverable” points to <strong>QC</strong>. “In control” does not always mean “meets specs,” and “risk occurred” means you should shift to the <strong>Issue Log</strong> and execute the plan.
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
