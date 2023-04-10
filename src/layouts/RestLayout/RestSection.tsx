import { Arrow } from "../../assets/icons";
import { Carousel } from "../../components";
import { getChefs, getDishes, getRestaurants } from "../../services";
import "./RestSection.scss";
const RestSection: React.FC = () => {
  const restData = getRestaurants();
  const dishData = getDishes();
  const chefData = getChefs();
  const chefOfTheWeek = (chefId: number) => {
    return restData.filter((rest) => rest.chefId === chefId);
  };
  return (
    <section className="restaurants-container">
      <div className="popular-container">
        <h2>popular restaurant in epicure:</h2>
      </div>
      <Carousel cards={restData} />
      <div className="link-to-restaurants">
        <h3>All restaurants</h3>
        <Arrow className="arrow-icon" />
      </div>
    </section>
  );
};

export default RestSection;
