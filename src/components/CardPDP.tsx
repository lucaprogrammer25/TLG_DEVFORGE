import React, { useState } from 'react';
import { Props } from "../interfaces/type";
const CardPDP: React.FC<Props>= ({title, price, description}: Props) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const handleClickClassSize = (size: string) => {
        setSelectedSize(size);
    }

    return (
        <>
            <div className="containerCardPDP">
                <div className='wrapperImg'>
                <div className='containerImgPDP'>
                    <img src="https://www.jeans.ch/out/pictures/ys_generated/635_762_85__sharp/out/pictures/master/product/1/marc-o-polo-stripe-t-shirt-slim-fit-multi-white_m24-2114-51298-i16_1.png" alt="" />
                </div> 
                <div className='infoCardPDP'>
                    <h2 className='titleCardPDP'>Vestito bellissimo {title}</h2>
                    <div className='containerPricePDP'>
                        <p>19.99$ {price}</p>
                        <button>Add to Cart</button>
                        </div>
                    </div>
                    </div>
                    <div className='detailsPDP'>
                        <h3>Description</h3>
                        <p> {description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veritatis fugit eos voluptates, in ea cum magni libero hic distinctio rerum culpa quibusdam rem temporibus saepe perspiciatis sapiente corrupti delectus?</p>
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
        </>
    );
};

export default CardPDP;