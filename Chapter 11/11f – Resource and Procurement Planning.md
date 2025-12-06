# 11f – Resource and Procurement Planning

## Learning Objectives

By the end of this section, you will be able to:

1. Develop a comprehensive resource plan identifying staffing needs and skill requirements
2. Conduct a make-or-buy analysis to determine what work should be done internally vs. outsourced
3. Plan procurement strategy including contract types and vendor selection criteria
4. Identify key vendors and establish procurement timelines
5. Understand how different contract types allocate risk and incentivize performance
6. Plan for resource conflicts and develop mitigation strategies across projects
7. Apply procurement planning across predictive, agile, and hybrid contexts

---

## Introduction: Resource and Procurement Planning

Projects require two types of resources: **people** (internal team members) and **external support** (vendors, contractors, consultants, suppliers). This section covers how to plan for both.

Resource planning determines **who** will do the work and **when** they'll be available. Procurement planning determines **what** work will be sourced externally and **how** vendors will be selected, contracted, and managed.

Together, resource and procurement planning create the foundation for successful project execution. Poor planning in this area leads to:
- Resource conflicts and bottlenecks during execution
- Unexpected vendor costs and schedule delays
- Inadequate skills on the team
- Misaligned expectations with external partners

Sarah's three projects illustrate the full spectrum of resource and procurement challenges:

**Office Renovation (Predictive)**: Resource planning involves coordinating a large number of external contractors (general contractor, electricians, plumbers, HVAC specialists, furniture vendors) with internal facilities staff. Procurement is critical—long lead times for custom materials and equipment require planning months in advance.

**Expense System (Agile)**: Resource planning focuses on a small, dedicated cross-functional team. Procurement involves selecting cloud infrastructure providers and third-party APIs. Flexibility is key—the team may discover new vendor needs during execution.

**Transformation Program (Hybrid)**: Resource planning coordinates multiple teams across the organization, managing shared resources and resolving allocation conflicts. Procurement spans system integrators, training vendors, and change management consultants across different geographies.

---

## Part 1: Resource Planning

Resource planning determines what people and competencies the project needs, when they're needed, and how they'll be allocated and developed.

### Understanding Your Resource Needs

The first step is understanding what resources the project requires. This comes from the Work Breakdown Structure (WBS) and project scope.

**For each major work package, ask:**
- What skills are required?
- How many people (in full-time equivalents)?
- When are they needed (start and end dates)?
- For how long?
- Is this skill available internally, or must it be sourced externally?
- What's the cost per resource?

**Example – Expense System**: Sarah's project requires:
- 1 Product Owner (full-time for 6 months): Internal - $250K for the period
- 4 Developers (full-time for 6 months): External - T&M contract at $175/hour
- 1 QA Engineer (full-time for 6 months): Internal - $180K for the period
- 1 Designer (part-time for first 3 months): Internal - $90K for the period
- Cloud Infrastructure Support: External vendor (ongoing monthly cost)

### Resource Availability and Conflicts

In most organizations, skilled people are shared across multiple projects. Resource planning must account for:
- **Availability**: When is the person available? Are they committed to other projects?
- **Allocation**: Can the person work full-time on this project, or is their time split?
- **Conflicts**: What happens when two projects need the same person at the same time?

**Example – Transformation Program**: Sarah's program has 3 workstreams executing in parallel. The lead architect is critical to all three, but she can only work full-time on one. Sarah's options:
1. **Sequential approach**: Start workstreams sequentially so the architect can lead each one (extends timeline)
2. **Delegated approach**: Develop a junior architect to lead some workstreams under the senior architect's guidance (requires mentoring time, builds capability)
3. **External approach**: Contract with external architecture firm for some workstreams (increases cost)
4. **Hybrid approach**: Senior architect leads critical decisions and design reviews; junior architect handles implementation details

Sarah chooses the hybrid approach, which requires explicit planning for when the senior architect's time will be needed (design phases) vs. when implementation can proceed with delegation.

### Skills Assessment and Development

Resource planning should include how team members will develop skills. This might include:
- **Cross-training**: Junior developers working with senior developers to learn
- **External training**: Formal courses or certifications
- **Mentoring**: Pairing less experienced team members with experienced ones
- **External expertise**: Bringing in consultants to teach best practices

