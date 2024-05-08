// In App.tsx
import React from "react";
import "./App.css";
import Buttontmg from "./components/ButtonTmg";
import Buttontmg2 from "./components/ButtonTmg2";
import Buttontmg3 from "./components/ButtonTmg3";

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
      <Buttontmg2 onClick={handleClick2} label="see more ..." />
      <Buttontmg3 onClick={handleClick} label="subscribe" />
      <Buttontmg onClick={handleClick} label="GO to PAY" />
      <Buttontmg onClick={handleClick} label="PAY" />
    </>
  );
};

export default App;
