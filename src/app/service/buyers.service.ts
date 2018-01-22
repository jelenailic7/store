import { Injectable } from '@angular/core';
import { Buyer } from '../models/buyer';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsService } from './products.service';



@Injectable()
export class BuyersService {

private _buyersUrl = 'http://localhost:8000/buyers.php';
private _buyersAddUrl = 'http://localhost:8000/buyers-add.php';
newBuyerId: number;


private buyers: Buyer[] = [

  {id:1,firstName:'Jelena',lastName:'Ilic',email:'jelena@example.com',products: [{ name : 'Milk' },{ name : 'Sugar' }]},
  {id:2,firstName:'Tamara',lastName:'Nikolic',email:'tamara@example.com',products: [{ name : 'Milk' },{ name : 'Sugar' }]},
  {id:3,firstName:'Martina',lastName:'Ilic',email:'martina@example.com',products: [{ name : 'Milk' },{ name : 'Sugar' }]}
 ];



  constructor(private httpClient: HttpClient, private productService: ProductsService) {}


  public getBuyers()
  {
    //return this.buyers;
    return this.httpClient.get<Buyer[]>(this._buyersUrl);
  }
 public removeBuyer(buyer)
  {
    const index = this.buyers.indexOf(buyer);
    this.buyers.splice(index, 1);
     
  }
 public addBuyer(newBuyer)
  {
      this.newBuyerId = this.buyers.length +1;
    return this.httpClient.post(this._buyersAddUrl,{
      id: this.newBuyerId,
      firstName: newBuyer.firstName,
      lastName: newBuyer.lastName,
      email: newBuyer.email
});
      this.newBuyerId = this.newBuyerId++;

  }
   public getBuyerById(id: number){
  return this.buyers.find(buyer => buyer['id'] == id);
  }

  public buyerPurchase(product, id){
    let buyer = this.getBuyerById(id);
    buyer.products.push(product);
    this.productService.takeFromStock(product);
  }


}