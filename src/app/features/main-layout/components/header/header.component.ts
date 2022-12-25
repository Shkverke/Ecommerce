import {Component} from '@angular/core';
import {AuthService, CartService} from "../../../../core/services";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService,
              private cartService: CartService) {
  }

  cartCount$: Observable<number> = this.cartService.cartCount$;
  User: any = localStorage.getItem('user');
  UserInfo = JSON.parse(this.User);

  get isAuth() {
    return this.authService.token;
  }

  get user() {
    return this.authService.user;

  }


  signOut() {
    this.authService.signOut();
  }
}
