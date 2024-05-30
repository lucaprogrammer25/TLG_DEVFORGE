
import React from 'react';
import { AlgoliaHits } from '../../interfaces/type';
import { useNavigate } from 'react-router-dom';

interface HitProps {
  hit: AlgoliaHits;
  sendEvent: (eventType: string, hit: AlgoliaHits, eventName: string) => void;
}

const Hit: React.FC<HitProps> = ({ hit, sendEvent }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    const { gender, category, id } = hit;
    const url = `${gender}/${category}/${id}`;
    navigate(url);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    sendEvent('click', hit, 'Product Clicked');
    handleItemClick();
  };

  return (
    <div className="hitSearchBox" onClick={handleClick}>
      <h2>{hit.name}</h2>
      <p>{hit.price} $</p>
    </div>
  );
};

export default Hit;
