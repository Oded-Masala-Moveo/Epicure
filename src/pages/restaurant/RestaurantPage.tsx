import React, { useEffect, useState } from "react";
import "./RestaurantPage.scss";
import { useParams } from "react-router-dom";
import { filterDishes, getRestaurantById } from "../../services";
import { Dish, MealTime, Restaurant } from "../../models/index.model";
import { Clock } from "../../assets/icons";
import { Card } from "../../components";

const RestaurantPage: React.FC = () => {
  const { restId } = useParams();
  const [displayDishes, setDisplayDishes] = useState<Dish[]>([]);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [dishCategory, setDishCategory] = useState<string>(MealTime.Breakfast);

  const handelClick = (category: string) => {
    setDishCategory(category);
    if (restId) setDisplayDishes(filterDishes(restId, category));
  };
  useEffect(() => {
    if (restId) {
      setDisplayDishes(filterDishes(restId, MealTime.Breakfast));
      setRestaurant(getRestaurantById(restId));
    }
  }, []);
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
            onClick={() => handelClick(MealTime.Breakfast)}
            className={
              dishCategory == MealTime.Breakfast ? "selected" : "category"
            }
          >
            <p>{MealTime.Breakfast}</p>
          </li>
          <li
            onClick={() => handelClick(MealTime.Lunch)}
            className={dishCategory == MealTime.Lunch ? "selected" : "category"}
          >
            <p>{MealTime.Lunch}</p>
          </li>
          <li
            onClick={() => handelClick(MealTime.Dinner)}
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
