import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class CheckoutComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cartItems: any  = [];
  total: number = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any = {
    name: '',
    email: '',
    address: '',
    phone: '',
  };

  constructor(private cartService: CartService, private router: Router) {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCart(); // t method to get cart items
    this.calculateTotal();
  }

  calculateTotal() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.total = this.cartItems.reduce((sum: any, item: { price: any; }) => sum + item.price, 0);
  }

  submitOrder() {

    console.log('Order submitted:', { user: this.user, items: this.cartItems });


    this.cartService.clearCart();
    if (this.user.name && this.user.phone) {
      // هنا يمكنك إضافة المنطق الخاص بك لمعالجة الطلب
      console.log('Order submitted:', this.user);
      alert('تم تقديم الطلب بنجاح!');
    } else {
      // استخدم markAllAsTouched للإشارة إلى الحقول الفارغة
      alert('يرجى ملء جميع الحقول المطلوبة.');
    }

    this.router.navigate(['/visa-application']);
  }


}
