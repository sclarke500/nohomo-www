import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[nhNum]',
})

export class NumDirective {

  el: HTMLElement;
  nullable;

  constructor (
    private model: NgControl,
    private elRef: ElementRef,
  ) { }

  ngOnInit() {
    this.el = this.elRef.nativeElement;
    this.nullable = this.el.hasAttribute('nullable');
  }

  @HostListener('blur')
  onBlur(e) {
    if (Number(this.model.value)) {
      this.model.control.setValue(Number(this.model.value));
    } else {
      this.model.control.setValue(this.nullable ? null : 0);
    }
  }

}