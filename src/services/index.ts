import restData from "../data/restaurant.json";
import dishData from "../data/dish.json";
import chefData from "../data/chef.json";

export const getRestaurants = () => {
  return restData;
};

export const getDishes = () => {
  return dishData;
};

export const getChefs = () => {
  return chefData;
};
