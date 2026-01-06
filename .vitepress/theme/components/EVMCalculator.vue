<script setup>
import { ref, computed } from 'vue'

const bac = ref(500000)
const pv = ref(200000)
const ev = ref(180000)
const ac = ref(210000)

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
}

const formatNumber = (value) => {
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)
}

const cv = computed(() => ev.value - ac.value)
const sv = computed(() => ev.value - pv.value)
const cpi = computed(() => ac.value === 0 ? 0 : ev.value / ac.value)
const spi = computed(() => pv.value === 0 ? 0 : ev.value / pv.value)
const eac = computed(() => cpi.value === 0 ? bac.value : bac.value / cpi.value)
const vac = computed(() => bac.value - eac.value)

const getStatusColor = (value, isIndex = false) => {
  const threshold = isIndex ? 1.0 : 0
  if (value < threshold) return 'text-red-500' // Bad
  if (value === threshold) return 'text-gray-500' // Neutral
  return 'text-green-500' // Good
}

const getStatusClass = (value, isIndex = false) => {
    const threshold = isIndex ? 1.0 : 0;
    return value < threshold ? 'status-bad' : 'status-good';
}

</script>

<template>
  <div class="evm-calculator">
    <h3>EVM Calculator</h3>
    <p class="description">Experiment with the values below to see how they affect project performance metrics.</p>

    <div class="inputs-grid">
      <div class="input-group">
        <label>Budget at Completion (BAC)</label>
        <input type="number" v-model="bac" />
      </div>
      <div class="input-group">
        <label>Planned Value (PV)</label>
        <input type="number" v-model="pv" />
      </div>
      <div class="input-group">
        <label>Earned Value (EV)</label>
        <input type="number" v-model="ev" />
      </div>
      <div class="input-group">
        <label>Actual Cost (AC)</label>
        <input type="number" v-model="ac" />
      </div>
    </div>

    <div class="results-grid">
      <div class="result-card" :class="getStatusClass(cv, false)">
        <div class="label">Cost Variance (CV)</div>
        <div class="value">{{ formatCurrency(cv) }}</div>
        <div class="sub-text">{{ cv < 0 ? 'Over Budget' : 'Under Budget' }}</div>
      </div>
      
      <div class="result-card" :class="getStatusClass(sv, false)">
        <div class="label">Schedule Variance (SV)</div>
        <div class="value">{{ formatCurrency(sv) }}</div>
        <div class="sub-text">{{ sv < 0 ? 'Behind Schedule' : 'Ahead of Schedule' }}</div>
      </div>

      <div class="result-card" :class="getStatusClass(cpi, true)">
        <div class="label">CPI</div>
        <div class="value">{{ formatNumber(cpi) }}</div>
        <div class="sub-text">{{ cpi < 1 ? 'Inefficient' : 'Efficient' }}</div>
      </div>

      <div class="result-card" :class="getStatusClass(spi, true)">
        <div class="label">SPI</div>
        <div class="value">{{ formatNumber(spi) }}</div>
        <div class="sub-text">{{ spi < 1 ? 'Slow Progress' : 'Fast Progress' }}</div>
      </div>

      <div class="result-card neutral">
        <div class="label">Est. at Completion (EAC)</div>
        <div class="value">{{ formatCurrency(eac) }}</div>
        <div class="sub-text">Projected Final Cost</div>
      </div>

      <div class="result-card" :class="getStatusClass(vac, false)">
        <div class="label">Variance at Completion (VAC)</div>
        <div class="value">{{ formatCurrency(vac) }}</div>
        <div class="sub-text">{{ vac < 0 ? 'Projected Overrun' : 'Projected Savings' }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.evm-calculator {
  background: var(--organic-rice-paper);
  border: 1px solid var(--organic-timber);
  border-radius: 1.5rem;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 20px var(--vp-c-shadow-lighter);
}

.description {
  margin-bottom: 2rem;
  color: var(--vp-c-text-2);
}

.inputs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--organic-moss-dark);
}

.input-group input {
  padding: 0.75rem;
  border: 1px solid var(--organic-timber);
  border-radius: 0.5rem;
  background: white;
  font-family: var(--vp-font-family-base);
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.result-card {
  padding: 1rem;
  border-radius: 1rem;
  background: var(--organic-stone-light);
  border: 1px solid transparent;
  text-align: center;
}

.result-card.status-bad {
  background: rgba(168, 84, 72, 0.08); /* danger bg */
  border-color: rgba(168, 84, 72, 0.2);
}

.result-card.status-good {
  background: rgba(93, 112, 82, 0.08); /* moss bg */
  border-color: rgba(93, 112, 82, 0.2);
}

.result-card.neutral {
  background: var(--organic-sand-light);
  border-color: var(--organic-timber);
}

.label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.value {
  font-size: 1.25rem;
  font-weight: 700;
  font-family: var(--vp-font-family-heading);
  color: var(--organic-loam);
  margin-bottom: 0.25rem;
}

.status-bad .value {
  color: var(--organic-burnt-sienna);
}

.status-good .value {
  color: var(--organic-moss-dark);
}

.sub-text {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}
</style>
