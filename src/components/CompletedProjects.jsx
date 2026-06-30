import { useState, memo } from "react";
import { projects } from "../data/projectsData";
import {
  amazon1,
  amazon2,
  amazon3,
  bill1,
  bill2,
  bill3,
  bubble1,
  bubble2,
  bubble3,
  image as place1,
  img2 as place2,
  img3 as place3,
  imgsearch1 as search1,
  imgsearch2 as search2,
  imgsearch3 as search3,
  life1,
  life2,
  life3,
  weather1,
  weather2,
  weather3,
} from "../helper/images";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";

const imageMap = {
  life1,
  life2,
  life3,
  bill1,
  bill2,
  bill3,
  place1,
  place2,
  place3,
  bubble1,
  bubble2,
  bubble3,
  search1,
  search2,
  search3,
  weather1,
  weather2,
  weather3,
  amazon1,
  amazon2,
  amazon3,
};

const ProjectGallery = memo(({ imageKeys, title, featured = false }) => {
  const images = imageKeys.map((key) => imageMap[key]).filter(Boolean);
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  const goTo = (dir) => {
    setActive((prev) => {
      if (dir === "next") return (prev + 1) % images.length;
      return (prev - 1 + images.length) % images.length;
    });
  };

  return (
    <div className={`project-gallery group ${featured ? "project-gallery--featured" : ""}`}>
      <div className="project-gallery__viewport">
        <img
          key={active}
          src={images[active]}
          alt={`${title} — screenshot ${active + 1}`}
          className="project-gallery__image"
          loading="lazy"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo("prev")}
              className="project-gallery__nav project-gallery__nav--prev"
              aria-label="Previous screenshot"
            >
              <HiOutlineChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => goTo("next")}
              className="project-gallery__nav project-gallery__nav--next"
              aria-label="Next screenshot"
            >
              <HiOutlineChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="project-gallery__dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`project-gallery__dot ${i === active ? "project-gallery__dot--active" : ""}`}
              aria-label={`View screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
});

ProjectGallery.displayName = "ProjectGallery";

const ProjectCard = memo(({ project, index }) => {
  const paddedIndex = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 80}
    >
      <div className="project-card__glow" aria-hidden="true" />

      <ProjectGallery
        imageKeys={project.images}
        title={project.title}
        featured={project.featured}
      />

      <div className="project-card__body">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="project-card__index">{paddedIndex}</span>
          <span className="project-card__category">{project.category}</span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {(project.host_link || project.github_link) && (
          <div className="flex flex-wrap items-center gap-5 mt-5">
            {project.host_link && (
              <a
                href={project.host_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link !mt-0"
              >
                View Live Project
                <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
              </a>
            )}
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link !mt-0"
              >
                View on GitHub
                <FaGithub className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

const CompletedProjects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="section-container">
        <div data-aos="fade-up">
          <p className="section-label">03. Work</p>
          <h2 className="section-title">
            Featured <span className="text-highlight">Work</span>
          </h2>
          <p className="mt-4 text-ink-secondary max-w-2xl text-base leading-relaxed">
            Production-grade applications — from enterprise-ready platforms and
            AI automation to full-stack products shipped end to end.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-14" data-aos="fade-up">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
              More Work
            </h3>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + featured.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
