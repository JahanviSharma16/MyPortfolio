import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-full my-auto py-52 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white font-semibold leading-tight">
        <span className="text-gray-300 text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
          Building{" "}
        </span>
        <br className="md:hidden" />
        <span className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl md:block xl:p-2">
          Scalable Web Solutions
        </span>
        <br />
        <span className="bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
          with Modern Technologies
        </span>
      </h1>

      <p className="text-gray-400 text-sm sm:text-base md:text-lg xl:text-xl mt-6 leading-relaxed max-w-3xl">
        Hi, I’m <span className="text-customBlue font-semibold">Jahanvi</span> –
        a Full-Stack Developer specializing in{" "}
        <span className="text-customPurple font-semibold">
          Full Stack Development
        </span>
        . I create seamless, high-performing web applications that bring ideas
        to life.
      </p>

      <Link
        to="/contact"
        className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-customBlue to-customPurple 
                   text-white font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Let's Work Together
      </Link>
    </section>
  );
};

export default Hero;
