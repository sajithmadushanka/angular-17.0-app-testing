import { Routes } from '@angular/router';
import {HomeComponent} from "./componets/home/home.component";
import {AboutComponent} from "./componets/about/about.component";
import {ProductComponent} from "./componets/product/product.component";

export const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'shop', component:ProductComponent},
  {path:'about', component: AboutComponent}
];
