import React, { useEffect, useState } from 'react';
import { Props } from "../interfaces/type";
import Buttontmg3 from './Buttons/ButtonTmg3';

const CardPDP: React.FC<Props>= ({image, title, price, description, addToCart}: Props) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    useEffect(() => {  // aggiunto che quando arrivi in questa pagina ti porta in alto
        window.scrollTo(0, 0);
    }, []); 


    const handleClickClassSize = (size: string) => {
        setSelectedSize(size);
    }

    return (
        <>
            <div className="containerCardPDP">
                <div className='wrapperImg'>
                    <div className='contentProducts'>
                <div className='containerImgPDP'>
                    <img src={image} alt="" />
                    <div className='containerPricePDP'>
                        <p>{price}€</p>
                        <Buttontmg3 className='ButtonTmgCss3' label={"add to cart"} onClick={addToCart} />
                        </div>
                </div> 
                <div className='infoCardPDP'>
                    <h2 className='titleCardPDP'>{title}</h2>
                    <div className='detailsPDP'>
                        <h3>Description</h3>
                        <p> {description}</p>
                    </div>
                    <div className="sizeCard">
                        <h3>size</h3>
                        <div className='sizeContainer'>
                            <p className={selectedSize === 'S' ? 'itemSizeOnActive' : 'itemSize'} onClick={() => handleClickClassSize('S')}>S</p>
                            <p className={selectedSize === 'M' ? 'itemSizeOnActive' : 'itemSize'} onClick={() => handleClickClassSize('M')}>M</p>
                            <p className={selectedSize === 'L' ? 'itemSizeOnActive' : 'itemSize'} onClick={() => handleClickClassSize('L')}>L</p>
                            <p className={selectedSize === 'XL' ? 'itemSizeOnActive' : 'itemSize'} onClick={() => handleClickClassSize('XL')}>XL</p>
                        </div>
                    </div>
                    <div className="colorCard">
                        <h3>Colors</h3>
                        <div className='colorsContainer'>
                            <div className="squareGreen"></div>
                            <div className="squareYellow"></div>
                            <div className="squareRed"></div>
                        </div>
                    </div>
                    </div>
                    </div>
                   
                    </div>
                   
                   
              
            </div>    
        </>
    );
};

export default CardPDP;