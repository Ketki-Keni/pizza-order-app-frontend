import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './cart-view/cart-view.component';
import { HomeComponent } from './home/home.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { LoginComponent } from './login/login.component';
import { MenuItemViewComponent } from './menu-item-view/menu-item-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent}, 
  {path:'register',component: ResgisterComponent}, 
  // {path:'menu',component: PizzaMenuComponent}, 
  {path:"login/menu",component: MenuItemViewComponent,canActivate:[AuthGuard]},   
  {path:'menu/:id',component: ItemPageComponent, canActivate:[AuthGuard]},
  {path:'cart',component: CartViewComponent, canActivate:[AuthGuard]},
  // {path:"login/menu",component: MenuItemViewComponent},   
  // {path:'menu/:id',component: ItemPageComponent},
  // {path:'cart',component: CartViewComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
