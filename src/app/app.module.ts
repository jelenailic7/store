import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { BuyersComponent } from './buyers/buyers.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuyersService } from './service/buyers.service';
import { BuyerDetailsComponent } from './buyers/buyer-details/buyer-details.component';
import { ProductsService } from './service/products.service';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const appRoutes: Routes = [
  { path:'buyers', component: BuyersComponent, 
     children: [
      { path: ':id', component: BuyerDetailsComponent }
     ]},
  { path:'products',component: ProductsComponent,
  children: [
    { path: ':id', component: ProductDetailsComponent }
   ]} 
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    BuyersComponent,
    ProductsComponent,
    BuyerDetailsComponent,
    FilterPipe,
    ProductDetailsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule


  ],

  providers: [BuyersService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
