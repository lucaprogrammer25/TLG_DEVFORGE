import React, { useEffect, useRef } from 'react';
import { AlgoliaHits } from '../../interfaces/type';
import { useNavigate } from 'react-router-dom';

interface HitProps {
  hit: AlgoliaHits;
  sendEvent: (eventType: string, hit: AlgoliaHits, eventName: string) => void;
}

const Hit: React.FC<HitProps> = ({ hit, sendEvent }) => {
  const navigate = useNavigate();
  const searchBoxRef = useRef<HTMLCollectionOf<Element>>();
  const blurOutletRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    searchBoxRef.current = document.getElementsByClassName('sidebarSearchBox');
    blurOutletRef.current = document.getElementById('blurOutlet');
  }, []);

  const handleItemClick = () => {
    const { gender, category, id } = hit;
    const url = `${gender}/${category}/${id}`;
    navigate(url);

    
    if (searchBoxRef.current) {
      Array.from(searchBoxRef.current).forEach((element: Element) => {
        (element as HTMLElement).style.display = "none";
      });
    }

    if (blurOutletRef.current) {
      blurOutletRef.current.style.filter = "blur(0px)";
    }

    document.body.style.overflow = "unset";
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
