// CarouselPDP.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  gender: string;
  category?: string;
}

interface CarouselProps {
  items: Product[];
}

const CarouselPDP: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = 4;

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + items.length) % items.length);
  };

  const displayedItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="carousel">
      <button onClick={prevItem} className="ButtonTmgCss3">Previous</button>
      <div className="carousel-items">
        {displayedItems.map((item) => (
          <div key={item.id} className="carousel-item">
            <Link to={`/${item.gender}/${item.category}/${item.id}`}>
              <img src={item.image} alt={item.name} loading='lazy'/>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.gender}</p>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={nextItem} className="ButtonTmgCss3">Next</button>
    </div>
  );
};

export default CarouselPDP;
