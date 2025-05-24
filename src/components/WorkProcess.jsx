import { FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiMongodb,
  SiStrapi,
  SiExpress,
  SiMysql,
} from "react-icons/si";

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

const WorkProcess = () => {
  return (
    <section className="text-center px-4 py-20">
      <p className="text-gray-400 tracking-widest uppercase text-sm">
        ABOUT ME
      </p>
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold py-3 leading-tight">
        A Passionate{" "}
        <span className="text-customBlue">Full-Stack Developer</span>
      </h1>

      <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed pt-6 pb-12">
        I specialize in{" "}
        <strong>
          building interactive UIs, scalable APIs, and dynamic web applications
        </strong>
        . With expertise in{" "}
        <strong>React, MERN Stack, FFmpeg, and Strapi</strong>, I develop
        high-performance solutions tailored to modern needs.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-white text-lg">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-300 transition-transform hover:scale-105"
          >
            <div className="p-4 bg-gray-800 rounded-full text-3xl sm:text-4xl">
              {tech.icon}
            </div>
            <p className="text-xs sm:text-sm mt-2">{tech.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
