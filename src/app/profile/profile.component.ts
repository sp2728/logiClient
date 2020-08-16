import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;

  constructor(private dataService:DataService, private localStorageService:LocalStorageService, private router:Router) { }

  ngOnInit() {
    this.getProfile();

  }

  getProfile(){
    this.dataService.getProfile().subscribe((res)=>{
      this.user = res['user'];
    })
  }

  logout(){
    this.localStorageService.clearAll();
    console.log('Successfully logged out');
    this.router.navigate(['/login']);
  }

}
