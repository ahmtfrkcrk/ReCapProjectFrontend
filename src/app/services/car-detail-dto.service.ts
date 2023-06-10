import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl='https://localhost:44326/api/';
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetailDto>> {
    let newPath=this.apiUrl+"cars/getcardetail";
   return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>> {
    let newPath=this.apiUrl+"cars/getcardetailsbybrand?brandid="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
   }
}
