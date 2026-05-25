<template>
  <section class="section" id="projects">
    <div class="container">
      <SectionHeader
        icon="fas fa-project-diagram"
        :tag="$t('projects.tag')"
        :title="$t('projects.title')"
        :highlight="$t('projects.titleHighlight')"
      />
      <div class="projects-bento">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :title="$t(`projects.items.${project.id}.title`)"
          :description="$t(`projects.items.${project.id}.description`)"
          :icon="project.icon"
          :colorClass="project.colorClass"
          :impact="project.impact"
          :tags="project.tags"
          :featured="index === 0"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../ui/SectionHeader.vue'
import ProjectCard from '../ui/ProjectCard.vue'
import { projects } from '../../data/projects'
</script>

<style scoped>
.projects-bento {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--bento-gap);
}

@media (max-width: 768px) {
  .projects-bento {
    grid-template-columns: 1fr;
  }
}
</style>
