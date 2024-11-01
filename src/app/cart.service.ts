import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  constructor() {
    this.loadCart();
  }

  // الدالة الصحيحة هي getCart وليس getCartItems
  getCart(): Product[] {
    this.loadCart();
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
    this.saveCart();
  }

  updateCart(newCart: Product[]): void {
    this.cart = newCart;
    this.saveCart();
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart(): void {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }
}
