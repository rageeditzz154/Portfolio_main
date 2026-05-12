'use client'

// ─────────────────────────────────────────────────────────────
// PROJECTS SECTION — src/components/Projects.jsx
//
// The grid layout automatically adjusts based on project.size:
//   'wide'   → spans 2 columns on desktop
//   'normal' → single column
//
// To add/remove projects: edit src/data/projects.js only.
// To change section heading: edit the h2 below.
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { links } from '../data/links'

export default function Projects() {
  return (
    <section id="projects" className="section-py relative overflow-hidden">

      {/* ── Background ambient ─────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse, #9B7AF5 0%, transparent 60%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section Header ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              {/* Section label */}
              <p className="text-accent-blue text-sm font-display font-600 tracking-[0.12em] uppercase mb-4">
                Selected Work
              </p>
              {/* ── SECTION HEADING — edit here ──────────────── */}
              <h2 className="font-display font-800 text-[clamp(2.2rem,5vw,4rem)]
                             leading-[0.95] tracking-tight text-ink-primary">
                Crafted for{' '}
                <span className="text-gradient">
                  founders
                </span>
                <br />
                who care about motion.
              </h2>
            </div>

            {/* Desktop "more work" hint */}
            <div className="hidden md:flex flex-col justify-end pb-2">
              <p className="text-ink-muted text-sm max-w-[220px] text-right leading-relaxed">
                Spec work, client projects, and concept explorations in SaaS motion.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Bento Grid ────────────────────────────────────── */}
        {/* Layout: 2-col on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={project.size === 'wide' ? 'md:col-span-2' : 'col-span-1'}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5
                     p-8 rounded-2xl border border-thin bg-[rgba(255,255,255,0.02)]"
        >
          <p className="text-ink-muted text-center sm:text-left">
            Got a SaaS product that deserves great motion?
          </p>
          <a
            href={links.bookCall}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            Let's Work Together
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
