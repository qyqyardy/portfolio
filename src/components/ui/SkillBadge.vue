<template>
  <div class="skill-badge">
    <i :class="icon"></i> {{ name }}
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  icon: { type: String, required: true }
})
</script>

<style scoped>
.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 50px;
  transition: var(--transition);
}

.skill-badge i {
  color: var(--accent);
  font-size: 0.9rem;
}

.skill-badge:hover {
  background: rgba(var(--accent-rgb), 0.08);
  border-color: rgba(var(--accent-rgb), 0.2);
  color: var(--text-primary);
  transform: translateY(-2px);
}
</style>
