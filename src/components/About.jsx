
// const About = () => {
//   return (
//     <section id="about" className="py-20 px-6 sm:px-16 bg-primary">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Section Title */}
//         <h2 className="text-4xl sm:text-5xl font-bold text-highlight mb-6">
//           About <span className="text-secondary text-glow-purple">Me</span>
//         </h2>
        
//         {/* Bio Content */}
//         <div className="bg-cardBg/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl">
//           <h3 className="text-2xl font-semibold text-secondary mb-4">
//             I'm Ishwari Wadnare, a Full Stack Developer
//           </h3>
          
//           <p className="text-subText text-lg leading-relaxed mb-6">
//          I am a passionate Full Stack Developer and a Computer Science and Engineering student with a strong interest in building modern, scalable, and user-friendly web applications. I have hands-on experience with the MERN Stack, including React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, and Tailwind CSS.
//           </p>

//           <p className="text-subText text-lg leading-relaxed">
//            I enjoy developing responsive user interfaces as well as building secure backend systems, RESTful APIs, and database-driven applications. I have developed projects such as an art e-commerce platform and a café website, where I implemented responsive designs, dynamic features, and efficient application architecture.
//         </div>

//         {/* Simple Stats/Info Tags */}
//         <div className="flex flex-wrap justify-center gap-4 mt-10">
//           <span className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
//             Frontend: React, Tailwind
//           </span>
//           {/* <span className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
//             Backend: Python, Flask
//           </span> */}
//           <span className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
//             Tools: Git, Netlify, VS Code
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

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
            I am a passionate Full Stack Developer and a Computer Science and
            Engineering student with a strong interest in building modern,
            scalable, and user-friendly web applications. I have hands-on
            experience with the MERN Stack, including React.js, Node.js,
            Express.js, MongoDB, JavaScript, HTML, CSS, and Tailwind CSS.
          </p>

          <p className="text-subText text-lg leading-relaxed">
            I enjoy developing responsive user interfaces as well as building
            secure backend systems, RESTful APIs, and database-driven
            applications. I have developed projects such as an art e-commerce
            platform and a café website, where I implemented responsive designs,
            authentication, CRUD operations, API integration, and efficient
            application architecture. I am continuously improving my skills in
            Data Structures & Algorithms and building full-stack applications to
            solve real-world problems.
          </p>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <span className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
            Frontend: React, Tailwind CSS
          </span>

          <span className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
            Backend: Node.js, Express.js
          </span>

          <span className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
            Database: MongoDB, MySQL
          </span>

          <span className="px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
            Tools: Git, GitHub, Postman, VS Code, Figma, Netlify, Vercel
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;