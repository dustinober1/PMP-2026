---
title: Practice Exam 4
---

<script setup>
import ExamSimulator from '../../.vitepress/theme/components/ExamSimulator.vue'
import exam from './exams/practice-exam-4.json'
</script>

# Practice Exam 4 (Full-Length Simulation)

**Focus:** Advanced Topics (AI, sustainability/ESG, compliance edge cases)

<ExamSimulator :exam="exam" :total-minutes="exam.minutes" />
