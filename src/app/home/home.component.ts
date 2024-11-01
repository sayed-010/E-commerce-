import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink,RouterLinkActive, Router} from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { MenTshirtComponent } from "../men/men-tshirt/men-tshirt.component";
import { MenShirtsComponent } from "../men/MenShirts/MenShirts.component";
import { MenShoesComponent } from "../men/men-shoes/men-shoes.component";
import { MenPantsComponent } from "../men/men-pants/men-pants.component";

import { WomenPantsComponent } from "../women/women-pants/women-pants.component";
import { WomenShirtsComponent } from "../women/women-shirts/women-shirts.component";
import { WomenShoesComponent } from "../women/women-shoes/women-shoes.component";
import { WomenTshirtsComponent } from "../women/women-tshirts/women-tshirts.component";

import { KidsPantsComponent } from "../kids/kids-pants/kids-pants.component";
import { KidsShirtsComponent } from "../kids/kids-shirts/kids-shirts.component";
import { KidsTshirtsComponent } from "../kids/kids-tshirts/kids-tshirts.component";
import { KidsShoesComponent } from "../kids/kids-shoes/kids-shoes.component";

interface Product {
  id: number,
  name: string,
  price: string,
  imageUrl: string,

}

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,

    MenTshirtComponent,
    MenShirtsComponent,
    MenShoesComponent,
    MenPantsComponent,

    WomenPantsComponent,
    WomenShirtsComponent,
    WomenShoesComponent,
    WomenTshirtsComponent,

    KidsPantsComponent,
    KidsShirtsComponent,
    KidsTshirtsComponent,
    KidsShoesComponent,
  ]
})
export class HomeComponent {
  title = 'angularproject';
  isMenuOpen = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logoPath: string = 'assets/images/logo.jpg';

// end navbar --->

  ads = [
    { image: 'assets/images/ad1.jpg' },
    { image: 'assets/images/ad2.jpg' },
    { image: 'assets/images/ad4.jpg' },
  ];
  products: Product[] = [
    {
      id: 1,
    name: 'shirts',
    price: '100',
    imageUrl: 'assets/images/alahly.jpg'
    },
    {
      id: 2,
      name: 'shirts',
      price: '100',
      imageUrl: 'assets/images/barca-shirt.jpg'
    },
    {
      id: 3,
      name: 'shirts',
      price: '100',
      imageUrl: 'assets/images/jacket4.jpg'
    },
    {
      id: 4,
      name: 'shirts',
      price: '100',
      imageUrl: 'assets/images/jacket.jpg'
    },
    {
      id: 5,
      name: 'Nike',
      price: '199',
      imageUrl: 'assets/images/boots2.jpg'
    },
    {
      id: 6,
      name: 'Shoes',
      price: '100',
      imageUrl: 'assets/images/boots3.jpg'
    },
    {
      id: 7,
      name: 'Shoes',
      price: '299',
      imageUrl: 'assets/images/boots4.jpg'
    },
    {
      id: 8,
      name: 'Shoes',
      price: '399',
      imageUrl: 'assets/images/nikeboots.jpg'
    },
    {
      id: 9,
      name: 'shirts',
      price: '100',
      imageUrl: 'assets/images/spain.jpg'
    },
    {
      id: 10,
      name: 'shirts',
      price: '100',
      imageUrl: 'assets/images/real-shirt.jpg'
    },
    {
      id: 11,
      name: 'shirts',
      price: '100',
      imageUrl: 'assets/images/jacke3.jpg'
    },
    {
      id: 12,
      name: 'boots',
      price: '100',
      imageUrl: 'assets/images/nikeboots.jpg'
    },
  ]
  constructor(private router: Router) { }
  viewDetails(productId: number): void {
    this.router.navigate([`/product-details`, productId]);
  }

  currentIndex = 0;
  autoSlideInterval!: ReturnType<typeof setInterval>;  //



  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.ads.length) % this.ads.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
  // end slider --->
  pros = [
    {
      images: 'assets/images/ad1.jpeg',
    },
  ]
}
