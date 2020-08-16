import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupData: any;
  submitted: any;
  error: any;
  loading: any;
  confirmPasswordError = false;
  confirmPasswordErrorValue: any;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.submitted = false;
    this.loading = false;
  }

  checkPasswordConfirmation(password: any, confirmPassword: any) {
    if (!confirmPassword) {
      this.confirmPasswordError = true;
      this.confirmPasswordErrorValue = "Confirm Password is required";
      return false;
    }
    else if (this.signupData['password'] !== confirmPassword) {
      this.confirmPasswordError = true;
      this.confirmPasswordErrorValue = "Confirm Password should match with Password";
      return false;
    }
    else {
      this.confirmPasswordError = false;
      return true;
    }
  }

  createForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    this.error = ""

    //Password Confirmation
    this.signupData = this.signupForm.value;
    let confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value
    let passwordCheck = this.checkPasswordConfirmation(this.signupData['password'], confirmPassword)

    //Submitting the form
    if(this.signupForm.valid && passwordCheck){
      this.loading =true;
        this.dataService.postSignup(this.signupData).subscribe((res)=>{
          if(res['success']){
            this.loading=false;
            this.router.navigate(['/login']);
          }
          else{
            this.loading=false;
            this.error = res['message'];
          }
        })  
    }
  }

}
