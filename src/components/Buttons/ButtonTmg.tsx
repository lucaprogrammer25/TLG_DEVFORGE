import React from "react";
import "./ButtonTmg.css";

interface ButtonTmgProps {
  onClick: () => void; 
  label: string; 
}

const Buttontmg: React.FC<ButtonTmgProps> = ({ onClick, label}) => {
  return <button className="ButtonTmgCss" onClick={onClick}>{label}</button>;
};

export default Buttontmg;
