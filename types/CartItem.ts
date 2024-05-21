import { Category } from "./Category";

export interface CartItem {
  id: string;
  name: string;
  temporaryName: string;
  image: string;
  fullPrice: string;
  price: string;
  weight: string;
  quantity: number;
  category: Category
};