import React, { useState } from "react";
import "./DropdownButton.scss";

interface DropdownButtonProps {
  buttonText: string;
  children: React.ReactNode;
  isOpen: boolean;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  buttonText,
  children,
  isOpen,
}) => {
  return (
    <div className="dropdown">
      <button className="btn">{buttonText}</button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default DropdownButton;
