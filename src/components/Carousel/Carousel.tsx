import React, { useState, useEffect } from "react";
import "../../style/CarouselScss/Carousel.scss";
import Buttontmg3 from "../Buttons/ButtonTmg3";
import { useTypeDispatch, useTypeSelector } from "../../redux/typeHooks";
import fetchDataContentful from "../../redux/fetchProducts";

interface CarouselProps {
  images: string[];
}



const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const getItemsToShow = () => {
    if (window.innerWidth <= 480) {
      return 2;
    }
    return 4;
  };
  
  const {data , error}=useTypeSelector((state)=>state.contentful)
  
  const dispatch = useTypeDispatch()
  useEffect(()=>{
    dispatch(fetchDataContentful())
  },[dispatch])
  console.log(data);
  


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
    const timer = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [goToNext]);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
      <Buttontmg3 onClick={goToPrev} label="Prev" />
      <div>
        <div className="carousel-images">
          {getVisibleImages().map((src, index) => (
            <img key={index} src={src} />
          ))}
        </div>
      </div>
      <Buttontmg3 onClick={goToNext} label="Next" />
    </div>
  );
};

export default Carousel;
