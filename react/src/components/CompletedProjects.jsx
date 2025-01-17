import { projects } from "../helper/images";

const CompletedProjects = () => {
  return (
    <div className="text-center py-10">
      <p className="text-gray-400">PORTFOLIO</p>
      <h1 className="text-white text-4xl py-3">
        My <span className="text-customBlue">projects</span>
      </h1>
      <p className="text-gray-400 w-[50%] mx-auto">
        As a seasoned developer, I excel in various domains, ensuring robust
        solutions tailored to meet diverse challenges. Here is how I can
        contribute:
      </p>
      <div className="w-full overflow-hidden py-10">
        <img src={projects} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default CompletedProjects;
