import { Payment, PaymentSearchType } from './../../models/payment.model';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class PaymentService {
  constructor(private http: HttpService) { }

  take(id) {
    return this.http.get(`payment/${id}`);
  }
  update(id, payment: Payment) {
    return this.http.put(`payment/${id}`, payment);
  }
  create(payment: Payment) {
    return this.http.put(`payment`, payment);
  }
  remove(id) {
    return this.http.delete(`payment${id}`);
  }
  list(id?: string, searchType?: PaymentSearchType, isDeleted?: boolean, page?: string) {
    let params = new URLSearchParams();
    params.set('id', id);
    params.set('searchType', searchType ? searchType + '' : null);
    params.set('isDeleted', isDeleted ? isDeleted + '' : null);
    params.set('page', page);
    
    return this.http.get('payment/search', new RequestOptions({ params }));
  }
}
