import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DialogService } from 'simple-ng-dialog';

@Component({
  templateUrl: 'home.component.html',
})
export class HomeComponent {

  matters;

  constructor (
    private http: HttpClient,
    private dialogService: DialogService,
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
    this.dialogService.inputBox('New matter name?', '').then(name => {
      this.http.post('matters', { name: name }).subscribe(() => {
        this.fetchMatters();
      })
    })
  }

  deleteMatter(event, matter) {
    event.stopPropagation();
    this.dialogService.confirm('Are you sure?').then(() => {
      this.http.delete('matters/' + matter._id).subscribe(() => {
        this.matters.splice(this.matters.indexOf(matter), 1);
      })
    });
  }
  
}