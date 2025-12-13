# PMP Concept Map

## Overview

This concept map shows how major project management concepts relate to each other across the three exam domains. Use this visual guide to understand the interconnected nature of project management knowledge and see how concepts from different domains work together in practice.

The PMP exam is structured around three domains with specific weightings:
- **People Domain (33%)**: Leadership, team management, stakeholder engagement
- **Process Domain (41%)**: Planning, execution, monitoring, control, closure
- **Business Environment Domain (26%)**: Strategy, compliance, organizational change

> Note: Chapter-reference links in this concept map are being updated to match this repository’s chapter structure. For v1, broken chapter links have been removed; references remain as text.


## High-Level Domain Relationships

The following diagram illustrates the major concepts within each domain and shows how they connect across domain boundaries:

```mermaid
graph TB
    subgraph "People Domain (33%)"
        A[Leadership & Servant Leadership]
        B[Team Development & Management]
        C[Stakeholder Engagement]
        D[Communication Planning]
        E[Conflict Resolution]
        F[Coaching & Mentoring]
    end
    
    subgraph "Process Domain (41%)"
        G[Project Charter & Initiation]
        H[Planning & Scope Management]
        I[Schedule & Cost Management]
        J[Risk Management]
        K[Quality Management]
        L[Execution & Monitoring]
        M[Change Control]
        N[Project Closure]
    end
    
    subgraph "Business Environment Domain (26%)"
        O[Strategy Alignment]
        P[Benefits Realization]
        Q[Compliance & Governance]
        R[Organizational Change]
        S[Portfolio Management]
        T[Sustainability & ESG]
    end
    
    %% Cross-domain connections
    A --> G
    A --> L
    B --> L
    C --> H
    C --> O
    D --> M
    D --> R
    E --> L
    F --> B
    G --> O
    H --> P
    I --> P
    J --> Q
    K --> P
    L --> R
    M --> Q
    N --> P
    O --> G
    P --> K
    Q --> M
    R --> B
    R --> D
    S --> G
    S --> O
    T --> P
    T --> Q

    %% Styling
    classDef peopleClass fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef processClass fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef businessClass fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    
    class A,B,C,D,E,F peopleClass
    class G,H,I,J,K,L,M,N processClass
    class O,P,Q,R,S,T businessClass
```

### Key Cross-Domain Relationships

**Leadership → Process Integration**:
- Leadership drives project initiation and charter development
- Servant leadership principles guide execution and team coordination
- Leadership decisions impact change control and project closure

**Stakeholder Engagement → Strategy Alignment**:
- Stakeholder needs inform strategic project selection
- Engagement strategies must align with organizational objectives
- Stakeholder feedback drives benefits realization planning

**Communication → Change Management**:
- Effective communication is essential for organizational change
- Communication planning supports change control processes
- Transparent communication builds trust during transformations

**Risk Management → Compliance**:
- Risk identification includes regulatory and compliance risks
- Risk response strategies must consider governance requirements
- Risk monitoring supports ongoing compliance assurance

**Quality → Benefits Realization**:
- Quality standards directly impact delivered benefits
- Quality planning aligns with expected business outcomes
- Quality assurance validates benefit achievement

## Detailed Domain Concept Maps

### Process Domain (41%) - Detailed View

The Process domain encompasses the technical aspects of project management, from initiation through closure:

