import React from "react";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home/HomePage";
import { Footer, Navbar } from "./layouts";
import { RestaurantsPage, HomePage } from "./pages";

const App: React.FC = () => {
  return (
    <body>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/restaurants" element={<RestaurantsPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </body>
  );
};

export default App;
