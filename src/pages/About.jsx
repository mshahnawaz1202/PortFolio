import { useEffect, useRef } from 'react'
import { animate, createTimeline, stagger } from 'animejs'
import { FiBook, FiTarget, FiCode, FiCpu, FiGitBranch, FiZap, FiDatabase } from 'react-icons/fi'

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
  { icon: <FiCode size={20} />, label: 'Full Stack Web', desc: 'MERN stack & Django web applications', accent: 'cyan' },
  { icon: <FiDatabase size={20} />, label: 'Data Science', desc: 'Data analysis, Scikit-learn & predictive models', accent: 'purple' },
  { icon: <FiZap size={20} />, label: 'Machine Learning', desc: 'Data pipelines & ML models', accent: 'amber' },
  { icon: <FiCpu size={20} />, label: 'Systems Programming', desc: 'C++ DSA, OS concepts & low-level design', accent: 'emerald' },
  { icon: <FiGitBranch size={20} />, label: 'Open Source', desc: 'Building & contributing in public on GitHub', accent: 'rose' },
  { icon: <FiTarget size={20} />, label: 'Problem Solving', desc: 'Competitive programming & algorithmic thinking', accent: 'violet' },
]

const accentStyles = {
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', dot: 'bg-cyan-400' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30', dot: 'bg-violet-400' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', dot: 'bg-amber-400' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', dot: 'bg-purple-400' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', dot: 'bg-emerald-400' },
  rose: { text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30', dot: 'bg-rose-400' },
}

function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    try {
      const timeline = createTimeline({
        easing: 'easeOutExpo',
        duration: 800
      })

      timeline
        .add('.about-header-item', {
          translateY: [30, 0],
          opacity: [0, 1],
          delay: stagger(120)
        })
        .add('.about-stat-card', {
          scale: [0.9, 1],
          opacity: [0, 1],
          delay: stagger(100)
        }, '-=400')
        .add('.interest-card', {
          translateY: [20, 0],
          opacity: [0, 1],
          delay: stagger(80)
        }, '-=400')

      animate('.ambient-glow', {
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
        duration: 6000,
        loop: true,
        easing: 'easeInOutSine'
      })
    } catch (e) {
      console.log('Anime.js animation notice:', e)
    }
  }, [])

  return (
    <div ref={containerRef} className="bg-slate-950">

      {/* ── HERO / INTRO ────────────────────────────────── */}
      <section className="relative pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="ambient-glow absolute top-10 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="ambient-glow absolute top-10 right-1/3 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="about-header-item">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             border border-cyan-500/30 bg-cyan-500/10
                             text-cyan-400 text-xs font-medium tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              About Me
            </span>
          </div>

          <h1 className="about-header-item text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
            Passionate <span className="text-cyan-400">Developer</span> &amp; <span className="text-violet-400">Problem Solver</span>
          </h1>

          <p className="about-header-item text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            I'm <span className="text-cyan-400 font-semibold">Muhammad Shah Nawaz</span>, a Software Engineering
            student at FAST-NUCES with a strong drive for crafting performance-driven, scalable web applications and intuitive user experiences.
          </p>

          <p className="about-header-item text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            I enjoy transforming ideas into clean, functional code using modern full-stack development, software engineering best practices, and continuous learning across system design and machine learning.
          </p>

          {/* Quick stats grid */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { value: '10+', label: 'Projects Completed', accent: 'text-cyan-400' },
              { value: '7+', label: 'Core Technologies', accent: 'text-violet-400' },
              { value: '2+', label: 'Years Experience', accent: 'text-emerald-400' },
            ].map(({ value, label, accent }) => (
              <div key={label} className="about-stat-card bg-slate-900/80 border border-slate-800 rounded-2xl px-6 py-4 min-w-[140px] text-center hover:border-slate-700 transition-colors">
                <div className={`text-3xl font-extrabold ${accent}`}>{value}</div>
                <div className="text-slate-400 text-xs mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ─────────────────────────────────────── */}
      <section className="py-16 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
              <FiBook size={18} />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/40 to-transparent hidden sm:block" />

            <div className="flex flex-col gap-6">
              {education.map((edu) => {
                const a = accentStyles[edu.accent]
                return (
                  <div key={edu.degree} className="flex gap-6">
                    <div className="hidden sm:flex flex-col items-center flex-shrink-0 w-10">
                      <div className={`w-4 h-4 rounded-full border-2 border-slate-950 ${a.dot} mt-1 z-10`} />
                    </div>

                    <div className={`flex-1 bg-slate-900 border ${a.border} rounded-2xl p-6 hover:shadow-xl transition-all duration-300`}>
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
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERESTS ─────────────────────────────────────── */}
      <section className="py-16 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
              <FiZap size={18} />
            </div>
            <h2 className="text-2xl font-bold text-white">Interests</h2>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((item) => {
              const a = accentStyles[item.accent]
              return (
                <div
                  key={item.label}
                  className={`interest-card flex gap-4 items-start p-5 rounded-2xl bg-slate-900 border ${a.border} hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default`}
                >
                  <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl ${a.bg} ${a.text}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-sm ${a.text} mb-1`}>{item.label}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About