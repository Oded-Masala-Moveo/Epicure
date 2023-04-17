import React from "react";
import { Link } from "react-router-dom";
import { Bag, Search } from "../../assets/icons";
import "./bagShop.scss";
import useWindowSize, { desktop, tablet } from "../../hooks/useWindowSize";

const BagShop: React.FC = () => {
  const { width } = useWindowSize();

  if (width < tablet) return <MobileNavBag />;
  return (
    <>
      <div>id</div>
    </>
  );
};

export const MobileNavBag: React.FC = () => {
  return (
    <div className="bag-nav">
      <div className="bag-container">
        <Bag width={"49px"} height={"49px"} />
        <div>
          <h2>Your bag is empty</h2>
        </div>
      </div>
    </div>
  );
};
export default BagShop;
