import React from 'react';
import { Props } from "../interfaces/type";


const CardPLP: React.FC<Props> = ({ image, title, price, alternative }:Props) => {
  return (
    <>
    <div className="containerCardPLP">
      <div className='containerImgPLP'>
           <img src={image} alt={alternative} />
      </div> 
          <div className='descriptionCardPLP'>
           <p>{title}</p>
           <div className='containerPricePLP'>
            <p>{price}</p>
           <button>Add to Cart</button>
           </div>
           </div>
           </div>    
    </>
  );
};

export default CardPLP;