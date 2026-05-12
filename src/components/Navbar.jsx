'use client'

// ─────────────────────────────────────────────────────────────
// NAVBAR — src/components/Navbar.jsx
// To edit nav links: update the navLinks array below.
// To edit CTA button: update the bookCall href.
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { links } from '../data/links'

// ── Nav items — edit labels and href anchors ─────────────────
const navLinks = [
  { label: 'Work',    href: '#projects' },
  { label: 'About',   href: '#about'    },
  { label: 'Contact', href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Smooth-scroll to section when nav link clicked
  const scrollTo = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[rgba(7,7,8,0.88)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ──────────────────────────────────────── */}
          <a
            href="#"
            onClick={(e) => scrollTo(e, 'body')}
            className="flex items-center gap-2.5 group"
          >
            {/* Geometric logo mark */}
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[rgba(91,142,240,0.3)]"
              style={{ background: 'linear-gradient(135deg, #5B8EF0 0%, #9B7AF5 100%)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-display font-800 text-sm tracking-tight">C</span>
              </div>
            </div>
            <span className="font-display font-700 text-[0.95rem] tracking-tight text-ink-primary group-hover:text-white transition-colors">
              Cinova
              <span className="text-accent-blue ml-0.5">.</span>
            </span>
          </a>

          {/* ── Desktop Links ──────────────────────────────── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-ink-muted hover:text-ink-primary transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Desktop CTA ────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={links.bookCall}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Book a Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* ── Mobile Hamburger ────────────────────────────── */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-ink-primary rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-ink-primary rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-ink-primary rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-40 pt-20 pb-8 px-6
                       bg-[rgba(7,7,8,0.97)] backdrop-blur-2xl
                       border-b border-[rgba(255,255,255,0.06)]"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-xl font-display font-600 text-ink-primary py-3
                             border-b border-[rgba(255,255,255,0.05)] last:border-0
                             flex items-center justify-between"
                >
                  {link.label}
                  <span className="text-ink-subtle text-sm">0{i + 1}</span>
                </motion.a>
              ))}
              <motion.a
                href={links.bookCall}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="btn-primary mt-5 justify-center"
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
