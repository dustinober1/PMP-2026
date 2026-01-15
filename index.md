---
layout: home
hero:
  name: "PMP Exam Prep"
  text: "2026 Edition"
  tagline: Master the Project Management Professional exam with our comprehensive, interactive study guide aligned to the new 2026 Examination Content Outline
  actions:
    - theme: brand
      text: Start Studying →
      link: /guide/01-introduction/understanding-exam
    - theme: alt
      text: View All Chapters
      link: /guide/01-introduction/

features:
  - icon: 📚
    title: Comprehensive Content
    details: 10 in-depth chapters covering all three domains — People (33%), Process (41%), and Business Environment (26%)
  - icon: 🎯
    title: Exam-Focused Practice
    details: Exam-style quizzes with detailed explanations to build speed, confidence, and the PMI mindset
  - icon: 🔄
    title: All Methodologies
    details: Master predictive, agile, and hybrid approaches as tested in the 2026 exam with real-world scenarios
  - icon: ⚡
    title: Interactive Learning
    details: Built-in knowledge checks, progress tracking, and immediate feedback to reinforce your understanding
  - icon: 🤖
    title: AI & Innovation
    details: New content on AI essentials for project professionals — a key addition to the 2026 exam blueprint
  - icon: 📱
    title: Study Anywhere
    details: Fully responsive design optimized for desktop, tablet, and mobile — study on any device, anytime
---

<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'
</script>

<style>
.home-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--color-purple-600), var(--color-purple-800));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  text-align: center;
  color: var(--vp-c-text-2);
  margin-bottom: 3rem;
  font-size: 1.125rem;
}

.changes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.change-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), var(--color-purple-50));
  border: 2px solid var(--color-purple-200);
  border-radius: 1.5rem;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 20px rgba(147, 51, 234, 0.08);
  position: relative;
  overflow: hidden;
}

.change-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-purple-400), var(--color-purple-600));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dark .change-card {
  background: linear-gradient(145deg, rgba(147, 51, 234, 0.15), var(--vp-c-bg-soft));
  border-color: rgba(147, 51, 234, 0.35);
}

.change-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 50px rgba(147, 51, 234, 0.2);
  border-color: var(--color-purple-400);
}

.change-card:hover::before {
  opacity: 1;
}

.change-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.change-number {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--color-purple-500), var(--color-purple-700));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.change-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  line-height: 1.4;
  max-width: 180px;
}

.domains-section {
  background: linear-gradient(135deg, var(--color-purple-50), var(--color-purple-100));
  border-radius: 1.5rem;
  padding: 3rem;
  margin: 3rem 0;
}

.dark .domains-section {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(147, 51, 234, 0.05));
}

.domain-bar {
  margin-bottom: 1.5rem;
}

.domain-label {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.domain-name {
  color: var(--vp-c-text-1);
}

.domain-percent {
  color: var(--color-purple-600);
}

.domain-track {
  height: 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 9999px;
  overflow: hidden;
}

.dark .domain-track {
  background: rgba(0, 0, 0, 0.3);
}

.domain-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-purple-500), var(--color-purple-700));
  border-radius: 9999px;
  transition: width 1s ease;
}

.domain-note {
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  background: rgba(147, 51, 234, 0.1);
  border-radius: 0.75rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  border-left: 4px solid var(--color-purple-500);
}

.dark .domain-note {
  background: rgba(147, 51, 234, 0.2);
}

.steps-section {
  margin: 4rem 0;
}

.steps-grid {
  display: grid;
  gap: 1.5rem;
  counter-reset: step;
}

.step-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: white;
  border: 1px solid var(--vp-c-border);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.dark .step-card {
  background: var(--vp-c-bg-soft);
}

.step-card:hover {
  border-color: var(--color-purple-300);
  box-shadow: 0 8px 30px rgba(147, 51, 234, 0.1);
}

.step-number {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--color-purple-600), var(--color-purple-700));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
}

.step-content h4 {
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.step-content p {
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

.cta-section {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--color-purple-600), var(--color-purple-800));
  border-radius: 1.5rem;
  margin: 4rem 0;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.cta-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  background: white;
  color: var(--color-purple-700);
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.support-section {
  margin: 3rem 0;
  padding: 2.5rem 2rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), var(--color-purple-50));
  border: 1px dashed var(--color-purple-200);
  border-radius: 1.25rem;
  text-align: center;
}

.dark .support-section {
  background: linear-gradient(145deg, rgba(147, 51, 234, 0.08), rgba(147, 51, 234, 0.03));
  border-color: rgba(147, 51, 234, 0.25);
}

.support-content {
  max-width: 500px;
  margin: 0 auto;
}

