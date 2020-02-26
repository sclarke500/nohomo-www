import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { equalValidator } from './equal.validator';

@Component({
  templateUrl: 'reset-password.component.html',
  styleUrls: ['login.less'],
})
export class ResetPasswordComponent {

  resetForm: FormGroup;

  formSent;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    let params = this.route.snapshot.queryParams;
    let model = {
      token: params.token,
      password: null,
      confirmPassword: null,
    }
    let options = { validator: equalValidator('password', 'confirmPassword') }
    this.resetForm = this.formBuilder.group(model, options);
  }

  get password() { return this.resetForm.get('password'); }
  get confirmPassword() { return this.resetForm.get('confirmPassword'); }

  reset() {
    let model = this.resetForm.value;
    this.http.post('reset-password', model).subscribe(() => {
      this.formSent = true;
    });
  }

}

