import { Injectable } from '@angular/core';
import { Buyer } from '../models/buyer';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class BuyersService {


products:  Array<Product>[];
private buyers: Buyer = [

  {id:1,firstName:'Jelena',lastName:'Ilic',email:'jelena@example.com',products: [{ name : 'Milk' },{ name : 'Sugar' }]},
  {id:2,firstName:'Tamara',lastName:'Nikolic',email:'tamara@example.com',products: [{ name : 'Milk' },{ name : 'Sugar' }]},
  {id:3,firstName:'Martina',lastName:'Ilic',email:'martina@example.com',products: [{ name : 'Milk' },{ name : 'Sugar' }]}
];





  constructor() {}


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
  getBuyer(id: number){
  return this.getBuyers().find(buyer => buyer.id == id);
  }

}