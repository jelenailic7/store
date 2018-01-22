import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../service/buyers.service';
import { Buyer } from '../models/buyer';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';




@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {


buyers: Array<Buyer>;

newBuyer: Buyer = new Buyer();


  constructor(private buyersService: BuyersService) { 
  
    this.buyersService.getBuyers().subscribe(data =>{
      this.buyers = data; 
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
    console.log('An error occurred:', err.error.message);
  } else {
    
     console.log('Backend returned code ${err.status}, body was: ${err.error}');
         }
    }
  )
}

public removeBuyer(buyer)
{
    this.buyersService.removeBuyer(buyer);
}
public addBuyer(newBuyer)
{
  this.buyersService.addBuyer(this.newBuyer).subscribe(
    newBuyer => {this.buyers.push(newBuyer);
  },
  (err: HttpErrorResponse)=>{
    alert(`Backend returned code ${err.status} with message: ${err.error}`);
  });
  this.newBuyer = new Buyer();
}



  ngOnInit() {
  }
   
  

}