```mermaid
graph TD
    A[Project Charter] --> B[Stakeholder Register]
    A --> C[Assumptions Log]
    B --> D[Requirements Collection]
    C --> D
    D --> E[Scope Statement]
    E --> F[Work Breakdown Structure]
    F --> G[Activity Definition]
    F --> H[Cost Estimation]
    G --> I[Schedule Development]
    H --> J[Budget Baseline]
    I --> K[Critical Path Method]
    J --> L[Earned Value Management]
    K --> M[Schedule Baseline]
    L --> N[Performance Measurement]
    M --> N
    N --> O[Variance Analysis]
    O --> P[Change Requests]
    P --> Q[Change Control Board]
    Q --> R[Approved Changes]
    R --> S[Updated Baselines]
    S --> N
    
    %% Risk Management Branch
    E --> T[Risk Identification]
    T --> U[Risk Analysis]
    U --> V[Risk Response Planning]
    V --> W[Risk Register]
    W --> X[Risk Monitoring]
    X --> O
    
    %% Quality Management Branch
    E --> Y[Quality Planning]
    Y --> Z[Quality Assurance]
    Z --> AA[Quality Control]
    AA --> O
    
    %% Closure Branch
    N --> BB[Project Closure]
    BB --> CC[Lessons Learned]
    BB --> DD[Final Report]
    
    classDef processClass fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    class A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,BB,CC,DD processClass
```

### People Domain (33%) - Detailed View

The People domain focuses on leadership, team dynamics, and stakeholder management:

```mermaid
graph TD
    A[Servant Leadership] --> B[Team Formation]
    A --> C[Stakeholder Identification]
    B --> D[Team Development Stages]
    D --> E[Forming]
    D --> F[Storming]
    D --> G[Norming]
    D --> H[Performing]
    D --> I[Adjourning]
    
    C --> J[Power/Interest Grid]
    J --> K[Stakeholder Engagement Strategy]
    K --> L[Communication Planning]
    L --> M[Communication Methods]
    M --> N[Active Listening]
    M --> O[Feedback Mechanisms]
    
    A --> P[Coaching & Mentoring]
    P --> Q[Individual Development]
    P --> R[Performance Management]
    
    F --> S[Conflict Resolution]
    S --> T[Conflict Resolution Styles]
    T --> U[Collaborate]
    T --> V[Compromise]
    T --> W[Accommodate]
    T --> X[Compete]
    T --> Y[Avoid]
    
    H --> Z[High-Performing Teams]
    Z --> AA[Team Motivation]
    AA --> BB[Recognition & Rewards]
    AA --> CC[Empowerment]
    
    N --> DD[Emotional Intelligence]
    DD --> EE[Self-Awareness]
    DD --> FF[Social Awareness]
    DD --> GG[Relationship Management]
    
    classDef peopleClass fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    class A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,BB,CC,DD,EE,FF,GG peopleClass
```

### Business Environment Domain (26%) - Detailed View

The Business Environment domain addresses organizational context and strategic alignment:

```mermaid
graph TD
    A[Organizational Strategy] --> B[Portfolio Management]
    A --> C[Program Management]
    B --> D[Project Selection]
    C --> D
    D --> E[Business Case]
    E --> F[Benefits Identification]
    F --> G[Benefits Realization Plan]
    G --> H[Value Delivery]
    
    A --> I[Organizational Structure]
    I --> J[PMO Functions]
    I --> K[Governance Framework]
    K --> L[Compliance Requirements]
    L --> M[Regulatory Standards]
    L --> N[Industry Standards]
    
    H --> O[Benefits Measurement]
    O --> P[KPIs & Metrics]
    P --> Q[Performance Dashboards]
    
    A --> R[Organizational Change]
    R --> S[Change Readiness Assessment]
    S --> T[Change Management Strategy]
    T --> U[ADKAR Model]
    T --> V[Kotter's 8 Steps]
    U --> W[Change Implementation]
    V --> W
    W --> X[Adoption & Sustainment]
    
    K --> Y[Risk Governance]
    Y --> Z[Enterprise Risk Management]
    Z --> AA[Risk Appetite]
    AA --> BB[Risk Tolerance]
    
    H --> CC[Sustainability & ESG]
    CC --> DD[Environmental Impact]
    CC --> EE[Social Responsibility]
    CC --> FF[Governance Practices]
    
    M --> GG[Audit & Compliance]
    N --> GG
    GG --> HH[Compliance Monitoring]
    HH --> II[Corrective Actions]
    
    classDef businessClass fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    class A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,BB,CC,DD,EE,FF,GG,HH,II businessClass
```
## Concept-to-Chapter Mapping

