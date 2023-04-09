export interface CarouselProps {
  card: string;
}
export type CardsList = Restaurant[] | Dish[] | Chef[];
export type CardItem = Dish | Restaurant | Chef;

export interface Chef {
  id: number;
  name: string;
  description: string;
  image: string;
  dateCreated: string;
  weekChef: boolean;
  newChef: boolean;
  viewed: string;
}
export interface Dish {
  id: number;
  restId: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  side: Array<string>;
  changesOptions: Array<string>;
  category?: Category[];
  mealTime: MealTime[];
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
  id: number;
  name: string;
  chef: string;
  image: string;
  image2?: string;
  chefId: number;
  address: Address;
  phone: string;
  email: string;
  website: string;
  date: string;
  open: boolean;
  rate: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}
