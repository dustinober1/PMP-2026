export function createSidebar() {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'PMP Exam Prep 2026', link: '/' }
      ]
    },
    {
      text: 'Chapter 1 - Introduction & Fundamentals',
      collapsed: false,
      items: [
        { text: 'Chapter Overview', link: '/guide/01-introduction/' },
        { text: '1.1 Understanding the New PMP Exam', link: '/guide/01-introduction/understanding-exam' },
        { text: '1.2 How To Use This Study Guide', link: '/guide/01-introduction/using-guide' },
        { text: '1.3 Ways of Working and Tailoring', link: '/guide/01-introduction/ways-of-working' },
        {
          text: '1.4 Core Project Management Concepts', link: '/guide/01-introduction/core-concepts', items: [
            { text: '1.4a Stakeholders', link: '/guide/01-introduction/core-stakeholders' },
            { text: '1.4b Triple Constraint', link: '/guide/01-introduction/core-triple-constraint' },
            { text: '1.4c Quality', link: '/guide/01-introduction/core-quality' },
            { text: '1.4d Risk', link: '/guide/01-introduction/core-risk' },
            { text: '1.4e Data & Metrics', link: '/guide/01-introduction/core-data' },
            { text: '1.4f Ethics', link: '/guide/01-introduction/core-ethics' }
          ]
        },
        { text: 'Knowledge Check', link: '/guide/01-introduction/knowledge-check' }
      ]
    },
    {
      text: 'Chapter 2 - Strategic Alignment',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/02-strategic/' },
        {
          text: '2.1 Strategy and Portfolio Alignment', link: '/guide/02-strategic/strategy-alignment', items: [
            { text: '2.1a Selection', link: '/guide/02-strategic/strategy-selection' },
            { text: '2.1b Portfolio', link: '/guide/02-strategic/portfolio-concepts' },
            { text: '2.1c Alignment', link: '/guide/02-strategic/project-alignment' },
            { text: '2.1d Benefits', link: '/guide/02-strategic/benefits-realization' },
            { text: '2.1f Environment', link: '/guide/02-strategic/external-environment' },
            { text: '2.1h PMO', link: '/guide/02-strategic/pmo-role' }
          ]
        },
        { text: '2.2 Benefits, Value, and Sustainability', link: '/guide/02-strategic/benefits-value' },
        { text: '2.3 Compliance, Risk, and Governance', link: '/guide/02-strategic/compliance-governance' },
        { text: '2.4 Organizational Change and Readiness', link: '/guide/02-strategic/organizational-change' },
        { text: '2.5 Program Management', link: '/guide/02-strategic/program-management' },
        { text: 'Knowledge Check', link: '/guide/02-strategic/knowledge-check' }
      ]
    },
    {
      text: 'Chapter 3 - Team Leadership',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/03-team-leadership/' },
        {
          text: '3.1 Building and Leading Teams', link: '/guide/03-team-leadership/building-teams', items: [
            { text: '3.1a Team Formation', link: '/guide/03-team-leadership/team-formation' },
            { text: '3.1b Development', link: '/guide/03-team-leadership/team-development' },
            { text: '3.1c Team Charter', link: '/guide/03-team-leadership/team-charter' },
            { text: '3.1d Virtual Teams', link: '/guide/03-team-leadership/virtual-teams' }
          ]
        },
        { text: '3.2 Coaching, Mentoring, and Servant Leadership', link: '/guide/03-team-leadership/coaching-mentoring' },
        { text: '3.3 Conflict Management', link: '/guide/03-team-leadership/conflict-management' },
        { text: '3.4 Motivation and Performance', link: '/guide/03-team-leadership/motivation-performance' },
        { text: 'Knowledge Check', link: '/guide/03-team-leadership/knowledge-check' }
      ]
    },
    {
      text: 'Chapter 4 - Stakeholder Engagement',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/04-stakeholder/' },
        {
          text: '4.1 Stakeholder Analysis', link: '/guide/04-stakeholder/stakeholder-analysis', items: [
            { text: '4.1a Mapping', link: '/guide/04-stakeholder/stakeholder-mapping' },
            { text: '4.1b Classification', link: '/guide/04-stakeholder/stakeholder-classification' }
          ]
        },
        { text: '4.2 Communication Planning', link: '/guide/04-stakeholder/communication-planning' },
        { text: '4.3 Active Engagement', link: '/guide/04-stakeholder/stakeholder-engagement' },
        { text: '4.4 Negotiation & Decision-Making', link: '/guide/04-stakeholder/conflict-negotiation' },
        { text: 'Knowledge Check', link: '/guide/04-stakeholder/knowledge-check' }
      ]
    },
    {
      text: 'Chapter 5 - Project Initiation',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/05-initiation/' },
        { text: '5.1 Business Case', link: '/guide/05-initiation/business-case' },
        { text: '5.2 Project Charter', link: '/guide/05-initiation/project-charter' },
        { text: '5.3 Constraints & Assumptions', link: '/guide/05-initiation/constraints-assumptions' },
        { text: '5.4 Delivery Strategy', link: '/guide/05-initiation/delivery-strategy' },
        { text: 'Knowledge Check', link: '/guide/05-initiation/knowledge-check' }
      ]
    },
    {
      text: 'Chapter 6 - Project Planning',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/06-project-planning/' },
        { text: '6.1 Scope Planning', link: '/guide/06-project-planning/scope-planning' },
        { text: '6.2 Schedule Planning', link: '/guide/06-project-planning/schedule-planning' },
        { text: '6.3 Cost Planning', link: '/guide/06-project-planning/cost-planning' },
        { text: '6.4 Quality Planning', link: '/guide/06-project-planning/quality-planning' },
        { text: '6.5 Risk Planning', link: '/guide/06-project-planning/risk-planning' },
        { text: '6.6 Resource & Procurement', link: '/guide/06-project-planning/resource-planning' },
        { text: '6.7 Communications', link: '/guide/06-project-planning/communications-planning' },
        { text: 'Knowledge Check', link: '/guide/06-project-planning/knowledge-check' }
      ]
    },
    {
      text: 'Chapter 7 - Risk, Quality & Complexity',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/07-risk-quality/' },
        { text: '7.1 Risk Management', link: '/guide/07-risk-quality/risk-management' },
        { text: '7.2 Quality Management', link: '/guide/07-risk-quality/quality-management' },
        { text: '7.3 Navigating Complexity', link: '/guide/07-risk-quality/navigating-complexity' },
        { text: '7.4 Tools & Templates', link: '/guide/07-risk-quality/toolkit' },
        { text: 'Knowledge Check', link: '/guide/07-risk-quality/knowledge-check' }
      ]
    },
    {
      text: 'Chapter 8 - Execution & Value Delivery',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/08-execution/' },
        { text: '8.1 Executing Project Work', link: '/guide/08-execution/executing-work' },
        { text: '8.2 Value Delivery and Outcomes', link: '/guide/08-execution/value-delivery' },
        { text: '8.3 Tools & Templates', link: '/guide/08-execution/toolkit' },
        { text: 'Knowledge Check', link: '/guide/08-execution/knowledge-check' }
      ]
    },
    {
      text: 'Chapter 9 - Monitoring & Closing',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/09-monitoring/' },
        { text: '9.1 Monitoring & Controlling', link: '/guide/09-monitoring/monitoring-closing' },
        { text: '9.2 Project Closure', link: '/guide/09-monitoring/project-closure' },
        { text: '9.3 Tools & Templates', link: '/guide/09-monitoring/toolkit' },
        { text: 'Knowledge Check', link: '/guide/09-monitoring/knowledge-check' }
      ]
    },
    {
      text: 'Chapter 10 - AI & Project Management',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/10-ai-pm/' },
        { text: '10.1 AI Essentials', link: '/guide/10-ai-pm/ai-essentials' },
        { text: '10.2 Responsible AI', link: '/guide/10-ai-pm/responsible-ai' },
        { text: '10.3 AI in the Lifecycle', link: '/guide/10-ai-pm/ai-lifecycle' },
        { text: '10.4 Tools & Templates', link: '/guide/10-ai-pm/toolkit' },
        { text: 'Knowledge Check', link: '/guide/10-ai-pm/knowledge-check' }
      ]
    },
    {
      text: 'Chapter 11 - Exam Preparation',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/11-exam-prep/' },
        { text: '11.1 Exam Strategy', link: '/guide/11-exam-prep/exam-strategy' }
      ]
    },
    {
      text: 'Appendices',
      collapsed: true,
      items: [
        { text: 'Appendix Overview', link: '/guide/appendices/' },
        { text: '2026 ECO Task Map', link: '/guide/appendices/eco-2026-task-map' },
        { text: 'Formula Mastery', link: '/guide/appendices/formulas-definitions' },
        { text: 'Tools & Artifacts', link: '/guide/appendices/tools-artifacts' }
      ]
    }
  ]
}
