 import { useTypeSelector ,useTypeDispatch} from "../../redux/typeHooks"
import fetchDataContentful from "../../redux/fetch/fetchContentful";
import { useEffect } from "react"; 
import CarouselPage from "./CarouselPage";
import Content from "./Content";
 import AnimatedComponent from "./AnimatedCard"; 


const HeroSection = () => {
  const { data } = useTypeSelector((state) => state.contentful)
  const dispatch = useTypeDispatch();
  
  const landingImage =  data.items && data.items[6]?.fields.bannerImage.fields.file.url;
  
  

  useEffect(() => {
    dispatch(fetchDataContentful()) 
  },[dispatch]) 
  
  return (
    <>
        <div className="heroSectionContainer">
           {/* <img  src={landingImage} className="heroSectionImage"alt="landing image"></img> */}
           <video  className="heroSectionVideo"src={landingImage} autoPlay muted loop playsInline controls={false} disablePictureInPicture/> 
          <CarouselPage/>
          <Content/>
          <AnimatedComponent/> 
      </div>   
    </>
  )
}

export default HeroSection