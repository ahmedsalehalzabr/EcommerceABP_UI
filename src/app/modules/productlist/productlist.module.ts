import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistRoutingModule } from './productlist-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeproductsComponent } from './homeproducts/homeproducts.component';


@NgModule({
  declarations: [HomeproductsComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    ProductlistRoutingModule
  ]
})
export class ProductlistModule { }
