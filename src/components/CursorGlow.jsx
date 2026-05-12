'use client'

// ─────────────────────────────────────────────────────────────
// CURSOR GLOW — src/components/CursorGlow.jsx
// A soft ambient glow that follows the cursor on desktop.
// Disabled on mobile/touch devices automatically.
// To disable entirely: remove <CursorGlow /> from page.jsx
// ─────────────────────────────────────────────────────────────

import { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const mouseX = useSpring(0, { stiffness: 120, damping: 25, mass: 0.5 })
  const mouseY = useSpring(0, { stiffness: 120, damping: 25, mass: 0.5 })

  useEffect(() => {
    // Detect touch/mobile — skip rendering the glow
    setIsTouch(window.matchMedia('(hover: none)').matches)
    setMounted(true)

    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  if (!mounted || isTouch) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Large soft halo */}
      <div
        className="w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(91,142,240,0.05) 0%, transparent 65%)',
          filter: 'blur(1px)',
        }}
      />
    </motion.div>
  )
}
