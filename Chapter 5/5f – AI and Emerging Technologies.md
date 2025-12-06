
Sarah notices that her organization is increasingly interested in AI. The CTO asks: *"How do we incorporate AI into our projects? What does project management look like when we are building or using AI?"*

Sarah realizes: This is a new skill for PMs—understanding how AI affects project management itself, and how to manage projects that use or build AI.

### 5.6.1 AI in Project Management (Using AI to Manage Better)

**Scheduling and resource management:**

- AI tools can analyze historical project data to improve estimates
- "In the past, projects similar to this took X duration. Accounting for your team size and experience, this project will likely take Y duration."
- Machine learning can identify patterns in what causes delays, helping with proactive management

**Risk prediction:**

- AI can analyze project data (schedule variance, cost variance, team changes, scope changes) to predict which projects are at risk
- Algorithms can flag patterns: "Projects in this category with this team composition have a 70% chance of overrunning schedule"
- Enables early intervention

**Workload and resource optimization:**

- AI can help balance workload across team members and projects
- "Team member X is overallocated; tasks Y and Z are competing for their time; recommend shifting Z to team member B"

**Data analysis and reporting:**

- AI can analyze project metrics, create dashboards, surface insights
- "Review this trend: your defect rate is increasing; here are projects with similar patterns and how they recovered"
- Saves time on data wrangling so PMs can focus on decision-making

**Natural language processing:**

- AI can extract information from emails, Slack, meeting notes
- Automatically updates the risk register based on team conversations
- Generates meeting summaries

**Challenges Sarah considers:**

- **Over-reliance**: Do not ignore your judgment and context just because an algorithm says something
- **Data quality**: Garbage in, garbage out. If historical data is bad, AI predictions are bad.
- **Bias**: AI learns from historical data. If that data reflects biases (e.g., overestimating how fast junior developers work), the AI perpetuates those biases
- **Transparency**: How does the AI reach its conclusion? If you cannot explain it, should you trust it?

**Sarah's approach:**

- Use AI tools to surface patterns and flag issues that human project managers might miss
- Always combine AI insights with your understanding and judgment
- Question assumptions: Is this prediction based on good data? Does the context here match historical patterns?
- Do not let AI replace decision-making, but let it inform better decisions

### 5.6.2 AI in Project Deliverables (Building or Using AI)

Sarah faces a new type of project: building software that uses AI, or integrating AI into existing systems.

**Examples:**

- Chatbot using large language models (LLMs)
- Expense reporting system with AI-powered categorization (instead of manual suggestions)
- Recommendation engine using machine learning
- Predictive analytics system

**What is different about these projects?**

**Inherent uncertainty:**

- Predictive models do not always work reliably
- Performance depends on data quality and quantity
- You may not know until late in development whether the AI approach will work
- Example: "We think we can build an AI cost categorizer that is 95% accurate. But that depends on having good training data and the model performing as expected. We will not know for sure until we test."

**Data dependency:**

- Quality, quantity, and characteristics of data determine success
- Garbage data in → garbage model out
- May need to invest in data cleaning and preparation before AI work starts
- Privacy and security concerns around data

**Explainability and trust:**

- "Why did the AI make this decision?" → Sometimes the answer is "the model is a black box, we do not know"
- Users may not trust an AI system if they do not understand how it works
- Regulatory requirements may require explainability (e.g., financial decisions, healthcare decisions)

**Bias and fairness:**

- If training data is biased, the model learns bias
- Example: If historical expense data shows that women's travel is categorized differently than men's, the AI model learns to replicate that bias
- May need to actively monitor and correct for bias

**Integration challenges:**

- AI system produces predictions; the business process must handle those predictions
- Example: Chatbot recommends a solution; what if it is wrong? Is there a human review step?
- May need to redesign business processes around the AI

**Team composition:**

- Traditional project team: Developer, QA, PM, Product Owner
- AI project team: Data scientist, data engineer, ML engineer, QA, PM, Product Owner, domain expert, ethicist (?)
- New skills and collaboration model needed

**Scope and planning:**

