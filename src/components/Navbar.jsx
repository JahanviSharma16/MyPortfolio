import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-6 md:px-28 bg-gradient-to-t from-[#0E0E10] to-black fixed z-50 w-full">
      <div className="flex items-center justify-between">
        <h1>Developer</h1>
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Service</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/clients">Client</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Link className="px-4 py-2 rounded-full bg-gradient-to-l from-customBlue to-customPurple">
          Let's Work Together
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
