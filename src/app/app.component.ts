import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'lr-app',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
}
