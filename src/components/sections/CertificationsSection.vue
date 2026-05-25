<template>
  <section class="section section--alt" id="certifications">
    <div class="container">
      <SectionHeader
        icon="fas fa-award"
        :tag="$t('certifications.tag')"
        :title="$t('certifications.title')"
        :highlight="$t('certifications.titleHighlight')"
      />
    </div>
    <!-- Marquee container (full width, no container constraint) -->
    <div class="cert-marquee-wrapper" @mouseenter="paused = true" @mouseleave="paused = false">
      <div class="cert-marquee" :class="{ paused }">
        <div class="cert-marquee-track">
          <CertCard
            v-for="cert in certifications"
            :key="'a-' + cert.id"
            :title="cert.title"
            :issuer="cert.issuer"
            :icon="cert.icon"
            :iconClass="cert.iconClass"
            :verifyUrl="cert.verifyUrl"
          />
          <!-- Duplicate for seamless loop -->
          <CertCard
            v-for="cert in certifications"
            :key="'b-' + cert.id"
            :title="cert.title"
            :issuer="cert.issuer"
            :icon="cert.icon"
            :iconClass="cert.iconClass"
            :verifyUrl="cert.verifyUrl"
          />
        </div>
      </div>
    </div>
    <!-- Mobile fallback grid -->
    <div class="container cert-grid-mobile">
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
import { ref } from 'vue'
import SectionHeader from '../ui/SectionHeader.vue'
import CertCard from '../ui/CertCard.vue'
import { certifications } from '../../data/certifications'

const paused = ref(false)
</script>

<style scoped>
/* Marquee wrapper */
.cert-marquee-wrapper {
  overflow: hidden;
  padding: 8px 0;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}

.cert-marquee {
  width: 100%;
}

.cert-marquee-track {
  display: flex;
  gap: 16px;
  width: max-content;
  animation: marquee-scroll 50s linear infinite;
}

.cert-marquee.paused .cert-marquee-track {
  animation-play-state: paused;
}

/* Mobile fallback grid */
.cert-grid-mobile {
  display: none;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--bento-gap);
}

@media (max-width: 768px) {
  .cert-marquee-wrapper {
    display: none;
  }

  .cert-grid-mobile {
    display: block;
    margin-top: 8px;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>
