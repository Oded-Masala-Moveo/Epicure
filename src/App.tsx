import React from "react";
import "./main.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { Navbar } from "./layouts";

const App: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
