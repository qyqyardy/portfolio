<template>
  <section class="hero" id="hero">
    <div class="hero-mesh"></div>
    <div class="hero-overlay"></div>

    <!-- Floating tech icons background -->
    <div class="hero-floating-icons">
      <div class="floating-icon fi-1"><i class="fab fa-docker"></i></div>
      <div class="floating-icon fi-2"><i class="fab fa-aws"></i></div>
      <div class="floating-icon fi-3"><i class="fas fa-dharmachakra"></i></div>
      <div class="floating-icon fi-4"><i class="fab fa-google"></i></div>
      <div class="floating-icon fi-5"><i class="fab fa-linux"></i></div>
      <div class="floating-icon fi-6"><i class="fas fa-cloud"></i></div>
      <div class="floating-icon fi-7"><i class="fas fa-terminal"></i></div>
      <div class="floating-icon fi-8"><i class="fas fa-shield-alt"></i></div>
    </div>

    <div class="hero-content">
      <div class="hero-bento">
        <!-- Main intro card -->
        <div class="bento-card bento-card--gradient-border hero-intro" data-aos="fade-up" data-aos-duration="800">
          <div class="hero-badge">
            <i class="fas fa-circle status-dot"></i> {{ $t('hero.available') }}
          </div>
          <h1 class="hero-name">
            <span class="greeting">{{ $t('hero.greeting') }}</span>
            <span class="typed-wrapper gradient-text">
              <TypeWriter :texts="[$t('hero.name')]" :speed="70" :deleteSpeed="50" :pauseTime="4000" />
            </span>
          </h1>
          <div class="hero-titles">
            <TypeWriter :texts="$tm('hero.titles')" :speed="60" :deleteSpeed="30" :pauseTime="2500" />
          </div>
          <p class="hero-description">{{ $t('hero.description') }}</p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn--primary" @click.prevent="scrollTo('projects')">
              <i class="fas fa-briefcase"></i> {{ $t('hero.viewWork') }}
            </a>
            <a :href="cvUrl" class="btn btn--outline" :download="cvFileName">
              <i class="fas fa-download"></i> {{ $t('hero.downloadCv') }}
            </a>
          </div>
        </div>

        <!-- Right column — Stats only -->
        <div class="hero-side">
          <!-- Status card -->
          <div class="bento-card hero-status-card" data-aos="fade-up" data-aos-delay="200">
            <div class="status-icon-wrap">
              <i class="fas fa-satellite-dish"></i>
            </div>
            <h3 class="status-title">{{ $t('hero.available') }}</h3>
            <div class="status-indicator">
              <span class="status-ping"></span>
              <span class="status-text">Online</span>
            </div>
          </div>

          <!-- Stats card -->
          <div class="bento-card hero-stats-card" data-aos="fade-up" data-aos-delay="300">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-value">
                  <AnimatedCounter :target="10" /><span class="stat-plus gradient-text">+</span>
                </div>
                <span class="stat-label">{{ $t('hero.stats.years') }}</span>
              </div>
              <div class="stat-item">
                <div class="stat-value">
                  <AnimatedCounter :target="12" /><span class="stat-plus gradient-text">+</span>
                </div>
                <span class="stat-label">{{ $t('hero.stats.certs') }}</span>
              </div>
              <div class="stat-item stat-item--wide">
                <div class="stat-value">
                  <AnimatedCounter :target="95" /><span class="stat-plus gradient-text">%</span>
                </div>
                <span class="stat-label">{{ $t('hero.stats.deploy') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="600">
        <span>{{ $t('hero.scrollDown') }}</span>
        <div class="scroll-arrow">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import TypeWriter from '../ui/TypeWriter.vue'
import AnimatedCounter from '../ui/AnimatedCounter.vue'

const cvUrl = '/Lazwardi-Rizki-Assidiq-CV.pdf'
const cvFileName = 'Lazwardi Rizki Assidiq - CV.pdf'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
  }
}

