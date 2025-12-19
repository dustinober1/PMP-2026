<template>
  <div class="concept-card">
    <div class="concept-title">{{ title }}</div>
    <div class="concept-description">
      <slot></slot>
    </div>
    <a v-if="link" :href="link" class="concept-link">{{ linkText || 'Learn more →' }}</a>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },
  linkText: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.concept-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.concept-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-mute);
}

.concept-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--vp-c-brand);
}

.concept-description {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.concept-link {
  font-weight: 600;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: auto;
}
</style>
