import restData from "../data/restaurant.json";
import dishData from "../data/dish.json";
import chefData from "../data/chef.json";

export const getRestaurants = () => {
  return restData;
};

export const getRestaurantById = (id: number) => {
  return restData.find((restaurant) => restaurant.chefId === id);
};
export const getRestaurantByChefId = (id: number) => {
  return restData.filter((restaurant) => restaurant.chefId === id);
};
export const getDishes = () => {
  return dishData;
};
export const getDishesById = (id: number) => {
  return dishData.find((dish) => dish.restId === id);
};
export const getChefs = () => {
  return chefData;
};
