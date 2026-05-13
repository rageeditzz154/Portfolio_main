'use client'

// ─────────────────────────────────────────────────────────────
// PROJECTS PAGE — src/app/projects/page.jsx
// Comprehensive project showcase with thumbnails and filtering
// ─────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, categories } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CustomCursor from '../../components/CustomCursor'
import CursorGlow from '../../components/CursorGlow'
import SmoothScroll from '../../components/SmoothScroll'
import Link from 'next/link'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const gridRef = useRef(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  // Smooth scroll to grid when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    
    // Use Lenis for smooth scroll if available
    if (window.lenis && gridRef.current) {
      setTimeout(() => {
        window.lenis.scrollTo(gridRef.current, {
          offset: -120,
          duration: 0.8,
        })
      }, 100)
    }
  }

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
              className="mb-10"
            >
              <Link 
                href="/" 
                className="mb-6 inline-flex items-center gap-2 py-2 px-4
                           rounded-full border border-white/10
                           bg-white/5 backdrop-blur-sm
                           text-ink-muted font-medium text-sm
                           transition-all duration-200
                           hover:bg-white/10 hover:text-ink-primary"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.5 7H2.5M6.5 3L2.5 7l4 4" stroke="currentColor" 
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Home
              </Link>

              <p className="text-accent-blue text-sm font-sans font-semibold tracking-[0.1em] uppercase mb-3">
                Portfolio
              </p>
              <h1 className="font-sans font-bold text-[clamp(2.2rem,5vw,4rem)]
                             leading-[1] tracking-tight text-ink-primary mb-4">
                My Work
              </h1>
              <p className="text-ink-muted text-[0.95rem] max-w-xl leading-relaxed">
                A collection of motion design projects including SaaS explainers, 
                product videos, and UI animations. Click any project to watch.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-10"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                      ${activeCategory === category
                        ? 'bg-ink-primary text-bg-primary'
                        : 'bg-white/[0.04] text-ink-muted hover:bg-white/[0.08] hover:text-ink-primary border border-white/[0.08]'
                      }`}
                  >
                    {category}
                    {category !== 'All' && (
                      <span className="ml-1.5 text-xs opacity-60">
                        ({projects.filter(p => p.category === category).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Projects Count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-ink-subtle text-sm mb-6"
            >
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </motion.p>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
              <motion.div 
                ref={gridRef}
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-ink-muted text-lg mb-4">
                  No projects in this category yet.
                </p>
                <button
                  onClick={() => handleCategoryChange('All')}
                  className="text-accent-blue hover:underline"
                >
                  View all projects
                </button>
              </motion.div>
            )}

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-20 text-center"
            >
              <div className="inline-block p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <h3 className="font-sans font-semibold text-xl text-ink-primary mb-2">
                  Like what you see?
                </h3>
                <p className="text-ink-muted text-[0.92rem] mb-5">
                  Let&apos;s create something amazing together.
                </p>
                <a
                  href="https://cal.com/cinova-visuals/30-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 
                             rounded-full
                             bg-ink-primary text-bg-primary
                             font-medium text-sm
                             transition-all duration-200
                             hover:bg-white hover:scale-[1.02]"
                >
                  Book a Call
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
