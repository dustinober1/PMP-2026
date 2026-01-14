---
title: Practice Exam 5
---

<script setup>
import ExamSimulator from '../../.vitepress/theme/components/ExamSimulator.vue'
import exam from './exams/practice-exam-5.json'
</script>

# Practice Exam 5 (Full-Length Simulation)

**Focus:** Comprehensive Final (most exam-like mix; use as final readiness check)

<ExamSimulator :exam="exam" :total-minutes="exam.minutes" />
