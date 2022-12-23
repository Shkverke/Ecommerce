import {User} from "./user";

export interface Order {
  id: string;
  items: any;
  subTotal: number;
  pending: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: any;
  user: User;
}
