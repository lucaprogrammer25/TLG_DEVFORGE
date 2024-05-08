import React from "react";
import "./ButtonTmg2.css";

interface ButtonTmgProps {
  onClick: () => void; // Definisce prop per la funzione
  label: string; // Aggiunge una prop per il testo del bottone
}

const Buttontmg2: React.FC<ButtonTmgProps> = ({ onClick, label}) => {
  return <button className="ButtonTmgCss2" onClick={onClick}><span>{label}</span></button>;
};

export default Buttontmg2;
