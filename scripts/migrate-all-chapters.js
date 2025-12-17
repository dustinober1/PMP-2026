#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Complete mapping of all chapters
const allChapterMappings = {
  'Chapter 03 - Team Leadership and Development': {
    dir: '03-team-leadership',
    files: [
      { src: '03.1 – Building and Leading Teams.md', dest: 'building-teams.md' },
      { src: '03.2 – Coaching, Mentoring, and Servant Leadership.md', dest: 'coaching-mentoring.md' }
    ]
  },
  'Chapter 04 - Stakeholder Engagement and Communication': {
    dir: '04-stakeholder',
    files: [
      { src: '04.1 – Stakeholder and Communication Mastery.md', dest: 'stakeholder-communication.md' },
      { src: '04.2 – Conflict, Negotiation, and Decision-Making.md', dest: 'conflict-negotiation.md' }
    ]
  },
  'Chapter 05 - Initiation and Requirements': {
    dir: '05-initiation',
    files: [
      { src: '05.1 – Starting the Project (Charter, Business Case, Roadmap).md', dest: 'starting-project.md' },
      { src: '05.2 – Business Analysis Fundamentals.md', dest: 'business-analysis.md' }
    ]
  },
  'Chapter 06 - Project Planning': {
    dir: '06-project-planning',
    files: [
      { src: '06.1 – Planning for Value Delivery (Scope, Schedule, Cost, Quality, Resources).md', dest: 'planning-value.md' }
    ]
  },
  'Chapter 07 - Risk, Quality, and Complexity': {
    dir: '07-risk-quality',
    files: [
      { src: '07.1 – Risk, Issues, and Change Management.md', dest: 'risk-management.md' },
      { src: '07.2 – Navigating Complexity in Projects.md', dest: 'navigating-complexity.md' }
    ]
  },
  'Chapter 08 - Execution and Value Delivery': {
    dir: '08-execution',
    files: [
      { src: '08.1 – Executing and Delivering Work (Coordination, Quality, Scope, Vendors, Team Performance).md', dest: 'executing-work.md' },
      { src: '08.2 – Value Delivery and Outcomes.md', dest: 'value-delivery.md' }
    ]
  },
  'Chapter 09 - Monitoring and Closing': {
    dir: '09-monitoring',
    files: [
      { src: '09.1 – Monitoring, Controlling, and Closing.md', dest: 'monitoring-closing.md' }
    ]
  }
}

// Function to add frontmatter
function addFrontmatter(content, title) {
  if (content.startsWith('---')) return content
  return `---
title: ${title}
description: ${title}
---

` + content
}

// Function to update internal links
function updateLinks(content) {
  // Update markdown links to remove .md extensions
  content = content.replace(/\[([^\]]+)\]\([^)]+\.md\)/g, '[$1]($2)')

  // Update chapter internal links
  content = content.replace(/Chapter (\d+) - [^/]+/g, (match, num) => {
    const mapping = {
      '1': '01-introduction',
      '2': '02-strategic',
      '3': '03-team-leadership',
      '4': '04-stakeholder',
      '5': '05-initiation',
      '6': '06-project-planning',
      '7': '07-risk-quality',
      '8': '08-execution',
      '9': '09-monitoring',
      '10': '10-exam-prep'
    }
    return `/guide/${mapping[num]}/`
  })

  // Fix broken links
  content = content.replace(/\.\.\/Chapter%20[^)]+/g, '/guide/')
  content = content.replace(/Chapter%2098/g, '/guide')

  return content
}

// Create knowledge check content
function createKnowledgeCheck(chapterNum, chapterTitle, topics) {
  return `# Knowledge Check: ${chapterTitle}

Test your understanding of key concepts from Chapter ${chapterNum}.

<QuizComponent
  title="Chapter ${chapterNum} Knowledge Check"
  :questions="[
    ${topics.map(topic => `{
      text: '${topic.question}',
      options: [${topic.options.map(opt => `'${opt}'`).join(', ')}],
      correct: ${topic.correct},
      explanation: '${topic.explanation}',
      reference: 'Chapter ${chapterNum}'
    }`).join(',\n    ')}
  ]"
/>

## Additional Study Topics

${topics.map(t => `- ${t.topic}`).join('\n')}

---

<div class="study-tip">
  <strong>💡 Tip:</strong> Review any questions you missed and focus on understanding the underlying concepts rather than memorization.
</div>
`
}

