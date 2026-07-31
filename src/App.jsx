import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />
      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>
        <section id="about" style={{ scrollMarginTop: '64px' }}>
          <About />
        </section>
        <section id="skills" style={{ scrollMarginTop: '64px' }}>
          <Skills />
        </section>
        <section id="projects" style={{ scrollMarginTop: '64px' }}>
          <Projects />
        </section>
        <section id="contact" style={{ scrollMarginTop: '64px' }}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
