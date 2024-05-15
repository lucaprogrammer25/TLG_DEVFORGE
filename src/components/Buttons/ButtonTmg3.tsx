import React from "react";
import "./ButtonTmg3.css";

interface ButtonTmgProps {
  label: string; 
  onClick: any
}

const Buttontmg3: React.FC<ButtonTmgProps> = ({ onClick, label}) => {
  return <button className="ButtonTmgCss3" onClick={onClick}>{label}</button>;
};

export default Buttontmg3;
