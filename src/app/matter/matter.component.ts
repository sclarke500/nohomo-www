import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { DialogService } from 'simple-ng-dialog';

@Component({
  templateUrl: 'matter.component.html',
})
export class MatterComponent {

  matter;
  matterId;
  documents;

  constructor (
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
    this.matterId = this.activatedRoute.snapshot.params['matterId'];
    this.fetchMatter();
    this.fetchDocuments();
  }

  fetchMatter() {
    this.http.get('matters/' + this.matterId).subscribe(matter => {
      this.matter = matter;
    })
  }

  fetchDocuments() {
    this.http.get('matters/' + this.matterId + '/documents').subscribe(documents => {
      this.documents = documents;
    })
  }

  newDoc() {
    this.dialogService.inputBox('New doc name?', '').then(name => {
      this.http.post('matters/' + this.matterId + '/documents', { name: name }).subscribe(() => {
        this.fetchDocuments();
      })
    })
  }

  deleteDocument(event, document) {
    event.stopPropagation();
    this.dialogService.confirm('Are you sure?').then(() => {
      this.http.delete('matters/' + this.matterId + '/documents/' + document._id).subscribe(() => {
        this.documents.splice(this.documents.indexOf(document), 1);
      })
    });
  }

}