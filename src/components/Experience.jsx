import { experience } from "../data/resumeData";
import { HiOutlineBriefcase } from "react-icons/hi2";

const Experience = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-container">
        <div data-aos="fade-up">
          <p className="section-label">Career</p>
          <h2 className="section-title">
            Professional <span className="text-gold">Experience</span>
          </h2>
          <p className="mt-4 text-ink-secondary max-w-2xl text-base leading-relaxed">
            Building scalable products across SaaS, CRM, AI-powered platforms, and
            desktop applications.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <article
                key={job.id}
                className="card card-hover p-6 sm:p-8 sm:ml-0 relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="hidden sm:flex absolute -left-[1px] top-8 w-3 h-3 rounded-full bg-accent border-4 border-surface-muted" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="sm:hidden flex-shrink-0 w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-accent">
                      <HiOutlineBriefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ink">{job.role}</h3>
                      <p className="text-accent font-medium mt-0.5">
                        {job.company}
                      </p>
                      <p className="text-sm text-ink-muted mt-1">
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-ink-secondary bg-surface-subtle px-4 py-1.5 rounded-full whitespace-nowrap self-start">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-ink-secondary text-sm leading-relaxed">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
