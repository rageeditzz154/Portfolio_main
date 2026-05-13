'use client'

// ─────────────────────────────────────────────────────────────
// ABOUT SECTION — src/components/About.jsx
// Redesigned with glassmorphic cards and service icons
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { links } from '../data/links'

// Services with icons
const services = [
  {
    title: 'App & Web Explainers',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 22h10" />
        <path d="M12 18v4" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Motion Design',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Marketing Ads for SaaS',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Onboarding & Tutorial Videos',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
      </svg>
    ),
  },
]

// Tool stack with simplified icons
const tools = [
  { name: 'Ae', label: 'After Effects', bg: 'bg-[#9999FF]/20' },
  { name: 'Pr', label: 'Premiere Pro', bg: 'bg-[#9999FF]/20' },
  { name: 'Ai', label: 'Illustrator', bg: 'bg-[#FF9A00]/20' },
  { name: 'Fg', label: 'Figma', bg: 'bg-white/5' },
  { name: 'Fr', label: 'Framer', bg: 'bg-white/5' },
  { name: 'Lt', label: 'Lottie', bg: 'bg-white/5' },
  { name: 'No', label: 'Notion', bg: 'bg-white/5' },
]

export default function About() {
  return (
    <section id="about" className="section-py relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent-blue text-sm font-sans font-semibold tracking-[0.1em] uppercase mb-3"
        >
          About
        </motion.p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Side - Headline and Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {/* Gradient Headline */}
            <div>
              <h2 className="font-sans font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight">
                <span className="text-ink-muted">Specialized in</span>
                <br />
                <span className="text-ink-primary">digital product</span>
                <br />
                <span className="text-ink-primary">motion.</span>
              </h2>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-ink-muted text-sm font-medium mb-4 tracking-wide">
                My tech stack
              </p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`
                      w-12 h-12 rounded-xl ${tool.bg}
                      border border-white/10
                      flex items-center justify-center
                      backdrop-blur-sm
                      transition-all duration-200
                      hover:scale-105 hover:border-white/20
                      cursor-default
                    `}
                    title={tool.label}
                  >
                    <span className="text-ink-primary font-bold text-xs">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href={links.bookCall}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-6 
                           rounded-full border border-white/10
                           bg-white/5 backdrop-blur-sm
                           text-ink-primary font-medium text-sm
                           transition-all duration-200
                           hover:bg-white/10 hover:border-white/20"
              >
                Book a Discovery Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-ink-primary
                                flex items-center justify-center flex-shrink-0
                                transition-all duration-300
                                group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-white/10">
                  <div className="text-bg-primary">
                    {service.icon}
                  </div>
                </div>
                
                {/* Service Title */}
                <span className="text-ink-primary font-semibold text-lg tracking-tight
                                 transition-colors duration-200
                                 group-hover:text-white">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 max-w-3xl"
        >
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                Hey, I&apos;m the creator behind{' '}
                <span className="text-ink-primary font-medium">Cinova Visuals</span>
                . I craft motion design for SaaS products, startups, and
                anyone who wants their product to truly move.
              </p>
              <p>
                I turn complex ideas into compelling visual stories through
                explainer videos, product launches, and smooth UI animations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
