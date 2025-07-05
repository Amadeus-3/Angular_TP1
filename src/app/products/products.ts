import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone : true
})
export class Products implements OnInit{
  products : Array<any>=[]; //initialize or use !
  //products! : Array<any>;

  constructor(private productService:ProductService) {
  }
  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.products = this.productService.getAllProducts();
  }

  handleDelete(product: any) {
    let v = confirm("are you sure you want to delete?")
    if(v) {
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }
  }
}
