<template>
  <div class="concept-grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}
</style>
