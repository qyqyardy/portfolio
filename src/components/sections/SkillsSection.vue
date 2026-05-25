<template>
  <section class="section section--alt" id="skills">
    <div class="container">
      <SectionHeader
        icon="fas fa-code"
        :tag="$t('skills.tag')"
        :title="$t('skills.title')"
        :highlight="$t('skills.titleHighlight')"
      />
      <div class="skills-bento">
        <div
          v-for="(cat, index) in skillCategories"
          :key="cat.id"
          class="bento-card bento-card--gradient-border skill-bento-card"
          :class="getSkillSize(index)"
          data-aos="fade-up"
          :data-aos-delay="(index % 4) * 80"
        >
          <div class="skill-category-header">
            <div class="skill-icon-wrap">
              <i :class="cat.icon"></i>
            </div>
            <h3>{{ cat.title }}</h3>
          </div>
          <div class="skill-badges">
            <SkillBadge
              v-for="skill in cat.skills"
              :key="skill.name"
              :name="skill.name"
              :icon="skill.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../ui/SectionHeader.vue'
import SkillBadge from '../ui/SkillBadge.vue'
import { skillCategories } from '../../data/skills'

// Assign asymmetric sizes for visual variety
function getSkillSize(index) {
  const sizes = [
    'skill--md',   // OS & Virtualization (5 skills)
    'skill--sm',   // Cloud (3 skills)
    'skill--sm',   // Containers (3 skills)
    'skill--md',   // IaC (2 skills)
    'skill--md',   // CI/CD (3 skills)
    'skill--sm',   // Monitoring (4 skills)
    'skill--sm',   // Security (3 skills)
    'skill--sm',   // Databases (2 skills)
    'skill--md',   // Scripting (2 skills)
  ]
  return sizes[index] || 'skill--sm'
}
</script>

<style scoped>
.skills-bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--bento-gap);
}

/* Size variants */
.skill--md {
  /* Default 1 column */
}

.skill--sm {
  /* Default 1 column */
}

/* Bento card styling */
.skill-bento-card {
  position: relative;
}

.skill-bento-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-accent);
  border-radius: var(--bento-radius) var(--bento-radius) 0 0;
  opacity: 0;
  transition: opacity var(--transition);
}

.skill-bento-card:hover::after {
  opacity: 1;
}

.skill-category-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.skill-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: rgba(var(--accent-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--accent);
  flex-shrink: 0;
  transition: var(--transition);
}

.skill-bento-card:hover .skill-icon-wrap {
  background: var(--gradient-accent);
  color: #fff;
  box-shadow: 0 4px 15px rgba(var(--accent-rgb), 0.3);
}

.skill-category-header h3 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 1024px) {
  .skills-bento {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .skills-bento {
    grid-template-columns: 1fr;
  }
}
</style>
