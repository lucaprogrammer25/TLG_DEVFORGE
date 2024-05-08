// In App.tsx
import React from "react";
import Buttontmg from "./components/Buttons/ButtonTmg";
import Buttontmg2 from "./components/Buttons/ButtonTmg2";
import Buttontmg3 from "./components/Buttons/ButtonTmg3";

const App: React.FC = () => {
  const handleClick = () => {
    console.log("BUTTON 1");
  };
  const handleClick2 = () => {
    console.log("BUTTON 2");
  };
  const handleClick3 = () => {
    console.log("BUTTON 3");
  };

  return (
    <>
      <Buttontmg onClick={handleClick} label="BUTTON 1" />
      <Buttontmg2 onClick={handleClick2} label="BUTTON 2" />
      <Buttontmg3 onClick={handleClick3} label="BUTTON 3" />
    </>
  );
};

export default App;
