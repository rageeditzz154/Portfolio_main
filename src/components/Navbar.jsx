'use client'

// ─────────────────────────────────────────────────────────────
// NAVBAR — src/components/Navbar.jsx
// Glassmorphic navigation with shrink animation and typing effect
// ─────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { links } from '../data/links'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Work',    href: '/#projects' },
  { label: 'About',   href: '/#about'    },
  { label: 'Contact', href: '/#contact'  },
]

const typingTexts = [
  'Motion Designer',
  'SaaS Specialist', 
  'UI Animator',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [typingText, setTypingText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const lastScrollY = useRef(0)

  // Handle scroll behavior
  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          
          // Set scrolled state for basic styling
          setScrolled(currentScrollY > 40)
          
          // Compact mode: scrolling down past 100px
          // Expand back when scrolling up even slightly
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsCompact(true)
          } else if (currentScrollY < lastScrollY.current) {
            setIsCompact(false)
          }
          
          lastScrollY.current = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Typing animation effect
  useEffect(() => {
    if (!isCompact) {
      setTypingText('')
      setCharIndex(0)
      setIsDeleting(false)
      return
    }

    const currentText = typingTexts[textIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setTypingText(currentText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (charIndex > 0) {
          setTypingText(currentText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [isCompact, charIndex, isDeleting, textIndex])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      setMobileOpen(false)
      const target = href.replace('/#', '#')
      const el = document.querySelector(target)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <motion.div
          animate={{
            width: isCompact ? 'auto' : '100%',
            maxWidth: isCompact ? '280px' : '1200px',
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`
            relative overflow-hidden
            backdrop-blur-xl
            border border-white/10
            transition-all duration-400 ease-out
            ${isCompact 
              ? 'py-2 px-4 rounded-full bg-white/5' 
              : scrolled 
                ? 'py-3 px-6 rounded-2xl bg-white/5' 
                : 'py-4 px-6 rounded-2xl bg-white/[0.03]'
            }
          `}
          style={{
            boxShadow: scrolled 
              ? '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
              : '0 2px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo - always visible */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                <Image
                  src="/images/cinova-logo.png"
                  alt="Cinova Visuals"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <AnimatePresence mode="wait">
                {!isCompact && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-sans font-semibold text-[0.95rem] tracking-tight text-ink-primary group-hover:text-white transition-colors whitespace-nowrap"
                  >
                    Cinova Visuals
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Typing animation - compact mode only */}
            <AnimatePresence mode="wait">
              {isCompact && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-1 ml-3"
                >
                  <span className="text-ink-muted text-sm font-medium">
                    {typingText}
                  </span>
                  <span className="w-[2px] h-4 bg-accent-blue animate-blink" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Links - hidden in compact mode */}
            <AnimatePresence mode="wait">
              {!isCompact && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:flex items-center gap-8"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-ink-muted hover:text-ink-primary transition-colors duration-200 text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/projects"
                    className="text-ink-muted hover:text-ink-primary transition-colors duration-200 text-sm font-medium"
                  >
                    All Projects
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop CTA - hidden in compact mode */}
            <AnimatePresence mode="wait">
              {!isCompact && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:flex items-center gap-3"
                >
                  <a
                    href={links.bookCall}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-5 rounded-full
                               bg-ink-primary text-bg-primary
                               font-medium text-sm
                               transition-all duration-200
                               hover:bg-white hover:scale-[1.02]
                               active:scale-[0.98]"
                  >
                    Contact
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Compact mode dots indicator */}
            <AnimatePresence mode="wait">
              {isCompact && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1.5 ml-3"
                >
                  <span className="w-2 h-2 rounded-full bg-ink-muted/50" />
                  <span className="w-2 h-2 rounded-full bg-ink-muted/70" />
                  <span className="w-2 h-2 rounded-full bg-ink-primary" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Hamburger - hidden in compact mode */}
            <AnimatePresence mode="wait">
              {!isCompact && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && !isCompact && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 
                       rounded-2xl
                       bg-white/5 backdrop-blur-2xl
                       border border-white/10
                       p-6"
            style={{
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xl font-sans font-semibold text-ink-primary py-3
                               border-b border-white/5
                               flex items-center justify-between"
                  >
                    {link.label}
                    <span className="text-ink-subtle text-sm">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/projects"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-sans font-semibold text-ink-primary py-3
                           border-b border-white/5
                           flex items-center justify-between"
              >
                All Projects
                <span className="text-ink-subtle text-sm">04</span>
              </Link>
              <a
                href={links.bookCall}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 py-3 px-6 rounded-full text-center
                           bg-ink-primary text-bg-primary
                           font-semibold text-base"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
