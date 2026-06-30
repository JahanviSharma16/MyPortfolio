import { education } from "../data/resumeData";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const Education = () => {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="section-container">
        <div data-aos="fade-up">
          <p className="section-label">Academics</p>
          <h2 className="section-title">
            <span className="text-highlight">Education</span>
          </h2>
          <p className="mt-4 text-ink-secondary max-w-2xl text-base leading-relaxed">
            Strong academic foundation in computer applications and information
            technology.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <article
              key={item.id}
              className="card card-hover p-6 sm:p-8 flex gap-5"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-highlight-light flex items-center justify-center text-highlight">
                <HiOutlineAcademicCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink">
                  {item.institution}
                </h3>
                <p className="text-ink-secondary mt-1 text-sm">
                  {item.degree}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="tag">{item.cgpa}</span>
                  <span className="text-sm text-ink-muted">{item.period}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
