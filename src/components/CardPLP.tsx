import React from 'react';
import { Props } from "../interfaces/type";
import Buttontmg3 from './Buttons/ButtonTmg3';
import "../style/ButtonsSCSS/ButtonTmg3.scss"


const CardPLP: React.FC<Props> = ({ image, title, price, alternative, goToPDP, seeMoreButton }:Props) => {
  
  return (
    <>
    <div  className="containerCardPLP">
      <div onClick={goToPDP} className='containerImgPLP'>
           <img src={image} alt={alternative} />
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