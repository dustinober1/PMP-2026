#!/usr/bin/env node

/**
 * PMP Testbank Markdown to JSON Converter
 *
 * Parses all practice exam markdown files from the testbank folder
 * and converts them into structured JSON for database ingestion.
 *
 * Usage: node scripts/convert-testbank-to-json.js
 * Output: testbank/testbank.json
 */

const fs = require('fs');
const path = require('path');

const TESTBANK_DIR = path.join(__dirname, '..', 'testbank');
const OUTPUT_FILE = path.join(TESTBANK_DIR, 'testbank.json');
const OUTPUT_FILE_MIN = path.join(TESTBANK_DIR, 'testbank.min.json');

/**
 * Generate a unique hash for deduplication
 */
function generateHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

/**
 * Parse a single question block from markdown
 */
function parseQuestion(questionBlock, questionNumber, fileMetadata) {
  const question = {
    id: `${fileMetadata.domain}-task${fileMetadata.taskNumber}-q${questionNumber}`,
    domain: fileMetadata.domain,
    task: fileMetadata.task,
    taskNumber: fileMetadata.taskNumber,
    questionNumber,
    enabler: null,
    enablerDescription: null,
    methodology: null,
    scenario: '',
    questionText: '',
    correctAnswer: '',
    distractors: [],
    // Database-ready format with all answers in shufflable array
    answers: [],
    correctAnswerIndex: 0,
    remediation: {
      coreLogic: '',
      pmiMindset: '',
      theTrap: '',
      sourceLink: ''
    },
    // Metadata for filtering/searching
    tags: [],
    wordCount: 0,
    hash: ''
  };

  // Extract enabler and methodology
  const enablerMatch = questionBlock.match(/\*\*Enabler:\*\*\s*(\d+)/);
  if (enablerMatch) {
    question.enabler = parseInt(enablerMatch[1], 10);
  }

  const methodologyMatch = questionBlock.match(/\*\*Methodology:\*\*\s*(\w+)/);
  if (methodologyMatch) {
    question.methodology = methodologyMatch[1].toLowerCase();
  }

  // Extract scenario
  const scenarioMatch = questionBlock.match(/\*\*Scenario:\*\*\s*([\s\S]*?)(?=\*\*Question:\*\*)/);
  if (scenarioMatch) {
    question.scenario = scenarioMatch[1].trim();
  }

  // Extract question text
  const questionTextMatch = questionBlock.match(/\*\*Question:\*\*\s*([\s\S]*?)(?=\n-\s*\*\*)/);
  if (questionTextMatch) {
    question.questionText = questionTextMatch[1].trim();
  }

  // Extract correct answer
  const correctMatch = questionBlock.match(/-\s*\*\*Correct:\*\*\s*(.+)/);
  if (correctMatch) {
    question.correctAnswer = correctMatch[1].trim();
  }

  // Extract distractors
  const distractorMatches = questionBlock.matchAll(/-\s*\*\*Distractor\s*\d+:\*\*\s*(.+)/g);
  for (const match of distractorMatches) {
    question.distractors.push(match[1].trim());
  }

  // Extract remediation details from the details block
  const detailsMatch = questionBlock.match(/<details>[\s\S]*?<summary>.*?<\/summary>([\s\S]*?)<\/details>/);
  if (detailsMatch) {
    const detailsContent = detailsMatch[1];

    // Parse table rows for remediation
    const coreLogicMatch = detailsContent.match(/\*\*Core Logic\*\*\s*\|\s*(.+?)\s*\|/);
    if (coreLogicMatch) {
      question.remediation.coreLogic = coreLogicMatch[1].trim();
    }

    const pmiMindsetMatch = detailsContent.match(/\*\*PMI Mindset\*\*\s*\|\s*(.+?)\s*\|/);
    if (pmiMindsetMatch) {
      question.remediation.pmiMindset = pmiMindsetMatch[1].trim();
    }

    const trapMatch = detailsContent.match(/\*\*The Trap\*\*\s*\|\s*(.+?)\s*\|/);
    if (trapMatch) {
      question.remediation.theTrap = trapMatch[1].trim();
    }

    const sourceLinkMatch = detailsContent.match(/\*\*Source Link\*\*\s*\|\s*`?([^|]+)/);
    if (sourceLinkMatch) {
      // Clean up source link - remove backticks and trim
      let sourceLink = sourceLinkMatch[1].trim();
      sourceLink = sourceLink.replace(/`/g, '').trim();
      // Remove trailing pipe if present
      sourceLink = sourceLink.replace(/\|$/, '').trim();
      question.remediation.sourceLink = sourceLink;
    }
  }

  // Build answers array (correct answer first, then distractors)
  if (question.correctAnswer) {
    question.answers = [
      { text: question.correctAnswer, isCorrect: true },
      ...question.distractors.map(d => ({ text: d, isCorrect: false }))
    ];
    question.correctAnswerIndex = 0;
  }

  // Add enabler description
  const enablerDescriptions = {
    1: 'Structure/Rules/Policies',
    2: 'Success Metrics',
    3: 'Escalation/Thresholds',
    4: 'Root Cause Analysis'
  };
  if (question.enabler && enablerDescriptions[question.enabler]) {
    question.enablerDescription = enablerDescriptions[question.enabler];
  }

  // Calculate word count for difficulty estimation
  const fullText = `${question.scenario} ${question.questionText} ${question.correctAnswer} ${question.distractors.join(' ')}`;
  question.wordCount = fullText.split(/\s+/).filter(w => w.length > 0).length;

  // Generate tags for searching
  question.tags = [
    question.domain,
    question.methodology,
    `task${question.taskNumber}`,
    question.enablerDescription
  ].filter(Boolean).map(t => t.toLowerCase());

  // Generate hash for deduplication
  question.hash = generateHash(`${question.scenario}${question.questionText}`);

  return question;
}

