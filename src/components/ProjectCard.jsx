'use client'

// ─────────────────────────────────────────────────────────────
// PROJECT CARD — src/components/ProjectCard.jsx
// Renders a single project in the bento grid.
// Props come from the projects array in src/data/projects.js
// ─────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion } from 'framer-motion'
import VideoEmbed from './VideoEmbed'

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-3xl overflow-hidden border border-thin
                 bg-bg-card group transition-all duration-500"
      style={{
        boxShadow: hovered
          ? `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)`
          : `0 8px 32px rgba(0,0,0,0.3)`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* ── Inner glow on hover ──────────────────────────── */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(ellipse at top left, ${project.accentColor}12 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 p-6 md:p-8">
        {/* ── Category tag + index ─────────────────────── */}
        <div className="flex items-center justify-between mb-5">
          <span className="tag-pill">{project.category}</span>
          <span className="text-ink-subtle text-xs font-display tabular-nums">
            0{index + 1}
          </span>
        </div>

        {/* ── Video Embed ──────────────────────────────── */}
        {/* To change the video: edit videoEmbedUrl in src/data/projects.js */}
        <div className="mb-6">
          <VideoEmbed
            embedUrl={project.videoEmbedUrl}
            thumbnailUrl={project.thumbnailUrl}
            title={project.title}
            accentColor={project.accentColor}
          />
        </div>

        {/* ── Title ────────────────────────────────────── */}
        <h3 className="font-display text-xl md:text-2xl font-700 text-ink-primary mb-2 tracking-tight">
          {project.title}
        </h3>

        {/* ── Description ──────────────────────────────── */}
        <p className="text-ink-muted text-[0.88rem] leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* ── Tags ─────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.7rem] px-2.5 py-1 rounded-full font-medium
                         bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]
                         text-ink-muted tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
