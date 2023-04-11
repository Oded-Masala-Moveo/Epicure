import React, { useState } from "react";
import {
  Logo,
  Hamburger,
  Search,
  User,
  Bag,
  X_dark,
} from "../../../assets/icons";
import "./MobileNavbar.scss";
import { Link } from "react-router-dom";
const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const toggleBag = () => {
    setIsBagOpen(!isBagOpen);
  };
  return (
    <>
      <div className="mobile-nav-bar">
        <div onClick={toggleMenu} className="right-navbar">
          {isMenuOpen ? (
            <X_dark className="hamburger-icon" />
          ) : (
            <Hamburger className="hamburger-icon" />
          )}
        </div>
        {!isBagOpen && !isMenuOpen && !isSearchOpen ? (
          <div className="left-navbar">
            <div>
              <Link to={"/"}>
                <Logo className="navbar-logo" />
              </Link>
            </div>
            <div className="icons-container">
              <Search className="icon" />
              <User className="icon" />
              <Bag className="icon" />
            </div>
          </div>
        ) : null}
        <div>{isMenuOpen && <MenuNav setMenu={toggleMenu} />}</div>
      </div>
    </>
  );
};

const MenuNav: React.FC<{ setMenu: () => void }> = ({ setMenu }) => {
  return (
    <div className="menu-nav">
      <div className="top-menu">
        <Link to="/restaurants">
          <p onClick={setMenu}>Restaurants</p>
        </Link>
        <Link to="/chef">
          <p onClick={setMenu}>Chef</p>
        </Link>
      </div>
      <div className="bottom-menu">
        <Link to="/contact">
          <p onClick={setMenu}>Contact Us</p>
        </Link>
        <Link to="/term">
          <p onClick={setMenu}>Term of use</p>
        </Link>
        <Link to="/policy">
          <p onClick={setMenu}> Privacy Policy</p>
        </Link>
      </div>
    </div>
  );
};

const SearchNav: React.FC = () => {
  return (
    <div className="search-nav">
      <Link to="/search">
        <Search className="icon" />
      </Link>
    </div>
  );
};

const BagNav: React.FC = () => {
  return (
    <>
      <div className="bag-nav">
        <div className="bag-container">
          <Bag width={"49px"} height={"49px"} />
          <div>
            <h2>Your bag is empty</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
