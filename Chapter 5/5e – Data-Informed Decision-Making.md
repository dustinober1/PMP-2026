## 5.5 Data-Informed Decision-Making: Beyond Gut Feel

Sarah realizes that project management has traditionally relied on experience and intuition. But increasingly, projects use data and metrics to make better decisions.

### 5.5.1 What Is Data-Informed Decision-Making?

Data-informed decision-making means:

- **Collect metrics**: Measure aspects of the project (schedule, cost, quality, team performance, stakeholder satisfaction)
- **Analyze data**: Look for patterns, trends, variances
- **Inform decisions**: Use the analysis to support decision-making (though not to replace judgment)

The key word: **informed, not determined.** Data informs your decision; it does not replace your judgment and context understanding.

### 5.5.2 Common Project Metrics

**Schedule metrics:**

- **Schedule Variance (SV)**: Planned work vs. actual work. Are you ahead or behind schedule?
  - In predictive: Calculated from earned value. Positive = ahead, negative = behind.
  - In agile: Tracked by velocity. Is the team completing sprints as planned?

- **Schedule Performance Index (SPI)**: Earned value / Planned value. How efficient is the team at completing work?
  - Above 1.0 = ahead of schedule
  - Below 1.0 = behind schedule

- **Burn-down / Burn-up charts** (agile): Visual representation of work completed vs. work remaining
  - Burn-down: Line shows work remaining decreasing as sprints complete
  - If the line is above the trend, you are behind; if below, you are ahead

**Sarah's office renovation**:

- Month 6 progress: Foundation and structural frame 80% complete (planned 100% at this point)
- SPI = 0.8 (behind schedule)
- Forecast: At this rate, project will finish in 22.5 months instead of 18 months (4.5-month delay)
- Action: Accelerate non-critical path work, compress MEP schedule, consider overtime

**Sarah's expense system**:

- Sprint 5: Team completed 8 story points (planned 8 story points)
- Velocity stable at 8 points/sprint
- Burndown on track
- Forecast: 6 sprints needed for the current backlog (48 points at 8 points/sprint)

**Cost metrics:**

- **Cost Variance (CV)**: Budgeted cost vs. actual cost. Are you over or under budget?
  - Positive = under budget (good)
  - Negative = over budget (bad)

- **Cost Performance Index (CPI)**: Earned value / Actual cost. How efficiently are you spending?
  - Above 1.0 = under budget (good)
  - Below 1.0 = over budget (bad)

- **Budget Burn Rate**: How fast is money being spent?
  - Useful for forecasting when you will run out of budget

**Sarah's office renovation**:

- Month 6 spend: $1.8M actual (planned $1.6M)
- Cost Variance: -$200K (over budget by $200K)
- CPI = 0.89 (less value per dollar spent than planned)
- Causes: Material costs higher than anticipated, some inefficiencies
- Forecast: At this rate, project will cost $4.7M (over the $4.2M budget by $500K)
- Action: Negotiate with suppliers, improve efficiency, adjust scope if necessary

**Sarah's expense system**:

- Sprint 5 burn rate: $50K/sprint (on budget; team size is fixed)
- Budget: $300K = 6 sprints
- On track

**Quality metrics:**

- **Defect rate**: How many bugs or defects per unit of work?
  - Useful for trend analysis: Is quality improving or getting worse?

- **Test coverage**: What percentage of the code is covered by tests?
  - Higher coverage = lower risk of bugs

- **Customer satisfaction**: User surveys, NPS (Net Promoter Score)
  - Measures whether deliverables are meeting user needs

**Sarah's expense system**:

- Sprint 4: 5 defects found in production (0.6 defects per story point)
- Sprint 5: 2 defects found in production (0.25 defects per story point)
- Trend: Quality improving as team learns and testing improves

**Stakeholder satisfaction:**

- **Pulse surveys**: Quick surveys to gauge satisfaction
- **NPS**: Would you recommend this to a colleague?
- **Engagement metrics**: Attendance at meetings, participation in decisions

**Sarah's office project**:

- Month 6 pulse survey: Employees are somewhat satisfied with the plan (6.5/10), concerned about disruption
- Action: Increase communication about move details, provide support

### 5.5.3 Trend Analysis: Looking for Patterns

Sarah learns that single data points are not very useful. Trends are more informative.

**Schedule trend:**

- Month 3: On schedule
- Month 4: Slightly behind (SPI = 0.95)
- Month 5: More behind (SPI = 0.90)
- Month 6: Significantly behind (SPI = 0.80)

The trend: Getting worse. This signals a problem that is not going away on its own.

**Cost trend:**

- Month 3: On budget
- Month 4: Slightly over (CPI = 0.98)
- Month 5: More over (CPI = 0.93)
- Month 6: Significantly over (CPI = 0.89)

The trend: Getting worse. Material costs or inefficiencies are not being corrected.

**Quality trend (defects):**

- Sprint 2: 8 defects
- Sprint 3: 6 defects
- Sprint 4: 5 defects
- Sprint 5: 2 defects

The trend: Improving. Quality practices are working.

### 5.5.4 Forecasting: Predicting the Future

Once Sarah has trend data, she can forecast:

- **Schedule forecast**: At the current velocity, when will the project finish?
  - If SPI = 0.80 (20% behind schedule), the project will take 20% longer than originally planned
  - Original plan: 18 months. Forecast: 22.5 months.

