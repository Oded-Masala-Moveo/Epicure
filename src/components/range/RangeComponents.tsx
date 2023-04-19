import React ,{useEffect, useState}from "react";
import { ClickButton, DisplayStars } from "../../components";
import "./rangeComponents.scss";
import CheckButton from "../buttons/checkButton/CheckButton";
export const PriceComponent: React.FC = () => {
  return <div>PriceComponent</div>;
};

export const DistanceComponent: React.FC = () => {
  return (
    <div className="range-container">
      <div>pac</div>
    </div>
  );
};
interface  RatingProps {
  changeRate:(rateArr:number[])=> void;
  rateArr:number[];

}
export const RatingComponent: React.FC<RatingProps> = ({rateArr,changeRate}) => {
  const addRate  =   (chosenRate:number) => {    
    if (!rateArr.includes(chosenRate)) {
      changeRate([...rateArr, chosenRate]);
    }
  }
  const removeRate =  (chosenRate:number) => {
    const index = rateArr.indexOf(chosenRate);
    if (index!= -1) changeRate(rateArr.filter((item, i) => i!= index));
  }
  return (
    <>
      <div className="range-container">
        <div className="rating-container">
          <p className="rating-title">Rating</p>
          <div className="check-star-range">
            <div onClick={()=> rateArr.includes(1) ? removeRate(1) : addRate(1)}>
              <CheckButton checked={rateArr.includes(1)} />
            </div>
            <div className="star-list">
              <DisplayStars rate={1} />
            </div>
          </div>
          <div className="check-star-range">
            <div onClick={()=> rateArr.includes(2) ? removeRate(2) : addRate(2)}>
              <CheckButton checked={rateArr.includes(2)} />
            </div>
            <div className="star-list">
              <DisplayStars rate={2} />
            </div>
          </div>
          <div className="check-star-range">
            <div onClick={()=> rateArr.includes(3) ? removeRate(3) : addRate(3)}>
              <CheckButton checked={rateArr.includes(3)} />
            </div>
            <div className="star-list">
              <DisplayStars rate={3} />
            </div>
          </div>
          <div className="check-star-range">
            <div onClick={()=> rateArr.includes(4) ? removeRate(4) : addRate(4)}>
              <CheckButton checked={rateArr.includes(4)} />
            </div>
            <div className="star-list">
              <DisplayStars rate={4} />
            </div>
          </div>
          <div className="check-star-range">
            <div onClick={()=> rateArr.includes(5) ? removeRate(5) : addRate(5)}>
              <CheckButton checked={rateArr.includes(5)} />
            </div>
            <div className="star-list">
              <DisplayStars rate={5} />
            </div>
          </div >
          <ClickButton width="112px" height="30px">
            <div onClick={()=> changeRate([])} className="clear-btn">clear</div>
          </ClickButton>
        </div>
      </div>
    </>
  );
};
