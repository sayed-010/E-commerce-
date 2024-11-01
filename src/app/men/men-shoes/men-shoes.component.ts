import { Component , HostListener} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../../product-details/product-details.component';


interface Product {
  id:  number;
  name: string;
  imageUrl: string;
  price: number;
  color: string;
  size: string;
  description: string;
}
interface PriceRange {
  label: string;
  min: number;
  max: number;
}
interface ColorOption {
  name: string;
  hex: string; // Color in hexadecimal format
}

@Component({
  selector: 'app-men-shoes',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,ProductDetailsComponent, CommonModule],
  templateUrl: './men-shoes.component.html',
  styleUrl: './men-shoes.component.css'
})
export class MenShoesComponent {
  products: Product[] = [
    { id: 1, name: 'Shoes 1', imageUrl: 'assets/images/men/men-shoes/man-shoes-4.jpeg', price: 25, color: 'Black', size: 'M' ,description: 'A stylish mens Shoes.'},
    { id: 2,name: 'Shoes 2', imageUrl: 'assets/images/men/men-shoes/man-shoes-5.jpeg', price: 90, color: 'Blue', size: 'L',description: 'A stylish mens Shoes.' },
    { id: 3,name: 'Shoes 3', imageUrl: 'assets/images/men/men-shoes/man-shoes-6.jpeg', price: 150, color: 'Pink', size: 'S',description: 'A stylish mens Shoes.' },
    { id: 4,name: 'Shoes 4', imageUrl: 'assets/images/men/men-shoes/man-shoes-7.jpeg', price: 50, color: 'Yellow', size: 'XL',description: 'A stylish mens Shoes.' },
    { id: 5,name: 'Shoes 5', imageUrl: 'assets/images/men/men-shoes/man-shoes-8.jpeg', price: 200, color: 'Gray', size: 'M',description: 'A stylish mens Shoes.' },
    { id: 6,name: 'Shoes 6', imageUrl: 'assets/images/men/men-shoes/man-shoes-9.jpeg', price: 85, color: 'Black', size: 'L' ,description: 'A stylish mens Shoes.'},
    { id: 7,name: 'Shoes 7', imageUrl: 'assets/images/men/men-shoes/man-shoes-10.jpeg', price: 300, color: 'Blue', size: 'XL',description: 'A stylish mens Shoes.' },
    { id: 8,name: 'Shoes 8', imageUrl: 'assets/images/men/men-shoes/man-shoes-11.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish mens Shoes.' },
    { id: 9,name: 'Shoes 9', imageUrl: 'assets/images/men/men-shoes/man-shoes-12.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish mens Shoes.' },
    { id: 10,name: 'Shoes 10', imageUrl: 'assets/images/men/men-shoes/man-shoes-13.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish mens Shoes.' },
    { id: 11,name: 'Shoes 11', imageUrl: 'assets/images/men/men-shoes/man-shoes-14.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish mens Shoes.' },
    { id: 12,name: 'Shoes 12', imageUrl: 'assets/images/men/men-shoes/man-shoes-15.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish mens Shoes.' },
    { id: 13,name: 'Shoes 13', imageUrl: 'assets/images/men/men-shoes/man-shoes-16.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish mens Shoes.' },
    { id: 14,name: 'Shoes 14', imageUrl: 'assets/images/men/men-shoes/man-shoes-17.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish mens Shoes.' },
    { id: 15,name: 'Shoes 15', imageUrl: 'assets/images/men/men-shoes/man-shoes-18.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish mens Shoes.' },


    ];



  filteredProducts: Product[] = [];
  priceRanges: PriceRange[] = [
    { label: '$0 - $25', min: 0, max: 25 },
    { label: '$26 - $50', min: 26, max: 50 },
    { label: '$51 - $100', min: 51, max: 100 },
    { label: '$101 - $200', min: 101, max: 200 },
  ];

  colors: ColorOption[] = [
    { name: 'Black', hex: '#000000' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Pink', hex: '#FF69B4' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Gray', hex: '#808080' },
  ];

  selectedPriceRanges: PriceRange[] = [];
  selectedColors: string[] = [];
  selectedSizes: string[] = [];

  sizes: string[] = ['S', 'M', 'L', 'XL'];

  showFilter: boolean = false;
  isSmallScreen: boolean = false;

  ngOnInit(): void {
    this.isSmallScreen = window.innerWidth < 1024;
    this.filteredProducts = this.products; // Initially show all products
    this.filterProducts(); // Apply filters initially
  }

  updatePriceRange(): void {
    this.filterProducts(); // Update filters whenever the price range changes
  }
  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const isPriceMatched = this.selectedPriceRanges.length === 0 ||
        this.selectedPriceRanges.some(range => product.price >= range.min && product.price <= range.max);
      const isColorMatched = this.selectedColors.length === 0 || this.selectedColors.includes(product.color);
      const isSizeMatched = this.selectedSizes.length === 0 || this.selectedSizes.includes(product.size);

      return isPriceMatched && isColorMatched && isSizeMatched;
    });
  }


  togglePrice(range: PriceRange): void {
    const index = this.selectedPriceRanges.indexOf(range);
    if (index > -1) {
      this.selectedPriceRanges.splice(index, 1); // Remove price range filter
    } else {
      this.selectedPriceRanges.push(range); // Add price range filter
    }
    this.filterProducts();
  }

  toggleColor(color: string): void {
    const index = this.selectedColors.indexOf(color);
    if (index > -1) {
      this.selectedColors.splice(index, 1); // Remove color filter
    } else {
      this.selectedColors.push(color); // Add color filter
    }
    this.filterProducts();
  }

  toggleSize(size: string): void {
    const index = this.selectedSizes.indexOf(size);
    if (index > -1) {
      this.selectedSizes.splice(index, 1); // Remove size filter
    } else {
      this.selectedSizes.push(size); // Add size filter
    }
    this.filterProducts();
  }

  constructor(private router: Router) { }
  viewDetails(productId: number): void {
    this.router.navigate([`/product-list`, productId]);
  }

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth < 1024;
  }
}
