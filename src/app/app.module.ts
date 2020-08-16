import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpConfigInterceptorProvider } from './interceptor/httpconfig.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';
import { PreviousRouteService } from './previous-route.service';
import { LocalStorageService } from './local-storage.service';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpConfigInterceptorProvider,
    AuthGuard,
    LoginGuard,
    PreviousRouteService,
    LocalStorageService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
