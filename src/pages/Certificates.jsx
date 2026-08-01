import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import certificates from '../data/certificates'

function CertificateCard({ cert, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden
                 hover:border-slate-600 transition-all duration-300
                 hover:shadow-2xl hover:shadow-black/50 flex flex-col"
    >
      {/* Certificate image */}
      <div className="relative h-48 overflow-hidden bg-slate-800 flex-shrink-0">
        <div
          className="absolute inset-0 z-10 opacity-30 group-hover:opacity-20 transition-opacity duration-300"
          style={{ background: `linear-gradient(135deg, ${cert.color}40, transparent)` }}
        />
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover object-top
                     group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 z-20">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm text-white"
            style={{
              backgroundColor: `${cert.color}20`,
              borderColor: `${cert.color}50`,
            }}
          >
            {cert.date}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center
                        rounded-full backdrop-blur-sm"
             style={{ backgroundColor: `${cert.color}30`, color: cert.color }}>
          <FiAward size={14} />
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h2 className="text-white font-bold text-base leading-tight
                         group-hover:text-cyan-400 transition-colors duration-200">
            {cert.title}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {cert.issuer}
            <span className="text-slate-600 mx-1.5">·</span>
            {cert.credential}
          </p>
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-1.5 flex-1">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 text-[11px] rounded-md
                         bg-slate-800 border border-slate-700
                         text-slate-300 font-mono"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Verify button */}
        <a
          href={cert.verify}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                     border border-slate-700 text-slate-300 text-sm font-medium
                     hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5
                     transition-all duration-200"
        >
          <FiExternalLink size={14} />
          Verify Credential
        </a>
      </div>
    </motion.article>
  )
}

function Certificates() {
  return (
    <section className="bg-slate-950 pt-20 pb-24">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           border border-amber-500/30 bg-amber-500/10
                           text-amber-400 text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Credentials
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Certifications &amp; <span className="text-amber-400">Achievements</span>
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Verified credentials in AI, programming, and networking — earned through hands-on learning and assessment.
          </p>

          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="text-3xl font-bold text-cyan-400">{certificates.length}</span>
            <span className="text-slate-500 text-sm">certificates earned</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
