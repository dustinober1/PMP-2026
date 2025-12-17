# Knowledge Check: Project Planning

Test your understanding of scope, schedule, cost, and resource planning.

<QuizComponent
  title="Chapter 6 Knowledge Check"
  :questions="[
    {
      text: 'You are using the PERT (Beta) formula to estimate an activity duration. Your Optimistic estimate is 10 days, Most Likely is 15 days, and Pessimistic is 32 days. What is the expected duration?',
      options: ['15 days', '17 days', '19 days', '21 days'],
      correct: 1,
      explanation: 'PERT = (O + 4M + P) / 6 = (10 + 60 + 32) / 6 = 102 / 6 = 17 days.',
      reference: 'Section 6.2'
    },
    {
      text: 'Your project is 2 weeks behind schedule. You have a small amount of extra budget and the Sponsor has authorized you to add two senior developers to the team. Which schedule compression technique are you using?',
      options: ['Crashing', 'Fast-Tracking', 'Resource Leveling', 'Resource Smoothing'],
      correct: 0,
      explanation: 'Crashing involves adding resources to critical path activities to shorten the duration, which typically increases costs.',
      reference: 'Section 6.2'
    },
    {
      text: 'Which document contains the detailed description of work packages, their owners, and their acceptance criteria?',
      options: ['The Project Scope Statement', 'The WBS Dictionary', 'The Activity List', 'The Requirements Traceability Matrix'],
      correct: 1,
      explanation: 'The WBS Dictionary provides detailed information about each component in the Work Breakdown Structure.',
      reference: 'Section 6.1'
    },
    {
      text: 'A project manager is asked to provide a cost estimate for a new project that is similar to one completed last year. The PM uses the actual costs from the previous project to create the estimate. What technique is this?',
      options: ['Parametric Estimating', 'Bottom-Up Estimating', 'Analogous Estimating', 'Three-Point Estimating'],
      correct: 2,
      explanation: 'Analogous estimating uses the values or parameters of a previous, similar project as the basis for estimating the current project.',
      reference: 'Section 6.3'
    },
    {
      text: 'In which contract type does the SELLER carry the most financial risk if the project costs double?',
      options: ['Cost Plus Fixed Fee (CPFF)', 'Firm Fixed Price (FFP)', 'Time and Materials (T&M)', 'Cost Plus Incentive Fee (CPIF)'],
      correct: 1,
      explanation: 'Under a Firm Fixed Price contract, the seller is obligated to complete the work regardless of their actual costs.',
      reference: 'Section 6.4'
    }
  ]"
/>

## Additional Study Topics

For complete mastery of Chapter 6, ensure you understand:

1. **Scope Baselines (6.1)**
   - The 100% Rule in WBS.
   - Using the WBS Dictionary to avoid Scope Creep.

2. **Scheduling Formulas (6.2)**
   - Calculating PERT and Standard Deviation.
   - Identifying the Critical Path and Float.

3. **Cost Reserves (6.3)**
   - Contingency Reserve (Known-Unknowns) vs. Management Reserve (Unknown-Unknowns).
   - The Cost of Quality (Prevention, Appraisal, Failure).

4. **Resource Tactics (6.4)**
   - Resource Leveling vs. Smoothing.
   - Contract Risk Allocation between Buyer and Seller.

---

<div class="study-tip">
  <strong>💡 Pro Tip:</strong> If the question involves data, formulas, or "math," it is likely testing <strong>Project Planning</strong>! Always double-check your PERT calculations.
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
