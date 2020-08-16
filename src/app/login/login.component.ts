import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginData: any;
  submitted: any;
  loading: any;
  error: any;


  constructor(private fb: FormBuilder, private router: Router, private localStorageService: LocalStorageService, private dataService: DataService) { }

  ngOnInit() {
    this.createForm();
    this.submitted = false;
    this.loading = false;
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loading = true;
      this.loginData = this.loginForm.value;
      this.submitted = false;
      this.dataService.postLogin(this.loginData).subscribe((res) => {
        if (res['success']) {
          this.localStorageService.setUser(this.loginData['username']);
          this.router.navigate(['/'])
        }
        else {
          this.error = "Invalid username or password";
          this.loginForm.reset()
        }
        this.loading = false;
      })
    }
  }

}
