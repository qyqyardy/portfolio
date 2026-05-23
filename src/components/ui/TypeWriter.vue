<template>
  <span class="typewriter">
    <span ref="textEl" class="typewriter__text"></span>
    <span class="typewriter__cursor">|</span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  texts: { type: Array, required: true },
  speed: { type: Number, default: 80 },
  deleteSpeed: { type: Number, default: 40 },
  pauseTime: { type: Number, default: 2000 }
})

const textEl = ref(null)
let textIndex = 0
let charIndex = 0
let isDeleting = false
let timeoutId = null

function type() {
  if (!textEl.value) return
  const currentText = props.texts[textIndex]

  if (isDeleting) {
    textEl.value.textContent = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    textEl.value.textContent = currentText.substring(0, charIndex + 1)
    charIndex++
  }

  let timeout = isDeleting ? props.deleteSpeed : props.speed

  if (!isDeleting && charIndex === currentText.length) {
    timeout = props.pauseTime
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % props.texts.length
    timeout = 400
  }

  timeoutId = setTimeout(type, timeout)
}

onMounted(() => {
  type()
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<style scoped>
.typewriter {
  display: inline;
}

.typewriter__cursor {
  display: inline-block;
  animation: blink 1s infinite;
  font-weight: 300;
  margin-left: 2px;
}
</style>
