import React, { useState, useEffect } from "react";
import "../../style/CarouselScss/Carousel.scss";
import Buttontmg3 from "../Buttons/ButtonTmg3";
import { useNavigate } from "react-router-dom";

interface CarouselProps {
  images: string[];
  names: string[];
  prices: string[];
  gender: string[];
  id: string[];
}

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

  useEffect(() => {
    const shuffledIndexes = JSON.parse(
      sessionStorage.getItem("shuffledIndexes") || "[]"
    );
    if (shuffledIndexes.length === 0) {
      const newShuffledIndexes = Array.from(
        { length: totalFilteredImages },
        (_, i) => i
      ).sort(() => Math.random() - 0.5);
      sessionStorage.setItem(
        "shuffledIndexes",
        JSON.stringify(newShuffledIndexes)
      );
      setCurrentIndex(newShuffledIndexes[0]);
    } else {
      setCurrentIndex(shuffledIndexes[currentIndex]);
    }
  }, [totalFilteredImages]); 

  const getVisibleItems = (): {
    src: string;
    name: string;
    price: string;
    id: string;
  }[] => {
    const shuffledIndexes = JSON.parse(
      sessionStorage.getItem("shuffledIndexes") || "[]"
    );
    const visibleIndexes = shuffledIndexes.slice(
      currentIndex,
      currentIndex + itemsToShow
    );
    return visibleIndexes.map((index:any) => ({
      src: filteredImages[index],
      name: filteredNames[index],
      price: filteredPrices[index],
      id: filteredId[index],
    }));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalFilteredImages);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalFilteredImages) % totalFilteredImages
    );
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 3000);
    return () => clearInterval(timer);
  }, [totalFilteredImages]);

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
    console.log("Current Gender:", gender);
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
        <Buttontmg3 onClick={goToPrev} label="Prev" />
        <div className="carousel-images">
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
        <Buttontmg3 onClick={goToNext} label="Next" />
      </div>
    </div>
  );
};

export default Carousel;
