import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductsComponent } from './add-products/add-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeproductsComponent } from '../productlist/homeproducts/homeproducts.component';


@NgModule({
  declarations: [AddProductsComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
