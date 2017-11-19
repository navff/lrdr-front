import { Order } from './../../models/order.model';
import { OrderService } from './../../shared/services/order.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  templateUrl: './orders.component.html',
  providers: [OrderService],
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  constructor(
    private orderService: OrderService
  ) { }
  onTabChange(event) {
    let params = [];
    event === 1 ? params.push({name: 'IsPaid', value: true}) :
    params.push({name: 'IsPaid', value: false});
    this.orderService.list(params).subscribe(data => this.orders = data.Content);
  }
  ngOnInit() {
    this.orderService.list().subscribe(data => this.orders = data.Content);
  }
}
