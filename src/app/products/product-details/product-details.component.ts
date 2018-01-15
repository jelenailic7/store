import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { ProductsService } from '../../service/products.service';
import { Product } from'../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product:Product;

  constructor(private productService:ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); //activated route in action / angular docs

    this.product = this.productService.getProductbyId(id);
  }

}
