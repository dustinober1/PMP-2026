#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of all flashcard files
const flashcardFiles = [
  // Business Environment Domain (8 files)
  'guide/appendices/flashcards-business-task1-governance.md',
  'guide/appendices/flashcards-business-task2-compliance.md',
  'guide/appendices/flashcards-business-task3-changes.md',
  'guide/appendices/flashcards-business-task4-issues.md',
  'guide/appendices/flashcards-business-task5-risk.md',
  'guide/appendices/flashcards-business-task6-improvement.md',
  'guide/appendices/flashcards-business-task7-external.md',
  'guide/appendices/flashcards-business-task8-org-change.md',

  // People Domain (8 files)
  'guide/appendices/flashcards-people-task1-vision.md',
  'guide/appendices/flashcards-people-task2-conflicts.md',
  'guide/appendices/flashcards-people-task3-lead-team.md',
  'guide/appendices/flashcards-people-task4-stakeholders.md',
  'guide/appendices/flashcards-people-task5-align-expectations.md',
  'guide/appendices/flashcards-people-task6-manage-expectations.md',
  'guide/appendices/flashcards-people-task7-knowledge-transfer.md',
  'guide/appendices/flashcards-people-task8-communication.md',

  // Process Domain (10 files)
  'guide/appendices/flashcards-process-task1-integrated-plan.md',
  'guide/appendices/flashcards-process-task2-scope.md',
  'guide/appendices/flashcards-process-task3-value.md',
  'guide/appendices/flashcards-process-task4-resources.md',
  'guide/appendices/flashcards-process-task5-procurement.md',
  'guide/appendices/flashcards-process-task6-cost.md',
  'guide/appendices/flashcards-process-task7-quality.md',
  'guide/appendices/flashcards-process-task8-schedule.md',
  'guide/appendices/flashcards-process-task9-status.md',
  'guide/appendices/flashcards-process-task10-closure.md',
];

function parseFlashcardFile(content, filePath) {
  const result = {
    meta: {
      title: '',
      domain: '',
      task: '',
      ecoReference: '',
      description: '',
      file: filePath
    },
    flashcards: []
  };

  // Detect format and parse accordingly
  const isProcessOrBusinessFormat = content.includes('⚡ Process Task') ||
                                       content.includes('⚡ Business Task') ||
                                       content.includes('🏛️ Business Task') ||
                                       content.includes('# Business Task') ||
                                       content.includes('# Process Task');

  if (isProcessOrBusinessFormat) {
    return parseProcessBusinessFormat(content, filePath);
  } else {
    return parsePeopleFormat(content, filePath);
  }
}

