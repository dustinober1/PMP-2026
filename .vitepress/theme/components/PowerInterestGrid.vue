<template>
  <div class="pi-wrapper">
    <div class="y-label"><span>Power</span></div>
    <div class="pi-grid">
      <!-- High Power, Low Interest -->
      <div class="quadrant satisfied">
        <div class="q-header">
          <span class="q-title">Keep Satisfied</span>
          <span class="q-subtitle">High Power, Low Interest</span>
        </div>
        <div class="q-content">
          <slot name="satisfy"></slot>
        </div>
      </div>

      <!-- High Power, High Interest -->
      <div class="quadrant manage">
        <div class="q-header">
          <span class="q-title">Manage Closely</span>
          <span class="q-subtitle">High Power, High Interest</span>
        </div>
        <div class="q-content">
          <slot name="manage"></slot>
        </div>
      </div>

      <!-- Low Power, Low Interest -->
      <div class="quadrant monitor">
        <div class="q-header">
          <span class="q-title">Monitor</span>
          <span class="q-subtitle">Low Power, Low Interest</span>
        </div>
        <div class="q-content">
          <slot name="monitor"></slot>
        </div>
      </div>

      <!-- Low Power, High Interest -->
      <div class="quadrant informed">
        <div class="q-header">
          <span class="q-title">Keep Informed</span>
          <span class="q-subtitle">Low Power, High Interest</span>
        </div>
        <div class="q-content">
          <slot name="inform"></slot>
        </div>
      </div>
    </div>
    <div class="x-label">Interest</div>
  </div>
</template>

<style scoped>
.pi-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  gap: 0.5rem;
  margin: 2rem 0;
  font-family: var(--vp-font-family-base);
}

.y-label {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
}

.x-label {
  grid-column: 2;
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  padding-top: 0.5rem;
  letter-spacing: 2px;
}

.pi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2px;
  background-color: var(--vp-c-border);
  border: 2px solid var(--vp-c-border);
  border-radius: 8px;
  overflow: hidden;
}

.quadrant {
  background-color: var(--vp-c-bg-soft);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.quadrant:hover {
  background-color: var(--vp-c-bg-mute);
}

.q-header {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-border);
}

.q-title {
  display: block;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.manage .q-title { color: #dc2626; } /* Red */
.satisfy .q-title { color: #d97706; } /* Amber */
.informed .q-title { color: #2563eb; } /* Blue */
.monitor .q-title { color: #4b5563; } /* Gray */

.q-subtitle {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  font-weight: 600;
}

.q-content {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}

@media (max-width: 640px) {
  .pi-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  
  .y-label, .x-label {
    display: none;
  }

  .pi-wrapper {
    display: block;
  }
}
</style>
