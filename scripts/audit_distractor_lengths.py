#!/usr/bin/env python3
"""
Audit testbank questions to ensure distractor lengths are within ±10% of correct answer length.

This script:
1. Parses all markdown testbank files
2. Extracts correct answers and distractors
3. Compares character lengths
4. Reports any distractors outside the ±10% tolerance
"""

import os
import re
from pathlib import Path
from dataclasses import dataclass
from typing import List, Tuple

@dataclass
class AnswerOption:
    """Represents an answer option with its text and length."""
    label: str
    text: str
    length: int

@dataclass  
class QuestionAudit:
    """Audit result for a single question."""
    file: str
    question_num: int
    correct: AnswerOption
    distractors: List[AnswerOption]
    issues: List[str]

def extract_answer_text(line: str, label: str) -> str:
    """Extract just the answer text from a line like '- **Correct:** Some answer text'"""
    # Handle both markdown bold and HTML strong tags
    patterns = [
        rf'-\s*\*\*{label}:\*\*\s*(.+)',
        rf'-\s*<strong>{label}:</strong>\s*(.+)',
    ]
    for pattern in patterns:
        match = re.search(pattern, line, re.IGNORECASE)
        if match:
            return match.group(1).strip()
    return ""

def parse_question_block(lines: List[str], start_idx: int) -> Tuple[AnswerOption, List[AnswerOption], int]:
    """Parse a question block and return correct answer, distractors, and end index."""
    correct = None
    distractors = []
    i = start_idx
    
    while i < len(lines):
        line = lines[i].strip()
        
        # Stop at next question or end of file
        if line.startswith('## Question') or line.startswith('---'):
            if correct is not None:
                break
        
        # Extract answer options
        if 'Correct:' in line or 'Correct<' in line:
            text = extract_answer_text(line, 'Correct')
            if text:
                correct = AnswerOption('Correct', text, len(text))
        elif 'Distractor 1:' in line or 'Distractor 1<' in line:
            text = extract_answer_text(line, 'Distractor 1')
            if text:
                distractors.append(AnswerOption('Distractor 1', text, len(text)))
        elif 'Distractor 2:' in line or 'Distractor 2<' in line:
            text = extract_answer_text(line, 'Distractor 2')
            if text:
                distractors.append(AnswerOption('Distractor 2', text, len(text)))
        elif 'Distractor 3:' in line or 'Distractor 3<' in line:
            text = extract_answer_text(line, 'Distractor 3')
            if text:
                distractors.append(AnswerOption('Distractor 3', text, len(text)))
        
        i += 1
    
    return correct, distractors, i

def audit_question(file_name: str, question_num: int, correct: AnswerOption, 
                   distractors: List[AnswerOption], tolerance: float = 0.10) -> QuestionAudit:
    """Audit a single question for length compliance."""
    issues = []
    
    if correct is None:
        issues.append("Missing correct answer")
        return QuestionAudit(file_name, question_num, correct, distractors, issues)
    
    correct_len = correct.length
    min_len = int(correct_len * (1 - tolerance))
    max_len = int(correct_len * (1 + tolerance))
    
    for d in distractors:
        if d.length < min_len or d.length > max_len:
            diff_pct = ((d.length - correct_len) / correct_len) * 100
            direction = "shorter" if d.length < correct_len else "longer"
            issues.append(
                f"{d.label} is {abs(diff_pct):.1f}% {direction} "
                f"(correct: {correct_len} chars, {d.label}: {d.length} chars)"
            )
    
    return QuestionAudit(file_name, question_num, correct, distractors, issues)

def parse_testbank_file(filepath: Path) -> List[QuestionAudit]:
    """Parse a testbank markdown file and audit all questions."""
    audits = []
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    i = 0
    file_name = filepath.name
    
    while i < len(lines):
        line = lines[i].strip()
        
        # Find question headers like "## Question 1"
        match = re.match(r'^##\s*Question\s+(\d+)', line)
        if match:
            question_num = int(match.group(1))
            correct, distractors, end_idx = parse_question_block(lines, i + 1)
            
            if correct is not None:
                audit = audit_question(file_name, question_num, correct, distractors)
                audits.append(audit)
            
            i = end_idx
        else:
            i += 1
    
    return audits

