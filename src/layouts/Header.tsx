import React from "react";
import { Hero, Navbar } from "../components";
const Header: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </>
  );
};

export default Header;
