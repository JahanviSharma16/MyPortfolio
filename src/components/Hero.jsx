import { Link } from "react-router-dom";
import { personalInfo, summary } from "../data/resumeData";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineArrowDown,
} from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "25+", label: "Projects Built" },
  { value: "2", label: "Companies" },
];

const highlights = [
  "MERN Stack",
  "AI & LLM Integration",
  "Workflow Automation",
  "SaaS & CRM",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 hero-grid opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-muted via-surface-muted/80 to-surface-muted" />

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7" data-aos="fade-up" data-aos-duration="800">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-5">
              Portfolio &mdash; {personalInfo.location}
            </p>

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-bold text-ink leading-[1.05] tracking-tight">
              {personalInfo.name.split(" ")[0]}
              <br />
              <span className="text-ink-secondary font-semibold">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="text-lg sm:text-xl text-ink-secondary font-medium">
                {personalInfo.title}
              </p>
            </div>

            <p className="mt-7 text-base sm:text-lg text-ink-secondary leading-[1.75] max-w-xl">
              {summary}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/contact" className="btn-primary">
                Start a Conversation
              </Link>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink-secondary hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink-secondary hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-300"
                aria-label="Email"
              >
                <HiOutlineEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-5"
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="800"
          >
            <div className="card shadow-hero p-8 sm:p-10 border-border/80">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-ink-muted">
                    Currently
                  </p>
                  <p className="text-base font-semibold text-ink mt-1">
                    Full Stack Developer
                  </p>
                  <p className="text-sm text-ink-secondary mt-0.5">@ EBG Group</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Open to work
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center"
                    data-aos="zoom-in"
                    data-aos-delay={250 + index * 80}
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-ink">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-ink-muted mt-1 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-widest text-ink-muted mb-3">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((item, index) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-subtle text-ink-secondary border border-border-light"
                      data-aos="fade-up"
                      data-aos-delay={400 + index * 60}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-ink-muted">
                <HiOutlineMapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden lg:flex justify-center mt-16"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <button
            onClick={() =>
              document
                .querySelector("[data-section='about']")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-ink-muted hover:text-ink-secondary transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
            <HiOutlineArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
