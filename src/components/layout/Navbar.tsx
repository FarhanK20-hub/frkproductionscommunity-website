'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '@/data'

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  const handleDrawerLinkClick = () => {
    setDrawerOpen(false)
  }

  if (!mounted) return null

  return (
    <>
      {/* ── Floating Navbar ── */}
      <nav
        className="navbar-enter fixed top-7 left-1/2 -translate-x-1/2 z-[100] bg-[rgba(17,17,17,0.85)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.08)] rounded-[25px] px-6 py-[10px] flex items-center gap-12 w-max max-w-[90vw]"
        role="navigation"
        aria-label="Main navigation"
        style={{ WebkitBackdropFilter: 'blur(12px)' }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Frk_Productions_Community_logo-removebg-preview.png" alt="FRK Productions" className="h-7 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] font-medium text-[rgba(232,232,232,0.5)] transition-colors duration-200 hover:text-[#e8e8e8]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="https://chat.whatsapp.com/IrOteZX7IYt0IrvtDS6xub"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#c9a84c] text-[#0a0a0a] rounded-[6px] text-[14px] font-semibold px-[18px] py-2 shadow-[0_8px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] transition-all duration-200"
            aria-label="Join FRK Productions for free"
          >
            Join Free
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent p-1 cursor-pointer"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
        >
          <span className="block w-[22px] h-[2px] bg-[#e8e8e8] rounded-[2px] transition-all duration-300" />
          <span className="block w-[22px] h-[2px] bg-[#e8e8e8] rounded-[2px] transition-all duration-300" />
          <span className="block w-[22px] h-[2px] bg-[#e8e8e8] rounded-[2px] transition-all duration-300" />
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[rgba(10,10,10,0.97)] z-[99] flex flex-col items-center justify-center gap-8"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close button */}
            <button
              className="absolute top-8 right-8 bg-transparent text-[rgba(232,232,232,0.5)] text-2xl cursor-pointer font-sans"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation menu"
            >
              ✕
            </button>

            {/* Links */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleDrawerLinkClick}
                className="text-[28px] font-serif font-semibold text-[#e8e8e8] transition-colors duration-200 hover:text-[#c9a84c]"
              >
                {link.label}
              </a>
            ))}

            {/* CTA */}
            <a
              href="https://chat.whatsapp.com/IrOteZX7IYt0IrvtDS6xub"
              target="_blank" rel="noopener noreferrer"
              onClick={handleDrawerLinkClick}
              className="inline-flex items-center justify-center bg-[#c9a84c] text-[#0a0a0a] rounded-[6px] text-base font-semibold px-7 py-3 shadow-[0_8px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] transition-all duration-200"
            >
              Join Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
