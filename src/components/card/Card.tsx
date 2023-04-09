import React from "react";
import "./card.scss";
import { CardItem } from "../../models/index.model";
import {
  VegetarianSmall,
  SpicySmall,
  VeganSmall,
  Shekel,
} from "../../assets/icons";
import { Category } from "../../models/index.model";
export const Card: React.FC<{ card: CardItem; week: boolean }> = ({
  card,
  week,
}) => {
  if (week && "name" in card && "chef" in card)
    return (
      <>
        <div className="card-restaurant-container">
          <div className="card-image-container">
            <img src={card.image} alt={`${card.name} ${card.id}`} />
          </div>
          <div className="card-text-container">
            <h2>{card.name}</h2>
          </div>
        </div>
      </>
    );
  if ("name" in card && "chef" in card)
    return (
      <>
        <div className="card-restaurant-container">
          <div className="card-image-container">
            <img src={card.image} alt={`${card.name} ${card.id}`} />
          </div>
          <div className="card-text-container">
            <h2>{card.name}</h2>
            <p>{card.chef}</p>
          </div>
        </div>
      </>
    );
  if ("name" in card && "newChef" in card)
    return (
      <>
        {/* <div className="card-chef-container">
          <div className="card-image-container">
            <img src={card.image} alt={card.name} />
          </div>
          <div className="card-text-container">
            <h2>{card.name}</h2>
            {card.description && <p>{card.description}</p>}
          </div>
        </div> */}
      </>
    );
  return (
    <>
      <div className="card-dish-container">
        <div className="card-image-container">
          <img src={card.image} alt={card.name} />
        </div>
        <div className="card-text-container">
          <div className="card-description">
            <h2>{card.name}</h2>
            {card.description && <p>{card.description}</p>}
          </div>
          {card.category &&
            card.category.map((cardCategory) => (
              <div className="card-category">
                {cardCategory == Category.Spicy && <SpicySmall />}
                {cardCategory == Category.Vegetarian && <VegetarianSmall />}
                {cardCategory == Category.Vegan && <VeganSmall />}
              </div>
            ))}
          <p className="price-container">
            <span>
              <Shekel className="shekel-logo" />
            </span>
            {card.price}
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
