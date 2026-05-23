<template>
  <section class="section section--alt" id="certifications">
    <div class="container">
      <SectionHeader
        icon="fas fa-award"
        :tag="$t('certifications.tag')"
        :title="$t('certifications.title')"
        :highlight="$t('certifications.titleHighlight')"
      />
      <div class="cert-grid">
        <CertCard
          v-for="(cert, index) in certifications"
          :key="cert.id"
          :title="cert.title"
          :issuer="cert.issuer"
          :icon="cert.icon"
          :iconClass="cert.iconClass"
          :verifyUrl="cert.verifyUrl"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../ui/SectionHeader.vue'
import CertCard from '../ui/CertCard.vue'
import { certifications } from '../../data/certifications'
</script>

<style scoped>
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>
