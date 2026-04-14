function ProjectCard({ project }) {
  return (
    <article className="rounded-3xl bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/20 hover:border">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-300">Featured</span>
      </div>
      <p className="text-slate-300 leading-7">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
      <a href={project.link} className="mt-6 inline-flex items-center text-cyan-300 transition hover:text-cyan-200">
        View project →
      </a>
    </article>
  )
}

export default ProjectCard
