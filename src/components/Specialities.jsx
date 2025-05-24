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
    <section className="text-center px-4 py-20">
      <p className="text-gray-400 text-sm">SPECIALITY</p>
      <h1 className="text-white text-3xl sm:text-4xl font-semibold py-3">
        My <span className="text-customBlue">Specialities</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        As a seasoned developer, I excel in various domains, ensuring robust
        solutions tailored to meet diverse challenges. Here is how I can
        contribute:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {specialties.map((specialty) => (
          <div
            key={specialty.id}
            className="px-6 py-6 rounded-xl bg-gradient-to-r from-[#0E0E10] to-black shadow-md flex flex-col items-center text-center transition duration-300 hover:shadow-[0_0_30px_#194BFD]"
          >
            <span className="p-4 text-4xl text-customBlue">
              {specialty.icon}
            </span>
            <h2 className="text-xl sm:text-2xl text-white font-bold mt-4">
              {specialty.heading}
            </h2>
            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              {specialty.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialities;
