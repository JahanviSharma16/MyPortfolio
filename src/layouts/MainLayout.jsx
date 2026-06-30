import { Outlet, useLocation } from "react-router-dom";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAOS from "../helper/useAOS";

const MainLayout = () => {
  const location = useLocation();
  useAOS();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    experience: experienceRef,
    education: educationRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <div className="bg-surface-muted text-ink overflow-hidden min-h-screen">
      <Navbar scrollRefs={scrollRefs} />
      <main>
        {location.pathname === "/" ? (
          <Outlet context={scrollRefs} />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer scrollRefs={scrollRefs} />
    </div>
  );
};

export default MainLayout;
