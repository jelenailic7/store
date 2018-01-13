import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { BuyersComponent } from './buyers/buyers.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuyersService } from './service/buyers.service';

const appRoutes: Routes = [
  {path:'buyers',component: BuyersComponent },
  {path:'products',component: ProductsComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    BuyersComponent,
    LayoutComponent,
    ProductsComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [BuyersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
