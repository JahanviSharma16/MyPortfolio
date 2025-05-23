import ContactFormHelper from "../helper/ContactFormHelper";

const Contact = () => {
  return (
    <div className="grid lg:grid-cols-2 font-BaiJamjureeRegular gap-10 md:gap-20 text-white py-10 md:py-20 pl-[5%] pr-[5%] h-auto">
      <div className="flex flex-col justify-center">
        <h2 className="z-10 pb-6 text-[1.5rem] md:text-[28px] lg:text-[28px] xl:text-[2.5em] 2xl:text-[3rem] font-BaiJamjureeBold font-bold pt-12 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFFB6] to-[#FFFFFF00] bg-clip-text text-transparent font-bai">
          LET’S CONNECT,{" "}
          <span className="block">I’D LOVE TO HEAR FROM YOU</span>
        </h2>
        <p className="pt-4 text-md 2xl:text-xl lg:text-lg md:text-md text-grey">
          Have a project in mind or just want to say hello? Feel free to reach out! 
          I’m always excited to collaborate and explore new opportunities.
        </p>
        <div className="pt-4">
          <a
            href="mailto:jahanvisharma932@gmail.com"
            className="block text-sm 2xl:text-lg lg:text-md md:text-sm text-grey"
          >
            jahanvisharma932@gmail.com
          </a>
        </div>
      </div>

      <ContactFormHelper />
    </div>
  );
};

export default Contact;
