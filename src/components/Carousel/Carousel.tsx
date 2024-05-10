import React, { useState, useEffect } from "react";
import "../../style/CarouselScss/Carousel.scss";
import Buttontmg3 from "../Buttons/ButtonTmg3";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const getItemsToShow = (): number => {
    return window.innerWidth <= 480 ? 2 : 4;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());
  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 3000);
    return () => clearInterval(timer);
  }, [totalImages]); // Dependency should ideally be static or rarely changing values

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleImages = (): string[] => {
    const indexes = Array.from(
      { length: itemsToShow },
      (_, i) => (currentIndex + i) % totalImages
    );
    return indexes.map((index) => images[index]);
  };

  return (
    <div className="carousel-container">
      <Buttontmg3 onClick={goToPrev} label="Prev" />
      <div className="carousel-images">
        {getVisibleImages().map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} />
        ))}
      </div>
      <Buttontmg3 onClick={goToNext} label="Next" />
    </div>
  );
};

export default Carousel;
