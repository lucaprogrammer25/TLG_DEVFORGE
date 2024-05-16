
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PaymentForm from '../components/Forms/Payment';
import ShipmentForm from '../components/Forms/Shipment';
/* import BackToTopButton from '../components/BackToTop'; */
/* import  { useState, useEffect } from 'react';*/ 

interface DefaultDisplayProps {
  changeLocale: (newLocale: string) => void;
}

const DefaultDisplay: React.FC<DefaultDisplayProps> = ({changeLocale}) => {
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
    <Navbar changeLocale={changeLocale} />
    <Outlet/>
    {/* <BackToTopButton onClick={handleBackToTopClick}/> */}
    <ShipmentForm/>
    <Footer/>
    </>
  );
};

export default DefaultDisplay;