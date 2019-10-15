import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from '@divorcemate/widgets';

import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'matter.component.html',
})
export class MatterComponent {

  matter;
  matterId;

  constructor (
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private notification: Notification,
  ) { }

  ngOnInit() {
    this.matterId = this.activatedRoute.snapshot.params['matterId'];
    this.fetchMatter();
  }

  fetchMatter() {
    this.http.get('matters/' + this.matterId).subscribe(matter => {
      this.matter = matter;
    })
  }

  newDoc() {
    this.notification.inputBox('New doc name?', '').then(name => {
      this.http.post('matters/' + this.matterId + '/documents', { name: name }).subscribe(() => {
        this.fetchMatter();
      })
    })
  }

}