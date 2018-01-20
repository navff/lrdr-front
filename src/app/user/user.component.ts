import { User } from './../models/user.model';
import { UserService } from './../shared/services/user.service';
import { Order } from './../models/order.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user.component.html',
  providers: [UserService],
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user: User;

  hasToken: boolean = !!localStorage.getItem('token');

  constructor(private userService: UserService,
              private router: Router) { }

  logout() {
    // this.userService.logout().subscribe(() => window.location.reload());
    localStorage.removeItem('token');
    window.location.reload();
  }
  ngOnInit() {
    if (this.hasToken) {
      this.userService.takeByToken().subscribe(user => this.user = user);
    }

    if (location.pathname === '/') {
      this.hasToken ?
      this.router.navigate(['orders']) :
      this.router.navigate(['']);
    }
  }
}
