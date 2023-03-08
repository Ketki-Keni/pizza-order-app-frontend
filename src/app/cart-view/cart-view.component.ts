import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CustomerService } from '../services/customer.service';
import { MenuService } from '../services/menu.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
    
  cartItems:any = [];
  // cartItems = this.cartService.getItems();
  quantity:number= 1;
  totalPrice : number = 0;
  amount:number=0;

  constructor(private cartService: CartService,private customerService:CustomerService, private menuservice: MenuService) { }

  ngOnInit() {
    console.log(this.customerService.user)
    this.cartService.getCartItems(this.customerService.user).subscribe(item=>{
      this.cartItems = item;
      // this.cartItems.forEach((item: any) => {
      //   item.quantity=1
      //   this.amount = item.quantity * item.price;
      //   this.totalPrice += this.amount; 
      // });
    })

    // this.cartService.getmenuItem().subscribe((item:any) =>{
    //     this.cartItems = item;
    //     this.cartItems.forEach((item: any) => {
    //       // this.amount = item.quantity * item.price;
    //       // this.totalPrice += eachItem.price 
    //     });
    // })
  }
  


  removeItem(id: any){
    // this.cartService.removeCartItem(item);
    console.log(this.customerService.user)
    this.cartService.removePizzaFromCart(this.customerService.user, id).subscribe(item=>{
      alert("Item will be removed from the cart")
      console.log(item);
      this.cartService.getCartItems(this.customerService.user).subscribe(item=>{
        this.cartItems = item;
        console.log(item);
      });
    });
    
    
  }

  emptyCart(){
    // this.cartService.clearCart();
    this.cartService.removeAllFromCart(this.customerService.user).subscribe(item=>{
      console.log(item);
      this.cartService.getCartItems(this.customerService.user).subscribe(item=>{
        this.cartItems = item;
        console.log(item);
      });
    });
  }

  // quantity(id: any){
  //   console.log(id);
  //   let total = id * this.cartItems[0].price;
  //   this.amount=total;
  //   console.log(this.amount);
  //   console.log(this.cartItems[0].price);
  //   console.log(this.cartItems);
  // }
}