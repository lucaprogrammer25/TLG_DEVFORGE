import React from 'react';
import { Props } from "../interfaces/type";
import Buttontmg3 from './Buttons/ButtonTmg3';


const CardPLP: React.FC<Props> = ({ image, title, price, alternative, goToPDP, seeMoreButton }:Props) => {
  
  return (
    <>
    <div  className="containerCardPLP">
      <div onClick={goToPDP} className='containerImgPLP'>
           <img src={image} alt={alternative} loading='lazy'/>
      </div> 
          <div className='descriptionCardPLP'>
           <p>{title}</p>
           <div className='containerPricePLP'>
            <p>{price}€</p>
           <Buttontmg3 className='ButtonTmgCss3' label={"See more"} onClick={seeMoreButton} />
           </div>
           </div>
           </div>    
    </>
  );
};

export default CardPLP;