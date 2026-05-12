'use client'

// ─────────────────────────────────────────────────────────────
// PROJECTS PAGE — src/app/projects/page.jsx
// Shows all projects in a grid with link back to home
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CustomCursor from '../../components/CustomCursor'
import CursorGlow from '../../components/CursorGlow'
import SmoothScroll from '../../components/SmoothScroll'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen">
        <CursorGlow />
        <CustomCursor />
        <Navbar />

        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <Link 
                href="/" 
                className="btn-back mb-6 inline-flex"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.5 7H2.5M6.5 3L2.5 7l4 4" stroke="currentColor" 
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Home
              </Link>

              <p className="text-accent-blue text-sm font-display font-600 tracking-[0.1em] uppercase mb-3">
                All Projects
              </p>
              <h1 className="font-display font-800 text-[clamp(2.2rem,5vw,4rem)]
                             leading-[1] tracking-tight text-ink-primary mb-4">
                My Work
              </h1>
              <p className="text-ink-muted text-[0.95rem] max-w-xl leading-relaxed">
                A collection of motion design projects including SaaS explainers, 
                product videos, and UI animations. Click any project to watch.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <p className="text-ink-muted text-[0.92rem] mb-4">
                Like what you see? Let&apos;s create something together.
              </p>
              <a
                href="https://cal.com/cinova-visuals/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Book a Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
