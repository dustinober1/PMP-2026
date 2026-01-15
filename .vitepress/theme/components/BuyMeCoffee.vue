<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default', // 'default' | 'minimal'
  }
})

const loaded = ref(false)

onMounted(() => {
  // Only load the script once globally
  if (typeof window !== 'undefined' && !document.querySelector('script[data-name="bmc-button"]')) {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js'
    script.setAttribute('data-name', 'bmc-button')
    script.setAttribute('data-slug', 'dustinober')
    script.setAttribute('data-color', '#40DCA5')
    script.setAttribute('data-emoji', '')
    script.setAttribute('data-font', 'Cookie')
    script.setAttribute('data-text', 'Buy me a coffee')
    script.setAttribute('data-outline-color', '#000000')
    script.setAttribute('data-font-color', '#ffffff')
    script.setAttribute('data-coffee-color', '#FFDD00')
    script.onload = () => {
      loaded.value = true
    }
    document.body.appendChild(script)
  } else {
    loaded.value = true
  }
})
</script>

<template>
  <div class="bmc-container" :class="variant">
    <div v-if="variant === 'minimal'" class="bmc-minimal">
      <a 
        href="https://www.buymeacoffee.com/dustinober" 
        target="_blank" 
        rel="noopener noreferrer"
        class="bmc-link"
      >
        <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" 
          alt="Buy Me A Coffee" 
          class="bmc-img"
        />
      </a>
    </div>
    <div v-else class="bmc-default">
      <a 
        href="https://www.buymeacoffee.com/dustinober" 
        target="_blank" 
        rel="noopener noreferrer"
        class="bmc-button-custom"
      >
        <span class="bmc-icon">☕</span>
        <span class="bmc-text">Buy me a coffee</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.bmc-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.bmc-minimal .bmc-img {
  height: 40px;
  width: auto;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.bmc-minimal .bmc-img:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(64, 220, 165, 0.3);
}

.bmc-button-custom {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #40DCA5, #32b992);
  color: #fff;
  font-family: 'Cookie', cursive, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  text-decoration: none;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(64, 220, 165, 0.25);
}

.bmc-button-custom:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(64, 220, 165, 0.4);
  background: linear-gradient(135deg, #4de8b5, #40DCA5);
}

.bmc-icon {
  font-size: 1.25rem;
}

.bmc-text {
  letter-spacing: 0.5px;
}
</style>
