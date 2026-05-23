<template>
  <section class="hero" id="hero">
    <div class="hero-particles" ref="particlesContainer"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content" data-aos="fade-up" data-aos-duration="1000">
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
        <TypeWriter :texts="$t('hero.titles')" :speed="60" :deleteSpeed="30" :pauseTime="2500" />
      </div>
      <p class="hero-description">{{ $t('hero.description') }}</p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn--primary" @click.prevent="scrollTo('projects')">
          <i class="fas fa-briefcase"></i> {{ $t('hero.viewWork') }}
        </a>
        <a :href="cvUrl" class="btn btn--outline" download>
          <i class="fas fa-download"></i> {{ $t('hero.downloadCv') }}
        </a>
      </div>
      <div class="hero-stats">
        <div class="stat-item" data-aos="fade-up" data-aos-delay="200">
          <AnimatedCounter :target="12" /><span class="stat-plus gradient-text">+</span>
          <span class="stat-label">{{ $t('hero.stats.years') }}</span>
        </div>
        <div class="stat-item" data-aos="fade-up" data-aos-delay="400">
          <AnimatedCounter :target="12" /><span class="stat-plus gradient-text">+</span>
          <span class="stat-label">{{ $t('hero.stats.certs') }}</span>
        </div>
        <div class="stat-item" data-aos="fade-up" data-aos-delay="600">
          <AnimatedCounter :target="95" /><span class="stat-plus gradient-text">%</span>
          <span class="stat-label">{{ $t('hero.stats.deploy') }}</span>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <span>{{ $t('hero.scrollDown') }}</span>
      <div class="scroll-arrow">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import TypeWriter from '../ui/TypeWriter.vue'
import AnimatedCounter from '../ui/AnimatedCounter.vue'

const particlesContainer = ref(null)
const cvUrl = '/Lazwardi Rizki Assidiq - CV.pdf'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
  }
}

// Parallax effect
function handleScroll() {
  const content = document.querySelector('.hero-content')
  if (content) {
    const scrolled = window.scrollY
    if (scrolled < window.innerHeight) {
      content.style.transform = `translateY(${scrolled * 0.15}px)`
      content.style.opacity = 1 - scrolled / (window.innerHeight * 0.8)
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Initialize particles
  if (typeof window !== 'undefined' && window.particlesJS && particlesContainer.value) {
    particlesContainer.value.id = 'particles-js'
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 900 } },
        color: { value: ['#00d4ff', '#0080ff', '#6c3fff'] },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.1 } },
        size: { value: 2.5, random: true, anim: { enable: true, speed: 1.5, size_min: 0.5 } },
        line_linked: { enable: true, distance: 150, color: '#00d4ff', opacity: 0.08, width: 1 },
        move: { enable: true, speed: 0.8, direction: 'none', random: true, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.25 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    })
  }
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

.hero-particles {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: var(--gradient-hero-overlay),
              linear-gradient(180deg, transparent 60%, var(--bg-primary) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 850px;
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
  margin-bottom: 32px;
  backdrop-filter: blur(10px);
}

.status-dot {
  font-size: 8px;
  color: #00e676;
  animation: pulse-dot 2s infinite;
}

.hero-name {
  font-family: var(--font-display);
  margin-bottom: 16px;
}

.greeting {
  display: block;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.typed-wrapper {
  display: block;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.15;
}

.hero-titles {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 24px;
  min-height: 2em;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 650px;
  margin: 0 auto 40px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-plus {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
}

.stat-label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.scroll-arrow {
  margin-top: 8px;
  animation: bounce-arrow 2s infinite;
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 20px 60px;
  }

  .hero-stats {
    gap: 24px;
  }

  .scroll-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-actions .btn {
    width: 100%;
    justify-content: center;
  }

  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
