import { useTypeSelector, useTypeDispatch } from "../../redux/typeHooks";
import fetchDataContentful from "../../redux/fetch/fetchContentful";
import { useEffect, useState } from "react";
import CarouselPage from "./CarouselPage";
import Content from "./Content";
import AnimatedComponent from "./AnimatedCard";

const HeroSection = () => {
  const { data } = useTypeSelector((state) => state.contentful);
  const dispatch = useTypeDispatch();
  const [loaded, setLoaded] = useState(false);

  const landingImage = data.items && data.items[6]?.fields.bannerImage.fields.file.url;

  useEffect(() => {
    dispatch(fetchDataContentful());
  }, [dispatch]);

  const handleVideoLoaded = () => {
    setLoaded(true); 
  };

  return (
    <div className="heroSectionContainer">
      <div className={`heroSectionVideoContainer ${loaded ? "zoomOut" : ""}`}>
        <video
          className="heroSectionVideo"
          src={landingImage}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          onLoadedData={handleVideoLoaded}
        />
      </div>
      <CarouselPage />
      <Content />
      <AnimatedComponent />
    </div>
  );
};

export default HeroSection;
