import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailDtoComponent } from './components/carDetailDto/carDetailDto.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarDetailDtoComponent},
  {path:"carDetailDto",component:CarDetailDtoComponent},
  {path:"carDetailDto/brand/:brandId",component:CarDetailDtoComponent},
  {path:"carDetailDto/color/:colorId",component:CarDetailDtoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
