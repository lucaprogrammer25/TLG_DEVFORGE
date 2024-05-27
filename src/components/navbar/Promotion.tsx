import React, { useState, useEffect } from 'react';
import { PromotionProps } from '../../interfaces/type';

const Promotion: React.FC<PromotionProps> = ({ contents }) => {
    const [contentIndex, setContentIndex] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);
    const [animateContent, setAnimateContent] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
            setAnimateContent(true);
            setTimeout(() => setAnimateContent(false), 4000);
        }, 6000);
        return () => clearInterval(interval);
    }, [contents]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClose = () => {
        setVisible(false);
    };

    return visible ? (
        <div className='navbarPromotionWrapper'>
            <div className="navbarPromotion">
                <span className={`navbarPromotionContent ${animateContent ? 'fadeIn' : ''}`}>
                    {contents[contentIndex]}
                </span>
                <button className="navbarPromotionButton" onClick={handleClose}>X</button>
            </div>
        </div>
    ) : null;
};

export default Promotion;
