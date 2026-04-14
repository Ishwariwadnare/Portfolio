import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      title: "Email Me",
      value: "wadnareishwari@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:wadnareishwari@gmail.com", // This is the trigger
      color: "hover:border-blue-500/50",
      shadow: "hover:shadow-blue-500/20",
      bg: "bg-blue-500/5"
    },
    {
      title: "LinkedIn",
      value: "Let's connect professionally",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/ishwari-wadnare", // This is the trigger
      color: "hover:border-secondary/50",
      shadow: "hover:shadow-secondary/20",
      bg: "bg-secondary/5"
    },
    {
      title: "GitHub",
      value: "Check my code repositories",
      icon: <FaGithub />,
      link: "https://github.com/Ishwariwadnare",
      color: "hover:border-highlight/50",
      shadow: "hover:shadow-highlight/20",
      bg: "bg-highlight/5"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-primary relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/*Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-highlight mb-4">
            Contact <span className="text-secondary">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-purple-500 mx-auto rounded-full"></div>
          <p className="text-subText mt-6 text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Let's build something amazing together!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <a 
              href={method.link} 
              key={index}
              className={`group p-8 rounded-[2.5rem] border border-white/5 bg-cardBg/10 backdrop-blur-md transition-all duration-500 flex flex-col items-center text-center min-h-[250px] ${method.color} ${method.shadow} ${method.bg} hover:-translate-y-2`}
            >
              <div className="text-5xl text-highlight group-hover:text-secondary mb-6 transition-colors duration-300">
                {method.icon}
              </div>
              
              <h3 className="text-highlight font-bold text-xl mb-2">{method.title}</h3>
              <p className="text-subText text-sm mb-6">{method.value}</p>

              <div className="mt-auto flex items-center gap-2 text-secondary font-bold text-xs tracking-widest uppercase">
                Connect <FaArrowRight />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;