import React from "react";
import { Link } from "react-router-dom";
import { ActiveBag, Bag, Search } from "../../assets/icons";
import "./bagShop.scss";
import useWindowSize, { desktop } from "../../hooks/useWindowSize";
import Button from "../button/Button";

const BagShop: React.FC = () => {
  const { width } = useWindowSize();

  if (width < desktop) return <MobileNavBag />;
  return (
    <>
      <MobileNavBag />;
    </>
  );
};

export const MobileNavBag: React.FC = () => {
  return (
    <div className="mobile-bag-nav">
      <div className="bag-container">
        <div className="bag-icon">
          <Bag />
        </div>
        <h2>Your bag is empty</h2>
        <Button>add to bag</Button>
      </div>
    </div>
  );
};

export default BagShop;
