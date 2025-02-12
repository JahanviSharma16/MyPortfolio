import CompletedProjects from "../components/CompletedProjects";
import Hero from "../components/Hero";
import MySkills from "../components/MySkills";
import Specialities from "../components/Specialities";
import WorkProcess from "../components/WorkProcess";

const Home = () => {
  return (
    <div className="md:px-28 ">
      <Hero />
      <Specialities />
      <WorkProcess />
      <MySkills />
      <CompletedProjects />
    </div>
  );
};

export default Home;
