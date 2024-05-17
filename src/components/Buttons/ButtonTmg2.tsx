import React from "react";
import "./ButtonTmg2.css";

interface ButtonTmgProps {
  onClick:  any; 
  label: string; 
  classButton?:string;
}

const Buttontmg2: React.FC<ButtonTmgProps> = ({ onClick, label,classButton}) => {
  return <button className="ButtonTmgCss2" onClick={onClick}><span className={classButton}></span>{label}</button>;
};

export default Buttontmg2;
