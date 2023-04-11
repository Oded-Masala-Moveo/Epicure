import {
  Shekel,
  SpicySmall,
  VeganSmall,
  VegetarianSmall,
} from "../../assets/icons";
import { Dish, Category } from "../../models/index.model";
import "./cardDish.scss";
const CardDish: React.FC<{ card: Dish }> = ({ card }) => {
  return (
    <>
      <div className="card-dish-container">
        <div className="card-image-container">
          <img src={card.image} alt={card.name} />
        </div>
        <div className="card-text-container">
          <div className="card-description">
            <h3>{card.name}</h3>
            {card.description && <p>{card.description}</p>}
          </div>
          {card.category &&
            card.category.map((cardCategory, index) => (
              <div key={index} className="card-category">
                {cardCategory == Category.Spicy && <SpicySmall />}
                {cardCategory == Category.Vegetarian && <VegetarianSmall />}
                {cardCategory == Category.Vegan && <VeganSmall />}
              </div>
            ))}
          <div className="price-container">
            <h3>
              <Shekel className="shekel-logo" />
            </h3>
            {card.price}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDish;
