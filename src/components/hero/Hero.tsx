import React from "react";
import "./hero.scss";
import { Search } from "../../assets/icons";
const Hero: React.FC = () => {
  return (
    <>
      <div className="hero-container">
        <div className="search-container">
          <div className="Hero-title">
            <h1>Epicure works with the top chef restaurants in Tel Aviv</h1>
          </div>
          <InputSearch />
        </div>
      </div>
    </>
  );
};
export const InputSearch: React.FC = () => {
  return (
    <>
      <div className="input-container">
        <Search className="search-button" />
        <input
          placeholder="Search for restaurant cuisine, chef"
          type="text"
        ></input>
      </div>
    </>
  );
};
export default Hero;
