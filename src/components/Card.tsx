import React from 'react';


interface Props {
  // Definisci le tue props qui
}

const Card: React.FC<Props> = ({ /* props */ }) => {
  return (
    <>
    <div className='containerCard'>
        <img src="https://www.ottostore.com/cdn/shop/files/KINGMAN_NAVY_1_9ce05d82-8c64-4b4a-905b-fd8af93e8776_1800x1800.png?v=1701258606" alt="product image" />
    </div>
    </>
  );
};

export default Card;