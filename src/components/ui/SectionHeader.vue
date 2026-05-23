<template>
  <div class="section-header" data-aos="fade-up">
    <span class="section-tag">
      <i :class="icon"></i> {{ tag }}
    </span>
    <h2 class="section-title">
      {{ title }}<br>
      <span class="gradient-text">{{ highlight }}</span>
    </h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  tag: { type: String, required: true },
  title: { type: String, required: true },
  highlight: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 16px auto 0;
  line-height: 1.8;
}
</style>
