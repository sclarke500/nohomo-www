import {Directive, AfterViewInit, HostListener} from '@angular/core';
import {NgControl} from '@angular/forms';


@Directive({
  selector: '[nhPostalCode]',
})

export class PostalCodeDirective implements AfterViewInit {

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

  format(p) {
    if (!p) {
      this.viewValue = '';
      this.modelValue = null;
      return;
    }
    let n = (p).match(/[0-9a-zA-Z]/g);
    let v = '';
    for (let i = 0; i < n.length; i++) {
      if (i === 3) {
        v += ' ';
      }
      if (i % 2 === 0) {
        if ((n[i]).match(/[a-zA-Z]/)) {
          v += n[i].toUpperCase();
        }
      } else {
        if ((n[i]).match(/[0-9]/)) {
          v += n[i];
        }
      }

    }
    this.viewValue = v.substr(0, 7);
    this.modelValue = v.replace(' ', '');
    this.model.control.patchValue(this.modelValue);
    this.model.valueAccessor.writeValue(this.viewValue);
  }
}
