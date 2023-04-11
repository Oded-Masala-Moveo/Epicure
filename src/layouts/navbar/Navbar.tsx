import React, { useEffect, useState } from "react";
import "./navbar.scss";
import useWindowSize from "../../hooks/useWindowSize";
import MobileNavbar from "./Mobile/MobileNavbar";
import DesktopNavbar from "./desktop/DesktopNavbar";
const tablet = 768;
const desktop = 1024;
const Navbar: React.FC = () => {
  const { width } = useWindowSize();
  return (
    <>
      {width && width >= desktop && <DesktopNavbar />}
      {width && width < desktop - 1 && <MobileNavbar />}
    </>
  );
};

export default Navbar;
