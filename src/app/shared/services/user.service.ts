import { Observable } from 'rxjs/Observable';
import { User, Role } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class UserService {
  constructor(private http: HttpService) { }

  register(Email: string) {
    return this.http.post('user', { Email });
  }
  update(email, user: User) {
    return this.http.put(`user?email=${email}`, user);
  }
  remove(email) {
    return this.http.delete(`user/delete?email=${email}`);
  }
  takeByToken(): Observable<User> {
    return this.http.get('user');
  }
  take(email: string) {
    if (localStorage.getItem('token')) {
      return this.http.get(`user?email=${email}`);
    }
  }
  logout() {
    return this.http.put('user/logout');
  }
  list(word?: string, roles?: Role[], page?: string) {
    let params = new URLSearchParams();
    params.set('word', word);
    params.set('Page', page);
    if (roles) {
      roles.forEach((i) => params.append('roles', i + ''));
    }

    return this.http.get('user/search', new RequestOptions({ params }));
  };
}
