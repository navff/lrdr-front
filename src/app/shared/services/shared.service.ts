import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
  requests$: BehaviorSubject<number> = new BehaviorSubject(0);
}
