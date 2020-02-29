import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Firm } from '../models';

@Component({
  selector: 'nh-firm-detail',
  templateUrl: 'firm-detail.component.html',
})
export class FirmDetailComponent {

  @Input() firm;
  @Output() save = new EventEmitter;
  @Output() close = new EventEmitter;

  firmForm: FormGroup;

  constructor ( 
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.firmForm = this.formBuilder.group(Object.assign(new Firm, this.firm));
  }

  onOk() {
    if (this.firmForm.valid) {
      this.save.emit(this.firmForm.value);
    }
  }




}
