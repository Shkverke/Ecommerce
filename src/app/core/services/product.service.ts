import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Product} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService{

    getProducts(params: {
      categoryId?: number,
      search?: string,
      limit?: number,
      similar?: string
    }) : Observable<Product[]> {
      return this.get<Product[]>('product', params)
    }

    getProduct(id: string): Observable<Product> {
      return this.get<Product>(`product/${id}`)
    }

    createProduct(payload: Product): Observable<Product> {
      return this.post<Product>('product', payload)
    }

    updateProduct(id: number, payload: Product): Observable<Product> {
      return this.put<Product>(`product/${id}`, payload)
    }

    deleteProduct(id: string): Observable<Product> {
      return this.delete<Product>(`product/${id}`)
    }

}
