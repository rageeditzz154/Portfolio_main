'use client'

// ─────────────────────────────────────────────────────────────
// CONTACT SECTION — src/components/Contact.jsx
// To edit social links / CTA links: update src/data/links.js
// To edit the heading or body text: edit directly below.
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { links } from '../data/links'

// ── Social card data ──────────────────────────────────────────
const socials = [
  {
    name: 'Instagram',
    handle: '@cinova.visuals',
    href: links.instagram,
    description: 'Process clips, WIP reels, and behind-the-scenes motion.',
    accentColor: '#E1306C',
    icon: (
      // Instagram SVG
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'X / Twitter',
    handle: '@Cinova_visuals',
    href: links.twitter,
    description: 'Founder journey, motion tips, and build-in-public updates.',
    accentColor: '#1DA1F2',
    icon: (
      // X (Twitter) SVG
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-py relative overflow-hidden">

      {/* ── Background glow ──────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse, #5B8EF0 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section Label ────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent-blue text-sm font-display font-600 tracking-[0.12em] uppercase mb-4"
        >
          Get In Touch
        </motion.p>

        {/* ── Heading ──────────────────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-800 text-[clamp(2.2rem,5vw,4rem)]
                     leading-[0.95] tracking-tight text-ink-primary mb-5"
        >
          Ready to move{' '}
          <span className="text-gradient">your product</span>
          <br />
          forward?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-ink-muted text-[0.95rem] max-w-md leading-relaxed mb-16"
        >
          Shoot me a message on any platform or book a free 30-minute call.
          Let's turn your product into a motion story.
        </motion.p>

        {/* ── Primary CTA ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-14"
        >
          <a
            href={links.bookCall}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                       font-display font-700 text-[1rem] text-white
                       transition-all duration-300 group"
            style={{
              background: 'linear-gradient(135deg, #5B8EF0 0%, #9B7AF5 100%)',
              boxShadow: '0 4px 32px rgba(91,142,240,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(91,142,240,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 32px rgba(91,142,240,0.3)'
            }}
          >
            <span>Book a Free 30-min Call</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* ── Social Cards ────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group flex items-start gap-4 p-5 rounded-2xl
                         border border-thin bg-bg-card
                         transition-all duration-300 no-underline"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                           transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${social.accentColor}18`,
                  color: social.accentColor,
                  border: `1px solid ${social.accentColor}30`,
                }}
              >
                {social.icon}
              </div>

              {/* Text */}
              <div>
                <div className="font-display font-700 text-ink-primary text-[0.9rem] mb-0.5">
                  {social.name}
                </div>
                <div className="text-ink-muted text-[0.78rem] mb-2">{social.handle}</div>
                <div className="text-ink-muted text-[0.78rem] leading-snug opacity-70 group-hover:opacity-100 transition-opacity">
                  {social.description}
                </div>
              </div>

              {/* Arrow */}
              <svg
                className="ml-auto flex-shrink-0 mt-0.5 text-ink-subtle group-hover:text-ink-muted transition-colors"
                width="16" height="16" viewBox="0 0 16 16" fill="none"
              >
                <path d="M4 12L12 4M12 4H7M12 4v5" stroke="currentColor" strokeWidth="1.4"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
