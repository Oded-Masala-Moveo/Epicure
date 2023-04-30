import { Schema, model } from 'mongoose';

export interface Chef {
  id: string;
  fName: string;
  lName: string;
  fullName: string;
  description: string;
  image: string;
  dateCreated: string;
  weekChef: boolean;
  newChef: boolean;
  viewed: number;
}

const chefSchema = new Schema<Chef>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: String,
    required: true,
  },
  weekChef: {
    type: Boolean,
    required: true,
  },
  newChef: {
    type: Boolean,
    required: true,
  },
  viewed: {
    type: Number,
    required: true,
  },
});

const ChefModel = model<Chef>('Chef', chefSchema);

export default ChefModel;
