import { PaymentService } from './../../shared/services/payment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './payments.component.html',
  providers: [PaymentService],
  styleUrls: ['./payments.component.sass']
})
export class PaymentsComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
  }
}
