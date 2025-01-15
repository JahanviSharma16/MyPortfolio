import { FaReact, FaDatabase } from "react-icons/fa";
import { FaNode, FaRobot } from "react-icons/fa6";
import { MdApi } from "react-icons/md";
import { RiNodeTree } from "react-icons/ri";

const Specialities = () => {
  const specialties = [
    {
      id: 1,
      heading: "Frontend Development",
      description:
        "From crafting pixel-perfect user interfaces to implementing dynamic client-side functionalities, I leverage the latest technologies like React and Vue to create engaging web experiences.",
      icon: <FaReact />,
    },
    {
      id: 2,
      heading: "Backend Development",
      description:
        "Behind every successful application lies a reliable backend. I specialize in designing scalable server-side architectures using Node.js and Django, ensuring seamless integration with frontend systems.",
      icon: <FaNode />,
    },
    {
      id: 3,
      heading: "Database Management",
      description:
        "Managing data efficiently is crucial. I utilize SQL and NoSQL databases to design robust data schemas, optimize queries, and ensure data integrity and performance.",
      icon: <FaDatabase />,
    },
    {
      id: 4,
      heading: "API Development & Collaboration",
      description:
        "I thrive in creating robust APIs that facilitate seamless communication between different systems. My experience includes integrating third-party services and ensuring API security and scalability.",
      icon: <MdApi />,
    },
    {
      id: 5,
      heading: "Full Stack Development",
      description:
        "Bridging the gap between frontend and backend, I specialize in full-stack development, delivering end-to-end solutions that encompass both client-side interactions and server-side operations.",
      icon: <RiNodeTree />,
    },
    {
      id: 6,
      heading: "Tool Bots",
      description:
        "Automating routine tasks with custom bots streamlines workflows. I develop efficient tool bots that enhance productivity by automating repetitive tasks, ensuring efficiency and consistency.",
      icon: <FaRobot />,
    },
  ];

  return (
    <div className="text-center">
      <p className="text-gray-400 text-center">SPECIALITY</p>
      <h1 className="text-white text-4xl py-3">
        My <span className="text-customBlue">Specialities</span>
      </h1>
      <p className="text-gray-400 w-[50%] mx-auto">
        As a seasoned developer, I excel in various domains, ensuring robust
        solutions tailored to meet diverse challenges. Here is how I can
        contribute:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {specialties.map((specialty) => (
          <div
            key={specialty.id}
            className="p-6 rounded-lg bg-gradient-to-r from-[#0E0E10] to-black shadow-lg flex flex-col items-center text-center"
          >
            <span className="p-4 text-4xl text-customBlue">
              {specialty.icon}
            </span>
            <h2 className="text-2xl text-white font-bold mt-4">
              {specialty.heading}
            </h2>
            <p className="text-gray-400 mt-4">{specialty.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialities;
