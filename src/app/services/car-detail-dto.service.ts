import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDtoResponseModel } from '../models/carDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl='https://localhost:44326/api/cars/getcardetail';
  constructor(private httpClient:HttpClient) { }
  getCarDetails():Observable<CarDetailDtoResponseModel> {
   return this.httpClient.get<CarDetailDtoResponseModel>(this.apiUrl);
  }
}
