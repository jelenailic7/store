import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {

private products: Product[] = [
  {id:1,name:'Salt',numberInStock:5},
  {id:1,name:'Milk',numberInStock:5},
  {id:1,name:'Sugar',numberInStock:5},
];


 constructor() { }

 public getProducts()
{
  return this.products;
}

}