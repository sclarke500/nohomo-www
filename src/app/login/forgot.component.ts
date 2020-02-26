import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'forgot.component.html',
  styleUrls: ['login.less'],
})
export class ForgotComponent {

  email;
  submitted = false;

  emailbody;

  constructor ( 
    private http: HttpClient,
  ) { }

  submit() {
    this.http.post('forgot', {email: this.email}).subscribe( (res: any) => {
      console.log(res);
      this.emailbody = res.body;
      this.submitted = true;
    })
  }


}

