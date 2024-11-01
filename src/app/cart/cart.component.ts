import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from "@angular/common";

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [CommonModule, RouterLinkActive, RouterLink],
  standalone: true,
})

export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // تحميل المنتجات من الخدمة
    this.cartItems = this.cartService.getCart();

    // التأكد من أن المنتجات تم تحميلها
    console.log('Cart items loaded:', this.cartItems);

    // حساب المجموع
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, product) => sum + product.price, 0);
  }

  removeItem(index: number): void {
    const removedProduct = this.cartItems[index]; // حفظ المنتج المحذوف
    this.cartItems.splice(index, 1);
    this.calculateTotal();
    this.cartService.updateCart(this.cartItems); // تحديث العربة في الخدمة
    alert(`${removedProduct.name} has been removed from your cart.`); // تأكيد الإزالة
  }

  checkout(): void {
    alert('Thank you for shopping on our site!');
    this.cartService.clearCart(); // إفراغ العربة بعد الشراء
    this.router.navigate(['/checkout']);
  }
}
