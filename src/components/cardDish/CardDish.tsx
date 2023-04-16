import {
  Shekel,
  SpicySmall,
  VeganSmall,
  VegetarianSmall,
} from "../../assets/icons";
import { Dish, Category } from "../../models/index.model";
import "./cardDish.scss";
const CardDish: React.FC<{
  card: Dish;
  hidePrice?: boolean;
  dishPage?: boolean;
}> = ({ card, hidePrice, dishPage }) => {
  return (
    <>
      <div
        className={
          !dishPage
            ? "card-dish-container"
            : "card-dish-container dish-page-card"
        }
      >
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
            {!dishPage &&
              card.category &&
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
              {!dishPage && <div className="price-line"></div>}
              {dishPage && <div className="price-card-line-1"></div>}
              <Shekel className="shekel-logo" />
              <p>{card.price}</p>
              {dishPage && <div className="price-card-line-2"></div>}
              {!dishPage && <div className="price-line"></div>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardDish;
