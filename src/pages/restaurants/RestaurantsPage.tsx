import React, { useEffect, useState } from "react";
import "./RestaurantsPage.scss";
import { filterRestaurants, getRestaurants } from "../../services";
import { Restaurant, RestaurantCategory,RestaurantRange } from "../../models";
import { Card, DistanceComponent, PriceComponent, RatingComponent } from "../../components";
import useWindowSize, { desktop, tablet } from "../../hooks/useWindowSize";
import { ArrowDown } from "../../assets/icons";
import Dropdown from "../../components/DropdownButton/Dropdown";
import LiElement from "../../components/li/LiElement";
const RestaurantsPage: React.FC = () => {
  const { width } = useWindowSize();
  const [selectedCategory, setSelectedCategory] = useState<string>( RestaurantCategory.ALL );
  const [displayRestaurants, setDisplayRestaurants] = useState<Restaurant[]>( [] );
  const [currentRange, setCurrentRange] = useState<string>("");
  const handelClickCategory = (category: string) => () => setSelectedCategory(category);
  const handelClickRange = (rangeType: string) => () => rangeType == currentRange ? setCurrentRange("") : setCurrentRange(rangeType);
  const dropdownOpenOrClose = (rangeName:string) => (rangeState:string)=> rangeName == rangeState;
  useEffect(() => {
    const setRestaurantsData = () => {
      const Restaurants = getRestaurants();
      setDisplayRestaurants(filterRestaurants(Restaurants, selectedCategory));
    };
    setRestaurantsData();
  }, [selectedCategory]);
  return (
    <>
      <section className="restaurants-section">
        <h2 className="restaurants-title">Restaurants</h2>
        <ul className="filter-restaurant">
          <li onClick={handelClickCategory(RestaurantCategory.ALL)} className={ selectedCategory == RestaurantCategory.ALL ? "selected" : "category" } >
            <p>All</p>
          </li>
          <li onClick={ handelClickCategory(RestaurantCategory.NEW)} className={ selectedCategory == RestaurantCategory.NEW ? "selected" : "category" } >
            <p>New</p>
          </li>
          <li onClick={ handelClickCategory(RestaurantCategory.POPULAR)} className={ selectedCategory == RestaurantCategory.POPULAR ? "selected" : "category" } >
            <p>Most Popular</p>
          </li>
          <li onClick={handelClickCategory(RestaurantCategory.OPEN)} className={ selectedCategory == RestaurantCategory.OPEN ? "selected" : "category" } >
            <p>Open Now</p>
          </li>
          <li className="map-view"> <p>Map View</p> </li>
        </ul>
        <ul  className="range-filter-restaurant">
          <div onClick={handelClickRange(RestaurantRange.PRICE)}>
            <Dropdown isOpen={dropdownOpenOrClose(RestaurantRange.PRICE)(currentRange)} dropdownLook={<LiElement title={RestaurantRange.PRICE} />} children={<PriceComponent/>} />
          </div>
          <div onClick={handelClickRange(RestaurantRange.DISTANCE)}>
          <Dropdown isOpen={dropdownOpenOrClose(RestaurantRange.DISTANCE)(currentRange)} dropdownLook={<LiElement title={RestaurantRange.DISTANCE} />} children={<DistanceComponent />} />
          </div>
          <div onClick={handelClickRange(RestaurantRange.RATING)}>
            <Dropdown isOpen={dropdownOpenOrClose(RestaurantRange.RATING)(currentRange)} dropdownLook={<LiElement title={RestaurantRange.RATING} />} children={<RatingComponent/>} />
          </div>
        </ul>
        <div className="restaurants-list">
          {displayRestaurants.map((restaurant) => (
            <Card restPage={width < tablet} card={restaurant} />
          ))}
        </div>
      </section>
    </>
  );
};

export default RestaurantsPage;
