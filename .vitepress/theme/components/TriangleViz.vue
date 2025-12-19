<template>
  <div class="triangle-wrapper">
    <div class="controls">
      <button 
        @click="mode = 'predictive'" 
        :class="{ active: mode === 'predictive' }"
        class="mode-btn"
      >
        Predictive (Waterfall)
      </button>
      <button 
        @click="mode = 'agile'" 
        :class="{ active: mode === 'agile' }"
        class="mode-btn"
      >
        Agile (Adaptive)
      </button>
    </div>

    <div class="viz-container" :class="mode">
      <div class="triangle">
        <div class="side bottom"></div>
        <div class="side left"></div>
        <div class="side right"></div>
        
        <div class="label top">
          <span class="icon" v-if="mode === 'predictive'">🔒</span>
          <span class="icon" v-else>🔄</span>
          {{ mode === 'predictive' ? 'Scope' : 'Scope' }}
          <span class="sub">{{ mode === 'predictive' ? '(Fixed)' : '(Estimated/Flexible)' }}</span>
        </div>
        
        <div class="label left-corner">
          <span class="icon" v-if="mode === 'predictive'">🔄</span>
          <span class="icon" v-else>🔒</span>
          Cost
          <span class="sub">{{ mode === 'predictive' ? '(Estimated)' : '(Fixed)' }}</span>
        </div>
        
        <div class="label right-corner">
          <span class="icon" v-if="mode === 'predictive'">🔄</span>
          <span class="icon" v-else>🔒</span>
          Time
          <span class="sub">{{ mode === 'predictive' ? '(Estimated)' : '(Fixed)' }}</span>
        </div>

        <div class="center-content">
          <div class="main-text">{{ mode === 'predictive' ? 'Plan-Driven' : 'Value-Driven' }}</div>
          <div class="desc">
            {{ mode === 'predictive' 
              ? 'Scope is defined first. Time and Cost are estimated to meet it.' 
              : 'Time and Cost are fixed. Scope varies to deliver highest value.' 
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mode = ref('predictive')
</script>

<style scoped>
.triangle-wrapper {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  background: var(--vp-c-bg-mute);
  padding: 0.5rem;
  border-radius: 8px;
}

.mode-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.mode-btn:hover {
  color: var(--vp-c-text-1);
}

.mode-btn.active {
  background: var(--vp-c-bg);
  color: var(--vp-c-brand);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.viz-container {
  width: 100%;
  max-width: 400px;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
}

.triangle {
  position: relative;
  width: 300px;
  height: 260px;
}

/* Triangle shape using borders would be tricky with labels, utilizing SVG approach logic with divs */
.side {
  position: absolute;
  background: var(--vp-c-brand);
  opacity: 0.1;
  transition: all 0.5s ease;
}

/* Simplified visual representation: A triangle outline */
.triangle::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 260px solid var(--vp-c-border);
  z-index: 0;
}

.triangle::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 146px solid transparent;
  border-right: 146px solid transparent;
  border-bottom: 254px solid var(--vp-c-bg-soft);
  z-index: 0;
}

/* Labels */
.label {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  z-index: 2;
  transition: all 0.3s ease;
  text-align: center;
  background: var(--vp-c-bg-soft);
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-width: 120px;
}

.top {
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.left-corner {
  bottom: -20px;
  left: -40px;
}

.right-corner {
  bottom: -20px;
  right: -40px;
}

.sub {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--vp-c-text-2);
  margin-top: 0.2rem;
}

.icon {
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
}

.center-content {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 200px;
  z-index: 2;
}

.main-text {
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.desc {
  font-size: 0.8rem;
  line-height: 1.4;
  color: var(--vp-c-text-2);
}

/* Transitions for Agile mode */
.viz-container.agile .label.top {
  /* color: var(--vp-c-text-2); */
}

.viz-container.agile .triangle::before {
  border-bottom-color: var(--vp-c-brand);
  opacity: 0.2;
}

</style>
