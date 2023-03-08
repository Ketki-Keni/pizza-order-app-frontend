import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  navigateToHome() {
    this.router.navigate([""]);
  }

  navigateToMenu(){
    this.router.navigate(["login/menu"])
  }

  navigateToCart(){
    this.router.navigate(["/cart"])
  }

  navigateToLoginPage(){
    this.router.navigate(["/login"])
  }
}
