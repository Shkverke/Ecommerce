import {Component, Input} from '@angular/core';
import {Product} from "../../core/interfaces";
import {AuthService, CartService} from "../../core/services";
import {Router} from "@angular/router";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product: Product = {} as Product;


  constructor(private authService: AuthService,
              private cartService: CartService,
              private router: Router) {

  }


  addToCart()
   {
    if (!this.authService.token) {
      this.router.navigate(['/auth/login']);
    }
    this.cartService.addToCart({
      productId: this.product.id,
      quantity: 1
    }).subscribe()
  }
}
