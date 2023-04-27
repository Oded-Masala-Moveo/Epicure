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
export enum ChefCategory {
  All = "All",
  new = "New",
  Viewed = "Most Viewed",
}
