<template>
  <div class="flashcard" :class="{ flipped: isFlipped }" @click="toggleFlip">
    <div class="flashcard-inner">
      <div class="flashcard-front">
        <slot name="front">{{ front }}</slot>
        <div class="hint-icon">↻</div>
      </div>
      <div class="flashcard-back">
        <slot name="back">{{ back }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  front: {
    type: String,
    default: ''
  },
  back: {
    type: String,
    default: ''
  }
})

const isFlipped = ref(false)

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<style scoped>
.flashcard {
  background-color: transparent;
  width: 100%;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
}

.flashcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
}

.flashcard.flipped .flashcard-inner {
  transform: rotateY(180deg);
}

.flashcard-front, .flashcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-border);
}

.flashcard-front {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-weight: 700;
  font-size: 1.2rem;
}

.flashcard-back {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-text-1);
  transform: rotateY(180deg);
  font-size: 1rem;
  line-height: 1.6;
}

.hint-icon {
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-size: 1.2rem;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.flashcard:hover .hint-icon {
  opacity: 1;
}
</style>
