import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Cart} from "../interfaces/cart";
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
            this.cartCount.next(cart.reduce((acc: any, item: { quantity: number; }) => acc + item.quantity, 0));
          }
        )
      )
  }

  addToCart(payload: {
    productId: string;
    quantity: number;
  }) {
    return this.post<Cart>('cart', payload)
      .pipe(
        tap(() => {
          this.cartCount.next(this.cartCount.value + 1);
          console.log(this.cartCount.value);
        }),

  )
  }


  deleteFromCart(id: number) {
    return this.delete(`cart/${id}`)
  }
}
