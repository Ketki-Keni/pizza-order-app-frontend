import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  pizza:any;

  URL:string="http://localhost:8084/api/v3/user/Pizzas";

  URL1:string="http://localhost:8084/api/v3/user/Pizza";

  constructor(private httpClient:HttpClient) { }

  getMenuItems(): Observable<Array<Menu>>{
    return this.httpClient.get<Array<Menu>>(this.URL);
  }

  getItemById(id: number): Observable<Menu> {
    return this.httpClient.get<Menu>(`${this.URL1}/${id}`);
  }
}
