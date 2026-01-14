---
title: Practice Exam 3
---

<script setup>
import ExamSimulator from '../../.vitepress/theme/components/ExamSimulator.vue'
import exam from './exams/practice-exam-3.json'
</script>

# Practice Exam 3 (Full-Length Simulation)

**Focus:** Integration (cross-domain, higher complexity and governance trade-offs)

<ExamSimulator :exam="exam" :total-minutes="exam.minutes" />
