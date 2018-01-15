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
public getProduct(product)
{
  return this.getProducts().find(product => product['id'] == product.id);
}

public getProductbyId(id:number)
{
  return this.getProducts().find(product => product['id'] == id);
}


public addToStock(product)
{
 var oneProduct = this.getProduct(product);
 return oneProduct.numberInStock++;
}

public takeFromStock(product)
{ 
  if(this.getProduct(product).numberInStock <=0)
  {
    return false;
  }
  var oneProduct = this.getProduct(product).numberInStock--;
  return oneProduct;
}

}