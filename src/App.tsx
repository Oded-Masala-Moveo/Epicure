import React from "react";
import "./main.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Navbar } from "./components";

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
