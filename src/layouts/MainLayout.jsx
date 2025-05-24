import { Outlet, useLocation } from "react-router-dom";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();

  // Define refs only if we're on the home page
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollRefs = {
    services: servicesRef,
    projects: projectsRef,
    about: aboutRef,
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar scrollRefs={scrollRefs} />
      <main>
        {location.pathname === "/" ? (
          <Outlet context={scrollRefs} />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
