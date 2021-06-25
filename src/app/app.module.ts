import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { PriceDisplayComponent } from './price-display/price-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductImageComponent,
    ProductRowComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
