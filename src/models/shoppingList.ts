import { IItem } from "./items";

export interface IShoppingList {
  status: string,
  updatedAt: string,
  createdAt: string,
  _id: string,
  name: string,
  user: string,
  items: {
    category: string;
    items: IItem[]
  }[]
}