// Parallax effect
function handleScroll() {
  const content = document.querySelector('.hero-content')
  const icons = document.querySelector('.hero-floating-icons')
  if (content) {
    const scrolled = window.scrollY
    if (scrolled < window.innerHeight) {
      content.style.transform = `translateY(${scrolled * 0.12}px)`
      content.style.opacity = 1 - scrolled / (window.innerHeight * 0.8)
      if (icons) {
        icons.style.transform = `translateY(${scrolled * 0.25}px)`
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 120px 24px 80px;
}

/* CSS Gradient Mesh */
.hero-mesh {
  position: absolute;
  inset: -50%;
  z-index: 0;
  background:
    radial-gradient(ellipse 800px 800px at 20% 30%, var(--mesh-color-1), transparent),
    radial-gradient(ellipse 600px 600px at 75% 60%, var(--mesh-color-2), transparent),
    radial-gradient(ellipse 500px 500px at 50% 80%, var(--mesh-color-3), transparent);
  background-size: 100% 100%, 100% 100%, 100% 100%;
  animation: mesh-shift 18s ease-in-out infinite;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: var(--gradient-hero-overlay),
              linear-gradient(180deg, transparent 60%, var(--bg-primary) 100%);
  z-index: 1;
}

/* Floating tech icons */
.hero-floating-icons {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.floating-icon {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--bento-card-bg);
  border: 1px solid var(--bento-card-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: rgba(var(--accent-rgb), 0.35);
  backdrop-filter: blur(8px);
  opacity: 0.5;
}

.fi-1 { top: 12%; left: 8%;  animation: float-icon-1 12s ease-in-out infinite; }
.fi-2 { top: 20%; right: 6%; animation: float-icon-2 14s ease-in-out infinite 1s; }
.fi-3 { top: 55%; left: 4%;  animation: float-icon-3 11s ease-in-out infinite 0.5s; }
.fi-4 { top: 70%; right: 10%; animation: float-icon-1 13s ease-in-out infinite 2s; }
.fi-5 { top: 30%; left: 15%; animation: float-icon-2 15s ease-in-out infinite 3s; opacity: 0.3; }
.fi-6 { top: 80%; left: 20%; animation: float-icon-3 12s ease-in-out infinite 1.5s; opacity: 0.35; }
.fi-7 { top: 15%; right: 20%; animation: float-icon-1 14s ease-in-out infinite 2.5s; opacity: 0.3; }
.fi-8 { top: 60%; right: 3%; animation: float-icon-2 11s ease-in-out infinite 0.8s; opacity: 0.35; }

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: var(--container-max);
}

/* Bento layout */
.hero-bento {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: var(--bento-gap);
  align-items: start;
}

/* Main intro card */
.hero-intro {
  padding: 48px 44px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.15);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 28px;
  backdrop-filter: blur(10px);
}

.status-dot {
  font-size: 8px;
  color: #00e676;
  animation: pulse-dot 2s infinite;
}

.hero-name {
  font-family: var(--font-display);
  margin-bottom: 12px;
}

.greeting {
  display: block;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 6px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.typed-wrapper {
  display: block;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 700;
  line-height: 1.15;
}

.hero-titles {
  font-size: clamp(0.95rem, 2.5vw, 1.3rem);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 20px;
  min-height: 2em;
}

.hero-description {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 560px;
  margin-bottom: 32px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Side column */
.hero-side {
  display: flex;
  flex-direction: column;
  gap: var(--bento-gap);
}

/* Status card */
.hero-status-card {
  text-align: center;
  padding: 32px 28px;
}

.status-icon-wrap {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: rgba(var(--accent-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: var(--accent);
  margin: 0 auto 16px;
  animation: gentle-float 4s ease-in-out infinite;
}

.status-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: rgba(0, 230, 118, 0.08);
  border: 1px solid rgba(0, 230, 118, 0.15);
  border-radius: 50px;
}

.status-ping {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00e676;
  animation: pulse-dot 2s infinite;
}

.status-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: #00e676;
}

/* Stats card */
.hero-stats-card {
  padding: 28px;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.stat-item {
  text-align: center;
}

.stat-item--wide {
  grid-column: span 2;
  padding-top: 16px;
  border-top: 1px solid rgba(var(--accent-rgb), 0.08);
}

.stat-value {
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.stat-plus {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
}

.stat-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Scroll indicator */
.scroll-indicator {
  text-align: center;
  margin-top: 48px;
  color: var(--text-muted);
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.scroll-arrow {
  margin-top: 8px;
  animation: bounce-arrow 2s infinite;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-bento {
    grid-template-columns: 1fr;
    max-width: 680px;
    margin: 0 auto;
  }

  .hero-side {
    flex-direction: row;
  }

  .hero-status-card,
  .hero-stats-card {
    flex: 1;
  }

  .floating-icon {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 20px 60px;
  }

  .hero-intro {
    padding: 32px 28px;
  }

  .hero-side {
    flex-direction: column;
  }

  .scroll-indicator {
    display: none;
  }

  .hero-floating-icons {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .btn {
    justify-content: center;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .stat-item--wide {
    grid-column: span 1;
  }
}
</style>
