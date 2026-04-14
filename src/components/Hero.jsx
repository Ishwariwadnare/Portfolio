// Apni photo ka sahi path yahan check karein
import profileImg from "../assets/images/profile.jpg";
import resume from "../assets/Resume.pdf";


const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col items-center justify-between py-28 px-6 sm:px-20 min-h-screen bg-primary">
      
      {/* Left Content: Text & Button */}
      <div className="flex-1 flex flex-col justify-center order-2 md:order-1 mt-10 md:mt-0">
        <h4 className="text-subText text-lg font-medium mb-3 tracking-wider">
          Hi, My Name is
        </h4>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-highlight mb-4 leading-tight">
          Ishwari Wadnare
        </h1>
        <h3 className="text-2xl sm:text-3xl text-secondary font-semibold mb-6 tracking-wide">
          Frontend Developer
        </h3>
        <p className="text-subText text-lg max-w-[550px] leading-relaxed mb-10">
          Passionate about creating clean, modern, and responsive websites with a focus on user experience.
          I enjoy turning ideas into user-friendly and functional web applications.
        </p>
        
        {/* ACTION BUTTONS (Matching new gradient style) */}
        <div className="flex flex-col sm:flex-row gap-5">
          <a
            href={resume}
            download="Resume.pdf"
            className="bg-gradient-to-r from-secondary to-neon text-white font-bold py-4 px-12 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-secondary/25 flex items-center justify-center text-[16px]"
          >
            Download Resume
          </a>
          
         <a 
  href="#projects" // Ye ID match honi chahiye niche wale section se
  className="border-2 border-secondary/50 text-secondary font-bold py-4 px-12 rounded-full hover:bg-secondary/10 active:scale-95 transition-all text-center text-[16px]"
>
  View My Projects
</a>
        </div>
      </div>

      {/* Right Content: Image Part - ALWAYS NATURAL COLORS */}
      <div className="flex-1 flex justify-center items-center mb-16 md:mb-0 order-1 md:order-2 relative">
        {/* Background Glow Effect - Keep it for premium feel */}
        <div className="absolute w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[90px] opacity-70"></div>
        
        {/* Image Container with Smooth Border */}
        <div className="relative w-[290px] h-[290px] sm:w-[400px] sm:h-[400px] border-[5px] border-secondary/20 rounded-full overflow-hidden p-3 bg-cardBg/40 backdrop-blur-sm shadow-2xl">
           <img 
            src={profileImg} 
            alt="Ishwari Wadnare" 
            className="w-full h-full object-cover rounded-full" // Maine grayscale effect hata diya hai yahan se
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;