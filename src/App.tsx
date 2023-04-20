import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./layouts";
import { RestaurantsPage, HomePage, RestaurantPage, ChefPage } from "./pages";
import "./app.scss";

const App: React.FC = () => {
  return (
    <div className="body-container">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurants/:restId" element={<RestaurantPage />} />
          <Route path="/chef" element={<ChefPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
