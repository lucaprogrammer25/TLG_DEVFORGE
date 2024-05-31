import React, { useEffect} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ScrollToTopButton from '../components/Buttons/ScrollToTop';

interface DefaultDisplayProps {
  changeLocale: (newLocale: string) => void;
}

const DefaultDisplay: React.FC<DefaultDisplayProps> = ({ changeLocale }) => {
  const location = useLocation();
  


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
    <Navbar changeLocale={changeLocale} />
    <main>
    <div id="blurOutlet">
      <Outlet />
    </div>
    </main>
    <ScrollToTopButton />
    <Footer />
  </>
  );
};

export default DefaultDisplay;