**Example – Office Renovation**: Sarah recognizes that her project coordinator has limited experience with complex vendor management. She plans for:
- Weekly mentoring sessions with the project management office
- Shadowing on vendor negotiations
- Training on contract administration
- Gradually increasing autonomy on vendor decisions

This investment in development means the coordinator will be even more capable on future projects.

### Functional Manager Coordination

In matrix organizations, functional managers control resource allocation. Resource planning requires negotiating with functional managers:
- **Negotiation**: "I need Alice (a strong developer) for 5 months starting in March. Can you commit her?"
- **Trade-offs**: If the functional manager can't commit Alice, what alternative does the project accept?
- **Performance management**: Even though you may not have direct authority over Alice, you provide feedback to her functional manager about her performance on the project

**Example – Transformation Program**: Sarah needs a change management specialist who reports to the HR director, not to Sarah. She must negotiate with the HR director:
- What's the specialist's timeline and availability?
- What are the expectations for the specialist's role?
- How will performance be evaluated?
- If the specialist isn't meeting project needs, how will that feedback be handled?

Good planning here prevents mid-project surprises where the specialist's HR priorities override project needs.

### Resource Leveling

When projects have more work than resources can handle, resource leveling techniques adjust the schedule to smooth resource demand:

**Example – Office Renovation**: Sarah's schedule shows that weeks 8-10 require 35 people on-site simultaneously (general contractor crew, electricians, HVAC, plumbers, inspectors). But the job site has limited space—safely only 20 people can work at a time.

Sarah uses resource leveling to:
1. Identify tasks that can be delayed without impacting the critical path
2. Shift non-critical tasks to weeks with lighter resource loads
3. Result: A schedule that peaks at 20 people, staying within site constraints

---

## Part 2: Make-or-Buy Analysis

Once you understand resource needs, the critical decision is: **What should the organization do internally, and what should be sourced externally?**

This is the make-or-buy decision, and it has profound implications for cost, schedule, risk, and capability.

### Decision Criteria

A make-or-buy analysis considers multiple factors:

**1. Cost**
- **Make**: Full cost = Internal labor + overhead + equipment + training
- **Buy**: Contract cost = Vendor fee (fixed, hourly, or reimbursable)
- **Break-even analysis**: At what volume does it make sense to build internal capability vs. outsourcing?

**Example – Transformation Program**: Sarah is implementing a new HR system. Should she build a custom system internally or buy a commercial HRMS (Human Resource Management System)?
- **Make**: Hire 5 developers, architect, database admin ($1.5M over 18 months) + ongoing maintenance
- **Buy**: License commercial HRMS ($200K setup + $50K/year) + integration and customization ($300K one-time)
- **Analysis**: Even though buying has higher initial cost, make requires ongoing development maintenance. If the team stops improving the system, technical debt grows. Buy provides ongoing vendor support and upgrades.

**2. Schedule Impact**
- **Make**: Longer timeline while building
- **Buy**: Faster time-to-market (assuming the vendor product is close to your needs)

**Example – Expense System**: Building a mobile app might take 4 months. Buying a white-label expense app and customizing it takes 6 weeks. The speed-to-market advantage often outweighs the cost premium of buying.

**3. Core Competency**
- **Make**: If this is something the organization must be excellent at to compete
- **Buy**: If this is a commodity or supporting function

**Example – Office Renovation**: The organization is a services company, not a construction company. Construction and facility management are supporting functions. Buy (contract with general contractor) makes sense. If the organization were a real estate developer, construction might be a core competency worth building internally.

**4. Risk**
- **Make**: Risk that internal team doesn't have needed expertise or capacity
- **Buy**: Risk that vendor doesn't meet expectations or disappears

**Example – Transformation Program**: Implementing organizational change management is critical. Does the organization have internal change management expertise? If not, buying external change management expertise reduces risk. If yes, using internal expertise (make) builds organizational capability.

**5. Capacity and Availability**
- **Make**: Do you have the people available? Is this the best use of their time?
- **Buy**: Is the vendor available when you need them?

**Example – Transformation Program**: The program needs architects for system design. The organization has architects, but they're fully allocated to other projects. Buy (contract with external architecture firm) is the right choice because internal architects aren't available.

### Make-or-Buy Decision Matrix

