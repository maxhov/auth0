import { Component } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthService, private http: HttpClient) {
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }

  callAPI() {
    this.http.get("/api/response.json").subscribe(console.log);
  }
}
