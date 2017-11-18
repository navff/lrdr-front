import { OrderService } from './../../shared/services/order.service';
import { User } from './../../models/user.model';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './orders.component.html',
  providers: [UserService, OrderService],
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  constructor(
    private userService: UserService,
    private orderService: OrderService
  ) { }

  do() {
    this.orderService.list().subscribe(data => console.log(data));
  }
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.userService.takeByToken().subscribe(data => console.log(data));
    }
  }
}
