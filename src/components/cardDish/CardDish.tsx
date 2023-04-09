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
            card.category.map((cardCategory) => (
              <div className="card-category">
                {cardCategory == Category.Spicy && <SpicySmall />}
                {cardCategory == Category.Vegetarian && <VegetarianSmall />}
                {cardCategory == Category.Vegan && <VeganSmall />}
              </div>
            ))}
          <h3 className="price-container">
            <h3>
              <Shekel className="shekel-logo" />
            </h3>
            {card.price}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CardDish;
