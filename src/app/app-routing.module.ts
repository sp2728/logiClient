import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  {
    path:"login", component:LoginComponent, canActivate:[LoginGuard]
  },
  {
    path:"signup", component:SignupComponent,canActivate:[LoginGuard]
  },
  {
    path:"profile", component:ProfileComponent,canActivate:[AuthGuard]
  },
  {
    path:"", component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
