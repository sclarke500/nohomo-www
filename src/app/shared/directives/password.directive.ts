import { Directive, ElementRef, AfterViewInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[nhPassword]',
})

export class PasswordDirective {

  icon;
  show;

  constructor (
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.icon = document.createElement('I');
    this.icon.className = 'fas fa-eye'
    this.elementRef.nativeElement.parentNode.insertBefore(this.icon, this.elementRef.nativeElement.nextSibling);
    Object.assign(this.elementRef.nativeElement.parentNode.style, {position: 'relative'})
    Object.assign(this.icon.style, {
      position: 'absolute',
      right: '8px',
      top: '8px',
      cursor: 'pointer',
      color: '#aaa',
      fontSize: '14px',
    });
    this.icon.onclick = this.toggle;
    this.elementRef.nativeElement.type = 'password';
  }

  toggle = () => {
    if (this.show) {
      this.show = false;
      this.icon.className = 'fas fa-eye';
      this.elementRef.nativeElement.type = 'password';
    } else {
      this.show = true;
      this.icon.className = 'fas fa-eye-slash';
      this.elementRef.nativeElement.type = 'text';
    }
  }

}
