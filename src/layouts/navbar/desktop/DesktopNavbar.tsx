import React, { useEffect, useState } from "react";
import { Logo, Search, User, Bag, ActiveBag } from "../../../assets/icons";
import { Link, useLocation, useParams } from "react-router-dom";
import "./DesktopNavbar.scss";
import {
  selectBagDishes,
  selectBagTotalQuantity,
  selectCloseNow,
  useAppSelector,
} from "../../../store";
import { BagShop } from "../../../components";

const DesktopNavbar: React.FC = () => {
  const location = useLocation();
  const closeNow = useAppSelector(selectCloseNow);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const BagDishes = useAppSelector(selectBagDishes);
  const TotalQuantity = useAppSelector(selectBagTotalQuantity);
  const toggleBag = (): void => {
    setIsBagOpen(!isBagOpen);
  };

  useEffect(() => {
    let closeAllIcons = () => {
      setIsMenuOpen(false);
      setIsSearchOpen(false);
      setIsBagOpen(false);
    };
    closeAllIcons();
  }, [closeNow]);
  useEffect(() => {}, [location.pathname]);
  return (
    <>
      <nav>
        <div className="desktop-navbar-container">
          <div className="left-navbar">
            <div>
              <Link to="/" className="navbar-logo">
                <Logo className="logo" />
                <h2>EPICURE</h2>
              </Link>
            </div>
            <div
              className={
                location.pathname.startsWith("/restaurants") ? "selected" : ""
              }
            >
              <Link to="/restaurants">
                <p>Restaurants</p>
              </Link>
            </div>
            <div
              className={
                location.pathname.startsWith("/chef") ? "selected" : ""
              }
            >
              <Link to="/chef">
                <p>Chefs</p>
              </Link>
            </div>
          </div>
          <div className="right-navbar">
            <div className="Search-container">
              <Search className="logo" />
            </div>
            <div className="User-container">
              <User className="logo" />
            </div>
            <div className="Bag-container" onClick={toggleBag}>
              {BagDishes.length ? (
                <ActiveBag className="logo-bag" quantity={TotalQuantity} />
              ) : (
                <Bag className="logo" />
              )}
            </div>
            {isBagOpen && <BagShop />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
