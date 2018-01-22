import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {

public numberInStock:number;

private products: Product[] = [
  {id:1, name:'Salt', numberInStock:5},
  {id:2, name:'Milk', numberInStock:3},
  {id:3 ,name:'Sugar', numberInStock:2},
];


constructor() { }

public getProducts()
{
  return this.products;
}


public getProductbyId(id)
{
  for(let i = 0; i < this.products.length; i++){
    if(this.products[i].id == id){
      return this.products[i];
      }
    }
}


public addToStock(product:Product )
{
 var product = this.getProductbyId(product.id);
 return product.numberInStock++;
}

public takeFromStock(product:Product)
{ 
  if(this.getProductbyId(product.id).numberInStock <=0)
  {
    return false;
  }
  var product = this.getProductbyId(product.id);
  return product.numberInStock--;
}

}