import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="w-full h-full py-[8rem] md:py-52 text-center">
    <h1 className="text-white xl:text-[64px] md:text-5xl text-4xl font-semibold text-center">
      {/* <span className="text-customBlue">Web Developer: </span> */}
      <span className="text-gray-300">Crafting Seamless </span>
      <span className="md:block xl:p-6">Web Experiences</span>
      <span className="bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text contain-inline-size">
        with Precision and Creativity
      </span>
    </h1>

    <p className="text-gray-400 text-center mx-auto xl:text-[16px] md:text-[14px] text-sm xl:w-[56%] md:w-[80%] w-[90%] pt-8 font-PlusJakartaSansRegular leading-7 py-10">
      Delivering top-notch websites, interactive UI/UX designs, and scalable
      applications using modern frameworks like React, Node.js, and more.
    </p>
    <Link className="px-4 py-2 rounded-full bg-gradient-to-l from-customBlue to-customPurple">
      Discuss for Projects
    </Link>
  </div>
  )
}

export default Hero