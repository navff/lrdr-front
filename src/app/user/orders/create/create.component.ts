import { Router } from '@angular/router';
import { Order } from './../../../models/order.model';
import { OrderService } from './../../../shared/services/order.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './create.component.html',
  providers: [OrderService],
  styleUrls: ['./create.component.sass']
})
export class CreateComponent {
  order = new Order();
  date: Date;

  minDate = new Date();

  constructor(
    private orderService: OrderService,
    private router: Router,
  ) {}

  create() {
    this.order.Deadline = this.date.toISOString();
    this.orderService.create(this.order)
      .subscribe(res => this.router.navigate(['orders', res.Code]));
  }
}
