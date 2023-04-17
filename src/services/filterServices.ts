import {
  Chef,
  ChefCategory,
  Dish,
  DishMealTime,
  Restaurant,
  RestaurantCategory,
} from "../models";

export const filterRestaurants = (
  receivedRestaurants: Restaurant[],
  category: string
): Restaurant[] => {
  const restaurants = [...receivedRestaurants];
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
  const dishes = [...receivedDishes];
  switch (category) {
    case DishMealTime.Breakfast:
      return dishes.filter((r) => r.mealTime == DishMealTime.Breakfast);

    case DishMealTime.Lunch:
      return dishes.filter((r) => r.mealTime == DishMealTime.Lunch);

    case DishMealTime.Dinner:
      return dishes.filter((r) => r.mealTime == DishMealTime.Dinner);

    default:
      return [];
  }
};

export const filterChefs = (
  receivedChefs: Chef[],
  category: string
): Chef[] => {
  const chefs = [...receivedChefs];
  switch (category) {
    case ChefCategory.new:
      return chefs.filter((r) => r.newChef);

    case ChefCategory.Viewed:
      return chefs.filter((r) => r.viewed > 200);

    default:
      return chefs;
  }
};
