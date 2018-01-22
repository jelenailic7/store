import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router/';
import { ProductsService } from '../../service/products.service';
import { BuyersService } from '../../service/buyers.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

product: any = {};
buyers: any[] = [];
selectBuyerId: number;


  constructor(private productsService:ProductsService, private route: ActivatedRoute, private buyersService: BuyersService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=> {
    this.product = this.productsService.getProductbyId(+params['id']);
  });
    this.buyersService.getBuyers().subscribe(data =>{
    this.buyers = data; 
    });
}

public buyerPurchase(product) {
  if(this.selectBuyerId){
    this.buyersService.buyerPurchase(product, this.selectBuyerId);
    this.router.navigate(['/products']);
  } else {
    alert('You need to select a customer');
  }
}

}

