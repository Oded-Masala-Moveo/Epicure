import React from "react";
import "./card.scss";
import { CardItem } from "../../models/index.model";

import CardDish from "../cardDish/CardDish";
export const Card: React.FC<{ card: CardItem; week: boolean }> = ({
  card,
  week,
}) => {
  if ("name" in card && "chef" in card)
    return (
      <>
        <div className="card-restaurant-container">
          <div className="card-image-container">
            <img src={card.image} alt={`${card.name} ${card.id}`} />
          </div>
          <div className="card-text-container">
            <h3>{card.name}</h3>
            {week ? null : <p>{card.chef}</p>}
          </div>
        </div>
      </>
    );
  if ("name" in card && "newChef" in card)
    return (
      <>
        <div className="card-chef-container">
          <div className="card-image-container">
            <img src={card.image} alt={card.name} />
          </div>
          <div className="card-text-container">
            <h2>{card.name}</h2>
            {card.description && <p>{card.description}</p>}
          </div>
        </div>
      </>
    );
  return <CardDish card={card} />;
};

export default Card;
