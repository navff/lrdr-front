import { User, Role } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class UserService {
  constructor(private http: HttpService) { }

  create(email: string) {
    return this.http.post(`user`, email);
  }
  update(email, user: User) {
    return this.http.post(`user?email=${email}`, user);
  }
  remove(email) {
    return this.http.delete(`user/delete?email=${email}`);
  }
  takeByToken() {
    return this.http.get('user');
  }
  take(email: string) {
    return this.http.get(`user?email=${email}`);
  }
  logout() {
    return this.http.put('user/logout');
  }
  list(word: string, roles: Role[], page: string) {
    let params = new URLSearchParams();
    params.set('word', word);
    params.set('Page', page);
    roles.forEach((i) => params.set('roles', i + ''));

    return this.http.get(`user/search`, new RequestOptions({ params }));
  };
}
