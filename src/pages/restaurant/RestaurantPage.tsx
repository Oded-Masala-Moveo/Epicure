import React, { useEffect, useState } from "react";
import "./RestaurantPage.scss";
import { useParams } from "react-router-dom";
import {
  filterDishes,
  getDishesByRestId,
  getRestaurantById,
} from "../../services";
import { Dish, MealTime, Restaurant } from "../../models/index.model";
import { Clock } from "../../assets/icons";
import { Card } from "../../components";
import useWindowSize, { desktop } from "../../hooks/useWindowSize";

const RestaurantPage: React.FC = () => {
  const { restId } = useParams();
  const [displayDishes, setDisplayDishes] = useState<Dish[]>([]);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [dishCategory, setDishCategory] = useState<string>(MealTime.Breakfast);

  useEffect(() => {
    const setRestaurantData = () => {
      if (restId) {
        setRestaurant(getRestaurantById(restId));
        const dish = getDishesByRestId(restId);
        setDisplayDishes(filterDishes(dish, dishCategory));
      }
    };
    setRestaurantData();
  }, [dishCategory]);
  return (
    <>
      <div className="restaurant-image-container">
        <img
          src={restaurant?.image}
          alt={restaurant?.name}
          className="restaurant-image"
        />
      </div>
      <section className="restaurant-section">
        <div className="restaurant-detail">
          <h3 className="restaurant-name">{restaurant?.name}</h3>
          <p className="restaurant-chef">{restaurant?.chef} </p>
        </div>
        <div className="open-container">
          <div className="clock-icon">
            <Clock />
          </div>
          {restaurant?.open ? <p>Open now</p> : <p>Close</p>}
        </div>
        <ul className="dish-category">
          <li
            onClick={() => setDishCategory(MealTime.Breakfast)}
            className={
              dishCategory == MealTime.Breakfast ? "selected" : "category"
            }
          >
            <p>{MealTime.Breakfast}</p>
          </li>
          <li
            onClick={() => setDishCategory(MealTime.Lunch)}
            className={dishCategory == MealTime.Lunch ? "selected" : "category"}
          >
            <p>{MealTime.Lunch}</p>
          </li>
          <li
            onClick={() => setDishCategory(MealTime.Dinner)}
            className={
              dishCategory == MealTime.Dinner ? "selected" : "category"
            }
          >
            <p>{MealTime.Dinner}</p>
          </li>
        </ul>
        <div className="dish-list">
          {displayDishes.map((dish) => (
            <Card dishPage={true} card={dish} />
          ))}
        </div>
      </section>
    </>
  );
};

export default RestaurantPage;
