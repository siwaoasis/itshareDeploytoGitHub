import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent  } from './admin/admin-orders/admin-orders.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : 'products', component : ProductsComponent},
  { path : 'orders', component: MyOrdersComponent},
  { path : 'admin/products', component: AdminProductsComponent },
  { path : 'admin/orders', component: AdminOrdersComponent},
  { path : 'shopping-cart', component: ShoppingCardComponent},
  { path : 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
