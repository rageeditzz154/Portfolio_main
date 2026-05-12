'use client'

// ─────────────────────────────────────────────────────────────
// ABOUT SECTION — src/components/About.jsx
// To edit: change the bio text, skills list, and tool stack below.
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { stats } from '../data/projects'
import { links } from '../data/links'

// ── Skills / Capabilities — edit freely ─────────────────────
const capabilities = [
  'SaaS Explainer Videos',
  'UI Animation & Micro-interactions',
  'Product Demo Production',
  'Motion System Design',
  'After Effects / Premiere Pro',
  'Lottie & Web Animation',
  'Brand Motion Identity',
  'Script & Storyboard',
]

// ── Tool stack badges ─────────────────────────────────────────
const tools = [
  'After Effects',
  'Premiere Pro',
  'Figma',
  'Framer',
  'Motion 4',
  'Lottie',
]

// Animation for cards stagger
const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="section-py relative overflow-hidden">

      {/* ── Background ────────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0
                                  bg-gradient-to-b from-transparent via-[rgba(14,14,16,0.6)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section Label ─────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-accent-blue text-sm font-display font-600 tracking-[0.12em] uppercase mb-4"
        >
          About
        </motion.p>

        {/* ── Top split: Headline + Bio ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">

          {/* Left — Headline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display font-800 text-[clamp(2rem,4vw,3.5rem)]
                           leading-[1.0] tracking-tight text-ink-primary">
              Motion made for{' '}
              <span className="text-gradient-warm">products</span>{' '}
              that mean business.
            </h2>
          </motion.div>

          {/* Right — Bio + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col justify-between gap-8"
          >
            {/* ── BIO TEXT — edit here ─────────────────────── */}
            <div className="space-y-4 text-ink-muted leading-relaxed text-[0.95rem]">
              <p>
                I'm a self-taught motion designer building{' '}
                <span className="text-ink-primary font-medium">Cinova Visuals</span>
                {' '}— a studio focused on premium SaaS motion design for
                indie hackers and bootstrapped founders.
              </p>
              <p>
                I specialize in turning complex SaaS products into compelling
                visual stories. From storyboard to final render, every frame is
                crafted to convert curious visitors into confident customers.
              </p>
              <p>
                Based in India. Working globally. Fast, focused, and obsessed
                with quality motion.
              </p>
            </div>

            <a
              href={links.bookCall}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost self-start"
            >
              Book a Discovery Call
            </a>
          </motion.div>
        </div>

        {/* ── Stats Row ─────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-thin bg-bg-card text-center"
            >
              <div className="font-display text-[2rem] font-800 text-ink-primary leading-none mb-1.5">
                {stat.value}
              </div>
              <div className="text-ink-muted text-[0.78rem] tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Capabilities + Tools Row ──────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Capabilities card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="p-7 rounded-2xl border border-thin bg-bg-card"
          >
            <h3 className="font-display font-700 text-[1rem] text-ink-primary mb-5 tracking-tight">
              What I Do
            </h3>
            <ul className="space-y-2.5">
              {capabilities.map((cap, i) => (
                <li key={cap} className="flex items-center gap-3 text-[0.88rem] text-ink-muted">
                  {/* Animated dot */}
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: i % 2 === 0 ? '#5B8EF0' : '#9B7AF5' }}
                  />
                  {cap}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools card + floating decoration */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="p-7 rounded-2xl border border-thin bg-bg-card"
            >
              <h3 className="font-display font-700 text-[1rem] text-ink-primary mb-5 tracking-tight">
                Tool Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-[0.82rem] font-medium
                               bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]
                               text-ink-muted hover:text-ink-primary hover:border-[rgba(255,255,255,0.14)]
                               transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="p-7 rounded-2xl border border-thin flex-1
                         relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(91,142,240,0.07) 0%, rgba(155,122,245,0.05) 100%)',
              }}
            >
              {/* Large quote mark */}
              <div className="absolute top-3 right-5 font-display text-[4rem] leading-none
                               text-[rgba(255,255,255,0.04)] select-none pointer-events-none">
                "
              </div>
              <p className="text-ink-muted text-[0.9rem] leading-relaxed italic">
                Every SaaS product has a story worth telling. Motion is how you
                make people feel it.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
