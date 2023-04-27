import { Arrow } from "../../assets/icons";
import { Card, Carousel } from "../../components";
import { getChefs, getRestaurantByChefId } from "../../services";
import "./chefOfTehWeek.scss";
const ChefOfTehWeekSection: React.FC = () => {
  const chefData = getChefs();
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
                <div className="chef-box">
                  <Card week={true} card={chef} />
                  <div className="chef-description">
                    <p>{chef.description}</p>
                  </div>
                </div>
                <div className="chef-week-title">
                  <h2 className="mobile-title">Chef of the week:</h2>
                  <h1 className="desktop-title">{`${chef.fName}'s Restaurants`}</h1>
                </div>
              </div>
              <div className="desktop-cards">
                {getRestaurantByChefId(chef.id).map((rest, index) => (
                  <Card
                    week={true}
                    key={`${chef.fullName}${index}`}
                    card={rest}
                  />
                ))}
              </div>
              <div className="carousel">
                {
                  <Carousel
                    cards={getRestaurantByChefId(chef.id)}
                    weekChef={true}
                  />
                }
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