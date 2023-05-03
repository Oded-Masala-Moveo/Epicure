import { chefsSchema, restaurantSchema, dishSchema, userSchema } from "../ValidationSchemas";

export const ValidationSchemas = {
  chef: chefsSchema,
  restaurant: restaurantSchema,
  dish: dishSchema,
  user: userSchema,
};
