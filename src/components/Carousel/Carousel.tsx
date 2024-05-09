import React, { useState, useEffect } from "react";
import "../../style/CarouselScss/Carousel.scss";
import Buttontmg3 from "../Buttons/ButtonTmg3";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const getItemsToShow = () => {
    if (window.innerWidth <= 480) {
      return 1;
    }
    return 4;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());
  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 90000);

    return () => clearInterval(timer);
  }, [goToNext]);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleImages = () => {
    const indexes = [];
    for (let i = 0; i < itemsToShow; i++) {
      indexes.push((currentIndex + i) % totalImages);
    }
    return indexes.map((index) => images[index]);
  };

  return (
    <div className="carousel-container">
      <Buttontmg3 onClick={goToPrev} label="Prev"/>
      <div>
        <div className="carousel-images">
          {getVisibleImages().map((src, index) => (
            <img className="imgCarousel" key={index} src={src} />
          ))}
        </div>
      </div>
      <Buttontmg3 onClick={goToNext} label="Next"/>
    </div>
  );
};

export default Carousel;
