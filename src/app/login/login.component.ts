import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder,private customerService:CustomerService, private routerService:RouterService) { 
    this.loginForm = this.formbuilder.group({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  checkLogin(){
    const value= this.loginForm.value;
    console.log(value.email,value.password);
    this.customerService.login(value).subscribe({
      next:data=>{
        this.customerService.user = this.loginForm.value.email;
        this.customerService.isLoggedIn=true;
        alert('Logged in successfully');
        this.loginForm.reset();
        this.routerService.navigateToMenu();
      },
      error: err=>{
        alert('Email or Password Does not Match!!!!');
      }
    });
  }
}

