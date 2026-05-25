<template>
  <div
    class="cert-card bento-card bento-card--compact"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    ref="cardEl"
    @click.stop="handleClick"
  >
    <div :class="['cert-icon', iconClass]">
      <i :class="icon"></i>
    </div>
    <div class="cert-info">
      <h3>{{ title }}</h3>
      <span class="cert-issuer"><i class="fas fa-building"></i> {{ issuer }}</span>
    </div>
    <a v-if="verifyUrl" :href="verifyUrl" target="_blank" rel="noopener" class="cert-verify" @click.stop>
      <i class="fas fa-external-link-alt"></i> {{ $t('certifications.verify') }}
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  icon: { type: String, required: true },
  iconClass: { type: String, default: '' },
  verifyUrl: { type: String, default: null }
})

const cardEl = ref(null)

function handleClick() {
  if (props.verifyUrl) {
    window.open(props.verifyUrl, '_blank', 'noopener')
  }
}

function handleMouseMove(e) {
  if (!cardEl.value) return
  const rect = cardEl.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 20
  const rotateY = (centerX - x) / 20
  cardEl.value.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
}

function handleMouseLeave() {
  if (!cardEl.value) return
  cardEl.value.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
}
</script>

<style scoped>
.cert-card {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 340px;
  max-width: 400px;
  cursor: pointer;
  transition: transform 0.2s ease, border-color var(--transition), box-shadow var(--transition);
  flex-shrink: 0;
}

.cert-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
  transition: var(--transition);
}

.cert-icon.docker     { background: rgba(0, 145, 228, 0.1); color: #0091e4; }
.cert-icon.kubernetes,
.cert-icon.gke        { background: rgba(50, 108, 229, 0.1); color: #326ce5; }
.cert-icon.devsecops  { background: rgba(0, 212, 255, 0.1); color: var(--accent); }
.cert-icon.iso        { background: rgba(0, 230, 118, 0.1); color: #00e676; }
.cert-icon.gcp        { background: rgba(66, 133, 244, 0.1); color: #4285f4; }
.cert-icon.aws        { background: rgba(255, 153, 0, 0.1); color: #ff9900; }
.cert-icon.google-it  { background: rgba(52, 168, 83, 0.1); color: #34a853; }

.cert-card:hover .cert-icon {
  transform: scale(1.08);
}

.cert-info {
  flex: 1;
  min-width: 0;
}

.cert-info h3 {
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cert-issuer {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cert-issuer i {
  margin-right: 4px;
  font-size: 0.7rem;
}

.cert-verify {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--accent);
  opacity: 0;
  transition: var(--transition-fast);
  flex-shrink: 0;
  white-space: nowrap;
}

.cert-card:hover .cert-verify {
  opacity: 1;
}

/* Mobile grid layout adjustments */
@media (max-width: 768px) {
  .cert-card {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }

  .cert-verify {
    opacity: 1;
  }

  .cert-info h3 {
    white-space: normal;
  }
}
</style>
