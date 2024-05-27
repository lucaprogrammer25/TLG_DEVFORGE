import React, { useState, useEffect } from "react";
import "../../style/ButtonsSCSS/scrollToTop.scss";
import arrowToTop from "../../assets/icons/arrow.png"

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scrollToTopScss ${isVisible ? "" : "hidden"}`}
      onClick={scrollToTop}
    >
      <img src={arrowToTop} alt="arrowToTop" />
    </button>
  );
};

export default ScrollToTopButton;
