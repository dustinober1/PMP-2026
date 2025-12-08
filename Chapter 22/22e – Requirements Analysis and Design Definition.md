# 22e – Requirements Analysis and Design Definition

## Learning Objectives

By the end of this section, you will be able to:
- Specify and model requirements effectively
- Verify requirements for correctness and completeness
- Validate requirements with stakeholders
- Define and evaluate design options
- Apply appropriate requirements analysis techniques

---

## Introduction: From Needs to Solutions

Requirements Analysis and Design Definition transforms stakeholder needs into clear, actionable specifications and solution designs. It's the bridge between understanding the problem and defining the solution.

**Sarah's Analysis Challenge:**
After gathering requirements for the expense reporting system, Sarah had 273 different requests from various stakeholders. She needed to:
- Organize and structure the requirements
- Identify conflicts and overlaps
- Ensure requirements were correct and complete
- Design a solution that would satisfy the most critical needs

Requirements analysis and design definition provided the methodology to accomplish this.

---

## Requirements Specification and Modeling

Transforming raw stakeholder input into structured, analyzable requirements.

### 1. Requirements Structuring

**Hierarchical Structure:**
```
Business Requirements
├── Stakeholder Requirements
│   ├── User Group A Requirements
│   └── User Group B Requirements
└── Solution Requirements
    ├── Functional Requirements
    │   ├── Feature A
    │   └── Feature B
    └── Non-Functional Requirements
        ├── Performance
        ├── Security
        └── Usability
```

**Structuring Principles:**
- **Logical Grouping**: Related requirements together
- **Clear Hierarchy**: Parent-child relationships
- **Traceability**: Links to business needs
- **Modularity**: Independent, manageable groups

### 2. Requirements Writing

**Characteristics of Good Requirements:**
- **Atomic**: Single requirement, no compound statements
- **Unambiguous**: Clear, single interpretation
- **Complete**: All necessary information included
- **Consistent**: No conflicts with other requirements
- **Verifiable**: Testable acceptance criteria
- **Traceable**: Linked to source

**Requirement Templates:**

**Functional Requirements Template:**
```
[ID] The system shall [action] [object] [condition]

Example: [R-001] The system shall validate expense reports [when submitted]
        [against company policy]
```

**Non-Functional Requirements Template:**
```
[ID] The [system/component] shall [quality attribute] [metric] [condition]

Example: [NF-001] The system shall respond [to user actions]
        [within 2 seconds] [for 95% of transactions]
```

### 3. Requirements Modeling Techniques

**Process Modeling:**
- **Flowcharts**: Visualize process flows
- **BPMN**: Standard business process notation
- **Swimlane Diagrams**: Show roles and responsibilities
- **State Transition Diagrams**: Model system behavior

**Data Modeling:**
- **Entity-Relationship Diagrams**: Show data relationships
- **Class Diagrams**: Object-oriented data structures
- **Data Dictionary**: Define data elements

**Behavioral Modeling:**
- **Use Case Diagrams**: System interactions
- **Sequence Diagrams**: Message flows
- **Activity Diagrams**: Process logic

**Interface Modeling:**
- **System Context Diagram**: System boundaries
- **Interface Specifications**: Data exchange formats
- **API Documentation**: Interface details

### 4. Requirements Attributes

**Core Attributes:**
- **ID**: Unique identifier
- **Text**: Requirement description
- **Source**: Origin of requirement
- **Priority**: Relative importance
- **Status**: Current state
- **Owner**: Responsible person

**Extended Attributes:**
- **Business Value**: Score or ranking
- **Effort Estimate**: Implementation effort
- **Dependencies**: Related requirements
- **Acceptance Criteria**: Test conditions
- **Rationale**: Business justification
- **Verification Method**: How to verify

---

## Requirements Verification

Verification ensures requirements are correct, complete, and of high quality.

### 1. Verification vs. Validation

**Verification:**
- "Are we building the product right?"
- Checks requirement quality
- Technical review process
- Performed by analysts and technical team

**Validation:**
- "Are we building the right product?"
- Checks requirement correctness
- Business review process
- Performed by stakeholders

### 2. Verification Techniques

**Peer Reviews:**
- Colleagues review requirements
- Focus on quality criteria
- Checklists for common issues
- Collaborative improvement

**Inspections:**
- Formal review process
- Defined roles (moderator, inspector, author, scribe)
- Metrics collection
- Follow-up verification

**Walkthroughs:**
- Author leads review
- Discussion-based approach
- Knowledge transfer focus
- Informal but structured

**Static Analysis:**
- Automated checking
- Consistency verification
- Completeness checking
- Pattern recognition

### 3. Verification Checklists

**Completeness Checklist:**
- [ ] All stakeholder needs addressed
- [ ] Business requirements covered
- [ ] User scenarios included
- [ ] Edge cases considered
- [ ] Error conditions defined
- [ ] Constraints identified

