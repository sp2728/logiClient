import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private localStorageService:LocalStorageService, private http:HttpClient) { }

  getProfile(){
    return this.http.get('profile/'+this.localStorageService.getUser());
  }

  postLogin(loginData:any){
    return this.http.post('login', loginData);
  }

  postSignup(signupData:any){
    return this.http.post('signup', signupData);
  }

}
