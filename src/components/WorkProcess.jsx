import { summary } from "../data/resumeData";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiOpenai,
  SiN8N,
  SiTailwindcss,
  SiElectron,
} from "react-icons/si";

const techStack = [
  { icon: <FaReact />, label: "React.js" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <FaPython />, label: "Python" },
  { icon: <SiOpenai />, label: "LLM / GenAI" },
  { icon: <SiN8N />, label: "n8n" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <FaAws />, label: "AWS" },
  { icon: <SiElectron />, label: "Electron" },
];

const About = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Passionate{" "}
              <span className="text-gold">Full Stack Developer</span>
            </h2>
            <p className="mt-6 text-ink-secondary text-base leading-relaxed">
              {summary}
            </p>
            <p className="mt-4 text-ink-secondary text-base leading-relaxed">
              From SaaS and CRM platforms to agentic AI solutions and desktop
              apps with Electron, I focus on building products that are
              scalable, secure, and genuinely useful — with clean architecture
              and thoughtful UX at every layer.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="tag">2+ Years Experience</span>
              <span className="tag">MERN Stack</span>
              <span className="tag">AI & Automation</span>
              <span className="tag">Team Leadership</span>
            </div>
          </div>

          <div className="card p-8" data-aos="fade-left" data-aos-delay="100">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-muted mb-6">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface-subtle border border-border-light hover:border-accent/20 hover:bg-accent-light/50 transition-all duration-200"
                  data-aos="zoom-in"
                  data-aos-delay={index * 60}
                >
                  <span className="text-2xl text-accent">{tech.icon}</span>
                  <span className="text-xs font-medium text-ink-secondary text-center">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
