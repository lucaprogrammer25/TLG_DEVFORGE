// In App.tsx
import React from "react";
import "./App.css";
import Buttontmg from "./components/Buttons/ButtonTmg";
import Buttontmg2 from "./components/Buttons/ButtonTmg2";
import Buttontmg3 from "./components/Buttons/ButtonTmg3";

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
      <Buttontmg onClick={handleAddToCart} label="BUTTON 1" />
      <Buttontmg2 onClick={handleClick2} label="BUTTON 2" />
      <Buttontmg3 onClick={handleClick} label="BUTTON 3" />
    </>
  );
};

export default App;
