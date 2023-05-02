import { ErrorHandler, HttpStatusCode, HttpErrorMessage } from "../exceptions";
import { IUser, Users } from "../models";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
export default class UserHandler {
  static async getAllUsers() {
    try {
      return await Users.find({});
    } catch (error) {
      console.error(`Error in getAllUsers method: ${error}`);
      throw error;
    }
  }

  static async getUserById(id: string) {
    try {
      return await Users.findById(id);
    } catch (error) {
      console.error(`Error in getUserById method: ${error}`);
      throw error;
    }
  }

  static async getUserByEmail(email: string) {
    try {
      return await Users.findOne({ email: email });
    } catch (error) {
      console.error(`Error in getUserByEmail method: ${error}`);
      throw error;
    }
  }

  static async updateUser(id: string, obj: any) {
    try {
      return await Users.findByIdAndUpdate(id, obj);
    } catch (error) {
      console.error(`Error in updateUser method: ${error}`);
      throw error;
    }
  }

  static async deleteUser(id: string) {
    try {
      return await Users.findByIdAndRemove(id);
    } catch (error) {
      console.error(`Error in deleteUser method: ${error}`);
      throw error;
    }
  }

  static async registerUser(obj: IUser) {
    try {
      const existingUser = await Users.findOne({ email: obj.email });

      if (existingUser) {
        throw ErrorHandler.createHttpError(
          HttpStatusCode.NOT_ACCEPTABLE,
          HttpErrorMessage.NOT_ACCEPTABLE
        );
      }

      const hashedPassword = await bcrypt.hash(obj.password, 10);

      const newUser = new Users({
        userName: obj.userName,
        email: obj.email,
        password: hashedPassword,
        avatar: obj.avatar,
        isAdmin: obj.isAdmin,
        createdAt: obj.createdAt,
        updatedAt: obj.updatedAt,
      });

      const savedUser = await newUser.save();

      const token = jwt.sign(
        { userId: savedUser._id },
        process.env.JWT_SECRET,
        {
          expiresIn: '1d',
        }
      );

      return { user: savedUser, token };
    } catch (error) {
      console.error(`Error in registerUser method: ${error}`);
      throw error;
    }
  }

  static async loginUser(email: string, password: string) {
    try {
      const user = await Users.findOne({ email: email });
      if (!user) {
        throw ErrorHandler.createHttpError(
          HttpStatusCode.UNAUTHORIZED,
          HttpErrorMessage.UNAUTHORIZED
        );
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        throw ErrorHandler.createHttpError(
          HttpStatusCode.UNAUTHORIZED,
          HttpErrorMessage.UNAUTHORIZED
        );
      }

      // create a token for the logged in user
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });

      return { user, token };
    } catch (error) {
      console.error(`Error in loginUser method: ${error}`);
      throw error;
    }
  }
}
