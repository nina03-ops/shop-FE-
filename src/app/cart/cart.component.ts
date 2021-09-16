import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  displayedColumns  : string[] = ['id', 'products'];
  dataSource:any  = [];
  cart:any = {};
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.readCart().subscribe((result)=>{   
     this.dataSource  =  result;
    })
    
  }
  selectCart(cart:any){
    this.cart = cart;
  }
  
  newCart(){
    this.cart = {};
  }

  createCart(f:any){
    this.cartService.createCart(f.value).subscribe((result)=>{
      console.log(result);
    });
    
  }
  
  deleteCart(id:any){
    this.cartService.deleteCart(id).subscribe((result)=>{
      console.log(result);
    });
  }

  updateCart(f:any){
    f.value.id = this.cart['id'];
    this.cartService.updateCart(f.value).subscribe((result)=>{
      console.log(result);
    });
  }
}
