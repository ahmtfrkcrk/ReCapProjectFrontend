import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailDtoComponent } from './components/carDetailDto/carDetailDto.component';
import { RentalDetailDtoComponent } from './components/rentalDetailDto/rentalDetailDto.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { PayComponent } from './components/pay/pay.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:"", pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/car/:carId",component:CarDetailDtoComponent},
  {path:"rentals",component:RentalDetailDtoComponent},
  {path:"rentals/add",component:RentalAddComponent,canActivate:[LoginGuard]},
  {path:"payment/pay",component:PayComponent},
  {path:"brands/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"colors/add",component:ColorAddComponent,canActivate:[LoginGuard]},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }