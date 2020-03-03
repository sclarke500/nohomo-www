import { Directive, ElementRef, AfterViewInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[nhAutoFocus]',
})

export class AutoFocusDirective implements AfterViewInit {

  constructor (
    private elementRef: ElementRef,
  ) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }

}
