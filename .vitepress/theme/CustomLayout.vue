<script setup>
import DefaultTheme from 'vitepress/theme'
import BuyMeCoffee from './components/BuyMeCoffee.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <div class="custom-footer-support">
        <div class="footer-support-content">
          <span class="footer-support-text">Enjoying this free study guide?</span>
          <BuyMeCoffee variant="minimal" />
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
.custom-footer-support {
  margin-top: 3rem;
  padding: 1.5rem;
  border-top: 1px dashed var(--vp-c-divider);
  text-align: center;
}

.footer-support-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.footer-support-text {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

@media (min-width: 640px) {
  .footer-support-content {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
