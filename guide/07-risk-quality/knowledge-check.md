# Knowledge Check: Risk, Quality & Complexity

Test your ability to manage uncertainty, ensure quality, and navigate project messiness.

<QuizComponent
  title="Chapter 7 Knowledge Check"
  :questions="[
    {
      text: 'A critical risk has just occurred. The project manager identifies that the risk was already documented in the Risk Register and has a pre-planned response. What is the PM\'s FIRST action?',
      options: ['Update the Risk Register to status: occurred', 'Inform the Sponsor and wait for instructions', 'Implement the planned Risk Response and update the Issue Log', 'Analyze the impact using a Monte Carlo simulation'],
      correct: 2,
      explanation: 'Once a risk occurs, it is an issue. The PM should immediately execute the response they planned and move the item to the Issue Log.',
      reference: 'Section 7.1'
    },
    {
      text: 'A team member is auditing the software development process to ensure that the team is following the mandated security protocols. What is this activity called?',
      options: ['Quality Control', 'Quality Assurance', 'Scope Validation', 'Risk Mitigation'],
      correct: 1,
      explanation: 'Auditing processes to ensure they are being followed correctly is a proactive Quality Assurance (QA) activity.',
      reference: 'Section 7.2'
    },
    {
      text: 'The project team is dealing with a high number of defects. They want to identify which specific 20% of causes are creating 80% of the defects so they can prioritize their fixes. Which tool should they use?',
      options: ['Cause-and-Effect Diagram', 'Pareto Chart', 'Control Chart', 'Scatter Diagram'],
      correct: 1,
      explanation: 'The Pareto Chart is based on the 80/20 rule and is used to prioritize the "vital few" over the "trivial many."',
      reference: 'Section 7.2'
    },
    {
      text: 'A project manager is working on a high-tech R&D project. The stakeholders agree on the vision, but no one is sure how to achieve it technically. The environment is highly unpredictable. Using the Cynefin framework, what is the best approach?',
      options: ['Best Practice (Sense-Categorize-Respond)', 'Expert Analysis (Sense-Analyze-Respond)', 'Safe-to-Fail Experiments (Probe-Sense-Respond)', 'Immediate Action (Act-Sense-Respond)'],
      correct: 2,
      explanation: 'In a Complex environment (Probe-Sense-Respond), you must experiment because cause and effect are not clear upfront.',
      reference: 'Section 7.3'
    },
    {
      text: 'What is the most expensive cost of quality category?',
      options: ['Prevention Costs', 'Appraisal Costs', 'Internal Failure Costs', 'External Failure Costs'],
      correct: 3,
      explanation: 'External Failure Costs (e.g., lawsuits, loss of reputation, warranty claims) are always the most expensive because they happen after the customer has received the product.',
      reference: 'Section 7.2'
    }
  ]"
/>

## Additional Study Topics

For complete mastery of Chapter 7, ensure you understand:

1. **Risk Strategies (7.1)**
   - Difference between **Mitigate** (reduce) and **Avoid** (eliminate).
   - **Secondary Risk**: A risk created by your response to another risk.

2. **The 7 Quality Tools (7.2)**
   - **Control Charts**: Knowing the Rule of Seven (out of control).
   - **Fishbone Diagram**: Identifying root causes via the 5 Whys.

3. **Complexity Drivers (7.3)**
   - Distinguishing between **Complicated** (solvable by experts) and **Complex** (needs experiments).
   - The role of **Systems Thinking** in project integration.

---

<div class="study-tip">
  <strong>💡 Pro Tip:</strong> If the question mentions "Stakeholders disagreeing" and "Unclear tech," think <strong>Complexity</strong>. If it mentions "Math" and "Money," think <strong>Risk Analysis (EMV)</strong>.
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
