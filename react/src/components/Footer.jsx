const Footer = () => {
  return (
    <footer className="md:px-28  bg-gradient-to-b from-[#0E0E10] to-black text-grey py-8 font-BaiJamjureeRegular pl-[5%] pr-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-5 2xl:gap-8 lg:gap-4 md:gap-6">
        <div className="2xl:pt-[8%] lg:pt-[18%] md:pt-[30%] md:pb-0 pb-5">
          {/* <img
            src={logoo}
            alt=""
            className="2xl:h-20 lg:h-16 md:h-14 h-16 w-auto"
          /> */}
        </div>

        <div className="flex flex-col md:mt-16">
          <h3 className="font-semibold mb-2 text-md md:text-lg">
            Quick Access
          </h3>
          <ul className="space-y-1 2xl:text-sm md:text-xs py-1">
            <li className="py-1">
              <a href="/" className={"hover:underline"}>
                Home
              </a>
            </li>
            <li className="py-1">
              <a href="/services" className="hover:underline">
                Service
              </a>
            </li>
            <li className="py-1">
              <a href="/projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li className="py-1">
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li className="py-1">
              <a href="/clients" className="hover:underline">
                Client
              </a>
            </li>
            <li className="py-1">
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:mt-16">
          <h3 className="font-semibold mb-2 text-md md:text-lg">
            Follow Me On
          </h3>
          <ul className="space-y-1 2xl:text-sm md:text-xs py-1">
            <li className="py-1">
              <a
                href="https://www.linkedin.com/in/jahanvi-sharma-a6985823a/"
                className="hover:underline"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://github.com/JahanviSharma16"
                className="hover:underline"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://mail.google.com/mail/?view=cm&to=jahanvisharma932@gmail.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:col-span-2 md:mt-16">
          <p className="2xl:text-md md:text-sm">
            Delivering top-notch websites, interactive UI/UX designs, and
            scalable applications using modern frameworks like React, Node.js,
            and more.
          </p>
          <p className="mt-2 2xl:text-md md:text-sm py-4">
            <a
              href="mailto:support@spreadspotter.com"
              className="hover:underline"
            >
              jahanvisharma932@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="text-center mt-6 text-xs md:text-xs">
        © 2025 Web Developer All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
