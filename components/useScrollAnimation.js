import { useState, useEffect } from "react";

export default function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY + window.innerHeight;
      const element = document.querySelector(".animate-on-scroll");
      if (element && top > element.offsetTop + 50) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
}
