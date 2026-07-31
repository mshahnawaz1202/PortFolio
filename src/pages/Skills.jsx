import { motion } from 'framer-motion'
import { FiGitBranch, FiGithub, FiTerminal, FiDatabase, FiSmartphone, FiLayout, FiCpu } from 'react-icons/fi'

// ─── Asset icons from /assets ────────────────────────────────────────────────
import cppIcon from '../assets/cpp.svg'
import pythonIcon from '../assets/python.svg'
import javaIcon from '../assets/java.png'
import jsIcon from '../assets/javascript.svg'
import kotlinIcon from '../assets/kotlin.svg'
import bashIcon from '../assets/bash.png'
import htmlIcon from '../assets/html5.svg'
import cssIcon from '../assets/css.svg'
import djangoIcon from '../assets/django.svg'
import mysqlIcon from '../assets/mysql.svg'
import numpyIcon from '../assets/numpy.svg'
import pandasIcon from '../assets/pandas.svg'
import matplotlibIcon from '../assets/matplotlib.png'
import sklearnIcon from '../assets/scikitlearn.svg'
import streamlitIcon from '../assets/streamlit.svg'
import androidIcon from '../assets/android.svg'
import xmlIcon from '../assets/xml.svg'
import jwt from '../assets/jwt.svg'
import jest from '../assets/jest.svg'

