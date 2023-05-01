import { Chef, Dish, Restaurant } from "../models";
import axios from "axios";
const BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_PRODUCTION_SERVER_API_URL
  : import.meta.env.VITE_LOCAL_SERVER_API_URL;
export const fetchAllRestaurants = async () => {
  let res = await axios.get<Restaurant[]>(`${BASE_URL}restaurant`);
  return res.data;
};

export const fetchRestaurantById = async (id: string) => {
  let res = await axios.get<Restaurant>(`${BASE_URL}restaurant/${id}`);
  return res.data;
};

export const fetchRestaurantByChefId = async (id: string) => {
  let res = await axios.get<Restaurant[]>(
    `${BASE_URL}restaurant/chef_restaurant/${id}`
  );

  return res.data;
};
export const fetchDishes = async () => {
  let res = await axios.get<Dish[]>(`${BASE_URL}dish`);

  return res.data;
};
export const fetchDishesByRestId = async (id: string) => {
  let res = await axios.get<Dish[]>(`${BASE_URL}dish/restaurant_dishes/${id}`);
  return res.data;
};
export const getChefs = async () => {
  let res = await axios.get<Chef[]>(`${BASE_URL}chef`);
  return res.data;
};
