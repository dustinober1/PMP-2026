# 22c – Requirements Life Cycle Management

## Learning Objectives

By the end of this section, you will be able to:
- Manage relationships and dependencies between requirements
- Maintain requirements information for reuse across projects
- Apply effective requirements prioritization techniques
- Implement requirement approval processes
- Handle requirement changes throughout the project lifecycle

---

## Introduction: Requirements Are Not Static

Requirements don't exist in isolation—they form a complex web of relationships, evolve over time, and must be actively managed. Requirements Life Cycle Management ensures requirements remain relevant, aligned, and valuable throughout the project.

**Sarah's Learning Experience:**
In early projects, Sarah treated requirements as a deliverable—once documented, they were "done." She learned the hard way that:
- Requirements change as understanding deepens
- Dependencies affect prioritization and sequencing
- Requirements can be reused across similar projects
- Without ongoing management, requirements become obsolete

---

## Requirement Relationships and Dependencies

Understanding relationships between requirements is critical for impact analysis, change management, and solution design.

### Types of Requirement Relationships

### 1. Decomposition (Hierarchy)
**Parent → Child**: Requirements break down into more detailed requirements

```
Business Requirement: Reduce processing time by 50%
├── Stakeholder Requirement: Automated workflows
│   ├── Functional Requirement: Digital form submission
│   └── Functional Requirement: Automatic routing
└── Stakeholder Requirement: Real-time status tracking
    ├── Functional Requirement: Dashboard visibility
    └── Functional Requirement: Mobile notifications
```

### 2. Derivation (Source → Derived)
**Source**: The requirement provides basis for another requirement

**Examples:**
- Business need → Stakeholder requirement
- Regulation → Compliance requirement
- User need → Feature requirement

### 3. Dependency
**Prerequisite**: One requirement must be implemented before another

**Types:**
- **Functional**: Feature A enables Feature B
- **Data**: Data from A required for B
- **Technical**: Component A must exist before B
- **Business**: Process A must change before B

### 4. Conflict
**Contradiction**: Requirements cannot be simultaneously satisfied

**Examples:**
- "System must respond in <1 second" vs. "System must process complex analytics"
- "Must be accessible offline" vs. "Must have real-time updates"
- "Low cost" vs. "High security"

### 5. Association
**Related**: Requirements share common context but don't depend on each other

**Managing Relationships**

**Traceability Matrix:**
- **Forward Traceability**: Requirements → Design → Test
- **Backward Traceability**: Test ← Design ← Requirements
- **Coverage Analysis**: Ensure all requirements are addressed

**Impact Analysis Process:**
1. **Identify Change**: What requirement is changing?
2. **Find Relationships**: What depends on this?
3. **Assess Impact**: What else is affected?
4. **Evaluate Options**: How to handle impacts?
5. **Make Decision**: Approve, modify, or reject change

---

## Requirements Reuse and Maintainability

Organizations can save significant effort by reusing requirements across similar projects and maintaining requirements for long-term use.

### Requirements Reuse

**Benefits:**
- Faster time to market
- Reduced effort in requirements gathering
- Consistent solutions across projects
- Leveraged best practices

**Reusable Requirement Types:**
- **Common Business Processes**: HR, Finance, Procurement
- **Technical Standards**: Security, Performance, Usability
- **Regulatory Requirements**: Industry-specific compliance
- **Integration Requirements**: Standard interfaces

**Requirements Repository:**
- **Storage**: Central location for requirements
- **Classification**: Categorize by type, domain, project
- **Search**: Easy retrieval of relevant requirements
- **Version Control**: Track changes over time

**Example: Common Authentication Requirements**
```
Requirement ID: SEC-001
Description: Users must authenticate with unique ID and password
Applicability: All web applications
Rationale: Security compliance
Dependencies: Password policy (SEC-002), Session management (SEC-003)
```

### Requirements Maintainability

**Characteristics of Maintainable Requirements:**
- **Modular**: Independent, loosely coupled
- **Atomic**: Single purpose, compound-free
- **Stable**: Minimal changes over time
- **Clear**: Unambiguous language
- **Testable**: Verifiable criteria

**Maintainability Practices:**
1. **Consistent Formatting**: Standard templates and structure
2. **Clear Dependencies**: Explicit relationships documented
3. **Version Control**: Track changes with reasons
4. **Regular Reviews**: Update as business changes
5. **Ownership**: Clear responsibility for maintenance

---

## Requirements Prioritization

Not all requirements are created equal. Prioritization ensures limited resources focus on highest-value requirements.

### Prioritization Frameworks

### 1. MoSCoW Method
**Categories:**
- **Must Have**: Critical for success (project fails without)
- **Should Have**: Important but not critical (workaround possible)
- **Could Have**: Nice to have if time permits
- **Won't Have**: Explicitly excluded (for this release)

