import {
  Shekel,
  SpicySmall,
  VeganSmall,
  VegetarianSmall,
} from "../../assets/icons";
import { Dish, Category } from "../../models/index.model";
import "./cardDish.scss";
const CardDish: React.FC<{ card: Dish; hidePrice?: boolean }> = ({
  card,
  hidePrice,
}) => {
  return (
    <>
      <div className="card-dish-container">
        <div className="card-image-container">
          <img src={card.image} alt={card.name} />
        </div>
        <div className="card-text-container">
          <div className="card-text">
            <div className="card-title">
              <h3>{card.name}</h3>
            </div>
            <div className="card-description">
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
          </div>
          {!hidePrice && (
            <div className="price-container">
              <div className="price-line"></div>
              <Shekel className="shekel-logo" />
              <p>{card.price}</p>
              <div className="price-line"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardDish;
