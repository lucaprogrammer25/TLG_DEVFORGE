import React from "react";
import "./ButtonTmg2.css";

interface ButtonTmgProps {
  label: string; // Aggiunge una prop per il testo del bottone
  classButton: string
  onClick: any
}

const Buttontmg2: React.FC<ButtonTmgProps> = ({ onClick, label, classButton}) => {
  return <button className="ButtonTmgCss2" onClick={onClick}><span className={classButton}>{label}</span></button>;
};

export default Buttontmg2;
