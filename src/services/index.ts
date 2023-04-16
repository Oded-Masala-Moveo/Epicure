import restData from "../data/restaurant.json";
import dishData from "../data/dish.json";
import chefData from "../data/chef.json";
import {
  Chef,
  ChefCategory,
  Dish,
  MealTime,
  Restaurant,
  RestaurantCategory,
} from "../models/index.model";

export const getRestaurants = (): Restaurant[] => {
  return restData;
};

export const getRestaurantById = (id: string): Restaurant | undefined => {
  const rest = restData.find((restaurant) => restaurant.id === id);
  if (!rest) return undefined;
  return rest;
};
export const getRestaurantByChefId = (id: string) => {
  return restData.filter((restaurant) => restaurant.chefId === id);
};
export const getDishes = (): Dish[] => {
  return dishData;
};
export const getDishesByRestId = (id: string) => {
  return dishData.filter((dish) => dish.restId == id);
};
export const getChefs = () => {
  return chefData;
};

export const filterRestaurants = (
  receivedRestaurants: Restaurant[],
  category: string
): Restaurant[] => {
  const restaurants = receivedRestaurants;
  switch (category) {
    case RestaurantCategory.NEW:
      return restaurants.filter((r) => r.new);

    case RestaurantCategory.POPULAR:
      return restaurants.filter((r) => r.rate >= 4);

    case RestaurantCategory.OPEN:
      return restaurants.filter((r) => r.open);

    default:
      return restaurants;
  }
};

export const filterDishes = (
  receivedDishes: Dish[],
  category: string
): Dish[] => {
  const dishes = receivedDishes;
  switch (category) {
    case MealTime.Breakfast:
      return dishes.filter((r) => r.mealTime == MealTime.Breakfast);

    case MealTime.Lunch:
      return dishes.filter((r) => r.mealTime == MealTime.Lunch);

    case MealTime.Dinner:
      return dishes.filter((r) => r.mealTime == MealTime.Dinner);

    default:
      return [];
  }
};
export const filterChefs = (
  receivedChefs: Chef[],
  category: string
): Chef[] => {
  const chefs = receivedChefs;
  switch (category) {
    case ChefCategory.new:
      return chefs.filter((r) => r.newChef);

    case ChefCategory.Viewed:
      return chefs.filter((r) => r.viewed > 200);

    default:
      return chefs;
  }
};
