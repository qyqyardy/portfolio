import { onMounted, onUnmounted } from 'vue'

/**
 * Adds a cursor-following glow effect to all .bento-card elements.
 * Creates a radial gradient that follows the mouse inside each card.
 */
export function useCursorGlow() {
  function handleMouseMove(e) {
    const card = e.currentTarget
    const glow = card.querySelector('.cursor-glow')
    if (!glow) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    glow.style.left = `${x}px`
    glow.style.top = `${y}px`
  }

  function handleMouseLeave(e) {
    const card = e.currentTarget
    const glow = card.querySelector('.cursor-glow')
    if (glow) {
      glow.style.opacity = '0'
    }
  }

  function handleMouseEnter(e) {
    const card = e.currentTarget
    const glow = card.querySelector('.cursor-glow')
    if (glow) {
      glow.style.opacity = '1'
    }
  }

  function initGlow() {
    const cards = document.querySelectorAll('.bento-card')
    cards.forEach(card => {
      // Skip if already initialized
      if (card.querySelector('.cursor-glow')) return

      // Create glow element
      const glow = document.createElement('div')
      glow.className = 'cursor-glow'
      card.appendChild(glow)

      // Add event listeners
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
      card.addEventListener('mouseenter', handleMouseEnter)
    })
  }

  function destroyGlow() {
    const cards = document.querySelectorAll('.bento-card')
    cards.forEach(card => {
      const glow = card.querySelector('.cursor-glow')
      if (glow) glow.remove()
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
      card.removeEventListener('mouseenter', handleMouseEnter)
    })
  }

  onMounted(() => {
    // Delay to ensure all cards are rendered
    requestAnimationFrame(() => {
      setTimeout(initGlow, 200)
    })
  })

  onUnmounted(() => {
    destroyGlow()
  })

  return { initGlow, destroyGlow }
}
