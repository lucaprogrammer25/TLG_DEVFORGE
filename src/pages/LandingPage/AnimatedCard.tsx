import { useEffect, useRef, useState } from "react";
import { useTypeSelector } from "../../redux/typeHooks"
import Card from "../../components/CardHomePage";

const AnimatedComponent = () => {
  const ref = useRef<HTMLDivElement>(null); 
  const [isVisible, setIsVisible] = useState(false);
  const { data } = useTypeSelector((state) => state.contentful);
  

  const quality= data.items && data.items[2].fields.image.fields.file.url;
  const handmade= data.items && data.items[1].fields.image.fields.file.url; 
  const collection= data.items && data.items[0].fields.image.fields.file.url;

  const qualityP= data.items && data.items[2].fields.paragraph;
  const handmadeP= data.items && data.items[1].fields.paragraph; 
  const collectionP= data.items && data.items[0].fields.paragraph;


  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <>
      <h2 className="TitleHomePage">TMB SERVICES</h2>
    <div className="animatedCardConteiner"ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(100px)", transition: "opacity 1s, transform 1s" }}>
      <Card title="Collection"  video={collection}    paragraph={collectionP} linkLabel="Collection" linkUrl="www.google.com" />
       <Card title="Handmade"  video={handmade} paragraph={handmadeP} linkLabel="Handmade" linkUrl="www.google.com" /> 
      <Card title="Quality"  video={quality} paragraph={qualityP} linkLabel="Quality" linkUrl="www.google.com" />
    </div>
    </>
  );
};

export default AnimatedComponent;
