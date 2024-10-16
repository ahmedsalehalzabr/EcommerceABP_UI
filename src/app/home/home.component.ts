import { AuthService, PermissionService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { CategoriesService, CategoryDto } from '@proxy/categories';
import { ProductDto, ProductsService } from '@proxy/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit{
  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated
  }
  products : ProductDto[] = [];
  categories: CategoryDto[] = [];

  
ngOnInit(): void {
  this.productsService.getList({maxResultCount:100, skipCount:0}).subscribe((response) => {
    this.products = response.items;
  });
}

  constructor(private authService: AuthService,
              private productsService: ProductsService,
              private categoriesService: CategoriesService,
              ) {}

  login() {
    this.authService.navigateToLogin();
  }


}



