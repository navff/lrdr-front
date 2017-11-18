import { Order, OrderStatus, OrderSorting } from './../../models/order.model';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class OrderService {
  constructor(private http: HttpService) { }

  create(order: Order) {
    return this.http.post(`order`, order);
  }
  update(id, order: Order) {
    return this.http.post(`order/${id}`, order);
  }
  changeStatus(OrderId, Status: OrderStatus) {
    return this.http.put(`order/changestatus`, { OrderId, Status });
  }
  changePrice(OrderId, Price: number) {
    return this.http.put(`order/changeprice`, { OrderId, Price });
  }
  remove(id) {
    return this.http.delete(`order/${id}`);
  }
  take(code: string) {
    return this.http.get(`order/${code}`);
  }
  list(word?: string, userId?: string, page?: string, sortBy?: OrderSorting) {
    let params = new URLSearchParams();
    params.set('word', word);
    params.set('userId', userId);
    params.set('Page', page);
    params.set('SortBy', sortBy ? sortBy + '' : null);

    return this.http.get(`order/search`, new RequestOptions({ params }));
  };
}