/**
 * Extract metadata from filename and file content
 */
function extractFileMetadata(filename, content) {
  const metadata = {
    filename,
    domain: '',
    task: '',
    taskNumber: 0,
    ecoTask: '',
    difficulty: '',
    totalQuestions: 0
  };

  // Parse filename pattern: {domain}-task{number}-{topic}-practice.md
  const filenameMatch = filename.match(/^(business|people|process)-task(\d+)-(.+)-practice\.md$/);
  if (filenameMatch) {
    metadata.domain = filenameMatch[1];
    metadata.taskNumber = parseInt(filenameMatch[2], 10);
    metadata.task = filenameMatch[3].replace(/-/g, ' ');
  }

  // Extract ECO Task from content
  const ecoMatch = content.match(/\*\*ECO Task\*\*:\s*(.+)/);
  if (ecoMatch) {
    metadata.ecoTask = ecoMatch[1].trim();
  }

  // Extract difficulty
  const difficultyMatch = content.match(/\*\*Difficulty\*\*:\s*(.+)/);
  if (difficultyMatch) {
    metadata.difficulty = difficultyMatch[1].trim();
  }

  // Extract total questions count
  const questionsMatch = content.match(/\*\*Questions\*\*:\s*(\d+)/);
  if (questionsMatch) {
    metadata.totalQuestions = parseInt(questionsMatch[1], 10);
  }

  return metadata;
}

/**
 * Parse a single markdown file
 */
