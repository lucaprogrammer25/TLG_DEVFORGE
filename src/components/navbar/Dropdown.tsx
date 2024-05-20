import React from "react";
import { Link } from "react-router-dom";

interface DropdownItemProps {
  items: any[];
  category: string;
}

const DropdownItems: React.FC<DropdownItemProps> = ({ items, category }) => {
  return (
    <>
      {items.map((item: any, index: number) => {
        return (
          <Link to={`${category}/${item.fields.description}`} key={index}>
            <div className={`navbarHover${category}${item.fields.name}`}>
              <h1>{item.fields.name}</h1>
              <img className="navbarHoverImage" src={item.base64} alt={item.fields.name} />
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default DropdownItems;
