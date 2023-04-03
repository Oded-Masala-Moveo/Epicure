import React from "react";
import "./main.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
