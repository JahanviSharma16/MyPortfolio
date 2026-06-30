import { useEffect } from "react";
import AOS from "aos";
import Hero from "../components/Hero";
import About from "../components/WorkProcess";
import Skills from "../components/Specialities";
import Experience from "../components/Experience";
import Education from "../components/Education";
import CompletedProjects from "../components/CompletedProjects";
import Contact from "./Contact";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const scrollRefs = useOutletContext();

  useEffect(() => {
    const target = localStorage.getItem("scrollTo");
    if (target && scrollRefs) {
      scrollRefs[target]?.current?.scrollIntoView({ behavior: "smooth" });
      localStorage.removeItem("scrollTo");
      setTimeout(() => AOS.refresh(), 600);
    }
  }, [scrollRefs]);

  return (
    <>
      <div ref={scrollRefs.home}>
        <Hero />
      </div>
      <div ref={scrollRefs.about} data-section="about">
        <About />
      </div>
      <div ref={scrollRefs.skills}>
        <Skills />
      </div>
      <div ref={scrollRefs.experience}>
        <Experience />
      </div>
      <div ref={scrollRefs.education}>
        <Education />
      </div>
      <div ref={scrollRefs.projects}>
        <CompletedProjects />
      </div>
      <div ref={scrollRefs.contact}>
        <Contact />
      </div>
    </>
  );
};

export default Home;
