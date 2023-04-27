import { Shekel } from "../../../assets/icons";
import { BagDish } from "../../../store";

import "./bagDishCard.scss";

export const BagDishCard: React.FC<{ item: BagDish }> = ({ item }) => {
  return (
    <>
      <div className="bag-dish-card-container">
        <div className="bag-dish-card-image">
          <img src={item.dish.image} alt={item.dish.name} />
        </div>
        <div className="bag-dish-card-detail">
          <div className="title">
            <p>{`${item.quantity}x`}</p>
            <h3>{item.dish.name}</h3>
          </div>
          <div className="side-change">
            <p>
              {item.sides.map((c) => c)}
              {item.sides.length > 0 && item.changes.length > 0 && (
                <span>|</span>
              )}
              {item.changes.map((c) => c)}
            </p>
          </div>
        </div>
        <div className="item-total-price">
          <div className="icon">
            <Shekel stroke="black" />
          </div>
          {item.quantity > 0 && <p>{item.dish.price * item.quantity}</p>}
        </div>
      </div>
    </>
  );
};
