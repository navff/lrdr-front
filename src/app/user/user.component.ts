import { User } from './../models/user.model';
import { UserService } from './../shared/services/user.service';
import { Order } from './../models/order.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user.component.html',
  providers: [UserService],
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  logout() {
    // this.userService.logout().subscribe(() => window.location.reload());
    localStorage.removeItem('token');
    window.location.reload();
  }
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.userService.takeByToken().subscribe(user => this.user = user);
    }
  }
}
