import React, { useState } from "react";
import { Hero } from "../../components";
import { Logo, Hamburger, Search, User, Bag, X_dark } from "../../assets/icons";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
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
      <div className="nav-bar">
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
      </div>
      {isMenuOpen && <MenuNav setMenu={toggleMenu} />}
      {/* {isSearchOpen && <SearchNav setSearch={toggleSearch} />}
      {isBagOpen && !isMenuOpen && <BagNav setBag={toggleBag} />} */}
    </>
  );
};

const MenuNav: React.FC<{ setMenu: () => void }> = ({ setMenu }) => {
  return (
    <div className="menu-nav">
      <div className="top-menu">
        <Link to="/restaurants">
          <h2 onClick={setMenu}>Restaurants</h2>
        </Link>
        <Link to="/chef">
          <h2 onClick={setMenu}>Chef</h2>
        </Link>
      </div>
      <div className="bottom-menu">
        <Link to="/contact">
          <h2 onClick={setMenu}>Contact Us</h2>
        </Link>
        <Link to="/term">
          <h2 onClick={setMenu}>Term of use</h2>
        </Link>
        <Link to="/policy">
          <h2 onClick={setMenu}> Privacy Policy</h2>
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
export default Navbar;
