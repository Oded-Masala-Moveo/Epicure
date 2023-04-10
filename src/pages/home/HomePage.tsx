import React from "react";
import {
  ChefOfTehWeekSection,
  DishSection,
  RestSection,
  SignatureSection,
} from "../../layouts";
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
        <RestSection />
        <DishSection />
        <SignatureSection />
        <ChefOfTehWeekSection />
      </div>
    </>
  );
};

export default HomePage;
