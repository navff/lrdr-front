import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy } from '@angular/core';
import { HttpService } from './../../services/http.service';
@Component({
  selector: 'lr-progress',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass'],
})
export class ProgressBarComponent implements OnDestroy {
  responding: boolean;
  sub: Subscription;

  constructor(private http: HttpService) {
    this.sub = this.http.responding.subscribe(data => this.responding = data);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
