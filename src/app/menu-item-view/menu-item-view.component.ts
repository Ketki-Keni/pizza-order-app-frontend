import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../model/cartItem';
import { CartService } from '../services/cart.service';
import { CustomerService } from '../services/customer.service';
import { MenuService } from '../services/menu.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-menu-item-view',
  templateUrl: './menu-item-view.component.html',
  styleUrls: ['./menu-item-view.component.css']
})
export class MenuItemViewComponent implements OnInit {

  userList= this.customerService.getUser;

  menuList: any =[];
  // quantity=1;
  // total=0;

  constructor( private route: ActivatedRoute,
    private menuService: MenuService, 
    private customerService:CustomerService,
    private routerService: RouterService,
    private cartService:CartService) {}

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe( data=>{
        this.menuList=data;
    })
  }

  addToCart(item: CartItem){
    console.log(this.customerService.user)
      // this.cartService.addTocart(item);
      this.cartService.addPizzaToCart(this.customerService.user, item).subscribe(item=>{
        console.log(item);
      })
      
      alert('Added to cart')
      this.routerService.navigateToCart();
  }
}
