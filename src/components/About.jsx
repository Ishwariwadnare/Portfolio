
const About = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-16 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-highlight mb-6">
          About <span className="text-secondary text-glow-purple">Me</span>
        </h2>
        
        {/* Bio Content */}
        <div className="bg-cardBg/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl">
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            I'm Ishwari Wadnare, a Full Stack Developer
          </h3>
          
          <p className="text-subText text-lg leading-relaxed mb-6">
          I am a passionate Frontend Developer and a Computer Science and Engineering student with a strong interest in building 
          responsive and user-friendly web applications. I have experience working with HTML, CSS, JavaScript, Tailwind CSS, and React. I enjoy
          creating clean UI designs and enhancing user experience, and I have built projects such as a cafe website and an art-based platform
          using modern frontend technologies.
          </p>

          <p className="text-subText text-lg leading-relaxed">
            Currently, I am enhancing my skills in React and learning how to integrate APIs to build dynamic web applications.
            I am also working towards becoming a full-stack developer, as I am eager to expand my knowledge and contribute to real-world projects.
          </p>
        </div>

        {/* Simple Stats/Info Tags */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <span className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
            Frontend: React, Tailwind
          </span>
          {/* <span className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
            Backend: Python, Flask
          </span> */}
          <span className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
            Tools: Git, Netlify, VS Code
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;