**Application:**
```
Must Have:
- User authentication
- Core business functionality
- Data security

Should Have:
- Reporting capabilities
- Mobile access
- Integration with System A

Could Have:
- Advanced analytics
- Custom themes
- Offline mode

Won't Have (this release):
- Multi-language support
- Advanced search
- API for third parties
```

### 2. Value vs. Effort Matrix
**Quadrants:**
- **High Value, Low Effort**: Quick wins (do first)
- **High Value, High Effort**: Major projects (plan carefully)
- **Low Value, Low Effort**: Fill-ins (optional)
- **Low Value, High Effort**: Thankless tasks (avoid)

**Implementation:**
```
            High Value
            ┌───────────────────┐
 Low Effort │ Quick Wins       │ High Effort │ Major Projects
            │ (Do First)       │ (Plan Carefully)
            └───────────────────┘
            │ Fill-ins         │ Time Sinks
 Low Value  │ (If Time)        │ (Avoid)
            └───────────────────┘
```

### 3. Kano Model
**Categories:**
- **Must-be (Basic)**: Expected features, absence causes dissatisfaction
- **One-dimensional (Performance)**: More is better
- **Attractive (Delighter)**: Unexpected features that please users
- **Indifferent**: Neither satisfaction nor dissatisfaction
- **Reverse**: More causes dissatisfaction

### 4. 100-Dollar Test
**Method**: Give stakeholders $100 to "spend" on requirements
- Allocate more money to higher-value requirements
- Forces trade-off decisions
- Reveals true priorities

### 5. Priority Groups
**Method**: Group requirements into priority levels
- Priority 1: Critical path requirements
- Priority 2: Important for success
- Priority 3: Nice to have
- Priority 4: Future consideration

### Prioritization Process

1. **Gather Criteria**: Define what makes requirements valuable
   - Business value
   - Technical feasibility
   - Risk reduction
   - User impact
   - Regulatory compliance

2. **Score Requirements**: Apply criteria systematically
3. **Analyze Results**: Look for patterns and insights
4. **Validate with Stakeholders**: Ensure agreement
5. **Document Decisions**: Record rationale for future reference

### Sarah's Prioritization Example

**Expense System Requirements:**
```
Priority 1 (Must Have):
- Submit expense reports
- Attach receipts
- Approval workflow
- Accounting integration

Priority 2 (Should Have):
- Mobile app
- Automated categorization
- Policy validation
- Reporting dashboard

Priority 3 (Could Have):
- Mileage tracking
- Per diem calculations
- Corporate card integration
- Analytics and insights
```

---

## Requirements Approval

Approval formalizes stakeholder agreement and establishes requirements baselines.

### Approval Process Elements

### 1. Approval Authority
**Who Approves?**
- **Business Sponsor**: Business value and ROI
- **Subject Matter Experts**: Technical correctness
- **End Users**: Usability and fitness for purpose
- **Technical Team**: Feasibility and implementability
- **Compliance**: Regulatory adherence

### 2. Approval Criteria
**Quality Checks:**
- **Complete**: All requirements captured
- **Clear**: Unambiguous language
- **Feasible**: Technically and economically viable
- **Testable**: Verifiable acceptance criteria
- **Consistent**: No conflicts
- **Traceable**: Linked to business needs

### 3. Approval Methods

**Formal Sign-off:**
- Written approval on requirement documents
- Legal binding for contract projects
- Creates baseline for change control

**Workshop Approval:**
- Group review and consensus
- Visual confirmation through models
- Immediate feedback and resolution

**Iterative Approval:**
- Continuous validation
- Rolling wave approval
- Common in agile approaches

### 4. Documentation

**Approval Artifacts:**
- **Signature Pages**: Formal approval records
- **Decision Logs**: Approval decisions and rationale
- **Issues List**: Outstanding concerns
- **Action Items**: Follow-up requirements

### Approval Challenges

**Challenge 1: Analysis Paralysis**
- **Problem**: Endless refinement without decision
- **Solution**: Set review deadlines, use "good enough" criteria

**Challenge 2: Conflicting Approvals**
- **Problem**: Different stakeholders approve different versions
- **Solution**: Clear approval authority, conflict resolution process

**Challenge 3: Oral Approvals**
- **Problem**: Verbal approvals that are later denied
- **Solution**: Require written confirmation, document verbal agreements

**Challenge 4: Scope Creep During Approval**
- **Problem**: New requirements added during review
- **Solution**: Separate approval from new requirement process

---

## Requirements Change Management

Change is inevitable. Effective change management ensures changes are evaluated, approved, and implemented systematically.

### Change Sources

**Internal Changes:**
- Understanding improves over time
- Technical discoveries during implementation
- Team insights and innovations
- Process improvements

**External Changes:**
- Market conditions change
- New regulations introduced
- Competitor actions
- Technology evolution

### Change Impact Analysis

