import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "products"},
    // {path: "", pathMatch: "full"},

  {path: "products", component: ProductComponent},
  {path: "cart", component: CartComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
