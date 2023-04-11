import React, { useState } from "react";
import { Logo, Search, User, Bag } from "../../../assets/icons";
import { Link } from "react-router-dom";
import "./DesktopNavbar.scss";

const DesktopNavbar: React.FC = () => {
  return (
    <div className="desktop-navbar-container">
      <div className="left-navbar">
        <div>
          <Link to="/" className="navbar-logo">
            <Logo className="logo" />
            <h1>EPICURE</h1>
          </Link>
        </div>
        <div>
          <Link to="/restaurants">
            <p>Restaurants</p>
          </Link>
        </div>
        <div>
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
        <div className="Bag-container">
          <Bag className="logo" />
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
