import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent {

  userForm: FormGroup | any;

  constructor(private formbuilder: FormBuilder, 
    private _snackBar: MatSnackBar, 
    private customerService:CustomerService,
    private routerService: RouterService){
    this.userForm = this.formbuilder.group({
      firstName: new FormControl('',[Validators.required, Validators.pattern("^[A-Za-z]*$")]),
      lastName: new FormControl('',[Validators.required, Validators.pattern("^[A-Za-z]*$")]),
      email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]),
      mobileNumber: new FormControl('',[Validators.required, Validators.pattern(/^[789]\d{9,9}$/)]),
      address: new FormControl('',[Validators.required, Validators.minLength(6)])
    })

  }
  get firstName(){
    return this.userForm.get('firstName');
  }
  get lastName(){
    return this.userForm.get('lastName');
  }
  get email(){
    return this.userForm.get('email');
  } 
  get password(){
    return this.userForm.get('password');
  }
  get mobileNumber(){
    return this.userForm.get('mobileNumber');
  }
  get address(){
    return this.userForm.get('address');
  }

  onSubmit() {
    this._snackBar.open('Congrats, you have submitted the form!!', 'success', {​
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
    this.customerService.addUser(this.userForm.value).subscribe(()=> {console.log(this.userForm.value);})
    this.routerService.navigateToLoginPage();
    this.userForm.reset();
  }
}
