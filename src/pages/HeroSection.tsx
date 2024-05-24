 import { useTypeSelector ,useTypeDispatch} from "../redux/typeHooks"
import fetchDataContentful from "../redux/fetch/fetchContentful";
import { useEffect } from "react"; 
import CarouselPage from "./LandingPage/CarouselPage";


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
           <video src={video} autoPlay muted loop playsInline  disablePictureInPicture controls={false}/> 
          <CarouselPage/>
      </div>   
    </>
  )
}

export default HeroSection