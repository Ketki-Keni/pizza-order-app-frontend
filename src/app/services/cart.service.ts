import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable  } from 'rxjs';
import { CartItem } from '../model/cartItem';
import { customer } from '../model/customer';
import { Menu } from '../model/menu';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cartItemList: any = [];
  // menuItemList = new BehaviorSubject<any>([]);

  URL:string="http://localhost:8082/api/v2/user/addToCart";

  URL1:string="http://localhost:8082/api/v2/user/cart";

  URL2:string="http://localhost:8082/api/v2/user/deleteFromCart";

  URL3:string="http://localhost:8082/api/v2/user/deleteAll";
  
  constructor(private httpClient: HttpClient) { }

  addPizzaToCart(id: string, pizza:{}){
    return this.httpClient.post<CartItem>(`${this.URL}/${id}`, pizza);
  }

  getCartItems(id: string): Observable<Array<CartItem>>{
    return this.httpClient.get<Array<CartItem>>(`${this.URL1}/${id}`);
  }

  removePizzaFromCart(id: string, pizzaId: number) : Observable<CartItem>{
    return this.httpClient.delete<CartItem>(`${this.URL2}/${id}/${pizzaId}`);
  }

  removeAllFromCart(id: string) : Observable<Array<CartItem>>{
    return this.httpClient.delete<Array<CartItem>>(`${this.URL3}/${id}`);
  }






  // getmenuItem(){
  //   return this.menuItemList.asObservable();
  // }

  // setmenuItem(item: any){
  //   this.cartItemList.push(...item);
  //   this.menuItemList.next(item); //Triggering an event
  // }

  // addTocart(item: any){
  //   this.cartItemList.push(item);
  //   this.menuItemList.next(this.cartItemList);
  //   this.getTotalPrice;
  //   console.log(this.cartItemList);
  // }

  // getTotalPrice() : number{
  //   let grandTotal = 0;
  //   this.cartItemList.map((a:any)=>{
  //     grandTotal += a.total;
  //   })
  //   return grandTotal;
  // }

  // removeCartItem(item: any){
  //   this.cartItemList.map((a:any, index:any)=>{
  //     if(item.id === a.id){
  //       this.cartItemList.splice(index,1);
  //     }
  //   })
  // }

  // clearCart() {
  //   this.cartItemList = [];
  //   this.menuItemList.next(this.cartItemList);
  // }




  // addTocart(menu:Menu){
  //   this.cartItemList.push(menu);
  // }

  // getItems(){
  //   return this.cartItemList;
  // }
  // clearCart() {
  //   this.cartItemList = [];
  // }

}
