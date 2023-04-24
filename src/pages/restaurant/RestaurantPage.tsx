import React, { useEffect, useState } from "react";
import "./RestaurantPage.scss";
import { useParams } from "react-router-dom";
import {
  filterDishes,
  getDishesByRestId,
  getRestaurantById,
} from "../../services";
import { Dish, DishMealTime, Restaurant } from "../../models";
import { Clock } from "../../assets/icons";
import { Card } from "../../components";
import {
  closeNavbar,
  useAppSelector,
  setBagRestaurant,
  useAppDispatch,
  selectBag,
  clearBagRestaurant,
  selectCloseNow,
} from "../../store";
const RestaurantPage: React.FC = () => {
  const closeNav = useAppSelector(selectCloseNow);
  const { restId } = useParams();
  const dispatch = useAppDispatch();
  const [displayDishes, setDisplayDishes] = useState<Dish[]>([]);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [dishCategory, setDishCategory] = useState<string>(
    DishMealTime.Breakfast
  );
  useEffect(() => {
    const setRestaurantData = () => {
      if (restId) {
        setRestaurant(getRestaurantById(restId));
        const dish = getDishesByRestId(restId);
        setDisplayDishes(filterDishes(dish, dishCategory));
        closeNavbar();
      }
    };
    setRestaurantData();

  }, [dishCategory]);


  useEffect(() => {
    if (restaurant) dispatch(setBagRestaurant(restaurant));
    return () => {
      if (restaurant) dispatch(clearBagRestaurant());
    };
  }, [restaurant]);
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
            onClick={() => setDishCategory(DishMealTime.Breakfast)}
            className={
              dishCategory == DishMealTime.Breakfast ? "selected" : "category"
            }
          >
            <p>{DishMealTime.Breakfast}</p>
          </li>
          <li
            onClick={() => setDishCategory(DishMealTime.Lunch)}
            className={
              dishCategory == DishMealTime.Lunch ? "selected" : "category"
            }
          >
            <p>{DishMealTime.Lunch}</p>
          </li>
          <li
            onClick={() => setDishCategory(DishMealTime.Dinner)}
            className={
              dishCategory == DishMealTime.Dinner ? "selected" : "category"
            }
          >
            <p>{DishMealTime.Dinner}</p>
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
