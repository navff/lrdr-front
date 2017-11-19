import { CommentService } from './../../../shared/services/comment.service';
import { Order } from './../../../models/order.model';
import { OrderService } from './../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './order.component.html',
  providers: [OrderService, CommentService],
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {
  text: string;
  order = new Order();
  comments = [];
  constructor(
    private orderService: OrderService,
    private commentService: CommentService,
    private route: ActivatedRoute) {
  }
  update() {
    console.log('update');
  }
  send() {
    this.commentService.create(this.text, this.order.Id)
      .subscribe(res => {
        this.comments.push(res);
        document.getElementById('commentInput')['value'] = '';
      });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderService.take(params.code)
        .subscribe(order => {
          this.order = order;
          this.commentService.listByOrder(this.order.Id).subscribe(res => this.comments = res.Content);
        });
    });
  }
}
