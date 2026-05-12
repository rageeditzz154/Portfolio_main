'use client'

// ─────────────────────────────────────────────────────────────
// FOOTER — src/components/Footer.jsx
// To edit: update copyright text, social links via src/data/links.js
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { links } from '../data/links'

const year = new Date().getFullYear()

const footerLinks = [
  { label: 'Work',    href: '#projects' },
  { label: 'About',  href: '#about'    },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.05)] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Top row ───────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center
                        justify-between gap-6 mb-8">

          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #5B8EF0 0%, #9B7AF5 100%)' }}>
              <span className="text-white font-display font-700 text-xs">C</span>
            </div>
            <span className="font-display font-700 text-ink-primary text-sm tracking-tight">
              Cinova<span className="text-accent-blue">.</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-ink-muted hover:text-ink-primary transition-colors text-[0.82rem]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <motion.a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className="w-8 h-8 rounded-lg border border-thin flex items-center justify-center
                         text-ink-muted hover:text-ink-primary hover:border-[rgba(255,255,255,0.15)]
                         transition-colors"
              aria-label="Instagram"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6"/>
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </motion.a>

            {/* X / Twitter */}
            <motion.a
              href={links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className="w-8 h-8 rounded-lg border border-thin flex items-center justify-center
                         text-ink-muted hover:text-ink-primary hover:border-[rgba(255,255,255,0.15)]
                         transition-colors"
              aria-label="X / Twitter"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </motion.a>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2, scale: 1.1 }}
              className="w-8 h-8 rounded-lg border border-thin flex items-center justify-center
                         text-ink-muted hover:text-ink-primary hover:border-[rgba(255,255,255,0.15)]
                         transition-colors ml-2"
              aria-label="Back to top"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 11V3M3 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* ── Bottom row ────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center
                        justify-between gap-3 pt-6 border-t border-[rgba(255,255,255,0.04)]">
          <p className="text-ink-subtle text-[0.75rem]">
            © {year} Cinova Visuals. All rights reserved.
          </p>
          <p className="text-ink-subtle text-[0.75rem]">
            SaaS Motion Design · India
          </p>
        </div>
      </div>
    </footer>
  )
}
