import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import ScrollToTopButton from '../components/Buttons/ScrollToTop';

interface DefaultDisplayProps {
  changeLocale: (newLocale: string) => void;
}

const DefaultDisplay: React.FC<DefaultDisplayProps> = ({ changeLocale }) => {
  const location = useLocation();
  const [documentLoading, setDocumentLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setDocumentLoading(false);
    };
    if (document.readyState === 'interactive') {
      handleDOMContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    }
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageLoading(false);
    }, 700); 

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {(documentLoading || pageLoading) ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default DefaultDisplay;
