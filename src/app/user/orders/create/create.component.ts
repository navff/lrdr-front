import { Router } from '@angular/router';
import { Order } from './../../../models/order.model';
import { OrderService } from './../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './create.component.html',
  providers: [OrderService],
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  order = new Order();

  constructor(
    private orderService: OrderService,
    private router: Router,
  ) {
  }

  create() {
    this.order.Deadline = '2018-08-17';
    this.orderService.create(this.order)
      .subscribe((res) => this.router.navigate(['order', res.Code]));
  }
  ngOnInit() { }
}
