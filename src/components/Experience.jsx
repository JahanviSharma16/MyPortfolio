import { useState, memo } from "react";
import { experience } from "../data/resumeData";
import { HiOutlineBriefcase } from "react-icons/hi2";

const TimelineCard = memo(({ job, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left relative pl-8 pb-10 last:pb-0 transition-opacity duration-300 ease-out group ${
      isActive ? "opacity-100" : "opacity-45 hover:opacity-75"
    }`}
  >
    <span
      className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ease-out ${
        isActive
          ? "bg-highlight border-highlight scale-110"
          : "bg-surface border-border group-hover:border-highlight/50 scale-100"
      }`}
    />

    <div
      className={`rounded-xl border p-4 transition-all duration-300 ease-out ${
        isActive
          ? "bg-surface-subtle border-highlight/40 shadow-card"
          : "bg-transparent border-border hover:border-highlight/20"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-ink">{job.company}</h3>
          <p className="text-sm text-ink-secondary mt-0.5">{job.role}</p>
        </div>
        {job.isCurrent && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-highlight-dark bg-highlight-light px-2 py-0.5 rounded border border-highlight/20">
            Current
          </span>
        )}
      </div>
      <p className="text-[11px] text-ink-muted mt-2 uppercase tracking-wider font-mono">
        {job.period}
      </p>
      <p className="text-xs text-ink-muted mt-2">{job.focus}</p>
    </div>
  </button>
));

TimelineCard.displayName = "TimelineCard";

const DetailCard = memo(({ job }) => (
  <div className="card p-6 sm:p-8 lg:p-10">
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="w-9 h-9 rounded-lg bg-highlight-light flex items-center justify-center text-highlight">
          <HiOutlineBriefcase className="w-4 h-4" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-highlight-dark bg-highlight-light px-3 py-1 rounded-full border border-highlight/20">
          {job.focus}
        </span>
        {job.isCurrent && (
          <span className="text-[10px] font-semibold uppercase tracking-widest text-highlight-dark bg-highlight-light px-3 py-1 rounded-full border border-highlight/20">
            Current Role
          </span>
        )}
      </div>
      <span className="text-xs text-ink-muted font-mono uppercase tracking-wider">
        {job.period}
      </span>
    </div>

    <h3 className="text-2xl sm:text-3xl font-bold text-ink">{job.role}</h3>
    <p className="text-lg text-ink-secondary mt-1">{job.company}</p>
    <p className="text-sm text-ink-muted mt-1">{job.location}</p>

    <p className="mt-6 text-ink-secondary text-sm sm:text-base leading-relaxed">
      {job.description}
    </p>

    <div className="mt-8">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
        Key Contributions
      </h4>
      <ul className="space-y-3">
        {job.highlights.map((point, i) => (
          <li key={i} className="flex gap-3 text-sm text-ink-secondary leading-relaxed">
            <span className="text-highlight mt-0.5 flex-shrink-0 font-mono">&gt;</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-8 pt-6 border-t border-border">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
        Impact
      </h4>
      <div className="flex flex-wrap gap-2">
        {job.impact.map((item) => (
          <span
            key={item}
            className="text-[10px] font-semibold uppercase tracking-wider text-ink-secondary bg-surface-subtle border border-border px-3 py-1.5 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mt-6">
      {job.tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  </div>
));

DetailCard.displayName = "DetailCard";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="section-container">
        <div data-aos="fade-up">
          <p className="section-label">02. Career</p>
          <h2 className="section-title">
            Professional <span className="text-highlight">Path</span>
          </h2>
          <p className="mt-4 text-ink-secondary max-w-2xl text-base leading-relaxed">
            Building scalable products across SaaS, CRM, AI-powered platforms, and
            desktop applications.
          </p>
        </div>

        <div className="mt-12 lg:hidden space-y-6">
          {experience.map((job) => (
            <DetailCard key={job.id} job={job} />
          ))}
        </div>

        <div className="mt-14 hidden lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start">
          <div className="col-span-4">
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              {experience.map((job, index) => (
                <TimelineCard
                  key={job.id}
                  job={job}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="col-span-8">
            <div className="relative">
              {experience.map((job, index) => (
                <div
                  key={job.id}
                  className={`transition-opacity duration-300 ease-out top-0 left-0 w-full ${
                    activeIndex === index
                      ? "opacity-100 relative z-10"
                      : "opacity-0 absolute z-0 pointer-events-none"
                  }`}
                  aria-hidden={activeIndex !== index}
                >
                  <DetailCard job={job} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
