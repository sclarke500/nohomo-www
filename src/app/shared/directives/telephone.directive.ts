import { Directive, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[nhTelephone]',
})

export class TelephoneDirective implements AfterViewInit {

  viewValue;
  modelValue;

  constructor(private model: NgControl) { }

  @HostListener('input')
  onInputChange(e) {
    let t = <HTMLInputElement>event.target;
    let i = t.selectionEnd - t.value.length;
    this.format(t.value);
    i = this.viewValue.length + i;
    t.setSelectionRange(i, i);
    return false;
  }

  ngAfterViewInit() {
    this.format(this.model.value);
  }

  format(val) {
    const digits = val ? val.match(/\d/g) : '';
    if (!digits) {
      this.viewValue = '';
      this.modelValue = '';
    } else {
      let s = '(';
      digits.forEach((v, i) => {
        if (i === 3) {
          s += ') ' + v;
        } else if (i === 6) {
          s += '-' + v;
        } else {
          s += v;
        }
      });
      this.viewValue = s.substring(0, 14);
      this.modelValue = digits.reduce((a, b) => a + b).substring(0, 10);
    }
    this.model.control.patchValue(this.modelValue);
    this.model.valueAccessor.writeValue(this.viewValue);
  }

}
