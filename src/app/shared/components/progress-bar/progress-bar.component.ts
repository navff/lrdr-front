import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'lr-progress',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass'],
})
export class ProgressBarComponent implements OnDestroy {
  responding: boolean;
  sub: Subscription;

  constructor(private shared: SharedService) {
    this.sub = this.shared.requests$.subscribe(data => this.responding = data > 0 ? true : false);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
