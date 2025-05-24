import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  amazon1,
  amazon2,
  amazon3,
  bubble1,
  bubble2,
  bubble3,
  image,
  img2,
  img3,
  imgsearch1,
  imgsearch2,
  imgsearch3,
  life1,
  life2,
  life3,
  weather1,
  weather2,
  weather3,
} from "../helper/images"; // example placeholders

const projectDetails = [
  {
    id: 1,
    title: "LifeSkillify",
    description:
      "A full-stack learning platform offering daily life skills lessons with user authentication and responsive UI.",
    images: [life1, life2, life3],
    host_link: "https://life-skillify.vercel.app/",
  },
  {
    id: 2,
    title: "Place to Stay",
    description:
      "A MERN stack website for booking accommodations with filtering, real-time bookings, and reviews.",
    images: [image, img2, img3],
    host_link: "https://place-to-stay.netlify.app/",
  },
  {
    id: 3,
    title: "Bubble Game",
    description:
      "A number-matching game built using HTML, CSS, and JavaScript to enhance user reflex and fun.",
    images: [bubble1, bubble2, bubble3],
    host_link: "https://jahanvisharma16.github.io/BubbleGame/",
  },
  {
    id: 4,
    title: "Image Search",
    description:
      "A React-based app using an image API to search and display images in real-time.",
    images: [imgsearch1, imgsearch2, imgsearch3],
    host_link: "https://jahanvisharma16.github.io/Image_search/",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A simple weather forecast app using OpenWeather API to display current weather by location.",
    images: [weather1, weather2, weather3],
    host_link: "https://jahanvisharma16.github.io/WeatherApp/",
  },
  {
    id: 6,
    title: "Amazon Clone",
    description:
      "A static replica of Amazon's homepage with styled components, sections, and responsive design.",
    images: [amazon1, amazon2, amazon3],
    host_link: "https://jahanvisharma16.github.io/AmazonClone/",
  },
];

const CompletedProjects = () => {
  return (
    <div className="text-center py-10 px-4 sm:px-8 md:px-12 lg:px-20">
      <p className="text-gray-400 uppercase">Portfolio</p>
      <h1 className="text-white text-4xl font-bold py-3">
        My <span className="text-customBlue">Projects</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        As a seasoned developer, I excel in various domains, ensuring robust
        solutions tailored to meet diverse challenges. Here’s how I can
        contribute:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
        {projectDetails.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-r from-[#0E0E10] to-black rounded-xl shadow-lg p-5 text-white flex flex-col items-center hover:shadow-[0_0_30px_#194BFD] transition duration-300"
          >
            <div className="w-full h-52 rounded overflow-hidden">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                className="rounded"
                ariaLabel={`Screenshots of ${project.title}`}
              >
                {project.images.map((img, index) => (
                  <div key={index} className="relative w-full h-52">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-customBlue">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
            <a
              href={project.host_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-customBlue text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProjects;
