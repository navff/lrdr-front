import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FileService } from '../../shared/services/file.service';

@Component({
  templateUrl: './profile.component.html',
  providers: [UserService, FileService],
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  responding: boolean;
  constructor(private userService: UserService,
              private fileService: FileService,
              private router: Router) {}

  ngOnInit() {
    this.userService.takeByToken().subscribe(user => this.user = user);
  }

  update() {
    this.responding = true;
    this.userService.update(this.user.Email, this.user)
      .subscribe(() => this.router.navigate(['/orders']));
  }

  loadPicture(file) {
    this.fileService.create(file.data).subscribe(data => {
      console.log(data);
    });
  }
}
