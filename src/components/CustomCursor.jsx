'use client'

// ─────────────────────────────────────────────────────────────
// CUSTOM CURSOR — src/components/CustomCursor.jsx
// A minimal dot cursor that follows the mouse with smooth motion.
// Disabled on mobile/touch devices automatically.
// ─────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const cursorX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 })

  useEffect(() => {
    // Detect touch/mobile — skip rendering the cursor
    setIsTouch(window.matchMedia('(hover: none)').matches)
    setMounted(true)

    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })
    document.addEventListener('mousedown', handleMouseDown, { passive: true })
    document.addEventListener('mouseup', handleMouseUp, { passive: true })

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [cursorX, cursorY])

  if (!mounted || isTouch) return null

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Dot cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isClicking ? 8 : isHovering ? 40 : 12,
            height: isClicking ? 8 : isHovering ? 40 : 12,
            opacity: isHovering ? 0.8 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
        />
      </motion.div>

      {/* Outer ring (appears on hover) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[99]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full border border-white/30"
          animate={{
            width: isHovering ? 50 : 0,
            height: isHovering ? 50 : 0,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        />
      </motion.div>
    </>
  )
}
