<template>
  <section class="section section--alt" id="about">
    <div class="container">
      <SectionHeader
        icon="fas fa-user"
        :tag="$t('about.tag')"
        :title="$t('about.title')"
        :highlight="$t('about.titleHighlight')"
      />
      <div class="about-bento">
        <!-- Avatar Card with Image -->
        <div class="bento-card bento-card--gradient-border about-avatar-bento" data-aos="fade-up" data-aos-delay="0">
          <div class="avatar-image-wrapper">
            <img :src="avatarImage" alt="Lazwardi Rizki Assidiq" class="avatar-image" />
            <div class="avatar-glow"></div>
          </div>
          <div class="avatar-orbit-icons">
            <div class="orbit-icon oi-1"><i class="fab fa-docker"></i></div>
            <div class="orbit-icon oi-2"><i class="fab fa-aws"></i></div>
            <div class="orbit-icon oi-3"><i class="fab fa-google"></i></div>
            <div class="orbit-icon oi-4"><i class="fab fa-linux"></i></div>
          </div>
        </div>

        <!-- About Text Card -->
        <div class="bento-card about-text-bento" data-aos="fade-up" data-aos-delay="100">
          <p class="about-text">
            {{ $t('about.description1', {
              role: $t('about.role'),
              years: $t('about.years'),
              cloud: $t('about.cloud'),
              containers: $t('about.containers'),
              iac: $t('about.iac'),
              sre: $t('about.sre')
            }) }}
          </p>
          <p class="about-text">
            {{ $t('about.description2', {
              hybrid: $t('about.hybrid'),
              iso: $t('about.iso'),
              zero: $t('about.zero'),
              percent: $t('about.percent')
            }) }}
          </p>
          <p class="about-text about-text--last">
            {{ $t('about.description3', { remote: $t('about.remote') }) }}
          </p>
        </div>

        <!-- Small info cards -->
        <div class="bento-card bento-card--compact about-info-bento" data-aos="fade-up" data-aos-delay="150">
          <i class="fas fa-map-marker-alt"></i>
          <span>{{ $t('about.location') }}</span>
        </div>

        <div class="bento-card bento-card--compact about-info-bento" data-aos="fade-up" data-aos-delay="200">
          <i class="fas fa-language"></i>
          <span>{{ $t('about.languages') }}</span>
        </div>

        <div class="bento-card bento-card--compact about-info-bento" data-aos="fade-up" data-aos-delay="250">
          <i class="fas fa-globe"></i>
          <span>{{ $t('about.remoteReady') }}</span>
        </div>

        <!-- Highlights Grid Card -->
        <div class="bento-card about-highlights-bento" data-aos="fade-up" data-aos-delay="200">
          <div class="about-highlights">
            <div class="highlight-item" v-for="(h, i) in highlights" :key="i">
              <div class="highlight-icon"><i :class="h.icon"></i></div>
              <div>
                <strong>{{ $t(h.titleKey) }}</strong>
                <span>{{ $t(h.subKey) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Language Proficiency Card -->
        <div class="bento-card about-lang-bento" data-aos="fade-up" data-aos-delay="250">
          <h4 class="lang-title">
            <i class="fas fa-language"></i> {{ $t('about.langProficiency.title') }}
          </h4>
          <div class="lang-items">
            <div class="lang-item">
              <div class="lang-meta">
                <span class="lang-name">{{ $t('about.langProficiency.english') }}</span>
                <span class="lang-level">{{ $t('about.langProficiency.englishLevel') }}</span>
              </div>
              <div class="lang-bar"><div class="lang-bar__fill lang-bar__fill--animated" data-width="70"></div></div>
            </div>
            <div class="lang-item">
              <div class="lang-meta">
                <span class="lang-name">{{ $t('about.langProficiency.indonesian') }}</span>
                <span class="lang-level">{{ $t('about.langProficiency.indonesianLevel') }}</span>
              </div>
              <div class="lang-bar"><div class="lang-bar__fill lang-bar__fill--animated" data-width="100"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import SectionHeader from '../ui/SectionHeader.vue'
import avatarImage from '../../assets/about-avatar.png'

const highlights = [
  { icon: 'fas fa-cloud', titleKey: 'about.highlights.cloud', subKey: 'about.highlights.cloudSub' },
  { icon: 'fas fa-dharmachakra', titleKey: 'about.highlights.container', subKey: 'about.highlights.containerSub' },
  { icon: 'fas fa-shield-alt', titleKey: 'about.highlights.security', subKey: 'about.highlights.securitySub' },
  { icon: 'fas fa-rocket', titleKey: 'about.highlights.cicd', subKey: 'about.highlights.cicdSub' }
]

// Animate language bars when visible
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.lang-bar__fill--animated')
        bars.forEach(bar => {
          bar.style.width = bar.dataset.width + '%'
        })
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })

  const langSection = document.querySelector('.about-lang-bento')
  if (langSection) observer.observe(langSection)
})
</script>

