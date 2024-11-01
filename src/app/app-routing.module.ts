import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MenShirtsComponent } from './men/MenShirts/MenShirts.component';
import { CategoriesComponent } from './Categories/Categories.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { VisaApplicationComponent } from './visa-application/visa-application.component';
const routes: Routes = [
  {path:'home', component:AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/categories' },
  { path: 'MenShirts', component: MenShirtsComponent },
  { path: 'categories', component: CategoriesComponent },
  {path: 'cart' , component: CartComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: 'visa-application', component: VisaApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
