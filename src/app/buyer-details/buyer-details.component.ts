import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BuyersService } from '../service/buyers.service';
import { Buyer } from '../models/buyer';



@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})
export class BuyerDetailsComponent implements OnInit {

buyer: Buyer;


constructor(private buyersService: BuyersService, private route: ActivatedRoute) {}

  ngOnInit()  {
    let id = +this.route.snapshot.paramMap.get('id');
    this.buyer = this.buyersService.getBuyer(id);
}

}