function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);

  const metadata = extractFileMetadata(filename, content);
  const questions = [];

  // Split content by question headers (## Question N or ### Question N)
  const questionBlocks = content.split(/(?=#{2,3}\s*Question\s+\d+)/);

  for (const block of questionBlocks) {
    // Check if this is actually a question block
    const questionNumMatch = block.match(/#{2,3}\s*Question\s+(\d+)/);
    if (questionNumMatch) {
      const questionNumber = parseInt(questionNumMatch[1], 10);
      const question = parseQuestion(block, questionNumber, metadata);
      questions.push(question);
    }
  }

  return {
    metadata,
    questions
  };
}

/**
 * Main execution
 */
function main() {
  console.log('🔄 Converting PMP Testbank to JSON...\n');

  const files = fs.readdirSync(TESTBANK_DIR)
    .filter(f => f.endsWith('-practice.md'))
    .sort();

  console.log(`📁 Found ${files.length} practice exam files:\n`);

  const testbank = {
    generatedAt: new Date().toISOString(),
    totalFiles: files.length,
    totalQuestions: 0,
    domains: {
      people: { files: 0, questions: 0 },
      process: { files: 0, questions: 0 },
      business: { files: 0, questions: 0 }
    },
    methodologyDistribution: {
      predictive: 0,
      agile: 0,
      hybrid: 0
    },
    files: [],
    questions: []
  };

  for (const filename of files) {
    const filePath = path.join(TESTBANK_DIR, filename);
    const result = parseMarkdownFile(filePath);

    console.log(`  ✅ ${filename}`);
    console.log(`     └─ ${result.questions.length} questions parsed`);

    // Update statistics
    testbank.files.push({
      filename: result.metadata.filename,
      domain: result.metadata.domain,
      taskNumber: result.metadata.taskNumber,
      task: result.metadata.task,
      ecoTask: result.metadata.ecoTask,
      difficulty: result.metadata.difficulty,
      questionCount: result.questions.length
    });

    testbank.questions.push(...result.questions);
    testbank.totalQuestions += result.questions.length;

    // Update domain stats
    if (result.metadata.domain && testbank.domains[result.metadata.domain]) {
      testbank.domains[result.metadata.domain].files++;
      testbank.domains[result.metadata.domain].questions += result.questions.length;
    }

    // Update methodology distribution
    for (const q of result.questions) {
      if (q.methodology && testbank.methodologyDistribution[q.methodology] !== undefined) {
        testbank.methodologyDistribution[q.methodology]++;
      }
    }
  }

  // Write output (formatted)
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(testbank, null, 2));

  // Write minified output
  fs.writeFileSync(OUTPUT_FILE_MIN, JSON.stringify(testbank));

  // Check for parsing issues
  const issues = [];
  for (const q of testbank.questions) {
    if (!q.scenario) issues.push(`${q.id}: Missing scenario`);
    if (!q.questionText) issues.push(`${q.id}: Missing question text`);
    if (!q.correctAnswer) issues.push(`${q.id}: Missing correct answer`);
    if (q.distractors.length < 2) issues.push(`${q.id}: Less than 2 distractors (found ${q.distractors.length})`);
  }

  console.log('\n' + '─'.repeat(50));
  console.log('\n📊 Summary:\n');
  console.log(`   Total Files: ${testbank.totalFiles}`);
  console.log(`   Total Questions: ${testbank.totalQuestions}`);
  console.log('\n   Domain Distribution:');
  console.log(`     • People: ${testbank.domains.people.questions} questions (${testbank.domains.people.files} files)`);
  console.log(`     • Process: ${testbank.domains.process.questions} questions (${testbank.domains.process.files} files)`);
  console.log(`     • Business: ${testbank.domains.business.questions} questions (${testbank.domains.business.files} files)`);
  console.log('\n   Methodology Distribution:');
  console.log(`     • Predictive: ${testbank.methodologyDistribution.predictive}`);
  console.log(`     • Agile: ${testbank.methodologyDistribution.agile}`);
  console.log(`     • Hybrid: ${testbank.methodologyDistribution.hybrid}`);
  console.log(`\n✅ Output written to:`);
  console.log(`   • ${OUTPUT_FILE}`);
  console.log(`   • ${OUTPUT_FILE_MIN}`);

  // Report any parsing issues
  if (issues.length > 0) {
    console.log(`\n⚠️  Parsing Issues Found (${issues.length}):`);
    issues.slice(0, 10).forEach(issue => console.log(`   • ${issue}`));
    if (issues.length > 10) {
      console.log(`   ... and ${issues.length - 10} more`);
    }
  } else {
    console.log('\n✅ All questions parsed successfully!');
  }
}

main();
