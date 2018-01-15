import { Injectable } from '@angular/core';
import { Buyer } from '../models/buyer';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/find';



@Injectable()
export class BuyersService {
id;
private buyers: Buyer[] = [

  {id:1,firstName:'Jelena',lastName:'Ilic',email:'jelena@example.com',products: [{ name : 'Milk' },{ name : 'Sugar' }]},
  {id:2,firstName:'Tamara',lastName:'Nikolic',email:'tamara@example.com',products: [{ name : 'Milk' },{ name : 'Sugar' }]},
  {id:3,firstName:'Martina',lastName:'Ilic',email:'martina@example.com',products: [{ name : 'Milk' },{ name : 'Sugar' }]}
 ];





  constructor(private httpClient: HttpClient) {}


  public getBuyers()
  {
    //return this.buyers;
    return this.httpClient.get<Buyer[]>('http://localhost:8000/buyers.php');
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
  return this.getBuyers().find(buyer => buyer['id'] == id);
  }

}