// Quiz questions for each chapter
const quizQuestions = {
  3: {
    title: 'Team Leadership and Development',
    topics: [
      {
        topic: 'Servant Leadership',
        question: 'What is the primary focus of servant leadership in agile project management?',
        options: ['Directing team members', 'Removing impediments and enabling team success', 'Making all decisions for the team', 'Controlling project scope'],
        correct: 1,
        explanation: 'Servant leadership focuses on removing obstacles and enabling the team to succeed rather than directing or controlling them.'
      },
      {
        topic: 'Team Development',
        question: 'Which of Tuckman\'s stages of team development is characterized by conflict and competition?',
        options: ['Forming', 'Storming', 'Norming', 'Performing'],
        correct: 1,
        explanation: 'The Storming stage is where team members begin to compete for status and positions, leading to conflicts.'
      },
      {
        topic: 'Emotional Intelligence',
        question: 'What is the most important emotional intelligence skill for project managers?',
        options: ['Technical expertise', 'Self-awareness and empathy', 'Documentation skills', 'Risk management'],
        correct: 1,
        explanation: 'Self-awareness and empathy are crucial for understanding and managing team dynamics and stakeholder relationships.'
      }
    ]
  },
  4: {
    title: 'Stakeholder Engagement and Communication',
    topics: [
      {
        topic: 'Stakeholder Analysis',
        question: 'Which stakeholder analysis technique assesses stakeholders based on power and interest?',
        options: ['SWOT analysis', 'Power/Interest grid', 'Force field analysis', 'Variance analysis'],
        correct: 1,
        explanation: 'The Power/Interest grid classifies stakeholders based on their level of power and interest in the project.'
      },
      {
        topic: 'Communication Methods',
        question: 'What type of communication is most effective for resolving complex stakeholder conflicts?',
        options: ['Email correspondence', 'Interactive communication', 'Push communication', 'Pull communication'],
        correct: 1,
        explanation: 'Interactive communication (meetings, discussions) is most effective for complex issues requiring dialogue and clarification.'
      }
    ]
  },
  5: {
    title: 'Initiation and Requirements',
    topics: [
      {
        topic: 'Business Case',
        question: 'What is the primary purpose of a business case?',
        options: ['To define project scope', 'To justify the investment and document expected benefits', 'To create project schedule', 'To assign team members'],
        correct: 1,
        explanation: 'The business case justifies why the project should be undertaken and documents expected benefits and costs.'
      },
      {
        topic: 'Project Charter',
        question: 'Which document formally authorizes the existence of a project?',
        options: ['Project plan', 'Project charter', 'Business case', 'Requirements document'],
        correct: 1,
        explanation: 'The project charter is the document that formally authorizes the project and provides the project manager with authority.'
      }
    ]
  },
  6: {
    title: 'Project Planning',
    topics: [
      {
        topic: 'Work Breakdown Structure',
        question: 'What is the lowest level of the Work Breakdown Structure called?',
        options: ['Work package', 'Deliverable', 'Milestone', 'Activity'],
        correct: 0,
        explanation: 'The work package is the lowest level of the WBS where cost and duration can be reliably estimated.'
      },
      {
        topic: 'Critical Path',
        question: 'What does the critical path represent in a project schedule?',
        options: ['The longest path through the project', 'The shortest path through the project', 'The most expensive path', 'The path with most resources'],
        correct: 0,
        explanation: 'The critical path is the longest path through the project network diagram that determines the project duration.'
      }
    ]
  },
  7: {
    title: 'Risk, Quality, and Complexity',
    topics: [
      {
        topic: 'Risk Management',
        question: 'What is the difference between a risk and an issue?',
        options: ['Risks are certain, issues are uncertain', 'Risks are future events, issues have occurred', 'Risks are negative, issues are positive', 'There is no difference'],
        correct: 1,
        explanation: 'Risks are uncertain future events that may impact the project, while issues are risks that have already occurred.'
      },
      {
        topic: 'Quality Management',
        question: 'What does quality assurance focus on?',
        options: ['Inspecting final deliverables', 'Improving processes to prevent defects', 'Testing products', 'Documenting errors'],
        correct: 1,
        explanation: 'Quality assurance focuses on improving processes to prevent defects rather than finding defects after they occur.'
      }
    ]
  },
  8: {
    title: 'Execution and Value Delivery',
    topics: [
      {
        topic: 'Change Management',
        question: 'What is the first step in managing a change request?',
        options: ['Implement the change', 'Evaluate the change impact', 'Reject the change', 'Document the change'],
        correct: 1,
        explanation: 'The first step is always to evaluate the impact of the change on scope, schedule, cost, and quality.'
      }
    ]
  },
  9: {
    title: 'Monitoring and Closing',
    topics: [
      {
        topic: 'Earned Value Management',
        question: 'What does a CPI of 0.8 indicate?',
        options: ['The project is under budget', 'The project is over budget', 'The project is ahead of schedule', 'The project is behind schedule'],
        correct: 1,
        explanation: 'A Cost Performance Index (CPI) of 0.8 means the project is getting only 80 cents of value for every dollar spent (over budget).'
      },
      {
        topic: 'Project Closing',
        question: 'What is the most important output of project closing?',
        options: ['Final report', 'Lessons learned', 'Closed contract', 'Formal acceptance'],
        correct: 3,
        explanation: 'Formal acceptance of deliverables by the customer is the most critical output that validates project completion.'
      }
    ]
  }
}

