import { useTypeDispatch, useTypeSelector } from "../../redux/typeHooks";
import fetchDataContentful from "../../redux/fetch/fetchContentful";
import { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";

const Content = () => {
   
    const { data } = useTypeSelector((state) => state.contentful)
    const dispatch = useTypeDispatch();
    const location = useLocation();

    const logoMen=data.items && data.items[0].fields.maleImage.fields.file.url
    const logoWomen=data.items && data.items[0].fields.womenImage.fields.file.url
    
  useEffect(() => {
    dispatch(fetchDataContentful()) 
  },[dispatch]) 

  useEffect(() => {
    console.log("Location changed:", location.pathname);
    window.scrollTo(0, 0);
}, [location]);

  
  return (
    
    <>
    <div className="contentImages">
        <div className="contentMen">
        <Link to="/men">
            <img src={logoMen} 
            alt="Men Clothes" />
        </Link>
        </div>
        <div className="contentWomen">
        <Link to="/women">
            <img src={logoWomen} 
            alt="Women Clothes"/>
        </Link>
        </div>
    </div>
    </>
  )
}

export default Content