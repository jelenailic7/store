import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Array<Product>;

  constructor(private productsService: ProductsService) { 
  this.products = this.productsService.getProducts();
}
  ngOnInit() {
  }



}
