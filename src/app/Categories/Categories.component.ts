import { Component, OnInit  } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MenShirtsComponent } from '../men/MenShirts/MenShirts.component';
import { MenTshirtComponent } from '../men/men-tshirt/men-tshirt.component';
import { MenPantsComponent } from '../men/men-pants/men-pants.component';
import { MenShoesComponent } from '../men/men-shoes/men-shoes.component';

import { WomenShirtsComponent } from '../women/women-shirts/women-shirts.component';
import { WomenTshirtsComponent } from '../women/women-tshirts/women-tshirts.component';
import { WomenPantsComponent } from '../women/women-pants/women-pants.component';
import { WomenShoesComponent } from '../women/women-shoes/women-shoes.component';

import { KidsShirtsComponent } from '../kids/kids-shirts/kids-shirts.component';
import { KidsTshirtsComponent } from '../kids/kids-tshirts/kids-tshirts.component';
import { KidsPantsComponent } from '../kids/kids-pants/kids-pants.component';
import { KidsShoesComponent } from '../kids/kids-shoes/kids-shoes.component';

import { ProductDetailsComponent } from '../product-details/product-details.component';
@Component({
  selector: 'app-Categories',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,

    MenShirtsComponent,
    MenTshirtComponent,
    MenPantsComponent,
    MenShoesComponent,

    WomenPantsComponent,
    WomenShirtsComponent,
    WomenShoesComponent,
    WomenTshirtsComponent,

    KidsPantsComponent,
    KidsShirtsComponent,
    KidsTshirtsComponent,
    KidsShoesComponent,

    ProductDetailsComponent,
  ],

  templateUrl: './Categories.component.html',
  styleUrl: './Categories.component.css',
})

export class CategoriesComponent implements OnInit {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  MenClothing: string = 'assets/images/men/man-1.jpeg';
  WemenClothing: string = 'assets/images/women/women-1.jpeg';





  categoryName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
}
