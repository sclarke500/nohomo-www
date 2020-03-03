import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor (
    public authService: AuthService,
    private http: HttpClient,
  ) { }

    logout() {
      this.http.post('logout', null).subscribe(() => {
        this.authService.clear();
      })
    }


}
