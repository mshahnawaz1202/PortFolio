import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiSend, FiMapPin, FiCheckCircle, FiCopy } from 'react-icons/fi'
import { socialLinks } from '../data/social_links'

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    value: 'shahnawaz.swz1202@gmail.com',
    href: socialLinks.email,
    action: 'mailto',
    accent: 'cyan',
  },
  {
    icon: FiLinkedin,
    title: 'LinkedIn',
    value: 'muhammad-shah-nawaz-se',
    href: socialLinks.linkedin,
    action: 'link',
    accent: 'violet',
  },
  {
    icon: FiGithub,
    title: 'GitHub',
    value: 'mshahnawaz1202',
    href: socialLinks.github,
    action: 'link',
    accent: 'emerald',
  },
  {
    icon: FiInstagram,
    title: 'Instagram',
    value: '@m.shahnawaz_1202',
    href: socialLinks.instagram,
    action: 'link',
    accent: 'rose',
  },
]

const accentStyles = {
  cyan:    { text: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/30',    glow: 'hover:shadow-cyan-500/10' },
  violet:  { text: 'text-violet-400',  bg: 'bg-violet-500/10',  border: 'border-violet-500/30',  glow: 'hover:shadow-violet-500/10' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', glow: 'hover:shadow-emerald-500/10' },
  rose:    { text: 'text-rose-400',    bg: 'bg-rose-500/10',    border: 'border-rose-500/30',    glow: 'hover:shadow-rose-500/10' },
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open default mail client with formatted email
    const mailtoUrl = `mailto:shahnawaz.swz1202@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact Form'
    )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoUrl
    setSubmitted(true)
  }

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section className="min-h-screen bg-slate-950 pt-28 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Get In Touch
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Let's Work <span className="text-cyan-400">Together</span>
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Have a project in mind, an opportunity to discuss, or just want to connect? Feel free to reach out anytime!
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column — Info Cards & Status */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-medium text-sm">Available for Full-time Roles &amp; Projects</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Open for Software Engineering opportunities, Full Stack Web Development, or collaborative tech projects.
              </p>
              <div className="flex items-center gap-2 text-slate-500 text-xs pt-2 border-t border-slate-800">
                <FiMapPin className="text-cyan-400" />
                <span>Chiniot / Faisalabad, Pakistan (Open to Remote)</span>
              </div>
            </div>

            {/* Contact Method Cards */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((item, idx) => {
                const style = accentStyles[item.accent]
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -2 }}
                    className={`p-4 rounded-xl bg-slate-900 border ${style.border} ${style.glow} flex items-center justify-between transition-all duration-300`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl ${style.bg} ${style.text}`}>
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider">{item.title}</h3>
                        <a
                          href={item.href}
                          target={item.action === 'link' ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors duration-200 truncate block"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={() => copyToClipboard(item.title === 'Email' ? item.value : item.href, idx)}
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-all duration-200 flex-shrink-0"
                      title="Copy to clipboard"
                    >
                      {copiedIndex === idx ? <FiCheckCircle className="text-emerald-400" size={16} /> : <FiCopy size={16} />}
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
              <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-slate-400 text-sm mb-6">
                Fill out the form below and it will prepare an email directly to my inbox.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <FiCheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Prepared!</h3>
                  <p className="text-slate-400 text-sm max-w-md">
                    Your email app should open automatically. If not, feel free to send an email directly to{' '}
                    <span className="text-cyan-400">shahnawaz.swz1202@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-all duration-200"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="user@example.com"
                        className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Shah Nawaz, I'd like to talk about..."
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-0.5"
                  >
                    <FiSend size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact