import React from "react";
import {
  AboutSection,
  ChefOfTehWeekSection,
  DishSection,
  Footer,
  RestSection,
  SignatureSection,
} from "../../layouts";
import { Hero } from "../../components";
const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <Hero />
        <RestSection />
        <DishSection />
        <SignatureSection />
        <ChefOfTehWeekSection />
        <AboutSection />
      </div>
    </>
  );
};

export default HomePage;
