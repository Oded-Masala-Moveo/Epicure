import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./layouts";
import { RestaurantsPage, HomePage, RestaurantPage, ChefPage } from "./pages";

import "./app.scss";
import { selectCart, useAppSelector } from "./store";

const App: React.FC = () => {
  const cart = useAppSelector(selectCart)
  useEffect(()=>{
console.log(cart);

  },[cart])
  return (
    <div className="html-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurants/:restId" element={<RestaurantPage />} />
          <Route path="/chef" element={<ChefPage />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
