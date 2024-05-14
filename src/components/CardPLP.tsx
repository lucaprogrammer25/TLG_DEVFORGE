import React from 'react';
import { Props } from "../interfaces/type";
import Buttontmg3 from './Buttons/ButtonTmg3';


const CardPLP: React.FC<Props> = ({ image, title, price, alternative, addToCart, remove }:Props) => {

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
           <Buttontmg3 label='Add to cart' onClick={addToCart} />
           <Buttontmg3 label='Remove' onClick={remove} />
           </div>
           </div>
           </div>    
    </>
  );
};

export default CardPLP;