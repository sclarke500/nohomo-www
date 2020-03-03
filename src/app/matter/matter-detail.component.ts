import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Matter } from '../models';

@Component({
  selector: 'nh-matter-detail',
  templateUrl: 'matter-detail.component.html',
})
export class MatterDetailComponent {

  @Input() matter;
  @Output() save = new EventEmitter;
  @Output() close = new EventEmitter;

  matterForm: FormGroup;

  constructor ( 
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.matterForm = this.formBuilder.group(Object.assign(new Matter, this.matter));
  }

  onOk() {
    if (this.matterForm.valid) {
      this.save.emit(this.matterForm.value);
    }
  }


}
