<template>
  <section class="section section--alt" id="skills">
    <div class="container">
      <SectionHeader
        icon="fas fa-code"
        :tag="$t('skills.tag')"
        :title="$t('skills.title')"
        :highlight="$t('skills.titleHighlight')"
      />
      <div class="skills-grid">
        <div
          v-for="(cat, index) in skillCategories"
          :key="cat.id"
          class="skill-category glass-card"
          data-aos="fade-up"
          :data-aos-delay="(index % 3) * 100"
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
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.skill-category {
  padding: 28px;
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
}

.skill-category::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-accent);
  opacity: 0;
  transition: var(--transition);
}

.skill-category:hover::after {
  opacity: 1;
}

.skill-category-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.skill-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: rgba(var(--accent-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--accent);
  flex-shrink: 0;
  transition: var(--transition);
}

.skill-category:hover .skill-icon-wrap {
  background: var(--gradient-accent);
  color: #fff;
  box-shadow: 0 4px 15px rgba(var(--accent-rgb), 0.3);
}

.skill-category h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
