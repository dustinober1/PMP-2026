<template>
  <div class="flashcard-grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.flashcard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}
</style>
