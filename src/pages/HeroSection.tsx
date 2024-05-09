import { useTypeSelector ,useTypeDispatch} from "../redux/typeHooks"
import fetchDataContentful from "../redux/fetchContentful";
import { useEffect } from "react";

const HeroSection = () => {
  const { data, error } = useTypeSelector((state) => state.contentful)
  const dispatch = useTypeDispatch();

// console.log(data,error);
  
  useEffect(() => {
    dispatch(fetchDataContentful())
    console.log(data);
    
  },[dispatch])

  
  

  
  return (
    <div className="heroSectionContainer">
        <img  src="" className="heroSectionImage"alt="landing image"></img>
    </div>
    
  )
}

export default HeroSection