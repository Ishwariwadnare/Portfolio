import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-4 justify-between items-center navbar px-6 sm:px-16 fixed top-0 z-50 bg-primary/60 backdrop-blur-xl border-b border-white/5">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-secondary/30">
          I
        </div>
        <span className="text-white font-semibold text-xl tracking-tight hidden sm:block">
          Portfolio
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden items-center">
        <ul className="list-none flex justify-center items-center mr-10">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-medium cursor-pointer text-[15px] transition-all duration-300 hover:text-secondary ${
                active === nav.title ? "text-secondary" : "text-subText"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-8"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

       {/* --- HIRE ME BUTTON --- */}
        <a 
          href="mailto:wadnareishwari@gmail.com?subject=Inquiry%20regarding%20Frontend%20Developer%20Role&body=Hi%20Ishwari," 
          className="hidden md:block px-8 py-2.5 bg-secondary text-white font-bold rounded-full hover:bg-secondary/80 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 transform active:scale-95"
        >
          HIRE ME
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div 
          onClick={() => setToggle(!toggle)} 
          className="text-3xl text-secondary cursor-pointer"
        >
          {toggle ? <HiX /> : <HiMenuAlt3 />}
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-8 bg-[#1a163a] absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-2xl sidebar z-50 shadow-2xl border border-white/10`}
        >
          <ul className="list-none flex flex-col gap-5 flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[18px] ${
                  active === nav.title ? "text-secondary" : "text-white"
                }`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="/assets/Resume.pdf"
                className="text-secondary font-bold border border-secondary px-4 py-2 rounded-lg block text-center"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;