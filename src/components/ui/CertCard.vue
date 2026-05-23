<template>
  <div class="cert-card glass-card" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" ref="cardEl">
    <div :class="['cert-icon', iconClass]">
      <i :class="icon"></i>
    </div>
    <h3>{{ title }}</h3>
    <span class="cert-issuer"><i class="fas fa-building"></i> {{ issuer }}</span>
    <a v-if="verifyUrl" :href="verifyUrl" target="_blank" rel="noopener" class="cert-verify">
      <i class="fas fa-external-link-alt"></i> {{ $t('certifications.verify') }}
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  icon: { type: String, required: true },
  iconClass: { type: String, default: '' },
  verifyUrl: { type: String, default: null }
})

const cardEl = ref(null)

function handleMouseMove(e) {
  if (!cardEl.value) return
  const rect = cardEl.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 15
  const rotateY = (centerX - x) / 15
  cardEl.value.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
}

function handleMouseLeave() {
  if (!cardEl.value) return
  cardEl.value.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
}
</script>

<style scoped>
.cert-card {
  padding: 32px 28px;
  text-align: center;
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.cert-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-card);
  opacity: 0;
  transition: var(--transition);
}

.cert-card:hover::before {
  opacity: 1;
}

.cert-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto 20px;
  position: relative;
  transition: var(--transition);
}

.cert-icon.docker { background: rgba(0, 145, 228, 0.12); color: #0091e4; }
.cert-icon.kubernetes, .cert-icon.gke { background: rgba(50, 108, 229, 0.12); color: #326ce5; }
.cert-icon.devsecops { background: rgba(0, 212, 255, 0.12); color: var(--accent); }
.cert-icon.iso { background: rgba(0, 230, 118, 0.12); color: #00e676; }
.cert-icon.gcp { background: rgba(66, 133, 244, 0.12); color: #4285f4; }
.cert-icon.aws { background: rgba(255, 153, 0, 0.12); color: #ff9900; }
.cert-icon.google-it { background: rgba(52, 168, 83, 0.12); color: #34a853; }

.cert-card:hover .cert-icon {
  transform: scale(1.1);
}

.cert-card h3 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  position: relative;
  line-height: 1.4;
}

.cert-issuer {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  position: relative;
  display: block;
}

.cert-issuer i {
  margin-right: 4px;
}

.cert-verify {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
  margin-top: 12px;
  position: relative;
  opacity: 0.7;
  transition: var(--transition-fast);
}

.cert-verify:hover {
  opacity: 1;
}
</style>
