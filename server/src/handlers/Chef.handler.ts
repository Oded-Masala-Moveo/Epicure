import { Chefs } from "../models";
import { Chef } from "../models/ChefsSchema";

export default class ChefHandler {
  static async getAllChefs() {
    try {
      return await Chefs.find({});
    } catch (error) {
      console.error(`Error in getAllChefs method: ${error}`);
      throw error;
    }
  }

  static async getChef(id: string) {
    try {
      return await Chefs.findById(id);
    } catch (error) {
      console.error(`Error in getChef method: ${error}`);
      throw error;
    }
  }

  static async updateChef(id: string, obj: any) {
    try {
      return await Chefs.findByIdAndUpdate(id, obj);
    } catch (error) {
      console.error(`Error in updateChef method: ${error}`);
      throw error;
    }
  }

  static async deleteChef(id: string) {
    try {
      return await Chefs.findByIdAndRemove(id);
    } catch (error) {
      console.error(`Error in deleteChef method: ${error}`);
      throw error;
    }
  }
  static async addManyChefs(chefs: Chef[]) {
    try {
      const chefInstances = chefs.map(
        (chef) =>
          new Chefs({
            fName: chef.fName,
            lName: chef.lName,
            fullName: chef.fullName,
            description: chef.description,
            image: chef.image,
            dateCreated: chef.dateCreated,
            weekChef: chef.weekChef,
            newChef: chef.newChef,
            viewed: chef.viewed,
          })
      );

      return await Chefs.insertMany(chefInstances);
    } catch (error) {
      console.error(`Error in addManyChefs method: ${error}`);
      throw error;
    }
  }

  static async addChef(obj: Chef) {
    try {
      const newChef = new Chefs({
        fName: obj.fName,
        lName: obj.lName,
        fullName: obj.fullName,
        description: obj.description,
        image: obj.image,
        dateCreated: obj.dateCreated,
        weekChef: obj.weekChef,
        newChef: obj.newChef,
        viewed: obj.viewed,
      });
      return await newChef.save();
    } catch (error) {
      console.error(`Error in addChef method: ${error}`);
      throw error;
    }
  }
}
