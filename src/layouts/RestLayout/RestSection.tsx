import { useEffect } from "react";
import { Arrow } from "../../assets/icons";
import { Card, Carousel } from "../../components";
import { getChefs, getDishes, getRestaurants } from "../../services";
import "./RestSection.scss";
import useWindowSize, { desktop } from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";
const RestSection: React.FC = () => {
  const { width, height } = useWindowSize();
  const restData = getRestaurants();
  const dishData = getDishes();
  const chefData = getChefs();
  const chefOfTheWeek = (chefId: number) => {
    return restData.filter((rest) => rest.chefId === chefId);
  };
  useEffect(() => {}, []);
  return (
    <section className="restaurants-container">
      <div className="popular-container">
        <h2>popular restaurant in epicure:</h2>
      </div>
      {width && width < desktop && <Carousel cards={restData} />}
      {width && width >= desktop && (
        <div className="desktop-card">
          {restData.slice(0, 3).map((rest, index) => (
            <Card key={index} week={false} card={rest} />
          ))}
        </div>
      )}
      <Link to={"/restaurants"}>
        <div className="link-to-restaurants">
          <h3>All restaurants</h3>
          <Arrow className="arrow-icon" />
        </div>
      </Link>
    </section>
  );
};

export default RestSection;
