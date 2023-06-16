import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl='https://localhost:44326/';
  constructor(private httpClient:HttpClient) {
   }
   getCarImages():Observable<ListResponseModel<CarImage>> {
    let newPath=this.apiUrl+"api/carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getImagebyCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"api/carimages/getbycarid?carid="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getImagePath(carImage: string):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"uploads/images/="+carImage
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
