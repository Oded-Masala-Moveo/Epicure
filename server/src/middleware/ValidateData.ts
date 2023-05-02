import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { IRestaurant, IDish, Address, IChef } from "../models";
import { HttpErrorMessage, HttpStatusCode } from "../exceptions";

export const ValidateSchema = (schema: Joi.ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      console.log(error, "error with validation");
      return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY).json({ message:HttpErrorMessage.UNPROCESSABLE_ENTITY,error });
    }
  };
};
export const ValidateSearchInput = (schema: Joi.ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      console.log(error, "error with validation");
      return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY).json({ message:HttpErrorMessage.UNPROCESSABLE_ENTITY,error });
    }
  };
};
export const ValidateSchemas = (schemas: Joi.ObjectSchema[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      for (const obj of req.body) {
        const schema = schemas[req.body.indexOf(obj)];
        if (schema) {
          await schema.validateAsync(obj);
        }
      }
      next();
    } catch (error) {
      console.log(error, "error with validation");
      return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY).json({ message:HttpErrorMessage.UNPROCESSABLE_ENTITY,error });
    }
  };
};
export const Schemas = {
  chef: {
    create: Joi.object<IChef>({
      fName: Joi.string().required(),
      lName: Joi.string().required(),
      fullName: Joi.string().required(),
      image: Joi.string().required(),
      description: Joi.string().required(),
      weekChef: Joi.boolean().default(false),
      newChef: Joi.boolean().default(false),
      viewed :Joi.number().required(),
    }),
    update: Joi.object<IChef>({
      fName: Joi.string(),
      lName: Joi.string(),
      fullName: Joi.string(),
      image: Joi.string(),
      description: Joi.string(),
      weekChef: Joi.boolean(),
      newChef: Joi.boolean(),
      viewed :Joi.number()
    }),
  },
  restaurant: {
    create: Joi.object<IRestaurant>({
      name: Joi.string().required(),
      chef: Joi.string().required(),
      image: Joi.string().required(),
      image2: Joi.string(),
      chefId: Joi.string() .regex(/^[0-9a-fA-F]{24}$/) .required(),
      address: Joi.object<Address>({
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        zip: Joi.string(),
      }),
      phone: Joi.string(),
      email: Joi.string(),
      website: Joi.string(),
      new: Joi.boolean().default(false),
      open: Joi.boolean().default(false),
      higherPrice: Joi.number().required(),
      lowerPrice: Joi.number().required(),
      rate: Joi.number().required(),
    }),
    update: Joi.object<IRestaurant>({
      name: Joi.string(),
      chef: Joi.string(),
      image: Joi.string(),
      image2: Joi.string(),
      chefId: Joi.string().regex(/^[0-9a-fA-F]{24}$/) .required(),
      address: Joi.object<Address>({
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        zip: Joi.string(),
      }),
      phone: Joi.string(),
      email: Joi.string(),
      website: Joi.string(),
      new: Joi.boolean(),
      open: Joi.boolean(),
      higherPrice: Joi.number(),
      lowerPrice: Joi.number(),
      rate: Joi.number(),
    }).min(1),
  },
  dish: {
    create: Joi.object<IDish>({
      restId: Joi.string() .regex(/^[0-9a-fA-F]{24}$/) .required(),
      name: Joi.string().required(),
      description: Joi.string(),
      price: Joi.number().required(),
      quantity: Joi.number(),
      image: Joi.string().required(),
      side: Joi.array().items(Joi.string()),
      changesOptions: Joi.array().items(Joi.string()),
      category: Joi.array().items(
        Joi.string().valid("Spicy", "Vegetarian", "Vegan")
      ),
      mealTime: Joi.string().valid("Breakfast", "Lunch", "Dinner"),
      subcategory: Joi.string(),
    }),
    update: Joi.object<IDish>({
      restId: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
      name: Joi.string(),
      description: Joi.string(),
      price: Joi.number(),
      quantity: Joi.number(),
      image: Joi.string(),
      side: Joi.array().items(Joi.string()),
      changesOptions: Joi.array().items(Joi.string()),
      category: Joi.array().items(
        Joi.string().valid("Spicy", "Vegetarian", "Vegan")
      ),
      mealTime: Joi.string().valid("Breakfast", "Lunch", "Dinner"),
      subcategory: Joi.string(),
    }).min(1),
  },
};
