import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientServices } from './_services/http-client.services';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClientServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
