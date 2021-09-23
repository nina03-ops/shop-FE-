import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Product } from "./product";

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    API_SERVER = "http://localhost:3000";
    constructor(private http: HttpClient, private auth: AuthService) { }

  // creates header
  private _authHeader(): Object {
    return {
      headers: new HttpHeaders({ 'authorization': `Bearer ${this.auth.getAccessToken()}`})
    };
  }

  public readProducts(){
    return this.http.get<Product[]>(`${this.API_SERVER}/product/all`);
  }

  public createProduct(product: Product){
    return this.http.post<Product>(`${this.API_SERVER}/product/create`, product,this._authHeader());
  }

  public updateProduct(product: Product){
    return this.http.put<Product>(`${this.API_SERVER}/product/${product.id}/update`, product);
  }

  public deleteProduct(id: number){
    return this.http.delete(`${this.API_SERVER}/product/${id}/delete`);
  }

}
