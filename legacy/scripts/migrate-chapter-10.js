#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Chapter 10 files - focus on exam preparation materials
const chapter10Files = [
  '10.1 – Exam Strategy and Test-Taking Skills.md',
  '10.2 – AI Essentials for Project Professionals.md',
  '10.3a – Practice Exam 1.md',
  '10.3c – Practice Exam 2.md',
  '10.3e – Practice Exam 3.md'
]

// Function to add frontmatter
function addFrontmatter(content, title) {
  if (content.startsWith('---')) return content
  return `---
title: ${title}
description: ${title}
---

` + content
}

// Function to convert practice exam to interactive quiz
function convertPracticeExam(content, examNum) {
  // Parse the exam content and convert to quiz format
  const questions = []
  const sections = content.split('\n\n')

  // Extract questions (simplified - would need more sophisticated parsing in production)
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i]
    if (section.match(/^\d+\./)) {
      const lines = section.split('\n')
      const questionText = lines[0]
      const options = []
      let correct = 0
      let explanation = ''

      // Parse options
      for (let j = 1; j < lines.length; j++) {
        const line = lines[j].trim()
        if (line.match(/^[A-D]\./)) {
          options.push(line.substring(3).trim())
          if (line.includes('(correct)') || line.includes('(Answer:')) {
            correct = options.length - 1
          }
        } else if (line.startsWith('Explanation:') || line.startsWith('Answer:')) {
          explanation = line
        }
      }

      if (options.length >= 2) {
        questions.push({
          text: questionText,
          options: options,
          correct: correct,
          explanation: explanation || 'Review the study materials for detailed explanation.',
          reference: `Practice Exam ${examNum}`
        })
      }
    }
  }

  return questions
}

// Create interactive practice exam
function createPracticeExam(examNum, content) {
  const questions = convertPracticeExam(content, examNum)

  return `# Practice Exam ${examNum}

Take this full-length practice exam to test your readiness for the PMP certification.

<QuizComponent
  title="PMP Practice Exam ${examNum}"
  :questions="${JSON.stringify(questions)}"
  :shuffle="true"
/>

## About This Exam

- **Format:** ${questions.length} multiple-choice questions
- **Time Limit:** 4 hours (240 minutes)
- **Passing Score:** Aim for at least 75% correct
- **Domains Covered:**
  - People (33%)
  - Process (41%)
  - Business Environment (26%)

## Exam Tips

1. Read each question carefully
2. Consider all options before selecting
3. Eliminate obviously wrong answers first
4. Think about the "PMI way" - what would a professional project manager do?
5. Manage your time - approximately 1.3 minutes per question

---

<div class="exam-tip">
  <strong>💡 Pro Tip:</strong> After completing the exam, review all questions, especially those you got wrong. Understanding why an answer is correct is more important than just getting it right.
</div>
`
}

// Migrate Chapter 10
console.log('Migrating Chapter 10...')

chapter10Files.forEach(filename => {
  const sourcePath = path.join(__dirname, '..', 'Chapter 10 - Exam Preparation and Future Trends', filename)

  if (fs.existsSync(sourcePath)) {
    let content = fs.readFileSync(sourcePath, 'utf8')
    const title = content.split('\n')[0].replace(/^#+\s*/, '')

    content = addFrontmatter(content, title)

    // Determine destination file
    let destFile = filename
      .replace('10.1 – ', 'exam-strategy.md')
      .replace('10.2 – ', 'ai-essentials.md')
      .replace('10.3a – ', 'practice-exam-1.md')
      .replace('10.3c – ', 'practice-exam-2.md')
      .replace('10.3e – ', 'practice-exam-3.md')

    const destPath = path.join(__dirname, '..', 'guide', '10-exam-prep', destFile)

    // Ensure directory exists
    if (!fs.existsSync(path.dirname(destPath))) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true })
    }

    // Convert practice exams to interactive format
    if (filename.includes('Practice Exam')) {
      const examNum = filename.includes('10.3a') ? '1' :
                     filename.includes('10.3c') ? '2' : '3'
      content = createPracticeExam(examNum, fs.readFileSync(sourcePath, 'utf8'))
    }

    fs.writeFileSync(destPath, content)
    console.log(`  ✓ Migrated: ${filename} -> ${destFile}`)
  } else {
    console.log(`  ⚠ File not found: ${filename}`)
  }
})

// Create Chapter 10 index
const chapter10Index = `# Chapter 10: Exam Preparation and Future Trends

This final chapter focuses on exam preparation strategies, test-taking skills, and emerging trends in project management.

## Sections

1. **[Exam Strategy and Test-Taking Skills](exam-strategy.md)**
   - Understanding the exam format
   - Time management strategies
   - Question analysis techniques

2. **[AI Essentials for Project Professionals](ai-essentials.md)**
   - AI tools for project management
   - Data-driven decision making
   - Future skills for project managers

3. **[Practice Exams](practice-exam-1.md)**
   - Practice Exam 1
   - Practice Exam 2
   - Practice Exam 3

## Quick Tips

- Take all practice exams under timed conditions
- Review your results and identify weak areas
- Focus on understanding, not memorization
- Get adequate rest before exam day

---

<div class="final-tip">
  <strong>🎯 Final Tip:</strong> You've made it this far! Trust your preparation and stay confident during the exam.
</div>
`

fs.writeFileSync(
  path.join(__dirname, '..', 'guide', '10-exam-prep', 'index.md'),
  chapter10Index
)

console.log('  ✓ Created Chapter 10 index')
console.log('\n✅ Chapter 10 migration complete!')