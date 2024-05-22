 import { useTypeSelector ,useTypeDispatch} from "../../redux/typeHooks"
import fetchDataContentful from "../../redux/fetch/fetchContentful";
import { useEffect } from "react"; 
import CarouselPage from "./CarouselPage";
import Content from "./Content";
/* import video from "../assets/contenful video.mp4" */

const HeroSection = () => {
  const { data } = useTypeSelector((state) => state.contentful)
  const dispatch = useTypeDispatch();
  
  const landingImage =  data.items && data.items[3]?.fields.bannerImage.fields.file.url;
  
  

  useEffect(() => {
    dispatch(fetchDataContentful()) 
  },[dispatch]) 
  
  return (
    <>
        <div className="heroSectionContainer">
           {/* <img  src={landingImage} className="heroSectionImage"alt="landing image"></img> */}
           <video src={landingImage} autoPlay muted loop playsInline /> 
          <CarouselPage/>
          <Content/>
      </div>   
    </>
  )
}

export default HeroSection