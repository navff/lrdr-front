import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class CommentService {
  constructor(private http: HttpService) { }

  create(Text: string, OrderId: number) {
    return this.http.post('comment', { Text, OrderId });
  }
  update(id, Text: string) {
    return this.http.put(`comment/${id}`, { Text });
  }
  remove(id) {
    return this.http.delete(`comment/${id}`);
  }
  take(id) {
    return this.http.get(`comment/${id}`);
  }
  listByUser(id) {
    return this.http.get(`comment/byuser/${id}`);
  }
  listByOrder(id): Observable<any> {
    return this.http.get(`comment/byorder/${id}`);
  }
}
