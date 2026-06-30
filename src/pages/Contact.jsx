import { useLocation } from "react-router-dom";
import ContactFormHelper from "../helper/ContactFormHelper";
import { personalInfo } from "../data/resumeData";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  const location = useLocation();
  const isStandalone = location.pathname === "/contact";

  return (
    <section className={`py-20 sm:py-28 ${isStandalone ? "pt-32" : ""}`}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div data-aos="fade-right">
            <p className="section-label">Contact</p>
            <h2 className="section-title">
              Let&apos;s <span className="text-highlight">Connect</span>
            </h2>
            <p className="mt-4 text-ink-secondary text-base leading-relaxed max-w-md">
              Have a project in mind or want to discuss an opportunity? I&apos;d
              love to hear from you. Drop a message and I&apos;ll get back to you
              promptly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-ink-secondary hover:text-highlight transition-colors group"
              >
                <span className="w-10 h-10 rounded-xl bg-highlight-light flex items-center justify-center text-highlight group-hover:bg-highlight group-hover:text-white transition-colors">
                  <HiOutlineEnvelope className="w-5 h-5" />
                </span>
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 text-ink-secondary">
                <span className="w-10 h-10 rounded-xl bg-highlight-light flex items-center justify-center text-highlight">
                  <HiOutlinePhone className="w-5 h-5" />
                </span>
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-ink-secondary">
                <span className="w-10 h-10 rounded-xl bg-highlight-light flex items-center justify-center text-highlight">
                  <HiOutlineMapPin className="w-5 h-5" />
                </span>
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-ink-secondary hover:border-highlight hover:text-highlight transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-ink-secondary hover:border-highlight hover:text-highlight transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="100">
            <ContactFormHelper />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