**Consistency Checklist:**
- [ ] No conflicting requirements
- [ ] Terminology consistent
- [ ] References correct
- [ ] Data formats consistent
- [ ] Interface definitions match

**Clarity Checklist:**
- [ ] Language unambiguous
- [ ] Single interpretation
- [ ] No technical jargon (unless defined)
- [ ] Measurable criteria
- [ ] Testable conditions

### 4. Verification Metrics

**Quality Metrics:**
- **Defect Density**: Number of defects per requirement
- **Review Coverage**: Percentage of requirements reviewed
- **Revision Rate**: Number of changes after review
- **Review Effectiveness**: Defects found per hour

**Target Values:**
- Defect density: < 2 per requirement
- Review coverage: 100%
- Revision rate: < 10% after baselining
- Review effectiveness: > 5 defects per hour

---

## Requirements Validation

Validation ensures requirements accurately reflect stakeholder needs and will deliver intended value.

### 1. Validation Activities

**Prototyping:**
- Tangible models of solution
- Different levels of fidelity
- Rapid iteration and feedback
- Concrete requirement validation

**Scenarios:**
- Story-based requirement exploration
- Use case walkthroughs
- "Day in the life" scenarios
- Edge case testing

**Requirements Workshops:**
- Collaborative review sessions
- Stakeholder validation
- Consensus building
- Issue resolution

**Surveys and Questionnaires:**
- Broad stakeholder input
- Quantitative feedback
- Priority assessment
- Satisfaction measurement

### 2. Acceptance Criteria Development

**Purpose**: Define testable conditions for requirement satisfaction

**Gherkin Format:**
```
Given [context]
When [action]
Then [expected outcome]
And [additional outcomes]
```

**Examples:**
```
Given a logged-in user
When they submit an expense report
Then the report is saved to the database
And a confirmation number is generated
And the user receives email notification
```

### 3. Validation Process

**Preparation:**
- Identify validation participants
- Schedule validation sessions
- Prepare validation materials
- Define success criteria

**Execution:**
- Present requirements
- Facilitate discussion
- Collect feedback
- Document issues

**Follow-up:**
- Address issues raised
- Update requirements
- Re-validate if necessary
- Document approval

### 4. Common Validation Issues

**Issue Types:**
- **Misunderstanding**: Different interpretation of requirement
- **Missing Needs**: Requirements not captured
- **Unrealistic Expectations**: Not achievable within constraints
- **Conflicting Requirements**: Stakeholder disagreements
- **Technical Feasibility**: Not technically possible

**Resolution Approaches:**
- **Clarification**: Improve requirement wording
- **Negotiation**: Find compromise solutions
- **Alternative Solutions**: Propose different approaches
- **Constraint Adjustment**: Modify scope or constraints
- **Stakeholder Education**: Explain trade-offs

---

## Design Options Definition

Design options explore different ways to satisfy requirements, enabling selection of the optimal solution.

### 1. Design Option Characteristics

**Completeness:**
- Addresses all requirements
- Considers all constraints
- Includes necessary interfaces

**Feasibility:**
- Technically possible
- Economically viable
- Organizationally acceptable

**Acceptability:**
- Meets stakeholder needs
- Fits organizational culture
- Aligns with strategic goals

### 2. Design Option Types

**Functional Designs:**
- Business processes
- User workflows
- System functions
- Data flows

**Technical Designs:**
- System architecture
- Technology choices
- Integration approaches
- Infrastructure requirements

**User Interface Designs:**
- Screen layouts
- Navigation flows
- Interaction patterns
- Visual design elements

**Organizational Designs:**
- Team structures
- Process changes
- Role definitions
- Governance models

### 3. Design Option Evaluation

**Evaluation Criteria:**
- **Requirements Coverage**: How well requirements are satisfied
- **Cost**: Total cost of ownership
- **Risk**: Implementation and operational risks
- **Benefits**: Expected value delivery
- **Timeline**: Time to implement
- **Resources**: Required skills and effort

**Evaluation Methods:**
- **Scoring Models**: Weighted criteria scoring
- **Cost-Benefit Analysis**: Financial justification
- **Risk Assessment**: Risk probability and impact
- **Stakeholder Review**: Qualitative assessment
- **Proof of Concept**: Technical validation

### 4. Trade-off Analysis

**Common Trade-offs:**
- **Cost vs. Quality**: Higher quality often costs more
- **Speed vs. Completeness**: Faster delivery may mean less features
- **Flexibility vs. Performance**: Flexible systems may be slower
- **Security vs. Usability**: Strong security may reduce ease of use

**Trade-off Process:**
1. **Identify Conflicts**: Where trade-offs exist
2. **Quantify Options**: Measure each alternative
3. **Evaluate Impact**: Assess consequences
4. **Make Decisions**: Choose optimal balance
5. **Document Rationale**: Explain choices