// ─── Skill Categories ─────────────────────────────────────────────────────────
const skillCategories = [
  {
    id: 'languages',
    label: 'Programming Languages',
    icon: <FiCpu size={18} />,
    accent: 'cyan',
    skills: [
      { name: 'C++', icon: cppIcon, level: 'Advanced' },
      { name: 'Python', icon: pythonIcon, level: 'Advanced' },
      { name: 'Java', icon: javaIcon, level: 'Intermediate' },
      { name: 'JavaScript', icon: jsIcon, level: 'Advanced' },
      { name: 'Kotlin', icon: kotlinIcon, level: 'Intermediate' },
      { name: 'Bash', icon: bashIcon, level: 'Advanced' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend & UI',
    icon: <FiLayout size={18} />,
    accent: 'violet',
    skills: [
      { name: 'HTML5', icon: htmlIcon, level: 'Advanced' },
      { name: 'CSS3', icon: cssIcon, level: 'Advanced' },
      { name: 'JavaScript', icon: jsIcon, level: 'Intermediate' },
      { name: 'React', emoji: '⚛️', level: 'Intermediate' },
      { name: 'Tailwind', emoji: '🎨', level: 'Intermediate' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: <FiTerminal size={18} />,
    accent: 'emerald',
    skills: [
      { name: 'Django', icon: djangoIcon, level: 'Advanced' },
      { name: 'Node.js', emoji: '🟢', level: 'Intermediate' },
      { name: 'Express.js', emoji: '🚂', level: 'Intermediate' },
      { name: 'REST APIs', emoji: '🔗', level: 'Intermediate' },
      {
        name: 'JWT (JSON Web Token)',
        icon: jwt,
        level: 'Intermediate'
      },
      {
        name : "Jest",
        icon : jest,
        level : "Intermediate"
      }
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: <FiDatabase size={18} />,
    accent: 'amber',
    skills: [
      { name: 'MySQL', icon: mysqlIcon, level: 'Intermediate' },
      { name: 'MongoDB', emoji: '🍃', level: 'Intermediate' },
      { name: 'SQLite', emoji: '💾', level: 'Intermediate' },
    ],
  },
  {
    id: 'data/ml',
    label: 'Data Science & ML',
    icon: <span className="text-lg">🤖</span>,
    accent: 'orange',
    skills: [
      { name: 'NumPy', icon: numpyIcon, level: 'Intermediate' },
      { name: 'Pandas', icon: pandasIcon, level: 'Intermediate' },
      { name: 'Matplotlib', icon: matplotlibIcon, level: 'Intermediate' },
      { name: 'Scikit-learn', icon: sklearnIcon, level: 'Intermediate' },
      { name: 'Streamlit', icon: streamlitIcon, level: 'Intermediate' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    icon: <FiSmartphone size={18} />,
    accent: 'purple',
    skills: [
      { name: 'Kotlin', icon: kotlinIcon, level: 'Intermediate' },
      { name: 'Android SDK', icon: androidIcon, level: 'Intermediate' },
      { name: 'XML Layouts', icon: xmlIcon, level: 'Intermediate' },
      { name: 'Jetpack Compose', emoji: '🎭', level: 'Intermediate' },
      { name: 'Firebase', emoji: '🔥', level: 'Intermediate' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    icon: <FiGitBranch size={18} />,
    accent: 'rose',
    skills: [
      { name: 'Git', icon: null, emoji: '🌿', level: 'Advanced' },
      { name: 'GitHub', icon: null, emoji: '🐙', level: 'Advanced', FiIcon: FiGithub },
      { name: 'Linux/WSL2', icon: bashIcon, level: 'Intermediate' },
      { name: 'Postman', emoji: '📮', level: 'Intermediate' },
      { name: 'VS Code', emoji: '🖥️', level: 'Advanced' },
      { name: 'Selenium', emoji: '🤖', level: 'Intermediate' },
    ],
  },
]

const levelColor = {
  'Advanced': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/25',
  'Intermediate': 'text-violet-400 bg-violet-400/10 border-violet-400/25',
}

const accentBorder = {
  cyan: 'border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/10',
  violet: 'border-violet-500/30 hover:border-violet-500/60 hover:shadow-violet-500/10',
  emerald: 'border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-emerald-500/10',
  amber: 'border-amber-500/30 hover:border-amber-500/60 hover:shadow-amber-500/10',
  orange: 'border-orange-500/30 hover:border-orange-500/60 hover:shadow-orange-500/10',
  purple: 'border-purple-500/30 hover:border-purple-500/60 hover:shadow-purple-500/10',
  rose: 'border-rose-500/30 hover:border-rose-500/60 hover:shadow-rose-500/10',
}

const accentText = {
  cyan: 'text-cyan-400',
  violet: 'text-violet-400',
  emerald: 'text-emerald-400',
  amber: 'text-amber-400',
  orange: 'text-orange-400',
  purple: 'text-purple-400',
  rose: 'text-rose-400',
}

const accentBg = {
  cyan: 'bg-cyan-500/10',
  violet: 'bg-violet-500/10',
  emerald: 'bg-emerald-500/10',
  amber: 'bg-amber-500/10',
  orange: 'bg-orange-500/10',
  purple: 'bg-purple-500/10',
  rose: 'bg-rose-500/10',
}

function SkillCard({ skill, accent }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`flex flex-col items-center gap-2.5 p-4 rounded-xl
                  bg-slate-900 border ${accentBorder[accent]}
                  hover:shadow-lg transition-all duration-300 cursor-default`}
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center">
        {skill.icon ? (
          <img src={skill.icon} alt={skill.name} className="w-9 h-9 object-contain" />
        ) : skill.FiIcon ? (
          <skill.FiIcon size={28} className={accentText[accent]} />
        ) : (
          <span className="text-2xl">{skill.emoji}</span>
        )}
      </div>

      {/* Name */}
      <span className="text-slate-200 text-xs font-semibold text-center leading-tight">
        {skill.name}
      </span>

      {/* Level badge */}
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${levelColor[skill.level]}`}>
        {skill.level}
      </span>
    </motion.div>
  )
}

function CategorySection({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-9 h-9 flex items-center justify-center rounded-lg ${accentBg[category.accent]} ${accentText[category.accent]}`}>
          {category.icon}
        </div>
        <h2 className={`text-lg font-bold ${accentText[category.accent]}`}>
          {category.label}
        </h2>
        <div className="flex-1 h-px bg-slate-800" />
        <span className="text-slate-600 text-xs">{category.skills.length} skills</span>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} accent={category.accent} />
        ))}
      </div>
    </motion.div>
  )
}

function Skills() {
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)

  return (
    <section className="bg-slate-950 pt-20 pb-24">

      {/* BG blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           border border-cyan-500/30 bg-cyan-500/10
                           text-cyan-400 text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Tech Stack
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Skills &amp; <span className="text-cyan-400">Technologies</span>
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A diverse toolkit built through years of building real projects — from low-level systems to full-stack web apps and ML pipelines.
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-10 mt-7">
            {[
              { value: skillCategories.length, label: 'Categories' },
              { value: `${totalSkills}+`, label: 'Technologies' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{value}</div>
                <div className="text-slate-500 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Level legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(levelColor).map(([level, cls]) => (
            <span key={level} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${cls}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {level}
            </span>
          ))}
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {skillCategories.map((cat, i) => (
            <CategorySection key={cat.id} category={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills