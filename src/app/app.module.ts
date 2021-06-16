import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";

import auth0Config from '../assets/auth.json';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ProtectedComponent } from './protected.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...auth0Config,
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
      httpInterceptor: {
        allowedList: [
          {
            uri: "/api/*",
            tokenOptions: {
              audience: "http://localhost:8080",
            },
          },
        ],
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
