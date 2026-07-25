import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { socialLinks } from '../data/social_links'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const techStack = ['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'MongoDB']

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">

      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">

        {/* Left — Text */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">

          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div {...fadeUp(0.2)}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Muhammad
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Shah Nawaz
              </span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-lg sm:text-xl text-slate-400 font-medium"
          >
            Full Stack Developer &{' '}
            <span className="text-slate-300">UI Enthusiast</span>
          </motion.p>

          {/* Description */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-slate-500 text-base leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            I build modern, scalable web applications with clean code and pixel-perfect designs.
            Passionate about creating experiences that users love.
          </motion.p>

          {/* Tech Stack pills */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-md bg-slate-800 border border-slate-700 text-slate-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2"
          >
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-0.5"
            >
              View Projects
              <FiArrowRight size={16} />
            </button>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-semibold text-sm hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FiDownload size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            {...fadeUp(0.7)}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <span className="text-slate-600 text-xs uppercase tracking-widest">Follow me</span>
            <div className="h-px w-8 bg-slate-700" />
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </motion.div>

        </div>

        {/* Right — Avatar / Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex-shrink-0 relative"
        >
          {/* Rotating border ring */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 animate-spin-slow p-[3px]">
              <div className="w-full h-full rounded-full bg-slate-950" />
            </div>

            {/* Avatar placeholder with initials */}
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500">
                  MSN
                </div>
                <div className="text-slate-500 text-xs mt-1 tracking-widest uppercase">Developer</div>
              </div>
            </div>

            {/* Floating badge — Experience */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 shadow-xl"
            >
              <div className="text-cyan-400 font-bold text-lg leading-none">2+</div>
              <div className="text-slate-400 text-xs">Years Exp.</div>
            </motion.div>

            {/* Floating badge — Projects */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 shadow-xl"
            >
              <div className="text-purple-400 font-bold text-lg leading-none">20+</div>
              <div className="text-slate-400 text-xs">Projects</div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-slate-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
