import React from "react";
import "./ButtonTmg3.css";
import { FormattedMessage } from "react-intl";

interface ButtonTmgProps {
  label: string; 
  onClick: any
}

const Buttontmg3: React.FC<ButtonTmgProps> = ({ onClick, label}) => {
  return <button className="ButtonTmgCss3" onClick={onClick}><FormattedMessage id={label} defaultMessage={label}/></button>;
};

export default Buttontmg3;
