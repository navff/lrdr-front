import { Directive, OnInit, ElementRef } from '@angular/core';
import { InputComponent } from '../components/input/input.component';

@Directive({selector: '[lrAutoFocus]'})
export class AutoFocusDirective implements OnInit {
  constructor(private input: ElementRef) {}

  ngOnInit() {
    this.input.nativeElement.focus();
  }
}
