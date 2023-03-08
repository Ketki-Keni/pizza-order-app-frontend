import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../model/cartItem';
import { Menu } from '../model/menu';
import { CartService } from '../services/cart.service';
import { CustomerService } from '../services/customer.service';
import { MenuService } from '../services/menu.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  menu: Menu[] =[];

  @Input('menu1') menu1: Menu={};

  constructor(private activatedRoute: ActivatedRoute, private customerService:CustomerService, private routerService: RouterService, private menuService: MenuService, private cartService:CartService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      let id = data.get('id') ?? 0;
        this.menuService.getItemById(+id).subscribe({
          next: data=>{
            this.menu1=data;
          },
          error: err => {
            alert("Failed to Fetch Menu due to Network Error!!!")
          }
        });
    });
  }

  addToCart(item: CartItem){
    console.log(this.customerService.user)
    // this.cartService.addTocart(item);
    this.cartService.addPizzaToCart(this.customerService.user, item);
    alert('Added to cart')
    this.routerService.navigateToCart();
  }
}
