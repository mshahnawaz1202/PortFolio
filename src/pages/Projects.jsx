import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'

const categories = [
  "All",
  "C++",
  "Python",
  "Java",
  "Web",
  "Mobile",
  "Other",
  "Data-Science",
];

const categoryGlow = {
  "C++": "from-blue-500/20 to-cyan-500/20",
  "Python": "from-yellow-500/20 to-amber-500/20",
  "Java": "from-orange-500/20 to-red-500/20",
  "Web": "from-emerald-500/20 to-green-500/20",
  "Mobile": "from-purple-500/20 to-violet-500/20",
  "Other": "from-slate-500/20 to-slate-400/20",
  "Data-Science": "from-red-500/20 to-blue-400/20",
};

const categoryBadge = {
  "C++": "bg-blue-500/10 text-blue-300 border-blue-500/25",
  "Python": "bg-amber-500/10 text-amber-300 border-amber-500/25",
  "Java": "bg-orange-500/10 text-orange-300 border-orange-500/25",
  "Web": "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
  "Mobile": "bg-purple-500/10 text-purple-300 border-purple-500/25",
  "Other": "bg-slate-500/10 text-slate-300 border-slate-500/25",
  "Data-Science": "bg-red-500/10 text-red-300 border-red-500/25",
};
function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const truncated = project.description.length > 110
  const displayDesc = expanded || !truncated
    ? project.description
    : project.description.slice(0, 110) + '…'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden
                 hover:border-slate-600 transition-all duration-300
                 hover:shadow-2xl hover:shadow-black/50 flex flex-col"
    >
      {/* Project image */}
      <div className="relative h-44 overflow-hidden bg-slate-800 flex-shrink-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${categoryGlow[project.category]} z-10`} />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center
                     group-hover:scale-105 transition-transform duration-500
                     opacity-70 group-hover:opacity-90"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${categoryBadge[project.category]}`}>
            {project.category}
          </span>
        </div>
        {/* GitHub hover icon */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center
                     rounded-full bg-black/60 backdrop-blur-sm text-white
                     hover:bg-cyan-500 transition-all duration-200
                     opacity-0 group-hover:opacity-100"
          aria-label={`GitHub — ${project.title}`}
        >
          <FiGithub size={14} />
        </a>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h2 className="text-white font-bold text-base leading-tight
                       group-hover:text-cyan-400 transition-colors duration-200">
          {project.title}
        </h2>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {displayDesc}
          {truncated && (
            <button
              onClick={() => setExpanded(e => !e)}
              className="ml-1 text-cyan-400 hover:text-cyan-300 text-xs font-medium underline-offset-2 hover:underline"
            >
              {expanded ? 'less' : 'more'}
            </button>
          )}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.techUsed.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] rounded-md
                         bg-slate-800 border border-slate-700
                         text-slate-300 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                     border border-slate-700 text-slate-300 text-sm font-medium
                     hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5
                     transition-all duration-200"
        >
          <FiGithub size={14} />
          View on GitHub
        </a>
      </div>
    </motion.article>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="bg-slate-950 pt-20 pb-24">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-0 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute top-80 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           border border-violet-500/30 bg-violet-500/10
                           text-violet-400 text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            My Work
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Featured <span className="text-violet-400">Projects</span>
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A collection spanning systems programming, web development, data science, mobile, and automation.
          </p>

          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="text-3xl font-bold text-cyan-400">{projects.length}</span>
            <span className="text-slate-500 text-sm">projects built</span>
          </div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length
            const isActive = activeFilter === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500 text-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white'
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-xs ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>
                  ({count})
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={`${project.id}-${project.title}`} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-500 mt-20 text-lg"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  )
}

export default Projects