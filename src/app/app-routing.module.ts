import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyersComponent } from './buyers/buyers.component';
import { BuyerDetailsComponent } from './buyers/buyer-details/buyer-details.component'
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/buyers',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailsComponent
      }
    ]
  },
  {
    path: 'buyers',
    component: BuyersComponent,
    children: [
      {
        path: ':id',
        component: BuyerDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ], 
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}