import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../product/product";
import { Cart } from "./cart";

@Injectable({
    providedIn: 'root'
  })
  // export class CartService {
  //   items: Product[] = [];

  //   addToCart(product: Product) {
  //     this.items.push(product);
  //   }
    
  //   getItems() {
  //     return this.items;
  //   }

  //   clearCart() {
  //     this.items = [];
  //     return this.items;
  //   }
  // }


  export class CartService {
    API_SERVER = "http://localhost:3000";
    constructor(public httpClient: HttpClient) { }
    
  public readCart(){
    return this.httpClient.get<Cart[]>(`${this.API_SERVER}/cart/all`);
  }
  
  public createCart(cart: Cart){
    return this.httpClient.post<Cart>(`${this.API_SERVER}/cart/create`, cart);
  }
  
  public updateCart(cart: Cart){
    return this.httpClient.put<Cart>(`${this.API_SERVER}/cart/${cart.id}/update`, cart);
  }
  
  public deleteCart(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/cart/${id}/delete`);
  }
}