For complex programs, document make-or-buy decisions in a matrix:

| Work Package | Option | Cost | Timeline | Risk | Recommendation |
|---|---|---|---|---|---|
| System Design | Make (internal) | $400K | 8 weeks | Medium - need expertise | Buy (external) |
| System Design | Buy (external) | $300K | 6 weeks | Low - vendor has track record | ✅ **BUY** |
| Database Migration | Make (internal) | $200K | 4 weeks | Low - straightforward | ✅ **MAKE** |
| Database Migration | Buy (external) | $400K | 3 weeks | Medium - vendor dependency | Make (internal) |
| Training | Make (internal) | $150K | 6 weeks | High - no internal expertise | Buy (external) |
| Training | Buy (external) | $200K | 4 weeks | Low - vendor specializes | ✅ **BUY** |

This document is reviewed with stakeholders and kept as a project artifact, because make-or-buy decisions are change requests—if the original decision was to buy and you now want to make, that's a scope change.

---

## Part 3: Procurement Planning and Strategy

Once make-or-buy decisions are made, procurement planning determines **how** you'll acquire external resources.

### Identifying Procurement Needs

Document each procurement need:
- **What**: Describe the deliverable, service, or capacity being procured
- **Scope**: Define exactly what's included (scope statement or statement of work)
- **Timing**: When do you need it? For how long?
- **Performance metrics**: How will you measure success?
- **Constraints**: Budget, technical standards, regulatory requirements

**Example – Office Renovation**:

| Procurement | What | Scope | Timing | Metrics | Constraints |
|---|---|---|---|---|---|
| General Contractor | Complete renovation per architectural plans | All construction, labor, minor materials (owner provides finishes) | 9 months | On-time completion, zero safety violations, quality per building code | Fixed price $180K, must be bonded |
| HVAC System | Install heating/cooling system | Equipment + installation + testing | Weeks 4-8 | System efficiency rating per spec, completion by Week 8 | Must be approved brand |
| Furniture Vendor | Supply office furniture | 50 desks, 100 chairs, conference room furniture | Delivery by Month 9 | Functionality, color/style per spec | Budget $40K, lead time constraints |

### Procurement Planning Across Delivery Approaches

Procurement strategy differs significantly across predictive, agile, and hybrid projects:

**Predictive Approach**:
- Detailed procurement planning upfront
- Fixed-price contracts to align incentives with detailed scope
- Long lead-time items identified and ordered early
- Change orders for scope changes

**Example – Office Renovation**: All vendor contracts are fixed-price because scope is detailed and stable. Custom furniture requires 10-week lead time, so it's ordered in Month 2 even though delivery is in Month 9.

**Agile Approach**:
- Procurement planning is iterative
- Lighter, more flexible contracts (Time & Materials or Cost-Plus)
- Vendors are partners who adapt as requirements evolve
- Frequent communication and adjustment

**Example – Expense System**: The team doesn't know exactly what cloud infrastructure is needed until they start building. They contract with a cloud provider on a pay-as-you-go basis, scaling up as needed. The development firm is contracted on T&M basis so they can be flexible as requirements evolve.

**Hybrid Approach**:
- Program-level procurement planning (similar to predictive)
- Team-level flexibility within program constraints
- Mix of fixed-price (for stable elements) and flexible contracts (for uncertain elements)

