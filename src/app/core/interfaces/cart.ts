import {Product} from "./product";

export interface CartPayload {
  productId: string;
  quantity: number;
}

export interface Cart {
  total: number;
  quantity: number;
  user?: any;
  item: Product;
  id: string;
}
