// In App.tsx
import React from "react";
import "./App.css";
import Buttontmg from "./components/ButtonTmg";

const App: React.FC = () => {
  const handleClick = () => {
    console.log("ciao");
  };
  const handleClick2 = () => {
    console.log("ciao2");
  };
  const handleAddToCart = () => {
    console.log("handle to cart");
  };

  return (
    <>
      <Buttontmg onClick={handleAddToCart} label="ADD TO CART" />
      <Buttontmg onClick={handleClick2} label="see more ..." />
      <Buttontmg onClick={handleClick} label="subscribe" />
      <Buttontmg onClick={handleClick} label="GO to PAY" />
    </>
  );
};

export default App;
