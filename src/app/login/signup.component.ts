import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'signup.component.html',
  styleUrls: ['login.less']
})
export class SignupComponent {

  model = {
    firmName: 'TEst Firm',
    userName: 'Me me me',
    email: 'me@fuckyou.com',
    password: 'niggers',
  }

  constructor (
    private http: HttpClient,
  ) { }

  signup() {
    this.http.post('signup', this.model).subscribe(resp => {
      console.log(resp);
    })
  }
  
}