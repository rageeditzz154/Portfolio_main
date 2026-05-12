'use client'

// ─────────────────────────────────────────────────────────────
// VIDEO EMBED — src/components/VideoEmbed.jsx
//
// A premium video wrapper that handles:
//  - Vimeo + YouTube iframes
//  - 16:9 aspect ratio
//  - Ambient glow beneath the video
//  - Thumbnail overlay with play button (before user clicks)
//  - Smooth fade-in
//
// Props:
//  - embedUrl:      Vimeo or YouTube embed URL (see projects.js for format)
//  - thumbnailUrl:  Fallback image shown before play
//  - title:         Accessibility label
//  - accentColor:   Hex color for the ambient glow (optional)
// ─────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VideoEmbed({ embedUrl, thumbnailUrl, title, accentColor = '#5B8EF0' }) {
  const [playing, setPlaying] = useState(false)

  // Autoplay embed URL — appended on click so the iframe starts playing
  const autoplayUrl = embedUrl.includes('?')
    ? `${embedUrl}&autoplay=1`
    : `${embedUrl}?autoplay=1`

  const hasThumbnail = !!thumbnailUrl

  return (
    <div className="relative group">
      {/* Ambient glow beneath the video */}
      <div
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-2xl"
        style={{ background: `radial-gradient(ellipse, ${accentColor}28 0%, transparent 70%)` }}
      />

      {/* Outer frame */}
      <div
        className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]
                   bg-[#0c0c0f]"
        style={{ boxShadow: `0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)` }}
      >
        {/* 16:9 wrapper */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>

          {/* ── Thumbnail + Play Button overlay ─────────────── */}
          <AnimatePresence>
            {!playing && (
              <motion.div
                key="thumbnail"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={() => setPlaying(true)}
              >
                {/* Background: thumbnail image or gradient fallback */}
                {hasThumbnail ? (
                  <img
                    src={thumbnailUrl}
                    alt={`${title} thumbnail`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{
                      background: `linear-gradient(135deg, #0E0E10 0%, #1a1a22 100%)`,
                    }}
                  >
                    {/* Abstract decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                    w-32 h-32 rounded-full opacity-20"
                      style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
                    />
                  </div>
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[rgba(7,7,8,0.4)]" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center
                               border border-[rgba(255,255,255,0.2)]"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* Triangle play icon */}
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5.5L17 11L8 16.5V5.5Z" fill="white" />
                    </svg>
                  </motion.div>
                </div>

                {/* "Click to play" hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                                text-[0.7rem] text-white/50 tracking-widest uppercase">
                  Click to play
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Actual iframe — loads lazily on click ─────────── */}
          {/* ── To change to YouTube: paste YouTube embed URL  ── */}
          {/* ── To change autoplay settings: edit autoplayUrl   ── */}
          {playing && (
            <motion.iframe
              key="iframe"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full"
              src={autoplayUrl}
              title={title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ border: 'none', borderRadius: '1rem' }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
