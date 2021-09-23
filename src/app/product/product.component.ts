import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns  : string[] = ['id', 'name', 'description', 'price','buy'];
  dataSource:any  = [];
  product:any = {};
  constructor(private auth: AuthService,private productService: ProductService, private cartService:CartService) { }

  ngOnInit() {
    this.productService.readProducts().subscribe((result)=>{
     this.dataSource  =  result;
    })
  }
  selectProduct(product:any){
    this.product = product;
  }

  newProduct(){
    this.product = {};
  }

  createProduct(f:any){
    this.productService.createProduct(f.value).subscribe((result)=>{
      console.log(result);
    });
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe((result)=>{
      console.log(result);
    });
  }

  updateProduct(f:any){
    f.value.id = this.product['id'];
    this.productService.updateProduct(f.value).subscribe((result)=>{
      console.log(result);
    });
  }

  // addToCart() {
  //   window.alert('Added');
  // }

  addToCart(f:any) {
    this.cartService.createCart(f.value).subscribe((result)=>{
    }, error => {
        window.alert(error.error.message || error.error.text);
        console.log(error);
    });
  }

  isAuthenticated() {
    return this.auth.isAuthenticated();
  }


}
