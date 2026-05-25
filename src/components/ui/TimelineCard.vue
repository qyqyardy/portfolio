<template>
  <div class="exp-card bento-card bento-card--gradient-border" :class="{ 'exp-card--current': isCurrent, 'exp-card--education': isEducation }" @click="toggleExpand">
    <div class="exp-card-header">
      <div class="exp-icon" :class="{ current: isCurrent, education: isEducation }">
        <i :class="`fas ${icon}`"></i>
      </div>
      <div class="exp-meta">
        <div v-if="isCurrent" class="exp-badge current-badge">{{ $t('experience.current') }}</div>
        <div v-if="isEducation" class="exp-badge education-badge">{{ $t('experience.education') }}</div>
        <h3 class="exp-role">{{ role }}</h3>
        <h4 class="exp-company">
          <i :class="isEducation ? 'fas fa-university' : 'fas fa-building'"></i> {{ company }}
        </h4>
        <span class="exp-period"><i class="far fa-calendar-alt"></i> {{ period }}</span>
      </div>
      <div v-if="details && details.length" class="exp-expand-icon" :class="{ rotated: expanded }">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>

    <!-- Tags always visible -->
    <div v-if="tags && tags.length" class="exp-tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>

    <!-- Expandable details -->
    <transition name="expand">
      <div v-if="expanded && details && details.length" class="exp-details">
        <ul>
          <li v-for="(detail, i) in details" :key="i">
            <i class="fas fa-chevron-right"></i>
            <span>{{ detail }}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  icon: { type: String, default: 'fa-briefcase' },
  isCurrent: { type: Boolean, default: false },
  isEducation: { type: Boolean, default: false },
  details: { type: Array, default: () => [] },
  tags: { type: Array, default: () => [] }
})

const expanded = ref(props.isCurrent)

function toggleExpand() {
  if (props.details && props.details.length) {
    expanded.value = !expanded.value
  }
}
</script>

<style scoped>
.exp-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.exp-card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.exp-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--accent);
  flex-shrink: 0;
  transition: var(--transition);
}

.exp-icon.current {
  background: var(--gradient-accent);
  border: none;
  color: #fff;
  box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.3);
}

.exp-icon.education {
  background: linear-gradient(135deg, #6c3fff, #a855f7);
  border: none;
  color: #fff;
  box-shadow: 0 0 20px rgba(108, 63, 255, 0.3);
}

.exp-card:hover .exp-icon:not(.current):not(.education) {
  background: var(--gradient-accent);
  border: none;
  color: #fff;
}

.exp-meta {
  flex: 1;
  min-width: 0;
}

.exp-badge {
  display: inline-block;
  padding: 3px 12px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 50px;
  margin-bottom: 8px;
}

.current-badge {
  background: rgba(var(--accent-rgb), 0.12);
  color: var(--accent);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
}

.education-badge {
  background: rgba(108, 63, 255, 0.12);
  color: #a855f7;
  border: 1px solid rgba(108, 63, 255, 0.2);
}

.exp-role {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
  line-height: 1.3;
}

.exp-company {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.exp-company i {
  font-size: 0.8rem;
}

.exp-period {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

.exp-period i {
  color: var(--accent);
  font-size: 0.75rem;
}

.exp-expand-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(var(--accent-rgb), 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: var(--text-muted);
  transition: var(--transition);
  flex-shrink: 0;
  margin-top: 4px;
}

.exp-expand-icon.rotated {
  transform: rotate(180deg);
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.12);
}

/* Tags */
.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

/* Details */
.exp-details {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(var(--accent-rgb), 0.06);
}

.exp-details ul {
  list-style: none;
}

.exp-details li {
  font-size: 0.88rem;
  color: var(--text-secondary);
  padding: 5px 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.6;
}

.exp-details li i {
  color: var(--accent);
  font-size: 0.55rem;
  margin-top: 8px;
  flex-shrink: 0;
}

/* Card states */
.exp-card--current {
  border-color: rgba(var(--accent-rgb), 0.15);
  background: linear-gradient(135deg, var(--bento-card-bg), rgba(var(--accent-rgb), 0.03));
}

.exp-card--education {
  border-color: rgba(108, 63, 255, 0.12);
}

.exp-card--education:hover {
  border-color: rgba(108, 63, 255, 0.25);
  box-shadow: 0 0 40px rgba(108, 63, 255, 0.06), 0 8px 32px rgba(0, 0, 0, 0.3);
}

.exp-card--education .exp-company {
  color: #a855f7;
}

/* Expand/collapse transition */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
  padding-top: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}

@media (max-width: 768px) {
  .exp-role {
    font-size: 1rem;
  }
}
</style>
