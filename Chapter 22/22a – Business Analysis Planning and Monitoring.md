# 22a – Business Analysis Planning and Monitoring

## Learning Objectives

By the end of this section, you will be able to:
- Determine the appropriate business analysis approach for different project contexts
- Plan business analysis governance and information management
- Design stakeholder engagement strategies specific to business analysis
- Establish metrics to assess business analysis performance
- Create a business analysis plan that integrates with project management

---

## Introduction: Planning the Analysis Work

Just as project managers need a project management plan, effective business analysis requires deliberate planning. Business analysis planning answers fundamental questions:

- **How** will we discover and analyze requirements?
- **Who** needs to be involved and when?
- **What** deliverables will we produce?
- **How** will we ensure quality and manage changes?
- **How** will we know if our business analysis activities are effective?

Sarah learned this lesson the hard way. In her early projects, she jumped straight into requirements gathering without planning her approach. The result? Missing stakeholders, incomplete requirements, and rework. Now, she always starts with business analysis planning.

---

## Determining the Business Analysis Approach

The business analysis approach defines how business analysis work will be performed. It's not one-size-fits-all—the approach must match the project context.

### Factors Influencing Your Approach

**1. Project Complexity**
- **Simple projects**: Lightweight documentation, informal processes
- **Complex projects**: Formal documentation, structured processes, traceability

**2. Requirements Uncertainty**
- **Low uncertainty (predictive)**: Detailed upfront analysis, comprehensive documentation
- **High uncertainty (agile)**: Iterative analysis, just-in-time documentation

**3. Regulatory Environment**
- **Highly regulated**: Extensive documentation, formal approvals, audit trails
- **Less regulated**: Flexible documentation, collaborative approvals

**4. Stakeholder Distribution**
- **Co-located**: In-person workshops, whiteboard sessions
- **Distributed**: Virtual collaboration tools, documentation-heavy approach

**5. Time Constraints**
- **Tight timeline**: Focused analysis, prioritized requirements
- **Flexible timeline**: Comprehensive analysis, thorough exploration

### Three Primary Approaches

#### 1. Traditional (Predictive) Approach
**Characteristics:**
- Comprehensive requirements upfront
- Formal documentation (requirements specification)
- Sequential phases: Elicit → Analyze → Document → Approve
- Change control process
- Detailed traceability

