
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService, CategoryDto } from '@proxy/categories';
import { CreateUpdateProductDto, ProductsService } from '@proxy/products';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.scss'
})
export class AddProductsComponent {
  productForm: FormGroup;
  categories: CategoryDto[] = [];

  constructor(private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private router: Router,
    private formBuilder: FormBuilder) {
      
    this.buildForm(); 


  }
  ngOnInit(): void {
    this.categoriesService.getList({ maxResultCount: 100, skipCount: 0 }).subscribe(res => {
      this.categories = res.items;
    });
  }

  buildForm() {
    this.productForm = this.formBuilder.group({
      nameAr: new FormControl('', [Validators.required, Validators.maxLength(300)]),
      nameEn: new FormControl('', [Validators.required, Validators.maxLength(300)]),
      price: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      descriptionAr: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
      descriptionEn: new FormControl('', [Validators.required, Validators.maxLength(300)]),
      categoryId: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (!this.productForm.valid) {
      return;
    }
    let productDto = this.productForm.value as CreateUpdateProductDto;
    this.productsService.createProduct(productDto).subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/products');
      }
    });
  }


  back() {
    this.router.navigateByUrl('/products');
  }
}