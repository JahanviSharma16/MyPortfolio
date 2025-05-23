import { FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiC, SiCplusplus, SiMongodb, SiFfmpeg, SiStrapi, SiApollographql, SiExpress, SiMysql } from "react-icons/si";

const techStack = [
  { icon: <SiC />, label: "C" },
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaJava />, label: "Java" },
  { icon: <FaReact />, label: "React.js" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <SiStrapi />, label: "Strapi" },
  { icon: <SiMysql />, label: "MySQL" },
];

const AboutMe = () => {
  return (
    <div className="text-center py-16 h-screen">
      {/* 🔹 Section Title */}
      <p className="text-gray-400 tracking-widest uppercase">ABOUT ME</p>
      <h1 className="text-white text-5xl font-semibold py-3">
        A Passionate <span className="text-customBlue">Full-Stack Developer</span>
      </h1>

      {/* 🔹 Introduction */}
      <p className="text-gray-400 w-[60%] mx-auto text-lg leading-8 pt-6 pb-16">
        I specialize in **building interactive UIs, scalable APIs, and dynamic web applications**. 
        With expertise in **React, MERN Stack, FFmpeg, and Strapi**, I develop high-performance 
        solutions tailored to modern needs.
      </p>

      {/* 🔹 Skills & Tech Stack */}
      <div className="flex flex-wrap justify-center gap-6 text-white text-lg py-6">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center text-gray-300">
            <div className="p-4 bg-gray-800 rounded-full text-4xl">{tech.icon}</div>
            <p className="text-sm mt-2">{tech.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
