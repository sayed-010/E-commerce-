import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterOutlet,RouterLink } from '@angular/router'; // إضافة Router
import { CartService } from '../cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string; // إضافة حقل الوصف
  imageUrl: string; // إضافة رابط الصورة
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  products: Product[] = [
    { id: 1, name: 'shirts', price: 1500, description: 'A powerful laptop with high performance.', imageUrl: 'assets/images/alahly.jpg' },
    { id: 2, name: 'shirts', price: 1200, description: 'A high-end smartphone with great features.', imageUrl: 'assets/images/barca-shirt.jpg' },
    { id: 3, name: 'Jackets', price: 800, description: 'A lightweight tablet for everyday use.', imageUrl: 'assets/images/jacket4.jpg' },
    { id: 4, name: 'Jackets', price: 800, description: 'A lightweight tablet for everyday use.', imageUrl: 'assets/images/jacket.jpg' },
    { id: 5, name: 'boots', price: 800, description: 'A lightweight tablet for everyday use.', imageUrl: 'assets/images/boots2.jpg' },
    { id: 6, name: 'boots', price: 800, description: 'A lightweight tablet for everyday use.', imageUrl: 'assets/images/boots3.jpg' },
    { id: 7, name: 'boots', price: 800, description: 'A lightweight tablet for everyday use.', imageUrl: 'assets/images/boots4.jpg' },
    { id: 8, name: 'boots', price: 800, description: 'A lightweight tablet for everyday use.', imageUrl: 'assets/images/nikeboots.jpg' },
    { id: 9, name: 'shirts', price: 800, description: 'A lightweight tablet for everyday use.', imageUrl: 'assets/images/spain.jpg' },
    { id: 10, name: 'shirts', price: 800, description: 'A lightweight tablet for everyday use.', imageUrl: 'assets/images/real-shirt.jpg' },
    { id: 11, name: 'jacket', price: 800, description: 'A lightweight tablet for everyday use.', imageUrl: 'assets/images/jacke3.jpg' },
    { id: 12, name: 'boots', price: 800, description: 'A lightweight tablet for everyday use.', imageUrl: 'assets/images/nikeboots.jpg' },
  ];

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) { } // إضافة Router

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    const foundProduct = this.products.find((p) => p.id === productId);

    if (foundProduct) {
      this.product = foundProduct;
    } else {
      console.error('Product not found');
      this.router.navigate(['/404']); // إعادة التوجيه إلى صفحة الخطأ
    }
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product); // يجب إضافة المنتج إلى الخدمة
      alert(`${this.product.name} has been added to your cart`);
    } else {
      alert('No product to add to cart');
    }
  }



  buyNow(): void {

    alert(`You are buying ${this.product.name}`);//+

    this.router.navigate(['cart', this.product.id])
  }



  addToCartAndNavigate(): void {
    if (this.product) {
      // إضافة المنتج إلى السلة
      this.cartService.addToCart(this.product);

      // عرض رسالة تأكيد
      alert(`${this.product.name} has been added to your cart`);

      // الانتقال إلى صفحة السلة
      this.router.navigate(['/cart']);
    } else {
      alert('Product not found');
    }
  }

}
