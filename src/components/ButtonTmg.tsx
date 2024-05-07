// In ButtonTmg.tsx
import React from "react";
import "./ButtonTmg.css";

interface ButtonTmgProps {
  onClick: () => void; // Definisce un tipo per la funzione onClick
  label: string; // Aggiunge una prop per il testo del bottone
}

const Buttontmg: React.FC<ButtonTmgProps> = ({ onClick, label }) => {
  return <button className="ButtonTmgCss" onClick={onClick}>{label}</button>;
};

export default Buttontmg;
