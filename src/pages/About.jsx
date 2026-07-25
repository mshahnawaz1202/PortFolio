import React from 'react'
import { motion } from 'framer-motion'
import { FiBook, FiTarget, FiCode, FiCpu, FiSmartphone, FiGitBranch, FiZap } from 'react-icons/fi'
import avatarImg from '../assets/avatar.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const education = [
  {
    degree: 'BS Software Engineering',
    institution: 'FAST-NUCES CFD Campus',
    period: '2023 – Present',
    details: 'Studying core CS fundamentals: DSA, OS, OOP, Databases, Software Engineering principles, and more.',
    emoji: '🎓',
    accent: 'cyan',
  },
  {
    degree: 'FSc Pre-Engineering',
    institution: 'Islamia College Chiniot',
    period: '2021 – 2023',
    details: 'Strong foundation in mathematics and physics, developing analytical thinking and problem-solving skills.',
    emoji: '📚',
    accent: 'violet',
  },
]

const interests = [
  { icon: <FiCode size={20} />, label: 'Full Stack Web',  desc: 'MERN stack & Django web applications', accent: 'cyan' },
  { icon: <FiZap size={20} />,  label: 'Machine Learning', desc: 'Data pipelines, Scikit-learn & ML models', accent: 'amber' },
  { icon: <FiSmartphone size={20} />, label: 'Mobile Dev', desc: 'Kotlin + Jetpack Compose Android apps', accent: 'purple' },
  { icon: <FiCpu size={20} />,  label: 'Systems Programming', desc: 'C++ DSA, OS concepts & low-level design', accent: 'emerald' },
  { icon: <FiGitBranch size={20} />, label: 'Open Source', desc: 'Building & contributing in public on GitHub', accent: 'rose' },
  { icon: <FiTarget size={20} />, label: 'Problem Solving', desc: 'Competitive programming & algorithmic thinking', accent: 'violet' },
]

const accentStyles = {
  cyan:    { text: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/30',    dot: 'bg-cyan-400' },
  violet:  { text: 'text-violet-400',  bg: 'bg-violet-500/10',  border: 'border-violet-500/30',  dot: 'bg-violet-400' },
  amber:   { text: 'text-amber-400',   bg: 'bg-amber-500/10',   border: 'border-amber-500/30',   dot: 'bg-amber-400' },
  purple:  { text: 'text-purple-400',  bg: 'bg-purple-500/10',  border: 'border-purple-500/30',  dot: 'bg-purple-400' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', dot: 'bg-emerald-400' },
  rose:    { text: 'text-rose-400',    bg: 'bg-rose-500/10',    border: 'border-rose-500/30',    dot: 'bg-rose-400' },
}

function About() {
  return (
    <div className="bg-slate-950 min-h-screen">

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-violet-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                               border border-cyan-500/30 bg-cyan-500/10
                               text-cyan-400 text-xs font-medium tracking-widest uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                About Me
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Passionate <span className="text-cyan-400">Developer</span><br />
              &amp; <span className="text-violet-400">Problem Solver</span>
            </motion.h1>

            <motion.p {...fadeUp(0.3)} className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              I'm <span className="text-white font-semibold">Muhammad Shah Nawaz</span>, a Software Engineering
              student at FAST-NUCES with a passion for building modern, scalable web applications and solving
              real-world problems through technology.
            </motion.p>

            <motion.p {...fadeUp(0.4)} className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto lg:mx-0 mt-4">
              I enjoy transforming ideas into practical software using clean code, intuitive interfaces, and
              software engineering best practices. Continuously expanding my knowledge in full-stack development,
              machine learning, and software architecture.
            </motion.p>

            {/* Quick stats */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8">
              {[
                { value: '2+', label: 'Years Coding' },
                { value: '10+', label: 'Projects Built' },
                { value: '7+', label: 'Technologies' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-cyan-400">{value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 animate-spin-slow p-[3px]">
                <div className="w-full h-full rounded-full bg-slate-950" />
              </div>
              {/* Image */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden border border-slate-700">
                <img src={avatarImg} alt="Muhammad Shah Nawaz" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── EDUCATION ─────────────────────────────────────── */}
      <section className="py-16 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
              <FiBook size={18} />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
            <div className="flex-1 h-px bg-slate-800" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/40 to-transparent hidden sm:block" />

            <div className="flex flex-col gap-6">
              {education.map((edu, i) => {
                const a = accentStyles[edu.accent]
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex gap-6"
                  >
                    {/* Timeline dot */}
                    <div className="hidden sm:flex flex-col items-center flex-shrink-0 w-10">
                      <div className={`w-4 h-4 rounded-full border-2 border-slate-950 ${a.dot} mt-1 z-10`} />
                    </div>

                    {/* Card */}
                    <div className={`flex-1 bg-slate-900 border ${a.border} rounded-2xl p-6
                                     hover:shadow-xl transition-all duration-300`}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{edu.emoji}</span>
                            <h3 className={`font-bold text-lg ${a.text}`}>{edu.degree}</h3>
                          </div>
                          <p className="text-slate-300 font-medium text-sm">{edu.institution}</p>
                          <p className="text-slate-500 text-sm mt-2">{edu.details}</p>
                        </div>
                        <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border ${a.bg} ${a.text} ${a.border}`}>
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERESTS ─────────────────────────────────────── */}
      <section className="py-16 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
              <FiZap size={18} />
            </div>
            <h2 className="text-2xl font-bold text-white">Interests</h2>
            <div className="flex-1 h-px bg-slate-800" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((item, i) => {
              const a = accentStyles[item.accent]
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -3 }}
                  className={`flex gap-4 items-start p-5 rounded-2xl bg-slate-900 border ${a.border}
                               hover:shadow-lg transition-all duration-300 cursor-default`}
                >
                  <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl ${a.bg} ${a.text}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-sm ${a.text} mb-1`}>{item.label}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CAREER GOAL ───────────────────────────────────── */}
      <section className="py-16 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <FiTarget size={18} />
            </div>
            <h2 className="text-2xl font-bold text-white">Career Goal</h2>
            <div className="flex-1 h-px bg-slate-800" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-900/50
                       border border-emerald-500/20 rounded-2xl p-8 overflow-hidden"
          >
            {/* Decorative quote mark */}
            <div className="absolute top-4 left-6 text-7xl font-serif text-emerald-500/10 leading-none select-none">"</div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center
                               rounded-xl bg-emerald-500/10 text-emerald-400">
                <FiTarget size={22} />
              </div>
              <div>
                <p className="text-slate-300 text-base leading-relaxed">
                  My goal is to become a skilled software engineer capable of building{' '}
                  <span className="text-emerald-400 font-semibold">scalable applications</span> that create
                  meaningful impact while continuously learning emerging technologies. I aim to contribute to
                  innovative teams, ship production-grade software, and grow as both a{' '}
                  <span className="text-cyan-400 font-semibold">developer and a leader</span>.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-8 h-px bg-emerald-500/50" />
                  <span className="text-emerald-500/60 text-xs font-medium tracking-wide">Muhammad Shah Nawaz</span>
                </div>
              </div>
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default About