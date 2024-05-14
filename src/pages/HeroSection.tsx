import { useTypeSelector ,useTypeDispatch} from "../redux/typeHooks"
import fetchDataContentful from "../redux/fetchContentful";
import { useEffect } from "react";
import CarouselPage from "./CarouselPage";

const HeroSection = () => {
  const { data } = useTypeSelector((state) => state.contentful)
  const dispatch = useTypeDispatch();
  
  const landingImage =  data.items && data.items[1]?.fields.bannerImage.fields.file.url;
  
  

  useEffect(() => {
    dispatch(fetchDataContentful()) 
  },[dispatch])
  
  return (
    <>
        <div className="heroSectionContainer">
          <img  src={landingImage} className="heroSectionImage"alt="landing image"></img>
          <CarouselPage/>
      </div>   
    </>
  )
}

export default HeroSection