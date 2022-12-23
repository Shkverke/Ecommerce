import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../core/services";
import {Observable} from "rxjs";
import {Order} from "../../core/interfaces";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  orders$: Observable<Order[]> = this.orderService.getOrders()



  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
  }



}

