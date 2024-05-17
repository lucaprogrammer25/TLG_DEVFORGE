import React from 'react';
import "./ButtonTmg3.css"
import Buttontmg3 from './ButtonTmg3';

const ScrollToTopButton: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
      <Buttontmg3 label={"Scroll Top"} onClick={scrollToTop}/>
    );
};

export default ScrollToTopButton;
