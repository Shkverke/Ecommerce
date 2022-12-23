import { Component, OnInit } from '@angular/core';
import {Product} from "../../../../core/interfaces";
import {ProductService} from "../../../../core/services";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.getAll()
  }


  getAll() {
    this.productService.getProducts({})
      .pipe()
      .subscribe(res => {
        this.products = res;
      })
  }

  deleteItem(id: string) {
    this.productService.deleteProduct(id)
      .pipe()
      .subscribe(() => {
        this.getAll()
      })
  }

}
