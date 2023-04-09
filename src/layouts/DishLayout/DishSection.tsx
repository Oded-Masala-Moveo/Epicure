import { Arrow } from "../../assets/icons";
import { Carousel } from "../../components";
import { getChefs, getDishes, getRestaurants } from "../../services";
import "./DishSection.scss";
const DishSection: React.FC = () => {
  const restData = getRestaurants();
  const dishData = getDishes();
  const chefData = getChefs();
  return (
    <section className="dish-container">
      <div className="popular-container">
        <h2>Signature Dish Of:</h2>
      </div>
      <Carousel cards={dishData} />
      <div className="link-to-restaurants">
        <h3>All restaurants</h3>
        <Arrow className="arrow-icon" />
      </div>
    </section>
  );
};

export default DishSection;
