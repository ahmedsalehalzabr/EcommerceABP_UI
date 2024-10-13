import { Component, OnInit } from '@angular/core';
import { CategoriesService, CategoryDto } from '@proxy/categories';
import { ProductDto, ProductsService } from '@proxy/products';

@Component({
  selector: 'app-homeproducts',
  templateUrl: './homeproducts.component.html',
  styleUrl: './homeproducts.component.scss'
})
export class HomeproductsComponent implements OnInit {
  products : ProductDto[] = [];
  categories: CategoryDto[] = [];

  
ngOnInit(): void {
  this.productsService.getList({maxResultCount:100, skipCount:0}).subscribe((response) => {
    this.products = response.items;
  });
}

  constructor(
              private productsService: ProductsService,
              private categoriesService: CategoriesService,
              ) {}
}
