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
newBuyer = {};


  constructor(private buyersService: BuyersService) { 
    this.buyersService.getBuyers().subscribe(data =>{
      this.buyers = data; 
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
    // A client-side or network error occurred. Handle it accordingly.
    console.log('An error occurred:', err.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
     console.log('Backend returned code ${err.status}, body was: ${err.error}');
         }
    }
  )
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
