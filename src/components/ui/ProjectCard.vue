<template>
  <div class="project-card bento-card" :class="{ 'project-card--featured': featured }" data-aos="fade-up">
    <div class="project-color-bar" :class="colorClass"></div>
    <div class="project-header">
      <div :class="['project-icon', colorClass]">
        <i :class="icon"></i>
      </div>
      <div v-if="impact" class="project-impact">
        <i class="fas fa-chart-line"></i>
        <span>{{ impact }}</span>
      </div>
    </div>
    <h3 class="project-title">{{ title }}</h3>
    <p class="project-desc">{{ description }}</p>
    <div class="project-tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  colorClass: { type: String, default: 'cyan' },
  impact: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  featured: { type: Boolean, default: false }
})
</script>

<style scoped>
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
}

.project-color-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: var(--bento-radius) var(--bento-radius) 0 0;
  opacity: 0;
  transition: opacity var(--transition);
}

.project-card:hover .project-color-bar {
  opacity: 1;
}

.project-color-bar.cyan   { background: linear-gradient(90deg, #00d4ff, #0080ff); }
.project-color-bar.blue   { background: linear-gradient(90deg, #0080ff, #4285f4); }
.project-color-bar.green  { background: linear-gradient(90deg, #00e676, #00bcd4); }
.project-color-bar.purple { background: linear-gradient(90deg, #6c3fff, #a855f7); }

.project-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 18px;
}

.project-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  transition: var(--transition);
}

.project-icon.cyan   { background: rgba(0, 212, 255, 0.1); color: #00d4ff; }
.project-icon.blue   { background: rgba(66, 133, 244, 0.1); color: #4285f4; }
.project-icon.green  { background: rgba(0, 230, 118, 0.1); color: #00e676; }
.project-icon.purple { background: rgba(108, 63, 255, 0.1); color: #6c3fff; }

.project-card:hover .project-icon {
  transform: scale(1.1);
}

.project-impact {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: rgba(var(--accent-rgb), 0.06);
  border: 1px solid rgba(var(--accent-rgb), 0.1);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
}

.project-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
  line-height: 1.3;
}

.project-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* Featured variant */
.project-card--featured {
  grid-column: span 2;
  background: linear-gradient(135deg, var(--bento-card-bg), rgba(var(--accent-rgb), 0.02));
  border-color: rgba(var(--accent-rgb), 0.1);
}

.project-card--featured .project-title {
  font-size: 1.3rem;
}

.project-card--featured .project-icon {
  width: 60px;
  height: 60px;
  font-size: 1.6rem;
}

@media (max-width: 768px) {
  .project-card--featured {
    grid-column: span 1;
  }

  .project-card--featured .project-title {
    font-size: 1.1rem;
  }
}
</style>