<style scoped>
/* Bento Grid Layout */
.about-bento {
  display: grid;
  grid-template-columns: 340px 1fr;
  grid-template-rows: auto auto auto auto;
  gap: var(--bento-gap);
}

/* Avatar card — top left, spans 2 rows */
.about-avatar-bento {
  grid-column: 1;
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 360px;
  position: relative;
}

/* Avatar Image */
.avatar-image-wrapper {
  position: relative;
  width: 220px;
  height: 220px;
  z-index: 2;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  border-radius: 50%;
  border: 3px solid rgba(var(--accent-rgb), 0.25);
  box-shadow: 0 0 40px rgba(var(--accent-rgb), 0.15),
              0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  filter: brightness(1.05) contrast(1.05);
}

.avatar-glow {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  background: var(--gradient-accent);
  opacity: 0.12;
  filter: blur(20px);
  z-index: 1;
  animation: glow-pulse 3s ease-in-out infinite;
}

/* Orbit tech icons around avatar */
.avatar-orbit-icons {
  position: absolute;
  width: 280px;
  height: 280px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: orbit-spin 25s linear infinite;
}

.orbit-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--bento-card-bg);
  border: 1px solid var(--bento-card-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--accent);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.oi-1 { top: 0; left: 50%; transform: translateX(-50%); animation: ocs1 25s linear infinite; }
.oi-2 { top: 50%; right: 0; transform: translateY(-50%); animation: ocs2 25s linear infinite; }
.oi-3 { bottom: 0; left: 50%; transform: translateX(-50%); animation: ocs3 25s linear infinite; }
.oi-4 { top: 50%; left: 0; transform: translateY(-50%); animation: ocs4 25s linear infinite; }

@keyframes ocs1 { from { transform: translateX(-50%) rotate(0deg); } to { transform: translateX(-50%) rotate(-360deg); } }
@keyframes ocs2 { from { transform: translateY(-50%) rotate(0deg); } to { transform: translateY(-50%) rotate(-360deg); } }
@keyframes ocs3 { from { transform: translateX(-50%) rotate(0deg); } to { transform: translateX(-50%) rotate(-360deg); } }
@keyframes ocs4 { from { transform: translateY(-50%) rotate(0deg); } to { transform: translateY(-50%) rotate(-360deg); } }

/* Text card */
.about-text-bento {
  grid-column: 2;
  grid-row: 1 / 2;
}

/* Info cards */
.about-info-bento {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.about-info-bento i {
  color: var(--accent);
  font-size: 1rem;
  width: 20px;
  text-align: center;
}

.about-info-bento:nth-of-type(3) {
  grid-column: 2;
  grid-row: 2 / 3;
}

/* Highlights card — full width */
.about-highlights-bento {
  grid-column: 1 / -1;
}

/* Language card — full width */
.about-lang-bento {
  grid-column: 1 / -1;
}

/* Text */
.about-text {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.8;
}

.about-text--last {
  margin-bottom: 0;
}

/* Highlights */
.about-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border-radius: var(--radius-md);
  background: rgba(var(--accent-rgb), 0.03);
  border: 1px solid rgba(var(--accent-rgb), 0.06);
  transition: var(--transition);
}

.highlight-item:hover {
  background: rgba(var(--accent-rgb), 0.06);
  border-color: rgba(var(--accent-rgb), 0.12);
  transform: translateY(-2px);
}

.highlight-icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-sm);
  background: rgba(var(--accent-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--accent);
  flex-shrink: 0;
  transition: var(--transition);
}

.highlight-item:hover .highlight-icon {
  background: var(--gradient-accent);
  color: #fff;
  box-shadow: 0 4px 12px rgba(var(--accent-rgb), 0.3);
}

.highlight-item strong {
  display: block;
  font-size: 0.85rem;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.highlight-item span {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* Language Proficiency */
.lang-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-title i {
  color: var(--accent);
}

.lang-items {
  display: flex;
  gap: 24px;
}

.lang-item {
  flex: 1;
}

.lang-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.lang-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.lang-level {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.lang-bar {
  height: 4px;
  background: rgba(var(--accent-rgb), 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.lang-bar__fill {
  height: 100%;
  background: var(--gradient-accent);
  border-radius: 4px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.lang-bar__fill--animated {
  width: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-bento {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

  .about-avatar-bento {
    grid-column: 1 / -1;
    grid-row: auto;
    min-height: auto;
    padding: 40px;
  }

  .about-text-bento {
    grid-column: 1 / -1;
  }

  .about-info-bento:nth-of-type(3) {
    grid-column: auto;
    grid-row: auto;
  }

  .about-highlights {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .about-bento {
    grid-template-columns: 1fr;
  }

  .avatar-image-wrapper {
    width: 160px;
    height: 160px;
  }

  .avatar-orbit-icons {
    width: 230px;
    height: 230px;
  }

  .orbit-icon {
    width: 34px;
    height: 34px;
    font-size: 0.85rem;
    border-radius: 10px;
  }

  .about-highlights {
    grid-template-columns: 1fr;
  }

  .lang-items {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
