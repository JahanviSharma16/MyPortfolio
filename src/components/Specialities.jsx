import { skillCategories } from "../data/resumeData";
import {
  FaReact,
  FaDatabase,
  FaRobot,
  FaCloud,
  FaTools,
} from "react-icons/fa";
import { FaNode } from "react-icons/fa6";

const categoryIcons = {
  Frontend: <FaReact />,
  Backend: <FaNode />,
  "AI & Automation": <FaRobot />,
  Databases: <FaDatabase />,
  "Cloud & DevOps": <FaCloud />,
  "Tools & Languages": <FaTools />,
};

const Skills = () => {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="section-container">
        <div data-aos="fade-up">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">
            Technical <span className="text-highlight">Skills</span>
          </h2>
          <p className="mt-4 text-ink-secondary max-w-2xl text-base leading-relaxed">
            A versatile toolkit spanning full-stack development, AI integrations,
            and production-grade DevOps.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card card-hover p-6 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-highlight-light flex items-center justify-center text-highlight text-lg">
                  {categoryIcons[category.title]}
                </span>
                <h3 className="text-base font-bold text-ink">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-surface-subtle text-ink-secondary border border-border-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
