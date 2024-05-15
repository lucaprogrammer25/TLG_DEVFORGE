import React, { useState, useEffect } from "react";
import "../../style/CarouselScss/Carousel.scss";
import Buttontmg3 from "../Buttons/ButtonTmg3";

interface CarouselProps {
  images: string[];
  names: string[];
  prices: string[];
  category: string[];
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  names,
  prices,
  category,
}) => {
  console.log("Images:", images);
  console.log("Names:", names);
  console.log("Prices:", prices);
  console.log("Category:", category);

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
  const [currentCategory, setCurrentCategory] = useState("T-shirts");

  const filteredImages = images.filter(
    (_, index) => category[index] === currentCategory
  );
  const filteredNames = names.filter(
    (_, index) => category[index] === currentCategory
  );
  const filteredPrices = prices.filter(
    (_, index) => category[index] === currentCategory
  );

  const totalFilteredImages = filteredImages.length;

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

  const getVisibleItems = (): {
    src: string;
    name: string;
    price: string;
  }[] => {
    const indexes = Array.from(
      { length: itemsToShow },
      (_, i) => (currentIndex + i) % totalFilteredImages
    );
    return indexes.map((index) => ({
      src: filteredImages[index],
      name: filteredNames[index],
      price: filteredPrices[index],
    }));
  };

  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category);
    setCurrentIndex(0); // Reset index to 0 when category changes
    console.log("Current Category:", category);
  };

  const handleClickWoman = () => {
    alert("al momento niente");
  };

  return (
    <div className="carousel-container">
      <div className="selectorCarouselCategory">
        <span className="ButtonTmgCss3" onClick={() => handleClickWoman()}>
          Woman
        </span>
        <span
          className="ButtonTmgCss3"
          onClick={() => handleCategoryClick("T-shirts")}
        >
          T-shirts
        </span>
        <span
          className="ButtonTmgCss3"
          onClick={() => handleCategoryClick("trousers")}
        >
          Trousers
        </span>
        <span
          className="ButtonTmgCss3"
          onClick={() => handleCategoryClick("Dresses")}
        >
          Dresses
        </span>
      </div>
      <div className="productDescription">
        <Buttontmg3 onClick={goToPrev} label="Prev" />
        <div className="carousel-images">
          {getVisibleItems().map((item, index) => (
            <div key={index} className="carousel-image">
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
