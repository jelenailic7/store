import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Product } from '../models/product';
import { FilterPipe } from '../pipes/filter.pipe';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Array<Product>;
searchTerm: string='';

  constructor(private productsService: ProductsService) { 
  this.products = this.productsService.getProducts();
}
  ngOnInit() {
  }



}
