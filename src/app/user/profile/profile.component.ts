import { User } from './../../models/user.model';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './profile.component.html',
  providers: [UserService],
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  responding: boolean;
  constructor(private userService: UserService) {
  }

  update() {
    this.responding = true;
    this.userService.update(this.user.Email, this.user)
      .subscribe(() => this.responding = false);
  }
  ngOnInit() {
    this.userService.takeByToken().subscribe(user => this.user = user);
  }
}
