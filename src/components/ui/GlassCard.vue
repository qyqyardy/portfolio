<template>
  <div class="glass-card" :class="{ 'glass-card--no-hover': noHover }">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  noHover: { type: Boolean, default: false }
})
</script>

<style scoped>
.glass-card--no-hover:hover {
  transform: none;
  box-shadow: var(--glass-shadow);
  border-color: var(--glass-border);
}
</style>
