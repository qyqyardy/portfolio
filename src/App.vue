<template>
  <div id="app">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import NavBar from './components/layout/NavBar.vue'
import FooterSection from './components/layout/FooterSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import CertificationsSection from './components/sections/CertificationsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

import { useTheme } from './composables/useTheme'
import { useCursorGlow } from './composables/useCursorGlow'

// Initialize theme
useTheme()

// Initialize cursor glow effect on all bento cards
useCursorGlow()

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
    disable: 'mobile'
  })

  // Smooth entrance
  document.body.style.opacity = '0'
  document.body.style.transition = 'opacity 0.6s ease'
  requestAnimationFrame(() => {
    document.body.style.opacity = '1'
  })
})
</script>

<style>
@import './assets/styles/variables.css';
@import './assets/styles/reset.css';
@import './assets/styles/utilities.css';
@import './assets/styles/transitions.css';
</style>
