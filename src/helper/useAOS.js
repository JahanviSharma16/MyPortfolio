import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      delay: 0,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);
};

export default useAOS;
