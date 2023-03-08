import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  user:any;

  isLoggedIn:boolean=false;

  URL:string="http://localhost:8082/api/v2/register";

  URL2: string="http://localhost:8083/api/v1/login";

  URL1: string="http://localhost:8083/api/v2/customers"

  constructor(private httpClient:HttpClient) { }

  addUser(userData:{}){
    return this.httpClient.post<customer>(this.URL, userData);
  }

  login(data:{}){
    return this.httpClient.post(this.URL2, data)
  }

  getUser() : Observable<Array<customer>>{
    return this.httpClient.get<Array<customer>>(this.URL1);
  }


}
