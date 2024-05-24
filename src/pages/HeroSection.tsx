 import { useTypeSelector ,useTypeDispatch} from "../redux/typeHooks"
import fetchDataContentful from "../redux/fetch/fetchContentful";
import { useEffect } from "react"; 
import CarouselPage from "./CarouselPage";
/* import video from "../assets/contenful video.mp4" */

const HeroSection = () => {
  const { data } = useTypeSelector((state) => state.contentful)
  const dispatch = useTypeDispatch();
  
  const video =  data.items && data.items[6]?.fields.bannerImage.fields.file.url;
  
  

  useEffect(() => {
    dispatch(fetchDataContentful()) 
  },[dispatch]) 
  
  return (
    <>
        <div className="heroSectionContainer">
           {/* <img  src={landingImage} className="heroSectionImage"alt="landing image"></img> */}
          <video src={video} autoPlay muted loop playsInline />
          <CarouselPage/>
      </div>   
    </>
  )
}

export default HeroSection