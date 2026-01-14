#!/usr/bin/env python3
"""
Audit JSON practice exam questions to ensure distractor lengths are within ±10% of correct answer length.
"""

import json
import sys
from pathlib import Path
from dataclasses import dataclass
from typing import List

@dataclass
class AnswerOption:
    """Represents an answer option with its text and length."""
    label: str
    text: str
    length: int

@dataclass  
class QuestionAudit:
    """Audit result for a single question."""
    question_id: str
    question_num: int
    correct: AnswerOption
    distractors: List[AnswerOption]
    issues: List[str]

def audit_question(question: dict, tolerance: float = 0.10) -> QuestionAudit:
    """Audit a single question for length compliance."""
    issues = []
    
    correct_text = question.get('correctAnswer', '')
    correct = AnswerOption('Correct', correct_text, len(correct_text))
    
    distractors = []
    for i, d_text in enumerate(question.get('distractors', []), 1):
        distractors.append(AnswerOption(f'Distractor {i}', d_text, len(d_text)))
    
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
    
    return QuestionAudit(
        question.get('id', 'unknown'),
        question.get('questionNumber', 0),
        correct,
        distractors,
        issues
    )

def generate_report(exam_data: dict, audits: List[QuestionAudit]) -> str:
    """Generate a comprehensive audit report."""
    lines = []
    lines.append(f"# Practice Exam Distractor Length Audit Report")
    lines.append("")
    lines.append(f"**Exam:** {exam_data.get('title', 'Unknown')}")
    lines.append(f"**Tolerance:** ±10% of correct answer length")
    lines.append("")
    
    # Summary statistics
    total_questions = len(audits)
    questions_with_issues = [a for a in audits if a.issues]
    total_issues = sum(len(a.issues) for a in all_audits)
    
    lines.append("## Summary")
    lines.append("")
    lines.append(f"- **Total Questions Audited:** {total_questions}")
    lines.append(f"- **Questions with Issues:** {len(questions_with_issues)}")
    lines.append(f"- **Total Issues Found:** {total_issues}")
    if total_questions > 0:
        lines.append(f"- **Compliance Rate:** {((total_questions - len(questions_with_issues)) / total_questions * 100):.1f}%")
    lines.append("")
    
    if not questions_with_issues:
        lines.append("✅ **All distractors are within the ±10% length tolerance!**")
        return '\n'.join(lines)
    
    # Issues detail
    lines.append("## Issues by Question")
    lines.append("")
    
    for audit in sorted(questions_with_issues, key=lambda a: a.question_id):
        lines.append(f"### {audit.question_id}")
        lines.append("")
        lines.append(f"**Correct Answer ({audit.correct.length} chars):** {audit.correct.text[:100]}{'...' if len(audit.correct.text) > 100 else ''}")
        lines.append("")
        
        for issue in audit.issues:
            lines.append(f"- ⚠️ {issue}")
        
        # Show the problematic distractors
        for d in audit.distractors:
            correct_len = audit.correct.length
            diff_pct = ((d.length - correct_len) / correct_len) * 100
            if abs(diff_pct) > 10:
                lines.append(f"  - **{d.label} ({d.length} chars):** {d.text[:100]}{'...' if len(d.text) > 100 else ''}")
        
        lines.append("")
        lines.append("---")
        lines.append("")
    
    return '\n'.join(lines)

def main():
    if len(sys.argv) < 2:
        print("Usage: python audit_json_exam.py <path_to_exam.json>")
        sys.exit(1)
    
    filepath = Path(sys.argv[1])
    
    if not filepath.exists():
        print(f"Error: File not found: {filepath}")
        sys.exit(1)
    
    print(f"Loading exam from {filepath}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        exam_data = json.load(f)
    
    questions = exam_data.get('questions', [])
    print(f"Found {len(questions)} questions to audit...")
    
    global all_audits
    all_audits = []
    for q in questions:
        audit = audit_question(q)
        all_audits.append(audit)
    
    # Generate report
    report = generate_report(exam_data, all_audits)
    
    # Save report
    report_path = filepath.parent / f"{filepath.stem}_audit_report.md"
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(report)
    
    print(f"\n✅ Audit complete! Report saved to: {report_path}")
    print(f"\n{'-' * 60}")
    
    # Print summary to console
    questions_with_issues = [a for a in all_audits if a.issues]
    
    print(f"Total Questions: {len(all_audits)}")
    print(f"Questions with Issues: {len(questions_with_issues)}")
    if len(all_audits) > 0:
        print(f"Compliance Rate: {((len(all_audits) - len(questions_with_issues)) / len(all_audits) * 100):.1f}%")

if __name__ == '__main__':
    main()
