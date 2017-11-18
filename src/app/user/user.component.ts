import { Order } from './../models/order.model';
import { OrderService } from './../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user.component.html',
  providers: [OrderService],
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    // this.orderService.create(new Order(1, 'test', Date.now, 2, Date.now, false)).subscribe(data => console.log(data));
  }
}
