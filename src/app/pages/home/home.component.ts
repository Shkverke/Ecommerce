import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductService} from "../../core/services";
import {Category, Product} from "../../core/interfaces";
import {Observable, Subject, takeUntil} from "rxjs";
import {CategoryService} from "../../core/services/category.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: Product[] = []
  sub$ = new Subject()

  categories$: Observable<Category[]>  = this.categoryService.getAll()


  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
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