This section provides direct links from each concept in the diagrams above to the relevant chapters where they are discussed in detail.

### People Domain Concepts

| Concept | Primary Chapter | Additional References |
|---------|----------------|----------------------|
| **Leadership & Servant Leadership** | Chapter 9: Coaching, Mentoring, and Servant Leadership | Chapter 6: Building and Leading Teams, Chapter 9b: Servant Leadership in Practice |
| **Team Development & Management** | Chapter 6: Building and Leading Teams | Chapter 6a: Team Composition and Development |
| **Stakeholder Engagement** | Chapter 7: Stakeholder and Communication Mastery | Chapter 5a: Stakeholders and Communication, Chapter 7a: Stakeholder Identification and Analysis |
| **Communication Planning** | Chapter 7c: Communication Planning and Strategy | Chapter 7d: Adapting Communication and Cultural Considerations |
| **Conflict Resolution** | Chapter 8: Conflict, Negotiation, and Decision-Making | Chapter 6d: Conflict Resolution and Problem-Solving, Chapter 8b: Conflict Resolution Styles and Approaches |
| **Coaching & Mentoring** | Chapter 9c: Coaching and Developing Others | Chapter 9d: Mentoring and Continuous Learning |
| **Emotional Intelligence** | Chapter 6: Building and Leading Teams | Chapter 9: Coaching, Mentoring, and Servant Leadership |

### Process Domain Concepts

| Concept | Primary Chapter | Additional References |
|---------|----------------|----------------------|
| **Project Charter & Initiation** | Chapter 10: Initiating and Planning | Chapter 10c: Developing the Project Charter |
| **Planning & Scope Management** | Chapter 11: Planning for Value Delivery | Chapter 11b: Scope Definition and Baseline |
| **Schedule & Cost Management** | Chapter 11c: Schedule Planning and Work Breakdown | Chapter 11d: Cost Estimation and Budgeting, Chapter 14b: Schedule and Cost Control |
| **Risk Management** | Chapter 12: Risk, Issues, and Change Management | Chapter 5d: Risk Management, Chapter 12a: Understanding Risk |
| **Quality Management** | Chapter 11e: Quality Planning and Acceptance Criteria | Chapter 5c: Quality, Chapter 13b: Quality Assurance and Testing |
| **Execution & Monitoring** | Chapter 13: Executing and Delivering Work | Chapter 14: Monitoring, Controlling, and Closing |
| **Change Control** | Chapter 12e: Change Management | Chapter 14c: Change Control and Configuration Management |
| **Project Closure** | Chapter 14e: Project Closure and Transition | Chapter 23d: The Closing Process Group |
| **Earned Value Management** | Chapter 14a: Tracking Progress and Performance | Chapter 14b: Schedule and Cost Control |

### Business Environment Domain Concepts

| Concept | Primary Chapter | Additional References |
|---------|----------------|----------------------|
| **Strategy Alignment** | Chapter 15: Strategy and Portfolio Alignment | Chapter 15a: Organizational Strategy and Project Selection |
| **Benefits Realization** | Chapter 16: Benefits, Value, and Sustainability | Chapter 15d: Benefits Realization and Value Creation, Chapter 16a: Benefits Realization Planning and Identification |
| **Compliance & Governance** | Chapter 17: Compliance, Risk, and Governance | Chapter 17d: Enterprise Risk and Governance Frameworks |
| **Organizational Change** | Chapter 18: Organizational Change and Readiness | Chapter 18b: Change Management Strategies and Frameworks |
| **Portfolio Management** | Chapter 15b: Portfolio Management Concepts | Chapter 24: Program Management |
| **Sustainability & ESG** | Chapter 16d: Sustainability and ESG in Project Context | Chapter 16: Benefits, Value, and Sustainability |
| **PMO Functions** | Chapter 15h: Project Management Offices | Chapter 15: Strategy and Portfolio Alignment |
| **Regulatory Standards** | Chapter 17a: Regulatory and Legal Compliance | Chapter 17b: Data Privacy and Information Security |

