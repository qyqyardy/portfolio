<template>
  <section class="section" id="experience">
    <div class="container">
      <SectionHeader
        icon="fas fa-briefcase"
        :tag="$t('experience.tag')"
        :title="$t('experience.title')"
        :highlight="$t('experience.titleHighlight')"
      />
      <div class="timeline">
        <TimelineCard
          v-for="exp in experiences"
          :key="exp.id"
          :role="exp.role"
          :company="exp.company"
          :period="exp.period"
          :icon="exp.icon"
          :isCurrent="exp.isCurrent || false"
          :details="exp.details"
          :tags="exp.tags"
        />
        <!-- Education -->
        <TimelineCard
          :role="education.degree"
          :company="education.school"
          :period="education.period"
          icon="fa-graduation-cap"
          :isEducation="true"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../ui/SectionHeader.vue'
import TimelineCard from '../ui/TimelineCard.vue'
import { experiences, education } from '../../data/experience'
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 60px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 23px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--accent), rgba(var(--accent-rgb), 0.1));
  border-radius: 2px;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 50px;
  }

  .timeline::before {
    left: 18px;
  }
}
</style>
