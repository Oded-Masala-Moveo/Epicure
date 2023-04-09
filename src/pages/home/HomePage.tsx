import React from "react";
import { Header } from "../../layouts";
import { Hero, Carousel, Card } from "../../components";
import { Arrow, SpicyBig, VeganBig, VegetarianBig } from "../../assets/icons";
import "./homePage.scss";
import { getRestaurants, getDishes, getChefs } from "../../services";
const HomePage: React.FC = () => {
  const restData = getRestaurants();
  const dishData = getDishes();
  const chefData = getChefs();
  const chefOfTheWeek = (chefId: number) => {
    return restData.filter((rest) => rest.chefId === chefId);
  };
  return (
    <>
      <div>
        <Hero />
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

        <section>
          <div className="signature-container">
            <h2>Signature Dish Of:</h2>
            <div className="signature-icon">
              <SpicyBig className="Spicy-icon" />
              <p>Spicy</p>
            </div>
            <div className="signature-icon">
              <VegetarianBig className="Vegetarian-icon" />
              <p>Vegetarian</p>
            </div>
            <div className="signature-icon">
              <VeganBig className="Vegan-icon" />
              <p>Vegan</p>
            </div>
          </div>
        </section>

        <section className="chef-container">
          <h2>Chef of the week:</h2>
          {chefData &&
            chefData
              .filter((chef) => chef.weekChef === true)
              .map((chef) => (
                <>
                  <div className="chef-header">
                    <div className="chef-image">
                      <img src={chef.image} alt={chef.name} />
                      <div className="chef-name">
                        <h1>Yossi Shitrit</h1>
                      </div>
                    </div>
                  </div>

                  <div className="chef-description">
                    <p>{chef.description}</p>
                  </div>
                  <div>
                    <p>Chef of the week:</p>
                    {
                      <Carousel
                        cards={chefOfTheWeek(chef.id)}
                        weekChef={true}
                      />
                    }
                  </div>
                </>
              ))}
        </section>
      </div>
    </>
  );
};

export default HomePage;