### Cross-Domain Integration Points

| Integration Area | Chapters | Key Concepts |
|------------------|----------|--------------|
| **Leadership in Process Management** | Chapter 6, Chapter 10, Chapter 13 | How servant leadership principles guide project initiation, planning, and execution |
| **Stakeholder-Driven Strategy** | Chapter 7, Chapter 15 | Stakeholder influence on strategic project selection and portfolio decisions |
| **Communication for Change** | Chapter 7, Chapter 18 | Communication strategies that support organizational transformation |
| **Risk and Compliance Integration** | Chapter 12, Chapter 17 | How project risk management aligns with enterprise governance |
| **Quality and Value Delivery** | Chapter 11e, Chapter 16 | Quality standards that ensure benefits realization |
## Delivery Approach Context Annotations

Different project management concepts apply differently depending on the delivery approach being used. This section shows how key concepts vary across predictive (waterfall), agile, and hybrid approaches.

### Legend
- 🔵 **Predictive**: Traditional waterfall approach with sequential phases
- 🟢 **Agile**: Iterative and incremental approach with frequent delivery
- 🟡 **Hybrid**: Combination of predictive and agile approaches
- ⚪ **Universal**: Applies to all delivery approaches

### Context-Specific Concept Applications

#### Planning and Scope Management
| Concept | Predictive 🔵 | Agile 🟢 | Hybrid 🟡 | Notes |
|---------|---------------|----------|-----------|-------|
| **Requirements Collection** | Comprehensive upfront analysis | Continuous refinement through user stories | Mix of upfront and iterative | Chapter 11a |
| **Scope Definition** | Detailed WBS with fixed scope | Product backlog with evolving scope | Core scope fixed, details iterative | Chapter 11b |
| **Schedule Planning** | Gantt charts, critical path | Sprint planning, velocity tracking | Roadmaps with sprint details | Chapter 11c |
| **Change Control** | Formal change control board | Continuous adaptation within sprints | Formal for core, flexible for details | Chapter 12e |

#### Team Management and Leadership
| Concept | Predictive 🔵 | Agile 🟢 | Hybrid 🟡 | Notes |
|---------|---------------|----------|-----------|-------|
| **Team Structure** | Hierarchical with defined roles | Self-organizing cross-functional teams | Mix of hierarchy and self-organization | Chapter 6a |
| **Leadership Style** | Directive project management | Servant leadership and coaching | Adaptive leadership based on context | Chapter 9b |
| **Decision Making** | PM-driven with stakeholder input | Team-driven with PM facilitation | Context-dependent decision authority | Chapter 8d |
| **Communication** | Formal reports and meetings | Daily standups and retrospectives | Mix of formal and informal channels | Chapter 7c |

#### Risk and Quality Management
| Concept | Predictive 🔵 | Agile 🟢 | Hybrid 🟡 | Notes |
|---------|---------------|----------|-----------|-------|
| **Risk Planning** | Comprehensive risk register upfront | Continuous risk identification | Core risks planned, others emergent | Chapter 12b |
| **Quality Assurance** | Phase gates and formal reviews | Definition of done and continuous testing | Mix of gates and continuous practices | Chapter 13b |
| **Testing Strategy** | End-phase testing cycles | Test-driven development | Risk-based testing approach | Chapter 11e |

#### Stakeholder Engagement
| Concept | Predictive 🔵 | Agile 🟢 | Hybrid 🟡 | Notes |
|---------|---------------|----------|-----------|-------|
| **Stakeholder Involvement** | Defined touchpoints and reviews | Continuous collaboration | High involvement in core, periodic in details | Chapter 7a |
| **Feedback Cycles** | Formal review and approval gates | Sprint reviews and retrospectives | Mix of formal and frequent feedback | Chapter 7b |
| **Requirements Validation** | Sign-off at phase completion | Acceptance criteria and demos | Progressive validation approach | Chapter 11a |

