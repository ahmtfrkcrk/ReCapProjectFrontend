import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailDtoComponent } from './components/carDetailDto/carDetailDto.component';

const routes: Routes = [
  {path:"", pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/car/:carId",component:CarDetailDtoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }