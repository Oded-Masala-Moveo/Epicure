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
import { closeAllNavbar, useAppDispatch } from "../../store";
const HomePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const sendCloseNavbar = () => () => dispatch(closeAllNavbar(false));
  return (
    <>
      <div onClick={sendCloseNavbar()}>
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
