import { Request, Response, NextFunction } from "express";
import { UserHandler } from "../handlers";
import { HttpErrorMessage, HttpStatusCode, ErrorHandler } from "../exceptions";
import { IUser } from "../models";

export default class UserController {
  static async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await UserHandler.getAllUsers();
      res.status(HttpStatusCode.OK).send(data);
    } catch (err) {
      next(err);
    }
  }
  static async getUserByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.params.email;
      const user = await UserHandler.getUserByEmail(email);
      if (!user) {
        throw ErrorHandler.createHttpError(
          HttpStatusCode.NOT_FOUND,
          HttpErrorMessage.NOT_FOUND
        );
      }
      res.status(HttpStatusCode.OK).send(user);
    } catch (err) {
      next(err);
    }
  }
  static async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const user = await UserHandler.getUserById(id);
      if (!user) {
        throw ErrorHandler.createHttpError(
          HttpStatusCode.NOT_FOUND,
          HttpErrorMessage.NOT_FOUND
        );
      }
      res.status(HttpStatusCode.OK).send(user);
    } catch (err) {
      next(err);
    }
  }
  static async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await UserHandler.updateUser(req.params.id, req.body);
      if (!data) {
        throw ErrorHandler.createHttpError(
          HttpStatusCode.NOT_FOUND,
          HttpErrorMessage.NOT_FOUND
        );
      }
      res.status(HttpStatusCode.OK).send({
        res_message: HttpErrorMessage.OK,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await UserHandler.deleteUser(req.params.id);
      if (!data) {
        throw ErrorHandler.createHttpError(
          HttpStatusCode.NOT_FOUND,
          HttpErrorMessage.NOT_FOUND
        );
      }
      res.status(HttpStatusCode.OK).send({
        res_message: HttpErrorMessage.OK,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { token, user } = await UserHandler.registerUser(req.body as IUser);
  
      // store user data in session
      req.session.user = user;
  
      res
        .status(HttpStatusCode.CREATED)
        .header("Authorization", `Bearer ${token}`)
        .send({
          res_message: HttpErrorMessage.CREATED,
          user,
        });
    } catch (err) {
      next(err);
    }
  }
  static async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const { token, user } = await UserHandler.loginUser(email, password);
  
      // store user data in session
      req.session.user = user;
  
      res
        .status(HttpStatusCode.OK)
        .header("Authorization", `Bearer ${token}`)
        .send({
          res_message: HttpErrorMessage.OK,
          user,
        });
    } catch (err) {
      next(err);
    }
  }
  static async logoutUser(req: Request, res: Response, next: NextFunction) {
    try {
      req.session.destroy(); // destroy user session
      res.header("Authorization", ""); // clear Authorization header
      res.status(HttpStatusCode.OK).send({
        res_message: HttpErrorMessage.OK,
      });
    } catch (err) {
      next(err);
    }
  }
}
