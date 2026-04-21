import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { useTheme } from '../context/ThemeContext'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { navLinks } from '../data/portfolio'

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const sectionIds = navLinks.map(l => l.href.replace('#', ''))
  const active = useScrollSpy(sectionIds)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-3 left-0 right-0 z-50 px-4 transition-all duration-300"
      >
        <div
          className={`max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between
            rounded-2xl border transition-all duration-300 ${
            scrolled
              ? dark
                ? 'bg-slate-950/90 backdrop-blur-xl border-white/10 shadow-xl shadow-black/30'
                : 'bg-white/90 backdrop-blur-xl border-slate-200/80 shadow-lg shadow-slate-200/50'
              : dark
                ? 'bg-slate-950/50 backdrop-blur-md border-white/5'
                : 'bg-white/60 backdrop-blur-md border-slate-100'
          }`}
        >
          {/* ── Logo ── */}
          <a
            href="#hero"
            className="flex items-center gap-2 group"
            onClick={() => setMenuOpen(false)}
          >
            {/* Image Logo */}
            <div
              className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center
              transition-transform group-hover:scale-110"
            >
              <img
                src="https://i.ibb.co.com/Hfw4s5wP/Whats-App-Image-2025-05-15-at-00-52-15-043ed9e1.jpg"
                alt="Ruman"
                className="w-full h-full object-cover"
              />
            </div>

            <span
              className={`font-bold text-base tracking-tight font-display hidden sm:block ${
                dark ? 'text-white' : 'text-slate-800'
              }`}
            >
              Ruman
              <span className={dark ? 'text-amber-400' : 'text-brand-500'}>
                .
              </span>
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={label}
                  href={href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? dark
                        ? 'text-amber-400'
                        : 'text-brand-600'
                      : dark
                        ? 'text-slate-400 hover:text-white hover:bg-white/5'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-lg -z-10 ${
                        dark ? 'bg-amber-400/10' : 'bg-brand-50'
                      }`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  {label}
                </a>
              )
            })}
          </nav>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`p-2 rounded-xl transition-colors ${
                dark
                  ? 'text-amber-400 hover:bg-amber-400/10'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-brand-600'
              }`}
            >
              {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className={`md:hidden p-2 rounded-xl transition-colors ${
                dark
                  ? 'text-white hover:bg-white/8'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-8 md:hidden ${
              dark ? 'bg-slate-950' : 'bg-white'
            }`}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  className={`px-5 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                    dark
                      ? 'text-slate-200 hover:text-amber-400 hover:bg-amber-400/8'
                      : 'text-slate-700 hover:text-brand-600 hover:bg-brand-50'
                  }`}
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            <div className={`mt-8 pt-8 border-t ${dark ? 'border-white/10' : 'border-slate-100'}`}>
              <p className={`text-xs tracking-widest uppercase mb-3 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                Theme
              </p>
              <button
                onClick={toggle}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl w-full transition-colors ${
                  dark
                    ? 'bg-amber-400/10 text-amber-400'
                    : 'bg-brand-50 text-brand-600'
                }`}
              >
                {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
                <span className="font-medium">{dark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}