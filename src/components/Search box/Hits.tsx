import React from 'react';
import { AlgoliaHit } from '../../interfaces/type';
import { useNavigate } from 'react-router-dom';

interface HitProps {
  hit: AlgoliaHit;
  sendEvent: (eventType: string, hit: AlgoliaHit, eventName: string) => void;
}

const Hit: React.FC<HitProps> = ({ hit, sendEvent }) => {
  const navigate = useNavigate(); 

  const handleItemClick = () => {
    const { gender, category, id } = hit; 
    const url = `/${gender}/${category}/${id}`;
    navigate(url); 
  };

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    sendEvent('click', hit, 'Product Clicked');
    handleItemClick(); 
  };

  return (
    <div className="hitSearchBox" onClick={handleClick}>
      <h2> {hit.name}</h2>
      <p>{hit.price} €</p>
    </div>
  );
};

export default Hit;
