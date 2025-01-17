import { triangle } from "../helper/images";

const process = [
  { id: 1, title: "Empathize" },
  { id: 2, title: "Define" },
  { id: 3, title: "Ideate" },
  { id: 4, title: "Prototype" },
  { id: 5, title: "Qualitative Test" },
  { id: 6, title: "Quantitative Test" },
];

const WorkProcess = () => {
  return (
    <div className="text-center py-10">
      <p className="text-gray-400">ABOUT ME</p>
      <h1 className="text-white text-4xl py-3">
        My <span className="text-customBlue">work process</span>
      </h1>
      <p className="text-gray-400 w-[50%] mx-auto">
        As a seasoned developer, I excel in various domains, ensuring robust
        solutions tailored to meet diverse challenges. Here is how I can
        contribute:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-16 mt-8 px-32">
        {process.map((item, index) => (
          <div
            key={item.id}
            className={`text-center  ${index >= 3 ? "-mt-10" : ""}`}
          >
            <div className="w-[240px] h-[240px] mx-auto relative">
              <img src={triangle} alt="triangle" className="w-full h-full" />
              <p className="absolute inset-0 flex items-center justify-center text-white text-sm">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
