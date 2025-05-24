import { useLocation, useNavigate } from "react-router-dom";

const Footer = ({ scrollRefs }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (refKey) => {
    if (location.pathname !== "/") {
      localStorage.setItem("scrollTo", refKey);
      navigate("/");
    } else {
      scrollRefs[refKey]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0E0E10] to-black text-gray-300 px-6 md:px-20 lg:px-28 py-10 font-BaiJamjureeRegular">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Access</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", key: "home" },
              { name: "Service", key: "services" },
              { name: "Projects", key: "projects" },
              { name: "About", key: "about" },
              { name: "Contact", link: "/contact" },
            ].map((item, idx) => (
              <li key={idx}>
                {item.link ? (
                  <a href={item.link} className="hover:underline">
                    {item.name}
                  </a>
                ) : (
                  <button
                    onClick={() => handleScroll(item.key)}
                    className="hover:underline text-left"
                  >
                    {item.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Follow Me On</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/in/jahanvi-sharma-a6985823a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JahanviSharma16"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="mailto:jahanvisharma16@gmail.com"
                className="hover:underline"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm leading-relaxed">
            Delivering top-notch websites, interactive UI/UX designs, and
            scalable applications using modern frameworks like React, Node.js,
            and more.
          </p>
          <p className="mt-4 text-sm">
            <a
              href="mailto:jahanvisharma16@gmail.com"
              className="hover:underline"
            >
              jahanvisharma16@gmail.com
            </a>
          </p>
          <p className="mt-2 text-sm hover:underline">+91 8218512192</p>
        </div>
      </div>

      <div className="text-center text-xs mt-10 border-t border-gray-700 pt-4">
        © 2025 Web Developer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
