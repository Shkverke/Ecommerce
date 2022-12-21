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
      limit?: number
    }) : Observable<Product[]> {
      return this.get<Product[]>('product', params)
    }

    getProduct(id: number) {
      return this.get(`product/${id}`)
    }

    createProduct(payload: any) {
      return this.post('product', payload)
    }

    updateProduct(id: number, payload: any) {
      return this.put(`product/${id}`, payload)
    }

    deleteProduct(id: number) {
      return this.delete(`product/${id}`)
    }

}
