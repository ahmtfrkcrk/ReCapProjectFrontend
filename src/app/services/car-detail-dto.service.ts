import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl='https://localhost:44326/api/';
  constructor(private httpClient:HttpClient) { }


  getCarById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycarid?id=" + carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  
}
