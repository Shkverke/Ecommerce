import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Cart, CartPayload} from "../interfaces/cart";
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService {

  cartCount = new BehaviorSubject(0);

  cartCount$ = this.cartCount.asObservable();

  getCart() {
    return this.get('cart')
      .pipe(
        tap((cart: any) => {
            this.cartCount.next(cart.length);
          }
        )
      )
  }

  addToCart(payload: CartPayload) {
    return this.post<Cart>('cart', payload)
      .pipe(
        tap(() => {
          this.cartCount.next(this.cartCount.value + payload.quantity);
        })
      )
  }


  deleteFromCart(id: number) {
    return this.delete(`cart/${id}`)
  }
}
