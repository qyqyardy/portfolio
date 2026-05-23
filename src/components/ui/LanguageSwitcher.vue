<template>
  <button class="lang-switcher" @click="toggleLocale" :title="currentLabel">
    <i class="fas fa-globe"></i>
    <span class="lang-switcher__label">{{ currentFlag }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentFlag = computed(() => locale.value === 'en' ? 'EN' : 'ID')
const currentLabel = computed(() => locale.value === 'en' ? 'Switch to Indonesian' : 'Ganti ke English')

function toggleLocale() {
  const newLocale = locale.value === 'en' ? 'id' : 'en'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}
</script>

<style scoped>
.lang-switcher {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.15);
  border-radius: 50px;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 600;
  font-family: var(--font-primary);
  cursor: pointer;
  transition: var(--transition);
}

.lang-switcher:hover {
  background: rgba(var(--accent-rgb), 0.15);
  border-color: var(--accent);
  transform: translateY(-1px);
}

.lang-switcher i {
  font-size: 0.85rem;
}
</style>
