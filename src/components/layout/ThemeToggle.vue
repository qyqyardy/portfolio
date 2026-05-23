<template>
  <button class="theme-toggle" @click="toggleTheme" :title="theme === 'dark' ? $t('theme.light') : $t('theme.dark')">
    <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
  </button>
</template>

<script setup>
import { useTheme } from '../../composables/useTheme'
const { theme, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.15);
  color: var(--accent);
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  background: rgba(var(--accent-rgb), 0.15);
  border-color: var(--accent);
  transform: translateY(-1px) rotate(15deg);
}
</style>