def generate_report(all_audits: List[QuestionAudit]) -> str:
    """Generate a comprehensive audit report."""
    lines = []
    lines.append("# Testbank Distractor Length Audit Report")
    lines.append("")
    lines.append(f"**Tolerance:** ±10% of correct answer length")
    lines.append("")
    
    # Summary statistics
    total_questions = len(all_audits)
    questions_with_issues = [a for a in all_audits if a.issues]
    total_issues = sum(len(a.issues) for a in all_audits)
    
    lines.append("## Summary")
    lines.append("")
    lines.append(f"- **Total Questions Audited:** {total_questions}")
    lines.append(f"- **Questions with Issues:** {len(questions_with_issues)}")
    lines.append(f"- **Total Issues Found:** {total_issues}")
    lines.append(f"- **Compliance Rate:** {((total_questions - len(questions_with_issues)) / total_questions * 100):.1f}%")
    lines.append("")
    
    if not questions_with_issues:
        lines.append("✅ **All distractors are within the ±10% length tolerance!**")
        return '\n'.join(lines)
    
    # Issues by file
    lines.append("## Issues by File")
    lines.append("")
    
    # Group by file
    by_file = {}
    for audit in questions_with_issues:
        if audit.file not in by_file:
            by_file[audit.file] = []
        by_file[audit.file].append(audit)
    
    for file_name in sorted(by_file.keys()):
        file_audits = by_file[file_name]
        lines.append(f"### {file_name}")
        lines.append("")
        lines.append(f"**Issues Found:** {sum(len(a.issues) for a in file_audits)}")
        lines.append("")
        
        for audit in sorted(file_audits, key=lambda a: a.question_num):
            lines.append(f"#### Question {audit.question_num}")
            lines.append("")
            lines.append(f"**Correct Answer ({audit.correct.length} chars):** {audit.correct.text[:80]}{'...' if len(audit.correct.text) > 80 else ''}")
            lines.append("")
            
            for issue in audit.issues:
                lines.append(f"- ⚠️ {issue}")
            
            # Show the problematic distractors
            for d in audit.distractors:
                correct_len = audit.correct.length
                diff_pct = ((d.length - correct_len) / correct_len) * 100
                if abs(diff_pct) > 10:
                    lines.append(f"  - **{d.label} ({d.length} chars):** {d.text[:80]}{'...' if len(d.text) > 80 else ''}")
            
            lines.append("")
        
        lines.append("---")
        lines.append("")
    
    return '\n'.join(lines)

def main():
    # Find testbank directory
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    testbank_dir = project_root / 'testbank'
    
    if not testbank_dir.exists():
        print(f"Error: Testbank directory not found at {testbank_dir}")
        return
    
    # Find all markdown files
    md_files = list(testbank_dir.glob('*.md'))
    print(f"Found {len(md_files)} testbank files to audit...")
    
    all_audits = []
    for filepath in sorted(md_files):
        print(f"  Parsing {filepath.name}...")
        audits = parse_testbank_file(filepath)
        all_audits.extend(audits)
    
    # Generate report
    report = generate_report(all_audits)
    
    # Save report
    report_path = project_root / 'distractor_audit_report.md'
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(report)
    
    print(f"\n✅ Audit complete! Report saved to: {report_path}")
    print(f"\n{'-' * 60}")
    
    # Print summary to console
    total_questions = len(all_audits)
    questions_with_issues = [a for a in all_audits if a.issues]
    
    print(f"Total Questions: {total_questions}")
    print(f"Questions with Issues: {len(questions_with_issues)}")
    print(f"Compliance Rate: {((total_questions - len(questions_with_issues)) / total_questions * 100):.1f}%")

if __name__ == '__main__':
    main()
