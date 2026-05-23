<template>
  <span ref="counterEl" class="animated-counter gradient-text">0</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  target: { type: Number, required: true },
  duration: { type: Number, default: 2000 }
})

const counterEl = ref(null)
let animated = false
let observer = null

function animateCount() {
  if (animated || !counterEl.value) return
  animated = true

  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    if (counterEl.value) {
      counterEl.value.textContent = Math.round(eased * props.target)
    }

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  if (!counterEl.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateCount()
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.5 }
  )

  observer.observe(counterEl.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.animated-counter {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
}
</style>