.support-heart {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.support-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.75rem;
}

.support-text {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}
</style>

<div class="home-content">

## What's New in 2026?

<p class="section-subtitle">The PMP exam is updating in July 2026 with significant changes</p>

<div class="changes-grid">
  <div class="change-card">
    <div class="change-icon">📝</div>
    <div class="change-number">185</div>
    <div class="change-label">Questions (up from 180)</div>
  </div>
  <div class="change-card">
    <div class="change-icon">⏱️</div>
    <div class="change-number">240</div>
    <div class="change-label">Minutes with 2 breaks</div>
  </div>
  <div class="change-card">
    <div class="change-icon">🤖</div>
    <div class="change-number">AI</div>
    <div class="change-label">Enhanced focus on AI and data</div>
  </div>
  <div class="change-card">
    <div class="change-icon">🌱</div>
    <div class="change-number">Green</div>
    <div class="change-label">Sustainability emphasis</div>
  </div>
</div>

## Exam Domain Breakdown (2026 ECO)

<div class="domains-section">
  <div class="domain-bar">
    <div class="domain-label">
      <span class="domain-name"> People</span>
      <span class="domain-percent">33%</span>
    </div>
    <div class="domain-track">
      <div class="domain-fill" style="width: 33%;"></div>
    </div>
  </div>
  <div class="domain-bar">
    <div class="domain-label">
      <span class="domain-name"> Process</span>
      <span class="domain-percent">41%</span>
    </div>
    <div class="domain-track">
      <div class="domain-fill" style="width: 41%;"></div>
    </div>
  </div>
  <div class="domain-bar">
    <div class="domain-label">
      <span class="domain-name"> Business Environment</span>
      <span class="domain-percent">26%</span>
    </div>
    <div class="domain-track">
      <div class="domain-fill" style="width: 26%;"></div>
    </div>
  </div>
  <p class="domain-note"> <strong>Key Change:</strong> Business Environment increased from 8% to 26%, reflecting the strategic role of project managers</p>
</div>

### Domain Task Breakdown

| Domain | Key Tasks Tested |
|--------|------------------|
| **People (33%)** | • Develop a common vision<br>• Manage conflicts<br>• Lead the project team<br>• Engage stakeholders<br>• Align stakeholder expectations<br>• Manage stakeholder expectations<br>• Help ensure knowledge transfer<br>• Plan and manage communication |
| **Process (41%)** | • Develop an integrated project management plan and plan delivery<br>• Develop and manage project scope<br>• Help ensure value-based delivery<br>• Plan and manage resources<br>• Plan and manage procurement<br>• Plan and manage finance<br>• Plan and optimize quality of products/deliverables<br>• Plan and manage schedule<br>• Evaluate project status<br>• Manage project closure |
| **Business Environment (26%)** | • Define and establish project governance<br>• Plan and manage project compliance<br>• Manage and control changes<br>• Remove impediments and manage issues<br>• Plan and manage risk<br>• Continuous improvement<br>• Support organizational change<br>• Evaluate external business environment changes |

## How to Use This Guide

<div class="steps-section">
  <div class="steps-grid">
    <div class="step-card">
      <div class="step-number">1</div>
      <div class="step-content">
        <h4>Start with Chapter 1</h4>
        <p>Understand the exam format, structure, and core project management concepts before diving into domain-specific content.</p>
      </div>
    </div>
    <div class="step-card">
      <div class="step-number">2</div>
      <div class="step-content">
        <h4>Progress Through Each Chapter</h4>
        <p>Work through Chapters 2-9 sequentially for comprehensive coverage of all exam topics across all three domains.</p>
      </div>
    </div>
    <div class="step-card">
      <div class="step-number">3</div>
      <div class="step-content">
        <h4>Test Your Knowledge</h4>
        <p>Use the knowledge checks at the end of each section to validate your understanding and identify areas for review.</p>
      </div>
    </div>

  </div>
</div>

<div class="cta-section">
  <h2 class="cta-title">Ready to Pass the PMP Exam?</h2>
  <p class="cta-text">Start your journey to becoming a certified Project Management Professional today.</p>
  <a :href="withBase('/guide/01-introduction/understanding-exam')" class="cta-button">
    Begin Chapter 1 →
  </a>
</div>

<div class="support-section">
  <div class="support-content">
    <span class="support-heart">💜</span>
    <h3 class="support-title">Enjoying This Free Resource?</h3>
    <p class="support-text">This study guide is free and always will be. If it's helping you on your PMP journey, consider buying me a coffee to keep the content updated and accessible to everyone.</p>
    <BuyMeCoffee />
  </div>
</div>

</div>
