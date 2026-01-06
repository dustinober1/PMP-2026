<template>
  <div class="flashcard-carousel">
    <!-- Progress Indicator -->
    <div class="carousel-header">
      <div class="progress-indicator">
        <span class="current">{{ currentIndex + 1 }}</span>
        <span class="separator">/</span>
        <span class="total">{{ totalCards }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>

    <!-- Flashcard Display -->
    <div class="carousel-content">
      <transition :name="transitionName" mode="out-in">
        <div :key="currentIndex" class="card-wrapper">
          <div class="flashcard" :class="{ flipped: isFlipped }" @click="toggleFlip">
            <div class="flashcard-inner">
              <div class="flashcard-front">
                <slot :name="`front-${currentIndex}`">
                  {{ cards[currentIndex]?.front }}
                </slot>
                <div class="hint-icon">↻</div>
              </div>
              <div class="flashcard-back">
                <slot :name="`back-${currentIndex}`">
                  {{ cards[currentIndex]?.back }}
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Navigation Controls -->
    <div class="carousel-controls">
      <button 
        class="nav-button prev" 
        @click="previousCard" 
        :disabled="currentIndex === 0"
        aria-label="Previous flashcard"
      >
        <span class="arrow">←</span>
        <span class="label">Previous</span>
      </button>
      
      <button 
        class="reset-button" 
        @click="resetFlip"
        aria-label="Reset card flip"
        v-if="isFlipped"
      >
        Reset
      </button>

      <button 
        class="nav-button next" 
        @click="nextCard" 
        :disabled="currentIndex === totalCards - 1"
        aria-label="Next flashcard"
      >
        <span class="label">Next</span>
        <span class="arrow">→</span>
      </button>
    </div>

    <!-- Keyboard Navigation Hint -->
    <div class="keyboard-hint">
      Use ← → arrow keys to navigate
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  cards: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(0)
const isFlipped = ref(false)
const transitionName = ref('slide-left')

const totalCards = computed(() => props.cards.length)
const progressPercentage = computed(() => ((currentIndex.value + 1) / totalCards.value) * 100)

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}

const resetFlip = () => {
  isFlipped.value = false
}

const nextCard = () => {
  if (currentIndex.value < totalCards.value - 1) {
    transitionName.value = 'slide-left'
    currentIndex.value++
    isFlipped.value = false
  }
}

const previousCard = () => {
  if (currentIndex.value > 0) {
    transitionName.value = 'slide-right'
    currentIndex.value--
    isFlipped.value = false
  }
}

const handleKeydown = (event) => {
  if (event.key === 'ArrowRight') {
    nextCard()
  } else if (event.key === 'ArrowLeft') {
    previousCard()
  } else if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault()
    toggleFlip()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// Reset flip state when card changes
watch(currentIndex, () => {
  isFlipped.value = false
})
</script>

<style scoped>
.flashcard-carousel {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-border);
}

/* Progress Header */
.carousel-header {
  margin-bottom: 1.5rem;
}

.progress-indicator {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.75rem;
}

.progress-indicator .current {
  color: var(--vp-c-brand);
  font-size: 1.3rem;
}

.progress-indicator .separator {
  margin: 0 0.5rem;
  color: var(--vp-c-text-3);
}

.progress-indicator .total {
  color: var(--vp-c-text-2);
}

.progress-bar {
  height: 6px;
  background: var(--vp-c-bg);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand), var(--vp-c-brand-light));
  transition: width 0.3s ease;
  border-radius: 3px;
}

/* Carousel Content */
.carousel-content {
  position: relative;
  min-height: 350px;
  margin-bottom: 1.5rem;
}

.card-wrapper {
  width: 100%;
}

/* Flashcard Styles */
.flashcard {
  background-color: transparent;
  width: 100%;
  height: 350px;
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
  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
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
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 2px solid var(--vp-c-border);
}

.flashcard-front {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6;
}

.flashcard-back {
  background: linear-gradient(135deg, var(--vp-c-brand-soft), var(--vp-c-brand-softer));
  color: var(--vp-c-text-1);
  transform: rotateY(180deg);
  font-size: 1.05rem;
  line-height: 1.7;
}

.hint-icon {
  position: absolute;
  bottom: 15px;
  right: 20px;
  font-size: 1.5rem;
  opacity: 0.4;
  transition: opacity 0.3s;
}

.flashcard:hover .hint-icon {
  opacity: 0.8;
}

/* Navigation Controls */
.carousel-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.nav-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover:not(:disabled) {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.nav-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nav-button .arrow {
  font-size: 1.2rem;
}

.reset-button {
  padding: 0.75rem 1.25rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-button:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand);
}

/* Keyboard Hint */
.keyboard-hint {
  text-align: center;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  font-style: italic;
}

/* Transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .flashcard-carousel {
    padding: 1rem;
  }

  .flashcard {
    height: 300px;
  }

  .flashcard-front {
    font-size: 1.1rem;
    padding: 1.5rem;
  }

  .flashcard-back {
    font-size: 0.95rem;
    padding: 1.5rem;
  }

  .nav-button .label {
    display: none;
  }

  .nav-button {
    padding: 0.75rem 1rem;
  }
}
</style>
