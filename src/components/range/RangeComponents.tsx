import React from "react";
import { ClickButton, DisplayStars } from "../../components";
import "./rangeComponents.scss";
import CheckButton from "../buttons/checkButton/CheckButton";
export const PriceComponent: React.FC = () => {
  return (
      <div>PriceComponent</div>
  );
};
export const DistanceComponent: React.FC = () => {
  return (
      <div>DistanceComponent</div>
  );
};
export const RatingComponent: React.FC = () => {
  return (
    <>
      <div className="range-container">
        <div className="rating-container">
          <p className="rating-title">Rating</p>
          <div className="check-star-range">
            <div> <CheckButton  checked={false} /></div>
            <div className="star-list"> <DisplayStars rate={1} /></div>
          </div>
          <div className="check-star-range">
            <div> <CheckButton checked={true} /></div>
            <div className="star-list"> <DisplayStars rate={2} /></div>
          </div>
          <div className="check-star-range">
            <div> <CheckButton checked={true} /></div>
            <div className="star-list"> <DisplayStars rate={3} /></div>
          </div>
          <div className="check-star-range">
            <div> <CheckButton checked={true} /></div>
            <div className="star-list"> <DisplayStars rate={4} /></div>
          </div>
          <div className="check-star-range">
            <div> <CheckButton checked={true} /></div>
            <div className="star-list"> <DisplayStars rate={5} /></div>
          </div>
          <ClickButton width="112px" height="30px">
            <div className="clear-btn">clear</div>
          </ClickButton>
        </div>
      </div>
    </>
  );
};
