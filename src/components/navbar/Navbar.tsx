import React from "react";
import { Hero } from "../../components";
import { Logo } from "../../assets/icons";
import "./navbar.scss";
const Navbar: React.FC = () => {
  return (
    <div>
      <div className="">nav bar</div>
      <Logo className="logo" />
      <Hero />
    </div>
  );
};

export default Navbar;
