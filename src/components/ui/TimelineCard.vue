<template>
  <div class="timeline-item" data-aos="fade-up" data-aos-duration="600">
    <div class="timeline-marker">
      <div class="marker-dot" :class="{ current: isCurrent, 'education-dot': isEducation }">
        <i :class="`fas ${icon}`"></i>
      </div>
    </div>
    <div class="timeline-card glass-card" :class="{ 'education-card': isEducation }">
      <div v-if="isCurrent" class="timeline-badge current-badge">{{ $t('experience.current') }}</div>
      <div v-if="isEducation" class="timeline-badge education-badge">{{ $t('experience.education') }}</div>
      <div class="timeline-date">
        <i class="far fa-calendar-alt"></i> {{ period }}
      </div>
      <h3 class="timeline-role">{{ role }}</h3>
      <h4 class="timeline-company">
        <i :class="isEducation ? 'fas fa-university' : 'fas fa-building'"></i> {{ company }}
      </h4>
      <ul v-if="details && details.length" class="timeline-details">
        <li v-for="(detail, i) in details" :key="i">
          <i class="fas fa-chevron-right"></i>
          <span>{{ detail }}</span>
        </li>
      </ul>
      <div v-if="tags && tags.length" class="timeline-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  icon: { type: String, default: 'fa-briefcase' },
  isCurrent: { type: Boolean, default: false },
  isEducation: { type: Boolean, default: false },
  details: { type: Array, default: () => [] },
  tags: { type: Array, default: () => [] }
})
</script>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -60px;
  top: 28px;
  z-index: 2;
}

.marker-dot {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid rgba(var(--accent-rgb), 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: var(--accent);
  transition: var(--transition);
}

.marker-dot.current {
  background: var(--gradient-accent);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.4);
}

.marker-dot.education-dot {
  background: linear-gradient(135deg, #6c3fff, #a855f7);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 0 20px rgba(108, 63, 255, 0.4);
}

.timeline-card {
  padding: 28px 32px;
  position: relative;
  overflow: hidden;
}

.timeline-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: var(--gradient-accent);
  border-radius: 3px;
  opacity: 0;
  transition: var(--transition);
}

.timeline-card:hover::before {
  opacity: 1;
}

.timeline-badge {
  display: inline-block;
  padding: 4px 14px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 50px;
  margin-bottom: 12px;
}

.current-badge {
  background: rgba(var(--accent-rgb), 0.15);
  color: var(--accent);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
}

.education-badge {
  background: rgba(108, 63, 255, 0.15);
  color: #a855f7;
  border: 1px solid rgba(108, 63, 255, 0.2);
}

.timeline-date {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 8px;
  font-weight: 500;
}

.timeline-date i {
  margin-right: 6px;
  color: var(--accent);
}

.timeline-role {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.timeline-company {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 16px;
}

.timeline-company i {
  margin-right: 6px;
  font-size: 0.85rem;
}

.timeline-details {
  margin-bottom: 16px;
  list-style: none;
}

.timeline-details li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: 4px 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.timeline-details li i {
  color: var(--accent);
  font-size: 0.6rem;
  margin-top: 7px;
  flex-shrink: 0;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.education-card {
  border-color: rgba(108, 63, 255, 0.15);
}

.education-card:hover {
  border-color: rgba(108, 63, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 40px rgba(108, 63, 255, 0.1);
}

.education-card .timeline-company {
  color: #a855f7;
}

@media (max-width: 768px) {
  .timeline-marker {
    left: -50px;
  }

  .marker-dot {
    width: 38px;
    height: 38px;
    font-size: 0.75rem;
  }

  .timeline-card {
    padding: 24px 20px;
  }

  .timeline-role {
    font-size: 1.1rem;
  }
}
</style>
