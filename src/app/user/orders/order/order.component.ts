import { OrderService } from './../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    let code = '';
    if (code) {
      this.orderService.take(code);
    }
  }
}
