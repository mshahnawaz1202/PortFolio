import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine which section is in view
      const sectionIds = links.map(l => l.to)
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/30'
      : 'bg-transparent'
  }`

  const linkBase = 'relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full cursor-pointer'
  const linkActive = 'text-cyan-400 after:w-full'
  const linkInactive = 'text-slate-300 hover:text-white'

  return (
    <nav className={navClass}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold text-white tracking-tight hover:text-cyan-400 transition-colors duration-200"
        >
          Shah Nawaz<span className="text-cyan-400">.</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <span
                onClick={() => scrollToSection(to)}
                className={`${linkBase} ${activeSection === to ? linkActive : linkInactive}`}
              >
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button — Hire Me scrolls to contact */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30"
        >
          Hire Me
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700/50 px-6 pb-6 pt-4"
          >
            <ul className="flex flex-col gap-4">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <span
                    onClick={() => { scrollToSection(to); setMenuOpen(false) }}
                    className={`block text-base font-medium py-2 border-b border-slate-800 transition-colors duration-200 cursor-pointer ${
                      activeSection === to ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {label}
                  </span>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { scrollToSection('contact'); setMenuOpen(false) }}
                  className="block w-full text-center mt-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition-all duration-200"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar