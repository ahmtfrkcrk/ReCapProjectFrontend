import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDtoResponseModel } from '../models/rentalDetailDtoResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalDetailDtoService {
  apiUrl = 'https://localhost:44326/api/rentals/getrentaldetail';
  constructor(private httpClient: HttpClient) {}

  getRentalDetails(): Observable<RentalDetailDtoResponseModel> {
    return this.httpClient.get<RentalDetailDtoResponseModel>(this.apiUrl);
  }
}
 