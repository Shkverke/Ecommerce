import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Order} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService {

  getOrders(): Observable<Order[]> {
    return this.get('order')
  }

  createOrder(): Observable<any> {
    return this.post('order')
  }
}
