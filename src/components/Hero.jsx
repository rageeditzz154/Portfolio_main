'use client'

// ─────────────────────────────────────────────────────────────
// HERO SECTION — src/components/Hero.jsx
//
// To edit:
//  - Headline text  → the <h1> section with 'Motion Design' etc
//  - Subtext        → the <p> paragraph below
//  - CTA buttons    → the two <a> tags at the bottom
//  - Animations     → adjust `variants` objects and `transition` durations
// ─────────────────────────────────────────────────────────────

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { links } from '../data/links'

// Stagger container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren:   0.25,
    },
  },
}

// Slide-up + fade reveal
const itemVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

// Slower fade for secondary elements
const fadeVariants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // Parallax: text moves up slightly as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '7rem', paddingBottom: '5rem' }}
    >
      {/* ── Ambient Background Glows ───────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Main blue glow — top right */}
        <div className="absolute top-[15%] right-[10%] w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #5B8EF0 0%, transparent 70%)' }}
        />
        {/* Violet glow — bottom left */}
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #9B7AF5 0%, transparent 70%)' }}
        />
        {/* Subtle center radial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[900px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse, #5B8EF0 0%, transparent 60%)' }}
        />
        {/* Fine grid pattern */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Floating Decorative Orb ─────────────────────────── */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-[8%]
                   w-40 h-40 md:w-64 md:h-64 rounded-full opacity-20
                   border border-[rgba(91,142,240,0.25)]"
        style={{
          background: 'radial-gradient(circle, rgba(91,142,240,0.15) 0%, transparent 70%)',
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-[40%] right-[14%]
                   w-20 h-20 rounded-full opacity-30
                   border border-[rgba(155,122,245,0.2)]"
        animate={{ y: [0, 14, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* ── Main Content ────────────────────────────────────── */}
      <motion.div
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Eyebrow label */}
          <motion.div variants={itemVariants} className="mb-7">
            <span className="tag-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mr-2 animate-pulse-slow inline-block" />
              Available for Projects
            </span>
          </motion.div>

          {/* ── MAIN HEADLINE — edit text here ──────────────── */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-800 leading-[0.92] tracking-tight mb-8"
          >
            {/* Line 1 */}
            <span className="block text-[clamp(3.5rem,9vw,8.5rem)] text-ink-primary">
              Motion Design
            </span>
            {/* Line 2 — gradient accent */}
            <span className="block text-[clamp(3.5rem,9vw,8.5rem)] text-gradient">
              That Converts.
            </span>
          </motion.h1>

          {/* ── SUBTEXT — edit paragraph here ──────────────── */}
          <motion.p
            variants={itemVariants}
            className="font-body text-ink-muted text-[clamp(1rem,1.8vw,1.2rem)]
                       leading-relaxed max-w-xl mb-12"
          >
            Premium SaaS explainers and UI animations for indie hackers and
            bootstrapped founders. From concept to cinematic motion — fast.
          </motion.p>

          {/* ── CTA BUTTONS ─────────────────────────────────── */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            {/* Primary — scrolls to Projects */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary text-[0.95rem]"
            >
              View Projects
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3 7.5h9M7.5 3l4.5 4.5L7.5 12" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Secondary — opens cal.com */}
            <a
              href={links.bookCall}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-[0.95rem]"
            >
              Book a Call
            </a>
          </motion.div>

          {/* ── Stat Strip ──────────────────────────────────── */}
          <motion.div
            variants={fadeVariants}
            className="mt-20 pt-8 border-t border-[rgba(255,255,255,0.05)]
                       flex flex-wrap gap-8 md:gap-16"
          >
            {[
              { num: '12+',   label: 'Projects' },
              { num: '48h',   label: 'Avg Delivery' },
              { num: '100%',  label: 'Satisfaction' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-display text-[1.8rem] font-700 text-ink-primary leading-none">
                  {num}
                </div>
                <div className="text-ink-muted text-sm mt-1 tracking-wide">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-ink-subtle text-[0.7rem] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-ink-subtle to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
