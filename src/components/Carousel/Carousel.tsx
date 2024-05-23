import React, { useState, useEffect } from "react";
import "../../style/CarouselScss/Carousel.scss";
import Buttontmg3 from "../Buttons/ButtonTmg3";
import { useNavigate } from "react-router-dom";

import { CarouselProps } from "../../interfaces/type";

const Carousel: React.FC<CarouselProps> = ({
  images,
  names,
  prices,
  gender,
  id,
}) => {
  const getItemsToShow = (): number => {
    if (window.innerWidth <= 480) {
      return 1;
    } else if (window.innerWidth <= 920) {
      return 3;
    } else {
      return 4;
    }
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGender, setCurrentGender] = useState("women");
  const [slideDirection, setSlideDirection] = useState("");

  const filteredImages = images.filter(
    (_, index) => gender[index] === currentGender
  );
  const filteredNames = names.filter(
    (_, index) => gender[index] === currentGender
  );
  const filteredPrices = prices.filter(
    (_, index) => gender[index] === currentGender
  );
  const filteredId = id.filter((_, index) => gender[index] === currentGender);

  const totalFilteredImages = filteredImages.length;
  const maxItems = Math.min(8, totalFilteredImages); // Ensure maxItems doesn't exceed total filtered items

  useEffect(() => {
    const shuffledIndexes = JSON.parse(
      sessionStorage.getItem(`shuffledIndexes-${currentGender}`) || "[]"
    );
    if (shuffledIndexes.length === 0) {
      const newShuffledIndexes = Array.from(
        { length: totalFilteredImages },
        (_, i) => i
      )
        .sort(() => Math.random() - 0.5)
        .slice(0, maxItems);
      sessionStorage.setItem(
        `shuffledIndexes-${currentGender}`,
        JSON.stringify(newShuffledIndexes)
      );
      setCurrentIndex(0);
    }
  }, [totalFilteredImages, currentGender]);

  const getVisibleItems = (): {
    src: string;
    name: string;
    price: string;
    id: string;
  }[] => {
    const shuffledIndexes = JSON.parse(
      sessionStorage.getItem(`shuffledIndexes-${currentGender}`) || "[]"
    );

    const visibleIndexes = [];
    for (let i = 0; i < itemsToShow; i++) {
      visibleIndexes.push(shuffledIndexes[(currentIndex + i) % maxItems]);
    }

    return visibleIndexes.map((index: any) => ({
      src: filteredImages[index],
      name: filteredNames[index],
      price: filteredPrices[index],
      id: filteredId[index],
    }));
  };

  const goToNext = () => {
    setSlideDirection("slide-left");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % maxItems);
  };

  const goToPrev = () => {
    setSlideDirection("slide-right");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + maxItems) % maxItems);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [totalFilteredImages, itemsToShow]);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleGenderClick = (gender: string) => {
    setCurrentGender(gender);
    setCurrentIndex(0);
  };

  const navigate = useNavigate();
  return (
    <div className="carousel-container">
      <div className="selectorCarouselCategory">
        <span
          className="ButtonTmgCss3"
          onClick={() => handleGenderClick("women")}
        >
          Women
        </span>
        <span
          className="ButtonTmgCss3"
          onClick={() => handleGenderClick("men")}
        >
          Men
        </span>
      </div>
      <div className="productDescription">
        <Buttontmg3 className="ButtonTmgCss3" onClick={goToPrev} label="Prev" />
        <div>
        <div className={`carousel-images ${slideDirection}`}>
          {getVisibleItems().map((item, index) => (
            <div
              key={index}
              className="carousel-image"
              onClick={() => navigate(`/pdp/${item.id}`)}
            >
              <img src={item.src} alt={`Slide ${index}`} />
              <p className="carousel-image-name">
                {item.name} <br />€{item.price}
              </p>
            </div>
          ))}
        </div>
        </div>
        <Buttontmg3 className="ButtonTmgCss3" onClick={goToNext} label="Next" />
      </div>
    </div>
  );
};

export default Carousel;