// Migrate all chapters
let totalMigrated = 0
Object.entries(allChapterMappings).forEach(([chapterDir, config]) => {
  const chapterNum = config.dir.split('-')[0]
  const chapterTitle = chapterDir.replace(`Chapter ${chapterNum} - `, '')

  console.log(`\n=== ${chapterDir} ===`)

  // Create index page
  const indexPath = path.join(__dirname, '..', 'guide', config.dir, 'index.md')
  if (!fs.existsSync(path.dirname(indexPath))) {
    fs.mkdirSync(path.dirname(indexPath), { recursive: true })
  }

  fs.writeFileSync(indexPath, `# ${chapterTitle}

Complete chapter content will be available here.

## Sections

${config.files.map(f => {
  const sectionName = f.dest.replace('.md', '').replace(/-/g, ' ')
  return `- [${sectionName}](./${f.dest})`
}).join('\n')}

- [Knowledge Check](./knowledge-check.md)
`)

  // Migrate files
  config.files.forEach(file => {
    const sourcePath = path.join(__dirname, '..', chapterDir, file.src)
    const destPath = path.join(__dirname, '..', 'guide', config.dir, file.dest)

    if (fs.existsSync(sourcePath)) {
      let content = fs.readFileSync(sourcePath, 'utf8')
      const title = content.split('\n')[0].replace(/^#+\s*/, '')

      content = addFrontmatter(content, title)
      content = updateLinks(content)

      fs.writeFileSync(destPath, content)
      console.log(`  ✓ Migrated: ${file.src}`)
      totalMigrated++
    } else {
      console.log(`  ⚠ File not found: ${file.src}`)
    }
  })

  // Create knowledge check
  if (quizQuestions[chapterNum]) {
    const kcPath = path.join(__dirname, '..', 'guide', config.dir, 'knowledge-check.md')
    const kcContent = createKnowledgeCheck(
      chapterNum,
      quizQuestions[chapterNum].title,
      quizQuestions[chapterNum].topics
    )
    fs.writeFileSync(kcPath, kcContent)
    console.log(`  ✓ Created knowledge check`)
  }
})

console.log(`\n✅ Migration complete! ${totalMigrated} files migrated.`)