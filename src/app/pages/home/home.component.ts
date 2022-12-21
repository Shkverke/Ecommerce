import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductService} from "../../core/services";
import {Product} from "../../core/interfaces";
import {Subject, takeUntil} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: Product[] = []
  sub$ = new Subject()


  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts({})
      .pipe(takeUntil(this.sub$))
      .subscribe((products: Product[]) => {
        this.products = products
      })
  }

  ngOnDestroy() {
    this.sub$.next(null)
    this.sub$.complete()
  }
}

