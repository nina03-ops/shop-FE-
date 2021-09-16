import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns  : string[] = ['id', 'name', 'description', 'price'];
  dataSource:any  = [];
  product:any = {};
  constructor(private productService: ProductService) { }

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
}
