export interface CarouselProps {
  card: string;
}
export type CardsList = Restaurant[] | Dish[] | Chef[];
export type CardItem = Dish | Restaurant | Chef;

export interface Chef {
  id: string;
  fName: string;
  lName: string;
  fullName: string;
  description: string;
  image: string;
  dateCreated: string;
  weekChef: boolean;
  newChef: boolean;
  viewed: number;
}
export enum ChefCategory {
  All = "All",
  new = "New",
  Viewed = "Most Viewed",
}
export interface Dish {
  id: string;
  restId: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  side: string[];
  changesOptions: string[];
  category?: string[];
  mealTime: string;
  subcategory: string;
  createdAt: string;
  updatedAt: string;
}

export enum Category {
  Spicy = "Spicy",
  Vegetarian = "Vegetarian",
  Vegan = "Vegan",
}
export enum MealTime {
  Breakfast = "Breakfast",
  Lunch = "Lunch",
  Dinner = "Dinner",
}

export interface Restaurant {
  id: string;
  name: string;
  chef: string;
  image: string;
  image2?: string;
  chefId: string;
  address: Address;
  phone: string;
  email: string;
  website: string;
  date: string;
  new: boolean;
  open: boolean;
  rate: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export enum RestaurantCategory {
  ALL = "All",
  NEW = "New",
  POPULAR = "Most Popular",
  OPEN = "Open Now",
}

export enum RestaurantRange {
  PRICE = "Price",
  DISTANCE = "Distance",
  RATING = "Rating",
}
