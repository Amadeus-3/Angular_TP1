import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      id:1,
      name : "computer",
      price : 5300,
      selected : true
    },    {
      id:2,
      name : "printer",
      price : 1200,
      selected : false
    },    {
      id:3,
      name : "smart phone",
      price : 3300,
      selected : true
    }
  ]
  constructor() { }

  getAllProducts(){
    return this.products
  }

  deleteProduct(product: any){
    this.products = this.products.filter((p:any)=> p.id != product.id);
  }
}