- Traditional: Scope is fixed; you know what success looks like upfront
- AI projects: Scope often uncertain; you may discover the approach will not work midway
- Planning must accommodate experimentation and learning
- "We will build a prototype to test whether this AI approach is feasible. If it works, we invest in production. If not, we pivot."

**Sarah's approach to AI projects:**

- **Experimentation mindset**: Treat initial AI work as experiments. Build prototypes, test assumptions, learn whether the approach works.
- **Agile or hybrid approach**: Avoid purely predictive planning where every detail is locked in. Use iterative delivery and feedback.
- **Data preparation**: Invest in understanding and preparing data before heavy development.
- **Explainability and bias review**: Do not assume the model is correct. Test for bias, verify explanations, involve domain experts.
- **Clear success criteria**: What does good performance look like? (Accuracy, false positive rate, user satisfaction, business metrics?)
- **Monitoring and adaptation**: Even after deployment, monitor the model. Data distribution changes; the model may drift. Plan for retraining and updates.

### 5.6.3 AI Governance and Ethics

Sarah is asked: *"Is there an ethical way to use AI in our projects? What should we be careful about?"*

**Key ethical considerations:**

**Transparency and consent:**

- Do users know they are interacting with an AI?
- Do users understand how their data is being used?
- Have they consented?
- Example: If the expense system uses AI to categorize expenses, should we tell users? (Yes, probably.)

**Privacy and data security:**

- Is personal data being collected and used appropriately?
- Are there regulatory requirements (GDPR, HIPAA, others) for how the data is handled?
- What happens if data is breached?

**Accuracy and reliability:**

- Does the AI make decisions that significantly affect people?
- What happens if the AI makes a wrong decision?
- Is there a human review step?
- Example: AI categorizes expense as fraudulent and rejects it. User has no recourse. Is that fair?

**Bias and fairness:**

- Does the AI treat all people fairly?
- Is there disparate impact (e.g., AI is accurate for some groups but not others)?
- Have you tested for bias?

**Accountability:**

- If the AI makes a wrong decision that harms someone, who is responsible?
- The PM? The developer? The company? The user?
- What recourse does the user have?

**Regulatory and legal compliance:**

- Are there laws or regulations that apply?
- In financial services, explainability is required
- In healthcare, validation is required
- In employment, bias and fairness are legally required

**Sarah's project governance:**

- For any AI component, explicitly discuss: Is there a bias risk? How will we test for it?
- Define: What does acceptable performance look like? When is the AI good enough to use?
- Plan: Who reviews AI decisions? Is there a human-in-the-loop?
- Communicate: Are users aware they are interacting with AI?
- Monitor: After deployment, monitor for bias, drift, errors. Have a process to update or remove the AI if it is not working.

### 5.6.4 On the Exam: AI and Ethics Scenarios

Exam questions increasingly test understanding of AI and ethics in project management.

**Common question patterns:**

- *"Your project is using AI to make categorization decisions. What governance should you have?"*
- *"The data science team says the model is 90% accurate, but you notice it is less accurate for one demographic group. What should you do?"*
- *"Your AI system recommends something, but you are not sure why. The user is asking for an explanation. How do you respond?"*
- *"The AI project is taking longer than planned because you are discovering edge cases. How do you manage scope and schedule?"*

**Red flag answers:**

- "Just use the AI; do not worry about ethics"
- "If the AI makes a wrong decision, that is not our responsibility"
- "We do not need to test the AI for bias"
- "Deploy the AI and fix problems later"
- "Do not tell users they are interacting with AI"

**Good answers:**

- Explicitly address bias, accuracy, explainability, and ethics in the project plan
- Test the AI for accuracy and fairness before deployment
- Have a human review process or a clear policy about when the AI is trusted
- Communicate to users about the AI and its limitations
- Have a monitoring and update plan
- Recognize that AI projects have uncertainty; plan accordingly with agile or hybrid approaches
- Involve domain experts, ethicists, and stakeholders in decisions

---

## 5.7 Professional Responsibility and Ethics: Doing the Right Thing
