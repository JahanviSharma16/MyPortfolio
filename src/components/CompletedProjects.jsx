import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { image, img2, img3 } from "../helper/images";

const projectDetails = [
  {
    id: 1,
    title: "Place to Stay",
    description:
      "A MERN stack website for booking accommodations with user-friendly search and booking features.",
    images: [image, img2, img3],
  },
  {
    id: 2,
    title: "Video Subtitle Animator",
    description:
      "A React JS app that overlays and animates subtitles on videos with editing options.",
    images: ["/images/video1.png", "/images/video2.png", "/images/video3.png"],
  },
  {
    id: 3,
    title: "Bubble Game",
    description:
      "A fun game built with HTML, CSS, and JS where the player must choose the right number.",
    images: ["/images/game1.png", "/images/game2.png"],
  },
];

const CompletedProjects = () => {
  return (
    <div className="text-center py-10">
      <p className="text-gray-400">PORTFOLIO</p>
      <h1 className="text-white text-4xl py-3">
        My <span className="text-customBlue">projects</span>
      </h1>
      <p className="text-gray-400 w-[90%] md:w-[50%] mx-auto">
        As a seasoned developer, I excel in various domains, ensuring robust
        solutions tailored to meet diverse challenges. Here is how I can
        contribute:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10">
        {projectDetails.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-r from-[#0E0E10] to-black rounded-xl shadow-lg p-5 text-white flex flex-col items-center transition duration-300 hover:shadow-[0_0_30px_#194BFD]"
          >
            <div className="w-full h-52 rounded overflow-hidden">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
              >
                {project.images.map((img, index) => (
                  <div key={index}>
                    <div className="relative w-full h-52 rounded overflow-hidden">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <h3 className="text-2xl font-bold mt-4 text-customBlue">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProjects;
