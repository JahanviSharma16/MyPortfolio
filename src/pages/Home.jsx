import { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Specialities from "../components/Specialities";
import CompletedProjects from "../components/CompletedProjects";
import WorkProcess from "../components/WorkProcess";
import Contact from "./Contact";
import { useOutletContext } from "react-router-dom";

const Home = () => {
   const { services, projects, about } = useOutletContext();

  useEffect(() => {
    const target = localStorage.getItem("scrollTo");
    if (target) {
      const refs = { services, projects, about };
      refs[target]?.current?.scrollIntoView({ behavior: "smooth" });
      localStorage.removeItem("scrollTo");
    }
  }, []);

  return (
    <>
      {/* Pass refs to Hero if needed */}
      <Hero />
   <div ref={services}>
        <Specialities />
      </div>
      <div ref={projects}>
        <CompletedProjects />
      </div>
   <div ref={about}>
        <WorkProcess />
      </div>
      <Contact />
    </>
  );
};

export default Home;
