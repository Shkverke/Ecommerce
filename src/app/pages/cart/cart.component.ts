import {Component, OnInit} from '@angular/core';
import {CartService, OrderService} from "../../core/services";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any = []
  cartSum: number = 0

  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCarts()
  }

  getCarts() {
    this.cartService.getCart()

      .pipe()
      .subscribe(res => {
        this.cartItems = res
        this.cartSum = this.cartItems.reduce((acc: any, item: { total: any; }) => acc + item.total, 0)
        console.log(this.cartItems);
      })
  }

  removeFromCart(product: any) {
    this.cartService.deleteFromCart(product.id)
      .pipe()
      .subscribe(() => {
        this.getCarts()
      })
  }

  checkout() {
    this.orderService.createOrder().subscribe( () => {
      this.router.navigate(['/order'])
    })
  }
}