**Impact Areas:**
- **Scope**: New/modified/deleted requirements
- **Schedule**: Timeline adjustments
- **Cost**: Budget impacts
- **Quality**: Performance implications
- **Risk**: New or changed risks
- **Resources**: Team skill and availability

**Impact Analysis Process:**
1. **Identify Change**: What is changing?
2. **Analyze Dependencies**: What else is affected?
3. **Assess Impact**: How much does it change?
4. **Evaluate Options**: How to handle the change?
5. **Make Recommendation**: Approve, modify, defer, or reject

### Change Control Process

**Predictive Change Control:**
1. **Change Request**: Formal documentation of change
2. **Initial Review**: Quick assessment of validity
3. **Impact Analysis**: Detailed assessment
4. **Change Board Review**: Evaluation and decision
5. **Communication**: Inform affected parties
6. **Implementation**: Execute approved changes

**Agile Change Control:**
1. **Backlog Addition**: New item added to backlog
2. **Prioritization**: Product owner assesses priority
3. **Sprint Planning**: Select high-priority items
4. **Stakeholder Review**: Demonstrate changes
5. **Feedback**: Adjust based on feedback

### Change Governance

**Change Control Board (CCB):**
- **Composition**: Relevant stakeholders and decision-makers
- **Authority**: Clearly defined decision limits
- **Process**: Standardized review and approval
- **Documentation**: Complete record of decisions

**Thresholds:**
- **Minor Changes**: Project manager approval
- **Major Changes**: Change board review
- **Significant Changes**: Sponsor/steering committee

---

## Requirements Tools and Automation

Modern requirements management leverages tools to improve efficiency, collaboration, and traceability.

### Tool Categories

### 1. Requirements Management Tools
**Features:**
- Central repository
- Version control
- Traceability matrices
- Collaboration capabilities
- Reporting and analytics

**Examples:**
- Jira/Confluence
- Azure DevOps
- IBM DOORS
- Jama Connect
- Blueprint

### 2. Collaboration Platforms
**Features:**
- Real-time editing
- Discussion threads
- Review and approval workflows
- Integration with other tools

### 3. Modeling Tools
**Types:**
- Process modeling (Visio, Lucidchart)
- Data modeling (ER/Studio, PowerDesigner)
- UI/UX prototyping (Figma, Sketch)
- Architecture modeling (Enterprise Architect)

### 4. Agile Tools
**Features:**
- User story management
- Backlog prioritization
- Sprint planning
- Burndown charts

### Tool Selection Criteria

**Considerations:**
- **Team Size and Distribution**
- **Project Complexity**
- **Integration Needs**
- **Budget Constraints**
- **Learning Curve**
- **Vendor Support**

### Implementation Best Practices

1. **Start Small**: Pilot with simple projects
2. **Train Thoroughly**: Ensure team competence
3. **Integrate Gradually**: Phase in features
4. **Customize Appropriately**: Adapt to your process
5. **Measure Benefits**: Track ROI and improvements

---

## Common Requirements Management Pitfalls

### Pitfall 1: Requirements Gold Plating
**Problem**: Adding features not requested by stakeholders
**Solution**: Strict requirements traceability, regular value validation

### Pitfall 2: Scope Creep
**Problem**: Uncontrolled expansion of project scope
**Solution**: Clear change control process, stakeholder education

### Pitfall 3: Incomplete Requirements
**Problem**: Missing necessary requirements
**Solution**: Multiple elicitation techniques, thorough reviews

### Pitfall 4: Poor Requirements Quality
**Problem**: Ambiguous, inconsistent, or untestable requirements
**Solution**: Quality criteria, reviews, peer validation

### Pitfall 5: Inadequate Traceability
**Problem**: Lost links between requirements and design/implementation
**Solution**: Comprehensive traceability matrix, automated tools

### Pitfall 6: Insufficient Change Management
**Problem**: Uncontrolled changes without impact analysis
**Solution**: Formal change control process, stakeholder involvement

---

## Summary: Active Requirements Management

Requirements Life Cycle Management is not a one-time activity—it's an ongoing process that ensures requirements remain valuable and relevant throughout the project.

**Key Takeaways:**

1. **Relationships Matter**: Understand and manage requirement dependencies
2. **Reuse Saves Effort**: Build and maintain a requirements repository
3. **Prioritization is Essential**: Focus limited resources on highest value
4. **Approval Creates Baseline**: Formal stakeholder agreement enables control
5. **Change is Inevitable**: Manage it systematically to minimize disruption

**Success Indicators:**
- Clear requirement relationships and dependencies
- Effective prioritization focusing on value delivery
- Stakeholder agreement and approval documented
- Controlled change management process
- Comprehensive traceability maintained

**Remember**: Requirements are the foundation of project success. Active, ongoing management ensures they continue to support project goals throughout the lifecycle.

---

**Up Next:** Section 22d covers Strategy Analysis—how to analyze current state, define future state, and develop effective change strategies.