import React from "react";
import "../../style/ButtonsSCSS/ButtonTmg3.scss";
import { FormattedMessage } from "react-intl";

interface ButtonTmgProps {
  label: string; 
  onClick: any;
  className?:string;
}

const Buttontmg3: React.FC<ButtonTmgProps> = ({ onClick, label, className}) => {
  return <button className={className} onClick={onClick}><FormattedMessage id={label} defaultMessage={label}/></button>;
};

export default Buttontmg3;
