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
import "./homePage.scss";
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <RestSection />
      <DishSection />
      <SignatureSection />
      <ChefOfTehWeekSection />
      <AboutSection />
      <Footer />
    </>
  );
};

export default HomePage;
