import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./layouts";
import { RestaurantsPage, HomePage, RestaurantPage, ChefPage, CheckOut } from "./pages";

import "./app.scss";
import { selectBag, useAppSelector } from "./store";

const App: React.FC = () => {
  const cart = useAppSelector(selectBag)
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
          <Route path="/checkout" element={< CheckOut />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