- **Cost forecast**: At the current burn rate, what will the final cost be?
  - If CPI = 0.89 (spending $1.12 for every $1.00 of value), the final cost will be higher than planned
  - Original budget: $4.2M. Forecast: $4.7M.

- **Quality forecast**: If the current quality trend continues, will we meet quality standards?
  - If defect rate is declining, quality should be acceptable at release
  - If defect rate is increasing, quality problems are likely

**Sarah uses forecasts to make decisions:**

- Schedule: "At current rate, we will miss the move-in date. We need to take action: accelerate non-critical work, add resources, or adjust scope."
- Cost: "At current rate, we will exceed budget by $500K. We need to negotiate costs, improve efficiency, or adjust scope."
- Quality: "Defect rate is improving; we are on track for acceptable quality."

### 5.5.5 Leading vs. Lagging Indicators

Sarah learns to distinguish between:

**Lagging indicators**: Measure the result after the fact
- Schedule variance (calculated at end of period)
- Cost variance (calculated at end of period)
- Defect rate (measured after QA testing)
- Final project success (measured after project closes)

Lagging indicators are informative but come too late to adjust course. If you discover at the end of the month that you are 20% over budget, you cannot undo the spending.

**Leading indicators**: Predict the future before it happens
- Team velocity trend (declining velocity predicts schedule problems)
- Burn rate trend (rising burn rate predicts cost problems)
- Defect trend (increasing defects predict quality problems at release)
- Requirements churn (high rate of new requirements predicts scope/schedule problems)
- Team morale (declining morale predicts turnover and productivity issues)

**Sarah uses leading indicators to get ahead of problems:**

- Notice: Velocity is declining (was 8 points/sprint, now 7)
- Predict: At this rate, team will not complete planned scope in planned time
- Action: Investigate why (illness, dependency, technical impediment, unclear requirements?)
- Respond: If possible, address the root cause; adjust expectations if necessary

- Notice: Requirements churn is high (3 new features requested in last 2 sprints)
- Predict: Scope is not stable; team will have trouble delivering
- Action: Implement ruthless prioritization; defer new features to Phase 2
- Respond: Clarify that backlog is locked (no new features this sprint)

Sarah also encounters modern dashboards that use AI to highlight potential issues or forecast outcomes. She treats these signals as **leading indicators to investigate**, not as unquestioned truths—validating surprising insights with her team and underlying data before taking action.

### 5.5.6 Data-Informed vs. Data-Driven

Sarah learns an important distinction:

- **Data-informed**: Use data to inform your decision, along with context, judgment, and experience
  - "Metrics show we are behind schedule. Combined with what I know about the team and the work, I believe we can recover by accelerating non-critical path. I will try this approach."
  - Data is input, not the whole decision

- **Data-driven**: Let data make the decision, without judgment
  - "Metrics show we are behind schedule, so we will work weekends until we catch up."
  - No consideration of team morale, burnout, or whether the outcome justifies the cost

**Sarah advocates for data-informed decisions:**

- Use metrics to surface problems and opportunities
- Combine with your understanding of context (team capability, project constraints, organizational priorities)
- Make a decision that balances data with judgment
- Communicate the decision and your reasoning to stakeholders

### 5.5.7 Common Mistakes with Metrics

Sarah observes several pitfalls:

**Mistake 1: Vanity metrics**

- Tracking metrics that sound good but do not predict success
- Example: "Lines of code written per day" → Does not measure productivity (a developer could write 1,000 bad lines or 50 excellent lines)
- Fix: Choose metrics that actually predict success (delivered features, quality, velocity)

**Mistake 2: Gaming the metrics**

- Changing behavior to look good on the metric, even if it harms the project
- Example: Developers mark work as done to improve burn-down, even though testing is incomplete
- Fix: Metrics are tools, not performance evaluations of individuals; use them to identify problems, not to evaluate people

**Mistake 3: Ignoring context**

- Interpreting metrics without understanding the context
- Example: "Velocity is 6 this sprint; team is slowing down" → But team had 2 people out sick; without them, velocity might be normal
- Fix: Understand the context before drawing conclusions

**Mistake 4: Too many metrics**

- Tracking so many metrics that you get lost in data instead of focusing on what matters
- Fix: Choose 3–5 key metrics that predict project success; ignore the rest

**Mistake 5: Not acting on data**

- Collecting metrics but not using them to make decisions or improve
- Fix: Review metrics regularly, identify trends, take action

### 5.5.8 On the Exam: Data and Metrics Scenarios

Exam questions test data-informed thinking by presenting metric data and asking you to interpret it and make a decision.

**Common question patterns:**

- *"Your project is showing a CPI of 0.85. What does this mean, and what should you do?"*
- *"Velocity has declined from 8 to 5 over the last three sprints. What could be the cause, and how should you respond?"*
- *"A metric shows the project is on track, but your team says they are stressed. How do you interpret this?"*

**Red flag answers:**

- Ignore metrics because you trust your gut
- React to a single data point without looking at trends
- Interpret metrics without considering context
- Assume correlation means causation ("Velocity is down, so the team is lazy")

**Good answers:**

- Interpret metrics in context (what does this metric actually mean?)
- Look for trends (is this a one-time event or a pattern?)
- Investigate the cause (why is this happening?)
- Take action based on understanding
- Combine metrics with other information (team feedback, context, constraints)
- Adjust and monitor

---

## 5.6 AI and Emerging Technologies: The New Frontier for Project Managers
