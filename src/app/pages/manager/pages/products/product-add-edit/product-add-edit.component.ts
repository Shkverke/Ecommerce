import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../../../core/services";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, of, switchMap} from "rxjs";
import {Category} from "../../../../../core/interfaces";
import {CategoryService} from "../../../../../core/services/category.service";

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
  })

  categories$: Observable<Category[]>  = this.categoryService.getAll()

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.productService.getProduct(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res,
          categoryId: res.category.id
        })
      }
    })
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return
    }

    if (this.form.value.id) {
      this.productService.updateProduct(this.form.value.id, this.form.value)
        .pipe()
        .subscribe(() => {
          this.router.navigate(['/manager/products'])
            .then(() => {
              this.form.reset()
            })
        })
    } else {
      this.productService.createProduct(this.form.value)
        .pipe()
        .subscribe(() => {
          this.router.navigate(['/manager/products'])
            .then(() => {
              this.form.reset()
            })
        })
    }
  }
}
