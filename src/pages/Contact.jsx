import ContactFormHelper from "../helper/ContactFormHelper";

const Contact = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 md:gap-20 py-10 md:py-20 px-4 sm:px-8 md:px-16 lg:px-28 text-white font-BaiJamjureeRegular">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] font-BaiJamjureeBold font-bold bg-gradient-to-b from-white via-white/70 to-white/0 bg-clip-text text-transparent">
          LET’S CONNECT,
          <span className="block">I’D LOVE TO HEAR FROM YOU</span>
        </h2>
        <p className="pt-6 text-md md:text-lg text-gray-300 max-w-xl">
          Have a project in mind or just want to say hello? Feel free to reach out! 
          I’m always excited to collaborate and explore new opportunities.
        </p>
        <a
          href="mailto:jahanvisharma932@gmail.com"
          className="pt-4 text-sm md:text-base text-gray-400 underline hover:text-gray-200 transition-colors duration-200"
        >
          jahanvisharma932@gmail.com
        </a>
      </div>

      {/* Right Form Section */}
      <div>
        <ContactFormHelper />
      </div>
    </div>
  );
};

export default Contact;
