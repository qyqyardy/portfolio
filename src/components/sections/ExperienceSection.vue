<template>
  <section class="section" id="experience">
    <div class="container">
      <SectionHeader
        icon="fas fa-briefcase"
        :tag="$t('experience.tag')"
        :title="$t('experience.title')"
        :highlight="$t('experience.titleHighlight')"
      />
      <div class="exp-bento">
        <TimelineCard
          v-for="(exp, index) in experiences"
          :key="exp.id"
          :role="exp.role"
          :company="exp.company"
          :period="exp.period"
          :icon="exp.icon"
          :isCurrent="exp.isCurrent || false"
          :details="exp.details"
          :tags="exp.tags"
          :class="{ 'exp-featured': exp.isCurrent }"
          data-aos="fade-up"
          :data-aos-delay="(index % 4) * 80"
        />
        <!-- Education -->
        <TimelineCard
          :role="education.degree"
          :company="education.school"
          :period="education.period"
          icon="fa-graduation-cap"
          :isEducation="true"
          data-aos="fade-up"
          :data-aos-delay="300"
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
.exp-bento {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--bento-gap);
  max-width: 1000px;
  margin: 0 auto;
}

.exp-featured {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .exp-bento {
    grid-template-columns: 1fr;
  }

  .exp-featured {
    grid-column: span 1;
  }
}
</style>
