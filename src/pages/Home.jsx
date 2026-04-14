import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { projects } from '../data/constants'
import ProjectCard from '../components/ProjectCard'

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
      <Hero />

      <section id="about" className="mt-16 rounded-3xl bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20 backdrop-blur">
        <About />
      </section>

      <section id="skills" className="mt-16">
        <Skills />
      </section>

      <section id="projects" className="mt-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projects</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Recent work</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="mt-16 rounded-3xl bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20 backdrop-blur">
        <Contact />
      </section>
    </div>
  )
}

export default Home
