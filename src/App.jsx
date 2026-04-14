
import About from "./components/About";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    // bg-primary aapke tailwind.config.js mein defined hona chahiye
    <div className="bg-primary w-full overflow-hidden min-h-screen selection:bg-secondary selection:text-white">
      
      {/* 1. Sticky Navbar */}
      <Navbar />
      
      {/* 2. Hero Section (Home) */}
      <Hero />

      {/* Main Content Wrapper for Spacing */}
      <main className="flex flex-col gap-10">
        
        {/* 3. About Me Section */}
        <About />

        {/* 4. Skills Section (Icons & Proficiency) */}
        <Skills />

        {/* 5. Projects Section (Portfolio Gallery) */}
        <Projects />

        {/* Yahan aap Contact section baad mein add kar sakte hain */}
        <Contact />
        {/* <Contact /> */}

      </main>

      {/* Footer Section (Optional) */}
     <Footer />
    </div>
  );
}

export default App;