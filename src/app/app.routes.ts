import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './Categories/Categories.component';
import { MenShirtsComponent } from './men/MenShirts/MenShirts.component';
import { MenTshirtComponent } from './men/men-tshirt/men-tshirt.component';
import { MenPantsComponent } from './men/men-pants/men-pants.component';
import { MenShoesComponent } from './men/men-shoes/men-shoes.component';
import { WomenShirtsComponent } from './women/women-shirts/women-shirts.component';
import { WomenTshirtsComponent } from './women/women-tshirts/women-tshirts.component';
import { WomenPantsComponent } from './women/women-pants/women-pants.component';
import { WomenShoesComponent } from './women/women-shoes/women-shoes.component';
import { KidsShirtsComponent } from './kids/kids-shirts/kids-shirts.component';
import { KidsTshirtsComponent } from './kids/kids-tshirts/kids-tshirts.component';
import { KidsPantsComponent } from './kids/kids-pants/kids-pants.component';
import { KidsShoesComponent } from './kids/kids-shoes/kids-shoes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { VisaApplicationComponent } from './visa-application/visa-application.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Categories', component: CategoriesComponent },
  { path: 'Categories/MenShirts', component: MenShirtsComponent },
  { path: 'Categories/MenTshirt', component: MenTshirtComponent },
  { path: 'Categories/MenPants', component: MenPantsComponent },
  { path: 'Categories/MenShoes', component: MenShoesComponent },
  { path: 'Categories/WomenShirts', component: WomenShirtsComponent },
  { path: 'Categories/WomenTshirts', component: WomenTshirtsComponent },
  { path: 'Categories/WomenPants', component: WomenPantsComponent },
  { path: 'Categories/WomenShoes', component: WomenShoesComponent },
  { path: 'Categories/KidsShirts', component: KidsShirtsComponent },
  { path: 'Categories/KidsTshirts', component: KidsTshirtsComponent },
  { path: 'Categories/KidsPants', component: KidsPantsComponent },
  { path: 'Categories/KidsShoes', component: KidsShoesComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'visa-application', component: VisaApplicationComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