**Example – Transformation Program**: Core platform components are procured with fixed-price contracts (they're stable). Regional implementation services are procured on a T&M basis (regional needs are less certain).

---

## Part 4: Contract Types and Risk Allocation

The type of contract fundamentally shapes how risk is shared between the project and the vendor.

### Fixed-Price (FP) Contracts

**Definition**: Vendor agrees to deliver specified work for a fixed total price.

**Risk allocation**: Vendor bears cost risk. If the work costs more than expected, the vendor absorbs losses.

**When to use**:
- Scope is well-defined and stable
- You want cost certainty
- You have experience with similar work (realistic estimates)

**Example – Office Renovation**: General contractor is contracted on a fixed-price basis ($180K). If materials cost more, the contractor absorbs the cost. If labor takes longer, the contractor absorbs the cost. Sarah pays $180K regardless.

**Advantages**:
- Cost certainty for the project
- Vendor incentive to control costs and be efficient
- Clear accountability

**Disadvantages**:
- Vendors may bid high to cover risk
- Changes require change orders and cost impact analysis
- Scope must be crystal clear (ambiguity leads to disputes)

**Project manager's role**:
- Ensure scope is crystal clear before contracting
- Carefully document what's included and what's not
- Monitor that vendor is delivering to scope
- Manage scope changes through formal change control

### Cost-Reimbursable (CR) Contracts

**Definition**: Project pays vendor's actual costs plus a fee (profit).

**Common variations**:
- **Cost Plus Fixed Fee (CPFF)**: Costs + fixed dollar amount fee
- **Cost Plus Incentive Fee (CPIF)**: Costs + fee that varies based on performance targets
- **Cost Plus Award Fee (CPAF)**: Costs + fee based on subjective performance evaluation

**Risk allocation**: Project bears cost risk.

**When to use**:
- Scope is uncertain or evolving
- You need vendor flexibility
- Vendor expertise is critical to defining scope

**Example – Transformation Program**: Change management consulting on CPFF basis. The consulting firm bills actual time ($150/hour) plus a 10% fixed fee. If the scope evolves or more work is needed, the project pays for it. The vendor has little incentive to minimize costs (more hours = more revenue).

**Advantages**:
- Flexibility for scope changes
- Vendor focus on quality rather than cost-cutting
- Appropriate for uncertain scope

**Disadvantages**:
- No cost certainty
- Vendor has weak incentive to control costs
- Project must actively monitor spending

**Project manager's role**:
- Track costs closely
- Verify that work is valuable and necessary
- Challenge cost growth
- Maintain control of scope even though the contract is flexible

### Time-and-Materials (T&M) Contracts

**Definition**: Project pays for time (labor at specified rates) and materials (at cost or with markup).

**Risk allocation**: Shared. Project pays for actual time/materials but rates are fixed.

**When to use**:
- Scope is uncertain but you want more cost control than full CR
- Vendors will perform work as needed
- Billing is based on effort, not deliverables

**Example – Expense System**: Software development firm contracted at $175/hour for developers, $225/hour for architects. Materials (cloud, APIs) at cost + 10%. Project pays for actual hours billed.

**Advantages**:
- Flexibility for changing scope
- More cost control than CR (rates are fixed)
- Appropriate for uncertain work

**Disadvantages**:
- No project budget certainty
- Vendor incentive is more hours, not efficiency
- Requires rigorous time tracking

**Project manager's role**:
- Verify billed hours align with work performed
- Challenge excessive hours
- Ensure right skill level is being billed

---

## Part 5: Vendor Selection and Contracting Process

### Vendor Selection Criteria

Different projects weight criteria differently. Establish criteria before evaluating vendors:

**Common criteria**:
- **Price**: Cost-competitiveness
- **Experience**: Vendor track record with similar work
- **Technical capability**: Does the vendor have the skills needed?
- **References**: What do past clients say?
- **Timeline**: Can the vendor meet your schedule?
- **Responsiveness**: Does the vendor communicate clearly?
- **Financial stability**: Will the vendor still exist when we need them?
- **Cultural fit**: Do they work like we do?

**Example – Office Renovation**: Sarah's selection criteria for the general contractor:
1. Licensed and bonded ✅ (required)
2. Local experience with similar commercial projects ✅
3. References from 3+ recent projects (checked)
4. Price within 10% of engineer's estimate (evaluated)
5. Availability to start by Month 2 (confirmed)

She doesn't necessarily pick the lowest bidder—she picks the vendor that best matches her criteria at a fair price.

### RFP/RFQ Process

For significant procurements, use a formal process:

**Request for Proposal (RFP)**: Detailed request asking vendors to propose how they'd solve the problem
- Best when you have clear requirements but want vendor input on approach

**Request for Quote (RFQ)**: Request asking vendors to price specified work
- Best when you know exactly what you need

**Informal process**: Direct negotiation
- For small procurements or when you have a preferred vendor

**Example – Transformation Program**:
- **RFP for system integrator**: "Here's what we're trying to achieve. Propose your approach, timeline, and cost."
- **RFQ for training vendor**: "We need training for 500 people on this new system. Here's the content. Quote your price per person."

### Contract Development

Once a vendor is selected, develop the contract specifying:
- **Scope**: What exactly will the vendor deliver?
- **Payment terms**: How much, when, and under what conditions?
- **Timeline**: Start and end dates, milestones
- **Responsibilities**: What does each party provide?
- **Quality standards**: How is quality measured and enforced?
- **Change process**: How are scope changes handled?
- **Termination**: Under what conditions can the contract be terminated?
- **Dispute resolution**: How are disagreements resolved?
- **Legal/insurance**: Insurance requirements, liability limits

---

## Part 6: Procurement Planning in Practice

### Resource Plan Template

A resource plan typically includes:

1. **Resource summary**: Total number of people, skill levels, timing
2. **Detailed resource assignments**: Who's assigned to what work packages, when?
3. **Resource availability constraints**: When are people available?
4. **Resource leveling adjustments**: How schedule was adjusted to fit resource constraints
5. **Make-or-buy decisions**: What's being done internally vs. externally
6. **Risk mitigation**: How resource bottlenecks are being addressed

### Procurement Plan Template

A procurement plan typically includes:

1. **Procurement strategy**: Overall approach (competitive bidding, preferred vendor, etc.)
2. **Procurement schedule**: When RFP/RFQ is issued, when selection happens, when contracts start
3. **Procurement items**: What's being procured, why, estimated cost, timing
4. **Vendor selection criteria**: How vendors will be evaluated
5. **Contract types**: What type of contract for each procurement (FP, CR, T&M)
6. **Payment terms**: How vendors are paid
7. **Vendor management approach**: How you'll monitor and manage vendor performance

### Integration with Other Plans

Resource and procurement planning must integrate with:
- **Schedule**: Resource availability affects when work can be scheduled
- **Budget**: Resource costs affect project budget
- **Risk plan**: Resource gaps and vendor risks are identified
- **Quality plan**: Key personnel and vendor capabilities support quality

---

## Common Pitfalls in Resource and Procurement Planning

1. **Assuming resources are always available**: Don't assume people can work on your project. Negotiate with functional managers.

2. **Underestimating lead times**: Vendors often have longer lead times than expected. Plan procurement early.

3. **Choosing only on price**: Cheapest vendor isn't always best. Evaluate total cost of ownership including quality, support, and schedule risk.

4. **Poor scope definition**: Leads to disputes with vendors. Spend time defining scope clearly before contracting.

5. **Inadequate contract detail**: Ambiguous contracts lead to disagreements. Be specific about deliverables, timelines, and quality standards.

6. **Ignoring resource conflicts**: Plan for shared resources early, not after conflicts arise.

7. **Skipping make-or-buy analysis**: Defaulting to "always make" or "always buy" without analyzing trade-offs.

---

## Procurement Planning Across the Three Projects

**Office Renovation (Predictive)**:
- General contractor selected through competitive bidding
- Fixed-price contracts for all major vendors (scope is stable)
- 6-month procurement lead time for custom furniture
- Detailed specifications for all materials and finishes
- Monthly vendor performance reviews

**Expense System (Agile)**:
- Cloud provider selected based on flexibility and scalability
- T&M contract with development firm (scope evolves)
- No long procurement lead times (cloud services available on-demand)
- Lightweight vendor contracts with flexibility clauses
- Weekly vendor check-ins during sprints

**Transformation Program (Hybrid)**:
- Separate procurement for system integrator (fixed-price, stable requirements)
- Separate procurement for regional implementation (T&M, flexible)
- Multiple training vendors selected through RFP process
- Contract structure balances program-level control with team-level flexibility
- Quarterly vendor performance reviews across all workstreams

---

## Key Takeaways

- **Resource planning** ensures you have the right people with the right skills at the right time
- **Make-or-buy analysis** determines what's done internally vs. externally based on cost, schedule, risk, and capability
- **Procurement strategy** defines how vendors are selected and contracted
- **Contract type** (Fixed-Price, Cost-Reimbursable, Time-and-Materials) fundamentally affects risk allocation
- **Vendor selection** should be based on multiple criteria, not just price
- **Integration** with schedule, budget, and risk plans ensures resource and procurement planning supports overall project success

The foundation for successful vendor relationships and resource utilization is laid during planning. Time spent on thorough resource and procurement planning prevents execution headaches and vendor conflicts.
