'use client'

// ─────────────────────────────────────────────────────────────
// MARQUEE STRIP — src/components/Marquee.jsx
// A subtle infinite scrolling text strip between sections.
// To edit: change the `items` array below.
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'

// ── Items in the marquee — edit freely ───────────────────────
const items = [
  'SaaS Motion Design',
  'UI Animation',
  'Product Explainers',
  'Startup Visuals',
  'Motion Systems',
  'After Effects',
  'Conversion-Focused',
  'Cinematic Quality',
]

// Duplicate the array for seamless loop
const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-6 border-y border-[rgba(255,255,255,0.04)] my-0">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 z-10
                      bg-gradient-to-r from-bg-primary to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 z-10
                      bg-gradient-to-l from-bg-primary to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-[0.78rem] font-display
                       font-600 text-ink-subtle tracking-[0.12em] uppercase"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-accent-blue opacity-50 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
