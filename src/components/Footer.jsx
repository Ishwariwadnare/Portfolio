import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary pt-16 pb-10 px-6 overflow-hidden">
      
      {/* --- SHINY NEON SEPARATOR LINE --- */}
      <div className="absolute top-0 left-0 w-full flex justify-center">
        {/* Main thin line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        {/* Shiny Glow Effect in Center */}
        <div className="absolute top-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent shadow-[0_0_15px_#a855f7]"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Side: Name & Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-highlight tracking-tighter uppercase italic">
              ISHWARI<span className="text-secondary">.</span>
            </h2>
            <p className="text-subText text-[10px] uppercase tracking-[0.3em] mt-1">
              Frontend Developer
            </p>
          </div>

          {/* Right Side: Social Icons*/}
          <div className="flex items-center gap-6">
            {[
              { icon: <FaLinkedin />, link: "https://linkedin.com/in/ishwari-wadnare", hover: "hover:text-[#0077b5]" },
              { icon: <FaGithub />, link: "https://github.com/Ishwariwadnare", hover: "hover:text-highlight" },
              { icon: <FaInstagram />, link: "https://instagram.com/IshwariWadnare", hover: "hover:text-[#e4405f]" },
              { icon: <FaEnvelope />, link: "mailto:wadnareishwari@gmail.com", hover: "hover:text-secondary" }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.link} 
                target="_blank" 
                rel="noreferrer"
                className={`text-xl text-subText transition-all duration-300 transform hover:-translate-y-1.5 ${social.hover}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Block */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-subText uppercase tracking-[0.2em]">
          <p>© {currentYear} 2026 Ishwari Vinod Wadnare</p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;