import { Request, Response, NextFunction } from "express";
import { ChefHandler } from "../handlers";
import { ErrorHandler, HttpErrorMessage, HttpStatusCode } from "../exceptions";

export default class ChefController {
  static async getAllChefs(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ChefHandler.getAllChefs();
      res.status(200).send(data);
    } catch (err) {
      next(
        ErrorHandler.createHttpError(
          HttpStatusCode.INTERNAL_SERVER_ERROR,
          HttpErrorMessage.INTERNAL_SERVER_ERROR,
          true
        )
      );
    }
  }

  static async getChef(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ChefHandler.getChef(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      next(
        ErrorHandler.createHttpError(
          HttpStatusCode.INTERNAL_SERVER_ERROR,
          HttpErrorMessage.INTERNAL_SERVER_ERROR,
          true
        )
      );
    }
  }

  static async updateChef(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ChefHandler.updateChef(req.params.id, req.body);
      res.status(200).send(data);
    } catch (err) {
      next(
        ErrorHandler.createHttpError(
          HttpStatusCode.INTERNAL_SERVER_ERROR,
          HttpErrorMessage.INTERNAL_SERVER_ERROR,
          true
        )
      );
    }
  }

  static async addChef(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ChefHandler.addChef(req.body);
      res.status(200).send(data);
    } catch (err) {
      next(
        ErrorHandler.createHttpError(
          HttpStatusCode.INTERNAL_SERVER_ERROR,
          HttpErrorMessage.INTERNAL_SERVER_ERROR,
          true
        )
      );
    }
  }

  static async deleteChef(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ChefHandler.deleteChef(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      next(
        ErrorHandler.createHttpError(
          HttpStatusCode.INTERNAL_SERVER_ERROR,
          HttpErrorMessage.INTERNAL_SERVER_ERROR,
          true
        )
      );
    }
  }
}
