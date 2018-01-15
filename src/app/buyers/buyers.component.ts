import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../service/buyers.service';
import { Buyer } from '../models/buyer';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {


buyers: Array<Buyer>;
newBuyer = {};


  constructor(private buyersService: BuyersService) { 
    this.buyers = this.buyersService.getBuyers();
  }


public removeBuyer(buyer)
{
    let index = this.buyers.indexOf(buyer);
    this.buyers.splice(index,1); 
}
public addBuyer()
{
  this.buyersService.addBuyer(this.newBuyer);
} 


  ngOnInit() {
  }

}
