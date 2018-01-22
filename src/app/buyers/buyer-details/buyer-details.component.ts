import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { BuyersService } from '../../service/buyers.service';
import { Buyer } from '../../models/buyer';



@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})
export class BuyerDetailsComponent implements OnInit {

buyer:Buyer;

constructor(private buyersService: BuyersService, private route: ActivatedRoute) {}

  ngOnInit()  {
    this.route.params.subscribe((params:Params)=> {
    this.buyer = this.buyersService.getBuyerById(+params['id']); // moze da prebacuje link sa linka ne mora nazad pa opet na link
  });
    
     
//    let id = + this.route.snapshot.paramMap.get('id');
//   this.buyer = this.buyersService.getBuyerById(id);
 
    }
  }