### Delivery Approach Selection Guidance

#### When to Use Predictive 🔵
- **Regulatory environments** with strict compliance requirements
- **Well-understood requirements** that are unlikely to change
- **Fixed scope and budget** constraints
- **Sequential dependencies** that require waterfall execution
- **Risk-averse organizations** preferring detailed upfront planning

*Example*: Office renovation project with building codes and fixed timeline

#### When to Use Agile 🟢
- **Uncertain or evolving requirements** that benefit from experimentation
- **Innovation projects** where learning and adaptation are key
- **Customer-facing products** requiring frequent feedback
- **Cross-functional teams** capable of self-organization
- **Organizations embracing change** and continuous improvement

*Example*: Software development with evolving user needs

#### When to Use Hybrid 🟡
- **Large, complex projects** with both stable and uncertain elements
- **Organizational constraints** requiring some traditional practices
- **Mixed stakeholder preferences** for different approaches
- **Phased delivery** where some phases suit predictive, others agile
- **Transition periods** moving from predictive to agile

*Example*: Digital transformation with infrastructure (predictive) and application development (agile)

### Context-Aware Concept Map

The following diagram shows how the same concepts apply differently across delivery approaches:

```mermaid
graph LR
    subgraph "Planning Concepts"
        A[Requirements] --> A1[🔵 Comprehensive Analysis]
        A --> A2[🟢 User Stories & Backlog]
        A --> A3[🟡 Core + Iterative Details]
        
        B[Scope Management] --> B1[🔵 Fixed WBS]
        B --> B2[🟢 Product Backlog]
        B --> B3[🟡 Roadmap + Sprints]
        
        C[Change Control] --> C1[🔵 Formal CCB]
        C --> C2[🟢 Sprint Adaptation]
        C --> C3[🟡 Tiered Control]
    end
    
    subgraph "Team Concepts"
        D[Leadership] --> D1[🔵 Directive PM]
        D --> D2[🟢 Servant Leader]
        D --> D3[🟡 Adaptive Style]
        
        E[Team Structure] --> E1[🔵 Hierarchical]
        E --> E2[🟢 Self-Organizing]
        E --> E3[🟡 Mixed Structure]
    end
    
    subgraph "Quality Concepts"
        F[Testing] --> F1[🔵 Phase Gates]
        F --> F2[🟢 Continuous TDD]
        F --> F3[🟡 Risk-Based Mix]
        
        G[Reviews] --> G1[🔵 Formal Approvals]
        G --> G2[🟢 Sprint Reviews]
        G --> G3[🟡 Progressive Validation]
    end
    
    classDef predictive fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef agile fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    classDef hybrid fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    
    class A1,B1,C1,D1,E1,F1,G1 predictive
    class A2,B2,C2,D2,E2,F2,G2 agile
    class A3,B3,C3,D3,E3,F3,G3 hybrid
```

## How to Use This Concept Map

### For Study Planning
1. **Start with the high-level domain diagram** to understand overall relationships
2. **Dive into detailed domain maps** for areas where you need deeper understanding
3. **Use the chapter mapping table** to find specific content for each concept
4. **Review delivery approach contexts** to understand how concepts vary by methodology

### For Exam Preparation
1. **Focus on cross-domain connections** - these are frequently tested
2. **Understand context variations** - exam questions often specify delivery approach
3. **Use concept relationships** to eliminate wrong answers
4. **Practice with scenarios** that span multiple domains

### For Practical Application
1. **Map your project context** to the appropriate delivery approach
2. **Identify relevant concepts** for your specific situation
3. **Follow concept dependencies** to ensure proper sequencing
4. **Adapt concepts** based on your organizational context

---

*This concept map is designed to complement the detailed chapter content. Use it as a navigation aid and relationship guide, but always refer to the specific chapters for comprehensive understanding of each concept.*