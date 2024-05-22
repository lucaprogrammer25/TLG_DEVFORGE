import React, { useEffect, useState } from 'react';
import { Props } from "../interfaces/type";
import Buttontmg3 from './Buttons/ButtonTmg3';

const CardPDP: React.FC<Props> = ({ image, title, price, description, addToCart }: Props) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [errorSize, setErrorSize] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickClassSize = (size: string) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(selectedSize);
        } else {
            setErrorSize(true)
            setTimeout(() => {
                setErrorSize(false)
            }, 3500);
        }
    };

    return (
        <div className="containerCardPDP">
            <div className='wrapperImg'>
                <div className='contentProducts'>
                    <div className='containerImgPDP'>
                        <img src={image} alt="" />
                        <div className='containerPricePDP'>
                            <p>{price}€</p>
                            <div className='buttonErrorPrice'>
                            <Buttontmg3 className='ButtonTmgCss3' label={"add to cart"} onClick={handleAddToCart} />
                            {errorSize ? <span>Select size please!</span>: null}
                            </div>
                        </div>
                    </div>
                    <div className='infoCardPDP'>
                        <h2 className='titleCardPDP'>{title}</h2>
                        <div className='detailsPDP'>
                            <h3>Description</h3>
                            <p> {description}</p>
                        </div>
                        <div className="sizeCard">
                            <h3>Size</h3>
                            <div className='sizeContainer'>
                                <p className={selectedSize === 'XS' ? 'itemSizeOnActive' : 'itemSize'} onClick={() => handleClickClassSize('XS')}>XS</p>
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
    );
};

export default CardPDP;
