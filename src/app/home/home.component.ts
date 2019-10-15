import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Notification } from '@divorcemate/widgets';

@Component({
  templateUrl: 'home.component.html',
})
export class HomeComponent {

  matters;

  constructor (
    private http: HttpClient,
    private notification: Notification,
  ) { }

  ngOnInit() {
    this.fetchMatters();
  }

  fetchMatters() {
    this.http.get('matters').subscribe(matters => {
      this.matters = matters;
    })
  }

  newMatter() {
    this.notification.inputBox('New matter name?', '').then(name => {
      this.http.post('matters', { name: name }).subscribe(() => {
        this.fetchMatters();
      })
    })
  }
  
}