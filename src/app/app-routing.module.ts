import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProtectedComponent} from "./protected.component";
import {AuthGuard} from "@auth0/auth0-angular";

const routes: Routes = [
  {
    path: "protected",
    component: ProtectedComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
