<template>
  <section class="section section--alt" id="about">
    <div class="container">
      <SectionHeader
        icon="fas fa-user"
        :tag="$t('about.tag')"
        :title="$t('about.title')"
        :highlight="$t('about.titleHighlight')"
      />
      <div class="about-grid">
        <div class="about-visual" data-aos="fade-right" data-aos-duration="800">
          <div class="about-avatar-card">
            <div class="avatar-icon-wrapper">
              <i class="fas fa-server"></i>
            </div>
            <div class="avatar-orbit">
              <div class="orbit-item orbit-1"><i class="fab fa-docker"></i></div>
              <div class="orbit-item orbit-2"><i class="fab fa-aws"></i></div>
              <div class="orbit-item orbit-3"><i class="fab fa-google"></i></div>
              <div class="orbit-item orbit-4"><i class="fab fa-linux"></i></div>
            </div>
          </div>
          <div class="about-info-cards">
            <div class="info-card glass-card">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ $t('about.location') }}</span>
            </div>
            <div class="info-card glass-card">
              <i class="fas fa-language"></i>
              <span>{{ $t('about.languages') }}</span>
            </div>
            <div class="info-card glass-card">
              <i class="fas fa-globe"></i>
              <span>{{ $t('about.remoteReady') }}</span>
            </div>
          </div>
        </div>
        <div class="about-content" data-aos="fade-left" data-aos-duration="800">
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
          <p class="about-text">
            {{ $t('about.description3', { remote: $t('about.remote') }) }}
          </p>
          <div class="about-highlights">
            <div class="highlight-item glass-card">
              <i class="fas fa-cloud"></i>
              <div>
                <strong>{{ $t('about.highlights.cloud') }}</strong>
                <span>{{ $t('about.highlights.cloudSub') }}</span>
              </div>
            </div>
            <div class="highlight-item glass-card">
              <i class="fas fa-dharmachakra"></i>
              <div>
                <strong>{{ $t('about.highlights.container') }}</strong>
                <span>{{ $t('about.highlights.containerSub') }}</span>
              </div>
            </div>
            <div class="highlight-item glass-card">
              <i class="fas fa-shield-alt"></i>
              <div>
                <strong>{{ $t('about.highlights.security') }}</strong>
                <span>{{ $t('about.highlights.securitySub') }}</span>
              </div>
            </div>
            <div class="highlight-item glass-card">
              <i class="fas fa-rocket"></i>
              <div>
                <strong>{{ $t('about.highlights.cicd') }}</strong>
                <span>{{ $t('about.highlights.cicdSub') }}</span>
              </div>
            </div>
          </div>

          <!-- Language Proficiency -->
          <div class="lang-proficiency" data-aos="fade-up">
            <h4 class="lang-proficiency__title">
              <i class="fas fa-language"></i> {{ $t('about.langProficiency.title') }}
            </h4>
            <div class="lang-proficiency__items">
              <div class="lang-item glass-card">
                <span class="lang-name">{{ $t('about.langProficiency.english') }}</span>
                <span class="lang-level">{{ $t('about.langProficiency.englishLevel') }}</span>
                <div class="lang-bar"><div class="lang-bar__fill" style="width: 70%"></div></div>
              </div>
              <div class="lang-item glass-card">
                <span class="lang-name">{{ $t('about.langProficiency.indonesian') }}</span>
                <span class="lang-level">{{ $t('about.langProficiency.indonesianLevel') }}</span>
                <div class="lang-bar"><div class="lang-bar__fill" style="width: 100%"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../ui/SectionHeader.vue'
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: center;
}

/* Avatar & Orbit */
.about-avatar-card {
  position: relative;
  width: 260px;
  height: 260px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-icon-wrapper {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: var(--gradient-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: #fff;
  box-shadow: 0 0 60px rgba(var(--accent-rgb), 0.25);
  position: relative;
  z-index: 2;
}

.avatar-orbit {
  position: absolute;
  inset: 0;
  animation: orbit-spin 20s linear infinite;
}

.orbit-item {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--accent);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.orbit-1 { top: 0; left: 50%; transform: translateX(-50%); animation: ocs1 20s linear infinite; }
.orbit-2 { top: 50%; right: 0; transform: translateY(-50%); animation: ocs2 20s linear infinite; }
.orbit-3 { bottom: 0; left: 50%; transform: translateX(-50%); animation: ocs3 20s linear infinite; }
.orbit-4 { top: 50%; left: 0; transform: translateY(-50%); animation: ocs4 20s linear infinite; }

@keyframes ocs1 { from { transform: translateX(-50%) rotate(0deg); } to { transform: translateX(-50%) rotate(-360deg); } }
@keyframes ocs2 { from { transform: translateY(-50%) rotate(0deg); } to { transform: translateY(-50%) rotate(-360deg); } }
@keyframes ocs3 { from { transform: translateX(-50%) rotate(0deg); } to { transform: translateX(-50%) rotate(-360deg); } }
@keyframes ocs4 { from { transform: translateY(-50%) rotate(0deg); } to { transform: translateY(-50%) rotate(-360deg); } }

/* Info Cards */
.about-info-cards {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: var(--radius-md);
}

.info-card i {
  color: var(--accent);
  font-size: 0.9rem;
}

.info-card:hover {
  transform: translateY(-2px);
}

/* Text Content */
.about-text {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.8;
}

/* Highlights */
.about-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 32px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: var(--radius-md);
}

.highlight-item i {
  font-size: 1.5rem;
  color: var(--accent);
  flex-shrink: 0;
}

.highlight-item strong {
  display: block;
  font-size: 0.9rem;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.highlight-item span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.highlight-item:hover {
  transform: translateY(-3px);
}

/* Language Proficiency */
.lang-proficiency {
  margin-top: 32px;
}

.lang-proficiency__title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-proficiency__title i {
  color: var(--accent);
}

.lang-proficiency__items {
  display: flex;
  gap: 12px;
}

.lang-item {
  flex: 1;
  padding: 16px 20px;
  border-radius: var(--radius-md);
}

.lang-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.lang-level {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 8px;
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
  transition: width 1s ease;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .about-visual {
    order: -1;
  }
}

@media (max-width: 768px) {
  .about-highlights {
    grid-template-columns: 1fr;
  }

  .about-avatar-card {
    width: 200px;
    height: 200px;
  }

  .avatar-icon-wrapper {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }

  .orbit-item {
    width: 38px;
    height: 38px;
    font-size: 0.9rem;
  }

  .lang-proficiency__items {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .about-info-cards {
    flex-direction: column;
    align-items: center;
  }
}
</style>
