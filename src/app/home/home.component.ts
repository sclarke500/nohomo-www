import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DialogService } from 'simple-ng-dialog';

@Component({
  templateUrl: 'home.component.html',
})
export class HomeComponent {

  firm;
  matters;

  firmDetail = false;

  constructor (
    private http: HttpClient,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
    this.fetchMatters();
    this.fetchFirm();
  }

  fetchMatters() {
    this.http.get('matters').subscribe(matters => {
      this.matters = matters;
    })
  }

  fetchFirm() {
    this.http.get('firm').subscribe(firm => {
      this.firm = firm;
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
      });
    });
  }

  saveFirm(firm) {
    this.http.put('firm', firm).subscribe(() => {
      Object.assign(this.firm, firm);
      this.firmDetail = false;
    });
  }
  
}