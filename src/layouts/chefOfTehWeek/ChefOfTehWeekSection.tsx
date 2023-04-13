import { Arrow } from "../../assets/icons";
import { Card, Carousel } from "../../components";
import { getChefs, getDishes, getRestaurants } from "../../services";
import "./chefOfTehWeek.scss";
const ChefOfTehWeekSection: React.FC = () => {
  const restData = getRestaurants();
  const dishData = getDishes();
  const chefData = getChefs();
  const chefOfTheWeek = (chefId: number) => {
    return restData.filter((rest) => rest.chefId === chefId);
  };
  return (
    <section className="chef-container">
      {chefData &&
        chefData
          .filter((chef) => chef.weekChef === true)
          .map((chef, index) => (
            <div key={`${chef.id} ${index}`}>
              <div className="chef-detail">
                <div className="chef-title">
                  <h2>Chef of the week:</h2>
                </div>
                {/* <div className="chef-header">
                  <div className="chef-image">
                    <img src={chef.image} alt={chef.name} />
                    <div className="chef-name">
                      <h3>{chef.name}</h3>
                    </div>
                  </div>
                </div> */}
                <Card card={chef} />
                <div className="chef-description">
                  <p>{chef.description}</p>
                </div>
                <div className="chef-week-title">
                  <h2>Chef of the week:</h2>
                </div>
              </div>
              <div className="carousel">
                {<Carousel cards={chefOfTheWeek(chef.id)} weekChef={true} />}
              </div>
              <div className="link-to-restaurants">
                <h3>All restaurants</h3>
                <Arrow className="arrow-icon" />
              </div>
            </div>
          ))}
    </section>
  );
};

export default ChefOfTehWeekSection;
