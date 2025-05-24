import ContactFormHelper from "../helper/ContactFormHelper";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 py-28 md:py-36 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-white font-BaiJamjureeRegular">
      
      {/* 🔹 Left Section: Text Info */}
      <div className="flex flex-col justify-center">
        <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] 2xl:text-[3.5rem] font-BaiJamjureeBold font-bold bg-gradient-to-b from-white via-white/70 to-white/0 bg-clip-text text-transparent leading-tight">
          LET’S CONNECT,
          <span className="block">I’D LOVE TO HEAR FROM YOU</span>
        </h2>

        <p className="pt-6 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
          Have a project in mind or just want to say hello? Feel free to reach out! 
          I’m always excited to collaborate and explore new opportunities.
        </p>

        <a
          href="mailto:jahanvisharma16@gmail.com"
          className="pt-4 text-sm sm:text-base text-gray-400 underline hover:text-gray-200 transition-colors duration-200"
        >
          jahanvisharma16@gmail.com
        </a>
      </div>

      {/* 🔹 Right Section: Form */}
      <div className="w-full max-w-xl mx-auto lg:mx-0">
        <ContactFormHelper />
      </div>
    </div>
  );
};

export default Contact;
