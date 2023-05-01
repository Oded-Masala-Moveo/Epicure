import { Schema, model } from "mongoose";

export interface Address {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
}

const addressSchema = new Schema<Address>({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
});

export interface Restaurant {
  name: string;
  chef: string;
  image: string;
  image2?: string;
  chefId: Schema.Types.ObjectId | string;
  address?: Address;
  phone?: string;
  email?: string;
  website?: string;
  createdAt: Date;
  new: boolean;
  open: boolean;
  higherPrice: number;
  lowerPrice: number;
  rate: number;
}

const restaurantSchema = new Schema<Restaurant>({
  name: { type: String, required: true },
  chef: { type: String, required: true },
  image: { type: String, required: true },
  image2: { type: String },
  chefId: { type: Schema.Types.ObjectId, ref: "chefs" },
  address: addressSchema,
  phone: { type: String },
  email: { type: String },
  website: { type: String },
  createdAt: { type: Date, default: Date.now },
  new: { type: Boolean, default: false },
  open: { type: Boolean, default: false },
  higherPrice: { type: Number, required: true },
  lowerPrice: { type: Number, required: true },
  rate: { type: Number, required: true },
});

const RestaurantModel = model<Restaurant>("restaurants", restaurantSchema);
export default RestaurantModel;
