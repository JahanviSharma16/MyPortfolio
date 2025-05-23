import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-full py-32 md:py-52 text-center flex flex-col items-center">
      {/* 🔹 Headline */}
      <h1 className="text-white xl:text-[64px] md:text-5xl text-4xl font-semibold">
        <span className="text-gray-300">Building </span>
        <span className="md:block xl:p-4">Scalable Web Solutions</span>
        <span className="bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">
          with Modern Technologies
        </span>
      </h1>

      {/* 🔹 Subtitle */}
      <p className="text-gray-400 xl:text-lg md:text-md text-sm xl:w-[50%] md:w-[70%] w-[85%] pt-6 leading-7">
        Hi, I’m <span className="text-customBlue font-semibold">Jahanvi</span> – 
        a Full-Stack Developer specializing in <span className="text-customPurple font-semibold">Full Stack Development</span>
        I create seamless, high-performing web applications that bring ideas to life.
      </p>

      {/* 🔹 Call-to-Action Button */}
      <Link
        to="/contact"
        className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-customBlue to-customPurple 
                   text-white font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
      Let's Work Together
      </Link>
    </div>
  );
};

export default Hero;
