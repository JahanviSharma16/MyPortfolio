import CompletedProjects from "../components/CompletedProjects";
import Hero from "../components/Hero";
import MySkills from "../components/MySkills";
import Specialities from "../components/Specialities";
import WorkProcess from "../components/WorkProcess";

const Home = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 max-w-screen-2xl mx-auto space-y-16">
      <Hero />
      <Specialities />
      <WorkProcess />
      <MySkills />
      <CompletedProjects />
    </div>
  );
};

export default Home;
