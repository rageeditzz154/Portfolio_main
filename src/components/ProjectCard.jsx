'use client'

// ─────────────────────────────────────────────────────────────
// PROJECT CARD — src/components/ProjectCard.jsx
// Click to open full video detail page
// ─────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative rounded-xl overflow-hidden border border-thin
                   bg-bg-card group cursor-pointer h-full"
        style={{
          boxShadow: hovered
            ? '0 20px 60px rgba(0,0,0,0.4)'
            : '0 4px 20px rgba(0,0,0,0.2)',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          transition: 'all 0.25s ease',
        }}
      >
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none z-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 p-5">
          {/* Category */}
          <div className="flex items-center justify-between mb-4">
            <span className="tag-pill">{project.category}</span>
            <motion.div
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-ink-subtle"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" 
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>

          {/* Video Thumbnail/Preview */}
          <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-bg-secondary">
            {/* Play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm 
                              flex items-center justify-center border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            {/* Vimeo thumbnail or placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated to-bg-card" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" className="text-ink-subtle">
                <path d="M8 5v14l11-7z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-700 text-ink-primary mb-2 tracking-tight
                         group-hover:text-white transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-ink-muted text-[0.85rem] leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[0.68rem] px-2 py-0.5 rounded-full font-medium
                           bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]
                           text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
