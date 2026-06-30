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
} from "../helper/images";
import { HiOutlineSparkles, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const projects = [
  {
    id: 1,
    title: "Life-Skillify",
    description:
      "Scalable MERN platform with JWT authentication and RBAC. Optimized REST APIs with secure session handling.",
    images: [life1, life2, life3],
    host_link: "https://lifeskillify.vercel.app",
    tags: ["MERN", "JWT", "RBAC", "REST APIs"],
  },
  {
    id: 2,
    title: "AI Utility Bill Extraction",
    description:
      "Agentic AI platform using React, Node.js, Groq AI, and BullMQ with hybrid OCR workflows for structured bill data extraction.",
    images: null,
    host_link: null,
    tags: ["React", "Groq AI", "BullMQ", "OCR", "Agentic AI"],
  },
  {
    id: 3,
    title: "Place to Stay",
    description:
      "MERN booking platform with filtering, real-time bookings, and reviews.",
    images: [image, img2, img3],
    host_link: "https://place-to-stay.netlify.app/",
    tags: ["MERN", "Booking"],
  },
  {
    id: 4,
    title: "Bubble Game",
    description:
      "Interactive number-matching game built with HTML, CSS, and JavaScript.",
    images: [bubble1, bubble2, bubble3],
    host_link: "https://jahanvisharma16.github.io/BubbleGame/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Image Search",
    description:
      "React app with image API integration for real-time search and display.",
    images: [imgsearch1, imgsearch2, imgsearch3],
    host_link: "https://jahanvisharma16.github.io/Image_search/",
    tags: ["React", "API"],
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "Weather forecast app powered by OpenWeather API with location-based results.",
    images: [weather1, weather2, weather3],
    host_link: "https://jahanvisharma16.github.io/WeatherApp/",
    tags: ["React", "OpenWeather API"],
  },
  {
    id: 7,
    title: "Amazon Clone",
    description:
      "Responsive static replica of Amazon's homepage with styled components.",
    images: [amazon1, amazon2, amazon3],
    host_link: "https://jahanvisharma16.github.io/AmazonClone/",
    tags: ["HTML", "CSS", "Responsive"],
  },
];

const ProjectCard = ({ project, index }) => (
  <article
    className="card card-hover overflow-hidden flex flex-col h-full"
    data-aos="fade-up"
    data-aos-delay={(index % 3) * 80}
  >
    <div className="w-full h-48 overflow-hidden">
      {project.images ? (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
          ariaLabel={`Screenshots of ${project.title}`}
        >
          {project.images.map((img, index) => (
            <div key={index} className="relative w-full h-48">
              <img
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-accent-light via-surface-subtle to-gold-light">
          <div className="text-center p-6">
            <HiOutlineSparkles className="w-10 h-10 text-accent mx-auto mb-2" />
            <p className="text-xs font-medium text-ink-secondary tracking-wide uppercase">
              AI-Powered
            </p>
          </div>
        </div>
      )}
    </div>

    <div className="p-5 sm:p-6 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-ink">{project.title}</h3>
      <p className="text-ink-secondary text-sm mt-2 leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      {project.host_link && (
        <a
          href={project.host_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-accent hover:text-gold-dark transition-colors"
        >
          View Project
          <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  </article>
);

const CompletedProjects = () => {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="section-container">
        <div data-aos="fade-up">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">
            Selected <span className="text-gold">Projects</span>
          </h2>
          <p className="mt-4 text-ink-secondary max-w-2xl text-base leading-relaxed">
            Full-stack platforms, AI-powered automation, and interactive web
            experiences — built end to end.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
