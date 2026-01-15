<template>
  <div class="audio-player">
    <span class="audio-label">🎧 Listen to this chapter:</span>
    <audio controls :src="audioSrc">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /**
   * Chapter number (e.g., 1, 2, 3)
   */
  chapter: {
    type: [Number, String],
    required: true
  },
  /**
   * Optional custom label
   */
  label: {
    type: String,
    default: 'Listen to this chapter:'
  }
})

// Naming convention: /audio/ch{XX}-{section}.mp3
// For chapter index pages: ch01-introduction.mp3, ch02-introduction.mp3
const audioSrc = computed(() => {
  const chapterNum = String(props.chapter).padStart(2, '0')
  return `/audio/ch${chapterNum}-introduction.mp3`
})
</script>

<style scoped>
.audio-player {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.audio-label {
  font-weight: 500;
  white-space: nowrap;
}

.audio-player audio {
  flex: 1;
  max-width: 300px;
}

@media (max-width: 640px) {
  .audio-player {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .audio-player audio {
    width: 100%;
    max-width: none;
  }
}
</style>
