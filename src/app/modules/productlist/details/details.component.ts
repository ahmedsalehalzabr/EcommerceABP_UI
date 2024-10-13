import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDto, ProductsService } from '@proxy/products';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  product: ProductDto | undefined;
  productId: number | undefined;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // استخراج معرف المنتج من رابط الصفحة
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // الحصول على الـ id من الرابط

      if (this.productId) {
        // استدعاء خدمة الحصول على المنتج حسب المعرف
        this.productService.getProduct(this.productId).subscribe(
          (response) => {
            this.product = response;
          },
          (error) => {
            console.error('Error fetching product:', error);
          }
        );
      }
    });
  }
}