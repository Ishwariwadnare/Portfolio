import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/constants';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-primary relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-highlight mb-4">
            My <span className="text-secondary">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-cardBg/20 rounded-[2.5rem] border border-white/5 overflow-hidden backdrop-blur-md 
                         transition-all duration-500 hover:border-secondary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Image Container - No Overlay */}
              <div className="h-52 overflow-hidden border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-highlight mb-2 group-hover:text-secondary transition-colors">
                  {project.name}
                </h3>
                <p className="text-subText text-sm mb-6 leading-relaxed italic opacity-80">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-highlight/70 border border-white/10 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* --- NEW BUTTONS LAYOUT --- */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-highlight hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <FaGithub size={16} /> GITHUB
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-secondary text-white rounded-xl text-xs font-bold hover:bg-secondary/80 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
                  >
                    LIVE DEMO <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;