import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiCode, FiLayers, FiMail } from 'react-icons/fi'
import { projects } from '../data/projects'

function Home() {
  const navigate = useNavigate()
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Featured Projects Teaser Section */}
      <section className="py-20 bg-slate-950/90 border-t border-slate-900 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl font-bold text-white">Featured <span className="text-cyan-400">Projects</span></h2>
            </div>
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors group"
            >
              View All Projects ({projects.length})
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => navigate('/projects')}
                className="group cursor-pointer bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col"
              >
                <div className="h-40 overflow-hidden bg-slate-800 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-slate-800">
                    {project.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1 gap-2">
                  <h3 className="text-white font-bold text-base group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techUsed.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-16 bg-gradient-to-r from-cyan-950/40 via-slate-950 to-purple-950/40 border-t border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Interested in collaborating or hiring for your team?
          </h2>
          <p className="text-slate-400 text-sm max-w-lg">
            I'm always open to discussing new projects, software engineering roles, or innovative tech ideas.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiMail size={16} />
            Get In Touch
          </button>
        </div>
      </section>
    </>
  )
}

export default Home