import React from "react";
import "./ButtonTmg3.css";

interface ButtonTmgProps {
  onClick: () => void; // Definisce prop per la funzione
  label: string; // Aggiunge una prop per il testo del bottone
}

const Buttontmg3: React.FC<ButtonTmgProps> = ({ onClick, label}) => {
  return <button className="ButtonTmgCss3" onClick={onClick}>{label}</button>;
};

export default Buttontmg3;
