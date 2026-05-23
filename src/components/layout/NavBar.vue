<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }" id="navbar">
    <div class="nav-container">
      <a href="#hero" class="nav-logo" @click.prevent="scrollTo('hero')">
        <span class="logo-bracket">&lt;</span>LRA<span class="logo-bracket"> /&gt;</span>
      </a>

      <ul class="nav-menu" :class="{ active: menuOpen }" id="nav-menu">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="handleNavClick(item.id)"
          >
            {{ $t(`nav.${item.key}`) }}
          </a>
        </li>
      </ul>

      <div class="nav-controls">
        <LanguageSwitcher />
        <ThemeToggle />
        <a href="#contact" class="nav-cta" @click.prevent="scrollTo('contact')">
          <i class="fas fa-paper-plane"></i> {{ $t('nav.hireMe') }}
        </a>
      </div>

      <button class="nav-toggle" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="menu-overlay" :class="{ active: menuOpen }" @click="closeMenu"></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'
import { useScrollSpy } from '../../composables/useScrollSpy'

const navItems = [
  { id: 'hero', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'experience', key: 'experience' },
  { id: 'skills', key: 'skills' },
  { id: 'projects', key: 'projects' },
  { id: 'certifications', key: 'certifications' },
  { id: 'contact', key: 'contact' }
]

const { activeSection } = useScrollSpy(navItems.map(i => i.id))

const isScrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
  }
  closeMenu()
}

function handleNavClick(id) {
  scrollTo(id)
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 16px 0;
  transition: var(--transition);
}

.navbar.scrolled {
  padding: 10px 0;
  background: rgba(6, 11, 24, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

[data-theme="light"] .navbar.scrolled {
  background: rgba(245, 247, 251, 0.85);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.5px;
  text-decoration: none;
}

.logo-bracket {
  color: var(--accent);
}

.nav-menu {
  display: flex;
  gap: 8px;
  list-style: none;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  position: relative;
  transition: var(--transition-fast);
  text-decoration: none;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
}

.nav-link.active {
  background: var(--accent-glow);
  color: var(--accent);
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  background: var(--gradient-accent);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  box-shadow: 0 4px 15px rgba(var(--accent-rgb), 0.3);
  transition: var(--transition);
  text-decoration: none;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(var(--accent-rgb), 0.4);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}
.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.menu-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  backdrop-filter: blur(4px);
}

.menu-overlay.active {
  display: block;
}

/* Mobile */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    max-width: 320px;
    height: 100vh;
    background: rgba(6, 11, 24, 0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 100px 40px 40px;
    gap: 4px;
    transition: var(--transition);
    border-left: 1px solid var(--glass-border);
    z-index: 999;
  }

  [data-theme="light"] .nav-menu {
    background: rgba(245, 247, 251, 0.97);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-link {
    font-size: 1rem;
    padding: 12px 16px;
  }

  .nav-controls .nav-cta {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }
}
</style>
