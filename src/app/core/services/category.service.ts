import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BaseService} from "./base.service";
import {Category} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  getAll(): Observable<Category[]> {
    return this.get<Category[]>('category');
  }

  getOne(id: number): Observable<Category> {
    return this.get<Category>(`category/${id}`);
  }

  create(category: Category): Observable<Category> {
    return this.post<Category>('category', category);
  }

  update(id: number, category: Category): Observable<Category> {
    return this.put<Category>(`category/${id}`, category);
  }

  deleteItem(id: number): Observable<Category> {
    return this.delete<Category>(`category/${id}`);
  }
}
