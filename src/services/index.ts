import restData from "../data/restaurant.json";
import dishData from "../data/dish.json";
import chefData from "../data/chef.json";
import {
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

export const filterRestaurants = (category?: string): Restaurant[] => {
  switch (category) {
    case RestaurantCategory.NEW:
      return getRestaurants().filter((r) => r.new);

    case RestaurantCategory.POPULAR:
      return getRestaurants().filter((r) => r.rate >= 4);

    case RestaurantCategory.OPEN:
      return getRestaurants().filter((r) => r.open);

    default:
      return getRestaurants();
  }
};

export const filterDishes = (restId: string, category?: string): Dish[] => {
  switch (category) {
    case MealTime.Breakfast:
      return getDishesByRestId(restId).filter(
        (r) => r.mealTime == MealTime.Breakfast
      );

    case MealTime.Lunch:
      return getDishesByRestId(restId).filter(
        (r) => r.mealTime == MealTime.Lunch
      );

    case MealTime.Dinner:
      return getDishesByRestId(restId).filter(
        (r) => r.mealTime == MealTime.Dinner
      );

    default:
      return [];
  }
};
