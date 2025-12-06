# Chapter 20 Practice Exam Distribution Verification Report

**Date**: December 2025
**Status**: ⚠️ DISTRIBUTION IMBALANCE DETECTED
**Priority**: HIGH

---

## Executive Summary

The practice exam in Chapter 20 contains the correct total number of questions (185) but has an **unbalanced domain distribution** that does not match the official 2026 PMP exam specifications. This imbalance could lead to inadequate preparation in the Process domain.

---

## Current Distribution Analysis

### Specified Requirements (Official PMP 2026 Exam)
| Domain | Required % | Required # (of 185) | Actual # | Status |
|--------|-----------|-------------------|----------|--------|
| People | 33% | 61 | 61 | ✅ CORRECT |
| Process | 41% | 76 | 63 | ❌ SHORT by 13 |
| Business Environment | 26% | 48 | 61 | ❌ OVER by 13 |
| **Total** | 100% | **185** | **185** | ✅ CORRECT |

### Distribution Percentages in Current Practice Exam
| Domain | Actual % | Issue |
|--------|---------|-------|
| People | 32.97% | Within acceptable tolerance |
| Process | 34.05% | **8.95 percentage points below spec** |
| Business Environment | 32.97% | **6.97 percentage points above spec** |

---

## Impact Assessment

### Problem
The practice exam underrepresents the Process domain by approximately 13 questions (8.95% shortfall). Since Process represents 41% of the actual exam, inadequate practice in this domain could leave test-takers underprepared for process-heavy exam questions.

### Risk
Students using this practice exam for final preparation may:
- Feel over-prepared for Business Environment questions
- Feel under-prepared for Process questions
- Be surprised by the proportion of Process questions on the actual exam
- Have lower confidence in an area with 41% of exam weight

---

## Root Cause

The distribution imbalance likely occurred during question creation when focus areas were not systematically distributed across domains. The Practice Exam author may have:
- Focused more on Business Environment scenarios (which can be engaging and topical)
- Created fewer Process questions (which can feel more procedural)
- Not tracked domain count during question writing

---

## Recommended Actions

### Priority 1: Rebalance Questions (REQUIRED)
Convert 13 Business Environment questions to Process domain questions to achieve proper distribution:
- **Target**: Move ~13 questions from Business Environment to Process
- **New target distribution**: People 61, Process 76, Business Environment 48
- **Approach**:
  1. Review the 61 current Business Environment questions
  2. Identify 13 questions that could be reframed as Process domain
  3. Focus on questions about governance, project closure, and artifacts (currently under-represented)

**Questions to Consider Converting**:
- Governance/compliance questions → Could emphasize Process Task 11 (Manage Project Artifacts)
- Strategic/portfolio questions → Could refocus on Process Task 9 (Evaluate Project Status)
- Change/adoption questions → Could refocus on Process execution and monitoring rather than just change readiness

### Priority 2: Verify Answer Key
After rebalancing questions, ensure the Answer Key (20a) is updated to match any question changes.

### Priority 3: Add Domain Tags for Easy Tracking
Consider adding a question count summary at the start of the practice exam showing the domain breakdown, to help students verify they're getting comprehensive coverage.

---

## Verification Checklist

- [x] Total question count: 185 ✅
- [x] All questions have domain tags ✅
- [x] All questions have methodology tags ✅
- [ ] Domain distribution matches spec (61/76/48) ❌
- [ ] Answer key synchronized with questions ⚠️ (needs verification after fix)

---

## Example of Potential Rebalance

**Sample conversion** (to illustrate the type of adjustment needed):

**Current**: Business Environment question about organizational change and adoption
**Reframed as**: Process question about managing project closure and benefits transition

This preserves the scenario's value while shifting the focus from organizational change readiness to process management.

---

## Next Steps

1. **Immediate**: Flag this issue in documentation so students understand the limitation
2. **Short-term**: Rebalance 13 questions from Business Environment to Process
3. **Medium-term**: Create a verification script that automatically counts and reports domain distribution
4. **Long-term**: Use a question bank management system to prevent future distribution imbalances

---

## Conclusion

The practice exam is a valuable preparation tool and has the right total number of questions. However, the domain distribution needs correction to accurately simulate the real PMP exam. **The imbalance should be fixed before the guide is published for widespread use**, as students rely on practice exams to identify weak areas and allocate study time appropriately.

**Recommendation**: Fix the distribution imbalance by rebalancing 13 questions from Business Environment to Process domain. This is a high-priority maintenance task to ensure study guide accuracy.
