import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    API_SERVER = "http://localhost:3000";
    constructor(public httpClient: HttpClient) { }
  public readProducts(){
    return this.httpClient.get<Product[]>(`${this.API_SERVER}/product/all`);
  }
  
  public createProduct(product: Product){
    return this.httpClient.post<Product>(`${this.API_SERVER}/product/create`, product);
  }
  
  public updateProduct(product: Product){
    return this.httpClient.put<Product>(`${this.API_SERVER}/product/${product.id}/update`, product);
  }
  
  public deleteProduct(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/product/${id}/delete`);
  }
}