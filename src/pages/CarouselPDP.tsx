// CarouselPDP.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/CarouselScss/CarouselPDP.scss"

interface ProductPDP {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  gender: string;
}

interface CarouselProps {
  items: ProductPDP[];
}

const CarouselPDP: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + items.length) % items.length);
  };

  const displayedItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  const handleItemClick = (id: number) => {
    navigate(`/pdp/${id}`);
  };

  return (
    <div className="carousel">
      <button onClick={prevItem}>Previous</button>
      <div className="carousel-items">
        {displayedItems.map((item) => (
          <div 
            key={item.id} 
            className="carousel-item" 
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
      <button onClick={nextItem}>Next</button>
    </div>
  );
};

export default CarouselPDP;
