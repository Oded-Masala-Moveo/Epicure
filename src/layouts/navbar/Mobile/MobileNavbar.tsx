import React, { useEffect, useState } from "react";
import {
  Logo,
  Hamburger,
  Search,
  User,
  Bag,
  X_dark,
  ActiveBag,
} from "../../../assets/icons";
import "./MobileNavbar.scss";
import { Link, useLocation } from "react-router-dom";
import { BagShop } from "../../../components/";
import { InputSearch } from "../../../components";
import { selectCloseNow, useAppSelector,selectBagDishes ,selectBagTotalQuantity} from "../../../store";
const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const location = useLocation();
  const closeNow = useAppSelector(selectCloseNow);
  const BagDishes = useAppSelector(selectBagDishes);
  const TotalQuantity = useAppSelector(selectBagTotalQuantity);



  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
    setIsBagOpen(false);
  };
  const toggleSearch = (): void => {
    setIsSearchOpen(!isSearchOpen);
    setIsBagOpen(false);
  };
  const toggleBag = (): void => {
    setIsBagOpen(!isBagOpen);
  };
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsBagOpen(false);
    console.log(closeNow);
    
  }, [location.pathname,closeNow]);
  return (
    <>
      <div
        className={
          isSearchOpen ? "mobile-nav-bar search-nav-clicked" : "mobile-nav-bar"
        }
      >
        <div className="right-navbar">
          {isMenuOpen || isSearchOpen ? (
            <div onClick={isMenuOpen ? toggleMenu : toggleSearch}>
              <X_dark className="hamburger-icon" />
            </div>
          ) : (
            <div onClick={toggleMenu}>
              <Hamburger className="hamburger-icon" />
            </div>
          )}
        </div>
        {!isMenuOpen && !isSearchOpen ? (
          <div className={"left-navbar"}>
            <div>
              <Link to={"/"}>
                <Logo className="navbar-logo" />
              </Link>
            </div>
            <div className="icons-container">
              <div onClick={toggleSearch}>
                <Search className="icon" />
              </div>
              <div>
                <User className="icon" />
              </div>
              <div onClick={toggleBag}>
                {BagDishes.length ? <ActiveBag className="icon-bag" quantity={TotalQuantity}/>: <Bag className="icon" />}
              </div>
            </div>
          </div>
        ) : (
          <>
            {isSearchOpen && (
              <div className="search-title">
                <p>search</p>
              </div>
            )}
          </>
        )}
        {isMenuOpen && <MenuNav setMenu={toggleMenu} />}
        {isBagOpen && <BagShop />}
        {isSearchOpen && <MobileSearchNav />}
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

const MobileSearchNav: React.FC = () => {
  return (
    <div className="search-nav">
      <div className="search-container">
        <InputSearch mobileNav={true} />
      </div>
    </div>
  );
};
export default MobileNavbar;
