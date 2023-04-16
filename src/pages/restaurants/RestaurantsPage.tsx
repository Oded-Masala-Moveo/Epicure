import React, { useEffect, useState } from "react";
import "./RestaurantsPage.scss";
import { getRestaurants } from "../../services";
import { Restaurant, RestaurantCategory } from "../../models/index.model";
import { Card } from "../../components";
import { Footer } from "../../layouts";
import { Link } from "react-router-dom";
import useWindowSize, { desktop, tablet } from "../../hooks/useWindowSize";
import { ArrowDown } from "../../assets/icons";
import { Dropdown } from "flowbite-react";
import DropdownButton from "../../components/DropdownButton/DropdownButton";
const RestaurantsPage: React.FC = () => {
  const { width } = useWindowSize();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    RestaurantCategory.ALL
  );
  const [displayRestaurants, setDisplayRestaurants] = useState<Restaurant[]>(
    []
  );
  const restaurants = () => {
    return getRestaurants();
  };
  const handelClickCategory = (category: string) => {
    filterRestaurants(category);
    setSelectedCategory(category);
  };
  const filterRestaurants = (category?: string): void => {
    switch (category) {
      case RestaurantCategory.NEW:
        setDisplayRestaurants(restaurants().filter((r) => r.new));
        break;
      case RestaurantCategory.POPULAR:
        setDisplayRestaurants(restaurants().filter((r) => r.rate >= 4));
        break;
      case RestaurantCategory.OPEN:
        setDisplayRestaurants(restaurants().filter((r) => r.open));
        break;
      default:
        setDisplayRestaurants(restaurants());
    }
  };
  useEffect(() => {
    filterRestaurants(RestaurantCategory.ALL);
  }, []);
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
            <Link to={`/restaurants:${restaurant.id}`}>
              <Card restPage={width < tablet} card={restaurant} />{" "}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default RestaurantsPage;
