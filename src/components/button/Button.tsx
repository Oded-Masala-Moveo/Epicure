import React from "react";
import "./button.scss";
import { Lock, Search } from "../../assets/icons";

interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  primaryBlack?: boolean;
  primaryGray?: boolean;
  secondary?: boolean;
  secondaryBlack?: boolean;
  icon?: boolean;

  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  height,
  icon,
  primaryBlack,
  primaryGray,
  secondary,
  secondaryBlack,
  width,
  onClick,
}) => {
  const primaryBlackClass = primaryBlack ? "primary-black" : "";
  const primaryGrayClass = primaryGray ? "primary-gray" : "";
  const secondaryClass = secondary ? "secondary" : "";
  const secondaryBlackClass = secondaryBlack ? "secondary-black" : "";
  const iconClass = icon ? "icon-btn" : "";
  return (
    <div
      className={`btn ${primaryBlackClass} ${primaryGrayClass} ${secondaryClass} ${secondaryBlackClass} ${iconClass}`}
      style={{ width: width, height: height }}
      onClick={onClick}
    >
      <div className="icon-container">
        <Lock />
      </div>
      {children}
    </div>
  );
};

export default Button;
