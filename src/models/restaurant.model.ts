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
