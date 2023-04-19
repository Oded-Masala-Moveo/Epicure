import React from "react";
import { Link } from "react-router-dom";
import { ActiveBag, Bag, Search } from "../../assets/icons";
import "./bagShop.scss";
import useWindowSize, { desktop } from "../../hooks/useWindowSize";
import {ClickButton} from "../../components"

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
        <ClickButton>add to bag</ClickButton>
      </div>
    </div>
  );
};

export default BagShop;