**When to Use:**
- Construction projects (Sarah's office renovation)
- Safety-critical systems
- Contractually fixed scope
- Highly regulated environments

**Key Artifacts:**
- Business Requirements Document
- Functional Requirements Specification
- Requirements Traceability Matrix
- Change Request Forms

#### 2. Agile Approach
**Characteristics:**
- Just-in-time requirements
- Collaborative workshops
- User stories and acceptance criteria
- Product backlog
- Continuous refinement

**When to Use:**
- Software development (Sarah's expense system)
- Uncertain requirements
- Fast-changing environments
- Innovation projects

**Key Artifacts:**
- Product Vision
- User Story Map
- Product Backlog
- Definition of Ready/Definition of Done

#### 3. Hybrid Approach
**Characteristics:**
- High-level requirements upfront
- Detailed requirements iteratively
- Mixed documentation styles
- Layered governance

**When to Use:**
- Large programs with multiple teams
- Mixed stakeholder needs
- Complex organizational change
- Projects with both certain and uncertain elements

**Key Artifacts:**
- Program-level requirements
- Team-level user stories
- Integration requirements
- Architecture specifications

### Sarah's Decision Framework

Sarah uses a simple matrix to decide her approach:

| Factor | Traditional | Agile | Hybrid |
|--------|-------------|-------|--------|
| **Requirements stability** | Stable | Evolving | Mixed |
| **Regulatory requirements** | High | Low | Medium |
| **Timeline flexibility** | Low | High | Medium |
| **Stakeholder availability** | Limited | Collaborative | Mixed |
| **Solution uncertainty** | Low | High | Medium |

---

## Business Analysis Governance

Governance defines how business analysis decisions are made, who has authority, and how conflicts are resolved.

### Governance Components

#### 1. Requirements Authority
**Who has the final say on requirements?**

**Options:**
- **Product Owner**: Single person with final authority (common in agile)
- **Requirements Committee**: Group of stakeholders who vote/decide
- **Project Sponsor**: Executive with ultimate authority
- **Consensus**: All stakeholders must agree (difficult at scale)

**Sarah's Examples:**
- **Office renovation**: Requirements committee with dept heads, facilities, IT, safety
- **Expense system**: Product owner (Finance Director) with stakeholder input
- **Transformation**: Executive steering committee for program decisions

#### 2. Approval Process
**How do requirements get approved?**

**Predictive Approval Process:**
1. Requirements document created
2. Stakeholder review period (1-2 weeks)
3. Review meeting for questions/clarifications
4. Formal sign-off
5. Requirements baselined

**Agile Approval Process:**
1. User stories created/refined in backlog
2. Acceptance criteria defined
3. Stories reviewed in sprint planning
4. Definition of done verification
5. Sprint review demonstration
6. Acceptance signaled by product owner

**Hybrid Approval Process:**
- High-level requirements: Predictive approval
- Detailed requirements: Agile acceptance

#### 3. Change Control
**How do we handle requirement changes?**

**Predictive Change Control:**
- Formal change request process
- Impact analysis (scope, schedule, cost)
- Change Control Board review
- Documentation of approved changes
- Baseline updates

**Agile Change Control:**
- New items added to backlog
- Product owner prioritizes
- Lower priority items deferred
- No formal change request needed
- Transparency through backlog visibility

#### 4. Quality Standards
**What makes requirements "good enough"?**

**Common Quality Criteria:**
- **Complete**: All needed requirements captured
- **Correct**: Accurate reflection of needs
- **Feasible**: Achievable within constraints
- **Necessary**: Adds value to solution
- **Unambiguous**: Clear interpretation by all
- **Verifiable**: Testable acceptance criteria
- **Traceable**: Linked to business need

---

## Information Management Strategy

Information management defines how requirements information is stored, accessed, and maintained.

### Key Considerations

#### 1. Repository Design
**Where and how will requirements be stored?**

**Options:**
- **Documents**: Word/Google Docs for simple projects
- **Spreadsheets**: Excel/Google Sheets for tracking
- **Requirements Tools**: Jira, Azure DevOps, specialized tools
- **Wikis**: Confluence, SharePoint for collaboration
- **Modeling Tools**: Visio, Lucidchart for visual requirements

**Selection Criteria:**
- Team size and distribution
- Complexity of requirements
- Integration needs with development tools
- Audit and compliance requirements
- Budget constraints

#### 2. Attributes and Metadata
**What information do we track for each requirement?**

**Standard Attributes:**
- Unique ID
- Requirement text
- Source (who requested it)
- Priority
- Status (draft, approved, implemented, etc.)
- Owner

**Advanced Attributes:**
- Business value score
- Effort estimate
- Dependencies
- Acceptance criteria
- Test cases linked
- Rationale/business justification

#### 3. Version Control
**How do we track requirement changes?**

**Approaches:**
- **Document versioning**: v1.0, v1.1, v2.0
- **Change history**: Log of all changes with date and author
- **Commenting**: Track discussions and decisions
- **Approval tracking**: Who approved which version

#### 4. Access Control
**Who can view, edit, approve requirements?**

**Roles:**
- **Read-only**: Most stakeholders
- **Edit**: Business analyst, product owner
- **Approve**: Designated approvers
- **Admin**: Configuration management

---

## Stakeholder Engagement for Business Analysis

Stakeholder engagement for business analysis focuses specifically on requirements-related collaboration.

### Engagement Strategy Framework

#### 1. Identify BA Stakeholders
**Who needs to be involved in requirements work?**

**Categories:**
- **Requirements Providers**: Source business needs
- **Requirements Consumers**: Use requirements to build/test
- **Requirements Approvers**: Have authority to approve
- **Requirements Influencers**: Affect requirements indirectly
- **Requirements Subject Matter Experts**: Provide domain knowledge

#### 2. Define Engagement Methods
**How will we engage each stakeholder group?**

**Common Methods:**
- **Interviews**: One-on-one deep dives
- **Workshops**: Collaborative group sessions
- **Surveys**: Broad input collection
- **Observation**: Understanding current processes
- **Prototyping**: Making requirements concrete
- **Reviews**: Document/story validation

#### 3. Create Communication Plan
**When and how often will we engage stakeholders?**

**Sample Communication Plan:**

| Stakeholder Group | Method | Frequency | Purpose |
|-------------------|--------|-----------|---------|
| Executive Sponsor | Status reports | Monthly | Alignment, decisions |
| End Users | Workshops | Bi-weekly | Requirements validation |
| Technical Team | Documentation | Continuous | Implementation guidance |
| Compliance | Reviews | Milestone | Regulatory approval |

#### 4. Manage Expectations
**How do we ensure realistic expectations?**

**Techniques:**
- Clear scope definition early
- Visual requirements models
- Regular demonstrations
- Transparent prioritization
- Honest trade-off discussions

---

## Business Analysis Performance Assessment

Measuring business analysis effectiveness ensures continuous improvement and value delivery.

### Key Performance Indicators

#### 1. Requirements Quality Metrics
**Are our requirements good?**

**Metrics:**
- **Requirements stability**: % change after baselining
- **Defect density**: Defects traced back to requirements
- **Test coverage**: % of requirements with test cases
- **Ambiguity rate**: Questions raised during implementation

**Targets:**
- <5% requirements change post-baseline (predictive)
- <10% defects from requirement errors
- 100% requirements traceability
- <2 questions per requirement (clarity)

#### 2. Stakeholder Satisfaction
**Are stakeholders satisfied with the process?**

**Measurements:**
- Satisfaction surveys after workshops
- Participation rates
- Feedback quality
- Time to approval

#### 3. Efficiency Metrics
**Are we efficient?**

**Metrics:**
- Time from need identification to requirement
- Cost of requirements activities
- Rework rate (requirement changes)
- Cycle time for requirement approval

#### 4. Value Delivery
**Are we delivering value?**

**Metrics:**
- % of requirements that deliver business value
- Requirements-to-features conversion rate
- Business case accuracy
- Benefits realization tracking

### Assessment Methods

#### 1. Retrospectives
Regular sessions to reflect on:
- What worked well in requirements work
- What didn't work
- What to improve next time
- Action items for improvement

#### 2. Peer Reviews
Having other business analysts or PMs review:
- Requirement documents
- Process effectiveness
- Workshop facilitation
- Deliverable quality

#### 3. Stakeholder Feedback
Structured collection of feedback from:
- Requirements providers
- Implementation team
- Testing team
- End users

---

## Creating Your Business Analysis Plan

A Business Analysis Plan (BAP) integrates all planning elements into a comprehensive guide.

### BAP Template

#### 1. Executive Summary
- Project overview
- Business analysis approach summary
- Key stakeholders
- Major deliverables

#### 2. Business Analysis Approach
- Chosen methodology (predictive/agile/hybrid)
- Rationale for approach selection
- Tailoring decisions

#### 3. Governance Framework
- Requirements authority structure
- Approval process
- Change control procedures
- Quality standards

#### 4. Performance Assessment
- Metrics and KPIs
- Assessment schedule
- Improvement process

#### 5. Stakeholder Engagement
- Stakeholder register
- Engagement methods
- Communication plan

#### 6. Information Management
- Repository strategy
- Document standards
- Version control
- Access control

#### 7. Activities and Schedule
- BA activities list
- Dependencies
- Schedule integration with project plan

### Sarah's Example: Office Renovation BAP

```markdown
# Business Analysis Plan: Office Renovation

## Approach: Traditional
- Rationale: Fixed scope, regulatory requirements, stakeholder needs for certainty

## Governance
- Requirements Authority: Facilities Steering Committee
- Approval Process: Formal review and sign-off
- Change Control: Change Request Form required

## Stakeholder Engagement
- Key Stakeholders: Dept heads, facilities, IT, safety
- Methods: Interviews, workshops, document review
- Schedule: Weekly status, bi-weekly working sessions

## Information Management
- Repository: SharePoint Requirements site
- Documentation: Formal specifications
- Traceability: Requirements Matrix in Excel

## Performance Assessment
- Metric: <5% change post-approval
- Review: Monthly quality assessment
```

---

## Common Planning Pitfalls and Solutions

### Pitfall 1: One Size Fits All
**Problem**: Using the same BA approach for all projects
**Solution**: Tailor approach based on project context
**Framework**: Use decision matrix for approach selection

### Pitfall 2: Over-planning
**Problem**: Spending more time planning than doing
**Solution**: Right-sized planning based on complexity
**Guideline**: Planning should be 5-15% of total BA effort

### Pitfall 3: No Metrics
**Problem**: Can't measure BA effectiveness
**Solution**: Define KPIs during planning
**Start**: Begin with 2-3 key metrics

### Pitfall 4: Isolated Planning
**Problem**: BA plan disconnected from project plan
**Solution**: Integrate BA planning with project planning
**Integration**: Align BA milestones with project milestones

### Pitfall 5: Ignoring Team Skills
**Problem**: Plan assumes capabilities team doesn't have
**Solution**: Assess team capabilities and plan training/gaps
**Reality Check**: Be honest about current capabilities

---

## Summary: Planning Sets the Foundation

Effective business analysis doesn't happen by accident—it requires deliberate planning. A well-crafted business analysis plan ensures:

- **Approach matches context**: Not forcing square pegs in round holes
- **Clarity of roles**: Everyone knows who does what
- **Stakeholder alignment**: Right people involved at right time
- **Quality focus**: Standards and metrics defined upfront
- **Integration with project**: BA activities support project success

**Key Takeaways:**

1. **Match approach to context**: Traditional, agile, or hybrid based on project characteristics

2. **Governance matters**: Define who decides, how changes happen, what "done" means

3. **Information management**: Plan how requirements are stored, accessed, and maintained

4. **Stakeholder engagement**: Be intentional about who, how, when stakeholders participate

5. **Measure to improve**: Define metrics to assess and improve BA effectiveness

6. **Integration is key**: Business analysis planning must integrate with project planning

**Remember**: The best business analysis plan is one that's actually used. Keep it practical, tailored, and focused on delivering value.

---

**Up Next:** Section 22b covers elicitation and collaboration techniques—how to actually get the requirements information you need from stakeholders.