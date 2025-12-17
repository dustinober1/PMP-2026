<template>
  <div class="progress-container">
    <div class="progress-bar">
      <div
        class="progress-fill"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
    <span v-if="showLabel" class="progress-label">
      {{ Math.round(progress) }}%
    </span>
  </div>
</template>

<script setup>
defineProps({
  progress: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100
  },
  showLabel: {
    type: Boolean,
    default: true
  },
  height: {
    type: String,
    default: '8px'
  }
})
</script>

<style scoped>
.progress-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.progress-bar {
  flex: 1;
  height: v-bind(height);
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background-color: var(--color-5);
  transition: width 0.3s ease;
  border-radius: 4px;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.progress-label {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  font-weight: 500;
  min-width: 40px;
  text-align: right;
}

/* Dark mode adjustments */
.dark .progress-bar {
  background-color: #374151;
}

.dark .progress-label {
  color: var(--vp-c-text-3);
}
</style>