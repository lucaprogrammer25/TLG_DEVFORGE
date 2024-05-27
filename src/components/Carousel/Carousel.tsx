import React, { useState, useEffect } from "react";
import Buttontmg3 from "../Buttons/ButtonTmg3";
import { useNavigate } from "react-router-dom";
import { CarouselProps } from "../../interfaces/type";

const Carousel: React.FC<CarouselProps> = ({
  images,
  names,
  prices,
  gender,
  category,
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
  const [currentGender, setCurrentGender] = useState("women"); //lascaito con errore in quanto era stato utilizzato per poter fare anche il carosello per categoria
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
  const filteredCategory = category?.filter(
    (_, index) => gender[index] === currentGender
  );
  const filteredId = id.filter((_, index) => gender[index] === currentGender);

  const totalFilteredImages = filteredImages.length;
  const maxItems = Math.min(8, totalFilteredImages);

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
    gender: string;
    category?: string;
  }[] => {
    const shuffledIndexes = JSON.parse(
      sessionStorage.getItem(`shuffledIndexes-${currentGender}`) || "[]"
    );

    const visibleIndexes = [];
    for (let i = 0; i < itemsToShow; i++) {
      visibleIndexes.push(shuffledIndexes[(currentIndex + i) % maxItems]);
    }

    return visibleIndexes.map((index: any) => {
      const item = {
        src: filteredImages[index],
        name: filteredNames[index],
        price: filteredPrices[index],
        id: filteredId[index],
        gender: currentGender,
        category: filteredCategory ? filteredCategory[index] : undefined,
      };
      console.log(item); // Debugging log to see the item
      return item;
    });
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
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="carousel-container">
      <div className="selectorCarouselCategory">
        {/* <span
          className="ButtonTmgCss3"
          onClick={() => handleGenderClick("women")}
        >
          Women
        </span> */}
        {/* <span
          className="ButtonTmgCss3"
          onClick={() => handleGenderClick("men")}
        >
          Men
        </span> */}
      </div>
      <div className="productDescription">
        <Buttontmg3 className="ButtonTmgCss3" onClick={goToPrev} label="Prev" />
        <div>
          <div className={`carousel-images ${slideDirection}`}>
            {getVisibleItems().map((item, index) => (
              <div
                key={index}
                className="carousel-image"
                onClick={() => {
                  console.log(
                    `Navigating to: /${item.gender}/${item.category}/${item.id}`
                  ); // Debugging log for navigate path
                  navigate(`/${item.gender}/${item.category}/${item.id}`);
                }}
              >
                <img src={item.src} alt={`Slide ${index}`} />
                <div className="pDiv">
                  <p className="carousel-image-name">
                    {item.name} <br />€{item.price}
                  </p>
                </div>
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
