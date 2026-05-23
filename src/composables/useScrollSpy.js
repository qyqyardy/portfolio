import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds, offset = 120) {
  const activeSection = ref(sectionIds[0] || '')

  function updateActiveSection() {
    const scrollY = window.scrollY + offset

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i])
      if (el && scrollY >= el.offsetTop) {
        activeSection.value = sectionIds[i]
        break
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return { activeSection }
}
