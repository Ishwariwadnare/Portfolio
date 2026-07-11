import { FaLayerGroup, FaLaptopCode } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col rounded-3xl bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/20 hover:border border border-transparent">
      
      {/* Image Container - 'relative' hona chahiye */}
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover" 
        />
        
        {/* Absolute Label Overlay - Ye image ke upar dikhega */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 shadow-lg">
            {project.type === "Full Stack Project" ? (
              <> 
                <FaLayerGroup /> Full Stack Project
              </>
            ) : (
              <> 
                <FaLaptopCode /> Frontend Project
              </>
            )}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-300">Featured</span>
        </div>

        <p className="text-slate-300 leading-7 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={project.live || project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-cyan-300 transition hover:text-cyan-200 font-medium"
        >
          View project →
        </a>
      </div>
    </article>
  )
}

export default ProjectCard;