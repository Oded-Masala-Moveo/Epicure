import { Arrow } from "../../assets/icons";
import { Card, Carousel } from "../../components";
import useWindowSize, { desktop } from "../../hooks/useWindowSize";
import { getChefs, getDishes, getRestaurants } from "../../services";
import "./DishSection.scss";
const DishSection: React.FC = () => {
  const { width, height } = useWindowSize();
  const restData = getRestaurants();
  const dishData = getDishes();
  const chefData = getChefs();
  return (
    <section className="dish-container">
      <div className="popular-container">
        <h2>Signature Dish Of:</h2>
      </div>
      {width && width < desktop && <Carousel cards={dishData} />}
      {width && width >= desktop && (
        <div className="deskyop-card">
          {dishData.slice(0, 3).map((dish) => (
            <Card card={dish} />
          ))}
        </div>
      )}
      <div className="link-to-restaurants">
        <h3>All restaurants</h3>
        <Arrow className="arrow-icon" />
      </div>
    </section>
  );
};

export default DishSection;
