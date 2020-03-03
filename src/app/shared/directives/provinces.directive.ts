import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[nhProvinces]',
})
export class ProvincesDirective {

  constructor(private elementRef: ElementRef) {
    // tried to do this OnInit but ngForm value set failed
    // guessing because that fires b4 init and options were not yet available
    // moving routine to constructor seems to work
    const provinceIds = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NU', 'NT', 'ON', 'PE', 'QC', 'SK', 'YK'];
    // const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Nunavut', 'Northwest Territories', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'];
    for (let i = 0; i < 13; i++) {
      const o = document.createElement('OPTION') as HTMLOptionElement;
      o.innerText = provinceIds[i];
      o.value = provinceIds[i];
      this.elementRef.nativeElement.appendChild(o);
    }


  }

}
