import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { personalInfo } from "../data/resumeData";

const navItems = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Skills", key: "skills" },
  { label: "Experience", key: "experience" },
  { label: "Education", key: "education" },
  { label: "Projects", key: "projects" },
  { label: "Contact", key: "contact", isRoute: true },
];

const Navbar = ({ scrollRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (refKey) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      localStorage.setItem("scrollTo", refKey);
      navigate("/");
    } else {
      scrollRefs[refKey]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md shadow-nav border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container py-4 flex items-center justify-between">
        <button
          onClick={() => handleScroll("home")}
          className="text-lg font-bold text-ink hover:text-accent transition-colors"
        >
          {personalInfo.firstName}
          <span className="text-gold">.</span>
        </button>

        <button
          className="md:hidden text-ink focus:outline-none p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.key}>
              {item.isRoute ? (
                <Link
                  to="/contact"
                  className="text-sm font-medium text-ink-secondary hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleScroll(item.key)}
                  className="text-sm font-medium text-ink-secondary hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:inline-flex btn-primary text-sm !py-2.5 !px-5">
          Get in Touch
        </Link>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-t border-border shadow-nav">
          <ul className="section-container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.key}>
                {item.isRoute ? (
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block py-2.5 text-sm font-medium text-ink-secondary hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleScroll(item.key)}
                    className="block w-full text-left py-2.5 text-sm font-medium text-ink-secondary hover:text-accent"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
