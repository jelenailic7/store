import { Injectable } from '@angular/core';
import { Buyer } from '../models/buyer';
import { Product } from '../models/product';

@Injectable()
export class BuyersService {


private buyers: Buyer [];
products: Product[];
product = {};



  constructor() {  

  
    this.buyers = [
      new Buyer (1,'Jelena','Ilic','jelena@example.com',new Product (1,'Milk',2)),
      new Buyer (2,'Tamara','Nikolic','tamara@example.com',new Product (1,'Milk',2)),
      new Buyer (3,'Martina','Ilic','martina@example.com',new Product (1,'Milk',2))
    ];
   }


  public getBuyers()
  {
    return this.buyers;
  }
  removeBuyer(buyer)
  {
    let index = this.buyers.indexOf(buyer);
    this.buyers.splice(index,1);
  }
  addBuyer(newBuyer)
  {
    this.buyers.push(newBuyer);
    return this.buyers;
  }
}