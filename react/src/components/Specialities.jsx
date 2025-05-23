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
        "Crafting dynamic user interfaces with React and Vue, ensuring responsive and engaging user experiences.",
      icon: <FaReact />,
    },
    {
      id: 2,
      heading: "Backend Development",
      description:
        "Building scalable server-side architectures using Node.js and Django for seamless data handling.",
      icon: <FaNode />,
    },
    {
      id: 3,
      heading: "Database Management",
      description:
        "Designing efficient SQL and NoSQL schemas to optimize queries and maintain data integrity.",
      icon: <FaDatabase />,
    },
    {
      id: 4,
      heading: "API Development & Collaboration",
      description:
        "Creating secure and robust APIs for system communication and integrating third-party services.",
      icon: <MdApi />,
    },
    {
      id: 5,
      heading: "Full Stack Development",
      description:
        "Delivering end-to-end solutions by bridging frontend and backend for cohesive applications.",
      icon: <RiNodeTree />,
    },
    {
      id: 6,
      heading: "Tool Bots",
      description:
        "Automating workflows with custom bots to enhance productivity and minimize manual tasks.",
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 ">
        {specialties.map((specialty) => (
          <div
            key={specialty.id}
            className="px-6 py-4 rounded-lg bg-gradient-to-r from-[#0E0E10] to-black shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-[0_0_30px_#194BFD]"
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
