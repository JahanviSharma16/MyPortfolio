import { Link, useLocation, useNavigate } from "react-router-dom";
import { personalInfo } from "../data/resumeData";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

const footerLinks = [
  { name: "Home", key: "home" },
  { name: "About", key: "about" },
  { name: "Skills", key: "skills" },
  { name: "Experience", key: "experience" },
  { name: "Education", key: "education" },
  { name: "Projects", key: "projects" },
];

const Footer = ({ scrollRefs }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (refKey) => {
    if (location.pathname !== "/") {
      localStorage.setItem("scrollTo", refKey);
      navigate("/");
    } else {
      scrollRefs[refKey]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-accent text-white" data-aos="fade-up">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold">
              {personalInfo.firstName}
              <span className="text-highlight">.</span>
            </h3>
            <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-md">
              {personalInfo.title} building scalable MERN applications, AI-powered
              solutions, and workflow automation. Based in {personalInfo.location}.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/70 hover:bg-highlight hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/70 hover:bg-highlight hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/70 hover:bg-highlight hover:text-accent transition-colors"
                aria-label="Email"
              >
                <HiOutlineEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => handleScroll(item.key)}
                    className="text-sm text-white/65 hover:text-highlight transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/65 hover:text-highlight transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 hover:text-highlight transition-colors"
                >
                  <HiOutlineEnvelope className="w-4 h-4 text-highlight" />
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="w-4 h-4 text-highlight" />
                {personalInfo.phone}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/35">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
