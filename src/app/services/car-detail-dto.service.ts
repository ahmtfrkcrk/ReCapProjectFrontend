import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl='https://localhost:44326/api/cars/getcardetail';
  constructor(private httpClient:HttpClient) { }
  getCarDetails():Observable<ListResponseModel<CarDetailDto>> {
   return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl);
  }
}
