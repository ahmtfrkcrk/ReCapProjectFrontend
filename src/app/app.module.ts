import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailDtoComponent } from './components/carDetailDto/carDetailDto.component';
import { RentalDetailDtoComponent } from './components/rentalDetailDto/rentalDetailDto.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { FilterPipeBrandPipe } from './pipes/filter-pipe-brand.pipe';
import { FilterPipeColorPipe } from './pipes/filter-pipe-color.pipe';
import { FilterPipeCarPipe } from './pipes/filter-pipe-car.pipe';

import { ToastrModule } from 'ngx-toastr';
import { RentalComponent } from './components/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarDetailDtoComponent,
    RentalDetailDtoComponent,
    NaviComponent,
    CarImageComponent,
    CarComponent,
    FilterPipeBrandPipe,
    FilterPipeColorPipe,
    FilterPipeCarPipe,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
