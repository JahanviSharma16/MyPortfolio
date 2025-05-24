import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ scrollRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    <nav className="p-6 md:px-28 bg-gradient-to-t from-[#0E0E10] to-black fixed z-50 w-full">
      <div className="flex items-center justify-between">
        <h1
          className="text-white text-xl font-bold cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          Developer
        </h1>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        <ul className="hidden md:flex items-center gap-10 text-white">
          <li>
            <button onClick={() => handleScroll("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleScroll("services")}>Service</button>
          </li>
          <li>
            <button onClick={() => handleScroll("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleScroll("about")}>About</button>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Link
          to="/contact"
          className="hidden md:block px-4 py-2 rounded-full bg-gradient-to-l from-customBlue to-customPurple text-white"
        >
          Let's Work Together
        </Link>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-white">
          <li>
            <button onClick={() => handleScroll("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleScroll("services")}>Service</button>
          </li>
          <li>
            <button onClick={() => handleScroll("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleScroll("about")}>About</button>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-center px-4 py-2 rounded-full bg-gradient-to-l from-customBlue to-customPurple text-white"
              onClick={() => setIsOpen(false)}
            >
              Let's Work Together
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
