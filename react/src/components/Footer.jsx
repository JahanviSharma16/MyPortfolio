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
              <button className={"hover:underline"}>Betting Log</button>
            </li>
            <li className="py-1">
              <button className="hover:underline">Picks & Analysis</button>
            </li>
            <li className="py-1">
              <a href="/nba-spreads" className="hover:underline">
                NBA Spreads
              </a>
            </li>
            <li className="py-1">
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="py-1">
              <a href="/subscribe" className="hover:underline">
                Subscribe
              </a>
            </li>
            <li className="py-1">
              <a href="/TermsOfUse" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li className="py-1">
              <a href="/PrivacyPolicy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:mt-16">
          <h3 className="font-semibold mb-2 text-md md:text-lg">
            Follow Us On
          </h3>
          <ul className="space-y-1 2xl:text-sm md:text-xs py-1">
            <li className="py-1">
              <a
                href="https://twitter.com/SpreadSpotter"
                className="hover:underline"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.instagram.com/spreadspotter/"
                className="hover:underline"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.facebook.com/profile.php?id=61556945684309"
                className="hover:underline"
                target="_blank"
              >
                Facebook
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
             jahanvisharma16@gmail.com
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
