import { AuthService } from '@abp/ng.core';
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
  // products = [
  //   { id: 1, name: 'Product 1', description: 'This is product 1', price: 100, imageUrl: 'https://images.pexels.com/photos/28570315/pexels-photo-28570315/free-photo-of-young-woman-with-tablet-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 2, name: 'Product 2', description: 'This is product 2', price: 200, imageUrl: 'https://images.pexels.com/photos/28570315/pexels-photo-28570315/free-photo-of-young-woman-with-tablet-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 3, name: 'Product 3', description: 'This is product 3', price: 300, imageUrl: 'https://images.pexels.com/photos/28570315/pexels-photo-28570315/free-photo-of-young-woman-with-tablet-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 4, name: 'Product 1', description: 'This is product 1', price: 100, imageUrl: 'https://images.pexels.com/photos/28570315/pexels-photo-28570315/free-photo-of-young-woman-with-tablet-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 5, name: 'Product 2', description: 'This is product 2', price: 200, imageUrl: 'https://images.pexels.com/photos/28570315/pexels-photo-28570315/free-photo-of-young-woman-with-tablet-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 6, name: 'Product 1', description: 'This is product 1', price: 100, imageUrl: 'https://images.pexels.com/photos/28570315/pexels-photo-28570315/free-photo-of-young-woman-with-tablet-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  //   { id: 7, name: 'Product 2', description: 'This is product 2', price: 200, imageUrl: 'https://images.pexels.com/photos/28570315/pexels-photo-28570315/free-photo-of-young-woman-with-tablet-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  // ];
ngOnInit(): void {
  this.productsService.getList({maxResultCount:100, skipCount:0}).subscribe((response) => {
    this.products = response.items;
  });
}

  constructor(private authService: AuthService,private productsService: ProductsService,private categoriesService: CategoriesService,) {}

  login() {
    this.authService.navigateToLogin();
  }
}
