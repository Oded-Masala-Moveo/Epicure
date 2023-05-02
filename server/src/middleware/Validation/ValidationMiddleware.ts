import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { IRestaurant, IDish, Address, IChef } from "../../models";
import { HttpErrorMessage, HttpStatusCode } from "../../exceptions";

export const ValidateSchema = (schema: Joi.ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      console.log(error, "error with validation");
      return res
        .status(HttpStatusCode.UNPROCESSABLE_ENTITY)
        .json({ message: HttpErrorMessage.UNPROCESSABLE_ENTITY, error });
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
      return res
        .status(HttpStatusCode.UNPROCESSABLE_ENTITY)
        .json({ message: HttpErrorMessage.UNPROCESSABLE_ENTITY, error });
    }
  };
};

