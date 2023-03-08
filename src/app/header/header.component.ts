import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItems:any = [];
  totalItem: number=0;
  constructor(private authService: AuthService, private customerService:CustomerService, private routerService:RouterService, private cartService: CartService) {}

  ngOnInit(): void {
    // this.cartService.getCartItems(this.customerService.user).subscribe(item=>{
    //   this.cartItems = item
    //   this.totalItem = item.length;
    // })
  }

  logout(){
    this.customerService.isLoggedIn = false;
    console.log('logout')
    this.routerService.navigateToLoginPage();
  }
}
