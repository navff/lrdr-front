import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class CommentService {
  constructor(private http: HttpService) { }

  create(Id: number, Text: string, OrderId: number) {
    return this.http.post('comment', { Id, Text, OrderId });
  }
  update(id: string, Text: string) {
    return this.http.put(`comment/${id}`, { Text });
  }
  remove(id: string) {
    return this.http.delete(`comment/${id}`);
  }
  take(id: string) {
    return this.http.get(`comment/${id}`);
  }
  listByUser(id: string) {
    return this.http.get(`comment/byuser/${id}`);
  }
  listByOrder(id: string) {
    return this.http.get(`comment/byorder/${id}`);
  }
}
