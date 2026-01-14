---
title: Practice Exam 1
---

<script setup>
import ExamSimulator from '../../.vitepress/theme/components/ExamSimulator.vue'
import exam from './exams/practice-exam-1.json'
</script>

# Practice Exam 1 (Full-Length Simulation)

**Focus:** Fundamentals (balanced coverage across domains)

<ExamSimulator :exam="exam" :total-minutes="exam.minutes" />
