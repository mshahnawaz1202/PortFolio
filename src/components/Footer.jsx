import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp } from 'react-icons/fi'
import { socialLinks } from '../data/social_links'

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
]

const socials = [
  { icon: FiGithub,    href: socialLinks.github,    label: 'GitHub' },
  { icon: FiLinkedin,  href: socialLinks.linkedin,   label: 'LinkedIn' },
  { icon: FiInstagram, href: socialLinks.instagram,  label: 'Instagram' },
  { icon: FiMail,      href: socialLinks.email,      label: 'Email' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 mt-auto">

      {/* Subtle gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-white w-fit hover:text-cyan-400 transition-colors duration-200"
            >
              MSN<span className="text-cyan-400">.</span>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer crafting clean, performant, and beautiful web experiences.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <span
                    onClick={() => scrollToSection(to)}
                    className="text-sm transition-colors duration-200 flex items-center gap-2 group text-slate-400 hover:text-white cursor-pointer"
                  >
                    <span className="w-4 h-px bg-slate-600 group-hover:bg-cyan-400 group-hover:w-6 transition-all duration-300 inline-block" />
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={socialLinks.email}
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-500 transition-all duration-200">
                  <FiMail size={14} />
                </span>
                shahnawaz.swz1202@gmail.com
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-500 transition-all duration-200">
                  <FiGithub size={14} />
                </span>
                github.com/mshahnawaz1202
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-500 transition-all duration-200">
                  <FiLinkedin size={14} />
                </span>
                linkedin.com/in/muhammad-shah-nawaz-se
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {year} Muhammad Shah Nawaz. Software Engineer.
          </p>
          <p className="text-slate-600 text-xs">
            
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
