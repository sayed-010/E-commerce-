import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink,RouterLinkActive} from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { CategoriesComponent } from './Categories/Categories.component';

import { AdSliderComponent } from "./ad-slider/ad-slider.component";


import { MenTshirtComponent } from "./men/men-tshirt/men-tshirt.component";
import { MenShirtsComponent } from "./men/MenShirts/MenShirts.component";
import { MenShoesComponent } from "./men/men-shoes/men-shoes.component";
import { MenPantsComponent } from "./men/men-pants/men-pants.component";

import { WomenPantsComponent } from "./women/women-pants/women-pants.component";
import { WomenShirtsComponent } from "./women/women-shirts/women-shirts.component";
import { WomenShoesComponent } from "./women/women-shoes/women-shoes.component";
import { WomenTshirtsComponent } from "./women/women-tshirts/women-tshirts.component";

import { KidsPantsComponent } from "./kids/kids-pants/kids-pants.component";
import { KidsShirtsComponent } from "./kids/kids-shirts/kids-shirts.component";
import { KidsTshirtsComponent } from "./kids/kids-tshirts/kids-tshirts.component";
import { KidsShoesComponent } from "./kids/kids-shoes/kids-shoes.component";

import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FooterComponent,
    CategoriesComponent,
    AdSliderComponent,
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
    AboutComponent,
    NavbarComponent,
  ]
})
export class AppComponent {


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

  currentIndex = 0;
  autoSlideInterval!: ReturnType<typeof setInterval>;  //

  constructor() {
    this.startAutoSlide();
  }

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
  // categories  -->

pathLogo:string = 'assets/images/logo.jpg'

}



