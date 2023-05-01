import { Schema, model, Document } from "mongoose";

interface IDish extends Document {
  restId: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  side: string[];
  changesOptions: string[];
  category: Array<"Spicy" | "Vegetarian" | "Vegan">;
  mealTime: "Breakfast" | "Lunch" | "Dinner";
  subcategory?: string;
  createdAt: Date;
  updatedAt: Date;
}

const DishSchema: Schema = new Schema({
  restId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
  side: { type: [String], required: true },
  changesOptions: { type: [String], required: true },
  category: {
    type: [String],
    enum: ["Spicy", "Vegetarian", "Vegan"],
    validate: {
      validator: (value: string[]) => {
        return value.length <= 3;
      },
      message: "Category can have up to 3 values",
    },
    required: true,
  },
  mealTime: { type: String, enum: ["Breakfast", "Lunch", "Dinner"], required: true},
  subcategory: { type: String},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Dishes = model<IDish>("dishes", DishSchema);

export default Dishes;
