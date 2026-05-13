'use client'

// ─────────────────────────────────────────────────────────────
// SMOOTH SCROLL — src/components/SmoothScroll.jsx
// Uses Lenis for buttery smooth scrolling throughout the site.
// Supports navigation clicks with smooth scroll behavior.
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef, createContext, useContext } from 'react'
import Lenis from 'lenis'

// Create context to share Lenis instance
const LenisContext = createContext(null)

export function useLenis() {
  return useContext(LenisContext)
}

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    // Make lenis available globally for navigation
    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          lenis.scrollTo(element, {
            offset: -100,
            duration: 1.2,
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  )
}
