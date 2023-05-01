// import restData from "../data/restaurant.json";
// import dishData from "../data/dish.json";
// import chefData from "../data/chef.json";
import { Chef, Dish, Restaurant } from "../models";
import axios from "axios";
const BASE_URL = "http://localhost:8001/api/v1/";
export const fetchAllRestaurants = async () => {
  let res = await axios.get<Restaurant[]>(`${BASE_URL}restaurant`);
  let restaurants = res.data;
  return restaurants;
};

export const getRestaurantById = async (id: string) => {
 let res = await axios.get<Restaurant>(`${BASE_URL}restaurant/${id}`);
 let restaurant = res.data;
 return restaurant;
};

export const getRestaurantByChefId = async (id: string): Restaurant[] => {
  let res = await axios.get<Restaurant[]>(`${BASE_URL}restaurant/chef/${id || ""}`);
  let restaurants = res.data;
  return restaurants;
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
