---
title: Practice Exam 2
---

<script setup>
import ExamSimulator from '../../.vitepress/theme/components/ExamSimulator.vue'
import exam from './exams/practice-exam-2.json'
</script>

# Practice Exam 2 (Full-Length Simulation)

**Focus:** Agility (heavier emphasis on Agile/Hybrid scenarios while maintaining domain blueprint)

<ExamSimulator :exam="exam" :total-minutes="exam.minutes" />
