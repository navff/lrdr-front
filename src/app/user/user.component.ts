import { UserService } from './../shared/services/user.service';
import { Order } from './../models/order.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  constructor() { }
  toggleAdmin() {
    localStorage.getItem('token') ?
      localStorage.removeItem('token') :
      localStorage.setItem('token', 'ABRAKADABRA');
    window.location.reload();
  }
  ngOnInit() {
  }
}
