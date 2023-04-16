import React from "react";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home/HomePage";
import { Footer, Navbar } from "./layouts";
import { RestaurantsPage, HomePage, RestaurantPage } from "./pages";

const App: React.FC = () => {
  return (
    <body>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="restaurants" element={<RestaurantsPage />} />
          <Route path="restaurants/:id" element={<RestaurantPage />} />
        </Routes>
      </div>
      <Footer />
    </body>
  );
};

export default App;
