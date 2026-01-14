#!/usr/bin/env node

/**
 * Generate 5 full-length PMP practice exams (185 questions each)
 *
 * Source of truth: `testbank/testbank.json`
 * Output:
 *   - `guide/11-exam-prep/exams/practice-exam-{1..5}.json`
 *   - `guide/11-exam-prep/practice-exam-{1..5}.md` (VitePress pages using ExamSimulator)
 *
 * Notes:
 * - Questions are multiple-choice single-response (as provided by the testbank).
 * - Ensures global uniqueness across all 5 exams (no question repeated).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TESTBANK_JSON = path.join(ROOT, 'testbank', 'testbank.json');
const OUT_DIR = path.join(ROOT, 'guide', '11-exam-prep');
const OUT_EXAMS_DIR = path.join(OUT_DIR, 'exams');

const EXAM_COUNT = 5;
const QUESTIONS_PER_EXAM = 185;

// Domain targets based on `guide/01-introduction/understanding-exam.md`
// People 33%, Process 41%, Business 26%
const DOMAIN_TARGETS = {
    people: 61,
    process: 76,
    business: 48
};

// Methodology targets based on `guide/11-exam-prep/exam-strategy.md`
// ~40% predictive, remaining split between agile & hybrid.
const METHOD_TARGETS = {
    predictive: 74,
    agile: 56,
    hybrid: 55
};

function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}

function readJson(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function shuffle(arr) {
    // Fisher-Yates
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function clampNonNegativeCounts(counts) {
    for (const k of Object.keys(counts)) {
        if (counts[k] < 0) counts[k] = 0;
    }
    return counts;
}

function pickFrom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function buildIndex(questions) {
    // Index questions by domain+methodology for fast lookup
    const index = {
        people: { predictive: [], agile: [], hybrid: [] },
        process: { predictive: [], agile: [], hybrid: [] },
        business: { predictive: [], agile: [], hybrid: [] }
    };
    for (const q of questions) {
        if (!index[q.domain]) continue;
        if (!index[q.domain][q.methodology]) continue;
        index[q.domain][q.methodology].push(q);
    }
    // Shuffle each bucket to avoid bias
    for (const d of Object.keys(index)) {
        for (const m of Object.keys(index[d])) {
            shuffle(index[d][m]);
        }
    }
    return index;
}

function takeNextAvailable(bucket, usedIds) {
    while (bucket.length) {
        const q = bucket.pop();
        if (!usedIds.has(q.id)) return q;
    }
    return null;
}

function selectExamQuestions(index, usedIds) {
    const remainingDomain = { ...DOMAIN_TARGETS };
    const remainingMethod = { ...METHOD_TARGETS };

    const picked = [];

    function domainOrder() {
        return Object.keys(remainingDomain)
            .sort((a, b) => remainingDomain[b] - remainingDomain[a]);
    }

    function methodOrder() {
        return Object.keys(remainingMethod)
            .sort((a, b) => remainingMethod[b] - remainingMethod[a]);
    }

    while (picked.length < QUESTIONS_PER_EXAM) {
        // Prefer the most-needed domain first
        const domains = domainOrder();
        let selected = null;

        for (const d of domains) {
            if (remainingDomain[d] <= 0) continue;

            // Prefer the most-needed method first
            const methods = methodOrder();
            for (const m of methods) {
                if (remainingMethod[m] <= 0) continue;
                selected = takeNextAvailable(index[d][m], usedIds);
                if (selected) break;
            }

            if (selected) break;

            // If we couldn't satisfy both constraints, satisfy domain only
            for (const m of Object.keys(index[d])) {
                selected = takeNextAvailable(index[d][m], usedIds);
                if (selected) break;
            }

            if (selected) break;
        }

        // If still nothing, pick anything unused (should be rare)
        if (!selected) {
            const allDomains = Object.keys(index);
            const d = pickFrom(allDomains);
            const m = pickFrom(Object.keys(index[d]));
            selected = takeNextAvailable(index[d][m], usedIds);
        }

        assert(selected, 'Unable to select enough unique questions to build an exam.');

        picked.push(selected);
        usedIds.add(selected.id);

        if (remainingDomain[selected.domain] !== undefined) remainingDomain[selected.domain]--;
        if (remainingMethod[selected.methodology] !== undefined) remainingMethod[selected.methodology]--;
        clampNonNegativeCounts(remainingDomain);
        clampNonNegativeCounts(remainingMethod);
    }

    return picked;
}

function computeStats(questions) {
    const stats = {
        domain: { people: 0, process: 0, business: 0 },
        methodology: { predictive: 0, agile: 0, hybrid: 0 }
    };
    for (const q of questions) {
        if (stats.domain[q.domain] !== undefined) stats.domain[q.domain]++;
        if (stats.methodology[q.methodology] !== undefined) stats.methodology[q.methodology]++;
    }
    return stats;
}

function escapePipes(str) {
    return String(str || '').replace(/\|/g, '\\|');
}

function mdExam(examNumber, focus, questions) {
    const stats = computeStats(questions);
    const header = [
        `# Practice Exam ${examNumber} (Full-Length Simulation)`,
        '',
        `**Questions**: ${QUESTIONS_PER_EXAM}`,
        `**Timebox**: 240 minutes (target ~75 seconds/question)`,
        `**Focus**: ${focus}`,
        '',
        '---',
        '',
        '## Blueprint (This Exam)',
        '',
        `- **Domains**: People ${stats.domain.people}, Process ${stats.domain.process}, Business ${stats.domain.business}`,
        `- **Methodologies**: Predictive ${stats.methodology.predictive}, Agile ${stats.methodology.agile}, Hybrid ${stats.methodology.hybrid}`,
        '',
        '---',
        ''
    ].join('\n');

    const blocks = questions.map((q, i) => {
        const n = i + 1;
        const scenario = (q.scenario || '').trim();
        const questionText = (q.questionText || '').trim();
        const correct = (q.correctAnswer || '').trim();
        const distractors = Array.isArray(q.distractors) ? q.distractors : [];
        const remediation = q.remediation || {};

        // Keep consistent with the existing testbank style.
        const enablerLabel = q.enablerDescription ? `${q.enabler}: ${q.enablerDescription}` : (q.enabler ?? '');

        return [
            `## Question ${n}`,
            '',
            `<strong>Domain:</strong> ${q.domain} | <strong>Task:</strong> ${q.taskNumber} (${q.task})`,
            '',
            `<strong>Enabler:</strong> ${escapePipes(enablerLabel)} | <strong>Methodology:</strong> ${q.methodology}`,
            '',
            '<strong>Scenario:</strong>',
            scenario || '(Scenario omitted)',
            '',
            '<strong>Question:</strong>',
            questionText || '(Question omitted)',
            '',
            `- <strong>Correct:</strong> ${correct}`,
            ...distractors.map((d, idx) => `- <strong>Distractor ${idx + 1}:</strong> ${d}`),
            '',
            '<details>',
            '<summary>Detailed Remediation</summary>',
            '',
            '| Aspect | Details |',
            '| :--- | :--- |',
            `| **Core Logic** | ${escapePipes(remediation.coreLogic || '')} |`,
            `| **PMI Mindset** | ${escapePipes(remediation.pmiMindset || '')} |`,
            `| **The Trap** | ${escapePipes(remediation.theTrap || '')} |`,
            `| **Source Link** | ${escapePipes(remediation.sourceLink || '')} |`,
            '',
            '</details>',
            '',
            '---',
            ''
        ].join('\n');
    }).join('\n');

    return header + blocks;
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function writeExamFiles(examNumber, focus, questions) {
    ensureDir(OUT_EXAMS_DIR);

    const json = {
        id: `practice-exam-${examNumber}`,
        title: `Practice Exam ${examNumber} (Full-Length Simulation)`,
        focus,
        minutes: 240,
        generatedAt: new Date().toISOString(),
        questions
    };

    const jsonPath = path.join(OUT_EXAMS_DIR, `practice-exam-${examNumber}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));

    const md = `---\n` +
        `title: Practice Exam ${examNumber}\n` +
        `---\n\n` +
        `<script setup>\n` +
        `import ExamSimulator from '../../.vitepress/theme/components/ExamSimulator.vue'\n` +
        `import exam from './exams/practice-exam-${examNumber}.json'\n` +
        `</script>\n\n` +
        `# Practice Exam ${examNumber} (Full-Length Simulation)\n\n` +
        `**Focus:** ${focus}\n\n` +
        `<ExamSimulator :exam="exam" :total-minutes="exam.minutes" />\n`;

    const mdPath = path.join(OUT_DIR, `practice-exam-${examNumber}.md`);
    fs.writeFileSync(mdPath, md);
}

function main() {
    assert(fs.existsSync(TESTBANK_JSON), `Missing testbank JSON at ${TESTBANK_JSON}`);
    ensureDir(OUT_DIR);

    const tb = readJson(TESTBANK_JSON);
    const questions = tb.questions || [];
    assert(Array.isArray(questions) && questions.length > 0, 'No questions found in testbank.json');

    // Sanity check targets
    assert(
        DOMAIN_TARGETS.people + DOMAIN_TARGETS.process + DOMAIN_TARGETS.business === QUESTIONS_PER_EXAM,
        'DOMAIN_TARGETS must sum to QUESTIONS_PER_EXAM'
    );
    assert(
        METHOD_TARGETS.predictive + METHOD_TARGETS.agile + METHOD_TARGETS.hybrid === QUESTIONS_PER_EXAM,
        'METHOD_TARGETS must sum to QUESTIONS_PER_EXAM'
    );

    const index = buildIndex(questions);
    const usedIds = new Set();

    const focuses = [
        'Fundamentals (balanced coverage across domains)',
        'Agility (heavier emphasis on Agile/Hybrid scenarios while maintaining domain blueprint)',
        'Integration (cross-domain, higher complexity and governance trade-offs)',
        'Advanced Topics (AI, sustainability/ESG, compliance edge cases)',
        'Comprehensive Final (most exam-like mix; use as final readiness check)'
    ];

    for (let exam = 1; exam <= EXAM_COUNT; exam++) {
        const qs = selectExamQuestions(index, usedIds);
        const focus = focuses[exam - 1] || 'Full-length simulation';
        writeExamFiles(exam, focus, qs);
        console.log(`✅ Wrote guide/11-exam-prep/exams/practice-exam-${exam}.json (${qs.length} questions)`);
        console.log(`✅ Wrote guide/11-exam-prep/practice-exam-${exam}.md`);
    }

    console.log('\nDone.');
}

main();
