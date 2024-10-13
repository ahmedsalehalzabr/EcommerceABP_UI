import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeproductsComponent } from './homeproducts/homeproducts.component';
import { permissionGuard } from '@abp/ng.core';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'product/:id',
    pathMatch: 'full',
    component: DetailsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeproductsComponent,
     // نقفل الدخول عبر الروت الرابط للذي ماعندة صلاحية
    canActivate:[permissionGuard],
    data: {
         requiredPolicy: 'EcommerceApp.Products.List', // policy key for your component
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductlistRoutingModule { }
