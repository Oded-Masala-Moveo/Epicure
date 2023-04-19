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
  const [rating, seRrating] = useState<number[]>([]);
  const handelClickCategory = (category: string) => () => setSelectedCategory(category);
  const handelClickRange = (rangeType: string) => () => rangeType == currentRange ? setCurrentRange("") : setCurrentRange(rangeType);
  const dropdownOpenOrClose = (rangeName:string) => (rangeState:string)=> rangeName == rangeState;
  let restaurants:Restaurant[] = getRestaurants();
  const setRestaurantsData = () => {
    if(rating[0]) setDisplayRestaurants(filterRestaurants(restaurants, selectedCategory, rating));
    if (restaurants && !rating[0]) setDisplayRestaurants(filterRestaurants(restaurants, selectedCategory));
  };

  useEffect(() => {
    setRestaurantsData();
  }, [selectedCategory,rating]);
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
          <Dropdown key={RestaurantRange.PRICE} onClick={handelClickRange(RestaurantRange.PRICE)} isOpen={dropdownOpenOrClose(RestaurantRange.PRICE)(currentRange)} dropdownLook={<LiElement title={RestaurantRange.PRICE} />} children={<PriceComponent />} />
          <Dropdown key={RestaurantRange.DISTANCE} onClick={handelClickRange(RestaurantRange.DISTANCE)} isOpen={dropdownOpenOrClose(RestaurantRange.DISTANCE)(currentRange)} dropdownLook={<LiElement title={RestaurantRange.DISTANCE} />} children={<DistanceComponent   />} />
          <Dropdown key={RestaurantRange.RATING} onClick={handelClickRange(RestaurantRange.RATING)} isOpen={dropdownOpenOrClose(RestaurantRange.RATING)(currentRange)} dropdownLook={<LiElement title={RestaurantRange.RATING} />} children={<RatingComponent rateArr={rating} changeRate={seRrating}/>} />
        </ul>
        <div className="restaurants-list" onClick={handelClickRange("")} >
          {displayRestaurants.map((restaurant) => (
            <Card key={restaurant.chef + restaurant.image} restPage={width < tablet} card={restaurant} />
          ))}
        </div>
      </section>
    </>
  );
};

export default RestaurantsPage;
