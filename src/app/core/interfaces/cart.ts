import {Product} from "./product";
import {User} from "./user";

export interface CartPayload {
  productId: string;
  quantity: number;
}

export interface Cart {
  total: number;
  quantity: number;
  user?: User;
  item: Product;
  id: string;
}

export interface GetCart {
  id: number;
  total: number;
  quantity: number;
  item: Product[];
  user: User;
}