function parseProcessBusinessFormat(content, filePath) {
  const result = {
    meta: {
      title: '',
      domain: '',
      task: '',
      ecoReference: '',
      description: '',
      file: filePath
    },
    flashcards: []
  };

  // Remove frontmatter and capture description
  const frontmatterMatch = content.match(/^---\ndescription: (.+)\n---/);
  if (frontmatterMatch) {
    result.meta.description = frontmatterMatch[1].trim();
    content = content.replace(/^---\ndescription: .+\n---\n*/, '');
  }

  const lines = content.split('\n');

  let currentCategory = 'General';
  let currentSection = null; // 'front' or 'back'
  let currentCard = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines at start
    if (trimmed === '' && !currentCard) continue;

    // Parse title (main heading with emoji)
    const titleMatch = line.match(/^# ⚡ Process Task \d+: (.+)/);
    if (!titleMatch) {
      const titleMatch2 = line.match(/^# ⚡ (Business) Task \d+: (.+)/);
      if (titleMatch2) {
        result.meta.title = `⚡ ${titleMatch2[1]} Task: ${titleMatch2[2]}`;
        continue;
      }
    }
    if (titleMatch) {
      result.meta.title = `⚡ Process Task: ${titleMatch[1]}`;
      continue;
    }

    // Parse domain/task/eco from metadata lines
    if (trimmed.startsWith('**Domain**:')) {
      result.meta.domain = trimmed.replace('**Domain**:', '').trim();
      continue;
    }
    if (trimmed.startsWith('**Task**:')) {
      result.meta.task = trimmed.replace('**Task**:', '').trim();
      continue;
    }
    if (trimmed.startsWith('**ECO Reference**:')) {
      result.meta.ecoReference = trimmed.replace('**ECO Reference**:', '').trim();
      continue;
    }

    // Parse category (## heading)
    const categoryMatch = line.match(/^## (.+)/);
    if (categoryMatch) {
      currentCategory = categoryMatch[1].trim();
      continue;
    }

    // Parse Card heading
    const cardMatch = line.match(/^### Card (\d+)/);
    if (cardMatch) {
      // Save previous card if exists
      if (currentCard && currentCard.front && currentCard.back) {
        result.flashcards.push(currentCard);
      }
      const cardNumber = parseInt(cardMatch[1], 10);
      currentCard = {
        id: cardNumber,
        category: currentCategory,
        front: '',
        back: ''
      };
      currentSection = null;
      continue;
    }

    // Parse Front label
    if (trimmed === '**Front:**') {
      currentSection = 'front';
      continue;
    }

    // Parse Back label
    if (trimmed === '**Back:**') {
      currentSection = 'back';
      continue;
    }

    // Collect content
    if (currentCard && currentSection) {
      // Skip separator lines
      if (trimmed === '---') continue;

      // Add line to current section
      if (currentSection === 'front') {
        if (currentCard.front) {
          currentCard.front += '\n' + line;
        } else {
          currentCard.front = line;
        }
      } else if (currentSection === 'back') {
        if (currentCard.back) {
          currentCard.back += '\n' + line;
        } else {
          currentCard.back = line;
        }
      }
    }
  }

  // Don't forget the last card
  if (currentCard && currentCard.front && currentCard.back) {
    result.flashcards.push(currentCard);
  }

  return result;
}

function parsePeopleFormat(content, filePath) {
  const result = {
    meta: {
      title: '',
      domain: '',
      task: '',
      ecoReference: '',
      description: '',
      file: filePath
    },
    flashcards: []
  };

  const lines = content.split('\n');

  // Parse metadata from the metadata section
  for (let i = 0; i < Math.min(20, lines.length); i++) {
    const line = lines[i].trim();
    if (line.startsWith('# PMP 2026 Flashcards:')) {
      result.meta.title = line.replace('# ', '');
      continue;
    }
    if (line.startsWith('- **Domain**:')) {
      result.meta.domain = line.replace('- **Domain**:', '').trim();
      continue;
    }
    if (line.startsWith('- **Task**:')) {
      result.meta.task = line.replace('- **Task**:', '').trim();
      continue;
    }
    if (line.startsWith('- **ECO Reference**:')) {
      result.meta.ecoReference = line.replace('- **ECO Reference**:', '').trim();
      continue;
    }
  }

  let currentCategory = 'General';
  let currentCard = null;
  let cardNumber = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Parse category (## heading)
    const categoryMatch = line.match(/^## (.+)/);
    if (categoryMatch && !categoryMatch[1].includes('Metadata') && !categoryMatch[1].includes('How to Use')) {
      currentCategory = categoryMatch[1].trim();
      continue;
    }

    // Parse Card heading
    const cardMatch = line.match(/^### Card (\d+)/);
    if (cardMatch) {
      // Save previous card if exists
      if (currentCard && currentCard.front && currentCard.back) {
        result.flashcards.push(currentCard);
      }
      cardNumber = parseInt(cardMatch[1], 10);
      currentCard = {
        id: cardNumber,
        category: currentCategory,
        front: '',
        back: ''
      };
      continue;
    }

    // Parse Front content (on same line as label)
    const frontMatch = line.match(/^\*\*Front\*\*:\s*(.+)$/);
    if (frontMatch && currentCard) {
      currentCard.front = frontMatch[1].trim();
      continue;
    }

    // Parse Back content (on same line as label)
    const backMatch = line.match(/^\*\*Back\*\*:\s*(.+)$/);
    if (backMatch && currentCard) {
      currentCard.back = backMatch[1].trim();
      continue;
    }
  }

  // Don't forget the last card
  if (currentCard && currentCard.front && currentCard.back) {
    result.flashcards.push(currentCard);
  }

  return result;
}

// Main execution
const allFlashcards = [];

for (const file of flashcardFiles) {
  const fullPath = path.join(__dirname, '..', file);
  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    const parsed = parseFlashcardFile(content, file);
    allFlashcards.push(parsed);
    console.log(`Parsed ${file}: ${parsed.flashcards.length} cards`);
  } catch (error) {
    console.error(`Error parsing ${file}:`, error.message);
  }
}

// Write combined JSON
const outputPath = path.join(__dirname, '..', 'guide', 'appendices', 'flashcards-combined.json');
fs.writeFileSync(outputPath, JSON.stringify(allFlashcards, null, 2));

// Also write a flattened version
const flattened = {
  meta: {
    title: 'PMP 2026 Flashcards - Combined',
    totalCards: 0,
    domains: ['Business Environment', 'People', 'Process'],
    generatedAt: new Date().toISOString()
  },
  flashcards: []
};

let globalId = 1;
for (const file of allFlashcards) {
  for (const card of file.flashcards) {
    flattened.flashcards.push({
      globalId: globalId++,
      domain: file.meta.domain,
      task: file.meta.task,
      file: file.meta.file,
      category: card.category,
      localId: card.id,
      front: card.front,
      back: card.back
    });
  }
}
flattened.meta.totalCards = flattened.flashcards.length;

const flatOutputPath = path.join(__dirname, '..', 'guide', 'appendices', 'flashcards-flat.json');
fs.writeFileSync(flatOutputPath, JSON.stringify(flattened, null, 2));

console.log(`\nTotal flashcards: ${flattened.meta.totalCards}`);
console.log(`Combined JSON written to: ${outputPath}`);
console.log(`Flattened JSON written to: ${flatOutputPath}`);
