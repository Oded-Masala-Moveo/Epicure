import React, { useState } from "react";
import "./Dropdown.scss";

interface DropdownButtonProps {
  dropdownLook: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
}

const Dropdown: React.FC<DropdownButtonProps> = ({
  dropdownLook,
  children,
  isOpen,
}) => {
  return (
    <div className="dropdown">
      {dropdownLook}
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;
