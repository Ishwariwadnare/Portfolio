
import {FaGithub, FaHtml5, FaJsSquare, FaReact,} from "react-icons/fa";

import { SiMysql, SiNetlify, SiTailwindcss, SiBootstrap,  SiExpress, SiMongodb,SiFigma,SiNodedotjs } from "react-icons/si";

import { MdDevices } from "react-icons/md";
import { TbApi } from "react-icons/tb";

import { skills } from "../data/constants";

const Skills = () => {

  const getIcon = (id) => {
    switch (id) {
      case "react":
        return <FaReact className="text-[#61DBFB]" />;

      case "js":
        return <FaJsSquare className="text-[#F7DF1E]" />;

      case "tailwind":
        return <SiTailwindcss className="text-[#06B6D4]" />;

      case "responsive":
        return <MdDevices className="text-[#A855F7]" />;

      case "html":
        return <FaHtml5 className="text-[#E34F26]" />;

      case "git":
        return <FaGithub className="text-white" />;

      case "deployment":
        return <SiNetlify className="text-[#00C7B7]" />;

      case "sql":
        return <SiMysql className="text-[#4479A1]" />;

      case "node":
        return <SiNodedotjs className="text-[#5FA04E]" />;

      case "express":
        return <SiExpress className="text-gray-300" />;

      case "mongodb":
        return <SiMongodb className="text-[#47A248]" />;

      case "figma":
        return <SiFigma className="text-[#F24E1E]" />;

      case "bootstrap":
        return <SiBootstrap className="text-[#7952B3]" />;

      case "api":
        return <TbApi className="text-green-400" />;

      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-highlight mb-4">
            Technical <span className="text-secondary">Skills</span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-cardBg/20 p-8 rounded-[2rem] flex flex-col items-center gap-4
              border border-white/5 backdrop-blur-md cursor-default
              transition-all duration-500
              hover:border-secondary/60
              hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
              hover:-translate-y-2
              group"
            >
              {/* Icon */}
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                {getIcon(skill.iconId)}
              </div>

              {/* Skill Name */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-highlight uppercase">
                  {skill.name}
                </h3>

                {skill.percentage && (
                  <p className="text-secondary text-sm mt-2">
                    {skill.percentage}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;