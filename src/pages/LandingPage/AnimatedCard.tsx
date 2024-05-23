import { useEffect, useRef, useState } from "react";
import Card from "../../components/CardHomePage";

const AnimatedComponent = () => {
  const ref = useRef<HTMLDivElement>(null); 
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="animatedCardConteiner"ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(100px)", transition: "opacity 0.5s, transform 0.5s" }}>
      <Card title="Quality"  imageUrl="https://www.gucci.com/us/en/nst/monogramming"paragraph="we care for our component quality "linkLabel="www.google.com" linkUrl="www.google.com" />
      <Card title="Quality"  imageUrl="https://www.gucci.com/us/en/nst/monogramming"paragraph="we care for our component quality "linkLabel="www.google.com" linkUrl="www.google.com" />
      <Card title="Quality"  imageUrl="https://www.gucci.com/us/en/nst/monogramming"paragraph="we care for our component quality "linkLabel="www.google.com" linkUrl="www.google.com" />
    </div>
  );
};

export default AnimatedComponent;
