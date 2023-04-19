import restData from "../data/restaurant.json";
import dishData from "../data/dish.json";
import chefData from "../data/chef.json";
import { Chef, Dish, Restaurant } from "../models";

export const getRestaurants = (): Restaurant[] => {
  return restData;
};

export const getRestaurantById = (id: string): Restaurant | undefined => {
  const rest = restData.find((restaurant) => restaurant.id === id);
  if (!rest) return undefined;
  return rest;
};
export const getRestaurantByChefId = (id: string): Restaurant[] => {
  return restData.filter((restaurant) => restaurant.chefId === id);
};
export const getDishes = (): Dish[] => {
  return dishData;
};
export const getDishesByRestId = (id: string): Dish[] => {
  return dishData.filter((dish) => dish.restId == id);
};
export const getChefs = (): Chef[] => {
  return chefData;
};
