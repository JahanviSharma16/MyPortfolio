import { triangle } from "../helper/images";

const process = [
  {
    id: 1,
    title: "Empathize",
  },
  {
    id: 2,
    title: "Define",
  },
  {
    id: 3,
    title: "Ideate",
  },
  {
    id: 4,
    title: "Prototype",
  },
  {
    id: 5,
    title: "Quanlitative test",
  },
  {
    id: 6,
    title: "Quantitative test",
  },
];

const WorkProcess = () => {
  return (
    <div className="text-center">
      <p className="text-gray-400 text-center">ABOUT ME</p>
      <h1 className="text-white text-4xl py-3">
        My <span className="text-customBlue">work process</span>
      </h1>
      <p className="text-gray-400 w-[50%] mx-auto">
        As a seasoned developer, I excel in various domains, ensuring robust
        solutions tailored to meet diverse challenges. Here is how I can
        contribute:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3  mt-8 relative">
        {process.map((process, index) => (
          <div key={process.id} className={`flex items-center text-center relative ${
            index > 2 ? "justify-end -top-10" : "justify-start" 
          }`}>
            <img src={triangle} alt="triangle" className="" />
            <p className="absolute text-white text-sm ">{process.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