### 5. Recommendation Development

**Recommendation Components:**
- **Executive Summary**: Key findings and recommendation
- **Option Analysis**: Comparison of alternatives
- **Justification**: Why recommended option is best
- **Implementation Plan**: How to implement
- **Risk Mitigation**: How to manage risks
- **Success Criteria**: How to measure success

**Presentation Format:**
- **Business Case**: Justify investment
- **Technical Specification**: Detail solution
- **User Stories**: Agile format for features
- **Process Flows**: Visualize operations
- **Prototypes**: Demonstrate solution

---

## Requirements Analysis Techniques

Different situations require different analysis approaches. Selecting appropriate techniques ensures effective analysis.

### 1. Functional Decomposition

**Purpose**: Break down complex functions into manageable components

**Process:**
1. **Identify Major Functions**: High-level capabilities
2. **Decompose Functions**: Break into sub-functions
3. **Identify Relationships**: How components interact
4. **Define Interfaces**: Between components
5. **Validate Coverage**: All requirements addressed

### 2. Interface Analysis

**Interface Types:**
- **User Interfaces**: Human-system interaction
- **System Interfaces**: System-to-system communication
- **Hardware Interfaces**: Physical connections
- **Software Interfaces**: Application programming interfaces

**Analysis Activities:**
- **Identify Interfaces**: All system boundaries
- **Define Protocols**: Communication rules
- **Specify Data Formats**: Exchange structures
- **Design Error Handling**: Exception processing

### 3. Non-Functional Requirements Analysis

**NFR Categories:**
- **Performance**: Response time, throughput, capacity
- **Security**: Authentication, authorization, privacy
- **Usability**: Ease of use, learnability
- **Reliability**: Availability, mean time between failures
- **Maintainability**: Ease of modification
- **Scalability**: Handle growth
- **Interoperability**: Work with other systems

**Analysis Process:**
1. **Identify NFRs**: From requirements and standards
2. **Specify Metrics**: How to measure compliance
3. **Define Test Methods**: How to verify
4. **Trade-off Analysis**: Balance conflicting NFRs

### 4. Data Analysis

**Data Modeling:**
- **Conceptual Model**: Business concepts
- **Logical Model**: Detailed structure
- **Physical Model**: Implementation details

**Data Analysis Activities:**
- **Entity Identification**: Key data objects
- **Relationship Definition**: How entities relate
- **Attribute Specification**: Entity characteristics
- **Constraint Definition**: Business rules
- **Volume Analysis**: Data quantities

### 5. Business Rule Analysis

**Rule Types:**
- **Structural Rules**: Data relationships
- **Operational Rules**: Process behavior
- **Constraint Rules**: Limitations and conditions
- **Derivation Rules**: Calculated values

**Analysis Process:**
1. **Identify Rules**: From requirements and experts
2. **Document Rules**: Clear, unambiguous language
3. **Test Logic**: Validate rule correctness
4. **Implement Rules**: Integration into solution

---

## Common Analysis Pitfalls

### Pitfall 1: Analysis Paralysis
**Problem**: Over-analyzing without making decisions
**Solution**: Timebox analysis, use "good enough" criteria

### Pitfall 2: Solution Jumping
**Problem**: Moving to solutions without analyzing requirements
**Solution**: Separate problem analysis from solution design

### Pitfall 3: Ignoring Non-Functional Requirements
**Problem**: Focusing only on functional requirements
**Solution**: Systematic NFR analysis and documentation

### Pitfall 4: Incomplete Trade-off Analysis
**Problem**: Not considering all options and impacts
**Solution**: Comprehensive evaluation with multiple criteria

### Pitfall 5: Lack of Stakeholder Validation
**Problem**: Analysis done in isolation from stakeholders
**Solution**: Regular stakeholder review and validation

### Pitfall 6: Poor Requirement Documentation
**Problem**: Requirements not clearly documented
**Solution**: Use standard templates and quality criteria

---

## Summary: Analysis Foundation for Success

Requirements Analysis and Design Definition transforms stakeholder needs into actionable solutions through systematic analysis, verification, validation, and design.

**Key Takeaways:**

1. **Structure Requirements**: Organize for clarity and traceability
2. **Verify Quality**: Ensure requirements are correct and complete
3. **Validate Correctness**: Confirm requirements meet stakeholder needs
4. **Explore Options**: Consider multiple solution approaches
5. **Apply Appropriate Techniques**: Match methods to context

**Success Indicators:**
- Clear, complete, and consistent requirements
- Stakeholder validation and approval
- Well-evaluated design options
- Comprehensive documentation
- Foundation for solution development

**Remember**: Analysis quality directly impacts solution quality. Invest time in thorough analysis—it pays dividends throughout the project.

---

**Up Next:** Section 22f covers Solution Evaluation—how to measure solution performance, assess limitations, and recommend improvements.