import React from "react";
import "./ButtonTmg3.css";

interface ButtonTmgProps {
  label: string; // Aggiunge una prop per il testo del bottone
  onClick: any
}

const Buttontmg3: React.FC<ButtonTmgProps> = ({ onClick, label}) => {
  return <button className="ButtonTmgCss3" onClick={onClick}>{label}</button>;
};

export default Buttontmg3;
