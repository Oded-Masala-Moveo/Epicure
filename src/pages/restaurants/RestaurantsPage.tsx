import React, { useEffect, useState } from "react";
import "./RestaurantsPage.scss";
import { filterRestaurants, getRestaurants } from "../../services";
import { Restaurant, RestaurantCategory } from "../../models";
import { Card } from "../../components";

import useWindowSize, { desktop, tablet } from "../../hooks/useWindowSize";
import { ArrowDown } from "../../assets/icons";
import DropdownButton from "../../components/DropdownButton/DropdownButton";
const RestaurantsPage: React.FC = () => {
  const { width } = useWindowSize();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    RestaurantCategory.ALL
  );
  const [displayRestaurants, setDisplayRestaurants] = useState<Restaurant[]>(
    []
  );
  const handelClickCategory = (category: string) =>
    setSelectedCategory(category);

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
          <li
            onClick={() => handelClickCategory(RestaurantCategory.ALL)}
            className={
              selectedCategory == RestaurantCategory.ALL
                ? "selected"
                : "category"
            }
          >
            <p>All</p>{" "}
          </li>
          <li
            onClick={() => handelClickCategory(RestaurantCategory.NEW)}
            className={
              selectedCategory == RestaurantCategory.NEW
                ? "selected"
                : "category"
            }
          >
            <p>New</p>
          </li>
          <li
            onClick={() => handelClickCategory(RestaurantCategory.POPULAR)}
            className={
              selectedCategory == RestaurantCategory.POPULAR
                ? "selected"
                : "category"
            }
          >
            <p>Most Popular</p>
          </li>
          <li
            onClick={() => handelClickCategory(RestaurantCategory.OPEN)}
            className={
              selectedCategory == RestaurantCategory.OPEN
                ? "selected"
                : "category"
            }
          >
            <p>Open Now</p>
          </li>
          <li className="map-view">
            <p>Map View</p>
          </li>
        </ul>
        <ul className="range-filter-restaurant">
          <li className="range-option">
            <p>Price Range</p>
            <div className="arrow-down">
              <ArrowDown />
            </div>
          </li>
          <li className="range-option">
            <p>Distance</p>
            <div className="arrow-down">
              <ArrowDown />
            </div>
          </li>
          <li className="range-option">
            <p>Rating</p>
            <div className="arrow-down">
              <ArrowDown />
            </div>
          </li>
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
