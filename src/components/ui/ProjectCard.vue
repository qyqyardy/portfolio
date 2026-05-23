<template>
  <div class="project-card glass-card" data-aos="fade-up">
    <div :class="['project-icon', colorClass]">
      <i :class="icon"></i>
    </div>
    <h3 class="project-title">{{ title }}</h3>
    <p class="project-desc">{{ description }}</p>
    <div class="project-impact">
      <i class="fas fa-chart-line"></i>
      <span>{{ impact }}</span>
    </div>
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
  tags: { type: Array, default: () => [] }
})
</script>

<style scoped>
.project-card {
  padding: 32px;
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
}

.project-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 3px 3px 0 0;
  opacity: 0;
  transition: var(--transition);
}

.project-card:hover::after {
  opacity: 1;
}

.project-card:has(.cyan)::after { background: linear-gradient(90deg, #00d4ff, #0080ff); }
.project-card:has(.blue)::after { background: linear-gradient(90deg, #0080ff, #4285f4); }
.project-card:has(.green)::after { background: linear-gradient(90deg, #00e676, #00bcd4); }
.project-card:has(.purple)::after { background: linear-gradient(90deg, #6c3fff, #a855f7); }

.project-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  transition: var(--transition);
}

.project-icon.cyan { background: rgba(0, 212, 255, 0.12); color: #00d4ff; }
.project-icon.blue { background: rgba(66, 133, 244, 0.12); color: #4285f4; }
.project-icon.green { background: rgba(0, 230, 118, 0.12); color: #00e676; }
.project-icon.purple { background: rgba(108, 63, 255, 0.12); color: #6c3fff; }

.project-card:hover .project-icon {
  transform: scale(1.1);
}

.project-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.project-impact {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.12);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 16px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
