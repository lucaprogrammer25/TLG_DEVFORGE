
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* import BackToTopButton from '../components/BackToTop'; */
/* import  { useState, useEffect } from 'react';*/ 



const DefaultDisplay = () => {
  /* const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) { 
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } */
  
  

  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <BackToTopButton onClick={handleBackToTopClick}/> */}
    <Footer/>
    </>
  );
};

export default DefaultDisplay;